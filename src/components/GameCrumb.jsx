import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GameCrumb = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/GameCrumb.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json.crumbs);
        setLoading(false);
      })
      .catch((err) => console.error("Error loading crumbs:", err));
  }, []);

  if (loading) return null;

  // Grouping by category to match your section headers (Recommended, Nintendo, etc.)
  const recommended = data.filter((item) => item.category === "Recommended");
  const platforms = data.filter((item) => item.category !== "Recommended");

  const SectionHeader = ({ title }) => (
    <div className="flex items-center gap-2 mb-6 mt-10">
      <div className="w-1 h-6 bg-[#ff1e4e]"></div>
      <h2 className="text-2xl font-bold text-white uppercase tracking-tight">
        {title}
      </h2>
    </div>
  );

  return (
    <section className="bg-[#0f0f0f] py-10 px-4 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Recommended Section */}
        <SectionHeader title="Recommended" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {recommended.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ opacity: 0.9 }}
              className="relative aspect-video group overflow-hidden cursor-pointer bg-zinc-900"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6">
                <h3 className="text-white font-bold text-sm md:text-base leading-tight uppercase group-hover:text-[#ff1e4e] transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {platforms.map((item) => (
            <div key={item.id}>
              <SectionHeader title={item.category} />
              <motion.div
                whileHover={{ y: -5 }}
                className="relative aspect-video group overflow-hidden rounded-sm cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-end p-5">
                  <h3 className="text-white font-bold text-sm uppercase leading-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GameCrumb;