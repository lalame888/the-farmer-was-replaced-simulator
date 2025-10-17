import React, { useState } from 'react'

interface NumberInputProps {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  min?: number
  max?: number
  className?: string
  icon?: React.ReactNode
  disabled?: boolean
}

const NumberInput: React.FC<NumberInputProps> = ({
  id,
  label,
  value,
  onChange,
  min,
  max,
  className = '',
  icon,
  disabled
}) => {
  const [internalValue, setInternalValue] = useState(value)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setInternalValue(newValue)
    
    // 如果是空字串，允許輸入但不更新外部狀態
    if (newValue === '') {
      return
    }
    
    const numValue = Number(newValue)
    
    // 檢查是否為有效數字
    if (isNaN(numValue)) {
      return
    }
    
    let finalValue = numValue
    
    // 檢查範圍限制並調整值
    if (min !== undefined && numValue < min) {
      finalValue = min
      setInternalValue(min.toString())
    }
    
    if (max !== undefined && numValue > max) {
      finalValue = max
      setInternalValue(max.toString())
    }
    
    // 更新外部狀態
    onChange(finalValue.toString())
  }

  // 當外部 value 改變時，同步內部狀態
  React.useEffect(() => {
    setInternalValue(value)
  }, [value])

  return (
    <div className={`input-group ${className}`}>
      <div className="input-row">
        {icon && <div className="input-icon">{icon}</div>}
        <label htmlFor={id}>{label}：</label>
        <input
          id={id}
          type="number"
          min={min}
          max={max}
          value={internalValue}
          onChange={handleInputChange}
          className="number-input"
          disabled={disabled}
        />
      </div>
    </div>
  )
}

export default NumberInput
