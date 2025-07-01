import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  useTheme,
  Fade,
  IconButton,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Schedule as ScheduleIcon,
  YouTube as YouTubeIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  ArrowBackIos,
  ArrowForwardIos,
  LocationOn as LocationIcon,
  AttachMoney as MoneyIcon,
  Close as CloseIcon
} from '@mui/icons-material';

// Styled components
const FullScreenVideo = styled(Box)(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 9999,
  backgroundColor: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& video': {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
}));

const VideoBackgroundContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100vh',
  overflow: 'hidden',
  marginBottom: theme.spacing(6),
  '& video': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1
  }
}));

const VideoOverlay = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  zIndex: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
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

const CarouselOverlay = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
  '& img': {
    maxHeight: '200px',
    width: 'auto',
    opacity: 0.8,
    filter: 'drop-shadow(2px 2px 8px rgba(0,0,0,0.7))'
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

const HeroSection = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
    : 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
  padding: theme.spacing(8, 0),
  textAlign: 'center',
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(6)
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(3),
  color: '#EA0707',
  fontFamily: 'Roboto, sans-serif'
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#f8f9fa',
  border: '2px solid #EA0707',
  marginBottom: theme.spacing(2)
}));

const MasterCard = styled(Card)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)'
    : 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
  marginBottom: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[8]
}));

const PricingCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#f8f9fa',
  border: '2px solid #EA0707',
  textAlign: 'center',
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[4]
}));

const MapContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '300px',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  boxShadow: theme.shadows[4]
}));

const SocialButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  borderRadius: theme.spacing(3),
  padding: theme.spacing(1, 3),
  fontWeight: 'bold'
}));

