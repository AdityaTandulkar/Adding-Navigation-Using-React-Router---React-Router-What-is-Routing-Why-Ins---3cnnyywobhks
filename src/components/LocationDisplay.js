import React from 'react'
import { useLocation } from 'react-router-dom'

export default function LocationDisplay() {
  return (
    <div>
        <h1 data-testid="location-display">
            {
                useLocation().pathname
            }
        </h1>
    </div>
  )
}
