import { AlarmClockCheckIcon } from "lucide-react";
import ButtonRegistrar from "./button";
import Image from "next/image";

export default function Section4() {
    const times = [
        {
          time: "7:00 pm",
          countries: "Costa Rica, El Salvador, Guatemala, Honduras, México y Nicaragua"
        },
        {
          time: "8:00 pm",
          countries: "Colombia, Cuba, Ecuador, Panamá y Perú"
        },
        {
          time: "9:00 pm",
          countries: "Bolivia, Paraguay, Rep. Dominicana y Venezuela"
        },
        {
          time: "10:00 pm",
          countries: "Argentina, Brasil, Chile y Uruguay"
        },
        {
          time: "2:00 am",
          countries: "España"
        }
      ]

    return (
        <section className="py-16">
            <div className="container mx-auto max-w-6xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col justify-center items-center max-w-[300px] place-self-center">
                    <h2 className=" font-bold text-2xl ">
                        <span className="text-karina-primary font-bold">
                            ¡Prepárate {""}
                        </span>
                         para el
                        Workshop!
                    </h2>
                    <div className="flex justify-center items-center gap-3 mt-4">
                        <AlarmClockCheckIcon size={92} className="text-karina-primary" />
                        <span>
                            <span className=" font-bold">Activa una alarma</span>
                            <span > en tu teléfono con los horarios de las clases.</span>
                        </span>
                    </div>
                </div>

                {/* Horarios */}
                <div className="flex flex-col space-y-4 w-full">
                    {times.map((item, index) => (
                        <div key={index} >
                            <h3 className="font-bold text-xl text-karina-secundary flex  items-center">
                                <Image src="/images/iconePaginaHorarios.svg" alt="Alarma" width={50} height={50} className="mr-2" />
                                {item.time}
                            </h3>

                            <p className=" text-gray-900">
                                {item.countries}
                            </p>
                            <hr  className="w-full border-zinc-200 mt-4"/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center w-full">
                <ButtonRegistrar 
                    text=" ¡QUIERO REGISTRARME GRATIS!" 
                />
            </div>
        </section>
    );
    }
