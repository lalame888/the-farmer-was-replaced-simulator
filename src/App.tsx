import { useMemo, useState } from 'react'
import NumberInput from './components/NumberInput'
import ResourceInput from './components/ResourceInput'
import ResourceStats from './components/ResourceStats'
import LandGrid from './components/LandGrid'
import { type Resource, getResourceIcon, getAllResourceNames, setResourceQuantity, setResourceEfficiency, calculateResource, ResourceName, calculateResourceQuantity } from './types'
import './App.css'

function App() {
  const [gridSize, setGridSize] = useState(1)
  const [landSizeInput, setLandSizeInput] = useState('1')
  const [resources, setResources] = useState<Resource[]>(
    getAllResourceNames().map(name => ({
      name,
      quantity: '0',
      efficiency: '1',
      icon: getResourceIcon(name)
    }))
  )

  const resourceCalculationResult = useMemo(() => calculateResource(gridSize, resources), [gridSize, resources])
  const resourceQuantityResult = useMemo(() => calculateResourceQuantity( resources, resourceCalculationResult), [resources, resourceCalculationResult])
  const handleLandSizeChange = (value: string) => {
    setLandSizeInput(value)
    
    // 如果輸入框為空白，不更新方格大小
    if (value === '') {
      return
    }
    
    const numValue = parseInt(value)
    // 只有當輸入的是有效數字且大於等於1時才更新方格
    if (!isNaN(numValue) && numValue >= 1) {
      setGridSize(numValue)
    }
  }

  // 資源操作函數（使用工具函數）
  const handleResourceQuantityChange = (index: number, value: string) => {
    const resource = resources[index]
    if (resource) {
      setResources(prevResources => setResourceQuantity(prevResources, resource.name, value))
    }
  }

  const handleResourceEfficiencyChange = (index: number, value: string) => {
    const resource = resources[index]
    if (resource) {
      setResources(prevResources => setResourceEfficiency(prevResources, resource.name, value))
    }
  }



  return (
    <div className="app-container">
      <div className="main-content">
        <ResourceStats resources={resourceQuantityResult} />
        <LandGrid gridSize={gridSize} resources={resourceCalculationResult} />
      </div>
      
      <div className="sidebar">
        <div className="sidebar-content">
          <h2>設定</h2>
          
          <NumberInput
            id="land-size"
            label="土地大小"
            value={landSizeInput}
            onChange={handleLandSizeChange}
            min={1}
          />
          
          <h3>資源設定</h3>
          
          {resources.map((resource, index) => {
            const disabled = resource.name === ResourceName.STRAW
            const quantity = (disabled && resources.length > 1) ? (gridSize - Number(resources[resources.length-2].quantity)) : Number(resource.quantity)
          return <ResourceInput
              key={index}
              name={resource.name}
              icon={resource.icon}
              quantity={quantity.toString()}
              efficiency={resource.efficiency}
              onQuantityChange={(value) => handleResourceQuantityChange(index, value)}
              onEfficiencyChange={(value) => handleResourceEfficiencyChange(index, value)} 
              max={gridSize}
              disabled={disabled}
            />}
          )}
        </div>
      </div>
    </div>
  )
}

export default App
