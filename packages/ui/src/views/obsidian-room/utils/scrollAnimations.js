// ==============================|| SCROLL ANIMATIONS UTILITY ||============================== //

export const initScrollAnimations = () => {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible')
                // Only animate once
                observer.unobserve(entry.target)
            }
        })
    }, observerOptions)

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
        '.fade-in-up, .fade-in-left, .fade-in-right, .scroll-animate'
    )
    
    animatedElements.forEach((el) => {
        observer.observe(el)
    })

    return observer
}

export const smoothScrollTo = (elementId, offset = 0) => {
    const element = document.getElementById(elementId)
    if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - offset

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
    }
}

export const addParallaxEffect = () => {
    let ticking = false

    const updateParallax = () => {
        const scrolled = window.pageYOffset
        const parallaxElements = document.querySelectorAll('[data-parallax]')
        
        parallaxElements.forEach((element) => {
            const speed = element.dataset.parallax || 0.5
            const yPos = -(scrolled * speed)
            element.style.transform = `translateY(${yPos}px)`
        })
        
        ticking = false
    }

    const requestParallaxUpdate = () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax)
            ticking = true
        }
    }

    window.addEventListener('scroll', requestParallaxUpdate)
    
    return () => {
        window.removeEventListener('scroll', requestParallaxUpdate)
    }
}

export const addHoverAnimations = () => {
    // Add hover effects to luxury cards
    const luxuryCards = document.querySelectorAll('.luxury-card')
    
    luxuryCards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)'
        })
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)'
        })
    })
}