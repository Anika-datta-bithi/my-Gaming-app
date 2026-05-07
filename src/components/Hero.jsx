import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Adding a timestamp ?t= to bypass browser cache and ensuring relative path
    fetch("/Hero.json" + new Date().getTime())
      .then((res) => {
        if (!res.ok) {
          throw new Error(`File not found (404) at /public/hero.json`);
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.hero_articles) {
          setArticles(data.hero_articles);
        } else {
          throw new Error("JSON key 'hero_articles' not found.");
        }
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setError("Failed to fetch data. Ensure hero.json is in the /public folder.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-[#121212] h-[500px] flex items-center justify-center text-white font-sans">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="animate-pulse">Loading amazing content...</p>
        </div>
      </div>
    );
  }

  if (error || articles.length === 0) {
    return (
      <div className="bg-[#121212] p-10 h-[500px] flex items-center justify-center">
        <div className="bg-red-900/10 border border-red-500/50 p-6 rounded-xl text-center max-w-md">
          <h2 className="text-red-500 font-bold text-xl mb-2">Fetch Error</h2>
          <p className="text-gray-400 text-sm mb-4">{error || "No articles found."}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-red-500 text-white rounded-md text-sm font-bold"
          >
            Retry Connection
          </button>
        </div>
      </div>
    );
  }

  const main = articles[0];
  const secondary = articles.slice(1, 4);

  return (
    <section className="bg-[#121212] p-4 md:p-10 font-sans">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[600px]">
        
        {/* Main Feature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-zinc-900"
        >
          <img
            src={main.image}
            alt={main.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
            <span className="bg-blue-600 text-white text-[11px] font-black px-3 py-1 w-fit mb-4 uppercase rounded-sm">
              {main.category}
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              {main.title}
            </h2>
            <p className="text-gray-300 text-base md:text-lg line-clamp-2 max-w-2xl">
              {main.excerpt}
            </p>
          </div>
        </motion.div>

        {/* Side Grid */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {secondary.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group bg-zinc-900 ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-5 flex items-end">
                <h3 className="text-white text-lg font-bold leading-tight group-hover:text-blue-400 transition-colors">
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