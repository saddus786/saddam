
import React from 'react';
import { youtubeVideos } from '../videos/youtube-links';

const Videos: React.FC = () => {
  return (
    <div className="py-32 bg-midnight">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-6">
          <span className="text-xs font-black text-gold uppercase tracking-[0.5em]">Global Case Studies</span>
          <h1 className="text-6xl md:text-7xl font-black text-ivory uppercase tracking-tighter leading-none">Operational Media</h1>
          <div className="w-24 h-2 gold-gradient-bg mx-auto rounded-full"></div>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Witness the raw power and precision of Vishwakarma Engineering in high-volume industrial environments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {youtubeVideos.map((video, idx) => (
            <div key={idx} className="glass-panel rounded-[3rem] overflow-hidden border-gold/10 group shadow-glass">
              <div className="aspect-video relative bg-black">
                <iframe
                  className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-10 flex items-center justify-between gap-6">
                <h3 className="text-2xl font-black text-ivory uppercase tracking-tighter group-hover:gold-gradient-text transition-all leading-tight">
                  {video.title}
                </h3>
                <div className="flex items-center gap-3 text-gold font-black text-[10px] uppercase tracking-widest bg-gold/10 px-6 py-3 rounded-full border border-gold/20 shadow-gold-glow shrink-0">
                  <span className="material-symbols-outlined text-sm">play_circle</span>
                  STREAMING
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube Channel CTA */}
        <section className="mt-32 p-16 md:p-24 bg-charcoal rounded-[4rem] flex flex-col lg:flex-row items-center justify-between border border-gold/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 blur-[120px] rounded-full"></div>
          <div className="text-center lg:text-left space-y-6 max-w-2xl relative z-10">
            <h3 className="text-4xl md:text-5xl font-black text-ivory uppercase tracking-tighter leading-none">Technical Insights</h3>
            <p className="text-slate-400 text-xl font-medium leading-relaxed">
              Subscribe to our industrial portal for maintenance protocols, assembly guides, and output logs.
            </p>
          </div>
          <button className="bg-white text-midnight px-12 py-6 rounded-2xl font-black uppercase tracking-widest transition-all text-sm hover:bg-gold shadow-glass active:scale-95 relative z-10">
            Visit Channel
          </button>
        </section>
      </div>
    </div>
  );
};

export default Videos;
