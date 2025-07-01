import { useState } from 'react';
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
    useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
    Add as AddIcon,
    Edit as EditIcon,
    Delete as DeleteIcon,
    Save as SaveIcon,
    Cancel as CancelIcon,
    Article as ArticleIcon
} from '@mui/icons-material';

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

interface BlogPost {
    id: number;
    title: string;
    content: string;
    category: 'competitions' | 'grading' | 'news' | 'events';
    status: 'draft' | 'published';
    date: string;
    author: string;
}

const Admin = () => {
    const theme = useTheme();

    // Sample blog posts data
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
        {
            id: 1,
            title: 'KFMA Tournament Results 2024',
            content: 'Congratulations to all our students who participated in the recent tournament...',
            category: 'competitions',
            status: 'published',
            date: '2024-12-15',
            author: 'Master Mark'
        },
        {
            id: 2,
            title: 'December Belt Grading Results',
            content: 'We are proud to announce the results of our December belt grading...',
            category: 'grading',
            status: 'published',
            date: '2024-12-10',
            author: 'Master Mark'
        },
        {
            id: 3,
            title: 'New Year Training Schedule',
            content: 'Please note the updated training schedule for the new year...',
            category: 'news',
            status: 'draft',
            date: '2024-12-20',
            author: 'Master Mark'
        }
    ]);

    const [dialogOpen, setDialogOpen] = useState(false);
    const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        category: 'news' as BlogPost['category'],
        status: 'draft' as BlogPost['status']
    });

    const handleOpenDialog = (post?: BlogPost) => {
        if (post) {
            setEditingPost(post);
            setFormData({
                title: post.title,
                content: post.content,
                category: post.category,
                status: post.status
            });
        } else {
            setEditingPost(null);
            setFormData({
                title: '',
                content: '',
                category: 'news',
                status: 'draft'
            });
        }
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
        setEditingPost(null);
        setFormData({
            title: '',
            content: '',
            category: 'news',
            status: 'draft'
        });
    };

    const handleSavePost = () => {
        if (editingPost) {
            // Update existing post
            setBlogPosts(prev => prev.map(post =>
                post.id === editingPost.id
                    ? { ...post, ...formData, date: new Date().toISOString().split('T')[0] }
                    : post
            ));
        } else {
            // Create new post
            const newPost: BlogPost = {
                id: Math.max(...blogPosts.map(p => p.id)) + 1,
                ...formData,
                date: new Date().toISOString().split('T')[0],
                author: 'Master Mark'
            };
            setBlogPosts(prev => [...prev, newPost]);
        }
        handleCloseDialog();
    };

    const handleDeletePost = (id: number) => {
        setBlogPosts(prev => prev.filter(post => post.id !== id));
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

    return (
        <AdminContainer>
            <Container maxWidth="lg">
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
                        Manage blog posts, news, and announcements
                    </Typography>
                </Box>

                {/* Stats Cards */}
                <Grid container spacing={3} sx={{ mb: 4 }}>
                    <Grid xs={12} sm={6} md={3}>
                        <AdminCard>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <ArticleIcon sx={{ fontSize: 48, color: '#EA0707', mb: 1 }} />
                                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#EA0707' }}>
                                    {blogPosts.length}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Total Posts
                                </Typography>
                            </CardContent>
                        </AdminCard>
                    </Grid>
                    <Grid xs={12} sm={6} md={3}>
                        <AdminCard>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <ArticleIcon sx={{ fontSize: 48, color: '#28a745', mb: 1 }} />
                                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#28a745' }}>
                                    {blogPosts.filter(p => p.status === 'published').length}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Published
                                </Typography>
                            </CardContent>
                        </AdminCard>
                    </Grid>
                    <Grid xs={12} sm={6} md={3}>
                        <AdminCard>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <ArticleIcon sx={{ fontSize: 48, color: '#6c757d', mb: 1 }} />
                                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#6c757d' }}>
                                    {blogPosts.filter(p => p.status === 'draft').length}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Drafts
                                </Typography>
                            </CardContent>
                        </AdminCard>
                    </Grid>
                    <Grid xs={12} sm={6} md={3}>
                        <AdminCard>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <ArticleIcon sx={{ fontSize: 48, color: '#EA0707', mb: 1 }} />
                                <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#EA0707' }}>
                                    {blogPosts.filter(p => p.category === 'competitions').length}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Competitions
                                </Typography>
                            </CardContent>
                        </AdminCard>
                    </Grid>
                </Grid>

                {/* Blog Posts Management */}
                <AdminCard>
                    <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>
                                Blog Posts Management
                            </Typography>
                            <Button
                                variant="contained"
                                startIcon={<AddIcon />}
                                onClick={() => handleOpenDialog()}
                                sx={{
                                    backgroundColor: '#EA0707',
                                    '&:hover': { backgroundColor: '#c20606' },
                                    fontFamily: 'Roboto, sans-serif'
                                }}
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
                                        <TableCell sx={{ fontWeight: 'bold' }}>Author</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {blogPosts.map((post) => (
                                        <TableRow key={post.id}>
                                            <TableCell>
                                                <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                                                    {post.title}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={post.category}
                                                    size="small"
                                                    sx={{
                                                        backgroundColor: getCategoryColor(post.category),
                                                        color: 'white',
                                                        fontWeight: 'bold'
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={post.status}
                                                    size="small"
                                                    sx={{
                                                        backgroundColor: getStatusColor(post.status),
                                                        color: 'white',
                                                        fontWeight: 'bold'
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell>{post.date}</TableCell>
                                            <TableCell>{post.author}</TableCell>
                                            <TableCell>
                                                <IconButton
                                                    size="small"
                                                    onClick={() => handleOpenDialog(post)}
                                                    sx={{ color: '#007bff', mr: 1 }}
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton
                                                    size="small"
                                                    onClick={() => handleDeletePost(post.id)}
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

                {/* Create/Edit Dialog */}
                <Dialog
                    open={dialogOpen}
                    onClose={handleCloseDialog}
                    maxWidth="md"
                    fullWidth
                >
                    <DialogTitle>
                        {editingPost ? 'Edit Blog Post' : 'Create New Blog Post'}
                    </DialogTitle>
                    <DialogContent>
                        <Box sx={{ pt: 2 }}>
                            <TextField
                                fullWidth
                                label="Title"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                sx={{ mb: 3 }}
                            />

                            <Grid container spacing={2} sx={{ mb: 3 }}>
                                <Grid xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Category</InputLabel>
                                        <Select
                                            value={formData.category}
                                            label="Category"
                                            onChange={(e) => setFormData({ ...formData, category: e.target.value as BlogPost['category'] })}
                                        >
                                            <MenuItem value="competitions">Competitions</MenuItem>
                                            <MenuItem value="grading">Grading</MenuItem>
                                            <MenuItem value="news">News</MenuItem>
                                            <MenuItem value="events">Events</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid xs={12} sm={6}>
                                    <FormControl fullWidth>
                                        <InputLabel>Status</InputLabel>
                                        <Select
                                            value={formData.status}
                                            label="Status"
                                            onChange={(e) => setFormData({ ...formData, status: e.target.value as BlogPost['status'] })}
                                        >
                                            <MenuItem value="draft">Draft</MenuItem>
                                            <MenuItem value="published">Published</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>

                            <TextField
                                fullWidth
                                label="Content"
                                multiline
                                rows={6}
                                value={formData.content}
                                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            />
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog} startIcon={<CancelIcon />}>
                            Cancel
                        </Button>
                        <Button
                            onClick={handleSavePost}
                            variant="contained"
                            startIcon={<SaveIcon />}
                            sx={{
                                backgroundColor: '#EA0707',
                                '&:hover': { backgroundColor: '#c20606' }
                            }}
                        >
                            {editingPost ? 'Update' : 'Create'}
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </AdminContainer>
    );
};

export default Admin;