const Home = () => {
  const theme = useTheme();
  const [showVideo, setShowVideo] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const carouselImages = [
    '/kfma/12f29b_031041a90ff34c618133bce229fddbd5~mv2.avif',
    '/kfma/12f29b_05614dcb336e46888a42d5612ef59298~mv2.avif',
    '/kfma/12f29b_16d3aa9f3e5546de91424e3920b5c2d4~mv2.avif',
    '/kfma/12f29b_2c05c65d13484f8f8cb6e8194836e779~mv2.avif',
    '/kfma/12f29b_37573bec74014ad89680c38ab0b8d838~mv2.avif',
    '/kfma/12f29b_4778be0c95bd4bf0af26d185a79d989c~mv2.avif',
    '/kfma/12f29b_51cf3577adb9435cbdf7329959ae7e38~mv2.avif',
    '/kfma/12f29b_8e2e21531b4c44159623c85341779884~mv2.avif'
  ];

  const backgroundVideos = [
    '/kfma/file_003.mp4',
    '/kfma/file_004.mp4'
  ];

  useEffect(() => {
    // Auto-hide intro video after 3.5 seconds (or when it ends) with fade
    const timer = setTimeout(() => {
      const videoContainer = document.querySelector('.fullscreen-video-container');
      if (videoContainer) {
        videoContainer.classList.add('fade-out');
        setTimeout(() => setShowVideo(false), 1000); // Allow 1 second for fade animation
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-advance carousel
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  useEffect(() => {
    // Auto-advance background videos
    const videoInterval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % backgroundVideos.length);
    }, 10000); // Change video every 10 seconds

    return () => clearInterval(videoInterval);
  }, [backgroundVideos.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleContactSubmit = () => {
    // Handle form submission here (e.g., send email, save to database)
    console.log('Contact form submitted:', contactForm);
    // Reset form and close modal
    setContactForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
    setContactModalOpen(false);
    // You could add a success message or redirect here
  };

  const handleFormChange = (field: string, value: string) => {
    setContactForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (showVideo) {
    return (
      <FullScreenVideo className="fullscreen-video-container">
        <video
          autoPlay
          muted
          onEnded={() => {
            const videoContainer = document.querySelector('.fullscreen-video-container');
            if (videoContainer) {
              videoContainer.classList.add('fade-out');
              setTimeout(() => setShowVideo(false), 1000);
            }
          }}
          onClick={() => {
            const videoContainer = document.querySelector('.fullscreen-video-container');
            if (videoContainer) {
              videoContainer.classList.add('fade-out');
              setTimeout(() => setShowVideo(false), 1000);
            }
          }}
        >
          <source src="/kfma/file.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </FullScreenVideo>
    );
  }

  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundColor: theme.palette.background.default,
      fontFamily: 'Roboto, sans-serif'
    }}>

      {/* Video Background Hero Section */}
      <VideoBackgroundContainer>
        <video
          key={currentVideoIndex}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={backgroundVideos[currentVideoIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <VideoOverlay>
          <img
            src="/kfma/KFMA LOGO BLACK.png"
            alt="KFMA Logo"
            style={{
              position: 'absolute',
              opacity: 0.08,
              filter: theme.palette.mode === 'dark'
                ? 'brightness(0) invert(1) drop-shadow(5px 5px 16px rgba(0,0,0,0.7))'
                : 'drop-shadow(2px 2px 8px rgba(0,0,0,0.2))'
            }}
          />
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
              fontFamily: 'Roboto, sans-serif',
              mb: 2,
              fontSize: { xs: '2.5rem', md: '4rem' }
            }}
          >
            Korean Freestyle Martial Arts
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              color: '#EA0707',
              fontWeight: 'bold',
              textAlign: 'center',
              fontFamily: 'Roboto, sans-serif',
              fontSize: { xs: '1.5rem', md: '2.5rem' }
            }}
          >
            Taekwondo & Hapkido
          </Typography>
        </VideoOverlay>
      </VideoBackgroundContainer>

      <Container maxWidth="lg" sx={{ py: 4 }}>


        {/* Hero Section */}
        <HeroSection>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              mb: 2,
              color: theme.palette.text.primary,
              fontFamily: 'Roboto, sans-serif'
            }}
          >
            Korean Freestyle Martial Arts
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              color: '#EA0707',
              mb: 2,
              fontFamily: 'Roboto, sans-serif'
            }}
          >
            Taekwondo & Hapkido
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              maxWidth: 800,
              mx: 'auto',
              fontFamily: 'Roboto, sans-serif'
            }}
          >
            ABN: 19476656938
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.2rem',
              mb: 4,
              maxWidth: 900,
              mx: 'auto',
              fontFamily: 'Roboto, sans-serif'
            }}
          >
            Welcome to Korean Freestyle Martial Arts. At KFMA, we are dedicated to providing exceptional training in Taekwondo & Hapkido. KFMA is committed to Martial Arts excellence, blending traditional techniques and training methods to empower people of all ages. Our experienced Master Instructor believes that confidence, discipline, perseverance and strength are the core values of an outstanding Martial Arts School. With state-of-the-art facilities and a supportive community, we strive to help our students reach their full potential. Join us today and embark on a journey of self-discovery and personal growth.
          </Typography>
        </HeroSection>

        {/* Carousel Section */}
        <CarouselContainer>
          <Fade in={true} timeout={1000}>
            <img
              src={carouselImages[currentSlide]}
              alt={`KFMA Slide ${currentSlide + 1}`}
            />
          </Fade>

          <CarouselOverlay>
            <img
              src="/kfma/KFMA LOGO BLACK.png"
              alt="KFMA Logo"
              style={{
                opacity: 0.4,
                filter: theme.palette.mode === 'dark'
                  ? 'brightness(0) invert(1) drop-shadow(5px 5px 16px rgba(0,0,0,0.7))'
                  : 'drop-shadow(5px 5px 16px rgba(0,0,0,0.2))'
              }}
            />
          </CarouselOverlay>

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
        </CarouselContainer>

        {/* Student Testimonials */}
        <Box sx={{ mb: 8 }}>
          <SectionTitle variant="h3" align="center">
            What KFMA Students Say About Us
          </SectionTitle>
          <TestimonialCard>
            <CardContent>
              <Typography variant="h6" gutterBottom sx={{ color: '#EA0707', fontFamily: 'Roboto, sans-serif' }}>
                Dani, Blue Belt, Age 8
              </Typography>
              <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 1, fontFamily: 'Roboto, sans-serif' }}>
                "I like to do my patterns and I like my KFMA friends"
              </Typography>
              <Typography variant="body1" sx={{ fontStyle: 'italic', fontFamily: 'Roboto, sans-serif' }}>
                "I learn self defence and it even gets me healthy"
              </Typography>
            </CardContent>
          </TestimonialCard>
        </Box>

        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid xs={6} sm={6} md={6}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <img
                src="/kfma/12f29b_4778be0c95bd4bf0af26d185a79d989c~mv2.avif"
                alt="Master Mark"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: theme.shadows[4]
                }}
              />
            </Box>
          </Grid>
        </Grid>


        {/* Master Mark Section */}
        <Box sx={{ mb: 8 }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid xs={6} sm={6} md={6}>
              <MasterCard>

                <CardContent>
                  <Typography
                    variant="h4"
                    gutterBottom
                    align="center"
                    sx={{
                      color: theme.palette.text.primary,
                      mb: 3,
                      fontFamily: 'Roboto, sans-serif'
                    }}
                  >
                    Master Mark Buxton
                  </Typography>

                  <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Chip
                      label="Taekwondo 5th Dan"
                      sx={{
                        m: 0.5,
                        backgroundColor: '#EA0707',
                        color: 'white',
                        fontFamily: 'Roboto, sans-serif'
                      }}
                    />
                    <Chip
                      label="Hapkido 4th Dan"
                      sx={{
                        m: 0.5,
                        backgroundColor: '#EA0707',
                        color: 'white',
                        fontFamily: 'Roboto, sans-serif'
                      }}
                    />
                    <Chip
                      label="Kumdo 1st Dan"
                      sx={{
                        m: 0.5,
                        backgroundColor: '#EA0707',
                        color: 'white',
                        fontFamily: 'Roboto, sans-serif'
                      }}
                    />
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: 'justify',
                      mb: 2,
                      fontFamily: 'Roboto, sans-serif'
                    }}
                  >
                    Master Mark Buxton began his journey with Martial Arts in 1985 at the age of 14 in Karate and achieved his Black Belt at age 18. In 2002, Master Mark decided to give Taekwondo a try and excelled- achieving his Black Belt in June 2005. Korean Martial Arts were clearly a good fit with Master Mark, and he achieved his Black Belts in Hapkido in September 2010 and Kumdo in June 2018.
                  </Typography>
                </CardContent>
              </MasterCard>
            </Grid>
          </Grid>
        </Box>

        {/* Training Times */}
        <Box sx={{ mb: 8 }}>
          <SectionTitle variant="h3" align="center">
            Training Times
          </SectionTitle>

          <Grid container spacing={2} justifyContent="center">
            <Grid xs={12} md={5}>
              <Card sx={{
                backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff',
                height: '100%'
              }}>
                <CardContent sx={{ textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <ScheduleIcon sx={{ fontSize: 48, color: '#EA0707', mb: 2 }} />
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      fontFamily: 'Roboto, sans-serif'
                    }}
                  >
                    Tuesday's & Thursday's
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      color: '#EA0707',
                      fontWeight: 'bold',
                      fontFamily: 'Roboto, sans-serif'
                    }}
                  >
                    5:45PM TO 8PM
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      mt: 2,
                      fontFamily: 'Roboto, sans-serif'
                    }}
                  >
                    Location
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    REGENTS PARK STATE SCHOOL<br />
                    42-60 Emerald Drive<br />
                    Regents Park 4118
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={12} md={5}>
              <Card sx={{
                backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff',
                height: '100%'
              }}>
                <CardContent sx={{ p: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <LocationIcon sx={{ color: '#EA0707', mr: 1 }} />
                    <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold' }}>
                      Find Us Here
                    </Typography>
                  </Box>
                  <MapContainer>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.3726844359394!2d153.05447887613!3d-27.478089976398237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9150f8f8c8e8e1%3A0x5017d681632bcc0!2s42-60%20Emerald%20Dr%2C%20Regents%20Park%20QLD%204118%2C%20Australia!5e0!3m2!1sen!2sus!4v1705123456789!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="KFMA Location - Regents Park State School"
                    />
                  </MapContainer>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Pricing Summary */}
        <Box sx={{ mb: 8 }}>
          <SectionTitle variant="h3" align="center">
            Training Options & Pricing
          </SectionTitle>
          <Grid container spacing={1} justifyContent="space-evenly">
            <Grid xs={12} sm={4} md={3.9}>
              <PricingCard sx={{ height: '100%' }}>
                <MoneyIcon sx={{ fontSize: 48, color: '#EA0707', mb: 2 }} />
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: 'Roboto, sans-serif',
                    color: '#EA0707'
                  }}
                >
                  Free Trial
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: 'Roboto, sans-serif',
                    mb: 2
                  }}
                >
                  $0
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'Roboto, sans-serif',
                    mb: 2
                  }}
                >
                  Experience KFMA with a complimentary trial class
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'Roboto, sans-serif',
                    color: theme.palette.text.secondary
                  }}
                >
                  No commitment required
                </Typography>
              </PricingCard>
            </Grid>
            <Grid xs={12} sm={4} md={3.9}>
              <PricingCard sx={{ height: '100%' }}>
                <MoneyIcon sx={{ fontSize: 48, color: '#EA0707', mb: 2 }} />
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: 'Roboto, sans-serif',
                    color: '#EA0707'
                  }}
                >
                  Monthly Training
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: 'Roboto, sans-serif',
                    mb: 2
                  }}
                >
                  $120
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'Roboto, sans-serif',
                    mb: 2
                  }}
                >
                  Unlimited training sessions per month
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'Roboto, sans-serif',
                    color: theme.palette.text.secondary
                  }}
                >
                  Includes both Taekwondo & Hapkido
                </Typography>
              </PricingCard>
            </Grid>
            <Grid xs={12} sm={4} md={3.9}>
              <PricingCard sx={{ height: '100%' }}>
                <MoneyIcon sx={{ fontSize: 48, color: '#EA0707', mb: 2 }} />
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: 'Roboto, sans-serif',
                    color: '#EA0707'
                  }}
                >
                  Family Discount
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: 'Roboto, sans-serif',
                    mb: 2
                  }}
                >
                  10% OFF
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'Roboto, sans-serif',
                    mb: 2
                  }}
                >
                  Special discount for families with multiple students
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'Roboto, sans-serif',
                    color: theme.palette.text.secondary
                  }}
                >
                  Train together, save together
                </Typography>
              </PricingCard>
            </Grid>
          </Grid>
        </Box>

        {/* Ready to Start Section */}
        <Box sx={{
          textAlign: 'center',
          py: 6,
          backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#f8f8f8',
          borderRadius: 2
        }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: '#EA0707',
              fontWeight: 'bold',
              fontFamily: 'Roboto, sans-serif'
            }}
          >
            Ready to Start Your Martial Arts Journey?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              color: theme.palette.text.secondary,
              fontFamily: 'Roboto, sans-serif'
            }}
          >
            Don't hesitate to contact us for your free trial today!
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => setContactModalOpen(true)}
            sx={{
              backgroundColor: '#EA0707',
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontFamily: 'Roboto, sans-serif',
              '&:hover': { backgroundColor: '#c20606' }
            }}
          >
            Get Started Today
          </Button>
        </Box>

        {/* Follow Us Section */}
        <Box sx={{ mb: 8 }}>
          <SectionTitle variant="h3" align="center">
            Follow Us
          </SectionTitle>
          <Typography
            variant="body1"
            align="center"
            sx={{
              mb: 4,
              fontFamily: 'Roboto, sans-serif'
            }}
          >
            Click and Subscribe to KFMA Socials to keep updated with the latest news
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <SocialButton
              variant="contained"
              startIcon={<YouTubeIcon />}
              sx={{
                backgroundColor: '#FF0000',
                '&:hover': { backgroundColor: '#CC0000' },
                fontFamily: 'Roboto, sans-serif'
              }}
            >
              YouTube
            </SocialButton>
            <SocialButton
              variant="contained"
              startIcon={<FacebookIcon />}
              sx={{
                backgroundColor: '#1877F2',
                '&:hover': { backgroundColor: '#166FE5' },
                fontFamily: 'Roboto, sans-serif'
              }}
            >
              Facebook
            </SocialButton>
            <SocialButton
              variant="contained"
              startIcon={<InstagramIcon />}
              sx={{
                backgroundColor: '#E4405F',
                '&:hover': { backgroundColor: '#D62976' },
                fontFamily: 'Roboto, sans-serif'
              }}
            >
              Instagram
            </SocialButton>
          </Box>
        </Box>


        {/* Contact Modal */}
        <Dialog
          open={contactModalOpen}
          onClose={() => setContactModalOpen(false)}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle sx={{
            backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#f8f8f8',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '2px solid #EA0707'
          }}>
            <Typography variant="h5" sx={{ fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: '#EA0707' }}>
              Start Your KFMA Journey
            </Typography>
            <IconButton onClick={() => setContactModalOpen(false)}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{
            backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff',
            pt: 3
          }}>
            <Typography variant="body1" sx={{ mb: 3, fontFamily: 'Roboto, sans-serif' }}>
              Ready to begin your martial arts journey? Fill out the form below and we'll get back to you soon!
            </Typography>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  value={contactForm.firstName}
                  onChange={(e) => handleFormChange('firstName', e.target.value)}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: '#EA0707',
                      },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#EA0707',
                    },
                  }}
                />
              </Grid>
              <Grid xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  value={contactForm.lastName}
                  onChange={(e) => handleFormChange('lastName', e.target.value)}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: '#EA0707',
                      },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#EA0707',
                    },
                  }}
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => handleFormChange('email', e.target.value)}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: '#EA0707',
                      },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#EA0707',
                    },
                  }}
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  label="Phone"
                  type="tel"
                  value={contactForm.phone}
                  onChange={(e) => handleFormChange('phone', e.target.value)}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: '#EA0707',
                      },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#EA0707',
                    },
                  }}
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  label="How can KFMA help you?"
                  multiline
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => handleFormChange('message', e.target.value)}
                  placeholder="Tell us about your martial arts goals, experience level, or any questions you have..."
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': {
                        borderColor: '#EA0707',
                      },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#EA0707',
                    },
                  }}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions sx={{
            backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#f8f8f8',
            p: 3,
            borderTop: '1px solid #ddd'
          }}>
            <Button
              onClick={() => setContactModalOpen(false)}
              sx={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleContactSubmit}
              variant="contained"
              disabled={!contactForm.firstName || !contactForm.lastName || !contactForm.email}
              sx={{
                backgroundColor: '#EA0707',
                fontFamily: 'Roboto, sans-serif',
                '&:hover': { backgroundColor: '#c20606' },
                '&:disabled': { backgroundColor: '#ccc' }
              }}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Home;
