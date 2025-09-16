import { useState, useEffect, useRef } from 'react';
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
  DialogActions,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CardMedia,
  Fab,
  AppBar,
  Toolbar
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
  Close as CloseIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  EmojiEvents as TrophyIcon,
  DateRange as DateIcon,
  Star as StarIcon,
  KeyboardArrowUp as ArrowUpIcon,
  Menu as MenuIcon
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
  marginBottom: 0,
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

const ScrollNavigation = styled(AppBar)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  backdropFilter: 'blur(10px)',
  zIndex: 1000,
  height: '60px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const NavButton = styled(Button)(({ theme, active }: { theme: any; active?: boolean }) => ({
  color: 'white',
  margin: theme.spacing(0, 1),
  textTransform: 'none',
  fontFamily: 'Roboto, sans-serif',
  backgroundColor: active ? 'rgba(234, 7, 7, 0.3)' : 'transparent',
  '&:hover': {
    backgroundColor: 'rgba(234, 7, 7, 0.5)'
  }
}));

const Section = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: theme.spacing(8, 0),
  scrollSnapAlign: 'start',
  position: 'relative'
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(4),
  color: '#EA0707',
  fontFamily: 'Roboto, sans-serif',
  textAlign: 'center'
}));

const CarouselContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '60vh',
  overflow: 'hidden',
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(4),
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
    maxHeight: '150px',
    width: 'auto',
    opacity: 0.6,
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
  boxShadow: theme.shadows[4],
  height: '100%'
}));

const CompetitionCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
  color: '#333',
  marginBottom: theme.spacing(3),
  '& .MuiCardContent-root': {
    textAlign: 'center'
  }
}));

const ContactCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff',
  marginBottom: theme.spacing(2),
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[8]
  }
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

const ScrollToTopFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  backgroundColor: '#EA0707',
  color: 'white',
  '&:hover': {
    backgroundColor: '#c20606'
  }
}));

