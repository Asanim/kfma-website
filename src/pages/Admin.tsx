import { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Container,
    Grid,
    Card,
    CardContent,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Chip,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    useTheme,
    Tabs,
    Tab,
    Switch,
    FormControlLabel,
    Slider,
    Rating,
    Fab,
    Avatar,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    Divider,
    Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
    Add as AddIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
    Save as SaveIcon,
    Cancel as CancelIcon,
    Article as ArticleIcon,
    Image as ImageIcon,
    AttachMoney as MoneyIcon,
    School as SchoolIcon,
    Star as StarIcon,
    Schedule as ScheduleIcon,
    Settings as SettingsIcon,
    LocationOn as LocationIcon,
    Upload as UploadIcon,
    Email as EmailIcon,
    Phone as PhoneIcon,
    Facebook as FacebookIcon,
    Instagram as InstagramIcon,
    YouTube as YouTubeIcon,
} from '@mui/icons-material';
import { generateClient } from 'aws-amplify/data';
import { uploadData, getUrl } from 'aws-amplify/storage';
import type { Schema } from '../../amplify/data/resource';
import type { AdminFormData } from '../types/admin';

const client = generateClient<Schema>();

const AdminContainer = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing(4),
    fontFamily: 'Roboto, sans-serif'
}));

const AdminCard = styled(Card)(({ theme }) => ({
    marginBottom: theme.spacing(3),
    backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff',
    boxShadow: theme.shadows[4]
}));

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`admin-tabpanel-${index}`}
            aria-labelledby={`admin-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

const Admin = () => {
    const theme = useTheme();
    const [currentTab, setCurrentTab] = useState(0);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState<string>('');
    const [editingItem, setEditingItem] = useState<any>(null);
    const [uploadingFile, setUploadingFile] = useState(false);

    // Data states
    const [blogPosts, setBlogPosts] = useState<Schema['BlogPost']['type'][]>([]);
    const [galleryImages, setGalleryImages] = useState<Schema['GalleryImage']['type'][]>([]);
    const [pricingInfo, setPricingInfo] = useState<Schema['PricingInfo']['type'][]>([]);
    const [gearItems, setGearItems] = useState<Schema['GearItem']['type'][]>([]);
    const [testimonials, setTestimonials] = useState<Schema['Testimonial']['type'][]>([]);
    const [trainingSchedule, setTrainingSchedule] = useState<Schema['TrainingSchedule']['type'][]>([]);
    const [websiteSettings, setWebsiteSettings] = useState<Schema['WebsiteSettings']['type'][]>([]);
    const [locationInfo, setLocationInfo] = useState<Schema['LocationInfo']['type'][]>([]);
    const [contactInquiries, setContactInquiries] = useState<Schema['ContactInquiry']['type'][]>([]);

    // Form data states
    const [blogFormData, setBlogFormData] = useState<AdminFormData['blogPost']>({
        title: '',
        content: '',
        description: '',
        category: 'news',
        status: 'draft',
        competitionType: '',
        imageUrls: []
    });

    const [galleryFormData, setGalleryFormData] = useState<AdminFormData['galleryImage']>({
        title: '',
        description: '',
        imageUrl: '',
        category: '',
        isVisible: true
    });

    const [pricingFormData, setPricingFormData] = useState<AdminFormData['pricingInfo']>({
        type: 'membership',
        title: '',
        description: '',
        price: 0,
        features: [],
        isActive: true
    });

    const [gearFormData, setGearFormData] = useState<AdminFormData['gearItem']>({
        name: '',
        description: '',
        price: 0,
        category: 'uniform',
        sizes: [],
        isAvailable: true
    });

    const [testimonialFormData, setTestimonialFormData] = useState<AdminFormData['testimonial']>({
        studentName: '',
        content: '',
        rating: 5,
        isVisible: true
    });

    const [scheduleFormData, setScheduleFormData] = useState<AdminFormData['trainingSchedule']>({
        dayOfWeek: 'monday',
        startTime: '',
        endTime: '',
        className: '',
        instructor: '',
        location: '',
        ageGroup: '',
        skillLevel: '',
        isActive: true
    });

    const [settingsFormData, setSettingsFormData] = useState<AdminFormData['websiteSettings']>({
        key: '',
        value: '',
        category: 'general',
        description: ''
    });

    const [locationFormData, setLocationFormData] = useState<AdminFormData['locationInfo']>({
        name: '',
        address: '',
        phone: '',
        email: '',
        coordinates: '',
        operatingHours: '',
        isPrimary: false,
        isActive: true
    });

    // Load data
    const loadData = async () => {
        try {
            const [
                blogPostsResult,
                galleryResult,
                pricingResult,
                gearResult,
                testimonialsResult,
                scheduleResult,
                settingsResult,
                locationResult,
                inquiriesResult
            ] = await Promise.all([
                client.models.BlogPost.list(),
                client.models.GalleryImage.list(),
                client.models.PricingInfo.list(),
                client.models.GearItem.list(),
                client.models.Testimonial.list(),
                client.models.TrainingSchedule.list(),
                client.models.WebsiteSettings.list(),
                client.models.LocationInfo.list(),
                client.models.ContactInquiry.list()
            ]);

            setBlogPosts(blogPostsResult.data || []);
            setGalleryImages(galleryResult.data || []);
            setPricingInfo(pricingResult.data || []);
            setGearItems(gearResult.data || []);
            setTestimonials(testimonialsResult.data || []);
            setTrainingSchedule(scheduleResult.data || []);
            setWebsiteSettings(settingsResult.data || []);
            setLocationInfo(locationResult.data || []);
            setContactInquiries(inquiriesResult.data || []);
        } catch (error) {
            console.error('Error loading data:', error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setCurrentTab(newValue);
    };

    const handleOpenDialog = (section: string, item?: any) => {
        setCurrentSection(section);
        setEditingItem(item);
        
        // Reset form data based on section
        switch (section) {
            case 'blog':
                setBlogFormData(item ? {
                    title: item.title || '',
                    content: item.content || '',
                    description: item.description || '',
                    category: item.category || 'news',
                    status: item.status || 'draft',
                    competitionType: item.competitionType || '',
                    imageUrls: item.imageUrls || []
                } : {
                    title: '',
                    content: '',
                    description: '',
                    category: 'news',
                    status: 'draft',
                    competitionType: '',
                    imageUrls: []
                });
                break;
            // Add other cases as needed
        }
        
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
        setEditingItem(null);
        setCurrentSection('');
    };

    const handleFileUpload = async (file: File, path: string) => {
        setUploadingFile(true);
        try {
            const key = `admin/${path}/${Date.now()}-${file.name}`;
            await uploadData({
                key,
                data: file,
                options: {
                    accessLevel: 'guest'
                }
            });
            
            const url = await getUrl({ key, options: { accessLevel: 'guest' } });
            setUploadingFile(false);
            return url.url.toString();
        } catch (error) {
            console.error('Error uploading file:', error);
            setUploadingFile(false);
            throw error;
        }
    };

    const handleSaveBlogPost = async () => {
        try {
            const postData = {
                ...blogFormData,
                author: 'Master Mark',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                publishedAt: blogFormData.status === 'published' ? new Date().toISOString() : undefined
            };

            if (editingItem) {
                await client.models.BlogPost.update({
                    id: editingItem.id,
                    ...postData
                });
            } else {
                await client.models.BlogPost.create(postData);
            }
            
            await loadData();
            handleCloseDialog();
        } catch (error) {
            console.error('Error saving blog post:', error);
        }
    };

    const handleDeleteItem = async (model: keyof Schema, id: string) => {
        try {
            await client.models[model].delete({ id });
            await loadData();
        } catch (error) {
            console.error(`Error deleting ${model}:`, error);
        }
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'competitions': return '#EA0707';
            case 'grading': return '#28a745';
            case 'news': return '#007bff';
            case 'events': return '#fd7e14';
            default: return '#6c757d';
        }
    };

    const getStatusColor = (status: string) => {
        return status === 'published' ? '#28a745' : '#6c757d';
    };

    const tabLabels = [
        'Dashboard',
        'Blog Posts',
        'Gallery',
        'Pricing',
        'Gear',
        'Testimonials',
        'Schedule',
        'Settings',
        'Locations',
        'Inquiries'
    ];

    return (
        <AdminContainer>
            <Container maxWidth="xl">
                <Box sx={{ mb: 4, textAlign: 'center' }}>
                    <Typography
                        variant="h3"
                        component="h1"
                        sx={{
                            color: '#EA0707',
                            fontWeight: 'bold',
                            mb: 2,
                            fontFamily: 'Roboto, sans-serif'
                        }}
                    >
                        KFMA Admin Dashboard
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: theme.palette.text.secondary,
                            fontFamily: 'Roboto, sans-serif'
                        }}
                    >
                        Complete Website Content Management System
                    </Typography>
                </Box>

                <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
                    <Tabs 
                        value={currentTab} 
                        onChange={handleTabChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        sx={{
                            '& .MuiTab-root': {
                                fontFamily: 'Roboto, sans-serif',
                                fontWeight: 'medium'
                            }
                        }}
                    >
                        {tabLabels.map((label, index) => (
                            <Tab key={index} label={label} />
                        ))}
                    </Tabs>
                </Box>

                {/* Dashboard Tab */}
                <TabPanel value={currentTab} index={0}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={3}>
                            <AdminCard>
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <ArticleIcon sx={{ fontSize: 48, color: '#EA0707', mb: 1 }} />
                                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#EA0707' }}>
                                        {blogPosts.length}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Blog Posts
                                    </Typography>
                                </CardContent>
                            </AdminCard>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <AdminCard>
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <ImageIcon sx={{ fontSize: 48, color: '#28a745', mb: 1 }} />
                                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#28a745' }}>
                                        {galleryImages.length}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Gallery Images
                                    </Typography>
                                </CardContent>
                            </AdminCard>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <AdminCard>
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <EmailIcon sx={{ fontSize: 48, color: '#007bff', mb: 1 }} />
                                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#007bff' }}>
                                        {contactInquiries.filter(i => i.status === 'new').length}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        New Inquiries
                                    </Typography>
                                </CardContent>
                            </AdminCard>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <AdminCard>
                                <CardContent sx={{ textAlign: 'center' }}>
                                    <StarIcon sx={{ fontSize: 48, color: '#fd7e14', mb: 1 }} />
                                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#fd7e14' }}>
                                        {testimonials.filter(t => t.isVisible).length}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Active Testimonials
                                    </Typography>
                                </CardContent>
                            </AdminCard>
                        </Grid>
                    </Grid>

                    <AdminCard sx={{ mt: 3 }}>
                        <CardContent>
                            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                                Recent Contact Inquiries
                            </Typography>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Email</TableCell>
                                            <TableCell>Type</TableCell>
                                            <TableCell>Status</TableCell>
                                            <TableCell>Date</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {contactInquiries.slice(0, 5).map((inquiry) => (
                                            <TableRow key={inquiry.id}>
                                                <TableCell>{inquiry.name}</TableCell>
                                                <TableCell>{inquiry.email}</TableCell>
                                                <TableCell>
                                                    <Chip 
                                                        label={inquiry.inquiryType} 
                                                        size="small"
                                                        color="primary"
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    <Chip 
                                                        label={inquiry.status} 
                                                        size="small"
                                                        color={inquiry.status === 'new' ? 'error' : 'success'}
                                                    />
                                                </TableCell>
                                                <TableCell>{inquiry.createdAt}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </AdminCard>
                </TabPanel>

                {/* Blog Posts Tab */}
                <TabPanel value={currentTab} index={1}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                            Blog Posts Management
                        </Typography>
                        <Button
                            variant="contained"
                            startIcon={<AddIcon />}
                            onClick={() => handleOpenDialog('blog')}
                            sx={{
                                backgroundColor: '#EA0707',
                                '&:hover': { backgroundColor: '#c20606' }
                            }}
                        >
                            New Blog Post
                        </Button>
                    </Box>

                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Category</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Author</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {blogPosts.map((post) => (
                                    <TableRow key={post.id}>
                                        <TableCell>{post.title}</TableCell>
                                        <TableCell>
                                            <Chip
                                                label={post.category}
                                                size="small"
                                                sx={{
                                                    backgroundColor: getCategoryColor(post.category || ''),
                                                    color: 'white'
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Chip
                                                label={post.status}
                                                size="small"
                                                color={post.status === 'published' ? 'success' : 'default'}
                                            />
                                        </TableCell>
                                        <TableCell>{post.author}</TableCell>
                                        <TableCell>{post.createdAt}</TableCell>
                                        <TableCell>
                                            <IconButton
                                                size="small"
                                                onClick={() => handleOpenDialog('blog', post)}
                                                sx={{ color: '#007bff', mr: 1 }}
                                            >
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton
                                                size="small"
                                                onClick={() => handleDeleteItem('BlogPost', post.id)}
                                                sx={{ color: '#dc3545' }}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>

                {/* Add other tab panels for Gallery, Pricing, etc. */}
                
                {/* Blog Post Dialog */}
                <Dialog
                    open={dialogOpen && currentSection === 'blog'}
                    onClose={handleCloseDialog}
                    maxWidth="md"
                    fullWidth
                >
                    <DialogTitle>
                        {editingItem ? 'Edit Blog Post' : 'Create New Blog Post'}
                    </DialogTitle>
                    <DialogContent>
                        <Box sx={{ pt: 2 }}>
                            <TextField
                                fullWidth
                                label="Title"
                                value={blogFormData.title}
                                onChange={(e) => setBlogFormData({ ...blogFormData, title: e.target.value })}
                                sx={{ mb: 3 }}
                            />

                            <TextField
                                fullWidth
                                label="Description"
                                value={blogFormData.description}
                                onChange={(e) => setBlogFormData({ ...blogFormData, description: e.target.value })}
                                sx={{ mb: 3 }}
                            />

                            <Grid container spacing={2} sx={{ mb: 3 }}>
                                <Grid item xs={12} sm={4}>
                                    <FormControl fullWidth>
                                        <InputLabel>Category</InputLabel>
                                        <Select
                                            value={blogFormData.category}
                                            label="Category"
                                            onChange={(e) => setBlogFormData({ 
                                                ...blogFormData, 
                                                category: e.target.value as AdminFormData['blogPost']['category']
                                            })}
                                        >
                                            <MenuItem value="competitions">Competitions</MenuItem>
                                            <MenuItem value="grading">Grading</MenuItem>
                                            <MenuItem value="news">News</MenuItem>
                                            <MenuItem value="events">Events</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <FormControl fullWidth>
                                        <InputLabel>Status</InputLabel>
                                        <Select
                                            value={blogFormData.status}
                                            label="Status"
                                            onChange={(e) => setBlogFormData({ 
                                                ...blogFormData, 
                                                status: e.target.value as AdminFormData['blogPost']['status']
                                            })}
                                        >
                                            <MenuItem value="draft">Draft</MenuItem>
                                            <MenuItem value="published">Published</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        fullWidth
                                        label="Competition Type"
                                        value={blogFormData.competitionType}
                                        onChange={(e) => setBlogFormData({ ...blogFormData, competitionType: e.target.value })}
                                        helperText="For competition posts only"
                                    />
                                </Grid>
                            </Grid>

                            <TextField
                                fullWidth
                                label="Content (Markdown)"
                                multiline
                                rows={8}
                                value={blogFormData.content}
                                onChange={(e) => setBlogFormData({ ...blogFormData, content: e.target.value })}
                                helperText="Use Markdown formatting for rich text"
                                sx={{ mb: 3 }}
                            />

                            <Box sx={{ mb: 3 }}>
                                <Button
                                    variant="outlined"
                                    component="label"
                                    startIcon={<UploadIcon />}
                                    disabled={uploadingFile}
                                >
                                    Upload Images
                                    <input
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        hidden
                                        onChange={async (e) => {
                                            if (e.target.files) {
                                                const files = Array.from(e.target.files);
                                                const uploadPromises = files.map(file => 
                                                    handleFileUpload(file, 'blog')
                                                );
                                                try {
                                                    const urls = await Promise.all(uploadPromises);
                                                    setBlogFormData({
                                                        ...blogFormData,
                                                        imageUrls: [...blogFormData.imageUrls, ...urls]
                                                    });
                                                } catch (error) {
                                                    console.error('Error uploading images:', error);
                                                }
                                            }
                                        }}
                                    />
                                </Button>
                                {blogFormData.imageUrls.length > 0 && (
                                    <Box sx={{ mt: 2 }}>
                                        <Typography variant="body2" sx={{ mb: 1 }}>
                                            Uploaded Images:
                                        </Typography>
                                        {blogFormData.imageUrls.map((url, index) => (
                                            <Chip
                                                key={index}
                                                label={`Image ${index + 1}`}
                                                onDelete={() => setBlogFormData({
                                                    ...blogFormData,
                                                    imageUrls: blogFormData.imageUrls.filter((_, i) => i !== index)
                                                })}
                                                sx={{ mr: 1, mb: 1 }}
                                            />
                                        ))}
                                    </Box>
                                )}
                            </Box>
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog} startIcon={<CancelIcon />}>
                            Cancel
                        </Button>
                        <Button
                            onClick={handleSaveBlogPost}
                            variant="contained"
                            startIcon={<SaveIcon />}
                            sx={{
                                backgroundColor: '#EA0707',
                                '&:hover': { backgroundColor: '#c20606' }
                            }}
                        >
                            {editingItem ? 'Update' : 'Create'}
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </AdminContainer>
    );
};

export default Admin;
