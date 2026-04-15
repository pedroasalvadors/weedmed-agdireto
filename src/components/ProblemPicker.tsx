import { motion, type Variants } from 'framer-motion'

const problems = [
  { label: 'Dor Crônica',   image: '/icon_pain.webp'       },
  { label: 'Fibromialgia',  image: '/icon_fibro.webp'      },
  { label: 'Ansiedade',     image: '/icon_anxiety.webp'    },
  { label: 'Insônia',       image: '/icon_sleep.webp'      },
  { label: 'TDAH',          image: '/icon_tdah.webp'       },
  { label: 'Epilepsia',     image: '/icon_depression.webp' },
]

export default function ProblemPicker() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  }

  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif", color: '#2D1B69' }}
          >
            Para quem é?
          </h2>
          <p
            className="text-gray-500 text-base"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Cannabis medicinal é prescrita por médicos especializados para diversas condições.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {problems.map((problem) => (
            <motion.a
              key={problem.label}
              href="https://weedmed.online/"
              onClick={() => {
                (window as any).dataLayer = (window as any).dataLayer || [];
                (window as any).dataLayer.push({
                  event: 'cta_click',
                  cta_location: 'problem_picker',
                  cta_label: problem.label,
                });
              }}
              className="group flex items-center gap-2 md:gap-3 px-3 py-3.5 md:px-5 md:py-4 rounded-2xl border border-gray-200 bg-white hover:border-[#00B383] hover:bg-[#EDE9F8] transition-all duration-250 shadow-sm hover:shadow-md"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={problem.image}
                  alt={problem.label}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <span
                className="text-xs md:text-base flex-grow font-semibold text-gray-700 group-hover:text-[#2D1B69] transition-colors duration-200 leading-tight"
                style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                {problem.label}
              </span>
              <svg
                className="w-4 h-4 text-gray-400 group-hover:text-[#00B383] group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          ))}
        </motion.div>

        {/* Nota rodapé */}
        <motion.p
          className="mt-6 text-sm text-gray-400"
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Tem dúvida se é para você?{' '}
          <button
            onClick={() => document.querySelector<HTMLElement>('.open-chat')?.click()}
            className="underline hover:text-[#2D1B69] transition-colors font-medium"
          >
            Converse com nossa equipe →
          </button>
        </motion.p>

      </div>
    </section>
  )
}
