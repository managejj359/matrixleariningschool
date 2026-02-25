'use client';
import React from 'react';
import { Box, Container, Typography, Grid, IconButton, Stack } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Link from 'next/link';
import { useWhatsApp } from '../src/hooks/useWhatsApp';

export default function Footer() {
    const { handleWhatsAppClick } = useWhatsApp();

    const linkSections = [
        {
            title: 'Our Programs',
            links: [
                { name: 'STEM Classes', path: '#' },
                { name: 'Computer Science', path: '#' },
                { name: 'Mathematics', path: '#' },
                { name: 'Tutoring', path: '#' },
            ]
        },
        {
            title: 'Organization',
            links: [
                { name: 'About Us', path: '#' },
                { name: 'Our Team', path: '#' },
                { name: 'Statistics', path: '#' },
                { name: 'Privacy Policy', path: '/privacy-policy' },
            ]
        },
        {
            title: 'Resources',
            links: [
                { name: 'STEM News', path: '#' },
                { name: 'Learning Materials', path: '#' },
                { name: 'Partner Schools', path: '#' },
            ]
        }
    ];

    return (
        <Box component="footer" sx={{ bgcolor: '#F9FAFB', color: '#111827', pt: 8, pb: 4, borderTop: '1px solid rgba(0,0,0,0.05)' }}>
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    {/* Brand Info */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                            <SchoolIcon sx={{ color: '#1A56DB', fontSize: 28 }} />
                            <Typography variant="h5" component="h2" fontWeight="800" sx={{ color: '#111827', letterSpacing: -0.5 }}>
                                Matrix <Box component="span" sx={{ color: '#1A56DB' }}>Learning</Box>
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: '#6B7280', mb: 3, lineHeight: 1.8, fontSize: '0.9rem' }}>
                            A student-led nonprofit organization based out of Richmond, VA that teaches STEM fields with a focus on computer science and mathematical courses.
                        </Typography>
                        <Stack direction="row" spacing={1.5}>
                            <IconButton
                                onClick={() => handleWhatsAppClick("Hi, I'm ready to join!")}
                                sx={{ bgcolor: 'rgba(37, 211, 102, 0.1)', color: '#25D366', '&:hover': { bgcolor: '#25D366', color: '#fff' } }}
                                aria-label="Contact on WhatsApp"
                            >
                                <WhatsAppIcon fontSize="small" />
                            </IconButton>
                            <IconButton
                                onClick={() => handleWhatsAppClick("Hi, I'm ready to join!")}
                                sx={{ bgcolor: 'rgba(26, 86, 219, 0.1)', color: '#1A56DB', '&:hover': { bgcolor: '#1A56DB', color: '#fff' } }}
                                aria-label="Email Us"
                            >
                                <MailOutlineIcon fontSize="small" />
                            </IconButton>
                        </Stack>
                    </Grid>

                    {/* Links */}
                    {linkSections.map((section) => (
                        <Grid size={{ xs: 6, md: 3 }} key={section.title} component="nav">
                            <Typography variant="subtitle1" component="h3" fontWeight="bold" sx={{ mb: 3, color: '#111827', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                                {section.title}
                            </Typography>
                            <Stack spacing={1.5} sx={{ listStyle: 'none', p: 0, m: 0 }}>
                                {section.links.map((link) => (
                                    <Box component="li" key={link.name}>
                                        <Box
                                            onClick={() => handleWhatsAppClick(`Hi, I'm ready to join!`)}
                                            sx={{
                                                color: '#6B7280',
                                                textDecoration: 'none',
                                                fontSize: '14px',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s ease',
                                                '&:hover': { color: '#1A56DB', transform: 'translateX(5px)' }
                                            }}
                                        >
                                            {link.name}
                                        </Box>
                                    </Box>
                                ))}
                            </Stack>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ mt: 8, pt: 4, borderTop: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' }}>
                    <Typography variant="caption" sx={{ color: '#9CA3AF', letterSpacing: 0.5 }}>
                        © {new Date().getFullYear()} MATRIX LEARNING. A 501(C)(3) NONPROFIT ORGANIZATION. ALL RIGHTS RESERVED.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
