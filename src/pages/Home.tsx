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
  Toolbar,
  Stack,
  Avatar
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import {
  Schedule as ScheduleIcon,
  LocationOn as LocationIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  EmojiEvents as TrophyIcon,
  ArrowBackIos,
  ArrowForwardIos,
  KeyboardArrowUp as ArrowUpIcon,
  Close as CloseIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon
} from '@mui/icons-material';

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// KFMA Original Colors (matching kfma.com.au)
const colors = {
  primary: '#EA0707', // Original KFMA red
  secondary: '#FFB000', // Gold
  accent: '#648FFF', // Blue accent
  dark: '#1A1A1A',
  light: '#F8F9FA',
  white: '#FFFFFF',
  black: '#000000'
};

// Styled components with Korean aesthetics
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

const KoreanBackgroundContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100vh',
  overflow: 'hidden',
  backgroundImage: 'url(/background/image.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, 
      rgba(220, 38, 127, 0.8) 0%, 
      rgba(26, 26, 26, 0.7) 50%, 
      rgba(255, 176, 0, 0.6) 100%)`,
    zIndex: 1
  }
}));

const HeroOverlay = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  padding: '2rem'
}));

const ScrollNavigation = styled(AppBar)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(26, 26, 26, 0.95)',
  backdropFilter: 'blur(15px)',
  zIndex: 1000,
  height: '70px',
  borderBottom: `2px solid ${koreanColors.primary}`,
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '3px',
    background: `linear-gradient(90deg, ${koreanColors.secondary}, ${koreanColors.primary})`,
    borderRadius: '2px'
  }
}));

const NavButton = styled(Button)(({ theme, active }: { theme: any; active?: boolean }) => ({
  color: 'white',
  margin: theme.spacing(0, 1.5),
  textTransform: 'none',
  fontFamily: '"Noto Sans KR", "Roboto", sans-serif',
  fontSize: '1rem',
  fontWeight: active ? 600 : 400,
  padding: theme.spacing(1, 2),
  borderRadius: '25px',
  backgroundColor: active ? koreanColors.primary : 'transparent',
  border: active ? `1px solid ${koreanColors.secondary}` : '1px solid transparent',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: active ? koreanColors.primary : `rgba(220, 38, 127, 0.2)`,
    border: `1px solid ${koreanColors.secondary}`,
    transform: 'translateY(-2px)'
  }
}));

const Section = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: theme.spacing(10, 0),
  scrollSnapAlign: 'start',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(90deg, transparent, ${koreanColors.primary}, transparent)`,
    opacity: 0.6
  }
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(6),
  color: koreanColors.primary,
  fontFamily: '"Noto Sans KR", "Roboto", sans-serif',
  textAlign: 'center',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-15px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '3px',
    background: `linear-gradient(90deg, ${koreanColors.secondary}, ${koreanColors.primary})`,
    borderRadius: '2px'
  }
}));

const KoreanCard = styled(Card)(({ theme }) => ({
  background: theme.palette.mode === 'dark' 
    ? `linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(220, 38, 127, 0.1) 100%)`
    : `linear-gradient(135deg, rgba(248, 246, 240, 0.95) 0%, rgba(220, 38, 127, 0.05) 100%)`,
  backdropFilter: 'blur(10px)',
  border: `1px solid rgba(220, 38, 127, 0.3)`,
  borderRadius: '16px',
  boxShadow: `0 8px 32px rgba(220, 38, 127, 0.15)`,
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: `linear-gradient(90deg, ${koreanColors.secondary}, ${koreanColors.primary}, ${koreanColors.accent})`,
  },
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 16px 48px rgba(220, 38, 127, 0.25)`,
    animation: `${pulseGlow} 2s infinite`
  }
}));

const StatCard = styled(KoreanCard)(({ theme }) => ({
  height: '100%',
  textAlign: 'center',
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    '& .stat-number': {
      color: koreanColors.secondary,
      transform: 'scale(1.1)'
    }
  }
}));

const FeatureIcon = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${koreanColors.primary}, ${koreanColors.secondary})`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  boxShadow: `0 8px 24px rgba(220, 38, 127, 0.3)`,
  '& .MuiSvgIcon-root': {
    fontSize: '2.5rem',
    color: 'white'
  }
}));

const ScrollToTopFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(3),
  right: theme.spacing(3),
  backgroundColor: koreanColors.primary,
  color: 'white',
  border: `2px solid ${koreanColors.secondary}`,
  width: '60px',
  height: '60px',
  '&:hover': {
    backgroundColor: koreanColors.secondary,
    transform: 'scale(1.1)',
    boxShadow: `0 8px 24px rgba(220, 38, 127, 0.4)`
  }
}));

const Home = () => {
  const theme = useTheme();
  const [showVideo, setShowVideo] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  
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
      fontFamily: '"Noto Sans KR", "Roboto", sans-serif',
      position: 'relative'
    }}>

      {/* Korean-Inspired Navigation */}
      <ScrollNavigation position="fixed">
        <Toolbar sx={{ justifyContent: 'center', minHeight: '70px !important' }}>
          {sections.map((section) => (
            <NavButton
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              active={activeSection === section.id}
            >
              {section.label}
            </NavButton>
          ))}
        </Toolbar>
      </ScrollNavigation>

      {/* Hero Section with Korean Architecture Background */}
      <Box
        ref={heroRef}
        id="hero"
        sx={{
          minHeight: '100vh',
          scrollSnapAlign: 'start',
          position: 'relative'
        }}
      >
        <KoreanBackgroundContainer>
          <HeroOverlay>
            {/* Floating Logo */}
            <Box sx={{ 
              position: 'relative', 
              mb: 4,
              animation: `${fadeInUp} 1s ease-out`
            }}>
              <Avatar
                src="/kfma/KFMA LOGO BLACK.png"
                alt="KFMA Logo"
                sx={{
                  width: { xs: 120, md: 180 },
                  height: { xs: 120, md: 180 },
                  mb: 3,
                  border: `4px solid ${koreanColors.secondary}`,
                  boxShadow: `0 12px 40px rgba(220, 38, 127, 0.4)`,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)'
                }}
              />
            </Box>

            {/* Main Title with Korean Typography Influence */}
            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: 'white',
                fontWeight: 800,
                textAlign: 'center',
                fontFamily: '"Noto Sans KR", "Roboto", sans-serif',
                mb: 2,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                textShadow: '4px 4px 12px rgba(0,0,0,0.8)',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                animation: `${fadeInUp} 1.2s ease-out 0.3s both`
              }}
            >
              한국 자유 무술
            </Typography>

            {/* English Title */}
            <Typography
              variant="h2"
              component="h2"
              sx={{
                color: koreanColors.secondary,
                fontWeight: 600,
                textAlign: 'center',
                fontFamily: '"Noto Sans KR", "Roboto", sans-serif',
                mb: 1,
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
                textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
                animation: `${fadeInUp} 1.4s ease-out 0.5s both`
              }}
            >
              Korean Freestyle Martial Arts
            </Typography>

            {/* Subtitle */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              alignItems="center"
              sx={{ 
                mb: 4,
                animation: `${fadeInUp} 1.6s ease-out 0.7s both`
              }}
            >
              <Chip
                label="태권도 Taekwondo"
                sx={{
                  backgroundColor: koreanColors.primary,
                  color: 'white',
                  fontFamily: '"Noto Sans KR", "Roboto", sans-serif',
                  fontSize: '1.1rem',
                  padding: '8px 16px',
                  fontWeight: 600,
                  border: `2px solid ${koreanColors.secondary}`
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  color: 'white',
                  fontWeight: 300,
                  fontFamily: '"Noto Sans KR", sans-serif',
                  fontSize: { xs: '1.2rem', md: '1.5rem' }
                }}
              >
                &
              </Typography>
              <Chip
                label="합기도 Hapkido"
                sx={{
                  backgroundColor: koreanColors.accent,
                  color: 'white',
                  fontFamily: '"Noto Sans KR", "Roboto", sans-serif',
                  fontSize: '1.1rem',
                  padding: '8px 16px',
                  fontWeight: 600,
                  border: `2px solid ${koreanColors.secondary}`
                }}
              />
            </Stack>

            {/* ABN */}
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                textAlign: 'center',
                fontFamily: '"Roboto", sans-serif',
                fontSize: { xs: '0.9rem', md: '1.1rem' },
                fontWeight: 300,
                animation: `${fadeInUp} 1.8s ease-out 0.9s both`
              }}
            >
              ABN: 19476656938
            </Typography>

            {/* Call to Action */}
            <Button
              variant="contained"
              size="large"
              onClick={() => scrollToSection('contact')}
              sx={{
                mt: 4,
                backgroundColor: koreanColors.secondary,
                color: koreanColors.dark,
                fontFamily: '"Noto Sans KR", "Roboto", sans-serif',
                fontSize: '1.2rem',
                fontWeight: 700,
                padding: '12px 36px',
                borderRadius: '30px',
                border: `2px solid ${koreanColors.primary}`,
                textTransform: 'none',
                animation: `${fadeInUp} 2s ease-out 1.1s both`,
                '&:hover': {
                  backgroundColor: koreanColors.primary,
                  color: 'white',
                  transform: 'translateY(-4px)',
                  boxShadow: `0 12px 32px rgba(220, 38, 127, 0.4)`
                }
              }}
            >
              무료 체험 시작하기 Start Free Trial
            </Button>
          </HeroOverlay>
        </KoreanBackgroundContainer>
      </Box>

      {/* About KFMA Section */}
      <Section
        ref={aboutRef}
        id="about"
        sx={{
          backgroundImage: 'url(/background/taekwando/image.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: theme.palette.mode === 'dark' 
              ? 'rgba(26, 26, 26, 0.85)' 
              : 'rgba(248, 246, 240, 0.9)',
            zIndex: 1
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <SectionTitle variant="h2">
            무술의 길 - About Korean Freestyle Martial Arts
          </SectionTitle>

          <KoreanCard sx={{ mb: 6 }}>
            <CardContent sx={{ padding: 4 }}>
              <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                <FeatureIcon>
                  <MeditationIcon />
                </FeatureIcon>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: koreanColors.primary,
                      fontFamily: '"Noto Sans KR", "Roboto", sans-serif',
                      fontWeight: 700,
                      mb: 1
                    }}
                  >
                    정신력과 신체의 조화 - Mind & Body Harmony
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      fontFamily: '"Roboto", sans-serif'
                    }}
                  >
                    ABN: 19476656938
                  </Typography>
                </Box>
              </Stack>

              <Divider sx={{ mb: 4, background: `linear-gradient(90deg, ${koreanColors.primary}, ${koreanColors.secondary})`, height: '2px' }} />

              <Typography
                variant="body1"
                sx={{
                  textAlign: 'justify',
                  mb: 3,
                  fontFamily: '"Noto Sans KR", "Roboto", sans-serif',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.primary'
                }}
              >
                Welcome to Korean Freestyle Martial Arts. At KFMA, we are dedicated to providing exceptional training in 
                <strong style={{ color: koreanColors.primary }}> 태권도 Taekwondo</strong> & <strong style={{ color: koreanColors.accent }}>합기도 Hapkido</strong>. 
                KFMA is committed to Martial Arts excellence, blending traditional Korean techniques and training methods to empower people of all ages.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  textAlign: 'justify',
                  mb: 3,
                  fontFamily: '"Noto Sans KR", "Roboto", sans-serif',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.primary'
                }}
              >
                Our experienced Master Instructor believes that <strong style={{ color: koreanColors.primary }}>자신감 confidence</strong>, 
                <strong style={{ color: koreanColors.primary }}> 규율 discipline</strong>, 
                <strong style={{ color: koreanColors.primary }}> 인내 perseverance</strong> and 
                <strong style={{ color: koreanColors.primary }}> 힘 strength</strong> are the core values of an outstanding Martial Arts School.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  textAlign: 'justify',
                  fontFamily: '"Noto Sans KR", "Roboto", sans-serif',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.primary'
                }}
              >
                Join us today and embark on a journey of self-discovery and personal growth. Korean Freestyle Martial Arts is a 
                <strong style={{ color: koreanColors.accent }}> 가족 같은 family-oriented</strong> Club with current members ranging from just 4 years of age to almost 60+ years of age.
              </Typography>
            </CardContent>
          </KoreanCard>

          {/* Statistics Cards */}
          <Grid container spacing={4}>
            <Grid xs={12} md={4}>
              <StatCard>
                <FeatureIcon>
                  <StarsIcon />
                </FeatureIcon>
                <Typography 
                  className="stat-number"
                  variant="h3" 
                  sx={{ 
                    color: koreanColors.primary, 
                    mb: 2, 
                    fontWeight: 800,
                    transition: 'all 0.3s ease'
                  }}
                >
                  20+
                </Typography>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontFamily: '"Noto Sans KR", "Roboto", sans-serif',
                    color: 'text.primary',
                    fontWeight: 600
                  }}
                >
                  수련 경험 Years of Experience
                </Typography>
              </StatCard>
            </Grid>
            <Grid xs={12} md={4}>
              <StatCard>
                <FeatureIcon>
                  <FitnessIcon />
                </FeatureIcon>
                <Typography 
                  className="stat-number"
                  variant="h3" 
                  sx={{ 
                    color: koreanColors.primary, 
                    mb: 2, 
                    fontWeight: 800,
                    transition: 'all 0.3s ease'
                  }}
                >
                  4-60+
                </Typography>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontFamily: '"Noto Sans KR", "Roboto", sans-serif',
                    color: 'text.primary',
                    fontWeight: 600
                  }}
                >
                  연령대 Age Range
                </Typography>
              </StatCard>
            </Grid>
            <Grid xs={12} md={4}>
              <StatCard>
                <FeatureIcon>
                  <TrophyIcon />
                </FeatureIcon>
                <Typography 
                  className="stat-number"
                  variant="h3" 
                  sx={{ 
                    color: koreanColors.primary, 
                    mb: 2, 
                    fontWeight: 800,
                    transition: 'all 0.3s ease'
                  }}
                >
                  100%
                </Typography>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontFamily: '"Noto Sans KR", "Roboto", sans-serif',
                    color: 'text.primary',
                    fontWeight: 600
                  }}
                >
                  금메달 Competition Gold Medals
                </Typography>
              </StatCard>
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section
        ref={contactRef}
        id="contact"
        sx={{
          backgroundColor: theme.palette.mode === 'dark' ? koreanColors.dark : koreanColors.light,
          backgroundImage: 'url(/background/image copy 3.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: theme.palette.mode === 'dark' 
              ? 'rgba(26, 26, 26, 0.9)' 
              : 'rgba(248, 246, 240, 0.95)',
            zIndex: 1
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <SectionTitle variant="h2">
            연락하기 - Contact Us
          </SectionTitle>

          <Grid container spacing={6}>
            {/* Contact Information */}
            <Grid xs={12} md={4}>
              <Stack spacing={3}>
                <KoreanCard>
                  <CardContent sx={{ textAlign: 'center', padding: 3 }}>
                    <FeatureIcon>
                      <EmailIcon />
                    </FeatureIcon>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ 
                        fontFamily: '"Noto Sans KR", "Roboto", sans-serif',
                        color: koreanColors.primary,
                        fontWeight: 600
                      }}
                    >
                      Master Instructor Email
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        wordBreak: 'break-word',
                        fontFamily: '"Roboto", sans-serif',
                        color: 'text.primary'
                      }}
                    >
                      koreanfreestylema@gmail.com
                    </Typography>
                  </CardContent>
                </KoreanCard>

                <KoreanCard>
                  <CardContent sx={{ textAlign: 'center', padding: 3 }}>
                    <FeatureIcon>
                      <PhoneIcon />
                    </FeatureIcon>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ 
                        fontFamily: '"Noto Sans KR", "Roboto", sans-serif',
                        color: koreanColors.primary,
                        fontWeight: 600
                      }}
                    >
                      전화번호 Phone
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 'bold',
                        color: koreanColors.secondary,
                        fontFamily: '"Roboto", sans-serif'
                      }}
                    >
                      0432 289 866
                    </Typography>
                  </CardContent>
                </KoreanCard>
              </Stack>
            </Grid>

            {/* Contact Form */}
            <Grid xs={12} md={8}>
              <KoreanCard>
                <CardContent sx={{ padding: 4 }}>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      mb: 3, 
                      color: koreanColors.primary, 
                      fontFamily: '"Noto Sans KR", "Roboto", sans-serif',
                      fontWeight: 700
                    }}
                  >
                    KFMA 여정을 시작하세요 - Start Your KFMA Journey
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mb: 4, 
                      fontFamily: '"Noto Sans KR", "Roboto", sans-serif',
                      fontSize: '1.1rem',
                      lineHeight: 1.6
                    }}
                  >
                    Ready to begin your martial arts journey? Contact us today to start your 
                    <strong style={{ color: koreanColors.primary }}> 무료 체험 free trial</strong>!
                  </Typography>

                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => setContactModalOpen(true)}
                    sx={{
                      backgroundColor: koreanColors.primary,
                      px: 4,
                      py: 2,
                      fontSize: '1.2rem',
                      fontFamily: '"Noto Sans KR", "Roboto", sans-serif',
                      fontWeight: 600,
                      borderRadius: '25px',
                      border: `2px solid ${koreanColors.secondary}`,
                      textTransform: 'none',
                      '&:hover': { 
                        backgroundColor: koreanColors.secondary,
                        color: koreanColors.dark,
                        transform: 'translateY(-3px)',
                        boxShadow: `0 12px 32px rgba(220, 38, 127, 0.4)`
                      },
                      mb: 4
                    }}
                  >
                    Contact Us Now
                  </Button>

                  <Divider sx={{ 
                    my: 4,
                    background: `linear-gradient(90deg, ${koreanColors.primary}, ${koreanColors.secondary})`,
                    height: '2px'
                  }} />

                  {/* Social Media */}
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 3, 
                      color: koreanColors.primary, 
                      fontFamily: '"Noto Sans KR", "Roboto", sans-serif',
                      fontWeight: 600
                    }}
                  >
                    소셜 미디어 - Follow Us
                  </Typography>
                  
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <Button
                      variant="contained"
                      startIcon={<YouTubeIcon />}
                      component="a"
                      href="https://www.youtube.com/@KoreanFreestyleMartialArts"
                      target="_blank"
                      sx={{
                        backgroundColor: '#FF0000',
                        borderRadius: '25px',
                        padding: '12px 24px',
                        fontFamily: '"Noto Sans KR", "Roboto", sans-serif',
                        fontWeight: 600,
                        textTransform: 'none',
                        '&:hover': { 
                          backgroundColor: '#CC0000',
                          transform: 'translateY(-3px)',
                          boxShadow: '0 8px 24px rgba(255,0,0,0.3)'
                        }
                      }}
                    >
                      YouTube
                    </Button>
                    
                    <Button
                      variant="contained"
                      startIcon={<FacebookIcon />}
                      component="a"
                      href="https://www.facebook.com/@korean.freestyle.martial.arts.24"
                      target="_blank"
                      sx={{
                        backgroundColor: '#1877F2',
                        borderRadius: '25px',
                        padding: '12px 24px',
                        fontFamily: '"Noto Sans KR", "Roboto", sans-serif',
                        fontWeight: 600,
                        textTransform: 'none',
                        '&:hover': { 
                          backgroundColor: '#166FE5',
                          transform: 'translateY(-3px)',
                          boxShadow: '0 8px 24px rgba(24,119,242,0.3)'
                        }
                      }}
                    >
                      Facebook
                    </Button>
                    
                    <Button
                      variant="contained"
                      startIcon={<InstagramIcon />}
                      component="a"
                      href="https://www.instagram.com/koreanfreestylema/"
                      target="_blank"
                      sx={{
                        backgroundColor: '#E4405F',
                        borderRadius: '25px',
                        padding: '12px 24px',
                        fontFamily: '"Noto Sans KR", "Roboto", sans-serif',
                        fontWeight: 600,
                        textTransform: 'none',
                        '&:hover': { 
                          backgroundColor: '#D62976',
                          transform: 'translateY(-3px)',
                          boxShadow: '0 8px 24px rgba(228,64,95,0.3)'
                        }
                      }}
                    >
                      Instagram
                    </Button>
                  </Stack>
                </CardContent>
              </KoreanCard>
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <ScrollToTopFab onClick={scrollToTop}>
          <ArrowUpIcon />
        </ScrollToTopFab>
      )}

      {/* Contact Modal Dialog */}
      <Dialog
        open={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '16px',
            border: `2px solid ${koreanColors.primary}`,
            background: theme.palette.mode === 'dark' 
              ? `linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(220, 38, 127, 0.1) 100%)`
              : `linear-gradient(135deg, rgba(248, 246, 240, 0.95) 0%, rgba(220, 38, 127, 0.05) 100%)`,
            backdropFilter: 'blur(10px)'
          }
        }}
      >
        <DialogTitle sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: `2px solid ${koreanColors.primary}`,
          background: `linear-gradient(90deg, ${koreanColors.primary}, ${koreanColors.secondary})`
        }}>
          <Typography 
            variant="h5" 
            sx={{ 
              fontFamily: '"Noto Sans KR", "Roboto", sans-serif', 
              fontWeight: 700, 
              color: 'white'
            }}
          >
            KFMA 여정 시작하기 - Start Your KFMA Journey
          </Typography>
          <IconButton 
            onClick={() => setContactModalOpen(false)}
            sx={{ color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        
        <DialogContent sx={{ pt: 3 }}>
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 3, 
              fontFamily: '"Noto Sans KR", "Roboto", sans-serif',
              fontSize: '1.1rem'
            }}
          >
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
                    borderRadius: '12px',
                    '&.Mui-focused fieldset': {
                      borderColor: koreanColors.primary,
                    },
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: koreanColors.primary,
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
                    borderRadius: '12px',
                    '&.Mui-focused fieldset': {
                      borderColor: koreanColors.primary,
                    },
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: koreanColors.primary,
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
                    borderRadius: '12px',
                    '&.Mui-focused fieldset': {
                      borderColor: koreanColors.primary,
                    },
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: koreanColors.primary,
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
                    borderRadius: '12px',
                    '&.Mui-focused fieldset': {
                      borderColor: koreanColors.primary,
                    },
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: koreanColors.primary,
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
                    borderRadius: '12px',
                    '&.Mui-focused fieldset': {
                      borderColor: koreanColors.primary,
                    },
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: koreanColors.primary,
                  },
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        
        <DialogActions sx={{ p: 3, borderTop: `1px solid ${koreanColors.primary}30` }}>
          <Button
            onClick={() => setContactModalOpen(false)}
            sx={{ 
              fontFamily: '"Noto Sans KR", "Roboto", sans-serif',
              borderRadius: '25px'
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleContactSubmit}
            variant="contained"
            disabled={!contactForm.firstName || !contactForm.lastName || !contactForm.email}
            sx={{
              backgroundColor: koreanColors.primary,
              fontFamily: '"Noto Sans KR", "Roboto", sans-serif',
              borderRadius: '25px',
              border: `2px solid ${koreanColors.secondary}`,
              '&:hover': { 
                backgroundColor: koreanColors.secondary,
                color: koreanColors.dark
              },
              '&:disabled': { backgroundColor: '#ccc' }
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Home;
