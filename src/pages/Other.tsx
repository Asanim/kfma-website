import { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Grid,
  CardMedia
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  ExpandMore as ExpandMoreIcon,
  ContactMail as ContactIcon,
  // Privacy as PrivacyIcon
} from '@mui/icons-material';

// Styled components
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(3),
  color: '#EA0707',
  fontFamily: 'Roboto, sans-serif'
}));

const InfoCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff',
  marginBottom: theme.spacing(3),
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[8]
  }
}));

const Other = () => {
  const theme = useTheme();
  const [contactOpen, setContactOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

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
            Additional Information
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.text.secondary,
              fontFamily: 'Roboto, sans-serif'
            }}
          >
            Contact Forms, Privacy Policy & More
          </Typography>
        </Box>

        {/* Quick Actions */}
        <Grid container sx={{ mb: 6 }}>
          <Grid xs={12} md={6}>
            <InfoCard>
              <CardContent sx={{ textAlign: 'center' }}>
                <ContactIcon sx={{ fontSize: 48, color: '#EA0707', mb: 2 }} />
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: 'Roboto, sans-serif'
                  }}
                >
                  Contact Us
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    fontFamily: 'Roboto, sans-serif'
                  }}
                >
                  Get in touch with KFMA for inquiries, trial bookings, or any questions you may have.
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => setContactOpen(true)}
                  sx={{
                    backgroundColor: '#EA0707',
                    fontFamily: 'Roboto, sans-serif',
                    '&:hover': { backgroundColor: '#c20606' }
                  }}
                >
                  Open Contact Form
                </Button>
              </CardContent>
            </InfoCard>
          </Grid>

          <Grid xs={12} md={6}>
            <InfoCard>
              <CardContent sx={{ textAlign: 'center' }}>
                {/* <PrivacyIcon sx={{ fontSize: 48, color: '#EA0707', mb: 2 }} /> */}
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: 'Roboto, sans-serif'
                  }}
                >
                  Privacy Policy
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    fontFamily: 'Roboto, sans-serif'
                  }}
                >
                  Learn about how we collect, use, and protect your personal information at KFMA.
                </Typography>
                <Button
                  variant="outlined"
                  onClick={() => setPrivacyOpen(true)}
                  sx={{
                    borderColor: '#EA0707',
                    color: '#EA0707',
                    fontFamily: 'Roboto, sans-serif',
                    '&:hover': {
                      borderColor: '#c20606',
                      backgroundColor: 'rgba(234, 7, 7, 0.04)'
                    }
                  }}
                >
                  Read Privacy Policy
                </Button>
              </CardContent>
            </InfoCard>
          </Grid>
        </Grid>

        {/* Gallery Section */}
        <Box sx={{ mb: 8 }}>
          <SectionTitle variant="h3" align="center">
            Korean Freestyle Martial Arts Gallery
          </SectionTitle>

          <InfoCard>
            <CardContent>
              <Typography
                variant="body1"
                align="center"
                sx={{
                  mb: 4,
                  fontStyle: 'italic',
                  fontFamily: 'Roboto, sans-serif'
                }}
              >
                There may be no better way to communicate what we do than through images. As you browse our site, take a few moments to let your eyes linger here, and see if you can get a feel for our signature touch.
              </Typography>

              <Box sx={{
                height: 400,
                backgroundColor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#f0f0f0',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #EA0707'
              }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontFamily: 'Roboto, sans-serif'
                  }}
                >
                  Photo Gallery Coming Soon
                </Typography>
              </Box>
            </CardContent>
          </InfoCard>
        </Box>

        {/* KFMA Calendar */}
        <Box sx={{ mb: 8 }}>
          <SectionTitle variant="h3" align="center">
            KFMA Calendar
          </SectionTitle>

          <InfoCard>
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: '#EA0707',
                  fontFamily: 'Roboto, sans-serif'
                }}
              >
                June 2025
              </Typography>

              <Box sx={{
                height: 300,
                backgroundColor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#f0f0f0',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #EA0707'
              }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontFamily: 'Roboto, sans-serif'
                  }}
                >
                  Interactive Calendar Coming Soon
                </Typography>
              </Box>
            </CardContent>
          </InfoCard>
        </Box>

        {/* Community Gallery */}
        <Box sx={{ mb: 8 }}>
          <SectionTitle variant="h3" align="center">
            KFMA Community
          </SectionTitle>

          <Grid container sx={{ mb: 4 }}>
            <Grid xs={12} sm={6} md={3}>
              <Card sx={{
                backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' }
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="/kfma/12f29b_8e2e21531b4c44159623c85341779884~mv2.avif"
                  alt="KFMA Community Event"
                  sx={{ objectFit: 'cover' }}
                />
              </Card>
            </Grid>

            <Grid xs={12} sm={6} md={3}>
              <Card sx={{
                backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' }
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="/kfma/12f29b_994c5178e07449e19c3122602e3b849f~mv2.avif"
                  alt="Training Session"
                  sx={{ objectFit: 'cover' }}
                />
              </Card>
            </Grid>

            <Grid xs={12} sm={6} md={3}>
              <Card sx={{
                backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' }
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="/kfma/12f29b_99cef496492943f189cc0adf566e78da~mv2.avif"
                  alt="Group Training"
                  sx={{ objectFit: 'cover' }}
                />
              </Card>
            </Grid>

            <Grid xs={12} sm={6} md={3}>
              <Card sx={{
                backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' }
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="/kfma/12f29b_a1fac0f393314995b291402cabf32c12~mv2.avif"
                  alt="Family Training"
                  sx={{ objectFit: 'cover' }}
                />
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Quick Actions */}
        <Grid container sx={{ mb: 6 }}>
          <Grid xs={12} md={6}>
            <InfoCard>
              <CardContent sx={{ textAlign: 'center' }}>
                <ContactIcon sx={{ fontSize: 48, color: '#EA0707', mb: 2 }} />
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: 'Roboto, sans-serif'
                  }}
                >
                  Contact Us
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    fontFamily: 'Roboto, sans-serif'
                  }}
                >
                  Get in touch with KFMA for inquiries, trial bookings, or any questions you may have.
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => setContactOpen(true)}
                  sx={{
                    backgroundColor: '#EA0707',
                    fontFamily: 'Roboto, sans-serif',
                    '&:hover': { backgroundColor: '#c20606' }
                  }}
                >
                  Open Contact Form
                </Button>
              </CardContent>
            </InfoCard>
          </Grid>

          <Grid xs={12} md={6}>
            <InfoCard>
              <CardContent sx={{ textAlign: 'center' }}>
                {/* <PrivacyIcon sx={{ fontSize: 48, color: '#EA0707', mb: 2 }} /> */}
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: 'Roboto, sans-serif'
                  }}
                >
                  Privacy Policy
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    fontFamily: 'Roboto, sans-serif'
                  }}
                >
                  Learn about how we collect, use, and protect your personal information at KFMA.
                </Typography>
                <Button
                  variant="outlined"
                  onClick={() => setPrivacyOpen(true)}
                  sx={{
                    borderColor: '#EA0707',
                    color: '#EA0707',
                    fontFamily: 'Roboto, sans-serif',
                    '&:hover': {
                      borderColor: '#c20606',
                      backgroundColor: 'rgba(234, 7, 7, 0.04)'
                    }
                  }}
                >
                  Read Privacy Policy
                </Button>
              </CardContent>
            </InfoCard>
          </Grid>
        </Grid>

        {/* Contact Dialog */}
        <Dialog open={contactOpen} onClose={() => setContactOpen(false)} maxWidth="sm" fullWidth>
          <DialogTitle sx={{ fontFamily: 'Roboto, sans-serif' }}>Contact KFMA</DialogTitle>
          <DialogContent>
            <Grid container sx={{ mt: 1 }}>
              <Grid xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First name*"
                  variant="outlined"
                  InputLabelProps={{ sx: { fontFamily: 'Roboto, sans-serif' } }}
                  InputProps={{ sx: { fontFamily: 'Roboto, sans-serif' } }}
                />
              </Grid>
              <Grid xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last name*"
                  variant="outlined"
                  InputLabelProps={{ sx: { fontFamily: 'Roboto, sans-serif' } }}
                  InputProps={{ sx: { fontFamily: 'Roboto, sans-serif' } }}
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  label="Email*"
                  variant="outlined"
                  type="email"
                  InputLabelProps={{ sx: { fontFamily: 'Roboto, sans-serif' } }}
                  InputProps={{ sx: { fontFamily: 'Roboto, sans-serif' } }}
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  label="Phone*"
                  variant="outlined"
                  InputLabelProps={{ sx: { fontFamily: 'Roboto, sans-serif' } }}
                  InputProps={{ sx: { fontFamily: 'Roboto, sans-serif' } }}
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  label="How can KFMA help you?"
                  variant="outlined"
                  multiline
                  rows={4}
                  InputLabelProps={{ sx: { fontFamily: 'Roboto, sans-serif' } }}
                  InputProps={{ sx: { fontFamily: 'Roboto, sans-serif' } }}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => setContactOpen(false)}
              sx={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#EA0707',
                fontFamily: 'Roboto, sans-serif',
                '&:hover': { backgroundColor: '#c20606' }
              }}
            >
              Send Message
            </Button>
          </DialogActions>
        </Dialog>

        {/* Privacy Policy Dialog */}
        <Dialog open={privacyOpen} onClose={() => setPrivacyOpen(false)} maxWidth="md" fullWidth>
          <DialogTitle sx={{ fontFamily: 'Roboto, sans-serif' }}>
            Korean Freestyle Martial Arts Privacy Policy
          </DialogTitle>
          <DialogContent>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                mt: 2,
                fontFamily: 'Roboto, sans-serif'
              }}
            >
              Korean Freestyle Martial Arts Privacy Policy - 2025
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 3,
                fontFamily: 'Roboto, sans-serif'
              }}
            >
              At Korean Freestyle Martial Arts, we are committed to protecting the privacy of the personal data we collect for all students and their parents. We have created this Privacy Policy to explain how we collect, use and handle personal and/or sensitive information. Korean Freestyle Martial Arts is committed to ensuring the personal information of all students is safe. Korean Freestyle Martial Arts will only collect, store and use personal information as outlined below.
            </Typography>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  variant="h6"
                  sx={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  What personal data do we collect and why?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontFamily: 'Roboto, sans-serif' }}>
                  For the purposes of the Korean Freestyle Martial Arts Privacy Policy, we may collect the following information- student's name, date of birth, health conditions, address, phone number, email address, parents and/or emergency contact details, bank account/debit/credit card details and other sensitive information as required. This information collected is for Korean Freestyle Martial Arts to provide optimal services to our members.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  variant="h6"
                  sx={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Collecting Personal Information
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontFamily: 'Roboto, sans-serif' }}>
                  Korean Freestyle Martial Arts will not collect, use or store any information without the person's consent. The information we collect is provided voluntarily by the student or parent and is collected to enable Korean Freestyle Martial Arts to provide our services. This information may be used to inform you of any events, services, programs or products as permitted under the Privacy Act 1988.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  variant="h6"
                  sx={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Collecting Sensitive Information
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontFamily: 'Roboto, sans-serif' }}>
                  For the purposes of the Korean Freestyle Martial Arts Privacy Policy, sensitive information relates to any and all information that a student and /or parent discloses to us regarding their physical or mental health wellbeing. This information will only be used to provide services to that individual and will not be used or disclosed to any other party without prior consent. The only exception to this is in exceptional circumstances when disclosing this information is required by law or is necessary to protect the rights or property of Korean Freestyle Martial Arts, or a member of the Club or public.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography
                  variant="h6"
                  sx={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  Contact Information
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ fontFamily: 'Roboto, sans-serif' }}>
                  Phone: 0432 289 866<br />
                  Master Instructor Email: koreanfreestylema@gmail.com<br />
                  Korean Freestyle Martial Arts Administration Email: info.koreanfreestylema@gmail.com
                </Typography>
              </AccordionDetails>
            </Accordion>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => setPrivacyOpen(false)}
              sx={{ fontFamily: 'Roboto, sans-serif' }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>

      </Container>
    </Box>
  );
};

export default Other;
