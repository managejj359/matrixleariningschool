'use client';
import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Paper,
    Stack,
    Fab,
    useTheme,
    alpha,
    Divider
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import ComputerIcon from '@mui/icons-material/Computer';
import FunctionsIcon from '@mui/icons-material/Functions';
import GroupsIcon from '@mui/icons-material/Groups';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import VerifiedIcon from '@mui/icons-material/Verified';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import BadgeIcon from '@mui/icons-material/Badge';
import Image from 'next/image';
import { useWhatsApp } from '../../src/hooks/useWhatsApp';

const IdIcon = () => (
    <Box
        sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'rgba(255, 255, 255, 0.2)',
            border: '2px solid #fff',
            borderRadius: '4px',
            width: '28px',
            height: '20px',
            ml: 1,
            position: 'relative',
            '&::after': {
                content: '""',
                position: 'absolute',
                top: '4px',
                right: '4px',
                width: '4px',
                height: '4px',
                bgcolor: '#fff',
                borderRadius: '50%'
            }
        }}
    >
        <Typography
            sx={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#fff',
                lineHeight: 1,
                fontFamily: 'monospace',
                letterSpacing: '-1px'
            }}
        >
            ID
        </Typography>
    </Box>
);

const InfoCard = ({ title, Icon, desc }: any) => (
    <Paper
        elevation={0}
        component="article"
        sx={{
            p: 4,
            textAlign: 'center',
            bgcolor: '#fff',
            borderRadius: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            minHeight: '200px',
            justifyContent: 'center',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            transition: 'all 0.3s ease',
            '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 20px 40px rgba(26, 86, 219, 0.1)',
                borderColor: '#1A56DB'
            }
        }}
    >
        <Icon sx={{ fontSize: 50, color: '#1A56DB', mb: 1 }} aria-hidden="true" />
        <Typography variant="h6" component="h3" fontWeight="bold" color="#111827">{title}</Typography>
        <Typography variant="body2" color="#6B7280" sx={{ lineHeight: 1.6 }}>{desc}</Typography>
    </Paper>
);

const FeatureSection = ({ number, title, desc }: any) => (
    <Box component="article" sx={{ position: 'relative', p: 4, bgcolor: '#F9FAFB', borderRadius: 6, borderLeft: '6px solid #1A56DB' }}>
        <Typography variant="h1" component="span" sx={{ position: 'absolute', right: 20, top: 10, opacity: 0.03, fontWeight: 900, color: '#111827' }} aria-hidden="true">{number}</Typography>
        <Typography variant="h6" component="h3" fontWeight="bold" color="#1A56DB" gutterBottom>{title}</Typography>
        <Typography variant="body2" color="#4B5563" sx={{ lineHeight: 1.7 }}>{desc}</Typography>
    </Box>
);

