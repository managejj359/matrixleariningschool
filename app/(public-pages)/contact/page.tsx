'use client';
import React from 'react';
import { Container, Typography, Box, Grid, Paper, Button, Stack } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useWhatsApp } from '../../../src/hooks/useWhatsApp';

export default function ContactPage() {
    const { handleWhatsAppClick } = useWhatsApp();

    return (
        <Box sx={{ bgcolor: '#F9FAFB', minHeight: '100vh', py: { xs: 8, md: 12 } }}>
            <Container maxWidth="lg">
                <Box textAlign="center" sx={{ mb: 8 }}>
                    <Typography variant="h2" fontWeight="800" gutterBottom sx={{ color: '#111827' }}>
                        Get in <Box component="span" sx={{ color: '#1A56DB' }}>Touch</Box>
                    </Typography>
                    <Typography variant="h5" sx={{ color: '#4B5563', maxWidth: 600, mx: 'auto' }}>
                        Have questions about our classes or want to join as a volunteer? We'd love to hear from you.
                    </Typography>
                </Box>

                <Grid container spacing={4} justifyContent="center">
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Paper elevation={0} sx={{ p: 5, borderRadius: 6, border: '1px solid rgba(0,0,0,0.05)', textAlign: 'center', height: '100%' }}>
                            <WhatsAppIcon sx={{ fontSize: 60, color: '#25D366', mb: 2 }} />
                            <Typography variant="h4" fontWeight="bold" gutterBottom>WhatsApp Support</Typography>
                            <Typography variant="body1" sx={{ color: '#6B7280', mb: 4, lineHeight: 1.8 }}>
                                The fastest way to get a response. Chat with our student coordinators about enrollment, class schedules, or volunteering.
                            </Typography>
                            <Button
                                variant="contained"
                                size="large"
                                onClick={() => handleWhatsAppClick("I Want New 🆔")}
                                sx={{ bgcolor: '#25D366', '&:hover': { bgcolor: '#128C7E' }, px: 6, py: 1.5, borderRadius: 10 }}
                            >
                                Start Chat
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Paper elevation={0} sx={{ p: 5, borderRadius: 6, border: '1px solid rgba(0,0,0,0.05)', textAlign: 'center', height: '100%' }}>
                            <MailOutlineIcon sx={{ fontSize: 60, color: '#1A56DB', mb: 2 }} />
                            <Typography variant="h4" fontWeight="bold" gutterBottom>Email Us</Typography>
                            <Typography variant="body1" sx={{ color: '#6B7280', mb: 4, lineHeight: 1.8 }}>
                                For partnership inquiries, 501(c)(3) documentation, or general feedback, feel free to drop us a message.
                            </Typography>
                            <Button
                                variant="outlined"
                                size="large"
                                onClick={() => handleWhatsAppClick("I Want New 🆔")}
                                sx={{ color: '#1A56DB', borderColor: '#1A56DB', px: 6, py: 1.5, borderRadius: 10 }}
                            >
                                Contact Support
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
