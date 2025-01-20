import Image from "next/image";
import ButtonRegistrar from "./button";

export default function Section5() {
    return (
        <section className="bg-karina-secundary py-12">
            <div className="container mx-auto max-w-6xl flex justify-center items-center flex-col md:flex-row gap-4 p-6 ">
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <Image
                        src="/images/sobre.webp"
                        alt="karina"
                        width={400} height={400}
                        className="w-[260px] md:w-auto"
                    />

                </div>
                <div className="w-full md:w-1/2">
                    <div className="bg-white rounded-full px-6 py-2 mb-6 flex justify-center md:justify-start">
                        <h2 className="text-karina-secundary text-lg ">
                            ¿Quién es <br />
                            <span className="text-xl font-bold ms-6">Dra. Karina Mejia ?</span>
                        </h2>
                    </div>
                    <div className="space-y-4 text-white text-base lg:text-lg">
                        <p>
                            Karina Mejia es una terapeuta familiar con 17 años de experiencia y más de 30.000 horas de práctica
                            clínica vividas con profundo amor y dedicación.
                        </p>

                        <p>
                            Es fundadora del Instituto Latinoamericano de la Familia (INFAM), vicepresidenta de la Asociación
                            Latinoamericana de Terapeutas Familiares, y creadora de la reconocida metodología Terapia Efectiva.
                        </p>

                        <p>
                            Como supervisora de práctica clínica, Karina ha guiado a miles de profesionales, dejando huella en más de
                            170.000 psicólogos, terapeutas y consejeros de 22 países. Su labor ha sido reconocida con tres doctorados
                            Honoris Causa, gracias a su incansable esfuerzo por profesionalizar la salud mental y emocional,
                            impactando directamente en miles de familias.
                        </p>

                        <p>
                            Pero más allá de los títulos y los logros, Karina tiene una misión clara: transformar el mundo, vida a
                            vida, familia a familia, llevando esperanza y herramientas a quienes buscan cambiar su historia.
                        </p>

                        <ButtonRegistrar text="¡QUIERO REGISTRARME GRATIS!" variant="white" />
                    </div>



                </div>
            </div>
        </section>
    );
}