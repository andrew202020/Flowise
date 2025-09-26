import React, { useEffect, useRef, useState } from 'react'
import { Box, Typography, Container, Grid, Paper } from '@mui/material'
import { motion } from 'framer-motion'

// ==============================|| CRAFTSMANSHIP SECTION ||============================== //

const CraftsmanshipSection = () => {
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

    const craftingSteps = [
        {
            step: "01",
            title: "Material Selection",
            description: "We source only the finest hardwoods from sustainably managed forests. Each piece is hand-selected for its grain pattern, density, and stability.",
            detail: "Our master craftsmen personally inspect every board, looking for the perfect balance of beauty and structural integrity. Only 1 in 20 boards meets our exacting standards.",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='wood' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%234a3728'/%3E%3Cstop offset='100%25' stop-color='%236b4423'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='%230a0a0a'/%3E%3Crect x='50' y='50' width='300' height='200' fill='url(%23wood)' stroke='%23d4af37' stroke-width='2'/%3E%3Cpath d='M70,70 Q200,90 330,70' stroke='%235c3a1f' stroke-width='1' fill='none'/%3E%3Cpath d='M70,120 Q200,140 330,120' stroke='%235c3a1f' stroke-width='1' fill='none'/%3E%3Cpath d='M70,170 Q200,190 330,170' stroke='%235c3a1f' stroke-width='1' fill='none'/%3E%3Ctext x='200' y='260' text-anchor='middle' fill='%23d4af37' font-size='12' font-family='serif'%3EPremium Hardwood%3C/text%3E%3C/svg%3E"
        },
        {
            step: "02",
            title: "Precision Engineering",
            description: "Using state-of-the-art CNC machinery combined with traditional hand tools, we achieve tolerances measured in thousandths of an inch.",
            detail: "Every cut, every joint, every surface is measured and verified against our championship specifications. This precision ensures perfect ball roll and table stability.",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='metal' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23c0c0c0'/%3E%3Cstop offset='100%25' stop-color='%23808080'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='%230a0a0a'/%3E%3Crect x='100' y='80' width='200' height='140' fill='url(%23metal)' stroke='%23d4af37' stroke-width='2'/%3E%3Ccircle cx='150' cy='120' r='15' fill='%23d4af37'/%3E%3Ccircle cx='200' cy='150' r='10' fill='%23d4af37'/%3E%3Ccircle cx='250' cy='120' r='12' fill='%23d4af37'/%3E%3Ctext x='200' y='260' text-anchor='middle' fill='%23d4af37' font-size='12' font-family='serif'%3EPrecision Tools%3C/text%3E%3C/svg%3E"
        },
        {
            step: "03",
            title: "Slate Installation",
            description: "Tournament-grade Italian slate is precisely leveled and joined to create the perfect playing surface. Each joint is sealed and polished to invisibility.",
            detail: "Our master installers spend hours ensuring the slate surface is perfectly level across the entire table, creating the ideal foundation for championship play.",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3ClinearGradient id='slate' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23666666'/%3E%3Cstop offset='100%25' stop-color='%23333333'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='%230a0a0a'/%3E%3Crect x='50' y='100' width='300' height='120' fill='url(%23slate)' stroke='%23d4af37' stroke-width='2'/%3E%3Cline x1='50' y1='160' x2='350' y2='160' stroke='%23d4af37' stroke-width='1'/%3E%3Cline x1='200' y1='100' x2='200' y2='220' stroke='%23d4af37' stroke-width='1'/%3E%3Ctext x='200' y='260' text-anchor='middle' fill='%23d4af37' font-size='12' font-family='serif'%3EItalian Slate%3C/text%3E%3C/svg%3E"
        },
        {
            step: "04",
            title: "Hand Finishing",
            description: "Each table receives dozens of hours of hand finishing, from sanding to staining to the final protective coats that bring out the wood's natural beauty.",
            detail: "Our artisans apply multiple coats of premium finish, hand-sanding between each application to achieve a mirror-like surface that will last generations.",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Cdefs%3E%3CradialGradient id='finish' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='%23d4af37'/%3E%3Cstop offset='100%25' stop-color='%23b8941f'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='400' height='300' fill='%230a0a0a'/%3E%3Cellipse cx='200' cy='150' rx='120' ry='80' fill='url(%23finish)' opacity='0.8'/%3E%3Cpath d='M150,120 Q200,100 250,120 Q250,180 200,200 Q150,180 150,120' fill='%23b8941f' opacity='0.6'/%3E%3Ctext x='200' y='260' text-anchor='middle' fill='%23d4af37' font-size='12' font-family='serif'%3EHand Finished%3C/text%3E%3C/svg%3E"
        }
    ]

    const materials = [
        {
            name: "Premium Italian Slate",
            description: "Tournament-grade 1-inch thick slate from the finest quarries in Italy",
            properties: ["Perfect flatness", "Consistent density", "Superior durability"]
        },
        {
            name: "Championship Felt",
            description: "Hand-selected Simonis cloth for optimal ball roll and longevity",
            properties: ["Consistent speed", "Stain resistant", "Professional grade"]
        },
        {
            name: "Aged Hardwoods",
            description: "Carefully aged mahogany, oak, and exotic woods for stability",
            properties: ["Dimensional stability", "Rich grain patterns", "Natural beauty"]
        },
        {
            name: "Precision Hardware",
            description: "Custom-machined components for perfect alignment and durability",
            properties: ["Corrosion resistant", "Precision tolerances", "Long lasting"]
        }
    ]

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
            id="craftsmanship"
            ref={sectionRef}
            sx={{
                py: { xs: 8, md: 15 },
                background: `
                    linear-gradient(135deg, rgba(26,26,26,0.95) 0%, rgba(45,80,22,0.05) 50%, rgba(10,10,10,0.98) 100%),
                    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><defs><pattern id="craft-pattern" patternUnits="userSpaceOnUse" width="150" height="150" opacity="0.02"><polygon points="75,0 150,75 75,150 0,75" stroke="%23d4af37" stroke-width="1" fill="none"/></pattern></defs><rect width="100%" height="100%" fill="url(%23craft-pattern)"/></svg>')
                `,
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Decorative Top Border */}
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

            <Container maxWidth="xl">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants}>
                        <Box sx={{ textAlign: 'center', mb: 10 }}>
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
                                Master Craftsmanship
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#faf9f6',
                                    opacity: 0.8,
                                    maxWidth: '700px',
                                    mx: 'auto',
                                    lineHeight: 1.6
                                }}
                            >
                                Witness the meticulous process that transforms raw materials into championship-worthy pool tables
                            </Typography>
                        </Box>
                    </motion.div>

                    {/* Crafting Process */}
                    <motion.div variants={itemVariants}>
                        <Box sx={{ mb: 12 }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontFamily: 'Playfair Display, serif',
                                    fontWeight: 600,
                                    color: '#d4af37',
                                    mb: 6,
                                    textAlign: 'center'
                                }}
                            >
                                The Obsidian Process
                            </Typography>
                            
                            <Grid container spacing={4}>
                                {craftingSteps.map((step, index) => (
                                    <Grid item xs={12} md={6} lg={3} key={index}>
                                        <Paper
                                            sx={{
                                                background: 'linear-gradient(145deg, rgba(26,26,26,0.8), rgba(42,42,42,0.6))',
                                                border: '1px solid rgba(212, 175, 55, 0.1)',
                                                borderRadius: '20px',
                                                p: 3,
                                                height: '100%',
                                                position: 'relative',
                                                overflow: 'hidden',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    transform: 'translateY(-8px)',
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
                                                    height: '2px',
                                                    background: 'linear-gradient(90deg, transparent, #d4af37, transparent)',
                                                    opacity: 0,
                                                    transition: 'opacity 0.3s ease'
                                                }
                                            }}
                                        >
                                            {/* Step Number */}
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: -15,
                                                    left: 20,
                                                    background: 'linear-gradient(135deg, #d4af37, #b8941f)',
                                                    color: '#0a0a0a',
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 700,
                                                    fontSize: '1rem'
                                                }}
                                            >
                                                {step.step}
                                            </Box>

                                            {/* Step Image */}
                                            <Box sx={{ mb: 3, mt: 2 }}>
                                                <img
                                                    src={step.image}
                                                    alt={step.title}
                                                    style={{
                                                        width: '100%',
                                                        height: '150px',
                                                        objectFit: 'cover',
                                                        borderRadius: '12px'
                                                    }}
                                                />
                                            </Box>

                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontFamily: 'Playfair Display, serif',
                                                    fontWeight: 600,
                                                    color: '#d4af37',
                                                    mb: 2
                                                }}
                                            >
                                                {step.title}
                                            </Typography>

                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: '#faf9f6',
                                                    opacity: 0.9,
                                                    lineHeight: 1.6,
                                                    mb: 2
                                                }}
                                            >
                                                {step.description}
                                            </Typography>

                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: '#faf9f6',
                                                    opacity: 0.7,
                                                    lineHeight: 1.5,
                                                    fontSize: '0.9rem',
                                                    fontStyle: 'italic'
                                                }}
                                            >
                                                {step.detail}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </motion.div>

                    {/* Premium Materials Section */}
                    <motion.div variants={itemVariants}>
                        <Box>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontFamily: 'Playfair Display, serif',
                                    fontWeight: 600,
                                    color: '#d4af37',
                                    mb: 6,
                                    textAlign: 'center'
                                }}
                            >
                                Premium Materials
                            </Typography>

                            <Grid container spacing={4}>
                                {materials.map((material, index) => (
                                    <Grid item xs={12} sm={6} lg={3} key={index}>
                                        <Paper
                                            sx={{
                                                background: 'linear-gradient(145deg, rgba(45,80,22,0.2), rgba(26,26,26,0.8))',
                                                border: '1px solid rgba(212, 175, 55, 0.1)',
                                                borderRadius: '16px',
                                                p: 3,
                                                height: '100%',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    transform: 'translateY(-5px)',
                                                    borderColor: 'rgba(212, 175, 55, 0.3)',
                                                    boxShadow: '0 15px 30px rgba(0,0,0,0.7)'
                                                }
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontFamily: 'Playfair Display, serif',
                                                    fontWeight: 600,
                                                    color: '#d4af37',
                                                    mb: 2
                                                }}
                                            >
                                                {material.name}
                                            </Typography>

                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: '#faf9f6',
                                                    opacity: 0.9,
                                                    lineHeight: 1.6,
                                                    mb: 3
                                                }}
                                            >
                                                {material.description}
                                            </Typography>

                                            <Box>
                                                {material.properties.map((property, propIndex) => (
                                                    <Box 
                                                        key={propIndex}
                                                        sx={{ 
                                                            display: 'flex', 
                                                            alignItems: 'center', 
                                                            mb: 1 
                                                        }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                width: 6,
                                                                height: 6,
                                                                borderRadius: '50%',
                                                                background: '#d4af37',
                                                                mr: 2
                                                            }}
                                                        />
                                                        <Typography
                                                            variant="body2"
                                                            sx={{
                                                                color: '#faf9f6',
                                                                opacity: 0.8,
                                                                fontSize: '0.9rem'
                                                            }}
                                                        >
                                                            {property}
                                                        </Typography>
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </motion.div>
                </motion.div>
            </Container>
        </Box>
    )
}

export default CraftsmanshipSection