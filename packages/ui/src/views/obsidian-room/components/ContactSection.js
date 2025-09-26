import React, { useEffect, useRef, useState } from 'react'
import { Box, Typography, Container, Grid, TextField, Button, Paper, IconButton } from '@mui/material'
import { motion } from 'framer-motion'

// ==============================|| CONTACT SECTION ||============================== //

const ContactSection = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
    })
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

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically handle form submission
        console.log('Form submitted:', formData)
        alert('Thank you for your inquiry. We will contact you within 24 hours.')
        setFormData({
            name: '',
            email: '',
            phone: '',
            interest: '',
            message: ''
        })
    }

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

    const showroomInfo = {
        address: "1250 Fifth Avenue\nNew York, NY 10029\nUnited States",
        phone: "+1 (555) 123-4567",
        email: "inquiries@obsidianroom.com",
        hours: "Monday - Friday: 10:00 AM - 7:00 PM\nSaturday: 10:00 AM - 6:00 PM\nSunday: 12:00 PM - 5:00 PM"
    }

    const socialLinks = [
        { name: 'Instagram', icon: '📸', url: '#' },
        { name: 'Facebook', icon: '📘', url: '#' },
        { name: 'LinkedIn', icon: '💼', url: '#' },
        { name: 'YouTube', icon: '🎥', url: '#' }
    ]

    return (
        <Box
            id="contact"
            ref={sectionRef}
            sx={{
                py: { xs: 8, md: 15 },
                background: `
                    linear-gradient(135deg, rgba(10,10,10,0.98) 0%, rgba(26,26,26,0.95) 50%, rgba(45,80,22,0.1) 100%),
                    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><defs><pattern id="contact-pattern" patternUnits="userSpaceOnUse" width="120" height="120" opacity="0.02"><rect width="120" height="120" fill="none" stroke="%23d4af37" stroke-width="1"/><circle cx="60" cy="60" r="20" fill="none" stroke="%23d4af37" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23contact-pattern)"/></svg>')
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
                                Begin Your Journey
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
                                Experience the Obsidian Room difference. Visit our showroom or schedule a private consultation.
                            </Typography>
                        </Box>
                    </motion.div>

                    <Grid container spacing={6}>
                        {/* Contact Form */}
                        <Grid item xs={12} lg={7}>
                            <motion.div variants={itemVariants}>
                                <Paper
                                    sx={{
                                        background: 'linear-gradient(145deg, rgba(26,26,26,0.9), rgba(42,42,42,0.7))',
                                        border: '1px solid rgba(212, 175, 55, 0.1)',
                                        borderRadius: '20px',
                                        p: { xs: 3, md: 5 },
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                >
                                    {/* Form Header */}
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontFamily: 'Playfair Display, serif',
                                            fontWeight: 600,
                                            color: '#d4af37',
                                            mb: 3,
                                            textAlign: 'center'
                                        }}
                                    >
                                        Request Consultation
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: '#faf9f6',
                                            opacity: 0.8,
                                            textAlign: 'center',
                                            mb: 4,
                                            lineHeight: 1.6
                                        }}
                                    >
                                        Our experts will help you design the perfect pool table for your space. 
                                        Each consultation includes custom measurements and personalized recommendations.
                                    </Typography>

                                    {/* Contact Form */}
                                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    name="name"
                                                    label="Full Name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    required
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            '& fieldset': {
                                                                borderColor: 'rgba(212, 175, 55, 0.3)',
                                                            },
                                                            '&:hover fieldset': {
                                                                borderColor: 'rgba(212, 175, 55, 0.5)',
                                                            },
                                                            '&.Mui-focused fieldset': {
                                                                borderColor: '#d4af37',
                                                            },
                                                            color: '#faf9f6'
                                                        },
                                                        '& .MuiInputLabel-root': {
                                                            color: 'rgba(250, 249, 246, 0.7)',
                                                            '&.Mui-focused': {
                                                                color: '#d4af37'
                                                            }
                                                        }
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    name="email"
                                                    label="Email Address"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            '& fieldset': {
                                                                borderColor: 'rgba(212, 175, 55, 0.3)',
                                                            },
                                                            '&:hover fieldset': {
                                                                borderColor: 'rgba(212, 175, 55, 0.5)',
                                                            },
                                                            '&.Mui-focused fieldset': {
                                                                borderColor: '#d4af37',
                                                            },
                                                            color: '#faf9f6'
                                                        },
                                                        '& .MuiInputLabel-root': {
                                                            color: 'rgba(250, 249, 246, 0.7)',
                                                            '&.Mui-focused': {
                                                                color: '#d4af37'
                                                            }
                                                        }
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    name="phone"
                                                    label="Phone Number"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            '& fieldset': {
                                                                borderColor: 'rgba(212, 175, 55, 0.3)',
                                                            },
                                                            '&:hover fieldset': {
                                                                borderColor: 'rgba(212, 175, 55, 0.5)',
                                                            },
                                                            '&.Mui-focused fieldset': {
                                                                borderColor: '#d4af37',
                                                            },
                                                            color: '#faf9f6'
                                                        },
                                                        '& .MuiInputLabel-root': {
                                                            color: 'rgba(250, 249, 246, 0.7)',
                                                            '&.Mui-focused': {
                                                                color: '#d4af37'
                                                            }
                                                        }
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    name="interest"
                                                    label="Table Interest"
                                                    value={formData.interest}
                                                    onChange={handleInputChange}
                                                    placeholder="e.g., The Emperor, Custom Design"
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            '& fieldset': {
                                                                borderColor: 'rgba(212, 175, 55, 0.3)',
                                                            },
                                                            '&:hover fieldset': {
                                                                borderColor: 'rgba(212, 175, 55, 0.5)',
                                                            },
                                                            '&.Mui-focused fieldset': {
                                                                borderColor: '#d4af37',
                                                            },
                                                            color: '#faf9f6'
                                                        },
                                                        '& .MuiInputLabel-root': {
                                                            color: 'rgba(250, 249, 246, 0.7)',
                                                            '&.Mui-focused': {
                                                                color: '#d4af37'
                                                            }
                                                        }
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    name="message"
                                                    label="Message"
                                                    multiline
                                                    rows={4}
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    placeholder="Tell us about your space, preferences, and any special requirements..."
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            '& fieldset': {
                                                                borderColor: 'rgba(212, 175, 55, 0.3)',
                                                            },
                                                            '&:hover fieldset': {
                                                                borderColor: 'rgba(212, 175, 55, 0.5)',
                                                            },
                                                            '&.Mui-focused fieldset': {
                                                                borderColor: '#d4af37',
                                                            },
                                                            color: '#faf9f6'
                                                        },
                                                        '& .MuiInputLabel-root': {
                                                            color: 'rgba(250, 249, 246, 0.7)',
                                                            '&.Mui-focused': {
                                                                color: '#d4af37'
                                                            }
                                                        }
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button
                                                    type="submit"
                                                    fullWidth
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
                                                    Request Consultation
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Paper>
                            </motion.div>
                        </Grid>

                        {/* Showroom Information */}
                        <Grid item xs={12} lg={5}>
                            <motion.div variants={itemVariants}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                    {/* Showroom Details */}
                                    <Paper
                                        sx={{
                                            background: 'linear-gradient(145deg, rgba(45,80,22,0.2), rgba(26,26,26,0.8))',
                                            border: '1px solid rgba(212, 175, 55, 0.1)',
                                            borderRadius: '16px',
                                            p: 4,
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontFamily: 'Playfair Display, serif',
                                                fontWeight: 600,
                                                color: '#d4af37',
                                                mb: 3
                                            }}
                                        >
                                            Visit Our Showroom
                                        </Typography>

                                        <Box sx={{ mb: 3 }}>
                                            <Typography
                                                variant="h6"
                                                sx={{ color: '#d4af37', mb: 1 }}
                                            >
                                                📍 Address
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: '#faf9f6',
                                                    opacity: 0.9,
                                                    whiteSpace: 'pre-line',
                                                    lineHeight: 1.6
                                                }}
                                            >
                                                {showroomInfo.address}
                                            </Typography>
                                        </Box>

                                        <Box sx={{ mb: 3 }}>
                                            <Typography
                                                variant="h6"
                                                sx={{ color: '#d4af37', mb: 1 }}
                                            >
                                                📞 Phone
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: '#faf9f6',
                                                    opacity: 0.9,
                                                    lineHeight: 1.6
                                                }}
                                            >
                                                {showroomInfo.phone}
                                            </Typography>
                                        </Box>

                                        <Box sx={{ mb: 3 }}>
                                            <Typography
                                                variant="h6"
                                                sx={{ color: '#d4af37', mb: 1 }}
                                            >
                                                ✉️ Email
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: '#faf9f6',
                                                    opacity: 0.9,
                                                    lineHeight: 1.6
                                                }}
                                            >
                                                {showroomInfo.email}
                                            </Typography>
                                        </Box>

                                        <Box>
                                            <Typography
                                                variant="h6"
                                                sx={{ color: '#d4af37', mb: 1 }}
                                            >
                                                🕒 Hours
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: '#faf9f6',
                                                    opacity: 0.9,
                                                    whiteSpace: 'pre-line',
                                                    lineHeight: 1.6
                                                }}
                                            >
                                                {showroomInfo.hours}
                                            </Typography>
                                        </Box>
                                    </Paper>

                                    {/* Social Media */}
                                    <Paper
                                        sx={{
                                            background: 'linear-gradient(145deg, rgba(26,26,26,0.8), rgba(42,42,42,0.6))',
                                            border: '1px solid rgba(212, 175, 55, 0.1)',
                                            borderRadius: '16px',
                                            p: 4
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontFamily: 'Playfair Display, serif',
                                                fontWeight: 600,
                                                color: '#d4af37',
                                                mb: 3
                                            }}
                                        >
                                            Follow Our Craft
                                        </Typography>

                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: '#faf9f6',
                                                opacity: 0.8,
                                                mb: 3,
                                                lineHeight: 1.6
                                            }}
                                        >
                                            Stay updated with our latest creations, behind-the-scenes craftsmanship, and luxury inspirations.
                                        </Typography>

                                        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                            {socialLinks.map((social, index) => (
                                                <IconButton
                                                    key={index}
                                                    href={social.url}
                                                    sx={{
                                                        background: 'rgba(212, 175, 55, 0.1)',
                                                        border: '1px solid rgba(212, 175, 55, 0.3)',
                                                        color: '#d4af37',
                                                        width: 50,
                                                        height: 50,
                                                        borderRadius: '12px',
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            background: 'rgba(212, 175, 55, 0.2)',
                                                            transform: 'translateY(-2px)',
                                                            boxShadow: '0 8px 20px rgba(212, 175, 55, 0.2)'
                                                        }
                                                    }}
                                                >
                                                    <Typography sx={{ fontSize: '1.5rem' }}>
                                                        {social.icon}
                                                    </Typography>
                                                </IconButton>
                                            ))}
                                        </Box>
                                    </Paper>
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>
                </motion.div>
            </Container>

            {/* Footer */}
            <Box
                sx={{
                    mt: 8,
                    pt: 4,
                    borderTop: '1px solid rgba(212, 175, 55, 0.1)',
                    textAlign: 'center'
                }}
            >
                <Typography
                    variant="body2"
                    sx={{
                        color: '#faf9f6',
                        opacity: 0.6,
                        mb: 2
                    }}
                >
                    © 2024 Obsidian Room. All rights reserved. | Crafting excellence since 1952.
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        color: '#d4af37',
                        fontSize: '0.9rem',
                        fontStyle: 'italic'
                    }}
                >
                    "Where championship meets craftsmanship."
                </Typography>
            </Box>
        </Box>
    )
}

export default ContactSection