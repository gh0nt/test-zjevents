//src\components\Video.tsx

"use client";
import { useState } from "react";
import { Container2 } from "./Container2";
import { Winners } from "./Winners";

interface VideoProps {
  videoId: string;
}

export function Video({ videoId }: Readonly<VideoProps>) {
  const [playVideo, setPlayVideo] = useState(false);

  // 1) Define your categories data
  const categories = [
    {
      img: "/img/brands/Categories/mask_group_21.svg",
      title: "Best Alternative products",
    },
    { img: "/img/brands/Categories/mask_group_31.svg", title: "Best Vape" },
    { img: "/img/brands/Categories/mask_group_18.svg", title: "Best edible" },
    {
      img: "/img/brands/Categories/mask_group_27.svg",
      title: "Best Functional Beverage",
    },
    { img: "/img/brands/Categories/mask_group_28.svg", title: "Best Mushroom" },
    {
      img: "/img/brands/Categories/mask_group_26.svg",
      title: "Best Overall Branding and Marketing",
    },
    {
      img: "/img/brands/Categories/mask_group_20.svg",
      title: "Best Pet Product",
    },
    {
      img: "/img/brands/Categories/mask_group_22.svg",
      title: "Best Services Provider",
    },
    { img: "/img/brands/Categories/mask_group_23.svg", title: "Best Smokable" },
    { img: "/img/brands/Categories/mask_group_24.svg", title: "Best Tincture" },
    { img: "/img/brands/Categories/mask_group_19.svg", title: "Best Topical" },
    {
      img: "/img/brands/Categories/mask_group_32.svg",
      title: "Most Innovative Products",
    },
    { img: "/img/brands/Categories/mask_group_33.svg", title: "Best Booth" },
  ];

  if (!videoId) return null;

  return (
    <div className=" w-full min-h-screen overflow-hidden ">
      <div
        className="absolute -z- w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/img/background2.png')",
          boxShadow: "inset 0 0 600px rgba(0,0,0,0.9)",
        }}
      >
        <div className="relative">
          <div
            className="absolute w-full max-w-screen-2xl left-1/2 -translate-x-1/2"
            style={{
              top: "35%",
              height: "55rem",
              background: "#FFFFFF",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "29px",
              opacity: "0.1",
              backdropFilter: "blur(50px)",
              WebkitBackdropFilter: "blur(50px)",
              boxShadow: "0 -50px 50px rgba(0, 0, 0, 0.4)", // Sombra en la parte superior
            }}
          ></div>

          <Container2>
            {/* Video Section */}
            <div className="relative w-full h-[600px] max-w-6xl mx-auto overflow-hidden lg:mb-20 rounded-2xl bg-indigo-300 cursor-pointer bg-gradient-to-tr from-[#C80B6A] to-indigo-700">
              {!playVideo && (
                <button
                  onClick={() => setPlayVideo(true)}
                  className="absolute inset-auto w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16 lg:w-28 lg:h-28"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Play Video</span>
                </button>
              )}
              {playVideo && (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=0&autoplay=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  className="w-full h-full aspect-video"
                ></iframe>
              )}
            </div>
          </Container2>

          {/* CATEGORIES title */}
          <Container2>
            <div className="text-center mt-[-32px]">
              <h2 className="text-white text-6xl tracking-[-2px] font-semibold font-anton uppercase">
                CATEGORIES
              </h2>
            </div>
          </Container2>

          {/* 2) Grid of categories */}
          <Container2>
            {/* First row with 6 items */}
            <div className="grid grid-cols-6 gap-6 justify-items-center mt-8">
              {categories.slice(0, 6).map((cat) => (
                <div key={cat.title} className="flex flex-col items-center">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-20 h-20 mb-2 object-contain"
                  />
                  <p className="text-white text-center text-sm">{cat.title}</p>
                </div>
              ))}
            </div>

            {/* Second row with 7 items */}
            <div className="grid grid-cols-7 gap-6 justify-items-center mt-8">
              {categories.slice(6, 13).map((cat) => (
                <div key={cat.title} className="flex flex-col items-center">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-16 h-16 mb-2 object-contain"
                  />
                  <p className="text-white text-center text-sm">{cat.title}</p>
                </div>
              ))}
            </div>
          </Container2>
        </div>
        <Winners />
      </div>
    </div>
  );
}
