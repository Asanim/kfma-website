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
      {/* Floating Featured Article */}
      {/* <FloatingFeaturedArticle /> */}
      
      {/* Modern Hero Section with Carousel Background */}
      <Box
        sx={{
          minHeight: '100vh',
          color: 'white',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Carousel Background Images */}
        {backgroundImages.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `url('${image}') center/cover no-repeat`,
              backgroundAttachment: 'fixed',
              opacity: index === currentImageIndex ? 1 : 0,
              transition: 'opacity 2s ease-in-out',
              zIndex: 1,
            }}
          />
        ))}
        
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
                      color: 'white',
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
                          color: 'white',
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
                      color: 'white',
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
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    mb: 1,
                  }}
                />
                <Chip
                  label="Hapkido 4th Dan"
                  sx={{
                    backgroundColor: colorPalette.secondary,
                    color: 'white',
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
                      backgroundColor: 'white',
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
                            color: 'white',
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
                        <Box sx={{ color: 'white', fontSize: '1.75rem' }}>
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
                            color: 'white',
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
                          color: 'white',
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

      {/* Leader for AI Vision Hero Section */}
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
            background: `url('/background/image copy 2.png') center/cover no-repeat`,
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
            background: `linear-gradient(135deg, ${alpha(colorPalette.black, 0.6)} 0%, ${alpha(colorPalette.charcoal, 0.7)} 100%)`,
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
                    color: 'white',
                    mb: 4,
                    fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                  }}
                >
                  Australian provider of
                  <Box component="span" sx={{ color: colorPalette.primary, fontWeight: 400 }}>
                    {' '}Safety Rated
                  </Box>
                  <br />
                  Height and Slew limiting systems
                </Typography>
                
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    fontWeight: 300,
                    color: colorPalette.lightGray,
                    lineHeight: 1.5,
                    mb: 6,
                    maxWidth: '600px',
                    fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                  }}
                >
                  Currently the only Australian-designed system achieving SIL 2/MPL d certification, meeting and exceeding Aurizon and Queensland Rail requirements.
                </Typography>

                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  onClick={() => navigate('/services')}
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
                  Discover More
                </Button>
              </RevealOnScroll>
            </Grid>

            <Grid item xs={12} lg={4}>
              <RevealOnScroll direction="right">
                <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
                  {/* Key Stats */}
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: '5rem',
                        fontWeight: 300,
                        color: colorPalette.primary,
                        lineHeight: 1,
                        mb: 0.5,
                        fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                      }}
                    >
                      <AnimatedCounter 
                        value={1019}
                        suffix="k+"
                        startDelay={0}
                      />
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '1rem',
                        mb: 0.25,
                      }}
                    >
                      Hours of Operation
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: colorPalette.lightGray,
                        fontSize: '0.875rem',
                      }}
                    >
                      Systems in the field
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: '5rem',
                        fontWeight: 300,
                        color: colorPalette.primary,
                        lineHeight: 1,
                        mb: 0.5,
                        fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                      }}
                    >
                      <AnimatedCounter 
                        value={700}
                        suffix="+"
                        startDelay={300}
                      />
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '1rem',
                        mb: 0.25,
                      }}
                    >
                      Height Limiter Systems Deployed
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: colorPalette.lightGray,
                        fontSize: '0.875rem',
                      }}
                    >
                      Australia Wide
                    </Typography>
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
                    color: 'white',
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
                    color: 'white',
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
                    color: 'white',
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
                    borderColor: 'white',
                    color: 'white',
                    fontSize: '1rem',
                    fontWeight: 600,
                    px: 6,
                    py: 2.5,
                    borderRadius: 1,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    '&:hover': {
                      backgroundColor: 'white',
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
                      color: 'white',
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
                              color: 'white',
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
                              color: 'white',
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
                      color: 'white',
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
                                color: 'white',
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
                                color: 'white',
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

      {/* Leader for AI Vision Hero Section */}
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
            background: `url('/background/image copy 9.png') center/cover no-repeat`,
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
            background: `linear-gradient(135deg, ${alpha(colorPalette.black, 0.6)} 0%, ${alpha(colorPalette.charcoal, 0.7)} 100%)`,
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
                    color: 'white',
                    mb: 4,
                    fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                  }}
                >
                  Leader of
                  <Box component="span" sx={{ color: colorPalette.primary, fontWeight: 400 }}>
                    {' '}AI vision
                  </Box>
                  <br />
                  for heavy industry
                </Typography>
                
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    fontWeight: 300,
                    color: colorPalette.lightGray,
                    lineHeight: 1.5,
                    mb: 6,
                    maxWidth: '600px',
                    fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                  }}
                >
                  PRM Engineering Services are specialists in vision systems with advanced AI models custom trained to suit the Australian environment. With cloud datalogging, remote monitoring and over-the-air updates, our systems are designed for the future of heavy industry.
                </Typography>

                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  onClick={() => navigate('/services')}
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
                  Discover More
                </Button>
              </RevealOnScroll>
            </Grid>

            <Grid item xs={12} lg={4}>
              <RevealOnScroll direction="right">
                <Box sx={{ textAlign: { xs: 'center', lg: 'left' } }}>
                  {/* Key Stats */}
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: '5rem',
                        fontWeight: 300,
                        color: colorPalette.primary,
                        lineHeight: 1,
                        mb: 0.5,
                        fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                      }}
                    >
                      <AnimatedCounter 
                        value={580}
                        suffix="k+"
                        startDelay={0}
                      />
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '1rem',
                        mb: 0.25,
                      }}
                    >
                      Hours of Operation
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: colorPalette.lightGray,
                        fontSize: '0.875rem',
                      }}
                    >
                      Systems in the field
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: '5rem',
                        fontWeight: 300,
                        color: colorPalette.primary,
                        lineHeight: 1,
                        mb: 0.5,
                        fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                      }}
                    >
                      <AnimatedCounter 
                        value={400}
                        suffix="+"
                        startDelay={300}
                      />
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '1rem',
                        mb: 0.25,
                      }}
                    >
                      Systems Deployed
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: colorPalette.lightGray,
                        fontSize: '0.875rem',
                      }}
                    >
                      Australia Wide
                    </Typography>
                  </Box>
                </Box>
              </RevealOnScroll>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Award-Winning Excellence Section */}
      <Box sx={{ py: 10, backgroundColor: 'white', position: 'relative', zIndex: 5 }}>
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
                  Recognition & Awards
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
                  Award-Winning{' '}
                  <Box component="span" sx={{ color: colorPalette.primary }}>Excellence</Box>
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
                  Our commitment to innovation and safety has been recognized with multiple industry awards. 
                  From engineering excellence to workplace safety leadership, PRM Engineering continues to set 
                  the standard for Australian manufacturing excellence.
                </Typography>
                
                <Stack spacing={3}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Avatar
                      sx={{
                        backgroundColor: alpha(colorPalette.primary, 0.1),
                        color: colorPalette.primary,
                        width: 48,
                        height: 48,
                      }}
                    >
                      <EmojiEvents />
                    </Avatar>
                    <Box>
                      <Typography 
                        sx={{ 
                          color: colorPalette.black, 
                          fontWeight: 600, 
                          mb: 0.5,
                          fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                        }}
                      >
                        Synaco Safety Innovation Award
                      </Typography>
                      <Typography 
                        sx={{ 
                          color: colorPalette.mediumGray, 
                          fontSize: '0.875rem',
                          fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                          fontWeight: 300,
                        }}
                      >
                        Recognized for breakthrough safety technology advancement
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Avatar
                      sx={{
                        backgroundColor: alpha(colorPalette.success, 0.1),
                        color: colorPalette.success,
                        width: 48,
                        height: 48,
                      }}
                    >
                      <EmojiEvents />
                    </Avatar>
                    <Box>
                      <Typography 
                        sx={{ 
                          color: colorPalette.black, 
                          fontWeight: 600, 
                          mb: 0.5,
                          fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                        }}
                      >
                        Safe Work and Return to Work Awards
                      </Typography>
                      <Typography 
                        sx={{ 
                          color: colorPalette.mediumGray, 
                          fontSize: '0.875rem',
                          fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                          fontWeight: 300,
                        }}
                      >
                        Best solution to an identified work health and safety issue
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Avatar
                      sx={{
                        backgroundColor: alpha(colorPalette.warning, 0.1),
                        color: colorPalette.warning,
                        width: 48,
                        height: 48,
                      }}
                    >
                      <CheckCircle />
                    </Avatar>
                    <Box>
                      <Typography 
                        sx={{ 
                          color: colorPalette.black, 
                          fontWeight: 600, 
                          mb: 0.5,
                          fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                        }}
                      >
                        Australian Made Campaign Member
                      </Typography>
                      <Typography 
                        sx={{ 
                          color: colorPalette.mediumGray, 
                          fontSize: '0.875rem',
                          fontFamily: '"Raleway", "Roboto", "Helvetica", "Arial", sans-serif',
                          fontWeight: 300,
                        }}
                      >
                        Proudly supporting local manufacturing and innovation
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </RevealOnScroll>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <RevealOnScroll>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        position: 'relative',
                        borderRadius: 0,
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        transform: 'rotate(-2deg)',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'rotate(0deg) scale(1.05)',
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src="/prm-engineering/PRM-Engineering-Services-Award-Cert.jpg"
                        alt="Award Certificate"
                        sx={{
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        position: 'relative',
                        borderRadius: 0,
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        transform: 'rotate(2deg)',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'rotate(0deg) scale(1.05)',
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src="/prm-engineering/Australian-Made.jpg"
                        alt="Australian Made"
                        sx={{
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        position: 'relative',
                        borderRadius: 0,
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        mt: 2,
                      }}
                    >
                      <Box
                        component="img"
                        src="/prm-engineering/Synaco-Safety-Award-PRM-Engineering-Services1.jpg"
                        alt="Safety Award"
                        sx={{
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
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
          color: 'white',
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

            {/* Contact Information */}
            <Box sx={{ mt: 6, pt: 4, borderTop: `1px solid ${alpha('#ffffff', 0.2)}` }}>
              <Typography variant="body1" sx={{ opacity: 0.8, mb: 1 }}>
                Ready to talk? Call us directly.
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                +61 (0)7 3711 2779
              </Typography>
            </Box>
          </RevealOnScroll>
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
            PRM Engineering Demo
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
              <PlayArrow sx={{ fontSize: '3rem', color: colorPalette.primary }} />
              <Typography variant="h6">
                Demo content available soon
              </Typography>
              <Typography variant="body2">
                Contact us for a personalized demonstration
              </Typography>
            </Stack>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Home;