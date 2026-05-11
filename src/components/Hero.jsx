import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Matches your exact filename: Hero.json
    fetch("/Hero.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load /Hero.json (Status: ${res.status})`);
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.hero_articles) {
          setArticles(data.hero_articles);
        } else {
          throw new Error("JSON structure error: 'hero_articles' not found.");
        }
      })
      .catch((err) => {
        console.error("Detailed Error:", err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-[#0f0f0f] h-[600px] flex items-center justify-center text-white">
        <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#0f0f0f] h-[600px] flex items-center justify-center text-white p-6">
        <div className="text-center border border-red-500/30 bg-red-500/5 p-8 rounded-lg">
          <h2 className="text-red-500 font-bold text-xl mb-2">Fetch Error</h2>
          <p className="text-gray-400 text-sm mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded font-bold transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Slice data for the grid
  const main = articles[0];
  const secondary = articles.slice(1, 4);

  return (
    <section className="bg-[#0f0f0f] p-4 md:p-10 font-sans">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[600px]">
        
        {/* Main Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-2 relative group overflow-hidden rounded-sm bg-zinc-900 h-[400px] md:h-full cursor-pointer"
        >
          <img
            src={main.image}
            alt={main.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-6 md:p-10 flex flex-col justify-end">
            {main.category && (
              <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 w-fit mb-4 uppercase">
                {main.category}
              </span>
            )}
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 group-hover:text-red-500 transition-colors">
              {main.title}
            </h2>
            <p className="text-gray-300 text-sm md:text-base line-clamp-2 max-w-xl">
              {main.excerpt}
            </p>
          </div>
        </motion.div>

        {/* Side Grid Items */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
          {secondary.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-sm group bg-zinc-900 cursor-pointer ${
                index === 0 ? "sm:row-span-2 h-full" : "h-[200px] md:h-auto"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-5 flex items-end">
                <h3 className="text-white text-lg font-bold leading-tight group-hover:text-red-500 transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;