const Home = () => {
  const theme = useTheme();
  const [showVideo, setShowVideo] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
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
    '/kfma/12f29b_8e2e21531b4c44159623c85341779884~mv2.avif'
  ];

  // Refs for sections
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const masterRef = useRef<HTMLDivElement>(null);
  const trainingRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: 'hero', label: 'Home', ref: heroRef },
    { id: 'about', label: 'About', ref: aboutRef },
    { id: 'master', label: 'Master', ref: masterRef },
    { id: 'training', label: 'Training', ref: trainingRef },
    { id: 'pricing', label: 'Pricing', ref: pricingRef },
    { id: 'success', label: 'Success', ref: successRef },
    { id: 'gallery', label: 'Gallery', ref: galleryRef },
    { id: 'contact', label: 'Contact', ref: contactRef }
  ];

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

  // Auto-hide intro video after 3.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const videoContainer = document.querySelector('.fullscreen-video-container');
      if (videoContainer) {
        videoContainer.classList.add('fade-out');
        setTimeout(() => setShowVideo(false), 1000);
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Auto-advance background videos
  useEffect(() => {
    const videoInterval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % backgroundVideos.length);
    }, 15000);

    return () => clearInterval(videoInterval);
  }, [backgroundVideos.length]);

  // Scroll detection for active section and show scroll to top
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowScrollTop(scrollPosition > 100);

      // Determine active section
      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (section?.ref.current) {
      section.ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleContactFormChange = (field: string, value: string) => {
    setContactForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleContactSubmit = () => {
    console.log('Contact form submitted:', contactForm);
    setContactForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
    setContactModalOpen(false);
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
      fontFamily: 'Roboto, sans-serif',
      position: 'relative'
    }}>

      {/* Scroll Navigation */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
          height: '60px',
          zIndex: 1000
        }}
      >
        <Toolbar sx={{ justifyContent: 'center', minHeight: '60px !important' }}>
          {sections.map((section) => (
            <Button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              sx={{
                color: 'white',
                margin: theme.spacing(0, 1),
                textTransform: 'none',
                fontFamily: 'Roboto, sans-serif',
                backgroundColor: activeSection === section.id ? 'rgba(234, 7, 7, 0.3)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(234, 7, 7, 0.5)'
                }
              }}
            >
              {section.label}
            </Button>
          ))}
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        ref={heroRef}
        id="hero"
        sx={{
          minHeight: '100vh',
          scrollSnapAlign: 'start',
          position: 'relative'
        }}
      >
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
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                textAlign: 'center',
                fontFamily: 'Roboto, sans-serif',
                mt: 2,
                fontSize: { xs: '1rem', md: '1.2rem' }
              }}
            >
              ABN: 19476656938
            </Typography>
          </VideoOverlay>
        </VideoBackgroundContainer>
      </Box>

      {/* About KFMA Section */}
      <Box
        ref={aboutRef}
        id="about"
        sx={{
          minHeight: '100vh',
          padding: theme.spacing(8, 0),
          scrollSnapAlign: 'start',
          backgroundColor: theme.palette.background.default
        }}
      >
        <Container maxWidth="lg">
          <SectionTitle variant="h2">
            About Korean Freestyle Martial Arts
          </SectionTitle>

          <Card sx={{
            backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff',
            mb: 4,
            p: 4
          }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                color: '#EA0707',
                fontFamily: 'Roboto, sans-serif'
              }}
            >
              ABN: 19476656938
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Typography
              variant="body1"
              sx={{
                textAlign: 'justify',
                mb: 3,
                fontFamily: 'Roboto, sans-serif',
                fontSize: '1.1rem'
              }}
            >
              Welcome to Korean Freestyle Martial Arts. At KFMA, we are dedicated to providing exceptional training in Taekwondo & Hapkido. KFMA is committed to Martial Arts excellence, blending traditional techniques and training methods to empower people of all ages.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                textAlign: 'justify',
                mb: 3,
                fontFamily: 'Roboto, sans-serif',
                fontSize: '1.1rem'
              }}
            >
              Our experienced Master Instructor believes that confidence, discipline, perseverance and strength are the core values of an outstanding Martial Arts School. With state-of-the-art facilities and a supportive community, we strive to help our students reach their full potential.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                textAlign: 'justify',
                fontFamily: 'Roboto, sans-serif',
                fontSize: '1.1rem'
              }}
            >
              Join us today and embark on a journey of self-discovery and personal growth. Korean Freestyle Martial Arts is a family-oriented Club with current members ranging from just 4 years of age to almost 60+ years of age. Master Mark encourages and instils a friendly, supportive, and inclusive training atmosphere and a place where friendships form.
            </Typography>
          </Card>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid xs={12} md={4}>
              <Card sx={{
                backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff',
                height: '100%',
                textAlign: 'center',
                p: 3
              }}>
                <Typography variant="h4" sx={{ color: '#EA0707', mb: 2 }}>20+</Typography>
                <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif' }}>Years of Experience</Typography>
              </Card>
            </Grid>
            <Grid xs={12} md={4}>
              <Card sx={{
                backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff',
                height: '100%',
                textAlign: 'center',
                p: 3
              }}>
                <Typography variant="h4" sx={{ color: '#EA0707', mb: 2 }}>4-60+</Typography>
                <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif' }}>Age Range</Typography>
              </Card>
            </Grid>
            <Grid xs={12} md={4}>
              <Card sx={{
                backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff',
                height: '100%',
                textAlign: 'center',
                p: 3
              }}>
                <Typography variant="h4" sx={{ color: '#EA0707', mb: 2 }}>100%</Typography>
                <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif' }}>Competition Gold Medals</Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Master Mark Section */}
      <Box
        ref={masterRef}
        id="master"
        sx={{
          minHeight: '100vh',
          padding: theme.spacing(8, 0),
          scrollSnapAlign: 'start',
          backgroundColor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#f8f9fa'
        }}
      >
        <Container maxWidth="lg">
          <SectionTitle variant="h2">
            Master Instructor Mark Buxton
          </SectionTitle>

          <Grid container spacing={4} alignItems="flex-start">
            <Grid xs={12} md={4}>
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <img
                  src="/kfma/12f29b_96ca7e71d40644f58d16c9239bc70bae~mv2.avif"
                  alt="Master Mark Buxton"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    boxShadow: theme.shadows[4]
                  }}
                />
              </Box>
            </Grid>

            <Grid xs={12} md={8}>
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
                    Master Mark Buxton began his journey with Martial Arts in 1985 at the age of 14 in Karate and achieved his Black Belt at age 18. In 2002, Master Mark decided to give Taekwondo a try and excelled- achieving his Black Belt in June 2005. Korean Martial Arts were clearly a good fit with Master Mark, and he achieved his Black Belts in Hapkido in September 2010 and Kumdo in June 2018- consistently achieving Honours results in all his gradings. Master Mark attained his Master levels in Taekwondo in June 2015 and Hapkido in December 2022.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: 'justify',
                      mb: 2,
                      fontFamily: 'Roboto, sans-serif'
                    }}
                  >
                    In 2012, Master Mark spent over a year in Korea, training with Korean Taekwondo schools and demonstration teams. He also attended Hanyang University in Seoul to study the Korean language.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: 'justify',
                      mb: 2,
                      fontFamily: 'Roboto, sans-serif'
                    }}
                  >
                    Master Mark began teaching Taekwondo and Hapkido while he was training for his Black Belt- over 20 years ago and became a Club Instructor in 2005 in Marsden, then Regents Park. Over the years, Master Mark has developed a strong relationship with the local community. He offers classes for adults and children with an adaptable teaching style that is proven to increase students' confidence, self-worth, discipline, and physical fitness.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: 'justify',
                      fontFamily: 'Roboto, sans-serif'
                    }}
                  >
                    In 2024, after 22 years with a local Brisbane Club, Master Mark decided to go out on his own and Korean Freestyle Martial Arts came to fruition. Master Mark brings many years of Martial Arts experience, skills, and knowledge.
                  </Typography>
                </CardContent>
              </MasterCard>
            </Grid>
          </Grid>
      {/* Training Information Section */}
      <Box
        ref={trainingRef}
        id="training"
        sx={{
          minHeight: '100vh',
          padding: theme.spacing(8, 0),
          scrollSnapAlign: 'start',
          backgroundColor: theme.palette.background.default
        }}
      >
        <Container maxWidth="lg">
          <SectionTitle variant="h2">
            Training Information
          </SectionTitle>

          <Grid container spacing={4}>
            <Grid xs={12} md={6}>
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
            <Grid xs={12} md={6}>
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
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box
        ref={pricingRef}
        id="pricing"
        sx={{
          minHeight: '100vh',
          padding: theme.spacing(8, 0),
          scrollSnapAlign: 'start',
          backgroundColor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#f8f9fa'
        }}
      >
        <Container maxWidth="lg">
          <SectionTitle variant="h2">
            Pricing & Membership
          </SectionTitle>

          {/* Free Trial Highlight */}
          <Paper sx={{
            p: 4,
            mb: 6,
            backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff',
            border: '3px solid #EA0707',
            textAlign: 'center'
          }}>
            <Typography variant="h4" sx={{ color: '#EA0707', mb: 2, fontFamily: 'Roboto, sans-serif' }}>
              🥋 Enjoy a 2-week Free Trial!
            </Typography>
            <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Roboto, sans-serif' }}>
              Sign up in the first week to receive an additional 2 weeks FREE!
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif' }}>
              ✅ Discounted Uniform • 🏆 Complimentary Taekwondo Grading • 🥋 Complimentary Hapkido Grading
            </Typography>
          </Paper>

          {/* Membership Fees */}
          <Grid container spacing={3} sx={{ mb: 6 }}>
            <Grid xs={12} md={6}>
              <PricingCard>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#EA0707' }}>
                  One-Time Fees
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText 
                      primary="LIFETIME Membership" 
                      secondary="$25" 
                      secondaryTypographyProps={{ sx: { fontWeight: 'bold', color: '#EA0707' } }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Annual Fee (Due upon joining and February each year)" 
                      secondary="$89" 
                      secondaryTypographyProps={{ sx: { fontWeight: 'bold', color: '#EA0707' } }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Grading Belt Fee" 
                      secondary="$19.50" 
                      secondaryTypographyProps={{ sx: { fontWeight: 'bold', color: '#EA0707' } }}
                    />
                  </ListItem>
                </List>
              </PricingCard>
            </Grid>

            <Grid xs={12} md={6}>
              <PricingCard>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#EA0707' }}>
                  Monthly Training Fees
                </Typography>
                <List>
                  <ListItem>
                    <ListItemText 
                      primary="Single Student" 
                      secondary="$107 per month" 
                      secondaryTypographyProps={{ sx: { fontWeight: 'bold', color: '#EA0707' } }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Family of 2" 
                      secondary="$177 per month" 
                      secondaryTypographyProps={{ sx: { fontWeight: 'bold', color: '#EA0707' } }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Family of 3" 
                      secondary="$239 per month" 
                      secondaryTypographyProps={{ sx: { fontWeight: 'bold', color: '#EA0707' } }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Family of 4" 
                      secondary="$290 per month" 
                      secondaryTypographyProps={{ sx: { fontWeight: 'bold', color: '#EA0707' } }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="5th family member" 
                      secondary="FREE" 
                      secondaryTypographyProps={{ sx: { fontWeight: 'bold', color: '#28a745' } }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Casual Training Fee" 
                      secondary="$150 per month for 1 Student" 
                      secondaryTypographyProps={{ sx: { fontWeight: 'bold', color: '#EA0707' } }}
                    />
                  </ListItem>
                </List>
              </PricingCard>
            </Grid>
          </Grid>

          {/* Equipment & Gear */}
          <SectionTitle variant="h3">
            Equipment & Gear
          </SectionTitle>

          <Grid container spacing={3}>
            <Grid xs={12} md={4}>
              <PricingCard>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#EA0707' }}>
                  Uniforms & Apparel
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Taekwondo Uniforms" secondary="$69.00" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Black Belt Uniform" secondary="$99.00" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Summer Club T-Shirt" secondary="$35.00" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Club Caps" secondary="$10.00" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Club Hoodies" secondary="$189.00" />
                  </ListItem>
                </List>
              </PricingCard>
            </Grid>

            <Grid xs={12} md={4}>
              <PricingCard>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#EA0707' }}>
                  Training Gear
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText primary="Taekwondo Shoes" secondary="$30.00 - $99.00" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Headgear" secondary="From $50.00" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Gloves" secondary="From $20.00" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="KFMA Training Bag" secondary="$49.00" />
                  </ListItem>
                </List>
              </PricingCard>
            </Grid>

            <Grid xs={12} md={4}>
              <PricingCard>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#EA0707' }}>
                  Start-Up Kit (Discounted)
                </Typography>
                <List dense>
                  <ListItem>
                    <ListItemText 
                      primary="February to October" 
                      secondary="$250" 
                      secondaryTypographyProps={{ sx: { fontWeight: 'bold', color: '#EA0707' } }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="October to January" 
                      secondary="$215" 
                      secondaryTypographyProps={{ sx: { fontWeight: 'bold', color: '#EA0707' } }}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Key Rings" secondary="$13.00 each" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Jet Tags" secondary="$13.00 each" />
                  </ListItem>
                </List>
              </PricingCard>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Student Success Section */}
      <Box
        ref={successRef}
        id="success"
        sx={{
          minHeight: '100vh',
          padding: theme.spacing(8, 0),
          scrollSnapAlign: 'start',
          backgroundColor: theme.palette.background.default
        }}
      >
        <Container maxWidth="lg">
          <SectionTitle variant="h2">
            Student Success & Achievements
          </SectionTitle>

          {/* Student Testimonials */}
          <Box sx={{ mb: 6 }}>
            <Typography variant="h4" sx={{ color: '#EA0707', textAlign: 'center', mb: 4, fontFamily: 'Roboto, sans-serif' }}>
              What KFMA Students Say About Us
            </Typography>
            <Card sx={{
              backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#f8f9fa',
              border: '2px solid #EA0707',
              mb: 4
            }}>
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
            </Card>
          </Box>

          {/* Competition Results */}
          <Grid container spacing={4}>
            <Grid xs={12} md={6}>
              <Card sx={{
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                color: '#333',
                mb: 3
              }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <TrophyIcon sx={{ fontSize: 48, mb: 2 }} />
                  <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Gold Coast Open 2025
                  </Typography>
                  <Typography variant="h5" sx={{ color: '#EA0707', fontWeight: 'bold', mb: 2 }}>
                    5 Gold Medals from 5 Players - 100% Gold!
                  </Typography>
                  
                  <TableContainer component={Paper} sx={{ mt: 2 }}>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ fontWeight: 'bold' }}>Student</TableCell>
                          <TableCell sx={{ fontWeight: 'bold' }}>Score</TableCell>
                          <TableCell sx={{ fontWeight: 'bold' }}>Medal</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>Brooke</TableCell>
                          <TableCell>6.13</TableCell>
                          <TableCell>🥇 Gold</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Alexanda</TableCell>
                          <TableCell>6.00</TableCell>
                          <TableCell>🥇 Gold</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Zara</TableCell>
                          <TableCell>5.89</TableCell>
                          <TableCell>🥇 Gold</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Sam</TableCell>
                          <TableCell>5.40</TableCell>
                          <TableCell>🥇 Gold</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Dani</TableCell>
                          <TableCell>4.98</TableCell>
                          <TableCell>🥇 Gold</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>

            <Grid xs={12} md={6}>
              <Card sx={{
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                color: '#333',
                mb: 3
              }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <TrophyIcon sx={{ fontSize: 48, mb: 2 }} />
                  <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Caboolture Open 2025
                  </Typography>
                  <Typography variant="h5" sx={{ color: '#EA0707', fontWeight: 'bold', mb: 2 }}>
                    All Gold Medal Winners!
                  </Typography>
                  
                  <List>
                    <ListItem>
                      <ListItemText primary="Brooke - Gold" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Elizabeth - Gold" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Dani - Gold" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Aria - Gold" />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary="Alexanda - Gold" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Grading Results */}
          <Box sx={{ mt: 6 }}>
            <Typography variant="h4" sx={{ color: '#EA0707', textAlign: 'center', mb: 4, fontFamily: 'Roboto, sans-serif' }}>
              2025 April Grading Results
            </Typography>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <Card sx={{ backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ color: '#EA0707', mb: 2 }}>Taekwondo Achievements</Typography>
                    <List>
                      <ListItem>
                        <ListItemText primary="3rd Gup - Red/White Belt" secondary="Brooke - Honours" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="5th Gup - Blue Belt" secondary="Scarlett - Honours, Dani - Honours" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="6th Gup - Blue/Black Belt" secondary="Alexanda - Honours" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="8th Gup - Yellow Belt" secondary="Aria - High Pass, Zara - Honours" />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="9th Gup - Yellow/White Belt" secondary="Sam - Honours, Joe - Honours, Charlotte - Pass" />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>
              <Grid xs={12} md={6}>
                <Card sx={{ backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff' }}>
                  <CardContent>
                    <Typography variant="h6" sx={{ color: '#EA0707', mb: 2 }}>Master Mark's Message</Typography>
                    <Typography variant="body1" sx={{ fontStyle: 'italic', fontFamily: 'Roboto, sans-serif' }}>
                      "The first KFMA grading for 2025 was held on 3rd April. Overall, I saw students have worked hard in the lead up to the grading and the standard of basics, etiquette and terminology was high. Well done everyone!"
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2, fontFamily: 'Roboto, sans-serif' }}>
                      - Master Mark
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Gallery Section */}
      <Box
        ref={galleryRef}
        id="gallery"
        sx={{
          minHeight: '100vh',
          padding: theme.spacing(8, 0),
          scrollSnapAlign: 'start',
          backgroundColor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#f8f9fa'
        }}
      >
        <Container maxWidth="lg">
          <SectionTitle variant="h2">
            Korean Freestyle Martial Arts Gallery
          </SectionTitle>
          
          <Typography
            variant="body1"
            align="center"
            sx={{
              mb: 6,
              fontSize: '1.1rem',
              fontFamily: 'Roboto, sans-serif'
            }}
          >
            There may be no better way to communicate what we do than through images. As you browse our site, take a few moments to let your eyes linger here, and see if you can get a feel for our signature touch.
          </Typography>

          {/* Featured Carousel */}
          <CarouselContainer sx={{ mb: 6 }}>
            <Fade in={true} timeout={1000}>
              <img
                src={carouselImages[currentSlide]}
                alt={`KFMA Training ${currentSlide + 1}`}
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

          {/* Training Photos Grid */}
          <Grid container spacing={3}>
            <Grid xs={12} sm={6} md={4}>
              <Card sx={{
                backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' }
              }}>
                <CardMedia
                  component="img"
                  height="250"
                  image="/kfma/12f29b_031041a90ff34c618133bce229fddbd5~mv2.avif"
                  alt="KFMA Training Session"
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', color: '#EA0707' }}>
                    Training Session
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                    Students practicing forms and techniques
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid xs={12} sm={6} md={4}>
              <Card sx={{
                backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' }
              }}>
                <CardMedia
                  component="img"
                  height="250"
                  image="/kfma/12f29b_05614dcb336e46888a42d5612ef59298~mv2.avif"
                  alt="Taekwondo Practice"
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', color: '#EA0707' }}>
                    Taekwondo Practice
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                    Perfecting kicks and strikes
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid xs={12} sm={6} md={4}>
              <Card sx={{
                backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' }
              }}>
                <CardMedia
                  component="img"
                  height="250"
                  image="/kfma/12f29b_16d3aa9f3e5546de91424e3920b5c2d4~mv2.avif"
                  alt="Hapkido Training"
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', color: '#EA0707' }}>
                    Hapkido Training
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                    Self-defense and joint techniques
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid xs={12} sm={6} md={4}>
              <Card sx={{
                backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' }
              }}>
                <CardMedia
                  component="img"
                  height="250"
                  image="/kfma/12f29b_2c05c65d13484f8f8cb6e8194836e779~mv2.avif"
                  alt="Competition Team"
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', color: '#EA0707' }}>
                    Competition Team
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                    KFMA competitors in action
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid xs={12} sm={6} md={4}>
              <Card sx={{
                backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' }
              }}>
                <CardMedia
                  component="img"
                  height="250"
                  image="/kfma/12f29b_8e2e21531b4c44159623c85341779884~mv2.avif"
                  alt="Team Achievement"
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', color: '#EA0707' }}>
                    Team Achievement
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                    Celebrating success together
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid xs={12} sm={6} md={4}>
              <Card sx={{
                backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' }
              }}>
                <CardMedia
                  component="img"
                  height="250"
                  image="/kfma/12f29b_4778be0c95bd4bf0af26d185a79d989c~mv2.avif"
                  alt="Master Mark Teaching"
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', color: '#EA0707' }}>
                    Master Mark Teaching
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                    Personalized instruction and guidance
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
        ref={contactRef}
        id="contact"
        sx={{
          minHeight: '100vh',
          padding: theme.spacing(8, 0),
          scrollSnapAlign: 'start',
          backgroundColor: theme.palette.background.default
        }}
      >
        <Container maxWidth="lg">
          <SectionTitle variant="h2">
            Contact Us
          </SectionTitle>

          <Grid container spacing={4}>
            {/* Contact Information */}
            <Grid xs={12} md={4}>
              <Card sx={{
                backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff',
                marginBottom: theme.spacing(2),
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: theme.shadows[8]
                }
              }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <EmailIcon sx={{ fontSize: 48, color: '#EA0707', mb: 2 }} />
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    Master Instructor Email
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      wordBreak: 'break-word',
                      fontFamily: 'Roboto, sans-serif'
                    }}
                  >
                    koreanfreestylema@gmail.com
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{
                backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff',
                marginBottom: theme.spacing(2),
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: theme.shadows[8]
                }
              }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <EmailIcon sx={{ fontSize: 48, color: '#EA0707', mb: 2 }} />
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    KFMA Administration Email
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      wordBreak: 'break-word',
                      fontFamily: 'Roboto, sans-serif'
                    }}
                  >
                    info.koreanfreestylema@gmail.com
                  </Typography>
                </CardContent>
              </Card>

              <Card sx={{
                backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff',
                marginBottom: theme.spacing(2),
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: theme.shadows[8]
                }
              }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <PhoneIcon sx={{ fontSize: 48, color: '#EA0707', mb: 2 }} />
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontFamily: 'Roboto, sans-serif' }}
                  >
                    Phone
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      color: '#EA0707',
                      fontFamily: 'Roboto, sans-serif'
                    }}
                  >
                    0432 289 866
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Contact Form */}
            <Grid xs={12} md={8}>
              <Paper sx={{
                p: 4,
                backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff'
              }}>
                <Typography variant="h4" sx={{ mb: 3, color: '#EA0707', fontFamily: 'Roboto, sans-serif' }}>
                  Start Your KFMA Journey Today
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, fontFamily: 'Roboto, sans-serif' }}>
                  Ready to begin your martial arts journey? Fill out the form below and we'll get back to you soon!
                </Typography>

                <Button
                  variant="contained"
                  size="large"
                  onClick={() => setContactModalOpen(true)}
                  sx={{
                    backgroundColor: '#EA0707',
                    px: 4,
                    py: 2,
                    fontSize: '1.2rem',
                    fontFamily: 'Roboto, sans-serif',
                    '&:hover': { backgroundColor: '#c20606' },
                    mb: 4
                  }}
                >
                  Contact Us Now
                </Button>

                <Divider sx={{ my: 4 }} />

                {/* Social Media */}
                <Typography variant="h5" sx={{ mb: 3, color: '#EA0707', fontFamily: 'Roboto, sans-serif' }}>
                  Follow Us
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    fontFamily: 'Roboto, sans-serif'
                  }}
                >
                  Click and Subscribe to KFMA Socials to keep updated with the latest news
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <SocialButton
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    component="a"
                    href="https://www.youtube.com/@KoreanFreestyleMartialArts"
                    target="_blank"
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
                    component="a"
                    href="https://www.facebook.com/@korean.freestyle.martial.arts.24"
                    target="_blank"
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
                    component="a"
                    href="https://www.instagram.com/koreanfreestylema/"
                    target="_blank"
                    sx={{
                      backgroundColor: '#E4405F',
                      '&:hover': { backgroundColor: '#D62976' },
                      fontFamily: 'Roboto, sans-serif'
                    }}
                  >
                    Instagram
                  </SocialButton>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Fab
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
            backgroundColor: '#EA0707',
            color: 'white',
            '&:hover': {
              backgroundColor: '#c20606'
            }
          }}
        >
          <ArrowUpIcon />
        </Fab>
      )}
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
            <Grid container >
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
