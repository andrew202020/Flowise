import React, { useEffect, useRef, useState } from 'react'
import { Box, Typography, Container, Grid, Card, CardMedia, CardContent, Chip } from '@mui/material'
import { motion } from 'framer-motion'

// ==============================|| PRODUCT SHOWCASE SECTION ||============================== //

const ProductShowcase = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(0)
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

    const products = [
        {
            id: 1,
            name: "The Emperor",
            series: "Championship Series",
            price: "From $25,000",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='table1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23d4af37'/%3E%3Cstop offset='100%25' stop-color='%23b8941f'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='%230a0a0a'/%3E%3Crect x='50' y='150' width='700' height='350' rx='20' fill='%232d5016' stroke='url(%23table1)' stroke-width='3'/%3E%3Crect x='80' y='180' width='640' height='290' rx='10' fill='%233d6b20'/%3E%3Ctext x='400' y='320' text-anchor='middle' fill='%23d4af37' font-size='24' font-family='serif'%3ETHE EMPEROR%3C/text%3E%3C/svg%3E",
            features: ["Italian Carrara Marble Inlays", "Championship-Grade Brunswick Felt", "Hand-Carved Mahogany Frame", "Precision Diamond System"],
            description: "Our flagship model, meticulously crafted for the most discerning players who demand perfection in every aspect."
        },
        {
            id: 2,
            name: "The Obsidian Elite",
            series: "Professional Series",
            price: "From $18,000",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='table2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%231a1a1a'/%3E%3Cstop offset='100%25' stop-color='%232a2a2a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='%230a0a0a'/%3E%3Crect x='50' y='150' width='700' height='350' rx='20' fill='url(%23table2)' stroke='%23d4af37' stroke-width='2'/%3E%3Crect x='80' y='180' width='640' height='290' rx='10' fill='%232d5016'/%3E%3Ctext x='400' y='320' text-anchor='middle' fill='%23d4af37' font-size='20' font-family='serif'%3EOBSIDIAN ELITE%3C/text%3E%3C/svg%3E",
            features: ["Ebony & Rosewood Construction", "Professional Simonis Cloth", "Tournament-Grade Pockets", "Adjustable Leg Levelers"],
            description: "Professional-grade excellence with sophisticated design elements that complement any luxury space."
        },
        {
            id: 3,
            name: "The Heritage Classic",
            series: "Artisan Series",
            price: "From $12,000",
            image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Cdefs%3E%3ClinearGradient id='table3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23b8941f'/%3E%3Cstop offset='100%25' stop-color='%23d4af37'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='600' fill='%230a0a0a'/%3E%3Crect x='50' y='150' width='700' height='350' rx='20' fill='%234a3728' stroke='url(%23table3)' stroke-width='2'/%3E%3Crect x='80' y='180' width='640' height='290' rx='10' fill='%232d5016'/%3E%3Ctext x='400' y='310' text-anchor='middle' fill='%23d4af37' font-size='18' font-family='serif'%3EHERITAGE%3C/text%3E%3Ctext x='400' y='335' text-anchor='middle' fill='%23d4af37' font-size='18' font-family='serif'%3ECLASSIC%3C/text%3E%3C/svg%3E",
            features: ["Traditional Oak Construction", "Premium Wool Felt", "Classic Pocket Design", "Handcrafted Detailing"],
            description: "Timeless elegance meets modern performance in this tribute to classic pool table design."
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
            id="product-showcase"
            ref={sectionRef}
            sx={{
                py: { xs: 8, md: 15 },
                background: `
                    linear-gradient(135deg, rgba(10,10,10,0.98) 0%, rgba(26,26,26,0.95) 100%),
                    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><defs><pattern id="luxury-pattern" patternUnits="userSpaceOnUse" width="200" height="200" opacity="0.02"><path d="M0,100 Q50,50 100,100 T200,100" stroke="%23d4af37" stroke-width="1" fill="none"/><path d="M100,0 Q150,50 200,0" stroke="%23d4af37" stroke-width="1" fill="none"/></pattern></defs><rect width="100%" height="100%" fill="url(%23luxury-pattern)"/></svg>')
                `,
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Decorative Gold Line */}
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
                                Signature Collection
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
                                Discover our meticulously crafted pool tables, each designed to be the centerpiece of luxury spaces
                            </Typography>
                        </Box>
                    </motion.div>

                    {/* Featured Product Display */}
                    <motion.div variants={itemVariants}>
                        <Box sx={{ mb: 8 }}>
                            <Grid container spacing={6} alignItems="center">
                                {/* Product Image */}
                                <Grid item xs={12} lg={7}>
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            borderRadius: '20px',
                                            overflow: 'hidden',
                                            background: 'linear-gradient(145deg, rgba(26,26,26,0.8), rgba(42,42,42,0.6))',
                                            border: '1px solid rgba(212, 175, 55, 0.2)',
                                            p: 2
                                        }}
                                    >
                                        <img
                                            src={products[selectedProduct].image}
                                            alt={products[selectedProduct].name}
                                            style={{
                                                width: '100%',
                                                height: '400px',
                                                objectFit: 'cover',
                                                borderRadius: '16px'
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 16,
                                                right: 16,
                                                background: 'rgba(212, 175, 55, 0.9)',
                                                color: '#0a0a0a',
                                                px: 2,
                                                py: 1,
                                                borderRadius: '20px',
                                                fontWeight: 600,
                                                fontSize: '0.9rem'
                                            }}
                                        >
                                            {products[selectedProduct].series}
                                        </Box>
                                    </Box>
                                </Grid>

                                {/* Product Details */}
                                <Grid item xs={12} lg={5}>
                                    <Box>
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                fontFamily: 'Playfair Display, serif',
                                                fontWeight: 700,
                                                color: '#d4af37',
                                                mb: 2,
                                                fontSize: { xs: '2rem', md: '2.5rem' }
                                            }}
                                        >
                                            {products[selectedProduct].name}
                                        </Typography>
                                        
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                color: '#faf9f6',
                                                mb: 3,
                                                fontWeight: 300
                                            }}
                                        >
                                            {products[selectedProduct].price}
                                        </Typography>

                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: '#faf9f6',
                                                opacity: 0.9,
                                                lineHeight: 1.7,
                                                mb: 4,
                                                fontSize: '1.1rem'
                                            }}
                                        >
                                            {products[selectedProduct].description}
                                        </Typography>

                                        {/* Features */}
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: '#d4af37',
                                                mb: 2,
                                                fontWeight: 600
                                            }}
                                        >
                                            Key Features
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                                            {products[selectedProduct].features.map((feature, index) => (
                                                <Chip
                                                    key={index}
                                                    label={feature}
                                                    sx={{
                                                        background: 'rgba(212, 175, 55, 0.1)',
                                                        color: '#d4af37',
                                                        border: '1px solid rgba(212, 175, 55, 0.3)',
                                                        '&:hover': {
                                                            background: 'rgba(212, 175, 55, 0.2)'
                                                        }
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </motion.div>

                    {/* Product Grid */}
                    <motion.div variants={itemVariants}>
                        <Grid container spacing={4}>
                            {products.map((product, index) => (
                                <Grid item xs={12} md={4} key={product.id}>
                                    <Card
                                        onClick={() => setSelectedProduct(index)}
                                        sx={{
                                            background: 'linear-gradient(145deg, rgba(26,26,26,0.8), rgba(42,42,42,0.6))',
                                            border: selectedProduct === index 
                                                ? '2px solid #d4af37' 
                                                : '1px solid rgba(212, 175, 55, 0.1)',
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-8px)',
                                                boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
                                                borderColor: 'rgba(212, 175, 55, 0.4)'
                                            }
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            height="240"
                                            image={product.image}
                                            alt={product.name}
                                        />
                                        <CardContent sx={{ p: 3 }}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontFamily: 'Playfair Display, serif',
                                                    fontWeight: 600,
                                                    color: '#d4af37',
                                                    mb: 1
                                                }}
                                            >
                                                {product.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: '#faf9f6',
                                                    opacity: 0.7,
                                                    mb: 2
                                                }}
                                            >
                                                {product.series}
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    color: '#faf9f6',
                                                    fontWeight: 300
                                                }}
                                            >
                                                {product.price}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div variants={itemVariants}>
                        <Box sx={{ textAlign: 'center', mt: 8 }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    color: '#faf9f6',
                                    mb: 3,
                                    opacity: 0.9
                                }}
                            >
                                Each table is custom-crafted to your specifications
                            </Typography>
                            <Box
                                component="button"
                                sx={{
                                    background: 'linear-gradient(135deg, #d4af37, #b8941f)',
                                    color: '#0a0a0a',
                                    fontWeight: 600,
                                    fontSize: '1.1rem',
                                    padding: '16px 32px',
                                    border: 'none',
                                    borderRadius: '8px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 8px 25px rgba(212, 175, 55, 0.4)',
                                        background: 'linear-gradient(135deg, #f4e4a6, #d4af37)'
                                    }
                                }}
                                onClick={() => {
                                    const element = document.getElementById('contact')
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' })
                                    }
                                }}
                            >
                                Request Custom Quote
                            </Box>
                        </Box>
                    </motion.div>
                </motion.div>
            </Container>
        </Box>
    )
}

export default ProductShowcase