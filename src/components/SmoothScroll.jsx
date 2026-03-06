import React, { useRef, useState, useCallback, useLayoutEffect } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

const SmoothScroll = ({ children }) => {
  const contentRef = useRef(null)
  const [contentHeight, setContentHeight] = useState(0)

  // 1. Measure the height of your content
  useLayoutEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [children])

  // 2. Capture the native scroll progress
  const { scrollY } = useScroll()
  
  // 3. Apply a Spring to the scroll value (This creates the "Cinematic" glide)
  const smoothY = useSpring(scrollY, {
    damping: 20, // Higher = less oscillation
    stiffness: 100, // Higher = snappier
    mass: 0.5
  })

  // 4. Invert the scroll value to move the content up
  const y = useTransform(smoothY, (value) => -value)

  return (
    <>
      {/* This div creates the actual scrollbar on the page */}
      <div style={{ height: contentHeight }} />
      
      {/* This fixed container holds your content and moves it smoothly */}
      <motion.div
        ref={contentRef}
        style={{ y }}
        className="fixed top-0 left-0 w-full overflow-hidden will-change-transform"
      >
        {children}
      </motion.div>
    </>
  )
}

export default SmoothScroll