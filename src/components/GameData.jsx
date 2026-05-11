import React from "react";
import { motion } from "framer-motion";
import { BsCalendar4Event } from "react-icons/bs";

const GameData = () => {
  // Static data embedded directly in the component
  const sections = [
    {
      id: 1,
      heading: "Nintendo Switch",
      items: [
        {
          title: "The 'Classic Mario' Is Here Again",
          date: "Apr 26, 2022",
          image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=400",
        },
        {
          title: "Japanese VR Technology Is Here To Stay",
          date: "Apr 26, 2022",
          image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=400",
        },
        {
          title: "Superhero Games Hard To Create",
          date: "Apr 26, 2022",
          image: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?q=80&w=400",
        }
      ],
    },
    {
      id: 2,
      heading: "Playstation 4",
      items: [
        {
          title: "COD Battle Royale Events",
          date: "Apr 26, 2022",
          image: "https://images.unsplash.com/photo-1507457379470-08b800699415?q=80&w=400",
        },
        {
          title: "The New Version Of Jackpot Is Here On Market",
          date: "Apr 26, 2022",
          image: "https://images.unsplash.com/photo-1550745127-4bd374c3f58b?q=80&w=400",
        },
        {
          title: "SEGA Is About To Launch New Application",
          date: "Apr 26, 2022",
          image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=400",
        }
      ],
    },
    {
      id: 3,
      heading: "XBOX One",
      items: [
        {
          title: "Xbox Series X/S Was Best-Selling Console In Dollar",
          date: "Apr 26, 2022",
          image: "https://images.unsplash.com/photo-1621259182978-f09e5e2ca1ff?q=80&w=400",
        },
        {
          title: "Free Play Days - Gonner 2 And Monster Truck",
          date: "Apr 26, 2022",
          image: "https://images.unsplash.com/photo-1605918321755-07520792193b?q=80&w=400",
        },
        {
          title: "Deck Of Ashes Releasing Today On Xbox",
          date: "Apr 26, 2022",
          image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400",
        }
      ],
    }
  ];

  return (
    <section className="bg-[#0f0f0f] py-12 px-4 md:px-10 font-sans">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {sections.map((section) => (
          <div key={section.id} className="flex flex-col">
            {/* Section Header with Red Sidebar */}
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1.5 h-7 bg-[#ff1e4e]"></div>
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">
                {section.heading}
              </h2>
            </div>

            {/* List of Game Items */}
            <div className="flex flex-col gap-6">
              {section.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 5 }}
                  className="flex gap-4 group cursor-pointer"
                >
                  {/* Thumbnail */}
                  <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-sm">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col justify-center">
                    <h3 className="text-white font-bold text-[15px] leading-tight mb-2 group-hover:text-[#ff1e4e] transition-colors line-clamp-2 uppercase">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-gray-500 text-[11px]">
                      <BsCalendar4Event className="text-gray-400" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GameData;