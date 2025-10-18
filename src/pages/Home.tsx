import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  Avatar,
  Stack,
  alpha,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import {
  Security,
  Engineering,
  Visibility,
  ArrowForward,
  Factory,
  Construction,
  Train,
  LocalShipping,
  PlayArrow,
  Close,
  Settings,
  Business,
  SmartToy,
  Shield,
  Insights,
  EmojiEvents,
  CheckCircle,
  FitnessCenter,
  Psychology,
  Group,
  School,
  SportsKabaddi,
  SportsMartialArts,
  Star,
  Timeline,
  PhotoLibrary,
  FormatQuote,
} from '@mui/icons-material';
import { keyframes } from '@mui/system';

// KFMA brand colors inspired by Korean martial arts
const colorPalette = {
  // KFMA Brand Colors
  primary: '#CC0000',        // Traditional Korean red
  primaryLight: '#FF3333',   // Lighter red for accents
  primaryDark: '#990000',    // Darker red for depth
  
  // Secondary Colors
  secondary: '#000000',      // Black for contrast
  gold: '#FFD700',          // Gold for achievements/belts
  
  // Modern Neutrals
  black: '#000000',
  charcoal: '#1A1A1A',
  darkGray: '#333333',
  mediumGray: '#666666',
  lightGray: '#999999',
  veryLightGray: '#F5F5F5',
  white: '#FFFFFF',
  
  // Accent Colors
  success: '#00C851',
  warning: '#FF8800',
  error: '#FF4444',
  
  // Gradients
  primaryGradient: 'linear-gradient(135deg, #CC0000 0%, #990000 100%)',
  heroGradient: 'linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #333333 100%)',
};

// Subtle modern animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;



const counterAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// Animated Counter Component
const AnimatedCounter: React.FC<{
  value: number;
  suffix?: string;
  duration?: number;
  startDelay?: number;
}> = ({ value, suffix = '', duration = 2000, startDelay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const increment = value / (duration / 50);
      let currentCount = 0;

      const counter = setInterval(() => {
        currentCount += increment;
        if (currentCount >= value) {
          setCount(value);
          clearInterval(counter);
        } else {
          setCount(Math.floor(currentCount));
        }
      }, 50);

      return () => clearInterval(counter);
    }, startDelay);

    return () => clearTimeout(timer);
  }, [isVisible, value, duration, startDelay]);

  return (
    <Box
      ref={elementRef}
      sx={{
        animation: isVisible ? `${counterAnimation} 0.8s ease-out` : 'none',
      }}
    >
      {count}{suffix}
    </Box>
  );
};

