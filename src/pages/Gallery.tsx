import { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Container,
    Grid,
    Card,
    CardMedia,
    Dialog,
    IconButton,
    useTheme,
    Fade
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
    Close as CloseIcon,
    ArrowBackIos,
    ArrowForwardIos
} from '@mui/icons-material';
const GalleryContainer = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
    fontFamily: 'Roboto, sans-serif'
}));
const CarouselContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    height: '70vh',
    overflow: 'hidden',
    borderRadius: theme.spacing(2),
    marginBottom: theme.spacing(6),
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }
}));
const CarouselNavButton = styled(IconButton)(() => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    zIndex: 3,
    '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.7)'
    }
}));
const GalleryCard = styled(Card)(({ theme }) => ({
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: theme.shadows[8]
    }
}));
const SectionTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    marginBottom: theme.spacing(4),
    color: '#EA0707',
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif'
}));
const Gallery = () => {
    const theme = useTheme();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    // All images from the kfma directory
    const allImages = [
        '11e7871d-9180-4b37-b484-9946f57b7190_edited.avif',
        '12f29b_031041a90ff34c618133bce229fddbd5~mv2.avif',
        '12f29b_05614dcb336e46888a42d5612ef59298~mv2.avif',
        '12f29b_05a22f50d696496dad013b5c26ee59d8~mv2.avif',
        '12f29b_0ae119209c524c188824e7a7440af2b5~mv2.avif',
        '12f29b_16d3aa9f3e5546de91424e3920b5c2d4~mv2.avif',
        '12f29b_2c05c65d13484f8f8cb6e8194836e779~mv2.avif',
        '12f29b_37573bec74014ad89680c38ab0b8d838~mv2.avif',
        '12f29b_40b66c43fa2542da9b6fc0abbce15657~mv2.avif',
        '12f29b_4778be0c95bd4bf0af26d185a79d989c~mv2.avif',
        '12f29b_51cf3577adb9435cbdf7329959ae7e38~mv2.avif',
        '12f29b_5b77fbb11f7d420a97007da13ba7d90a~mv2.avif',
        '12f29b_6f72835db92e439b9b849d584bd380d6~mv2.avif',
        '12f29b_7fc702abf8ae4e12903ac674a4e5a778~mv2.avif',
        '12f29b_8e2e21531b4c44159623c85341779884~mv2.avif',
        '12f29b_96ca7e71d40644f58d16c9239bc70bae~mv2.avif',
        '12f29b_994c5178e07449e19c3122602e3b849f~mv2.avif',
        '12f29b_a1fac0f393314995b291402cabf32c12~mv2.avif',
        '12f29b_a9366e1d53f647cab8b8bacbadd3a6c4~mv2.avif',
        '12f29b_c493b99f40294a13b0223e12d0e278af~mv2.avif',
        '12f29b_cd42df2add8944e2938301850ed7adfb~mv2.avif',
        '12f29b_dbf8f1400e6744b1add9012414e7bf4e~mv2.avif',
        '12f29b_e560defa4262472e94de8e33452c0ad2f000.avif',
        '12f29b_e65c9f87c16e4e41be98a142e36885e6~mv2.avif',
        '12f29b_eeb87105eca44f7995a3d532bd2623f4~mv2.avif',
        '12f29b_f4bb3baa172f403b99351c06806fd3f2~mv2.avif',
        '12f29b_fc43056862ca4f23963c9fe46364a268~mv2.avif',
        '237d598c-5469-4e11-af87-5dbf9238b124.avif',
        '45e6bce2-584e-4b0a-82a3-76a178a1cc48.avif',
        '51f5f5ba-8f8c-48db-808e-7fcc4e34808a_edited.avif',
        '766cb3d1-a2cb-436c-8330-61b4ffa72a9e_edited.avif',
        '8d6717ce-1e40-4bad-9690-754b2392f709.avif',
        '8fb34623-943e-4533-a7fa-31f3313dac72.avif',
        'a8baf146-4037-46a0-8c42-5e7e1ab3c7e6_edited.avif',
        'e201a7f8-f6d4-4af0-9252-35cd043c257b.avif',
        'e201a7f8-f6d4-4af0-9252-35cd043c257b_edited.avif'
    ];
    // Featured images for carousel (first 10 images)
    const carouselImages = allImages.slice(0, 10);
    useEffect(() => {
        // Auto-advance carousel
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [carouselImages.length]);
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    };
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    };
    const openImageDialog = (image: string, index: number) => {
        setSelectedImage(image);
        setSelectedIndex(index);
    };
    const closeImageDialog = () => {
        setSelectedImage(null);
    };
    const navigateImage = (direction: 'prev' | 'next') => {
        if (direction === 'prev') {
            setSelectedIndex(prev => prev > 0 ? prev - 1 : allImages.length - 1);
        } else {
            setSelectedIndex(prev => prev < allImages.length - 1 ? prev + 1 : 0);
        }
        setSelectedImage(allImages[selectedIndex]);
    };
    return (
        <GalleryContainer>
            <Container maxWidth="lg" sx={{ py: 4 }}>
                {/* Header */}
                <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            color: '#EA0707',
                            fontWeight: 'bold',
                            mb: 2,
                            fontFamily: 'Roboto, sans-serif'
                        }}
                    >
                        KFMA Gallery
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: theme.palette.text.secondary,
                            fontFamily: 'Roboto, sans-serif'
                        }}
                    >
                        Experience the journey of Korean Freestyle Martial Arts through our photo gallery
                    </Typography>
                </Box>
                {/* Carousel Section */}
                <CarouselContainer>
                    <Fade in={true} timeout={1000}>
                        <img
                            src={`/kfma/${carouselImages[currentSlide]}`}
                            alt={`KFMA Gallery Slide ${currentSlide + 1}`}
                        />
                    </Fade>
                    <CarouselNavButton
                        onClick={prevSlide}
                        sx={{ left: 16 }}
                    >
                        <ArrowBackIos />
                    </CarouselNavButton>
                    <CarouselNavButton
                        onClick={nextSlide}
                        sx={{ right: 16 }}
                    >
                        <ArrowForwardIos />
                    </CarouselNavButton>
                    {/* Carousel indicators */}
                    <Box sx={{
                        position: 'absolute',
                        bottom: 16,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: 1
                    }}>
                        {carouselImages.map((_, index) => (
                            <Box
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                sx={{
                                    width: 12,
                                    height: 12,
                                    borderRadius: '50%',
                                    backgroundColor: index === currentSlide ? 'white' : 'rgba(255,255,255,0.5)',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                            />
                        ))}
                    </Box>
                </CarouselContainer>
                {/* Gallery Grid */}
                <SectionTitle variant="h4">
                    Photo Gallery
                </SectionTitle>
                <Grid container spacing={3}>
                    {allImages.map((image, index) => (
                        <Grid xs={12} sm={6} md={4} lg={3} key={index}>
                            <GalleryCard onClick={() => openImageDialog(image, index)}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={`/kfma/${image}`}
                                    alt={`KFMA Photo ${index + 1}`}
                                    sx={{ objectFit: 'cover' }}
                                />
                            </GalleryCard>
                        </Grid>
                    ))}
                </Grid>
                {/* Image Dialog */}
                <Dialog
                    open={!!selectedImage}
                    onClose={closeImageDialog}
                    maxWidth="lg"
                    fullWidth
                    sx={{
                        '& .MuiDialog-paper': {
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                            overflow: 'hidden'
                        }
                    }}
                >
                    <Box sx={{ position: 'relative', textAlign: 'center' }}>
                        <IconButton
                            onClick={closeImageDialog}
                            sx={{
                                position: 'absolute',
                                top: 16,
                                right: 16,
                                backgroundColor: 'rgba(0,0,0,0.5)',
                                color: 'white',
                                zIndex: 1,
                                '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' }
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                        {selectedImage && (
                            <>
                                <img
                                    src={`/kfma/${selectedImage}`}
                                    alt="KFMA Gallery"
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '90vh',
                                        objectFit: 'contain'
                                    }}
                                />
                                <IconButton
                                    onClick={() => navigateImage('prev')}
                                    sx={{
                                        position: 'absolute',
                                        left: 16,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        backgroundColor: 'rgba(0,0,0,0.5)',
                                        color: 'white',
                                        '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' }
                                    }}
                                >
                                    <ArrowBackIos />
                                </IconButton>
                                <IconButton
                                    onClick={() => navigateImage('next')}
                                    sx={{
                                        position: 'absolute',
                                        right: 16,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        backgroundColor: 'rgba(0,0,0,0.5)',
                                        color: 'white',
                                        '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' }
                                    }}
                                >
                                    <ArrowForwardIos />
                                </IconButton>
                            </>
                        )}
                    </Box>
                </Dialog>
            </Container>
        </GalleryContainer>
    );
};
export default Gallery;
