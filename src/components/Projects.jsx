import { useState } from 'react';
import { projects } from '../data/portfolio';
import { ExternalLink, Github, Star } from 'lucide-react';

function ProjectCard({ project, index }) {
  return (
    <div
      className="project-card"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      {/* Top color band */}
      <div
        className="h-1.5 w-full rounded-t-2xl"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />

      <div className="p-6">
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{project.icon}</span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-lg tracking-wider dark:text-white text-slate-900">
                  {project.title}
                </h3>
                
              </div>
              {/* <span className="font-mono text-xs text-slate-500">{project.year}</span> */}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-2 relative z-10">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full dark:bg-white/5 bg-slate-100 flex items-center justify-center
                  dark:text-slate-400 text-slate-600 hover:text-cyber-500 transition-colors"
                title="GitHub"
              >
                <Github size={14} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full dark:bg-white/5 bg-slate-100 flex items-center justify-center
                  dark:text-slate-400 text-slate-600 hover:text-cyber-500 transition-colors"
                title="Live Demo"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="font-body text-sm dark:text-slate-400 text-slate-600 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-xs px-2.5 py-1 rounded-full"
              style={{
                background: `${project.color}12`,
                color: project.color,
                border: `1px solid ${project.color}25`,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all'
    ? projects
    : filter === 'featured'
      ? projects.filter((p) => p.featured === true)
      : projects.filter((p) => p.featured === false);

  return (
    <section id="projects" className="py-24 dark:bg-dark-800 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="font-mono text-cyber-500 text-sm tracking-widest uppercase">Where I Applied Knowledge</span>
          <h2 className="font-display text-5xl lg:text-6xl tracking-wider mt-2 dark:text-white text-slate-900">
            PROJECTS
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-cyber-500 to-blue-500 mx-auto mt-4 mb-8" />

          {/* Filter tabs */}
          <div className="flex gap-2 justify-center">
            {['all', 'featured', 'other'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-200 capitalize
                  ${filter === f
                    ? 'bg-cyber-600 text-white'
                    : 'dark:bg-dark-700 bg-slate-100 dark:text-slate-400 text-slate-600 hover:text-cyber-500'
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={`${filter}-${project.id}`} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="reveal text-center mt-12">
          <a
            href="https://github.com/UjwalGarg2387"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border
              dark:border-white/20 border-slate-300 dark:text-white text-slate-900
              hover:border-cyber-500 hover:text-cyber-500 transition-all duration-300
              font-body font-medium text-sm"
          >
            <Github size={16} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

/*With Screenshots*/
// import { useState } from 'react';
// import { projects } from '../data/portfolio';
// import { ExternalLink, Github, ImageOff } from 'lucide-react';

// function ProjectCard({ project, index }) {
//   const [imgError, setImgError] = useState(false);

//   return (
//     <div
//       className="project-card reveal flex flex-col overflow-hidden"
//       style={{ transitionDelay: `${index * 0.08}s` }}
//     >
//       {/* ── Screenshot area ───────────────────────────────────────────────── */}
//       <div
//         className="relative w-full overflow-hidden group flex-shrink-0"
//         style={{ height: '188px', backgroundColor: `${project.color}10` }}
//       >
//         {project.image && !imgError ? (
//           <>
//             <img
//               src={project.image}
//               alt={`${project.title} screenshot`}
//               onError={() => setImgError(true)}
//               className="w-full h-full object-cover object-top
//                 transition-transform duration-500 ease-out group-hover:scale-105"
//             />
//             {/* Bottom fade so card body blends in */}
//             <div className="absolute inset-x-0 bottom-0 h-14 pointer-events-none
//               dark:bg-gradient-to-t dark:from-dark-700 bg-gradient-to-t from-white" />
//           </>
//         ) : (
//           /* Fallback placeholder */
//           <div className="w-full h-full flex flex-col items-center justify-center gap-3">
//             <span className="text-5xl opacity-50">{project.icon}</span>
//             <span className="font-mono text-xs dark:text-slate-600 text-slate-400
//               flex items-center gap-1.5">
//               <ImageOff size={11} /> No preview
//             </span>
//           </div>
//         )}

//         {/* Top accent bar */}
//         <div
//           className="absolute top-0 inset-x-0 h-1 pointer-events-none"
//           style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
//         />

//         {/* Hover link buttons — float over image */}
//         {(project.github || project.live) && (
//           <div className="absolute top-2.5 right-2.5 flex gap-1.5 z-10
//             opacity-0 group-hover:opacity-100 transition-all duration-200
//             translate-y-1 group-hover:translate-y-0">
//             {project.github && (
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 onClick={(e) => e.stopPropagation()}
//                 className="w-8 h-8 rounded-full bg-black/65 backdrop-blur-sm flex items-center justify-center
//                   text-white/80 hover:text-white transition-colors"
//                 title="GitHub"
//               >
//                 <Github size={13} />
//               </a>
//             )}
//             {project.live && (
//               <a
//                 href={project.live}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 onClick={(e) => e.stopPropagation()}
//                 className="w-8 h-8 rounded-full bg-black/65 backdrop-blur-sm flex items-center justify-center
//                   text-white/80 hover:text-white transition-colors"
//                 title="Live Demo"
//               >
//                 <ExternalLink size={13} />
//               </a>
//             )}
//           </div>
//         )}
//       </div>

//       {/* ── Card body ─────────────────────────────────────────────────────── */}
//       <div className="p-5 flex flex-col flex-1">
//         {/* Title + year */}
//         <div className="flex items-center gap-2.5 mb-2">
//           <span className="text-xl leading-none">{project.icon}</span>
//           <div>
//             <h3 className="font-display text-base tracking-wider dark:text-white text-slate-900 leading-tight">
//               {project.title}
//             </h3>
//             <span className="font-mono text-xs text-slate-500">{project.year}</span>
//           </div>
//         </div>

//         {/* Description — clamp to 3 lines */}
//         <p className="font-body text-sm dark:text-slate-400 text-slate-600 leading-relaxed
//           mb-4 flex-1 line-clamp-3">
//           {project.description}
//         </p>

//         {/* Tech tags */}
//         <div className="flex flex-wrap gap-1.5 mt-auto">
//           {project.tech.map((t) => (
//             <span
//               key={t}
//               className="font-mono text-xs px-2.5 py-1 rounded-full"
//               style={{
//                 background: `${project.color}12`,
//                 color: project.color,
//                 border: `1px solid ${project.color}25`,
//               }}
//             >
//               {t}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Projects() {
//   const [filter, setFilter] = useState('all');

//   const filtered = filter === 'all'
//     ? projects
//     : filter === 'featured'
//       ? projects.filter((p) => p.featured)
//       : projects.filter((p) => !p.featured);

//   return (
//     <section id="projects" className="py-24 dark:bg-dark-800 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <div className="reveal text-center mb-16">
//           <span className="font-mono text-cyber-500 text-sm tracking-widest uppercase">
//             03. What I've Built
//           </span>
//           <h2 className="font-display text-5xl lg:text-6xl tracking-wider mt-2 dark:text-white text-slate-900">
//             PROJECTS
//           </h2>
//           <div className="w-20 h-0.5 bg-gradient-to-r from-cyber-500 to-cyber-800 mx-auto mt-4 mb-8" />

//           {/* Filter tabs */}
//           <div className="flex gap-2 justify-center">
//             {['all', 'featured', 'other'].map((f) => (
//               <button
//                 key={f}
//                 onClick={() => setFilter(f)}
//                 className={`px-5 py-2 rounded-full font-body text-sm font-medium
//                   transition-all duration-200 capitalize
//                   ${filter === f
//                     ? 'bg-cyber-700 text-white'
//                     : 'dark:bg-dark-700 bg-slate-100 dark:text-slate-400 text-slate-600 hover:text-cyber-500'
//                   }`}
//               >
//                 {f}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filtered.map((project, i) => (
//             <ProjectCard key={project.id} project={project} index={i} />
//           ))}
//         </div>

//         {/* GitHub CTA */}
//         <div className="reveal text-center mt-12">
//           <a
//             href="https://github.com/Ujwalgarg2387"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 px-7 py-3 rounded-full border
//               dark:border-white/20 border-slate-300 dark:text-white text-slate-900
//               hover:border-cyber-500 hover:text-cyber-500 transition-all duration-300
//               font-body font-medium text-sm"
//           >
//             <Github size={16} />
//             View All on GitHub
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }