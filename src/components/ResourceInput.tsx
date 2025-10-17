import React from 'react'
import NumberInput from './NumberInput'
import { ResourceName } from '../types'

interface ResourceInputProps {
  name: ResourceName
  icon: React.ReactNode
  quantity: string
  efficiency: string
  onQuantityChange: (value: string) => void
  onEfficiencyChange: (value: string) => void
  max: number
  disabled?: boolean
}

const ResourceInput: React.FC<ResourceInputProps> = ({
  name,
  icon,
  quantity,
  efficiency,
  onQuantityChange,
  onEfficiencyChange,
  max,
  disabled
}) => {
  return (
    <div className="resource-section">
      <div className="resource-header">
        {icon}
        <span>{name}</span>
      </div>
      <div className="resource-inputs">
        <NumberInput
          id={`${name}-quantity`}
          label="數量"
          value={quantity}
          onChange={onQuantityChange}
          min={0}
          max={max}
          disabled={disabled}
        />
        <NumberInput
          id={`${name}-efficiency`}
          label="效率"
          value={efficiency}
          onChange={onEfficiencyChange}
          min={0}
        />
      </div>
    </div>
  )
}

export default ResourceInput
