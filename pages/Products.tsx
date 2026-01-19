
import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../constants/products';

const Products: React.FC = () => {
  return (
    <div className="py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-black text-industrial-charcoal dark:text-white uppercase tracking-tight">Industrial Machinery Hub</h1>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            World-class machinery engineered for 24/7 industrial operations. Built for performance, durability, and maximum ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="group bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-2xl transition-all duration-500">
              <Link to={`/products/${product.id}`} className="block">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  {product.tag && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-industrial-charcoal text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                        {product.tag}
                      </span>
                    </div>
                  )}
                </div>
              </Link>
              <div className="p-8 flex flex-col flex-1 space-y-4">
                <Link to={`/products/${product.id}`} className="hover:text-primary transition-colors">
                  <h3 className="text-2xl font-black text-industrial-charcoal dark:text-white">{product.name}</h3>
                </Link>
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{product.description}</p>
                <div className="pt-6 mt-auto border-t border-gray-50 dark:border-white/5 flex items-center justify-between">
                  <Link 
                    to={`/products/${product.id}`}
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary hover:gap-3 transition-all"
                  >
                    Technical Profile
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </Link>
                  <button className="size-10 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <span className="material-symbols-outlined text-primary text-xl">download</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Catalog CTA */}
        <section className="mt-24 py-16 px-10 bg-industrial-charcoal dark:bg-black rounded-[2.5rem] relative overflow-hidden text-center lg:text-left">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight leading-tight">Ready to revolutionize your production?</h2>
              <p className="text-gray-400 text-lg font-medium leading-relaxed">
                Our engineering team is ready to design a custom solution for your facility requirements.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
              <Link to="/get-a-quote" className="bg-primary text-industrial-charcoal px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all text-sm shadow-2xl shadow-primary/20">
                Consult an Expert
              </Link>
              <button className="bg-white/5 border border-white/20 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white/10 transition-colors text-sm">
                Full Catalog PDF
              </button>
            </div>
          </div>
          <div className="absolute -right-20 -top-20 size-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 size-96 bg-primary/5 rounded-full blur-3xl"></div>
        </section>
      </div>
    </div>
  );
};

export default Products;
