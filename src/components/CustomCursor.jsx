import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
    const cursorRef = useRef(null)
    const followerRef = useRef(null)

    useEffect(() => {
        const cursor = cursorRef.current
        const follower = followerRef.current

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
            })
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
            })
        }

        const handleHover = (e) => {
            if (e.target.closest('a, button, .cursor-pointer')) {
                gsap.to(follower, {
                    scale: 3,
                    backgroundColor: 'rgba(245, 166, 35, 0.2)',
                    duration: 0.3,
                })
            } else {
                gsap.to(follower, {
                    scale: 1,
                    backgroundColor: 'transparent',
                    duration: 0.3,
                })
            }
        }

        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mouseover', handleHover)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('mouseover', handleHover)
        }
    }, [])

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-sunset-orange rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
                style={{ transform: 'translate(-50%, -50%)' }}
            />
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-10 h-10 border border-sunset-orange/50 rounded-full pointer-events-none z-[9998] hidden md:block"
                style={{ transform: 'translate(-50%, -50%)' }}
            />
        </>
    )
}
