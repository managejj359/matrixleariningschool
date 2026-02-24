'use client';
import React from 'react';
import { Box, Container, Typography, Paper, Divider, Stack } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import LockIcon from '@mui/icons-material/Lock';
import SchoolIcon from '@mui/icons-material/School';

export default function PrivacyPolicy() {
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
                            Privacy <Box component="span" sx={{ color: '#1A56DB' }}>Policy</Box>
                        </Typography>
                    </Stack>

                    <Box sx={{ mb: 6, p: 3, bgcolor: 'rgba(26, 86, 219, 0.05)', borderRadius: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
                        <LockIcon sx={{ color: '#1A56DB' }} />
                        <Typography variant="body1" sx={{ color: '#4B5563' }}>
                            Matrix Learning is committed to protecting the privacy of our students, volunteers, and donors. We treat your personal information with the highest regard for security and transparency.
                        </Typography>
                    </Box>

                    <Stack spacing={4}>
                        <section>
                            <Typography variant="h5" fontWeight="bold" gutterBottom color="#111827">
                                1. Information Collection
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#6B7280', lineHeight: 1.8 }}>
                                We collect information necessary to facilitate educational workshops, coordinate volunteering, and process donations. This may include contact details, educational interests, and relevant academic background.
                            </Typography>
                        </section>

                        <Divider sx={{ bgcolor: 'rgba(0, 0, 0, 0.05)' }} />

                        <section>
                            <Typography variant="h5" fontWeight="bold" gutterBottom color="#111827">
                                2. Use of Data
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#6B7280', lineHeight: 1.8 }}>
                                Your data is used to:
                                <br />• Coordinate STEM classes and workshops
                                <br />• Manage volunteer applications and schedules
                                <br />• Provide educational resources and updates
                                <br />• Comply with 501(c)(3) regulatory reporting requirements
                            </Typography>
                        </section>

                        <Divider sx={{ bgcolor: 'rgba(0, 0, 0, 0.05)' }} />

                        <section>
                            <Typography variant="h5" fontWeight="bold" gutterBottom color="#111827">
                                3. Data Protection
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#6B7280', lineHeight: 1.8 }}>
                                We implement standard security measures, including SSL encryption and restricted access protocols, to protect your information from unauthorized access. As a student-led organization, we prioritize safety and digital hygiene.
                            </Typography>
                        </section>

                        <Divider sx={{ bgcolor: 'rgba(0, 0, 0, 0.05)' }} />

                        <section>
                            <Typography variant="h5" fontWeight="bold" gutterBottom color="#111827">
                                4. Third-Party Sharing
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#6B7280', lineHeight: 1.8 }}>
                                We do not sell or lease your personal information. Data is only shared with trusted service providers (like communication tools or CRM systems) necessary for our operations, or as required by law for nonprofit compliance.
                            </Typography>
                        </section>

                        <Divider sx={{ bgcolor: 'rgba(0, 0, 0, 0.05)' }} />

                        <section>
                            <Typography variant="h5" fontWeight="bold" gutterBottom color="#111827">
                                5. Accessibility and Rights
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#6B7280', lineHeight: 1.8 }}>
                                You have the right to request access to your data, correction of inaccuracies, or deletion of your records from our systems at any time by contacting our leadership team.
                            </Typography>
                        </section>

                        <Divider sx={{ bgcolor: 'rgba(0, 0, 0, 0.05)' }} />

                        <section>
                            <Typography variant="h5" fontWeight="bold" gutterBottom color="#111827">
                                6. Contact Us
                            </Typography>
                            <Typography variant="body1" sx={{ color: '#6B7280', lineHeight: 1.8 }}>
                                For any questions regarding this policy or our data practices, please reach out to us via our official WhatsApp channel or through our community email.
                            </Typography>
                        </section>
                    </Stack>

                    <Box sx={{ mt: 8, textAlign: 'center', opacity: 0.6 }}>
                        <Typography variant="body2" sx={{ color: '#9CA3AF' }}>
                            © {new Date().getFullYear()} Matrix Learning | 501(c)(3) Nonprofit Organization
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}
