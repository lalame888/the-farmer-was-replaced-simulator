import React from 'react'

interface IconProps {
  size?: number
  className?: string
}

export const StrawIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    {/* 稻草束主體 - 更自然的形狀 */}
    <ellipse cx="12" cy="12" rx="4" ry="8" fill="#f4d03f" stroke="#d4af37" strokeWidth="1"/>
    {/* 稻草頂部 - 散開的稻草 */}
    <path d="M8 6 Q12 4 16 6 Q14 8 12 6 Q10 8 8 6" fill="#f7dc6f" stroke="#d4af37" strokeWidth="0.5"/>
    <path d="M9 5 Q12 3 15 5 Q13 7 12 5 Q11 7 9 5" fill="#f7dc6f" stroke="#d4af37" strokeWidth="0.5"/>
    <path d="M10 4 Q12 2 14 4 Q13 6 12 4 Q11 6 10 4" fill="#f7dc6f" stroke="#d4af37" strokeWidth="0.5"/>
    {/* 稻草細節線條 - 垂直的稻草桿 */}
    <line x1="10" y1="8" x2="10" y2="16" stroke="#d4af37" strokeWidth="0.3"/>
    <line x1="12" y1="8" x2="12" y2="16" stroke="#d4af37" strokeWidth="0.3"/>
    <line x1="14" y1="8" x2="14" y2="16" stroke="#d4af37" strokeWidth="0.3"/>
    {/* 綁繩 - 更細緻的繩子 */}
    <ellipse cx="12" cy="6" rx="3" ry="1" fill="#8b4513"/>
    <ellipse cx="12" cy="18" rx="3" ry="1" fill="#8b4513"/>
    {/* 繩子細節 */}
    <line x1="9" y1="6" x2="15" y2="6" stroke="#654321" strokeWidth="0.5"/>
    <line x1="9" y1="18" x2="15" y2="18" stroke="#654321" strokeWidth="0.5"/>
  </svg>
)

export const WoodIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    {/* 樹幹 */}
    <rect x="10" y="6" width="4" height="12" fill="#8b4513" stroke="#654321" strokeWidth="1"/>
    {/* 樹皮紋理 */}
    <line x1="11" y1="8" x2="13" y2="8" stroke="#654321" strokeWidth="0.5"/>
    <line x1="11" y1="10" x2="13" y2="10" stroke="#654321" strokeWidth="0.5"/>
    <line x1="11" y1="12" x2="13" y2="12" stroke="#654321" strokeWidth="0.5"/>
    <line x1="11" y1="14" x2="13" y2="14" stroke="#654321" strokeWidth="0.5"/>
    <line x1="11" y1="16" x2="13" y2="16" stroke="#654321" strokeWidth="0.5"/>
    {/* 樹冠 */}
    <ellipse cx="12" cy="4" rx="6" ry="3" fill="#228b22" stroke="#006400" strokeWidth="1"/>
    <ellipse cx="12" cy="2" rx="4" ry="2" fill="#32cd32" stroke="#228b22" strokeWidth="0.5"/>
  </svg>
)

export const CarrotIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    {/* 胡蘿波主體 */}
    <ellipse cx="12" cy="16" rx="3" ry="6" fill="#ff8c00" stroke="#ff6600" strokeWidth="1"/>
    {/* 胡蘿波頂部 */}
    <ellipse cx="12" cy="12" rx="2.5" ry="4" fill="#ffa500" stroke="#ff8c00" strokeWidth="0.5"/>
    {/* 葉子 */}
    <path d="M9 8 Q12 6 15 8 Q12 10 9 8" fill="#228b22" stroke="#006400" strokeWidth="0.5"/>
    <path d="M10 7 Q12 5 14 7 Q12 9 10 7" fill="#32cd32" stroke="#228b22" strokeWidth="0.5"/>
    <path d="M11 6 Q12 4 13 6 Q12 8 11 6" fill="#90ee90" stroke="#32cd32" strokeWidth="0.5"/>
    {/* 胡蘿波紋理線條 */}
    <line x1="10" y1="14" x2="14" y2="14" stroke="#ff6600" strokeWidth="0.3"/>
    <line x1="10" y1="16" x2="14" y2="16" stroke="#ff6600" strokeWidth="0.3"/>
    <line x1="10" y1="18" x2="14" y2="18" stroke="#ff6600" strokeWidth="0.3"/>
  </svg>
)

export const PumpkinIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    {/* 南瓜主體 - 更圓潤的形狀 */}
    <ellipse cx="12" cy="16" rx="7" ry="6" fill="#ff8c00" stroke="#ff6600" strokeWidth="1"/>
    {/* 南瓜頂部 - 稍微扁平 */}
    <ellipse cx="12" cy="12" rx="6" ry="4" fill="#ffa500" stroke="#ff8c00" strokeWidth="0.5"/>
    {/* 南瓜條紋 - 從頂部到底部的垂直條紋 */}
    <path d="M5 12 Q12 10 19 12 Q12 14 5 12" fill="#ff6600" stroke="#e55a00" strokeWidth="0.5"/>
    <path d="M5 16 Q12 14 19 16 Q12 18 5 16" fill="#ff6600" stroke="#e55a00" strokeWidth="0.5"/>
    <path d="M5 20 Q12 18 19 20 Q12 22 5 20" fill="#ff6600" stroke="#e55a00" strokeWidth="0.5"/>
    {/* 南瓜側面條紋 */}
    <path d="M7 10 Q12 8 17 10 Q12 12 7 10" fill="#ff6600" stroke="#e55a00" strokeWidth="0.3"/>
    <path d="M7 14 Q12 12 17 14 Q12 16 7 14" fill="#ff6600" stroke="#e55a00" strokeWidth="0.3"/>
    <path d="M7 18 Q12 16 17 18 Q12 20 7 18" fill="#ff6600" stroke="#e55a00" strokeWidth="0.3"/>
    {/* 南瓜莖 - 更粗更短 */}
    <ellipse cx="12" cy="6" rx="1.5" ry="3" fill="#228b22" stroke="#006400" strokeWidth="0.5"/>
    {/* 南瓜葉子 - 更自然的形狀 */}
    <ellipse cx="9" cy="5" rx="2.5" ry="1.5" fill="#32cd32" stroke="#228b22" strokeWidth="0.5"/>
    <ellipse cx="15" cy="5" rx="2.5" ry="1.5" fill="#32cd32" stroke="#228b22" strokeWidth="0.5"/>
    {/* 葉脈 */}
    <line x1="9" y1="5" x2="11.5" y2="5" stroke="#228b22" strokeWidth="0.3"/>
    <line x1="15" y1="5" x2="12.5" y2="5" stroke="#228b22" strokeWidth="0.3"/>
  </svg>
)
