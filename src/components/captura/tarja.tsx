import { DotIcon } from 'lucide-react'

export default function Tarja() {
    const items = Array.from({ length: 9 })
    return (
        <div className="flex w-full justify-center items-center overflow-x-hidden whitespace-nowrap bg-gradient-to-r from-karina-primary to-karina-secundary border-t-2 border-b-2 border-karina-primary/80">
            {items.map((_, i) => (
                <div key={i} className="inline-flex items-center p-2 text-white">
                    <DotIcon size={24} className="mr-2" />
                    <span className="font-bold">WORKSHOP&nbsp;</span>
                    <span>EL MAPA TERAPÉUTICO</span>
                </div>
            ))}
        </div>
    )
}
