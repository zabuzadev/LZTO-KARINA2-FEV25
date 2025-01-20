"use client"
import Hero from "@/components/captura/hero/hero";
import Section2 from "@/components/captura/section2";
import Section3 from "@/components/captura/section3";
import Section4 from "@/components/captura/section4";
import Section5 from "@/components/captura/section5";
import Tarja from "@/components/captura/tarja";

export default function RegistroV1Page() {
    return (
        <>
            <Hero 
                title={
                    <>
                        <span className="font-bold"> Domina el método</span> detrás de los tratamientos terapéuticos 
                        que promueven cambios inmediatos y 
                        <span className="font-bold"> transforman vidas desde la primera sesión.</span>
                    </>
                }
            />

            <Tarja />

            <Section2 />

            <Section3 />

            <Section4 />

            <Tarja />

            <Section5 />
        </>
    );
}