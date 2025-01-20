import Link from "next/link";
import { ArrowRightSquare } from "lucide-react"
import ButtonRegistrar from "./button";

export default function Section2() {

    const items = [
        {
            negrito: "Están cansados de sentir que sus sesiones no logran los resultados que sus pacientes",
            normal: "esperan, lo que resulta en frustraciones, sensación de insuficiencia y esa duda constante sobre el camino correcto a seguir."
        },
        {
            negrito: "Quieren liberarse del agotamiento emocional y físico causado por intentos y errores,",
            normal: "que muchas veces llevan a tener una agenda ocupada, pero con poco retorno financiero y sin una verdadera satisfacción."
        },
        {
            negrito: "Desean una metodología clara y respaldada científicamente",
            normal: "que les permita aplicar protocolos acertados, garantizando mayor eficiencia en los tratamientos, mayor fidelización de los pacientes y, finalmente, un equilibrio entre realización profesional y financiera."
        },
        {
            negrito: "Buscan dominar cada caso clínico con",
            normal: "un enfoque práctico y organizado, para que ya no sean rehenes de las incertidumbres, sino protagonistas de resultados transformadores."
        }
    ]

    return (
        <div className="mx-auto max-w-7xl p-6">
            <div className="flex flex-col items-center justify-center py-2">
                <h2 className="text-2xl font-bold text-center py-2 px-12 rounded-full text-white
            bg-gradient-to-r from-karina-secundary from-0% via-karina-secundary/60 via-50% to-karina-secundary to-100%"
                >
                    Conozca
                </h2>
                <div className="text-2xl py-2 px-12 text-center max-w-3xl">
                    Los
                    <span className="font-semibold bg-gradient-to-r from-karina-secundary to-karina-primary/50 bg-clip-text text-transparent"> protocolos científicos y eficientes </span>
                    que ya han sido
                    <span className="font-semibold text-karina-secundary"> probados y validados en más de 1000 pacientes</span>
                </div>

                <hr className="border-karina-primary my-4 w-full" />

                <div className="text-xl py-2 px-12 text-center max-w-3xl">
                    Este Workshop es {" "}
                    <span className="font-bold bg-gradient-to-r from-karina-primary to-karina-secundary/70 bg-clip-text text-transparent">
                        para Terapeutas que:
                    </span>
                </div>

                <div className="text-lg py-2 space-y-2 px-12 max-w-3xl">
                    {items.map((item, i) => (
                        <div key={i} className="flex justify-center items-center">
                            <ArrowRightSquare size={28} className="text-karina-secundary w-28" />
                            <div className="w-full">
                                <span className="font-bold">{item.negrito} </span>
                                <span>{item.normal}</span>
                            </div>
                        </div>
                    ))}
                </div>

               <ButtonRegistrar text=" ¡QUIERO REGISTRARME GRATIS!" />
            </div>
        </div>
    );
}