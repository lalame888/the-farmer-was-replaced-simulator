import React from 'react'
import { getResourceIcon, type ResourceName } from '../types'

interface ResourceStatsProps {
  resources: Record<ResourceName, {count: number, result: number}>
}

const ResourceStats: React.FC<ResourceStatsProps> = ({ resources }) => {
  return (
    <div className="stats-header">
      {Object.entries(resources).map(([name, {count, result}]) => (
        <div key={name} className="resource-item">
          {getResourceIcon(name as ResourceName)}
          <span>{name}：{result} 個 (佔地: {count})</span>
        </div>
      ))}
    </div>
  )
}

export default ResourceStats
