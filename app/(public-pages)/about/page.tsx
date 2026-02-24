'use client';
import React from 'react';
import { Container, Typography, Box, Grid, Paper, Stack, Divider } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import VerifiedIcon from '@mui/icons-material/Verified';

export default function AboutPage() {
    return (
        <Box sx={{ bgcolor: '#F9FAFB', minHeight: '100vh', py: { xs: 8, md: 12 } }}>
            <Container maxWidth="lg">
                <Stack spacing={6}>
                    <Box textAlign="center">
                        <Typography variant="h2" fontWeight="800" gutterBottom sx={{ color: '#111827' }}>
                            About <Box component="span" sx={{ color: '#1A56DB' }}>Matrix Learning</Box>
                        </Typography>
                        <Typography variant="h5" sx={{ color: '#4B5563', maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}>
                            We are a student-led 501(c)(3) nonprofit organization dedicated to providing high-quality STEM education to students everywhere.
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Paper elevation={0} sx={{ p: 4, borderRadius: 6, border: '1px solid rgba(0,0,0,0.05)', height: '100%' }}>
                                <Typography variant="h4" fontWeight="bold" gutterBottom color="#111827">Our Mission</Typography>
                                <Typography variant="body1" sx={{ color: '#6B7280', lineHeight: 1.8, fontSize: '1.1rem' }}>
                                    At Matrix Learning, we believe that education is the most powerful tool for change. Our mission is to democratize access to advanced STEM subjects, including Computer Science and Mathematics, by leveraging the passion and knowledge of top-performing student tutors.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Paper elevation={0} sx={{ p: 4, borderRadius: 6, border: '1px solid rgba(0,0,0,0.05)', height: '100%' }}>
                                <Typography variant="h4" fontWeight="bold" gutterBottom color="#111827">Our Vision</Typography>
                                <Typography variant="body1" sx={{ color: '#6B7280', lineHeight: 1.8, fontSize: '1.1rem' }}>
                                    We envision a world where every student, regardless of their background, has the opportunity to master the skills needed for the future workforce. We strive to build a global community of scholars who learn from and inspire one another.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Box sx={{ py: 6 }}>
                        <Typography variant="h4" fontWeight="bold" textAlign="center" sx={{ mb: 6, color: '#111827' }}>What Sets Us Apart</Typography>
                        <Grid container spacing={4}>
                            {[
                                { title: "Student-Led", desc: "Our tutors are high-achieving students who understand the current academic landscape.", icon: GroupsIcon },
                                { title: "Research-Backed", desc: "Our curriculum is designed to be engaging, effective, and aligned with modern standards.", icon: VerifiedIcon },
                                { title: "Community Focused", desc: "We reinvest all our resources into providing free materials and scholarships.", icon: SchoolIcon }
                            ].map((item) => (
                                <Grid size={{ xs: 12, md: 4 }} key={item.title}>
                                    <Stack alignItems="center" textAlign="center" spacing={2}>
                                        <Box sx={{ p: 2, bgcolor: 'rgba(26, 86, 219, 0.1)', borderRadius: '50%' }}>
                                            <item.icon sx={{ color: '#1A56DB', fontSize: 40 }} />
                                        </Box>
                                        <Typography variant="h5" fontWeight="bold">{item.title}</Typography>
                                        <Typography variant="body1" color="#6B7280">{item.desc}</Typography>
                                    </Stack>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}
