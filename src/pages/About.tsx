import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Chip,
  useTheme,
  Paper,
  Divider,
  CardMedia
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';

// Styled components
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(3),
  color: '#EA0707',
  fontFamily: 'Roboto, sans-serif'
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

const MasterCard = styled(Card)(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)'
    : 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
  marginBottom: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[8]
}));

const About = () => {
  const theme = useTheme();

  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundColor: theme.palette.background.default,
      fontFamily: 'Roboto, sans-serif',
      py: 4
    }}>
      <Container maxWidth="lg">

        {/* Page Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              color: '#EA0707',
              fontWeight: 'bold',
              fontFamily: 'Roboto, sans-serif'
            }}
          >
            About KFMA
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.text.secondary,
              fontFamily: 'Roboto, sans-serif'
            }}
          >
            Korean Freestyle Martial Arts - Taekwondo & Hapkido
          </Typography>
        </Box>

        {/* About KFMA Section */}
        <Box sx={{ mb: 8 }}>
          <SectionTitle variant="h3" align="center">
            About Korean Freestyle Martial Arts
          </SectionTitle>

          <Card sx={{
            backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff',
            mb: 4
          }}>
            <CardContent>
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
                  fontFamily: 'Roboto, sans-serif'
                }}
              >
                At Korean Freestyle Martial Arts, we are dedicated to providing exceptional training in Taekwondo & Hapkido. KFMA is committed to Martial Arts excellence, blending traditional techniques and training methods to empower people of all ages.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  textAlign: 'justify',
                  mb: 3,
                  fontFamily: 'Roboto, sans-serif'
                }}
              >
                Our experienced Master Instructor believes that confidence, discipline, perseverance and strength are the core values of an outstanding Martial Arts School. With state-of-the-art facilities and a supportive community, we strive to help our students reach their full potential.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  textAlign: 'justify',
                  fontFamily: 'Roboto, sans-serif'
                }}
              >
                Join us today and embark on a journey of self-discovery and personal growth. Korean Freestyle Martial Arts is a family-oriented Club with current members ranging from just 4 years of age to almost 60+ years of age, fostering a friendly, supportive, and inclusive training atmosphere where friendships form.
              </Typography>
            </CardContent>
          </Card>
        </Box>


        {/* Master Mark Full Bio */}
        <Box sx={{ mb: 8 }}>
          <SectionTitle variant="h3" align="center">
            About Master Instructor Mark Buxton
          </SectionTitle>

          <Grid container alignItems="flex-start">
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
                    In 2024, after 22 years with a local Brisbane Club, Master Mark decided to go out on his own and Korean Freestyle Martial Arts came to fruition. Master Mark brings many years of Martial Arts experience, skills, and knowledge. Korean Freestyle Martial Arts is a family-oriented Club with current members ranging from just 4 years of age to almost 60+ years of age. Master Mark encourages and instils a friendly, supportive, and inclusive training atmosphere and a place where friendships form.
                  </Typography>
                </CardContent>
              </MasterCard>
            </Grid>
          </Grid>
        </Box>

        {/* Location & Map */}
        <Box sx={{ mb: 8 }}>
          <SectionTitle variant="h3" align="center">
            Location
          </SectionTitle>

          <Paper sx={{ p: 4, mb: 4, backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff' }}>
            <Grid container spacing={4}>
              <Grid xs={12} md={6}>
                <Box sx={{ textAlign: 'center' }}>
                  <LocationIcon sx={{ fontSize: 48, color: '#EA0707', mb: 2 }} />
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      fontFamily: 'Roboto, sans-serif'
                    }}
                  >
                    Training Location
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#EA0707',
                      fontFamily: 'Roboto, sans-serif'
                    }}
                  >
                    REGENTS PARK STATE SCHOOL
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mt: 2,
                      fontFamily: 'Roboto, sans-serif'
                    }}
                  >
                    42-60 Emerald Drive<br />
                    Regents Park 4118<br />
                    Queensland, Australia
                  </Typography>
                </Box>
              </Grid>

              <Grid xs={12} md={6}>
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
              </Grid>
            </Grid>
          </Paper>
        </Box>

        {/* Contact Information */}
        <Box sx={{ mb: 8 }}>
          <SectionTitle variant="h3" align="center">
            Contact Information
          </SectionTitle>

          <Grid container justifyContent="center">
            <Grid xs={12} md={4}>
              <ContactCard>
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
              </ContactCard>
            </Grid>

            <Grid xs={12} md={4}>
              <ContactCard>
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
              </ContactCard>
            </Grid>

            <Grid xs={12} md={4}>
              <ContactCard>
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
              </ContactCard>
            </Grid>
          </Grid>
        </Box>

        {/* Training Photos */}
        <Box sx={{ mb: 8 }}>
          <SectionTitle variant="h3" align="center">
            Training in Action
          </SectionTitle>

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
              </Card>
            </Grid>
          </Grid>
        </Box>

      </Container>
    </Box>
  );
};

export default About;
