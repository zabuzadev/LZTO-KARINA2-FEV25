import Image from "next/image";
import Form from "./form";


interface HeroProps {
    title: React.ReactNode;
  }

export default function Hero({title}: HeroProps) {

    return (
        <section className="bg-karina-primary bg-[url('/images/bg.png')] bg-cover bg-inherit md:bg-center h-auto flex items-center justify-center">
             <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 p-6 pb-0 lg:p-0">
                <div className="text-white flex flex-col justify-center gap-4 mt-4 lg:mt-0">
                    <Image src={"/images/logo.webp"} width={200} height={200} alt="Logo"  className="self-center md:self-start"/>
                    <h1 className="text-xl md:text-3xl w-full">{title}</h1>
                    <Form />
                    <span className="text-xs">
                        De acuerdo con las leyes locales de protección de datos, autorizo a EL MAPA TERAPÉUTICO a enviar comunicaciones por correo electrónico u otro medio. Además, acepto su política de privacidad.
                    </span>
                </div>
                <div className="h-full grid place-items-end">
                    <Image
                        width={500}
                        height={500}
                        src="/images/hero.webp" alt="Hero"
                        className="self-end"
                        />
                </div>
             </div>
        </section>
    );
}