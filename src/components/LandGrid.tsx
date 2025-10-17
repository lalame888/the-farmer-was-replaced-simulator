import React from 'react'
import { getResourceIcon, type ResourceCalculationResult } from '../types'

interface LandGridProps {
  gridSize: number
  resources: ResourceCalculationResult
}

const LandGrid: React.FC<LandGridProps> = ({ gridSize, resources }) => {
  const generateGrid = () => {
    const grid = []
    for (let i = 0; i < gridSize; i++) {
      const row = []
      for (let j = 0; j < gridSize; j++) {
        const name = resources[gridSize-1-i][j];
        const IconComponent = getResourceIcon(name, 30)
        row.push(
          <div key={`${i}-${j}`} className="grid-cell">
            {IconComponent}
          </div>
        )
      }
      grid.push(
        <div key={i} className="grid-row">
          {row}
        </div>
      )
    }
    return grid
  }

  return (
    <div className="grid-container">
      {generateGrid()}
    </div>
  )
}

export default LandGrid
