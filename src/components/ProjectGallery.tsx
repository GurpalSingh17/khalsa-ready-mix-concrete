import { useState } from 'react';
import { PROJECTS_GALLERY } from '../data/mockData';
import { Camera, MapPin } from 'lucide-react';

export const ProjectGallery: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Commercial', 'Domestic', 'Pumping', 'Screed'];

  const filteredProjects = filter === 'All'
    ? PROJECTS_GALLERY
    : PROJECTS_GALLERY.filter(p => p.category === filter);

  return (
    <section className="py-24 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Camera className="w-4 h-4" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              RECENT CONCRETE PROJECTS
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 max-w-2xl">
              Inspect our high-performance pours across commercial sites, residential renovations, 
              and hard-to-reach pump installations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all ${
                  filter === cat
                    ? 'bg-orange-500 text-slate-950 shadow-md shadow-orange-500/20'
                    : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-orange-500/60 transition-all duration-300 flex flex-col shadow-lg"
            >
              <div className="relative h-60 overflow-hidden bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                
                <span className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-sm border border-slate-700 text-white font-bold text-xs uppercase px-3 py-1 rounded-full">
                  {project.category}
                </span>

                <span className="absolute bottom-4 right-4 bg-orange-500 text-slate-950 font-mono font-bold text-xs px-2.5 py-1 rounded-md">
                  {project.volume}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold uppercase text-white group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-xs text-slate-400 mt-2 space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-orange-400" />
                    <span>{project.location}, West Midlands</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
