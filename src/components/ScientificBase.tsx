import { motion } from 'framer-motion'

const IconShield = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
)

const IconFlask = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6m-6 0v6l-4 9a1 1 0 001 1h14a1 1 0 001-1l-4-9V3m-6 0H9"/>
    <line x1="6" y1="14" x2="18" y2="14"/>
  </svg>
)

const IconHeartPulse = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
    <polyline points="8 12 10 10 12 14 14 10 16 12"/>
  </svg>
)

const blocks = [
  {
    Icon: IconShield,
    title: 'Regulamentação',
    body: (
      <>
        Regularizada pela <strong style={{ color: '#00B383' }}>ANVISA (RDC 660/2022)</strong>. Legal no Brasil para uso terapêutico mediante <strong style={{ color: 'rgba(255,255,255,0.9)' }}>prescrição médica</strong>.
      </>
    ),
    source: 'ANVISA RDC 660/2022',
    sourceUrl: 'https://www.gov.br/anvisa/pt-br',
  },
  {
    Icon: IconFlask,
    title: 'Evidências Clínicas',
    body: (
      <>
        Estudos publicados no <strong style={{ color: 'rgba(255,255,255,0.9)' }}>New England Journal of Medicine</strong> e <strong style={{ color: 'rgba(255,255,255,0.9)' }}>The Lancet</strong> demonstram eficácia no manejo de dor crônica, ansiedade, insônia e epilepsia.
      </>
    ),
    source: 'NEJM 2017 · The Lancet 2018',
    sourceUrl: 'https://www.nejm.org',
  },
  {
    Icon: IconHeartPulse,
    title: 'Segurança',
    body: (
      <>
        Todos os médicos parceiros são <strong style={{ color: 'rgba(255,255,255,0.9)' }}>especializados em canabinologia</strong>. <strong style={{ color: '#00B383' }}>Acompanhamento farmacêutico contínuo incluso</strong> em todos os tratamentos.
      </>
    ),
    source: 'Protocolo weedmed · CFM Res. 2.314/2022',
    sourceUrl: 'https://www.gov.br/anvisa/pt-br',
  },
]

export default function ScientificBase() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#0F0A2E' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" }}
          >
            Cannabis medicinal tem respaldo<br className="hidden md:block" /> científico e regulatório
          </h2>
          <p
            className="text-base md:text-lg"
            style={{ color: '#00B383', fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Não é alternativa. É medicina prescrita, regulamentada e baseada em evidências.
          </p>
        </motion.div>

        {/* 3 blocos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blocks.map((block, i) => (
            <motion.div
              key={block.title}
              className="rounded-2xl p-7"
              style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: 'rgba(0,179,131,0.15)', color: '#00B383' }}
              >
                <block.Icon />
              </div>
              <h3
                className="text-lg font-semibold text-white mb-3"
                style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" }}
              >
                {block.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: 'rgba(255,255,255,0.65)', fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                {block.body}
              </p>
              <a
                href={block.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs hover:opacity-80 transition-opacity"
                style={{ color: '#00B383', fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {block.source}
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
