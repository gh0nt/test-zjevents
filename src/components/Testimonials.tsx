import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

export const Testimonials = () => {
  return (
    <div>
      <Container className="py-12 bg-[#C80B6A] w-full items-center justify-center">
        <h1 className="text-5xl font-bold text-white uppercase text-center mb-12 drop-shadow-lg">
          TESTIMONIALS THAT PROVE OUR VALUE
        </h1>
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 max-w-full p-8 mx-auto py-0">
          <div className="relative">
            <div className="relative flex flex-col justify-between w-full h-50 bg-[#d51877] px-8 rounded-[20px] py-12 overflow-visible">
              {/* Círculo blanco alineado a la izquierda */}
              <div className="absolute left-4 top-12 w-24 h-24 bg-white rounded-full shadow-lg"></div>

              {/* Contenido de texto con padding ajustado */}
              <div className="pl-24 space-y-6">
                <p className="text-sm leading-relaxed text-white italic">
                  &quot;Aorem ipsum dolor sit amet, consectetur sodipscing
                  elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                  dolore magna aliquyam erat, sed diam voluptua.&quot;
                </p>

                {/* Información del usuario */}

                <div className="text-lg font-bold text-white">
                  Full Name, Company
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative flex flex-col justify-between w-full h-50 bg-[#d51877] px-8 rounded-[20px] py-12 overflow-visible">
              {/* Círculo blanco alineado a la izquierda */}
              <div className="absolute left-4 top-12 w-24 h-24 bg-white rounded-full shadow-lg"></div>

              {/* Contenido de texto con padding ajustado */}
              <div className="pl-24 space-y-6">
                <p className="text-sm leading-relaxed text-white italic">
                  &quot;Aorem ipsum dolor sit amet, consectetur sodipscing
                  elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                  dolore magna aliquyam erat, sed diam voluptua.&quot;
                </p>

                {/* Información del usuario */}

                <div className="text-lg font-bold text-white">
                  Full Name, Company
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative flex flex-col justify-between w-full h-50 bg-[#d51877] px-8 rounded-[20px] py-12 overflow-visible">
              {/* Círculo blanco alineado a la izquierda */}
              <div className="absolute left-4 top-12 w-24 h-24 bg-white rounded-full shadow-lg"></div>

              {/* Contenido de texto con padding ajustado */}
              <div className="pl-24 space-y-6">
                <p className="text-sm leading-relaxed text-white italic">
                  &quot;Aorem ipsum dolor sit amet, consectetur sodipscing
                  elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                  dolore magna aliquyam erat, sed diam voluptua.&quot;
                </p>

                {/* Información del usuario */}

                <div className="text-lg font-bold text-white">
                  Full Name, Company
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="bg-white p-8 ">
        <div className="flex items-center justify-between gap-8">
          {/* Texto al lado izquierdo */}
          <div className="text-[#2A3A52] ml-6">
            <h2 className="text-4xl font-black uppercase mb-1 tracking-tighter">
              SUBSCRIBE
            </h2>
            <h3 className="text-4xl font-black uppercase tracking-tighter">
              FOR UPDATES
            </h3>
          </div>

          {/* Contenedor de input + botón */}
          <div className="flex flex-1 gap-4 max-w-10xl px-7">
            <input
              type="email"
              placeholder="Email address*"
              className="w-full px-6 py-3 rounded-full bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
            />

            <button
              className="whitespace-nowrap px-8 py-3 text-white font-semibold uppercase tracking-wider transition-all hover:brightness-110"
              style={{
                background:
                  "linear-gradient(283deg, #FBAD28 0%, #FFAE7E 18%, #FB59A2 62%, #F47EF4 100%)",
                borderRadius: "30px",
              }}
            >
              GET TICKETS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
