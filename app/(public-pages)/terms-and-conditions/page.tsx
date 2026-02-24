'use client';
import React from 'react';
import { Box, Container, Typography, Paper, Divider, Stack } from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';

export default function TermsAndConditions() {
    return (
        <Box sx={{ bgcolor: '#F9FAFB', minHeight: '100vh', py: { xs: 8, md: 12 }, color: '#111827' }}>
            <Container maxWidth="md">
                <Paper
                    elevation={0}
                    sx={{
                        p: { xs: 4, md: 6 },
                        bgcolor: '#fff',
                        borderRadius: 6,
                        border: '1px solid rgba(0, 0, 0, 0.05)',
                        color: '#111827',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
                    }}
                >
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 4 }}>
                        <SchoolIcon sx={{ color: '#1A56DB', fontSize: 40 }} />
                        <Typography variant="h3" fontWeight="900" sx={{ color: '#111827' }}>
                            Terms & <Box component="span" sx={{ color: '#1A56DB' }}>Conditions</Box>
                        </Typography>
                    </Stack>

                    <Box sx={{ mb: 6, p: 3, bgcolor: 'rgba(26, 86, 219, 0.05)', borderRadius: 4, border: '1px solid rgba(26, 86, 219, 0.1)' }}>
                        <Stack direction="row" spacing={2} alignItems="flex-start">
                            <InfoIcon sx={{ color: '#1A56DB', mt: 0.5 }} />
                            <Typography variant="h6" fontWeight="bold" color="#1A56DB">
                                Community Commitment
                            </Typography>
                        </Stack>
                        <Typography variant="body1" sx={{ mt: 1, color: '#4B5563' }}>
                            By participating in Matrix Learning programs, you agree to foster a respectful and inclusive educational environment. We are dedicated to providing free, high-quality STEM resources to all.
                        </Typography>
                    </Box>

                    <Stack spacing={4}>
                        <section>
                            <Typography variant="h5" fontWeight="bold" gutterBottom color="#111827">
                                1. Acceptance of Terms
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#6B7280', lineHeight: 1.8 }}>
                                By accessing or using the Matrix Learning platform, you agree to be bound by these Terms and Conditions. Our mission is to empower students through STEM, and these terms ensure a safe and effective learning space for everyone.
                            </Typography>
                        </section>

                        <Divider sx={{ bgcolor: 'rgba(0, 0, 0, 0.05)' }} />

                        <section>
                            <Typography variant="h5" fontWeight="bold" gutterBottom color="#111827">
                                2. Educational Participation
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#6B7280', lineHeight: 1.8 }}>
                                Students and participants are expected to engage honestly and respectfully during workshops. All educational materials provided are for personal learning and non-commercial use only.
                            </Typography>
                        </section>

                        <Divider sx={{ bgcolor: 'rgba(0, 0, 0, 0.05)' }} />

                        <section>
                            <Typography variant="h5" fontWeight="bold" gutterBottom color="#111827">
                                3. Volunteer Conduct
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#6B7280', lineHeight: 1.8 }}>
                                Volunteer tutors represent Matrix Learning and are expected to maintain professional standards of conduct and mentorship. Any form of harassment or discrimination is strictly prohibited and will lead to immediate removal from the organization.
                            </Typography>
                        </section>

                        <Divider sx={{ bgcolor: 'rgba(0, 0, 0, 0.05)' }} />

                        <section>
                            <Typography variant="h5" fontWeight="bold" gutterBottom color="#111827">
                                4. Intellectual Property
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#6B7280', lineHeight: 1.8 }}>
                                The curriculum, teaching methods, and digital resources developed by Matrix Learning are the property of the organization. While we encourage sharing for educational purposes, unauthorized reproduction for profit is prohibited.
                            </Typography>
                        </section>

                        <Divider sx={{ bgcolor: 'rgba(0, 0, 0, 0.05)' }} />

                        <section>
                            <Typography variant="h5" fontWeight="bold" gutterBottom color="#111827">
                                5. Liability
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#6B7280', lineHeight: 1.8 }}>
                                Matrix Learning provides educational resources "as is." While we strive for accuracy and excellence, we are not liable for any incidental outcomes resulting from the use of our educational materials or participation in our workshops.
                            </Typography>
                        </section>

                        <Divider sx={{ bgcolor: 'rgba(0, 0, 0, 0.05)' }} />

                        <section>
                            <Typography variant="h5" fontWeight="bold" gutterBottom color="#111827">
                                6. Non-Profit Status
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#6B7280', lineHeight: 1.8 }}>
                                As a 501(c)(3) nonprofit, Matrix Learning operates for educational and charitable purposes. All operations are governed by the regulations applicable to such organizations in the United States.
                            </Typography>
                        </section>
                    </Stack>

                    <Box sx={{ mt: 8, textAlign: 'center', opacity: 0.6 }}>
                        <Typography variant="body2" sx={{ color: '#9CA3AF' }}>
                            Last Updated: February 2026
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}
