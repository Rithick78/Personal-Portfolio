import React from 'react'
import Header from '../components/Header'
import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'

function DashboardProvider({ children }) {
  return (
    <div>
      <div className="min-h-screen bg-black relative w-full text-white">
        <Header />

        {children}
        <div className="pointer-events-none">
          <ShootingStars />
          <StarsBackground />
        </div>
      </div>

    </div>
  )
}

export default DashboardProvider