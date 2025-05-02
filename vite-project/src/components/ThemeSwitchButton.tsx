import { Building2, TreePine } from 'lucide-react'

type Props = {
  isUrban: boolean
  setIsUrban: (value: boolean) => void
}

export default function ThemeToggle({ isUrban, setIsUrban }: Props) {
  return (
    <div className="group cursor-pointer" onClick={() => setIsUrban(!isUrban)}>
      <div
        className={`
          w-12 h-12 p-1 rounded-full transition-all duration-300 
          flex items-center justify-center
          ${isUrban ? "hover:bg-green-200" : "hover:bg-orange-200"}
        `}
        title={isUrban ? "Natur anzeigen" : "Urban anzeigen"}
      >
        {isUrban ? (
          <TreePine className="w-10 h-10 text-green-700 group-hover:scale-120 transition-transform duration-200" />
        ) : (
          <Building2 className="w-10 h-10 text-orange-700 group-hover:scale-120 transition-transform duration-200" />
        )}
      </div>
    </div>
  )
}
