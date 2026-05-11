import React from 'react';
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { BsPersonFill, BsCalendar4Event } from 'react-icons/bs';

const MovieHero = () => {
  const hotTopics = [
    { id: 1, title: "Japanese VR Technology Is Here To Stay", author: "Rishi", date: "Apr 26, 2022" },
    { id: 2, title: "FORTNITE Reveals Latest Business Bonuses", author: "Rishi", date: "Apr 26, 2022" },
    { id: 3, title: "Superhero Games Hard To Create", author: "Rishi", date: "Apr 26, 2022" },
    { id: 4, title: "Final Fantasy Creator Asks Square Enix What's Up", author: "Rishi", date: "Apr 26, 2022" },
  ];

  const recentPosts = [
    {
      id: 1,
      title: "Star Wars The Order Sets Up A New DLC",
      author: "Rishi",
      date: "Apr 26, 2022",
      img: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      title: "Free Play Days - Gonner 2 And Monster Truck",
      author: "Rishi",
      date: "Apr 26, 2022",
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section className="bg-[#0f0f0f] text-white p-6 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Section: Hot Topics */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-1 h-6 bg-red-500"></div>
              <h2 className="text-2xl font-bold uppercase tracking-tight">Hot Topics</h2>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm hover:text-white cursor-pointer">all</span>
              <div className="flex gap-1">
                <button className="bg-[#1a1a1a] p-1 rounded hover:bg-gray-700 transition-colors">
                  <HiChevronLeft size={20} />
                </button>
                <button className="bg-blue-900/40 p-1 rounded hover:bg-blue-800 transition-colors">
                  <HiChevronRight size={20} className="text-blue-400" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Main Featured Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative h-[400px] rounded-sm overflow-hidden group"
            >
              <img 
                src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&q=80&w=800" 
                alt="Mario" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-3xl font-bold leading-tight group-hover:text-red-500 transition-colors cursor-pointer">
                  The 'Classic Mario' Is Here Again
                </h3>
              </div>
            </motion.div>

            {/* List of Text Topics */}
            <div className="space-y-4">
              {hotTopics.map((topic) => (
                <motion.div 
                  key={topic.id}
                  whileHover={{ x: 5 }}
                  className="border-b border-gray-800 pb-4 last:border-0"
                >
                  <h4 className="text-lg font-semibold hover:text-red-500 cursor-pointer transition-colors line-clamp-2">
                    {topic.title}
                  </h4>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
                    <span className="flex items-center gap-1"><BsPersonFill /> {topic.author}</span>
                    <span className="flex items-center gap-1"><BsCalendar4Event /> {topic.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section: Recent */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-6 bg-red-500"></div>
            <h2 className="text-2xl font-bold uppercase tracking-tight">Recent</h2>
          </div>

          <div className="space-y-6">
            {recentPosts.map((post) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-[#161616] rounded-sm overflow-hidden group shadow-xl"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-bold group-hover:text-red-500 transition-colors cursor-pointer leading-snug">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mt-3">
                    <span className="flex items-center gap-1"><BsPersonFill /> {post.author}</span>
                    <span className="flex items-center gap-1"><BsCalendar4Event /> {post.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MovieHero;