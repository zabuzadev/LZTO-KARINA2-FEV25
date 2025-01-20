import { Calendar } from "lucide-react";
import ButtonRegistrar from "./button";

export default function Section3() {
    const classes = [
        {
            number: "1",
            img: "/images/classe01.webp",
            date: {
                day: "27/01,",
                semanaHora: " Lunes - 7PM (CDMX)",
            },
            title: "Conviértete en la terapeuta que transforma vidas desde la 1ª sesión",
            description: "Descubre cómo aplicar técnicas efectivas que generan cambios inmediatos desde el primer encuentro, construyendo confianza en ti misma y en tus consultantes."
        },
        {
            number: "2",
            img: "/images/classe02.webp",
            date: {
                day: "28/01,",
                semanaHora: " Martes - 7PM (CDMX)",
            },
            title: "La fórmula probada para facilitar cambios inmediatos y duraderos",
            description: "Aprende a reducir el abandono y a mantener a tus consultantes comprometidos con intervenciones breves, efectivas y significativas, dejando atrás las sesiones largas e improductivas."
        },
        {
            number: "3",
            img: "/images/classe03.webp",
            date: {
                day: "29/01,",
                semanaHora: " Miércoles - 7PM (CDMX)",
            },
            title: "La guía para construir una consulta exitosa y rentable",
            description: "Domina un mapa estratégico que te permitirá realizar intervenciones más eficientes y personalizadas, destacándote en un mercado saturado y asegurando un flujo constante de consultantes."
        },
        {
            number: "4",
            img: "/images/classe04.webp",
            date: {
                day: "30/01,",
                semanaHora: " Martes - 7PM (CDMX)",
            },
            title: "El Sistema para transformar vidas y vivir de tu consulta mientras dejas un legado de servicio",
            description: "Atrae más pacientes satisfechos con resultados rápidos y efectivos, logrando no solo estabilidad en tu consulta, sino también impactar la vida de más familias con un propósito claro."
        }
    ]

    return (
        <section className="py-16 bg-[#008B8B]">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
                    Esto es lo que aprenderás en 4 días de:
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {classes.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 relative">
                            <div className="absolute -top-3 -left-3 bg-yellow-400 text-black font-bold px-3 py-1 text-sm">
                                Clase {item.number}
                            </div>
                            <img src={item.img} alt={item.title} className="w-full mb-4" />
                            <p className="text-gray-900 text-sm mb-4 font-bold">
                                <Calendar size={16} className="text-karina-primary inline-block mr-2" />
                                {item.date.day} 
                                <span className="text-karina-primary">
                                    {item.date.semanaHora}
                                </span>

                            </p>
                            <h3 className="font-bold mb-4 text-xl text-karina-secundary">{item.title}</h3>
                            <p className=" text-gray-700">{item.description}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <ButtonRegistrar 
                        text=" ¡QUIERO REGISTRARME GRATIS!" 
                        variant="white"
                    />
                </div>
            </div>
        </section>
    );
}