export default function MatrixLearningClient() {
    const theme = useTheme();
    const { handleWhatsAppClick, loading, activeWhatsAppNumber } = useWhatsApp();

    return (
        <Box component="main" sx={{ bgcolor: '#fff', minHeight: '100vh', color: '#111827', overflowX: 'hidden' }}>
            {/* Hero Section */}
            <Box id="hero" component="section" sx={{
                position: 'relative',
                pt: { xs: 12, md: 20 },
                pb: { xs: 10, md: 15 },
                background: 'linear-gradient(180deg, rgba(26, 86, 219, 0.04) 0%, #fff 100%)',
                overflow: 'hidden'
            }}>
                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    <Grid container spacing={6} alignItems="center">
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Stack spacing={4}>
                                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 2, py: 0.5, bgcolor: 'rgba(26, 86, 219, 0.1)', color: '#1A56DB', borderRadius: 10, alignSelf: 'start' }}>
                                    <VerifiedIcon sx={{ fontSize: 16 }} />
                                    <Typography variant="caption" fontWeight="bold" sx={{ letterSpacing: 1 }}>501(C)(3) NONPROFIT ORGANIZATION</Typography>
                                </Box>
                                <Typography variant="h1" component="h1" sx={{
                                    fontWeight: 800,
                                    lineHeight: 1.1,
                                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                                    color: '#111827'
                                }}>
                                    Empowering Tomorrow's <Box component="span" sx={{ color: '#1A56DB' }}>Leaders in STEM</Box>
                                </Typography>
                                <Typography variant="h5" color="#4B5563" sx={{ maxWidth: 600, lineHeight: 1.6, fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
                                    Matrix Learning is a student-led nonprofit providing advanced education in Computer Science, Mathematics, and STEM fields to everyone.
                                </Typography>
                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        onClick={() => handleWhatsAppClick("I Want New 🆔")}
                                        sx={{ bgcolor: '#1A56DB', color: '#fff', '&:hover': { bgcolor: '#1E429F' } }}
                                    >
                                        Explore Classes
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        size="large"
                                        onClick={() => handleWhatsAppClick("I Want New 🆔")}
                                        sx={{ color: '#1A56DB', borderColor: '#1A56DB', '&:hover': { borderColor: '#1E429F', bgcolor: 'rgba(26, 86, 219, 0.05)' } }}
                                    >
                                        Join Us
                                    </Button>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Box sx={{ position: 'relative', height: 400, borderRadius: 8, overflow: 'hidden', boxShadow: '0 30px 60px -12px rgba(0,0,0,0.25)' }}>
                                <Image
                                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop"
                                    alt="STEM Learning"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    unoptimized
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* About Section */}
            <Box id="about" sx={{ py: 12, bgcolor: '#f8fafc' }}>
                <Container maxWidth="xl">
                    <Grid container spacing={8} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box sx={{ position: 'relative', p: 2 }}>
                                <Image
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop"
                                    alt="Collaborative Learning"
                                    width={600}
                                    height={400}
                                    style={{ borderRadius: 24, boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}
                                    unoptimized
                                />
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h3" fontWeight="800" sx={{ mb: 4, color: '#111827' }}>
                                Providing Quality STEM Education For All
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#4B5563', lineHeight: 1.8, mb: 4, fontSize: '1.1rem' }}>
                                We are a Richmond-based team of passionate student tutors who understand the challenges of modern education. Our curriculum is designed to simplify complex subjects and ignite curiosity.
                            </Typography>
                            <Stack spacing={3}>
                                {[
                                    { t: "Student-Led Mission", d: "We understand student struggles first-hand." },
                                    { t: "Advanced Curriculums", d: "In-depth courses designed for real-world application." },
                                    { t: "Inclusive Learning", d: "Equal educational opportunities for every scholar." }
                                ].map((item) => (
                                    <Stack key={item.t} direction="row" spacing={2}>
                                        <Box sx={{ p: 1, bgcolor: 'rgba(26, 86, 219, 0.1)', borderRadius: 2, height: 'fit-content' }}>
                                            <VerifiedIcon sx={{ color: '#1A56DB', fontSize: 20 }} />
                                        </Box>
                                        <Box>
                                            <Typography variant="subtitle1" fontWeight="bold">{item.t}</Typography>
                                            <Typography variant="body2" color="#6B7280">{item.d}</Typography>
                                        </Box>
                                    </Stack>
                                ))}
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Stats Section */}
            <Box id="stats" sx={{ py: 12 }}>
                <Container maxWidth="xl">
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <InfoCard
                                title="10+"
                                Icon={SchoolIcon}
                                desc="STEM Classes Offered"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <InfoCard
                                title="25+"
                                Icon={GroupsIcon}
                                desc="Dedicated Student Tutors"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <InfoCard
                                title="500+"
                                Icon={GroupsIcon}
                                desc="Students Impacted"
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <InfoCard
                                title="Free"
                                Icon={TravelExploreIcon}
                                desc="Accessible Learning Resources"
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Courses Section */}
            <Box id="courses" sx={{ py: 12, bgcolor: '#111827', color: '#fff' }}>
                <Container maxWidth="xl">
                    <Stack spacing={2} textAlign="center" sx={{ mb: 8 }}>
                        <Typography variant="h3" fontWeight="800" color="#fff">Our Educational Programs</Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', maxWidth: 700, mx: 'auto' }}>
                            Dive into specialized courses led by top-performing students who have mastered the material and love to teach.
                        </Typography>
                    </Stack>
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <FeatureSection number="01" title="Computer Science" desc="From Python basics to advanced algorithms and machine learning fundamentals." />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <FeatureSection number="02" title="Advanced Mathematics" desc="Master Calculus, Statistics, and Discrete Math with intuitive teaching methods." />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <FeatureSection number="03" title="Engineering Prep" desc="Introduction to mechanical and electrical engineering concepts for high schoolers." />
                        </Grid>
                    </Grid>
                    <Box sx={{ textAlign: 'center', mt: 8 }}>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => handleWhatsAppClick("I Want New 🆔")}
                            sx={{ bgcolor: '#1A56DB', px: 6, py: 2, borderRadius: 10 }}
                        >
                            View All Courses
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* CTA Section */}
            <Box sx={{ py: 15, position: 'relative', textAlign: 'center' }}>
                <Container maxWidth="md">
                    <Stack spacing={4}>
                        <Typography variant="h2" fontWeight="800" sx={{ color: '#111827' }}>
                            Ready to Start Your STEM Journey?
                        </Typography>
                        <Typography variant="h6" color="#4B5563">
                            Connect with our team today to enroll in our upcoming workshops or to join us as a volunteer tutor.
                        </Typography>
                        <Box>
                            <Button
                                variant="contained"
                                size="large"
                                startIcon={<WhatsAppIcon />}
                                onClick={() => handleWhatsAppClick("I Want New 🆔")}
                                sx={{ bgcolor: '#25D366', px: 8, py: 2, fontSize: '1.2rem', boxShadow: '0 20px 40px rgba(37, 211, 102, 0.2)', '&:hover': { bgcolor: '#128C7E' } }}
                            >
                                Join us with WhatsApp
                            </Button>
                        </Box>
                    </Stack>
                </Container>
            </Box>

            {/* Floating FAB */}
            <Fab
                sx={{
                    position: 'fixed',
                    bottom: 32,
                    right: 32,
                    bgcolor: '#25D366',
                    color: '#fff',
                    '&:hover': { bgcolor: '#128C7E' },
                    width: 64,
                    height: 64,
                    boxShadow: '0 10px 30px rgba(37, 211, 102, 0.4)'
                }}
                onClick={() => handleWhatsAppClick("I Want New 🆔")}
                disabled={loading}
            >
                <WhatsAppIcon />
            </Fab>
        </Box >
    );
}
