import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  useTheme,
  Paper,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  CardMedia
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  EmojiEvents as TrophyIcon,
  DateRange as DateIcon
} from '@mui/icons-material';

// Styled components
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(3),
  color: '#EA0707',
  fontFamily: 'Roboto, sans-serif'
}));

const CompetitionCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
  color: '#333',
  marginBottom: theme.spacing(3),
  '& .MuiCardContent-root': {
    textAlign: 'center'
  }
}));

const BlogCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#fff',
  marginBottom: theme.spacing(4),
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.shadows[8]
  }
}));

const Blog = () => {
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
            KFMA Blog
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.text.secondary,
              fontFamily: 'Roboto, sans-serif'
            }}
          >
            Competition Results, Events & News
          </Typography>
        </Box>

        {/* Gold Coast Open 2025 */}
        <BlogCard>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <DateIcon sx={{ color: '#EA0707', mr: 2 }} />
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  fontFamily: 'Roboto, sans-serif'
                }}
              >
                May 4, 2025
              </Typography>
              <Chip
                label="Competition"
                size="small"
                sx={{
                  ml: 2,
                  backgroundColor: '#EA0707',
                  color: 'white',
                  fontFamily: 'Roboto, sans-serif'
                }}
              />
            </Box>

            <SectionTitle variant="h3">
              Gold Coast Open 2025
            </SectionTitle>

            <CompetitionCard>
              <CardContent>
                <TrophyIcon sx={{ fontSize: 48, mb: 2 }} />
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: 'Roboto, sans-serif'
                  }}
                >
                  KFMA had 5 gold medals from 5 players bringing home 100% Gold!
                </Typography>
              </CardContent>
            </CompetitionCard>

            <Paper sx={{ p: 3, mb: 3, backgroundColor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#f8f9fa' }}>
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  fontFamily: 'Roboto, sans-serif'
                }}
              >
                On the 4th May 2025, KFMA headed to the Cararra Indoor Stadium for the Annual Gold Coast Open. This is the first time KFMA have competed as a team, and we had 5 players enter- 2 in sparring and 5 in poomsae events. We trained hard for this over the last couple of months including extra Saturday training.
              </Typography>
            </Paper>

            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <Card sx={{ backgroundColor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#fff' }}>
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        color: '#EA0707',
                        fontFamily: 'Roboto, sans-serif'
                      }}
                    >
                      Poomsae Results (Individual)
                    </Typography>
                    <TableContainer>
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>Player</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>Score</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>Medal</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell sx={{ fontFamily: 'Roboto, sans-serif' }}>Brooke</TableCell>
                            <TableCell sx={{ fontFamily: 'Roboto, sans-serif' }}>6.13</TableCell>
                            <TableCell sx={{ color: '#FFD700', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>🥇 Gold</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell sx={{ fontFamily: 'Roboto, sans-serif' }}>Alexanda</TableCell>
                            <TableCell sx={{ fontFamily: 'Roboto, sans-serif' }}>6.00</TableCell>
                            <TableCell sx={{ color: '#FFD700', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>🥇 Gold</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell sx={{ fontFamily: 'Roboto, sans-serif' }}>Zara</TableCell>
                            <TableCell sx={{ fontFamily: 'Roboto, sans-serif' }}>5.89</TableCell>
                            <TableCell sx={{ color: '#FFD700', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>🥇 Gold</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell sx={{ fontFamily: 'Roboto, sans-serif' }}>Sam</TableCell>
                            <TableCell sx={{ fontFamily: 'Roboto, sans-serif' }}>5.40</TableCell>
                            <TableCell sx={{ color: '#FFD700', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>🥇 Gold</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell sx={{ fontFamily: 'Roboto, sans-serif' }}>Dani</TableCell>
                            <TableCell sx={{ fontFamily: 'Roboto, sans-serif' }}>4.98</TableCell>
                            <TableCell sx={{ color: '#FFD700', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>🥇 Gold</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </CardContent>
                </Card>
              </Grid>

              <Grid xs={12} md={6}>
                <Card sx={{ backgroundColor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#fff' }}>
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        color: '#EA0707',
                        fontFamily: 'Roboto, sans-serif'
                      }}
                    >
                      Sparring Results
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemText
                          primary="Alexanda"
                          secondary="Competed in 2 rounds against experienced opponent. Great effort for first competition!"
                          primaryTypographyProps={{ fontFamily: 'Roboto, sans-serif' }}
                          secondaryTypographyProps={{ fontFamily: 'Roboto, sans-serif' }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Zara"
                          secondary="🥈 Silver medal - Fought through injury showing great determination"
                          primaryTypographyProps={{ fontFamily: 'Roboto, sans-serif' }}
                          secondaryTypographyProps={{ fontFamily: 'Roboto, sans-serif' }}
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Paper sx={{ p: 3, mt: 3, backgroundColor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#f8f9fa' }}>
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  fontFamily: 'Roboto, sans-serif'
                }}
              >
                This is the first Gold Coast Open for most students and this environment can be overwhelming, but all students focused and represented KFMA to the best of their abilities. As with everything, competing brings opportunities for learning and personal growth- this is life and martial arts! We will be focusing on these in class over the coming weeks.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  fontFamily: 'Roboto, sans-serif'
                }}
              >
                Individual achievements:
              </Typography>
              <List dense>
                <ListItem>
                  <ListItemText
                    primary="Sam's first competition - learned two new patterns simultaneously, huge achievement!"
                    primaryTypographyProps={{ fontFamily: 'Roboto, sans-serif' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Zara challenged herself in both sparring and poomsae, performed better than previous tournament"
                    primaryTypographyProps={{ fontFamily: 'Roboto, sans-serif' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Alexanda (youngest competitor) didn't crumble under pressure, exceptional poomsae performance"
                    primaryTypographyProps={{ fontFamily: 'Roboto, sans-serif' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Brooke achieved her highest competition score to date as team senior"
                    primaryTypographyProps={{ fontFamily: 'Roboto, sans-serif' }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Dani had a slip up but still managed gold medal, showing resilience"
                    primaryTypographyProps={{ fontFamily: 'Roboto, sans-serif' }}
                  />
                </ListItem>
              </List>

              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  fontFamily: 'Roboto, sans-serif'
                }}
              >
                I saw all of my students display exceptional etiquette today, not only during their time on the mats, but in general, and this is great to see. Good etiquette is what sets KFMA apart so well done everyone!
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontWeight: 'bold',
                  textAlign: 'right',
                  mt: 3,
                  fontFamily: 'Roboto, sans-serif'
                }}
              >
                As KFMA's Master Instructor, it was great to see you all wearing your uniforms with pride. Thank you to all my students who put themselves out of their comfort zones today- this means a lot to me personally. You all did so well, and I am proud of each and every one of you.<br /><br />
                Master Mark
              </Typography>
            </Paper>
          </CardContent>
        </BlogCard>

        {/* April 2025 Grading Results */}
        <BlogCard>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <DateIcon sx={{ color: '#EA0707', mr: 2 }} />
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  fontFamily: 'Roboto, sans-serif'
                }}
              >
                April 3, 2025
              </Typography>
              <Chip
                label="Grading"
                size="small"
                sx={{
                  ml: 2,
                  backgroundColor: '#28a745',
                  color: 'white',
                  fontFamily: 'Roboto, sans-serif'
                }}
              />
            </Box>

            <SectionTitle variant="h3">
              2025 April Grading Results
            </SectionTitle>

            <CompetitionCard>
              <CardContent>
                <TrophyIcon sx={{ fontSize: 48, mb: 2 }} />
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: 'Roboto, sans-serif'
                  }}
                >
                  TAEKWONDO GRADING RESULTS
                </Typography>
              </CardContent>
            </CompetitionCard>

            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <Card sx={{ backgroundColor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#fff' }}>
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        color: '#EA0707',
                        fontFamily: 'Roboto, sans-serif'
                      }}
                    >
                      Higher Ranks
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemText
                          primary="3rd Gup - Red/White Belt"
                          secondary="Brooke - Honours"
                          primaryTypographyProps={{ fontFamily: 'Roboto, sans-serif' }}
                          secondaryTypographyProps={{ fontFamily: 'Roboto, sans-serif' }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="5th Gup - Blue Belt"
                          secondary="Scarlett - Honours, Dani - Honours"
                          primaryTypographyProps={{ fontFamily: 'Roboto, sans-serif' }}
                          secondaryTypographyProps={{ fontFamily: 'Roboto, sans-serif' }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="6th Gup - Blue/Black Belt"
                          secondary="Alexanda - Honours"
                          primaryTypographyProps={{ fontFamily: 'Roboto, sans-serif' }}
                          secondaryTypographyProps={{ fontFamily: 'Roboto, sans-serif' }}
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>

              <Grid xs={12} md={6}>
                <Card sx={{ backgroundColor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#fff' }}>
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        color: '#EA0707',
                        fontFamily: 'Roboto, sans-serif'
                      }}
                    >
                      Junior Ranks
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemText
                          primary="8th Gup - Yellow Belt"
                          secondary="Aria - High Pass, Zara - Honours"
                          primaryTypographyProps={{ fontFamily: 'Roboto, sans-serif' }}
                          secondaryTypographyProps={{ fontFamily: 'Roboto, sans-serif' }}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="9th Gup - Yellow/White Belt"
                          secondary="Sam - Honours, Joe - Honours, Charlotte - Pass"
                          primaryTypographyProps={{ fontFamily: 'Roboto, sans-serif' }}
                          secondaryTypographyProps={{ fontFamily: 'Roboto, sans-serif' }}
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Paper sx={{ p: 3, mt: 3, backgroundColor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#f8f9fa' }}>
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  fontFamily: 'Roboto, sans-serif'
                }}
              >
                The first KFMA grading for 2025 was held on 3rd April. This was a challenging grading as we had a disruption to our training due to the weather event in March. We had to delay the grading to allow students more time to train and prepare.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  fontFamily: 'Roboto, sans-serif'
                }}
              >
                Leading up to the grading, we focused on the importance of etiquette and basic techniques. We had 9 students approved to grade, some of which were higher ranks that were required to demonstrate advanced techniques and terminology. Overall, I saw students have worked hard in the lead up to the grading and the standard of basics, etiquette and terminology was high.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  fontFamily: 'Roboto, sans-serif'
                }}
              >
                With our first grading now behind us, we have just 4 weeks to prepare for our first competition as Team KFMA. We have students competing in poomsae, sparring and speed kicking events at the Gold Coast Open.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  fontFamily: 'Roboto, sans-serif'
                }}
              >
                I encourage all students to practice at home and work on the basic skills we learn in class- this is the foundation of everything we do and helps to consolidate your learning and improves your skills.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 'bold',
                  textAlign: 'right',
                  fontFamily: 'Roboto, sans-serif'
                }}
              >
                Well done everyone!<br />
                Master Mark
              </Typography>
            </Paper>
          </CardContent>
        </BlogCard>

        {/* Competition Highlights */}
        <Box sx={{ mb: 8 }}>
          <SectionTitle variant="h3" align="center">
            Competition Highlights
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
                  image="/kfma/12f29b_2c05c65d13484f8f8cb6e8194836e779~mv2.avif"
                  alt="Competition Action"
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="caption" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                    KFMA students in action at regional competition
                  </Typography>
                </CardContent>
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
                  image="/kfma/12f29b_37573bec74014ad89680c38ab0b8d838~mv2.avif"
                  alt="Medal Winners"
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="caption" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                    Proud medal winners from recent tournament
                  </Typography>
                </CardContent>
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
                  image="/kfma/12f29b_4778be0c95bd4bf0af26d185a79d989c~mv2.avif"
                  alt="Grading Ceremony"
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="caption" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                    Belt grading ceremony celebration
                  </Typography>
                </CardContent>
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
                  image="/kfma/12f29b_51cf3577adb9435cbdf7329959ae7e38~mv2.avif"
                  alt="Team Photo"
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="caption" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                    Team photo at state championships
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Competition Results */}
        <Box sx={{ mb: 8 }}>
          <SectionTitle variant="h3" align="center">
            Latest Competition Results
          </SectionTitle>

          <Paper sx={{ p: 3, backgroundColor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#f8f9fa' }}>
            <Typography
              variant="body1"
              sx={{
                mb: 2,
                fontFamily: 'Roboto, sans-serif'
              }}
            >
              Stay updated with our latest competitions, grading results, and martial arts achievements
            </Typography>
          </Paper>
        </Box>

      </Container>
    </Box>
  );
};

export default Blog;
