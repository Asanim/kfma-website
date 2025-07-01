
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Divider,
  useTheme,
  List,
  ListItem,
  ListItemText,
  Chip,
  CardMedia
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  AttachMoney as MoneyIcon,
  Star as StarIcon
} from '@mui/icons-material';

// Styled components
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(3),
  color: '#EA0707',
  fontFamily: 'Roboto, sans-serif'
}));

const PriceCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff',
  border: '2px solid #EA0707',
  borderRadius: theme.spacing(2),
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8]
  }
}));

const Pricing = () => {
  const theme = useTheme();

  return (
    <Box sx={{
      minHeight: '100vh',
      backgroundColor: theme.palette.background.default,
      fontFamily: 'Roboto, sans-serif'
    }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>

        {/* Membership Fees */}
        <Box sx={{ mb: 8 }}>
          <SectionTitle variant="h3" align="center">
            Membership Fees
          </SectionTitle>

          <Typography
            variant="body1"
            align="center"
            sx={{
              mb: 4,
              maxWidth: 600,
              mx: 'auto',
              fontSize: '1.1rem',
              fontFamily: 'Roboto, sans-serif'
            }}
          >
            Quality martial arts training at affordable rates
          </Typography>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid xs={12} md={6}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  color: '#EA0707',
                  mb: 2,
                  fontFamily: 'Roboto, sans-serif'
                }}
              >
                🥋 Enjoy a 2-week Free Trial!
              </Typography>
              <Typography variant="body1" sx={{ mb: 1, fontFamily: 'Roboto, sans-serif' }}>✅ Discounted Uniform</Typography>
              <Typography variant="body1" sx={{ mb: 1, fontFamily: 'Roboto, sans-serif' }}>🏆 Complimentary TAEKWONDO Grading</Typography>
              <Typography variant="body1" sx={{ fontFamily: 'Roboto, sans-serif' }}>🥋 Complimentary HAPKIDO Grading</Typography>
            </Grid>
            <Grid xs={12} md={6}>
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  fontFamily: 'Roboto, sans-serif'
                }}
              >
                Complete beginners are welcome! KFMA provides a safe, encouraging and fun environment for people of all ages and fitness levels to learn traditional Korean Martial Arts.
              </Typography>
            </Grid>
          </Grid>

          {/* Special Offers */}
          <Box sx={{
            mt: 6,
            p: 4,
            backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#f8f9fa',
            borderRadius: 2
          }}>
            <Typography
              variant="h5"
              align="center"
              sx={{
                mb: 4,
                color: '#EA0707',
                fontWeight: 'bold',
                fontFamily: 'Roboto, sans-serif'
              }}
            >
              Special Offers
            </Typography>

            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <Box sx={{ textAlign: 'center' }}>
                  <Chip
                    label="NEW MEMBERS"
                    sx={{
                      backgroundColor: '#EA0707',
                      color: 'white',
                      fontWeight: 'bold',
                      mb: 2,
                      fontFamily: 'Roboto, sans-serif'
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>
                    2 Week Free Trial
                  </Typography>
                </Box>
              </Grid>

              <Grid xs={12} md={6}>
                <Box sx={{ textAlign: 'center' }}>
                  <Chip
                    label="FAMILY DISCOUNT"
                    sx={{
                      backgroundColor: '#28a745',
                      color: 'white',
                      fontWeight: 'bold',
                      mb: 2,
                      fontFamily: 'Roboto, sans-serif'
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>
                    Family Rates Available
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* Pricing Cards */}
        <Box sx={{ mb: 8 }}>
          <SectionTitle variant="h4" align="center">
            Membership Options
          </SectionTitle>

          <Grid container spacing={3}>
            <Grid xs={12} md={6}>
              <PriceCard>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <MoneyIcon sx={{ color: '#EA0707', mr: 1, fontSize: 28 }} />
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 'bold',
                        fontFamily: 'Roboto, sans-serif'
                      }}
                    >
                      Adults
                    </Typography>
                  </Box>

                  <Typography
                    variant="h4"
                    sx={{
                      color: '#EA0707',
                      fontWeight: 'bold',
                      mb: 3,
                      fontFamily: 'Roboto, sans-serif'
                    }}
                  >
                    $120 <Typography component="span" variant="h6">/month</Typography>
                  </Typography>

                  <List>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemText
                        primary="2 sessions per week"
                        sx={{
                          '& .MuiListItemText-primary': {
                            fontFamily: 'Roboto, sans-serif'
                          }
                        }}
                      />
                    </ListItem>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemText
                        primary="Taekwondo & Hapkido training"
                        sx={{
                          '& .MuiListItemText-primary': {
                            fontFamily: 'Roboto, sans-serif'
                          }
                        }}
                      />
                    </ListItem>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemText
                        primary="All skill levels welcome"
                        sx={{
                          '& .MuiListItemText-primary': {
                            fontFamily: 'Roboto, sans-serif'
                          }
                        }}
                      />
                    </ListItem>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemText
                        primary="Grading opportunities"
                        sx={{
                          '& .MuiListItemText-primary': {
                            fontFamily: 'Roboto, sans-serif'
                          }
                        }}
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </PriceCard>
            </Grid>

            <Grid xs={12} md={6}>
              <PriceCard>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <StarIcon sx={{ color: '#EA0707', mr: 1, fontSize: 28 }} />
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 'bold',
                        fontFamily: 'Roboto, sans-serif'
                      }}
                    >
                      Children & Youth
                    </Typography>
                  </Box>

                  <Typography
                    variant="h4"
                    sx={{
                      color: '#EA0707',
                      fontWeight: 'bold',
                      mb: 3,
                      fontFamily: 'Roboto, sans-serif'
                    }}
                  >
                    $100 <Typography component="span" variant="h6">/month</Typography>
                  </Typography>

                  <List>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemText
                        primary="2 sessions per week"
                        sx={{
                          '& .MuiListItemText-primary': {
                            fontFamily: 'Roboto, sans-serif'
                          }
                        }}
                      />
                    </ListItem>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemText
                        primary="Age-appropriate training"
                        sx={{
                          '& .MuiListItemText-primary': {
                            fontFamily: 'Roboto, sans-serif'
                          }
                        }}
                      />
                    </ListItem>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemText
                        primary="Character development focus"
                        sx={{
                          '& .MuiListItemText-primary': {
                            fontFamily: 'Roboto, sans-serif'
                          }
                        }}
                      />
                    </ListItem>
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemText
                        primary="Fun and engaging classes"
                        sx={{
                          '& .MuiListItemText-primary': {
                            fontFamily: 'Roboto, sans-serif'
                          }
                        }}
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </PriceCard>
            </Grid>
          </Grid>
        </Box>

        {/* Gear & Equipment */}
        <Box sx={{ mb: 8 }}>
          <SectionTitle variant="h4" align="center">
            Gear & Equipment
          </SectionTitle>

          <Typography
            variant="body1"
            align="center"
            sx={{
              mb: 4,
              fontFamily: 'Roboto, sans-serif'
            }}
          >
            Quality martial arts equipment available for purchase
          </Typography>

          <Grid container spacing={3}>
            <Grid xs={12} md={4}>
              <Card sx={{
                height: '100%',
                backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff'
              }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      color: '#EA0707',
                      fontFamily: 'Roboto, sans-serif'
                    }}
                  >
                    Uniforms (Doboks)
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, fontFamily: 'Roboto, sans-serif' }}>
                    Traditional Taekwondo and Hapkido uniforms
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#EA0707', fontFamily: 'Roboto, sans-serif' }}>
                    From $80
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid xs={12} md={4}>
              <Card sx={{
                height: '100%',
                backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff'
              }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      color: '#EA0707',
                      fontFamily: 'Roboto, sans-serif'
                    }}
                  >
                    Protective Gear
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, fontFamily: 'Roboto, sans-serif' }}>
                    Sparring gloves, shin guards, and protective equipment
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#EA0707', fontFamily: 'Roboto, sans-serif' }}>
                    From $120
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid xs={12} md={4}>
              <Card sx={{
                height: '100%',
                backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff'
              }}>
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      color: '#EA0707',
                      fontFamily: 'Roboto, sans-serif'
                    }}
                  >
                    Training Equipment
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2, fontFamily: 'Roboto, sans-serif' }}>
                    Belts, focus mitts, and training accessories
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#EA0707', fontFamily: 'Roboto, sans-serif' }}>
                    From $45
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Contact for Pricing */}
        <Box sx={{
          textAlign: 'center',
          py: 4,
          backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#f8f8f8',
          borderRadius: 2
        }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: '#EA0707',
              fontWeight: 'bold',
              fontFamily: 'Roboto, sans-serif'
            }}
          >
            Ready to Start Your Journey?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              fontFamily: 'Roboto, sans-serif'
            }}
          >
            Contact us today for more information about membership options and pricing
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.primary,
              fontFamily: 'Roboto, sans-serif'
            }}
          >
            📧 info@kfma.com.au | 📞 Contact us for details
          </Typography>
        </Box>

        {/* Equipment & Uniforms Gallery */}
        <Box sx={{ mb: 8 }}>
          <SectionTitle variant="h3" align="center">
            Equipment & Uniforms
          </SectionTitle>

          <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid xs={12} sm={6} md={4}>
              <Card sx={{
                backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.05)' }
              }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="/kfma/12f29b_5b77fbb11f7d420a97007da13ba7d90a~mv2.avif"
                  alt="KFMA Uniforms"
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', color: '#EA0707' }}>
                    Official Uniforms
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                    High-quality dobok for training and competitions
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
                  height="200"
                  image="/kfma/12f29b_6f72835db92e439b9b849d584bd380d6~mv2.avif"
                  alt="Training Equipment"
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', color: '#EA0707' }}>
                    Training Gear
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                    Essential protective equipment for safe training
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
                  height="200"
                  image="/kfma/12f29b_7fc702abf8ae4e12903ac674a4e5a778~mv2.avif"
                  alt="Belt System"
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontFamily: 'Roboto, sans-serif', color: '#EA0707' }}>
                    Belt System
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                    Progress through our comprehensive ranking system
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;
