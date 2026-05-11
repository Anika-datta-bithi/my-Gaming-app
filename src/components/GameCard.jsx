import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsPersonFill, BsCalendar4Event } from "react-icons/bs";

const GameCard = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching the JSON data you created from the public folder
    fetch("/GameCard.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load GameCard.json (Status: ${res.status})`);
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.game_cards) {
          setCards(data.game_cards);
        } else {
          throw new Error("JSON structure error: 'game_cards' not found.");
        }
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-[#0f0f0f] py-10 flex justify-center">
        <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#0f0f0f] p-10 text-center text-red-500">
        <p>Error loading game cards: {error}</p>
      </div>
    );
  }

  return (
    <section className="bg-[#0f0f0f] py-12 px-4 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-1 h-6 bg-red-600"></div>
          <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Latest News</h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] flex flex-col group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-[#ff1e4e] text-white text-[10px] font-black px-2 py-1 uppercase tracking-wider">
                  {card.category}
                </span>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors leading-tight uppercase">
                  {card.title}
                </h3>

                {/* Metadata */}
                <div className="flex items-center gap-4 text-gray-500 text-[11px] mb-4">
                  <div className="flex items-center gap-1">
                    <BsPersonFill className="text-gray-400" />
                    <span>{card.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BsCalendar4Event className="text-gray-400" />
                    <span>{card.date}</span>
                  </div>
                </div>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                  {card.excerpt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameCard;