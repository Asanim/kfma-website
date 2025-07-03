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
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    FormControlLabel,
    Switch,
    Avatar,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    styled,
    Alert,
    Snackbar
} from '@mui/material';
import {
    Add as AddIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
    Save as SaveIcon,
    Cancel as CancelIcon,
    Article as ArticleIcon,
    Photo as PhotoIcon,
    People as PeopleIcon,
    Settings as SettingsIcon,
    Schedule as ScheduleIcon,
    AttachMoney as MoneyIcon,
    LocationOn as LocationIcon,
    School as SchoolIcon,
    Upload as UploadIcon,
    CloudUpload as CloudUploadIcon
} from '@mui/icons-material';
import { useAmplifyAPI } from '../hooks/useAmplifyAPI';
import { getCurrentUser } from 'aws-amplify/auth';

// Styled components
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

const UploadBox = styled(Box)(({ theme }) => ({
    border: `2px dashed ${theme.palette.divider}`,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(4),
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'border-color 0.3s ease',
    '&:hover': {
        borderColor: '#EA0707',
    },
    '&.dragover': {
        borderColor: '#EA0707',
        backgroundColor: theme.palette.action.hover,
    }
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
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const AdminDashboard = () => {
    const theme = useTheme();
    const api = useAmplifyAPI();
    
    // State
    const [currentTab, setCurrentTab] = useState(0);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });

    // Blog Posts State
    const [blogPosts, setBlogPosts] = useState<any[]>([]);
    const [blogDialogOpen, setBlogDialogOpen] = useState(false);
    const [editingBlog, setEditingBlog] = useState<any>(null);
    const [blogForm, setBlogForm] = useState({
        title: '',
        content: '',
        description: '',
        category: 'news' as any,
        status: 'draft' as any,
        competitionType: '',
        imageUrls: [] as string[]
    });

    // Gallery State
    const [galleryImages, setGalleryImages] = useState<any[]>([]);
    const [galleryDialogOpen, setGalleryDialogOpen] = useState(false);
    const [uploadingImage, setUploadingImage] = useState(false);

    // Other states for different sections
    const [testimonials, setTestimonials] = useState<any[]>([]);
    const [pricing, setPricing] = useState<any[]>([]);
    const [gear, setGear] = useState<any[]>([]);
    const [schedule, setSchedule] = useState<any[]>([]);
    const [settings, setSettings] = useState<any[]>([]);
    const [locations, setLocations] = useState<any[]>([]);
    const [instructors, setInstructors] = useState<any[]>([]);
    const [carouselImages, setCarouselImages] = useState<any[]>([]);

    // Check authentication and admin status
    useEffect(() => {
        checkAdminStatus();
        loadAllData();
    }, []);

    const checkAdminStatus = async () => {
        try {
            const user = await getCurrentUser();
            // You would check if the user is in the admin group here
            // For now, we'll assume they are admin if authenticated
            setIsAdmin(true);
        } catch (error) {
            setIsAdmin(false);
        } finally {
            setLoading(false);
        }
    };

    const loadAllData = async () => {
        try {
            const [
                blogResponse,
                galleryResponse,
                testimonialsResponse,
                pricingResponse,
                gearResponse,
                scheduleResponse,
                settingsResponse,
                locationsResponse,
                instructorsResponse,
                carouselResponse
            ] = await Promise.all([
                api.listBlogPosts(),
                api.listGalleryImages(),
                api.listTestimonials(),
                api.listPricingInfo(),
                api.listGearItems(),
                api.listTrainingSchedule(),
                api.listWebsiteSettings(),
                api.listLocationInfo(),
                api.listInstructorInfo(),
                api.listCarouselImages()
            ]);

            setBlogPosts(blogResponse.data || []);
            setGalleryImages(galleryResponse.data || []);
            setTestimonials(testimonialsResponse.data || []);
            setPricing(pricingResponse.data || []);
            setGear(gearResponse.data || []);
            setSchedule(scheduleResponse.data || []);
            setSettings(settingsResponse.data || []);
            setLocations(locationsResponse.data || []);
            setInstructors(instructorsResponse.data || []);
            setCarouselImages(carouselResponse.data || []);
        } catch (error) {
            console.error('Error loading data:', error);
            showSnackbar('Error loading data', 'error');
        }
    };

    const showSnackbar = (message: string, severity: 'success' | 'error' = 'success') => {
        setSnackbar({ open: true, message, severity });
    };

    // Blog Post Functions
    const handleBlogSave = async () => {
        try {
            if (editingBlog) {
                await api.updateBlogPost(editingBlog.id, {
                    ...blogForm,
                    author: 'Master Mark'
                });
                showSnackbar('Blog post updated successfully');
            } else {
                await api.createBlogPost({
                    ...blogForm,
                    author: 'Master Mark'
                });
                showSnackbar('Blog post created successfully');
            }
            setBlogDialogOpen(false);
            resetBlogForm();
            loadAllData();
        } catch (error) {
            console.error('Error saving blog post:', error);
            showSnackbar('Error saving blog post', 'error');
        }
    };

    const handleBlogDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this blog post?')) {
            try {
                await api.deleteBlogPost(id);
                showSnackbar('Blog post deleted successfully');
                loadAllData();
            } catch (error) {
                console.error('Error deleting blog post:', error);
                showSnackbar('Error deleting blog post', 'error');
            }
        }
    };

    const resetBlogForm = () => {
        setBlogForm({
            title: '',
            content: '',
            description: '',
            category: 'news',
            status: 'draft',
            competitionType: '',
            imageUrls: []
        });
        setEditingBlog(null);
    };

    // Image Upload Functions
    const handleImageUpload = async (file: File, path: string) => {
        try {
            setUploadingImage(true);
            const uploadPath = await api.uploadImage(file, path);
            const imageUrl = await api.getImageUrl(uploadPath);
            return imageUrl;
        } catch (error) {
            console.error('Error uploading image:', error);
            showSnackbar('Error uploading image', 'error');
            throw error;
        } finally {
            setUploadingImage(false);
        }
    };

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, category: string) => {
        const file = event.target.files?.[0];
        if (file) {
            handleImageUpload(file, category);
        }
    };

    // Render functions for different tabs
    const renderBlogManagement = () => (
        <AdminCard>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                        Blog Posts Management
                    </Typography>
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={() => setBlogDialogOpen(true)}
                        sx={{ backgroundColor: '#EA0707', '&:hover': { backgroundColor: '#c20606' } }}
                    >
                        New Post
                    </Button>
                </Box>

                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>Title</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Category</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
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
                                            sx={{ backgroundColor: '#EA0707', color: 'white' }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            label={post.status}
                                            size="small"
                                            sx={{
                                                backgroundColor: post.status === 'published' ? '#28a745' : '#6c757d',
                                                color: 'white'
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell>{new Date(post.createdAt).toLocaleDateString()}</TableCell>
                                    <TableCell>
                                        <IconButton
                                            size="small"
                                            onClick={() => {
                                                setEditingBlog(post);
                                                setBlogForm({
                                                    title: post.title,
                                                    content: post.content,
                                                    description: post.description,
                                                    category: post.category,
                                                    status: post.status,
                                                    competitionType: post.competitionType || '',
                                                    imageUrls: post.imageUrls || []
                                                });
                                                setBlogDialogOpen(true);
                                            }}
                                            sx={{ color: '#007bff', mr: 1 }}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton
                                            size="small"
                                            onClick={() => handleBlogDelete(post.id)}
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
            </CardContent>
        </AdminCard>
    );

    const renderGalleryManagement = () => (
        <AdminCard>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                        Gallery Management
                    </Typography>
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={() => setGalleryDialogOpen(true)}
                        sx={{ backgroundColor: '#EA0707', '&:hover': { backgroundColor: '#c20606' } }}
                    >
                        Add Image
                    </Button>
                </Box>

                <ImageList cols={4} rowHeight={200}>
                    {galleryImages.map((image) => (
                        <ImageListItem key={image.id}>
                            <img
                                src={image.imageUrl}
                                alt={image.title}
                                loading="lazy"
                                style={{ objectFit: 'cover', height: '100%' }}
                            />
                            <ImageListItemBar
                                title={image.title}
                                subtitle={image.category}
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        onClick={() => {
                                            if (window.confirm('Delete this image?')) {
                                                api.deleteGalleryImage(image.id);
                                                loadAllData();
                                            }
                                        }}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </CardContent>
        </AdminCard>
    );

    // Other render functions would go here...

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Typography>Loading...</Typography>
            </Box>
        );
    }

    if (!isAdmin) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Typography>Access Denied. Admin privileges required.</Typography>
            </Box>
        );
    }

    return (
        <AdminContainer>
            <Container maxWidth="xl">
                <Box sx={{ mb: 4, textAlign: 'center' }}>
                    <Typography
                        variant="h3"
                        component="h1"
                        sx={{ color: '#EA0707', fontWeight: 'bold', mb: 2 }}
                    >
                        KFMA Admin Dashboard
                    </Typography>
                    <Typography variant="h6" sx={{ color: theme.palette.text.secondary }}>
                        Manage your website content
                    </Typography>
                </Box>

                <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
                    <Tabs value={currentTab} onChange={(_, newValue) => setCurrentTab(newValue)}>
                        <Tab icon={<ArticleIcon />} label="Blog Posts" />
                        <Tab icon={<PhotoIcon />} label="Gallery" />
                        <Tab icon={<PeopleIcon />} label="Testimonials" />
                        <Tab icon={<MoneyIcon />} label="Pricing" />
                        <Tab icon={<SchoolIcon />} label="Gear" />
                        <Tab icon={<ScheduleIcon />} label="Schedule" />
                        <Tab icon={<LocationIcon />} label="Locations" />
                        <Tab icon={<SettingsIcon />} label="Settings" />
                    </Tabs>
                </Box>

                <TabPanel value={currentTab} index={0}>
                    {renderBlogManagement()}
                </TabPanel>

                <TabPanel value={currentTab} index={1}>
                    {renderGalleryManagement()}
                </TabPanel>

                {/* Other TabPanels would go here... */}

                {/* Blog Dialog */}
                <Dialog open={blogDialogOpen} onClose={() => setBlogDialogOpen(false)} maxWidth="md" fullWidth>
                    <DialogTitle>
                        {editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}
                    </DialogTitle>
                    <DialogContent>
                        <Box sx={{ pt: 2 }}>
                            <TextField
                                fullWidth
                                label="Title"
                                value={blogForm.title}
                                onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                                sx={{ mb: 3 }}
                            />

                            <TextField
                                fullWidth
                                label="Description"
                                value={blogForm.description}
                                onChange={(e) => setBlogForm({ ...blogForm, description: e.target.value })}
                                sx={{ mb: 3 }}
                            />

                            <Grid container spacing={2} sx={{ mb: 3 }}>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Category</InputLabel>
                                        <Select
                                            value={blogForm.category}
                                            label="Category"
                                            onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value as any })}
                                        >
                                            <MenuItem value="competitions">Competitions</MenuItem>
                                            <MenuItem value="grading">Grading</MenuItem>
                                            <MenuItem value="news">News</MenuItem>
                                            <MenuItem value="events">Events</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Status</InputLabel>
                                        <Select
                                            value={blogForm.status}
                                            label="Status"
                                            onChange={(e) => setBlogForm({ ...blogForm, status: e.target.value as any })}
                                        >
                                            <MenuItem value="draft">Draft</MenuItem>
                                            <MenuItem value="published">Published</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>

                            {blogForm.category === 'competitions' && (
                                <TextField
                                    fullWidth
                                    label="Competition Type"
                                    value={blogForm.competitionType}
                                    onChange={(e) => setBlogForm({ ...blogForm, competitionType: e.target.value })}
                                    sx={{ mb: 3 }}
                                />
                            )}

                            <TextField
                                fullWidth
                                label="Content (Markdown)"
                                multiline
                                rows={8}
                                value={blogForm.content}
                                onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                                helperText="You can use Markdown formatting for rich text"
                            />
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => { setBlogDialogOpen(false); resetBlogForm(); }}>
                            Cancel
                        </Button>
                        <Button
                            onClick={handleBlogSave}
                            variant="contained"
                            sx={{ backgroundColor: '#EA0707', '&:hover': { backgroundColor: '#c20606' } }}
                        >
                            {editingBlog ? 'Update' : 'Create'}
                        </Button>
                    </DialogActions>
                </Dialog>

                {/* Snackbar for notifications */}
                <Snackbar
                    open={snackbar.open}
                    autoHideDuration={6000}
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                >
                    <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })}>
                        {snackbar.message}
                    </Alert>
                </Snackbar>
            </Container>
        </AdminContainer>
    );
};

export default AdminDashboard;