// Reveal on Scroll Component
const RevealOnScroll: React.FC<{
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}> = ({ children, delay = 0, direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getAnimation = () => {
    switch (direction) {
      case 'left':
        return slideInFromLeft;
      case 'right':
        return slideInFromRight;
      default:
        return fadeInUp;
    }
  };

  return (
    <Box
      ref={elementRef}
      sx={{
        opacity: isVisible ? 1 : 0,
        animation: isVisible ? `${getAnimation()} 0.8s ease-out` : 'none',
      }}
    >
      {children}
    </Box>
  );
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // KFMA background images carousel
  const backgroundImages = [
    '/public/kfma/result_img_2024_12_26_08_18_23.jpg',
    '/public/kfma/11062b_eb537e20e9a443138bef8c8395dee5cb~mv2.avif',
    '/public/kfma/6442710547835271098_edited_edited.jpg',
    '/background/taekwando/martial-arts-bg-1.jpg',
    '/background/taekwando/martial-arts-bg-2.jpg',
    '/background/taekwando/martial-arts-bg-3.jpg'
  ];

  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // KFMA Programs and Training Options
  const programColors = {
    'taekwondo': colorPalette.primary,     // Korean red
    'hapkido': colorPalette.secondary,     // Black
    'family': colorPalette.gold,           // Gold
    'competition': colorPalette.primary    // Red
  };

  const martialArtsPrograms = [
    {
      id: 'taekwondo',
      title: 'Taekwondo Training',
      subtitle: 'Traditional Korean Martial Art',
      description: 'Master the art of striking and kicking techniques in our comprehensive Taekwondo program. Focus on patterns (poomsae), sparring, and self-defense while building confidence, discipline, and physical fitness. Suitable for all ages from 4 to 50+.',
      icon: <SportsMartialArts />,
      image: '/public/kfma/12f29b_031041a90ff34c618133bce229fddbd5~mv2.avif',
      route: '/taekwondo',
      featureColor: programColors['taekwondo']
    },
    {
      id: 'hapkido',
      title: 'Hapkido Training',
      subtitle: 'Korean Self-Defense System',
      description: 'Learn the comprehensive martial art that combines joint locks, throws, and strikes. Hapkido emphasizes redirecting opponent\'s force and using leverage over strength, making it effective for practitioners of all sizes.',
      icon: <Shield />,
      image: '/public/kfma/12f29b_05614dcb336e46888a42d5612ef59298~mv2.avif',
      route: '/hapkido',
      featureColor: programColors['hapkido']
    },
    {
      id: 'family',
      title: 'Family Training',
      subtitle: 'Train Together, Grow Together',
      description: 'Join our martial arts family and experience the joy of training with your loved ones. Many families are part of KFMA, enjoying the journey of growth and practice together. Discover the benefits of training with your children at KFMA.',
      icon: <Group />,
      image: '/public/kfma/6442710547835271098_edited_edited.jpg',
      route: '/family-training',
      featureColor: programColors['family']
    },
    {
      id: 'competition',
      title: 'Competition Team',
      subtitle: '100% Gold Medal Success',
      description: 'Join Team KFMA and compete at the highest levels. Our competition team has achieved 100% gold medal success in 2025 competitions including Gold Coast Open and Caboolture Open. Train with dedication and represent KFMA with pride.',
      icon: <EmojiEvents />,
      image: '/public/kfma/12f29b_16d3aa9f3e5546de91424e3920b5c2d4~mv2.avif',
      route: '/competition-team',
      featureColor: programColors['competition']
    }
  ];

  // KFMA Training Benefits
  const trainingBenefits = [
    { title: 'Physical Fitness & Strength', icon: <FitnessCenter />, type: 'benefit' },
    { title: 'Confidence & Self-Defense', icon: <Psychology />, type: 'benefit' },
    { title: 'Discipline & Focus', icon: <School />, type: 'benefit' },
    { title: 'Traditional Techniques & Values', icon: <Star />, type: 'benefit' }
  ];

  // KFMA Age Groups and Programs
  const ageGroups = [
    { name: 'Little Dragons', icon: <SportsKabaddi />, type: 'age-group', ages: '4-6 years' },
    { name: 'Junior Warriors', icon: <SportsMartialArts />, type: 'age-group', ages: '7-12 years' },
    { name: 'Teen Champions', icon: <EmojiEvents />, type: 'age-group', ages: '13-17 years' },
    { name: 'Adult Masters', icon: <Psychology />, type: 'age-group', ages: '18-50+ years' },
    { name: 'Family Classes', icon: <Group />, type: 'age-group', ages: 'All ages' },
    { name: 'Competition Team', icon: <Star />, type: 'age-group', ages: 'Selected students' }
  ];

  // KFMA stats
  const stats = [
    { value: '35+', label: 'Years Experience', sublabel: 'Master Mark Buxton' },
    { value: '100%', label: 'Gold Medals', sublabel: '2025 Competitions' },
    { value: '4+', label: 'Age Range', sublabel: 'to 50+ welcome' },
  ];

  return (
    <Box sx={{ overflow: 'hidden', background: colorPalette.white }}>


      <Box
        sx={{
          minHeight: '80vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          zIndex: 5,
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: 'absolute',
            width: '50%',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `url('/public/new/logo.png') center/cover no-repeat`,
            zIndex: 1,
          }}
        />
      </Box>
        


      {/* Modern Hero Section with Carousel Background */}
      <Box
        sx={{
          minHeight: '100vh',
          color: '#ffffff',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Carousel Background Images */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `url('/public/kfma/file_004.mp4') center/cover no-repeat`,
              // background: `url('${image}') center/cover no-repeat`,
              // backgroundAttachment: 'fixed',
              // opacity: index === currentImageIndex ? 1 : 0,
              // transition: 'opacity 2s ease-in-out',
              zIndex: 1,
            }}
          />

        {/* Dark Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${alpha(colorPalette.black, 0.8)} 25%, ${alpha(colorPalette.charcoal, 0)} 100%)`,
            zIndex: 2,
          }}
        />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 4 }}>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} lg={8}>

              {/* KFMA credentials */}
              <RevealOnScroll delay={200}>
                <Stack direction="row" spacing={2} sx={{ mb: 4, flexWrap: 'wrap' }}>
                  <Chip
                    label="TAEKWONDO & HAPKIDO"
                    size="small"
                    sx={{
                      background: colorPalette.primaryGradient,
                      color: '#ffffff',
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      letterSpacing: '1px',
                      mb: 1,
                    }}
                  />
                  <Chip
                    label="ABN: 19476656938"
                    size="small"
                    sx={{
                      backgroundColor: 'transparent',
                      color: colorPalette.primary,
                      border: `1px solid ${colorPalette.primary}`,
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      letterSpacing: '1px',
                      mb: 1,
                    }}
                  />
                </Stack>
              </RevealOnScroll>

              {/* Large, clean headline */}
              <RevealOnScroll delay={400}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '3rem', sm: '4rem', md: '5rem', lg: '6rem' },
                    fontWeight: 300,
                    lineHeight: { xs: 1.1, md: 1.0 },
                    letterSpacing: '-0.02em',
                    mb: 4,
                    fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                  }}
                >
                  Welcome to
                  <br />
                  <Box component="span" sx={{ color: colorPalette.primary, fontWeight: 400 }}>
                    Korean Freestyle
                  </Box>
                  <br />
                  Martial Arts
                </Typography>
              </RevealOnScroll>

              {/* KFMA value proposition */}
              <RevealOnScroll delay={600}>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    fontWeight: 300,
                    color: colorPalette.lightGray,
                    lineHeight: 1.5,
                    mb: 6,
                    maxWidth: '700px',
                    fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                  }}
                >
                  At KFMA, we are dedicated to providing exceptional training in Taekwondo & Hapkido. 
                  KFMA is committed to Martial Arts excellence, blending traditional techniques and training methods 
                  to empower people of all ages. Our experienced Master Instructor believes that confidence, 
                  discipline, perseverance and strength are the core values of an outstanding Martial Arts School.
                </Typography>
              </RevealOnScroll>

              {/* Single, prominent CTA */}
              <RevealOnScroll delay={800}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  onClick={() => navigate('/contact')}
                  sx={{
                    background: colorPalette.primary,
                    fontSize: '1rem',
                    fontWeight: 600,
                    px: 6,
                    py: 2.5,
                    borderRadius: 1,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: colorPalette.primaryDark,
                      transform: 'translateY(-2px)',
                      boxShadow: `0 8px 24px ${alpha(colorPalette.primary, 0.4)}`,
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Contact Us
                </Button>
              </RevealOnScroll>
            </Grid>

            <Grid item xs={12} lg={4}>
              {/* Clean stats display */}
              <RevealOnScroll delay={600} direction="right">
                <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
                  {stats.map((stat, index) => (
                    <Box key={index} sx={{ mb: 4 }}>
                      <Typography
                        variant="h2"
                        sx={{
                          fontSize: '4rem',
                          fontWeight: 300,
                          color: colorPalette.primary,
                          lineHeight: 1,
                          mb: 0.5,
                          fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                        }}
                      >
                        <AnimatedCounter 
                          value={parseInt(stat.value.replace(/\D/g, ''))} 
                          suffix={stat.value.replace(/[0-9]/g, '')}
                          startDelay={index * 200}
                        />
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: '#ffffff',
                          fontWeight: 600,
                          fontSize: '1rem',
                          mb: 0.25,
                        }}
                      >
                        {stat.label}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: colorPalette.lightGray,
                          fontSize: '0.875rem',
                        }}
                      >
                        {stat.sublabel}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </RevealOnScroll>
            </Grid>
          </Grid>
        </Container>
      </Box>



      {/* Products Section - Clean grid layout */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: colorPalette.white, position: 'relative', zIndex: 5 }}>
        <Container maxWidth="lg">
          
              <RevealOnScroll>
                {/* Master Mark Photo */}
                <Box
                  sx={{
                    position: 'relative',
                    top: -50,
                    zIndex: 3,
                    width: '100%',
                    height: 300,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                <Box
                  sx={{
                    zIndex: 3,
                    width: 250,
                    height: 250,
                    position: 'relative',
                  }}
                >
                  <img
                    src="/public/kfma/11062b_eb537e20e9a443138bef8c8395dee5cb~mv2.avif"
                    alt="Master Mark Buxton practicing martial arts"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      border: `4px solid ${colorPalette.primary}`,
                      boxShadow: `0 8px 24px ${alpha(colorPalette.black, 0.3)}`,
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                  {/* Master credentials overlay */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: -20,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: colorPalette.primary,
                      color: '#ffffff',
                      px: 3,
                      py: 1,
                      borderRadius: 1,
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                      boxShadow: `0 4px 12px ${alpha(colorPalette.primary, 0.4)}`,
                    }}
                  >
                    Master Mark Buxton
                  </Box>
                </Box>
              </Box>
          </RevealOnScroll>

          {/* Master Mark Introduction */}
                   <RevealOnScroll>
            <Box sx={{ textAlign: 'center', maxWidth: '900px', mx: 'auto', mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 300,
                  lineHeight: 1.2,
                  color: colorPalette.black,
                  mb: 2,
                  fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                }}
              >
                Master Mark Buxton
              </Typography>

              {/* Master credentials */}
              <Stack direction="row" spacing={3} justifyContent="center" sx={{ mb: 4, flexWrap: 'wrap' }}>
                <Chip
                  label="Taekwondo 5th Dan"
                  sx={{
                    backgroundColor: colorPalette.primary,
                    color: '#ffffff',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    mb: 1,
                  }}
                />
                <Chip
                  label="Hapkido 4th Dan"
                  sx={{
                    backgroundColor: colorPalette.secondary,
                    color: '#ffffff',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    mb: 1,
                  }}
                />
                <Chip
                  label="Kumdo 1st Dan"
                  sx={{
                    backgroundColor: colorPalette.gold,
                    color: colorPalette.black,
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    mb: 1,
                  }}
                />
              </Stack>
              
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1.125rem', md: '1.25rem' },
                  fontWeight: 300,
                  color: colorPalette.mediumGray,
                  lineHeight: 1.6,
                  mb: 4,
                  fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                }}
              >
                Korean Freestyle Martial Arts was founded by Master Mark Buxton, a dedicated martial artist with over 35 years of experience. 
                Master Mark offers a supportive environment for all ages, from 4 to 50+. With a deep connection to South Korea, having spent years 
                living there and immersing himself in the culture and language, Master Mark fosters a friendly and inclusive training atmosphere 
                where members can improve their fitness, build skills and lifelong friendships.
              </Typography>
            </Box>
          </RevealOnScroll>


          {/* KFMA Programs grid - Image-focused design */}
          <Grid container spacing={4}>
            {martialArtsPrograms.map((program, index) => (
              <Grid item xs={12} md={6} key={program.id}>
                <RevealOnScroll delay={index * 100}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 1, // Sharp corners
                      border: 'none',
                      boxShadow: `0 4px 16px ${alpha(colorPalette.black, 0.1)}`,
                      backgroundColor: '#ffffff',
                      cursor: 'pointer',
                      overflow: 'hidden',
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: `0 8px 25px ${alpha(program.featureColor, 0.15)}`, // Feature color shadow on hover
                        '& .program-image': {
                          transform: 'scale(1.05)',
                        },
                        '& .program-overlay': {
                          opacity: 1,
                        },
                        '& .feature-accent': {
                          width: '100%',
                        },
                        '& .content-overlay': {
                          transform: 'translateY(0)',
                        },
                      },
                    }}
                    onClick={() => navigate(program.route)}
                  >
                    {/* Large Featured Image Container */}
                    <Box sx={{ position: 'relative', overflow: 'hidden', height: 320 }}>
                      {/* Feature Color Accent Bar */}
                      <Box
                        className="feature-accent"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          height: 6,
                          width: '50%',
                          backgroundColor: program.featureColor,
                          zIndex: 4,
                          transition: 'width 0.4s ease',
                        }}
                      />
                      
                      {/* Main Program Image */}
                      <Box
                        component="img"
                        src={program.image}
                        alt={program.title}
                        className="program-image"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease',
                        }}
                      />
                      
                      {/* Dark gradient overlay for text readability */}
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '60%',
                          background: `linear-gradient(to top, ${alpha(colorPalette.black, 0.8)} 0%, ${alpha(colorPalette.black, 0.4)} 50%, transparent 100%)`,
                          zIndex: 2,
                        }}
                      />

                      {/* Hover overlay with Learn More */}
                      <Box
                        className="program-overlay"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `linear-gradient(135deg, ${alpha(program.featureColor, 0.9)} 0%, ${alpha(program.featureColor, 0.7)} 100%)`,
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          zIndex: 3,
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            color: '#ffffff',
                            fontWeight: 600,
                            textAlign: 'center',
                            px: 2,
                            fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                          }}
                        >
                          Join Program
                        </Typography>
                      </Box>

                      {/* Feature Color Icon Badge */}
                      {/* <Box
                        sx={{
                          position: 'absolute',
                          top: 20,
                          right: 20,
                          width: 56,
                          height: 56,
                          borderRadius: 1, // Sharp corners
                          backgroundColor: product.featureColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: `0 4px 16px ${alpha(product.featureColor, 0.4)}`,
                          zIndex: 4,
                        }}
                      >
                        <Box sx={{ color: '#ffffff', fontSize: '1.75rem' }}>
                          {product.icon}
                        </Box>
                      </Box> */}

                      {/* Content overlay on image */}
                      <Box
                        className="content-overlay"
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          p: 4,
                          zIndex: 3,
                          transform: 'translateY(10px)',
                          transition: 'transform 0.3s ease',
                        }}
                      >
                        {/* Product Category Tag */}
                        {/* <Chip
                          label={product.subtitle}
                          size="small"
                          sx={{
                            backgroundColor: alpha('#ffffff', 0.9),
                            color: product.featureColor,
                            fontWeight: 600,
                            fontSize: '0.75rem',
                            height: 28,
                            mb: 2,
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            border: `2px solid ${product.featureColor}`,
                            borderRadius: 0.5,
                          }}
                        /> */}

                        {/* Program Title on Image */}
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 600,
                            color: '#ffffff',
                            mb: 2,
                            lineHeight: 1.2,
                            fontSize: { xs: '1.5rem', md: '1.75rem' },
                            fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                            textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                          }}
                        >
                          {program.title}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Description Content Below Image */}
                    <CardContent sx={{ p: 4, backgroundColor: colorPalette.veryLightGray }}>
                      {/* Program Description */}
                      <Typography
                        variant="body1"
                        sx={{
                          color: colorPalette.darkGray,
                          lineHeight: 1.6,
                          mb: 3,
                          fontSize: '1rem',
                          fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                          fontWeight: 300,
                        }}
                      >
                        {program.description}
                      </Typography>

                      {/* CTA Button with Feature Color */}
                      {/* <Button
                        variant="contained"
                        endIcon={<ArrowForward />}
                        sx={{
                          backgroundColor: product.featureColor,
                          color: '#ffffff',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                          fontSize: '0.875rem',
                          px: 4,
                          py: 1.5,
                          borderRadius: 1,
                          boxShadow: 'none',
                          '&:hover': {
                            backgroundColor: product.featureColor,
                            transform: 'translateY(-2px)',
                            boxShadow: `0 6px 20px ${alpha(product.featureColor, 0.3)}`,
                            '& .MuiSvgIcon-root': {
                              transform: 'translateX(4px)',
                            },
                          },
                          '& .MuiSvgIcon-root': {
                            transition: 'transform 0.3s ease',
                            fontSize: '1rem',
                          },
                        }}
                      >
                        Explore Solution
                      </Button> */}
                    </CardContent>
                  </Card>
                </RevealOnScroll>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Free Trial & Pricing Hero Section */}
      <Box
        sx={{
          minHeight: '80vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          zIndex: 5,
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `url('/public/kfma/12f29b_031041a90ff34c618133bce229fddbd5~mv2.avif') center/cover no-repeat`,
            backgroundAttachment: 'fixed',
            zIndex: 1,
          }}
        />
        
        {/* Dark Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${alpha(colorPalette.black, 0.7)} 0%, ${alpha(colorPalette.charcoal, 0.8)} 100%)`,
            zIndex: 2,
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} lg={8}>
              <RevealOnScroll>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                    fontWeight: 300,
                    lineHeight: 1.1,
                    color: '#ffffff',
                    mb: 4,
                    fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                  }}
                >
                  Start Your
                  <Box component="span" sx={{ color: colorPalette.primary, fontWeight: 400 }}>
                    {' '}Free Trial
                  </Box>
                  <br />
                  Today!
                </Typography>
                
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    fontWeight: 300,
                    color: colorPalette.lightGray,
                    lineHeight: 1.5,
                    mb: 6,
                    maxWidth: '700px',
                    fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                  }}
                >
                  Enjoy a 2-week Free Trial! Sign up in the first week to receive an additional 2 weeks FREE! 
                  Experience our exceptional training in Taekwondo & Hapkido with no commitment.
                </Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mb: 4 }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    onClick={() => navigate('/free-trial')}
                    sx={{
                      background: colorPalette.primary,
                      fontSize: '1rem',
                      fontWeight: 600,
                      px: 6,
                      py: 2.5,
                      borderRadius: 1,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      boxShadow: 'none',
                      '&:hover': {
                        backgroundColor: colorPalette.primaryDark,
                        transform: 'translateY(-2px)',
                        boxShadow: `0 8px 24px ${alpha(colorPalette.primary, 0.4)}`,
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Start Free Trial
                  </Button>
                  
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => navigate('/pricing')}
                    sx={{
                      borderColor: '#ffffff',
                      color: '#ffffff',
                      fontSize: '1rem',
                      fontWeight: 600,
                      px: 6,
                      py: 2.5,
                      borderRadius: 1,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      '&:hover': {
                        backgroundColor: alpha('#ffffff', 0.1),
                        borderColor: '#ffffff',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    View Pricing
                  </Button>
                </Stack>
              </RevealOnScroll>
            </Grid>

            <Grid item xs={12} lg={4}>
              <RevealOnScroll direction="right">
                <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
                  {/* Free Trial Benefits */}
                  <Box 
                    sx={{ 
                      backgroundColor: alpha('#ffffff', 0.1), 
                      borderRadius: 2, 
                      p: 4,
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: { xs: '1.5rem', md: '2rem' },
                        fontWeight: 600,
                        color: '#ffffff',
                        mb: 3,
                        fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                      }}
                    >
                      What's Included:
                    </Typography>
                    
                    <Stack spacing={2}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <CheckCircle sx={{ color: colorPalette.primary, fontSize: '1.5rem' }} />
                        <Typography sx={{ color: '#ffffff', fontWeight: 500 }}>
                          2-week Free Trial
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <CheckCircle sx={{ color: colorPalette.primary, fontSize: '1.5rem' }} />
                        <Typography sx={{ color: '#ffffff', fontWeight: 500 }}>
                          Discounted Uniform
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <CheckCircle sx={{ color: colorPalette.primary, fontSize: '1.5rem' }} />
                        <Typography sx={{ color: '#ffffff', fontWeight: 500 }}>
                          Complimentary Taekwondo Grading
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <CheckCircle sx={{ color: colorPalette.primary, fontSize: '1.5rem' }} />
                        <Typography sx={{ color: '#ffffff', fontWeight: 500 }}>
                          Complimentary Hapkido Grading
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </RevealOnScroll>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 2/3 Page Content Section - White text on grey background */}
      <Box sx={{ py: { xs: 12, md: 24 }, backgroundColor: colorPalette.darkGray, position: 'relative', zIndex: 5 }}>
        <Container maxWidth="xl">
          <Grid container spacing={12} alignItems="center">
            <Grid item xs={12} lg={7}>
              <RevealOnScroll>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    fontWeight: 300,
                    lineHeight: 1.1,
                    color: '#ffffff',
                    mb: 4,
                    fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                  }}
                >
                  Train Together,
                  <Box component="span" sx={{ color: colorPalette.primary, fontWeight: 400 }}>
                    {' '}Grow Together
                  </Box>
                  <br />
                  at KFMA
                </Typography>
                
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    fontWeight: 300,
                    color: colorPalette.lightGray,
                    lineHeight: 1.6,
                    mb: 6,
                    fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                  }}
                >
                  Join our martial arts family at Korean Freestyle Martial Arts and experience the joy of training 
                  with your loved ones. Many families are part of KFMA, enjoying the journey of growth and practice together.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.125rem',
                    color: '#ffffff',
                    lineHeight: 1.7,
                    mb: 4,
                  }}
                >
                  With state-of-the-art facilities and a supportive community, we strive to help our students reach their full potential. 
                  Our experienced Master Instructor believes that confidence, discipline, perseverance and strength are the core values 
                  of an outstanding Martial Arts School.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.125rem',
                    color: '#ffffff',
                    lineHeight: 1.7,
                    mb: 6,
                  }}
                >
                  Discover the many benefits of training with your children at KFMA and start your family's martial arts adventure today! 
                  Join us today and embark on a journey of self-discovery and personal growth.
                </Typography>

                <Button
                  variant="outlined"
                  size="large"
                  endIcon={<ArrowForward />}
                  onClick={() => navigate('/about')}
                  sx={{
                    borderColor: '#ffffff',
                    color: '#ffffff',
                    fontSize: '1rem',
                    fontWeight: 600,
                    px: 6,
                    py: 2.5,
                    borderRadius: 1,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    '&:hover': {
                      backgroundColor: '#ffffff',
                      color: colorPalette.darkGray,
                      transform: 'translateY(-2px)',
                      boxShadow: `0 8px 24px ${alpha('#ffffff', 0.3)}`,
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Learn More
                </Button>
              </RevealOnScroll>
            </Grid>

            <Grid item xs={12} lg={5}>
              <RevealOnScroll direction="right">
                <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: '1.75rem', md: '2.25rem' },
                      fontWeight: 300,
                      color: '#ffffff',
                      mb: 4,
                      fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                    }}
                  >
                    Training Benefits
                  </Typography>
                  
                  <Stack spacing={3} sx={{ mb: 6 }}>
                    {trainingBenefits.map((benefit, index) => (
                      <RevealOnScroll key={index} delay={index * 100}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                          <Avatar
                            sx={{
                              backgroundColor: colorPalette.primary,
                              color: '#ffffff',
                              width: 40,
                              height: 40,
                              mt: 0.5,
                            }}
                          >
                            {benefit.icon}
                          </Avatar>
                          <Typography
                            variant="body1"
                            sx={{
                              color: '#ffffff',
                              fontWeight: 400,
                              lineHeight: 1.6,
                            }}
                          >
                            {benefit.title}
                          </Typography>
                        </Box>
                      </RevealOnScroll>
                    ))}
                  </Stack>

                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { xs: '1.75rem', md: '2.25rem' },
                      fontWeight: 300,
                      color: '#ffffff',
                      mb: 4,
                      fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                    }}
                  >
                    Age Groups & Programs
                  </Typography>
                  
                  <Grid container spacing={2}>
                    {ageGroups.map((group, index) => (
                      <Grid item xs={6} sm={4} key={index}>
                        <RevealOnScroll delay={index * 50}>
                          <Box
                            sx={{
                              textAlign: 'center',
                              p: 2,
                              borderRadius: 0.5,
                              backgroundColor: alpha('#ffffff', 0.1),
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                backgroundColor: alpha('#ffffff', 0.15),
                                transform: 'translateY(-2px)',
                                borderColor: colorPalette.primary,
                              },
                            }}
                          >
                            <Avatar
                              sx={{
                                backgroundColor: colorPalette.primary,
                                color: '#ffffff',
                                width: 48,
                                height: 48,
                                mx: 'auto',
                                mb: 1,
                              }}
                            >
                              {group.icon}
                            </Avatar>
                            <Typography
                              variant="body2"
                              sx={{
                                color: '#ffffff',
                                fontWeight: 600,
                                fontSize: '0.875rem',
                                mb: 0.5,
                              }}
                            >
                              {group.name}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                color: colorPalette.lightGray,
                                fontSize: '0.75rem',
                              }}
                            >
                              {group.ages}
                            </Typography>
                          </Box>
                        </RevealOnScroll>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </RevealOnScroll>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Competition Success Hero Section */}
      <Box
        sx={{
          minHeight: '80vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          zIndex: 5,
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `url('/public/kfma/12f29b_16d3aa9f3e5546de91424e3920b5c2d4~mv2.avif') center/cover no-repeat`,
            backgroundAttachment: 'fixed',
            zIndex: 1,
          }}
        />
        
        {/* Dark Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${alpha(colorPalette.black, 0.7)} 0%, ${alpha(colorPalette.charcoal, 0.8)} 100%)`,
            zIndex: 2,
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} lg={8}>
              <RevealOnScroll>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
                    fontWeight: 300,
                    lineHeight: 1.1,
                    color: '#ffffff',
                    mb: 4,
                    fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                  }}
                >
                  Team KFMA
                  <Box component="span" sx={{ color: colorPalette.gold, fontWeight: 400 }}>
                    {' '}Champions
                  </Box>
                  <br />
                  2025 Success
                </Typography>
                
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    fontWeight: 300,
                    color: colorPalette.lightGray,
                    lineHeight: 1.5,
                    mb: 6,
                    maxWidth: '700px',
                    fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                  }}
                >
                  Our competition team has achieved 100% gold medal success in 2025 competitions including 
                  Gold Coast Open and Caboolture Open. Train with dedication, compete with pride, 
                  and represent KFMA with excellence.
                </Typography>

                <Button
                  variant="contained"
                  size="large"
                  endIcon={<EmojiEvents />}
                  onClick={() => navigate('/competition-team')}
                  sx={{
                    background: colorPalette.gold,
                    color: colorPalette.black,
                    fontSize: '1rem',
                    fontWeight: 600,
                    px: 6,
                    py: 2.5,
                    borderRadius: 1,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    boxShadow: 'none',
                    '&:hover': {
                      backgroundColor: '#FFE55C',
                      transform: 'translateY(-2px)',
                      boxShadow: `0 8px 24px ${alpha(colorPalette.gold, 0.4)}`,
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Join Competition Team
                </Button>
              </RevealOnScroll>
            </Grid>

            <Grid item xs={12} lg={4}>
              <RevealOnScroll direction="right">
                <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
                  {/* Competition Stats */}
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: '5rem',
                        fontWeight: 300,
                        color: colorPalette.gold,
                        lineHeight: 1,
                        mb: 0.5,
                        fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                      }}
                    >
                      <AnimatedCounter 
                        value={100}
                        suffix="%"
                        startDelay={0}
                      />
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#ffffff',
                        fontWeight: 600,
                        fontSize: '1rem',
                        mb: 0.25,
                      }}
                    >
                      Gold Medal Success
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: colorPalette.lightGray,
                        fontSize: '0.875rem',
                      }}
                    >
                      2025 Competitions
                    </Typography>
                  </Box>

                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: '5rem',
                        fontWeight: 300,
                        color: colorPalette.gold,
                        lineHeight: 1,
                        mb: 0.5,
                        fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                      }}
                    >
                      <AnimatedCounter 
                        value={10}
                        suffix="+"
                        startDelay={300}
                      />
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#ffffff',
                        fontWeight: 600,
                        fontSize: '1rem',
                        mb: 0.25,
                      }}
                    >
                      Gold Medals Won
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: colorPalette.lightGray,
                        fontSize: '0.875rem',
                      }}
                    >
                      Gold Coast & Caboolture Opens
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#ffffff',
                        fontStyle: 'italic',
                        fontSize: '1rem',
                        mb: 2,
                      }}
                    >
                      "Good etiquette is what sets KFMA apart"
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: colorPalette.lightGray,
                        fontSize: '0.875rem',
                      }}
                    >
                      - Master Mark Buxton
                    </Typography>
                  </Box>
                </Box>
              </RevealOnScroll>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 2025 Grading Results Section */}
      <Box sx={{ py: 10, backgroundColor: '#ffffff', position: 'relative', zIndex: 5 }}>
        <Container maxWidth="xl">
          <RevealOnScroll>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 300,
                  color: colorPalette.primary,
                  mb: 4,
                  fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                }}
              >
                2025 April{' '}
                <Box component="span" sx={{ color: colorPalette.black }}>Grading Results</Box>
              </Typography>
            </Box>
          </RevealOnScroll>

          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <RevealOnScroll>
                <Card sx={{ p: 4, backgroundColor: alpha(colorPalette.primary, 0.05), border: `2px solid ${alpha(colorPalette.primary, 0.2)}` }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: colorPalette.primary,
                      fontWeight: 600,
                      mb: 3,
                      fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                    }}
                  >
                    TAEKWONDO
                  </Typography>
                  
                  <Stack spacing={2}>
                    <Box>
                      <Typography sx={{ fontWeight: 600, color: colorPalette.black, mb: 1 }}>
                        3rd Gup - Red/White Belt
                      </Typography>
                      <Typography sx={{ color: colorPalette.mediumGray }}>
                        Brooke - Honours
                      </Typography>
                    </Box>
                    
                    <Box>
                      <Typography sx={{ fontWeight: 600, color: colorPalette.black, mb: 1 }}>
                        5th Gup - Blue Belt
                      </Typography>
                      <Typography sx={{ color: colorPalette.mediumGray }}>
                        Scarlett - Honours<br />
                        Dani - Honours
                      </Typography>
                    </Box>
                    
                    <Box>
                      <Typography sx={{ fontWeight: 600, color: colorPalette.black, mb: 1 }}>
                        6th Gup - Blue/Black Belt
                      </Typography>
                      <Typography sx={{ color: colorPalette.mediumGray }}>
                        Alexanda - Honours
                      </Typography>
                    </Box>
                    
                    <Box>
                      <Typography sx={{ fontWeight: 600, color: colorPalette.black, mb: 1 }}>
                        8th Gup - Yellow Belt
                      </Typography>
                      <Typography sx={{ color: colorPalette.mediumGray }}>
                        Aria - High Pass<br />
                        Zara - Honours
                      </Typography>
                    </Box>
                    
                    <Box>
                      <Typography sx={{ fontWeight: 600, color: colorPalette.black, mb: 1 }}>
                        9th Gup - Yellow/White Belt
                      </Typography>
                      <Typography sx={{ color: colorPalette.mediumGray }}>
                        Sam - Honours<br />
                        Joe - Honours<br />
                        Charlotte - Pass
                      </Typography>
                    </Box>
                  </Stack>
                </Card>
              </RevealOnScroll>
            </Grid>

            <Grid item xs={12} md={6}>
              <RevealOnScroll>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.125rem',
                    color: colorPalette.darkGray,
                    lineHeight: 1.7,
                    mb: 4,
                  }}
                >
                  The first KFMA grading for 2025 was held on 3rd April. This was a challenging grading 
                  as we had a disruption to our training due to the weather event in March. We had to delay 
                  the grading to allow students more time to train and prepare.
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.125rem',
                    color: colorPalette.darkGray,
                    lineHeight: 1.7,
                    mb: 4,
                  }}
                >
                  Leading up to the grading, we focused on the importance of etiquette and basic techniques. 
                  We had 9 students approved to grade, some of which were higher ranks that were required to 
                  demonstrate advanced techniques and terminology. Overall, I saw students have worked hard 
                  in the lead up to the grading and the standard of basics, etiquette and terminology was high.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.125rem',
                    color: colorPalette.darkGray,
                    lineHeight: 1.7,
                    mb: 4,
                  }}
                >
                  With our first grading now behind us, we have just 4 weeks to prepare for our first 
                  competition as Team KFMA. We have students competing in poomsae, sparring and speed 
                  kicking events at the Gold Coast Open.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.125rem',
                    color: colorPalette.darkGray,
                    lineHeight: 1.7,
                    mb: 4,
                    fontStyle: 'italic',
                  }}
                >
                  I encourage all students to practice at home and work on the basic skills we learn in 
                  class - this is the foundation of everything we do and helps to consolidate your learning 
                  and improves your skills.
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: colorPalette.primary,
                    fontWeight: 600,
                    textAlign: 'right',
                  }}
                >
                  Well done everyone!<br />
                  Master Mark
                </Typography>
              </RevealOnScroll>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Caboolture Open 2025 Section */}
      <Box sx={{ py: 10, backgroundColor: colorPalette.veryLightGray, position: 'relative', zIndex: 5 }}>
        <Container maxWidth="xl">
          <RevealOnScroll>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 300,
                  color: colorPalette.black,
                  mb: 2,
                  fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                }}
              >
                Caboolture Open{' '}
                <Box component="span" sx={{ color: colorPalette.primary }}>2025</Box>
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  fontWeight: 600,
                  color: colorPalette.gold,
                  mb: 4,
                }}
              >
                Again KFMA brought home 5 gold medals from 5 players! 100% Gold!
              </Typography>
            </Box>
          </RevealOnScroll>

          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <RevealOnScroll>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.125rem',
                    color: colorPalette.darkGray,
                    lineHeight: 1.7,
                    mb: 4,
                  }}
                >
                  On the 22nd June 2025, Team KFMA headed to the Caboolture Open at Morayfield. 
                  This year marked the 20 year anniversary of this event, and this was Team KFMA's 
                  second competition, so expectations were very high.
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.125rem',
                    color: colorPalette.darkGray,
                    lineHeight: 1.7,
                    mb: 4,
                  }}
                >
                  The KFMA team consisted of students who had competed before and one competitor who 
                  returns to the mats after a 2-year break. We had 5 players enter individual poomsae 
                  events with only 2 weeks preparation due to my trip to Korea and Japan.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.125rem',
                    color: colorPalette.darkGray,
                    lineHeight: 1.7,
                    mb: 4,
                  }}
                >
                  Whilst I was away, competing students were set the task to train at home. Prior to 
                  going away I provided specific feedback to competing students to help them improve. 
                  When I returned, we refined the patterns even further.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.125rem',
                    color: colorPalette.darkGray,
                    lineHeight: 1.7,
                    mb: 4,
                  }}
                >
                  Scoring at this event was much tougher than the Gold Coast Open, but Team KFMA still 
                  brought home Gold Medals for each event.
                </Typography>
              </RevealOnScroll>
            </Grid>

            <Grid item xs={12} md={6}>
              <RevealOnScroll>
                <Card sx={{ p: 4, backgroundColor: colorPalette.gold, color: colorPalette.black }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 600,
                      mb: 3,
                      textAlign: 'center',
                      fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                    }}
                  >
                    🏆 Players Results 🏆
                  </Typography>
                  
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, borderBottom: `1px solid ${alpha(colorPalette.black, 0.2)}` }}>
                      <Typography sx={{ fontWeight: 600 }}>Brooke</Typography>
                      <Typography sx={{ fontWeight: 700, color: colorPalette.primary }}>Gold</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, borderBottom: `1px solid ${alpha(colorPalette.black, 0.2)}` }}>
                      <Typography sx={{ fontWeight: 600 }}>Elizabeth</Typography>
                      <Typography sx={{ fontWeight: 700, color: colorPalette.primary }}>Gold</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, borderBottom: `1px solid ${alpha(colorPalette.black, 0.2)}` }}>
                      <Typography sx={{ fontWeight: 600 }}>Dani</Typography>
                      <Typography sx={{ fontWeight: 700, color: colorPalette.primary }}>Gold</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, borderBottom: `1px solid ${alpha(colorPalette.black, 0.2)}` }}>
                      <Typography sx={{ fontWeight: 600 }}>Aria</Typography>
                      <Typography sx={{ fontWeight: 700, color: colorPalette.primary }}>Gold</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
                      <Typography sx={{ fontWeight: 600 }}>Alexanda</Typography>
                      <Typography sx={{ fontWeight: 700, color: colorPalette.primary }}>Gold</Typography>
                    </Box>
                  </Stack>
                </Card>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.125rem',
                    color: colorPalette.darkGray,
                    lineHeight: 1.7,
                    mt: 4,
                    fontStyle: 'italic',
                  }}
                >
                  It was pleasing to see the level of skill and etiquette my students displayed at this event. 
                  As with the Gold Coast Open, you all stood out - in the best way possible. Thank you, Team KFMA, 
                  for the extra effort and making me proud.
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: colorPalette.primary,
                    fontWeight: 600,
                    textAlign: 'right',
                    mt: 2,
                  }}
                >
                  Master Mark
                </Typography>
              </RevealOnScroll>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Gold Coast Open 2025 Section */}
      <Box sx={{ py: 10, backgroundColor: '#ffffff', position: 'relative', zIndex: 5 }}>
        <Container maxWidth="xl">
          <RevealOnScroll>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 300,
                  color: colorPalette.black,
                  mb: 2,
                  fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                }}
              >
                Gold Coast Open{' '}
                <Box component="span" sx={{ color: colorPalette.primary }}>2025</Box>
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  fontWeight: 600,
                  color: colorPalette.gold,
                  mb: 4,
                }}
              >
                KFMA had 5 gold medals from 5 players bringing home 100% Gold!
              </Typography>
            </Box>
          </RevealOnScroll>

          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <RevealOnScroll>
                <Card sx={{ p: 4, backgroundColor: alpha(colorPalette.gold, 0.1), border: `2px solid ${colorPalette.gold}` }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: colorPalette.primary,
                      fontWeight: 600,
                      mb: 3,
                      textAlign: 'center',
                      fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                    }}
                  >
                    🥇 Poomsae Results 🥇
                  </Typography>
                  
                  <Stack spacing={2}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, borderBottom: `1px solid ${alpha(colorPalette.primary, 0.2)}` }}>
                      <Typography sx={{ fontWeight: 600 }}>Brooke</Typography>
                      <Typography sx={{ fontWeight: 700, color: colorPalette.primary }}>6.13 Gold</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, borderBottom: `1px solid ${alpha(colorPalette.primary, 0.2)}` }}>
                      <Typography sx={{ fontWeight: 600 }}>Alexanda</Typography>
                      <Typography sx={{ fontWeight: 700, color: colorPalette.primary }}>6.00 Gold</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, borderBottom: `1px solid ${alpha(colorPalette.primary, 0.2)}` }}>
                      <Typography sx={{ fontWeight: 600 }}>Zara</Typography>
                      <Typography sx={{ fontWeight: 700, color: colorPalette.primary }}>5.89 Gold</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1, borderBottom: `1px solid ${alpha(colorPalette.primary, 0.2)}` }}>
                      <Typography sx={{ fontWeight: 600 }}>Sam</Typography>
                      <Typography sx={{ fontWeight: 700, color: colorPalette.primary }}>5.40 Gold</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1 }}>
                      <Typography sx={{ fontWeight: 600 }}>Dani</Typography>
                      <Typography sx={{ fontWeight: 700, color: colorPalette.primary }}>4.98 Gold</Typography>
                    </Box>
                  </Stack>
                </Card>
              </RevealOnScroll>
            </Grid>

            <Grid item xs={12} md={6}>
              <RevealOnScroll>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.125rem',
                    color: colorPalette.darkGray,
                    lineHeight: 1.7,
                    mb: 4,
                  }}
                >
                  On the 4th May 2025, KFMA headed to the Cararra Indoor Stadium for the Annual Gold Coast Open. 
                  This is the first time KFMA have competed as a team, and we had 5 players enter - 2 in sparring 
                  and 5 in poomsae events. We trained hard for this over the last couple of months including extra 
                  Saturday training.
                </Typography>
                
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.125rem',
                    color: colorPalette.darkGray,
                    lineHeight: 1.7,
                    mb: 4,
                  }}
                >
                  Alexanda sparred in 2 rounds, and he did well for his age given he fought an experienced 8-year-old. 
                  Zara sparred 2 rounds against a higher rank with a close first round. In the second round she hurt 
                  her arm, but continued to push on, bringing home the silver.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.125rem',
                    color: colorPalette.darkGray,
                    lineHeight: 1.7,
                    mb: 4,
                  }}
                >
                  5 players entered individual poomsae events and the scores were very high - showing they have 
                  practiced at home and taken on my feedback during class, putting this into action.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.125rem',
                    color: colorPalette.darkGray,
                    lineHeight: 1.7,
                    mb: 4,
                    fontStyle: 'italic',
                  }}
                >
                  I saw all of my students display exceptional etiquette today, not only during their time on the mats, 
                  but in general, and this is great to see. Good etiquette is what sets KFMA apart so well done everyone!
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: colorPalette.primary,
                    fontWeight: 600,
                    textAlign: 'right',
                  }}
                >
                  Master Mark
                </Typography>
              </RevealOnScroll>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Gallery Section */}
      <Box sx={{ py: 10, backgroundColor: colorPalette.veryLightGray, position: 'relative', zIndex: 5 }}>
        <Container maxWidth="xl">
          <RevealOnScroll>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 300,
                  color: colorPalette.black,
                  mb: 4,
                  fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                }}
              >
                Korean Freestyle Martial Arts{' '}
                <Box component="span" sx={{ color: colorPalette.primary }}>Gallery</Box>
              </Typography>
              
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1.125rem', md: '1.25rem' },
                  fontWeight: 300,
                  color: colorPalette.mediumGray,
                  lineHeight: 1.6,
                  maxWidth: '600px',
                  mx: 'auto',
                  fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                }}
              >
                There is no better way to communicate what we do than through images. As you browse our site, 
                take a few moments to let your eyes linger here, and get a feel for the Korean Freestyle Martial Arts signature touch.
              </Typography>
            </Box>
          </RevealOnScroll>

          <Grid container spacing={3}>
            {[
              '/public/kfma/12f29b_031041a90ff34c618133bce229fddbd5~mv2_002.avif',
              '/public/kfma/12f29b_05614dcb336e46888a42d5612ef59298~mv2_002.avif',
              '/public/kfma/12f29b_16d3aa9f3e5546de91424e3920b5c2d4~mv2_002.avif',
              '/public/kfma/6442710547835271098_edited_edited.jpg',
              '/public/kfma/11062b_eb537e20e9a443138bef8c8395dee5cb~mv2_002.avif',
              '/public/kfma/result_img_2024_12_26_08_18_23.jpg'
            ].map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <RevealOnScroll delay={index * 100}>
                  <Box
                    sx={{
                      borderRadius: 2,
                      overflow: 'hidden',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={image}
                      alt={`KFMA Training ${index + 1}`}
                      sx={{
                        width: '100%',
                        height: 250,
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </Box>
                </RevealOnScroll>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Student Testimonials Section */}
      <Box sx={{ py: 10, backgroundColor: '#ffffff', position: 'relative', zIndex: 5 }}>
        <Container maxWidth="xl">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <RevealOnScroll>
                <Typography
                  variant="body2"
                  sx={{
                    color: colorPalette.primary,
                    fontWeight: 600,
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    fontSize: '0.875rem',
                    mb: 2,
                    fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                  }}
                >
                  Student Success
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 300,
                    color: colorPalette.black,
                    mb: 3,
                    lineHeight: 1.1,
                    fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                  }}
                >
                  What Our Students{' '}
                  <Box component="span" sx={{ color: colorPalette.primary }}>Say</Box>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.125rem',
                    color: colorPalette.mediumGray,
                    lineHeight: 1.7,
                    mb: 4,
                    fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                    fontWeight: 300,
                  }}
                >
                  Hear from our KFMA family about their martial arts journey, personal growth, 
                  and the life-changing benefits of training at Korean Freestyle Martial Arts.
                </Typography>
                
                <Card
                  sx={{
                    p: 4,
                    backgroundColor: alpha(colorPalette.primary, 0.05),
                    border: `2px solid ${alpha(colorPalette.primary, 0.1)}`,
                    borderRadius: 2,
                    position: 'relative',
                  }}
                >
                  <FormatQuote 
                    sx={{ 
                      fontSize: '3rem', 
                      color: alpha(colorPalette.primary, 0.3),
                      position: 'absolute',
                      top: 15,
                      left: 20,
                    }} 
                  />
                  
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: '1.25rem',
                      fontWeight: 300,
                      color: colorPalette.darkGray,
                      lineHeight: 1.6,
                      mb: 3,
                      mt: 2,
                      fontStyle: 'italic',
                      fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                    }}
                  >
                    "KFMA is great! Master Mark is an excellent instructor who creates a supportive 
                    and challenging environment for all students. The training has improved my fitness, 
                    confidence, and discipline. I highly recommend KFMA to anyone looking to start 
                    their martial arts journey."
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar
                      sx={{
                        width: 50,
                        height: 50,
                        backgroundColor: colorPalette.primary,
                        fontSize: '1.25rem',
                        fontWeight: 600,
                      }}
                    >
                      K
                    </Avatar>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          color: colorPalette.black,
                          fontSize: '1rem',
                          mb: 0.5,
                        }}
                      >
                        KFMA Student
                      </Typography>
                      <Typography
                        sx={{
                          color: colorPalette.mediumGray,
                          fontSize: '0.875rem',
                        }}
                      >
                        Taekwondo & Hapkido Training
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </RevealOnScroll>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <RevealOnScroll>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      position: 'relative',
                      borderRadius: 2,
                      overflow: 'hidden',
                      boxShadow: `0 8px 32px ${alpha(colorPalette.black, 0.15)}`,
                      mb: 4,
                      transform: 'rotate(-1deg)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'rotate(0deg) scale(1.02)',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src="/public/kfma/12f29b_765382ecc924426c917b311474b1aefe~mv2.avif"
                      alt="KFMA Students Training"
                      sx={{
                        width: '100%',
                        height: 300,
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </Box>
                  
                  <Typography
                    variant="h6"
                    sx={{
                      color: colorPalette.primary,
                      fontWeight: 600,
                      mb: 2,
                      fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                    }}
                  >
                    Join Our KFMA Family
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      color: colorPalette.mediumGray,
                      lineHeight: 1.6,
                      mb: 3,
                    }}
                  >
                    Experience the transformative power of traditional Korean martial arts. 
                    Build confidence, discipline, and strength while being part of a supportive community.
                  </Typography>

                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    onClick={() => navigate('/free-trial')}
                    sx={{
                      background: colorPalette.primary,
                      fontSize: '1rem',
                      fontWeight: 600,
                      px: 4,
                      py: 2,
                      borderRadius: 1,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      boxShadow: 'none',
                      '&:hover': {
                        backgroundColor: colorPalette.primaryDark,
                        transform: 'translateY(-2px)',
                        boxShadow: `0 8px 24px ${alpha(colorPalette.primary, 0.4)}`,
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Start Your Journey
                  </Button>
                </Box>
              </RevealOnScroll>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Pricing & Membership Section */}
      <Box sx={{ py: { xs: 10, md: 15 }, backgroundColor: colorPalette.veryLightGray, position: 'relative', zIndex: 5 }}>
        <Container maxWidth="lg">
          <RevealOnScroll>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 300,
                  lineHeight: 1.2,
                  color: colorPalette.black,
                  mb: 4,
                  fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                }}
              >
                Membership &{' '}
                <Box component="span" sx={{ color: colorPalette.primary }}>Pricing</Box>
              </Typography>
              
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: '1.125rem', md: '1.25rem' },
                  fontWeight: 300,
                  color: colorPalette.mediumGray,
                  lineHeight: 1.6,
                  maxWidth: '600px',
                  mx: 'auto',
                  fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                }}
              >
                Affordable family-friendly pricing with flexible payment options. All fees are paid by monthly subscription.
              </Typography>
            </Box>
          </RevealOnScroll>

          <Grid container spacing={4}>
            {/* KFMA Start Up Training Kit */}
            <Grid item xs={12} md={6}>
              <RevealOnScroll delay={100}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 2,
                    boxShadow: `0 8px 32px ${alpha(colorPalette.primary, 0.15)}`,
                    border: `2px solid ${colorPalette.primary}`,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Featured Badge */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -10,
                      right: 20,
                      backgroundColor: colorPalette.primary,
                      color: '#ffffff',
                      px: 3,
                      py: 1,
                      borderRadius: '0 0 8px 8px',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}
                  >
                    Best Value
                  </Box>
                  
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 600,
                        color: colorPalette.primary,
                        mb: 2,
                        fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                      }}
                    >
                      KFMA Start Up Training Kit
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      sx={{
                        color: colorPalette.mediumGray,
                        mb: 3,
                        lineHeight: 1.6,
                      }}
                    >
                      Everything you need to get started in one discounted package
                    </Typography>

                    <Box sx={{ mb: 4 }}>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 700,
                          color: colorPalette.primary,
                          mb: 1,
                          fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                        }}
                      >
                        $250
                        <Typography component="span" variant="body1" sx={{ color: colorPalette.mediumGray, ml: 1 }}>
                          Feb - Oct
                        </Typography>
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          color: colorPalette.primary,
                          fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                        }}
                      >
                        $215
                        <Typography component="span" variant="body1" sx={{ color: colorPalette.mediumGray, ml: 1 }}>
                          Oct - Jan
                        </Typography>
                      </Typography>
                    </Box>

                    <Stack spacing={2} sx={{ mb: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <CheckCircle sx={{ color: colorPalette.primary, fontSize: '1.25rem' }} />
                        <Typography>Membership Fee</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <CheckCircle sx={{ color: colorPalette.primary, fontSize: '1.25rem' }} />
                        <Typography>Annual Fee</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <CheckCircle sx={{ color: colorPalette.primary, fontSize: '1.25rem' }} />
                        <Typography>KFMA Uniform</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <CheckCircle sx={{ color: colorPalette.primary, fontSize: '1.25rem' }} />
                        <Typography>KFMA Club T-shirt</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <CheckCircle sx={{ color: colorPalette.primary, fontSize: '1.25rem' }} />
                        <Typography>KFMA Training Bag</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <CheckCircle sx={{ color: colorPalette.primary, fontSize: '1.25rem' }} />
                        <Typography>KFMA Jet-tag & Cap</Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            </Grid>

            {/* Monthly Training Fees */}
            <Grid item xs={12} md={6}>
              <RevealOnScroll delay={200}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 2,
                    boxShadow: `0 4px 16px ${alpha(colorPalette.black, 0.1)}`,
                    border: `1px solid ${alpha(colorPalette.mediumGray, 0.2)}`,
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 600,
                        color: colorPalette.black,
                        mb: 2,
                        fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                      }}
                    >
                      Monthly Training Fees
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      sx={{
                        color: colorPalette.mediumGray,
                        mb: 4,
                        lineHeight: 1.6,
                      }}
                    >
                      Family-friendly pricing with discounts for multiple family members
                    </Typography>

                    <Stack spacing={3} sx={{ mb: 4 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2, borderBottom: `1px solid ${alpha(colorPalette.mediumGray, 0.2)}` }}>
                        <Typography sx={{ fontWeight: 600 }}>Single Student</Typography>
                        <Typography sx={{ fontWeight: 700, color: colorPalette.primary, fontSize: '1.25rem' }}>$107/month</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2, borderBottom: `1px solid ${alpha(colorPalette.mediumGray, 0.2)}` }}>
                        <Typography sx={{ fontWeight: 600 }}>Family of 2</Typography>
                        <Typography sx={{ fontWeight: 700, color: colorPalette.primary, fontSize: '1.25rem' }}>$177/month</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2, borderBottom: `1px solid ${alpha(colorPalette.mediumGray, 0.2)}` }}>
                        <Typography sx={{ fontWeight: 600 }}>Family of 3</Typography>
                        <Typography sx={{ fontWeight: 700, color: colorPalette.primary, fontSize: '1.25rem' }}>$239/month</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2, borderBottom: `1px solid ${alpha(colorPalette.mediumGray, 0.2)}` }}>
                        <Typography sx={{ fontWeight: 600 }}>Family of 4</Typography>
                        <Typography sx={{ fontWeight: 700, color: colorPalette.primary, fontSize: '1.25rem' }}>$290/month</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 2 }}>
                        <Typography sx={{ fontWeight: 600, color: colorPalette.primary }}>5th Family Member</Typography>
                        <Typography sx={{ fontWeight: 700, color: colorPalette.success, fontSize: '1.25rem' }}>FREE</Typography>
                      </Box>
                    </Stack>

                    <Box sx={{ backgroundColor: alpha(colorPalette.primary, 0.1), p: 3, borderRadius: 1, mb: 3 }}>
                      <Typography sx={{ fontWeight: 600, mb: 1 }}>Additional Fees:</Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>• Lifetime Membership: $25</Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>• Annual Fee: $89 (Due upon joining and February each year)</Typography>
                      <Typography variant="body2">• Grading Belt Fee: $19.50</Typography>
                    </Box>
                    
                    <Typography variant="body2" sx={{ color: colorPalette.mediumGray, fontStyle: 'italic' }}>
                      Casual Training Fee available at $150 per month for 1 student
                    </Typography>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Final CTA Section - Clean and minimal */}
      <Box
        sx={{
          py: 12,
          background: colorPalette.black,
          color: '#ffffff',
          textAlign: 'center',
          position: 'relative',
          zIndex: 5,
        }}
      >
        <Container maxWidth="lg">
          <RevealOnScroll>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 300,
                mb: 3,
                lineHeight: 1.1,
                fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
              }}
            >
              Get in touch with us today!
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                fontSize: '1.125rem',
                mb: 5,
                opacity: 0.8,
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              We're here to answer your questions and are on hand to help inform you 
              of every aspect regarding your enquiry. We take great pride in using our expertise.
            </Typography>
            
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              onClick={() => navigate('/contact')}
              sx={{
                background: colorPalette.primary,
                fontSize: '1rem',
                fontWeight: 600,
                px: 6,
                py: 2.5,
                borderRadius: 1,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: colorPalette.primaryDark,
                  transform: 'translateY(-2px)',
                  boxShadow: `0 8px 24px ${alpha(colorPalette.primary, 0.4)}`,
                },
                transition: 'all 0.3s ease',
              }}
            >
              Contact Us
            </Button>

            {/* KFMA Contact Information */}
            <Box sx={{ mt: 6, pt: 4, borderTop: `1px solid ${alpha('#ffffff', 0.2)}` }}>
              <Grid container spacing={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Grid item xs={12} md={4}>
                  <Typography variant="body1" sx={{ opacity: 0.8, mb: 1 }}>
                    Call Master Mark:
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                    0432 289 866
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="body1" sx={{ opacity: 0.8, mb: 1 }}>
                    Training Times:
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                    Tue & Thu 5:45PM-8PM
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="body1" sx={{ opacity: 0.8, mb: 1 }}>
                    Location:
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Regents Park State School
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    42-60 Emerald Drive, Regents Park 4118
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </RevealOnScroll>
        </Container>
      </Box>

      {/* Final Call-to-Action Hero Section */}
      <Box
        sx={{
          minHeight: '60vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          zIndex: 5,
        }}
      >
        {/* Background Image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `url('/public/kfma/6442710547835271098_edited_edited.jpg') center/cover no-repeat`,
            backgroundAttachment: 'fixed',
            zIndex: 1,
          }}
        />
        
        {/* Dark Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(135deg, ${alpha(colorPalette.black, 0.8)} 0%, ${alpha(colorPalette.primary, 0.3)} 100%)`,
            zIndex: 2,
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3, textAlign: 'center' }}>
          <RevealOnScroll>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                fontWeight: 300,
                lineHeight: 1.1,
                color: '#ffffff',
                mb: 4,
                fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
              }}
            >
              Ready to Begin Your
              <Box component="span" sx={{ color: colorPalette.gold, fontWeight: 400 }}>
                {' '}Martial Arts Journey?
              </Box>
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                fontWeight: 300,
                color: colorPalette.lightGray,
                lineHeight: 1.5,
                mb: 6,
                maxWidth: '800px',
                mx: 'auto',
                fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
              }}
            >
              Join KFMA today and discover the transformative power of traditional Korean martial arts. 
              Build confidence, discipline, and strength while becoming part of our martial arts family.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                onClick={() => navigate('/free-trial')}
                sx={{
                  background: colorPalette.primary,
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  px: 6,
                  py: 3,
                  borderRadius: 1,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  boxShadow: 'none',
                  '&:hover': {
                    backgroundColor: colorPalette.primaryDark,
                    transform: 'translateY(-2px)',
                    boxShadow: `0 8px 24px ${alpha(colorPalette.primary, 0.4)}`,
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Start Free Trial
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                endIcon={<SportsMartialArts />}
                onClick={() => navigate('/contact')}
                sx={{
                  borderColor: colorPalette.gold,
                  color: colorPalette.gold,
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  px: 6,
                  py: 3,
                  borderRadius: 1,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  '&:hover': {
                    backgroundColor: alpha(colorPalette.gold, 0.1),
                    borderColor: colorPalette.gold,
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Contact Master Mark
              </Button>
            </Stack>
          </RevealOnScroll>
        </Container>
      </Box>

      {/* Footer/Additional Information Section */}
      <Box sx={{ py: 8, backgroundColor: colorPalette.black, color: '#ffffff', position: 'relative', zIndex: 5 }}>
        <Container maxWidth="xl">
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <RevealOnScroll>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    color: colorPalette.primary,
                    fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                  }}
                >
                  Korean Freestyle Martial Arts
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.7,
                    mb: 3,
                    opacity: 0.9,
                  }}
                >
                  KFMA is committed to Martial Arts excellence, blending traditional techniques and training methods 
                  to empower people of all ages. Experience authentic Korean martial arts in a supportive, family-friendly environment.
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.7,
                  }}
                >
                  ABN: 19476656938
                </Typography>
              </RevealOnScroll>
            </Grid>

            <Grid item xs={12} md={4}>
              <RevealOnScroll>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    color: colorPalette.gold,
                  }}
                >
                  Training Programs
                </Typography>
                <Stack spacing={1}>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>• Taekwondo (Traditional Korean Martial Art)</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>• Hapkido (Self-Defense System)</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>• Family Training Classes</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>• Competition Team Training</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>• Age Groups: 4 to 50+ Years</Typography>
                </Stack>
              </RevealOnScroll>
            </Grid>

            <Grid item xs={12} md={4}>
              <RevealOnScroll>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    color: colorPalette.gold,
                  }}
                >
                  Get Started
                </Typography>
                <Stack spacing={1} sx={{ mb: 3 }}>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>• 2-Week Free Trial Available</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>• Discounted Training Kit</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>• Complimentary First Grading</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>• Flexible Monthly Payments</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>• No Long-Term Contracts Required</Typography>
                </Stack>
                
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => window.open('https://www.facebook.com/@korean.freestyle.martial.arts.24', '_blank')}
                    sx={{
                      backgroundColor: colorPalette.primary,
                      minWidth: 'auto',
                      px: 2,
                    }}
                  >
                    Facebook
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => window.open('https://www.instagram.com/koreanfreestylema/', '_blank')}
                    sx={{
                      borderColor: '#ffffff',
                      color: '#ffffff',
                      minWidth: 'auto',
                      px: 2,
                    }}
                  >
                    Instagram
                  </Button>
                </Stack>
              </RevealOnScroll>
            </Grid>
          </Grid>
          
          <Box sx={{ textAlign: 'center', mt: 6, pt: 4, borderTop: `1px solid ${alpha('#ffffff', 0.2)}` }}>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              © 2025 Korean Freestyle Martial Arts. All rights reserved. | Master Mark Buxton - 35+ Years Experience
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Simple modal for demo */}
      <Dialog
        open={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            overflow: 'hidden',
          },
        }}
      >
        <DialogTitle sx={{ p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            KFMA Training Videos
          </Typography>
          <IconButton onClick={() => setVideoModalOpen(false)}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 3, minHeight: 300, backgroundColor: colorPalette.veryLightGray }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 300,
              color: colorPalette.mediumGray,
            }}
          >
            <Stack alignItems="center" spacing={2}>
              <SportsMartialArts sx={{ fontSize: '3rem', color: colorPalette.primary }} />
              <Typography variant="h6">
                Training videos coming soon
              </Typography>
              <Typography variant="body2">
                Follow us on social media for the latest training content
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <Button 
                  variant="outlined" 
                  size="small"
                  onClick={() => window.open('https://www.youtube.com/@KoreanFreestyleMartialArts', '_blank')}
                >
                  YouTube
                </Button>
                <Button 
                  variant="outlined" 
                  size="small"
                  onClick={() => window.open('https://www.facebook.com/@korean.freestyle.martial.arts.24', '_blank')}
                >
                  Facebook
                </Button>
                <Button 
                  variant="outlined" 
                  size="small"
                  onClick={() => window.open('https://www.instagram.com/koreanfreestylema/', '_blank')}
                >
                  Instagram
                </Button>
              </Stack>
            </Stack>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Home;