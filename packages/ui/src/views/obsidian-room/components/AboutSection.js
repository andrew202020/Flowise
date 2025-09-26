import React, { useEffect, useRef, useState } from 'react'
import { Box, Typography, Container, Grid, Paper } from '@mui/material'
import { motion } from 'framer-motion'

// ==============================|| ABOUT SECTION ||============================== //

const AboutSection = () => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 60, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    return (
        <Box
            id="about"
            ref={sectionRef}
            sx={{
                py: { xs: 8, md: 15 },
                background: `
                    linear-gradient(135deg, rgba(26,26,26,0.95) 0%, rgba(10,10,10,0.98) 100%),
                    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><defs><radialGradient id="bg" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="%232d5016" stop-opacity="0.03"/><stop offset="100%" stop-color="%23d4af37" stop-opacity="0.01"/></radialGradient></defs><rect width="100%" height="100%" fill="url(%23bg)"/></svg>')
                `,
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Decorative Elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, #d4af37, transparent)',
                    opacity: 0.5
                }}
            />

            <Container maxWidth="lg">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants}>
                        <Box sx={{ textAlign: 'center', mb: 8 }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                                    fontFamily: 'Playfair Display, serif',
                                    fontWeight: 700,
                                    mb: 2,
                                    background: 'linear-gradient(135deg, #d4af37, #f4e4a6)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}
                            >
                                Heritage & Craftsmanship
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#faf9f6',
                                    opacity: 0.8,
                                    maxWidth: '600px',
                                    mx: 'auto',
                                    lineHeight: 1.6
                                }}
                            >
                                Three generations of master craftsmen, dedicated to perfection in every detail
                            </Typography>
                        </Box>
                    </motion.div>

                    <Grid container spacing={6} alignItems="center">
                        {/* Story Content */}
                        <Grid item xs={12} md={6}>
                            <motion.div variants={itemVariants}>
                                <Box>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontFamily: 'Playfair Display, serif',
                                            fontWeight: 600,
                                            color: '#d4af37',
                                            mb: 3,
                                            fontSize: { xs: '1.8rem', md: '2.2rem' }
                                        }}
                                    >
                                        Our Story
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: '#faf9f6',
                                            opacity: 0.9,
                                            lineHeight: 1.8,
                                            mb: 3,
                                            fontSize: '1.1rem'
                                        }}
                                    >
                                        Founded in 1952, Obsidian Room began as a small workshop where master craftsman 
                                        Giovanni Rossi handcrafted his first championship-quality pool table. What started 
                                        as a passion for precision has evolved into the world's most prestigious luxury 
                                        billiards manufacturer.
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: '#faf9f6',
                                            opacity: 0.9,
                                            lineHeight: 1.8,
                                            mb: 4,
                                            fontSize: '1.1rem'
                                        }}
                                    >
                                        Each Obsidian Room table is a testament to unwavering dedication to excellence. 
                                        We source only the finest hardwoods, precision-engineered slate, and premium 
                                        felt to create tables that don't just play perfectly—they transform spaces into 
                                        sanctuaries of sophistication.
                                    </Typography>

                                    {/* Stats */}
                                    <Grid container spacing={4}>
                                        <Grid item xs={6} sm={4}>
                                            <Box sx={{ textAlign: 'center' }}>
                                                <Typography
                                                    variant="h3"
                                                    sx={{
                                                        fontWeight: 700,
                                                        color: '#d4af37',
                                                        mb: 1
                                                    }}
                                                >
                                                    70+
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: '#faf9f6',
                                                        opacity: 0.8,
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '1px'
                                                    }}
                                                >
                                                    Years Legacy
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} sm={4}>
                                            <Box sx={{ textAlign: 'center' }}>
                                                <Typography
                                                    variant="h3"
                                                    sx={{
                                                        fontWeight: 700,
                                                        color: '#d4af37',
                                                        mb: 1
                                                    }}
                                                >
                                                    500+
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: '#faf9f6',
                                                        opacity: 0.8,
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '1px'
                                                    }}
                                                >
                                                    Tables Crafted
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <Box sx={{ textAlign: 'center' }}>
                                                <Typography
                                                    variant="h3"
                                                    sx={{
                                                        fontWeight: 700,
                                                        color: '#d4af37',
                                                        mb: 1
                                                    }}
                                                >
                                                    100%
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: '#faf9f6',
                                                        opacity: 0.8,
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '1px'
                                                    }}
                                                >
                                                    Handcrafted
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </motion.div>
                        </Grid>

                        {/* Philosophy Cards */}
                        <Grid item xs={12} md={6}>
                            <motion.div variants={itemVariants}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                    {[
                                        {
                                            title: "Precision Engineering",
                                            description: "Every measurement calculated to the thousandth of an inch, ensuring tournament-level play consistency.",
                                            icon: "⚡"
                                        },
                                        {
                                            title: "Premium Materials",
                                            description: "Exclusively sourced Italian slate, aged hardwoods, and championship-grade felt for unparalleled quality.",
                                            icon: "💎"
                                        },
                                        {
                                            title: "Artisan Craftsmanship",
                                            description: "Master craftsmen with decades of experience hand-finish each table to perfection.",
                                            icon: "🔨"
                                        }
                                    ].map((item, index) => (
                                        <Paper
                                            key={index}
                                            elevation={0}
                                            sx={{
                                                background: 'linear-gradient(145deg, rgba(26,26,26,0.8), rgba(42,42,42,0.6))',
                                                border: '1px solid rgba(212, 175, 55, 0.1)',
                                                borderRadius: '16px',
                                                p: 4,
                                                position: 'relative',
                                                overflow: 'hidden',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    transform: 'translateY(-5px)',
                                                    boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
                                                    borderColor: 'rgba(212, 175, 55, 0.3)',
                                                    '&::before': {
                                                        opacity: 1
                                                    }
                                                },
                                                '&::before': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    height: '1px',
                                                    background: 'linear-gradient(90deg, transparent, #d4af37, transparent)',
                                                    opacity: 0,
                                                    transition: 'opacity 0.3s ease'
                                                }
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                                <Typography
                                                    sx={{
                                                        fontSize: '2rem',
                                                        mb: 1
                                                    }}
                                                >
                                                    {item.icon}
                                                </Typography>
                                                <Box>
                                                    <Typography
                                                        variant="h6"
                                                        sx={{
                                                            fontFamily: 'Playfair Display, serif',
                                                            fontWeight: 600,
                                                            color: '#d4af37',
                                                            mb: 1
                                                        }}
                                                    >
                                                        {item.title}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            color: '#faf9f6',
                                                            opacity: 0.9,
                                                            lineHeight: 1.6
                                                        }}
                                                    >
                                                        {item.description}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    ))}
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>
                </motion.div>
            </Container>
        </Box>
    )
}

export default AboutSection