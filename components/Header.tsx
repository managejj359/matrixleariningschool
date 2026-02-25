'use client';
import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Box,
    IconButton,
    Stack,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useTheme,
    useMediaQuery
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useWhatsApp } from '../src/hooks/useWhatsApp';

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { handleWhatsAppClick } = useWhatsApp();

    const navItems = [
        { label: 'Home', href: '/learning-center#hero' },
        { label: 'About Us', href: '/learning-center#about' },
        { label: 'STEM Classes', href: '/learning-center#courses' },
        { label: 'Stats', href: '/learning-center#stats' },
        { label: 'Contact', href: '/contact' }
    ];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box sx={{ textAlign: 'center', p: 2, bgcolor: '#fff', height: '100%', color: '#111827' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 4 }}>
                <SchoolIcon sx={{ color: '#1A56DB', fontSize: 32 }} />
                <Typography variant="h6" fontWeight="800" color="#1A56DB">Matrix Learning</Typography>
            </Box>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <Link href={item.href} style={{ textDecoration: 'none', width: '100%' }}>
                            <ListItemText
                                primary={item.label}
                                sx={{ textAlign: 'center', color: '#374151', '& span': { fontWeight: 500, fontSize: '1rem' } }}
                                onClick={() => setMobileOpen(false)}
                            />
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Button
                variant="contained"
                fullWidth
                onClick={() => handleWhatsAppClick("I Want New 🆔")}
                sx={{
                    mt: 2,
                    bgcolor: '#1A56DB',
                    color: '#fff',
                    fontWeight: 'bold',
                    '&:hover': { bgcolor: '#1E429F' }
                }}
            >
                GET STARTED
            </Button>
        </Box>
    );

    return (
        <AppBar component="header" position="sticky" elevation={0} sx={{ bgcolor: '#fff', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            {/* Top Bar */}
            <Box sx={{ bgcolor: '#F9FAFB', borderBottom: '1px solid rgba(0,0,0,0.05)', py: 1 }}>
                <Container maxWidth="xl">
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Typography variant="body2" sx={{ color: '#6B7280', fontWeight: 500, display: { xs: 'none', sm: 'block' } }}>Connect :</Typography>
                            <Stack direction="row" spacing={0.5}>
                                <IconButton
                                    size="small"
                                    sx={{ color: '#25D366' }}
                                    onClick={() => handleWhatsAppClick("I Want New 🆔")}
                                    aria-label="Contact on WhatsApp"
                                >
                                    <WhatsAppIcon fontSize="small" />
                                </IconButton>
                                <IconButton
                                    size="small"
                                    sx={{ color: '#1A56DB' }}
                                    onClick={() => handleWhatsAppClick("I Want New 🆔")}
                                    aria-label="Email Us"
                                >
                                    <MailOutlineIcon fontSize="small" />
                                </IconButton>
                            </Stack>
                        </Stack>

                        <Box sx={{
                            flexGrow: 1,
                            mx: { xs: 1, md: 2 },
                            bgcolor: 'rgba(26, 86, 219, 0.05)',
                            borderRadius: 10,
                            border: '1px solid rgba(26, 86, 219, 0.1)',
                            overflow: 'hidden',
                            position: 'relative',
                            height: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            minWidth: 0
                        }}>
                            <Box component="div" sx={{
                                whiteSpace: 'nowrap',
                                animation: 'marquee 30s linear infinite',
                                color: '#1A56DB',
                                fontSize: '11px',
                                fontWeight: '600',
                                px: 2,
                                display: 'inline-block'
                            }}>
                                • Matrix Learning: Empowering Future Leaders in STEM • Join our Student-led Classes • Tutoring Programs for Computer Science & Math • 501(c)(3) Nonprofit
                            </Box>
                            <style>{`
                                @keyframes marquee {
                                    0% { transform: translateX(100%); }
                                    100% { transform: translateX(-100%); }
                                }
                            `}</style>
                        </Box>

                        <Button
                            variant="outlined"
                            size="small"
                            onClick={() => handleWhatsAppClick("I Want New 🆔")}
                            sx={{
                                color: '#1A56DB',
                                borderColor: '#1A56DB',
                                px: { xs: 1.5, md: 3 },
                                borderRadius: 10,
                                fontWeight: 'bold',
                                fontSize: '11px',
                                display: { xs: 'none', sm: 'flex' },
                                '&:hover': { bgcolor: 'rgba(26, 86, 219, 0.05)', borderColor: '#1A56DB' },
                                marginRight: 1
                            }}
                        >
                            Become a Tutor
                        </Button>

                        <Button
                            variant="contained"
                            size="small"
                            onClick={() => handleWhatsAppClick("I Want New 🆔")}
                            sx={{
                                bgcolor: '#1A56DB',
                                color: '#fff',
                                px: { xs: 1.5, md: 3 },
                                borderRadius: 10,
                                fontWeight: 'bold',
                                fontSize: '11px',
                                display: { xs: 'none', sm: 'flex' },
                                '&:hover': { bgcolor: '#1E429F' }
                            }}
                        >
                            Enroll Now
                        </Button>
                    </Stack>
                </Container>
            </Box>

            {/* Main Nav */}
            <Container maxWidth="xl">
                <Toolbar component="nav" disableGutters sx={{ minHeight: { xs: '60px !important', md: '80px !important' } }}>
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'inherit' }}>
                        <SchoolIcon sx={{ color: '#1A56DB', fontSize: { xs: 24, md: 36 } }} />
                        <Typography variant="h6" component="h2" fontWeight="800" sx={{ color: '#111827', letterSpacing: -0.5, fontSize: { xs: '1.2rem', md: '1.6rem' } }}>
                            Matrix <Box component="span" sx={{ color: '#1A56DB' }}>Learning</Box>
                        </Typography>
                    </Link>

                    <Box sx={{ flexGrow: 1 }} />

                    {/* Desktop Menu */}
                    <Stack direction="row" spacing={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                style={{
                                    textDecoration: 'none',
                                    color: '#4B5563',
                                    fontSize: '15px',
                                    fontWeight: 600,
                                    transition: 'color 0.2s ease',
                                }}
                            >
                                <Box component="span" sx={{ '&:hover': { color: '#1A56DB' } }}>
                                    {item.label}
                                </Box>
                            </Link>
                        ))}
                    </Stack>

                    {/* Mobile Menu Toggle */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ ml: 2, display: { md: 'none' }, color: '#1A56DB' }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </Container>

            {/* Mobile Drawer */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280, bgcolor: '#fff' },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
}
