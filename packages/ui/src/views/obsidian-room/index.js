import React, { useEffect } from 'react'
import { Box } from '@mui/material'

// Components
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProductShowcase from './components/ProductShowcase'
import CraftsmanshipSection from './components/CraftsmanshipSection'
import ContactSection from './components/ContactSection'

// Utilities
import { initScrollAnimations, addParallaxEffect, addHoverAnimations } from './utils/scrollAnimations'

// Styles
import './styles/ObsidianRoom.css'

// ==============================|| OBSIDIAN ROOM LANDING PAGE ||============================== //

const ObsidianRoom = () => {
    useEffect(() => {
        // Initialize scroll animations
        const observer = initScrollAnimations()
        
        // Add parallax effects
        const cleanupParallax = addParallaxEffect()
        
        // Add hover animations
        addHoverAnimations()
        
        // Cleanup function
        return () => {
            observer.disconnect()
            cleanupParallax()
        }
    }, [])

    return (
        <Box className="obsidian-room-container">
            <HeroSection />
            <AboutSection />
            <ProductShowcase />
            <CraftsmanshipSection />
            <ContactSection />
        </Box>
    )
}

export default ObsidianRoom