import { useEffect, useRef, useState } from 'react'

const items = [
  { icon: '🏥', label: 'Médicos certificados' },
  { icon: '🔒', label: 'Dados 100% protegidos' },
  { icon: '📦', label: 'Entrega nacional discreta' },
  { icon: '⚡', label: 'Resultado em até 1 hora' },
  { icon: '✅', label: 'Regularizado pela ANVISA' },
]

export default function TrustBar() {
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const total = items.length

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % total)
    }, 2500)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [total])

  return (
    <div style={{ backgroundColor: '#2D1B69' }} className="w-full py-4">
      {/* Desktop: all 5 items in a row */}
      <div className="hidden md:flex max-w-5xl mx-auto px-6 justify-between items-center">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span className="text-xl">{item.icon}</span>
            <span className="text-white text-sm font-medium whitespace-nowrap">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Mobile: carousel, 2 visible */}
      <div className="flex md:hidden overflow-hidden px-4">
        <div
          className="flex transition-transform duration-500 ease-in-out w-full"
          style={{ transform: `translateX(-${current * 50}%)` }}
        >
          {/* Duplicate items for seamless loop */}
          {[...items, ...items].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 justify-center"
              style={{ minWidth: '50%' }}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-white text-sm font-medium whitespace-nowrap">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
