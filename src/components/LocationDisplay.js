import React from 'react'
import { useLocation } from 'react-router-dom'

export default function LocationDisplay() {
  return (
    <div>
        <h1>
            {
                useLocation().pathname
            }
        </h1>
    </div>
  )
}
