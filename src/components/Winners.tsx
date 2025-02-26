"use client";
import React, { useState } from "react";
import { Container } from "@/components/Container";
import { Transition } from "@headlessui/react";
import { TransitionChild } from "@headlessui/react";
import { PlusSmallIcon, MinusSmallIcon } from "@heroicons/react/24/solid";
import { Testimonials } from "./Testimonials";
import { Footer } from "./Footer";

export const Winners = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const winnersData = [
    {
      event: "MIAMI 2024",
      categories: [
        { category: "Best Alternative Products", winner: "Mellow Fellow" },
        { category: "Best Booth", winner: "Coastal Clouds" },
        { category: "Best Edible", winner: "Trinity Hemp" },
        { category: "Best Functional Beverage", winner: "3CHI" },
        { category: "Best Mushroom", winner: "LAVA" },
        {
          category: "Best Overall Branding and Marketing",
          winner: "TRE HOUSE",
        },
        { category: "Best Pet Product", winner: "CannaAid" },
        { category: "Best Services Provider", winner: "Hempire" },
        { category: "Best Smokable", winner: "Hempire" },
        { category: "Best Tincture", winner: "Hempire" },
        { category: "Best Topical", winner: "Hempire" },
        { category: "Most Innovative Products", winner: "Hempire" },
        { category: "Best Booth", winner: "Hempire" },
      ],
    },
    {
      event: "VEGAS 2023",
      categories: [
        { category: "Best Alternative Products", winner: "Mellow Fellow" },
        { category: "Best Booth", winner: "Coastal Clouds" },
        { category: "Best Edible", winner: "Trinity Hemp" },
        { category: "Best Functional Beverage", winner: "3CHI" },
        { category: "Best Mushroom", winner: "LAVA" },
        {
          category: "Best Overall Branding and Marketing",
          winner: "TRE HOUSE",
        },
        { category: "Best Pet Product", winner: "CannaAid" },
        { category: "Best Services Provider", winner: "Hempire" },
        { category: "Best Smokable", winner: "Hempire" },
        { category: "Best Tincture", winner: "Hempire" },
        { category: "Best Topical", winner: "Hempire" },
        { category: "Most Innovative Products", winner: "Hempire" },
        { category: "Best Booth", winner: "Hempire" },
      ],
    },
    {
      event: "DALLAS 2023",
      categories: [
        { category: "Best Alternative Products", winner: "Mellow Fellow" },
        { category: "Best Booth", winner: "Coastal Clouds" },
        { category: "Best Edible", winner: "Trinity Hemp" },
        { category: "Best Functional Beverage", winner: "3CHI" },
        { category: "Best Mushroom", winner: "LAVA" },
        {
          category: "Best Overall Branding and Marketing",
          winner: "TRE HOUSE",
        },
        { category: "Best Pet Product", winner: "CannaAid" },
        { category: "Best Services Provider", winner: "Hempire" },
        { category: "Best Smokable", winner: "Hempire" },
        { category: "Best Tincture", winner: "Hempire" },
        { category: "Best Topical", winner: "Hempire" },
        { category: "Most Innovative Products", winner: "Hempire" },
        { category: "Best Booth", winner: "Hempire" },
      ],
    },
    {
      event: "FORT LAUDERDALE 2023",
      categories: [
        { category: "Best Alternative Products", winner: "Mellow Fellow" },
        { category: "Best Booth", winner: "Coastal Clouds" },
        { category: "Best Edible", winner: "Trinity Hemp" },
        { category: "Best Functional Beverage", winner: "3CHI" },
        { category: "Best Mushroom", winner: "LAVA" },
        {
          category: "Best Overall Branding and Marketing",
          winner: "TRE HOUSE",
        },
        { category: "Best Pet Product", winner: "CannaAid" },
        { category: "Best Services Provider", winner: "Hempire" },
        { category: "Best Smokable", winner: "Hempire" },
        { category: "Best Tincture", winner: "Hempire" },
        { category: "Best Topical", winner: "Hempire" },
        { category: "Most Innovative Products", winner: "Hempire" },
        { category: "Best Booth", winner: "Hempire" },
      ],
    },
    {
      event: "TAMPA 2022",
      categories: [
        { category: "Best Alternative Products", winner: "Mellow Fellow" },
        { category: "Best Booth", winner: "Coastal Clouds" },
        { category: "Best Edible", winner: "Trinity Hemp" },
        { category: "Best Functional Beverage", winner: "3CHI" },
        { category: "Best Mushroom", winner: "LAVA" },
        {
          category: "Best Overall Branding and Marketing",
          winner: "TRE HOUSE",
        },
        { category: "Best Pet Product", winner: "CannaAid" },
        { category: "Best Services Provider", winner: "Hempire" },
        { category: "Best Smokable", winner: "Hempire" },
        { category: "Best Tincture", winner: "Hempire" },
        { category: "Best Topical", winner: "Hempire" },
        { category: "Most Innovative Products", winner: "Hempire" },
        { category: "Best Booth", winner: "Hempire" },
      ],
    },
    {
      event: "CHICAGO 2021",
      categories: [
        { category: "Best Alternative Products", winner: "Mellow Fellow" },
        { category: "Best Booth", winner: "Coastal Clouds" },
        { category: "Best Edible", winner: "Trinity Hemp" },
        { category: "Best Functional Beverage", winner: "3CHI" },
        { category: "Best Mushroom", winner: "LAVA" },
        {
          category: "Best Overall Branding and Marketing",
          winner: "TRE HOUSE",
        },
        { category: "Best Pet Product", winner: "CannaAid" },
        { category: "Best Services Provider", winner: "Hempire" },
        { category: "Best Smokable", winner: "Hempire" },
        { category: "Best Tincture", winner: "Hempire" },
        { category: "Best Topical", winner: "Hempire" },
        { category: "Most Innovative Products", winner: "Hempire" },
        { category: "Best Booth", winner: "Hempire" },
      ],
    },
    {
      event: "ATLANTA 2021",
      categories: [
        { category: "Best Alternative Products", winner: "Mellow Fellow" },
        { category: "Best Booth", winner: "Coastal Clouds" },
        { category: "Best Edible", winner: "Trinity Hemp" },
        { category: "Best Functional Beverage", winner: "3CHI" },
        { category: "Best Mushroom", winner: "LAVA" },
        {
          category: "Best Overall Branding and Marketing",
          winner: "TRE HOUSE",
        },
        { category: "Best Pet Product", winner: "CannaAid" },
        { category: "Best Services Provider", winner: "Hempire" },
        { category: "Best Smokable", winner: "Hempire" },
        { category: "Best Tincture", winner: "Hempire" },
        { category: "Best Topical", winner: "Hempire" },
        { category: "Most Innovative Products", winner: "Hempire" },
        { category: "Best Booth", winner: "Hempire" },
      ],
    },
    {
      event: "LAS VEGAS 2020",
      categories: [
        { category: "Best Alternative Products", winner: "Mellow Fellow" },
        { category: "Best Booth", winner: "Coastal Clouds" },
        { category: "Best Edible", winner: "Trinity Hemp" },
        { category: "Best Functional Beverage", winner: "3CHI" },
        { category: "Best Mushroom", winner: "LAVA" },
        {
          category: "Best Overall Branding and Marketing",
          winner: "TRE HOUSE",
        },
        { category: "Best Pet Product", winner: "CannaAid" },
        { category: "Best Services Provider", winner: "Hempire" },
        { category: "Best Smokable", winner: "Hempire" },
        { category: "Best Tincture", winner: "Hempire" },
        { category: "Best Topical", winner: "Hempire" },
        { category: "Most Innovative Products", winner: "Hempire" },
        { category: "Best Booth", winner: "Hempire" },
      ],
    },
    {
      event: "MIAMI 2019",
      categories: [
        { category: "Best Alternative Products", winner: "Mellow Fellow" },
        { category: "Best Booth", winner: "Coastal Clouds" },
        { category: "Best Edible", winner: "Trinity Hemp" },
        { category: "Best Functional Beverage", winner: "3CHI" },
        { category: "Best Mushroom", winner: "LAVA" },
        {
          category: "Best Overall Branding and Marketing",
          winner: "TRE HOUSE",
        },
        { category: "Best Pet Product", winner: "CannaAid" },
        { category: "Best Services Provider", winner: "Hempire" },
        { category: "Best Smokable", winner: "Hempire" },
        { category: "Best Tincture", winner: "Hempire" },
        { category: "Best Topical", winner: "Hempire" },
        { category: "Most Innovative Products", winner: "Hempire" },
        { category: "Best Booth", winner: "Hempire" },
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen overflow-hidden">
      <Container className="!p-0">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Encabezado con líneas */}
          <div className="relative py-52">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-custom-gold"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-transparent px-6 text-4xl font-bold text-white uppercase tracking-wider">
                PAST WINNERS
              </span>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-transparent px-6 text-4xl font-bold text-custom-gold uppercase tracking-wider">
                HOUSTON 2024
              </span>
            </div>
          </div>

          <div className="bg-[url('/img/mellow_fellow.svg')] opacity-90 rounded-xl p-8 border-2 border-white">
            <div className="grid grid-cols-2 gap-4">
              <div
                className="rounded-lg border border-transparent bg-[url('/img/mellow_fellow_logo.png')] bg-cover bg-center bg-no-repeat"
                style={{ width: "500px", height: "auto" }}
              ></div>
              <div className="bg-transparent p-6 rounded-lg border border-transparent">
                <h2 className="text-6xl font-extrabold text-white uppercase tracking-wide drop-shadow-lg">
                  Best Alternative Product
                </h2>
                <p className="text-3xl text-white mt-2">Mellow Fellow</p>
                <div className="flex flex-row gap-4 mt-10">
                  <button
                    className="px-6 py-3 bg-custom-gold text-white rounded-full w-64 relative overflow-hidden"
                    style={{
                      boxShadow: "inset 0 -40px 20px rgba(0, 0, 0, 0.35)",
                    }}
                  >
                    <span className="text-shadow relative z-10 text-sm">
                      VIEW WINNER
                    </span>
                  </button>
                  <button
                    className="px-6 py-3 bg-transparent text-white rounded-full w-64 relative overflow-hidden border border-white"
                    style={{
                      boxShadow: "inset 0 -40px 20px rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <span className="text-shadow text-sm relative z-10">
                      SEE NEXT CATEGORY ➝
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* LEFT CONTENT COLUMN */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-24">
            <div className="space-y-4">
              {winnersData.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    activeIndex === index
                      ? "bg-white/20 border-transparent"
                      : "bg-white/10 border-transparent hover:border-custom-gold"
                  }`}
                  onClick={() => setActiveIndex(index)} // ❌ Remove the toggle condition
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-white">
                      {item.event}
                    </h3>
                    <PlusSmallIcon className="w-6 h-6 text-white" />{" "}
                    {/* Always show "-" */}
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT CONTENT COLUMN */}
            <div className="relative">
              <Transition
                show={activeIndex !== null}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                {activeIndex !== null && (
                  <TransitionChild
                    as="div" // Add this line to render a div instead of a Fragment
                    className="bg-transparent rounded-xl p-8 border-2 border-transparent shadow-lg"
                  >
                    <div className="space-y-4">
                      {winnersData[activeIndex].categories.map(
                        (cat, catIndex) => (
                          <div
                            key={catIndex}
                            className="grid grid-cols-2 gap-4 items-center bg-transparent p-4 rounded-lg border border-transparent"
                          >
                            <h4 className="text-sm font-semibold text-white uppercase tracking-wide text-right">
                              {cat.category}
                            </h4>
                            <p className="text-lg text-white text-left">
                              {cat.winner}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </TransitionChild>
                )}
              </Transition>
            </div>
          </div>
        </div>
        <Testimonials />
        <Footer />
      </Container>
    </div>
  );
};
