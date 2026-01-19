
import React from 'react';
import { youtubeVideos } from '../videos/youtube-links';

const Videos: React.FC = () => {
  return (
    <div className="py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-black text-industrial-charcoal dark:text-white uppercase tracking-tight">Video Case Studies</h1>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Witness our machinery in action. Real-world demonstrations and client success stories from across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {youtubeVideos.map((video, idx) => (
            <div key={idx} className="bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-lg group">
              <div className="aspect-video relative bg-black">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-8 flex items-center justify-between">
                <h3 className="text-xl font-bold text-industrial-charcoal dark:text-white uppercase tracking-tight">
                  {video.title}
                </h3>
                <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full">
                  <span className="material-symbols-outlined text-sm">play_circle</span>
                  Now Playing
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube Channel CTA */}
        <section className="mt-24 py-16 bg-red-600 rounded-3xl flex flex-col md:flex-row items-center justify-between px-12 gap-8 shadow-xl shadow-red-600/20">
          <div className="text-white space-y-2 text-center md:text-left">
            <h3 className="text-3xl font-black uppercase tracking-tight">Subscribe for technical insights</h3>
            <p className="font-medium opacity-90 text-lg">Detailed machinery assembly, maintenance, and output logs updated weekly.</p>
          </div>
          <button className="bg-white text-red-600 px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all text-sm shadow-xl">
            Visit YouTube Channel
          </button>
        </section>
      </div>
    </div>
  );
};

export default Videos;
