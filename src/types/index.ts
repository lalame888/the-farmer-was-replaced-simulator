import React from 'react'
import { StrawIcon, WoodIcon, CarrotIcon, PumpkinIcon } from '../components/FarmIcons'

export enum ResourceName {
  PUMPKIN = '南瓜',
  TREE = '樹木',
  CARROT = '胡蘿蔔',
  STRAW = '稻草',
}

export interface Resource {
  name: ResourceName
  quantity: string
  efficiency: string
  icon: React.ReactNode
}

export const getResourceIcon = (name: ResourceName, size: number = 20): React.ReactNode => {
  switch (name) {
    case ResourceName.PUMPKIN:
      return React.createElement(PumpkinIcon, { size });
    case ResourceName.TREE:
      return React.createElement(WoodIcon, { size });
    case ResourceName.CARROT:
      return React.createElement(CarrotIcon, { size });
    case ResourceName.STRAW:
      return React.createElement(StrawIcon, { size });
    default:
      return null
  }
}

// 資源操作工具函數
export const getResource = (resources: Resource[], name: ResourceName): Resource | undefined => {
  return resources.find(resource => resource.name === name)
}

export const setResourceQuantity = (resources: Resource[], name: ResourceName, quantity: string): Resource[] => {
  return resources.map(resource => 
    resource.name === name 
      ? { ...resource, quantity }
      : resource
  )
}

export const setResourceEfficiency = (resources: Resource[], name: ResourceName, efficiency: string): Resource[] => {
  return resources.map(resource => 
    resource.name === name 
      ? { ...resource, efficiency }
      : resource
  )
}

export const updateResource = (resources: Resource[], name: ResourceName, updates: Partial<Omit<Resource, 'name'>>): Resource[] => {
  return resources.map(resource => 
    resource.name === name 
      ? { ...resource, ...updates }
      : resource
  )
}

export const getAllResourceNames = (): ResourceName[] => {
  return Object.values(ResourceName)
}

export const ResourceRule: Record<ResourceName, (x: number, y: number, setting: number) => boolean> = {
  [ResourceName.PUMPKIN]: (x: number, y: number, setting: number) => x < setting && y < setting,
  [ResourceName.TREE]: (x: number, y: number, setting: number) => (x%2 === y%2) &&  y < setting,
  [ResourceName.CARROT]: (x: number, y: number, setting: number) => y < setting,
  [ResourceName.STRAW]: () => true,
}
export const ResourceOrder = [ResourceName.PUMPKIN, ResourceName.TREE, ResourceName.CARROT, ResourceName.STRAW]

export type ResourceCalculationResult = Record<number, Record<number, ResourceName>>
export const calculateResource = (size: number, resources: Resource[]): ResourceCalculationResult => {
  const result: ResourceCalculationResult = {}
  const resourceSettingRecord: Record<ResourceName, number> = resources.reduce((acc, resource) => {
    acc[resource.name] = Number(resource.quantity) || 0
    return acc
  }, {} as Record<ResourceName, number>)
  for (let i=0; i<size; i++) {
    result[i] = {}
    for (let j=0; j<size; j++) {
      for(const name of ResourceOrder) {
        if (ResourceRule[name](i, j, resourceSettingRecord[name])) {
          result[i][j] = name
          break;
        }
      }
    }
  }
  return result
}
export const calculateResourceQuantity = (resources:Resource[], resourceMap: ResourceCalculationResult): Record<ResourceName, {count: number, result: number}> => {
  const size = Object.keys(resourceMap).length
  const efficiencyRecord: Record<ResourceName, number> = resources.reduce((acc, resource) => {
    acc[resource.name] = Number(resource.efficiency) || 0
    return acc
  }, {} as Record<ResourceName, number>)
  const result = ResourceOrder.reduce((acc, name) => {
    acc[name] = {count: 0, result: 0}
    return acc
  }, {} as Record<ResourceName, {count: number, result: number}>)

  for (let i=0; i<size; i++) {
    for (let j=0; j<size; j++) {
      const name = resourceMap[i][j]
      if (name) {
        result[name].count++
      }
    }
  }
  for (const name of ResourceOrder) {
    switch (name) {
      case ResourceName.PUMPKIN:{
        const row = Math.sqrt(result[name].count)
        result[name].result =row *row * row * efficiencyRecord[name]
        break
      }
        
      default:
        result[name].result = result[name].count * efficiencyRecord[name]
        break
    }
  }
  return result
}