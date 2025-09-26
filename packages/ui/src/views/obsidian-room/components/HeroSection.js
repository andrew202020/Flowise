import React, { useEffect, useState } from 'react'
import { Box, Typography, Button, Container } from '@mui/material'
import { motion } from 'framer-motion'

// ==============================|| HERO SECTION ||============================== //

const HeroSection = () => {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <Box
            sx={{
                height: '100vh',
                background: `
                    linear-gradient(135deg, rgba(10,10,10,0.8) 0%, rgba(26,26,26,0.9) 100%),
                    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><defs><pattern id="grain" patternUnits="userSpaceOnUse" width="100" height="100" opacity="0.1"><circle cx="25" cy="25" r="1" fill="%23d4af37"/><circle cx="75" cy="75" r="1" fill="%23d4af37"/><circle cx="50" cy="10" r="0.5" fill="%23d4af37"/><circle cx="10" cy="90" r="0.5" fill="%23d4af37"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grain)"/></svg>')
                `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Parallax Background Elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    transform: `translateY(${scrollY * 0.5}px)`,
                    opacity: 0.1,
                    background: `
                        radial-gradient(circle at 30% 30%, #d4af37 0%, transparent 50%),
                        radial-gradient(circle at 70% 70%, #2d5016 0%, transparent 50%)
                    `
                }}
            />

            <Container maxWidth="lg" sx={{ textAlign: 'center', zIndex: 2 }}>
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    {/* Company Logo/Name */}
                    <Typography
                        variant="h1"
                        className="luxury-heading"
                        sx={{
                            fontSize: { xs: '3rem', md: '5rem', lg: '6rem' },
                            fontWeight: 700,
                            mb: 2,
                            background: 'linear-gradient(135deg, #d4af37, #f4e4a6)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 4px 8px rgba(0,0,0,0.5)'
                        }}
                    >
                        OBSIDIAN ROOM
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <Typography
                        variant="h2"
                        className="luxury-subheading"
                        sx={{
                            fontSize: { xs: '1.2rem', md: '1.8rem', lg: '2rem' },
                            fontWeight: 400,
                            mb: 4,
                            color: '#faf9f6',
                            fontStyle: 'italic',
                            letterSpacing: '2px'
                        }}
                    >
                        Ultra-Luxury 8-Ball Pool Tables
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    <Typography
                        variant="h5"
                        className="luxury-text"
                        sx={{
                            fontSize: { xs: '1rem', md: '1.25rem' },
                            mb: 6,
                            maxWidth: '800px',
                            mx: 'auto',
                            lineHeight: 1.8,
                            opacity: 0.9
                        }}
                    >
                        Where championship meets craftsmanship. Each table is a masterpiece of precision engineering, 
                        handcrafted from the finest materials to elevate your game to legendary status.
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button
                            className="luxury-button"
                            onClick={() => scrollToSection('product-showcase')}
                            sx={{
                                background: 'linear-gradient(135deg, #d4af37, #b8941f)',
                                color: '#0a0a0a',
                                fontWeight: 600,
                                fontSize: '1.1rem',
                                padding: '16px 32px',
                                borderRadius: '8px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 8px 25px rgba(212, 175, 55, 0.4)',
                                    background: 'linear-gradient(135deg, #f4e4a6, #d4af37)'
                                }
                            }}
                        >
                            Explore Collection
                        </Button>
                        
                        <Button
                            className="luxury-button-outline"
                            onClick={() => scrollToSection('contact')}
                            sx={{
                                background: 'transparent',
                                color: '#d4af37',
                                border: '2px solid #d4af37',
                                fontWeight: 500,
                                fontSize: '1.1rem',
                                padding: '14px 28px',
                                borderRadius: '8px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    background: '#d4af37',
                                    color: '#0a0a0a',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 8px 25px rgba(212, 175, 55, 0.4)'
                                }
                            }}
                        >
                            Request Consultation
                        </Button>
                    </Box>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    style={{
                        position: 'absolute',
                        bottom: '40px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        cursor: 'pointer'
                    }}
                    onClick={() => scrollToSection('about')}
                >
                    <Box
                        className="animate-float"
                        sx={{
                            width: '24px',
                            height: '40px',
                            border: '2px solid #d4af37',
                            borderRadius: '12px',
                            position: 'relative',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: '8px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '4px',
                                height: '8px',
                                backgroundColor: '#d4af37',
                                borderRadius: '2px',
                                animation: 'scroll-indicator 2s ease-in-out infinite'
                            }
                        }}
                    />
                    <Typography
                        sx={{
                            color: '#d4af37',
                            fontSize: '0.8rem',
                            mt: 1,
                            letterSpacing: '1px',
                            textTransform: 'uppercase'
                        }}
                    >
                        Scroll
                    </Typography>
                </motion.div>
            </Container>

            {/* CSS for scroll indicator animation */}
            <style jsx>{`
                @keyframes scroll-indicator {
                    0% { transform: translateX(-50%) translateY(0); opacity: 1; }
                    50% { transform: translateX(-50%) translateY(8px); opacity: 0.5; }
                    100% { transform: translateX(-50%) translateY(16px); opacity: 0; }
                }
            `}</style>
        </Box>
    )
}

export default HeroSection