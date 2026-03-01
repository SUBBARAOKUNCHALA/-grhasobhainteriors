import { motion } from "framer-motion";
import tvImg from "../assets/tv.webp"; // replace with your actual image
import "./tvunits.css";
import { useState } from "react";
import ConsultationModal from "./ConsultationModal";
const features = [
  { icon: "fa-solid fa-tv", title: "Flush-Mount Panels", desc: "Seamlessly recessed TV panels with hidden cable management for a clean, wire-free wall." },
  { icon: "fa-solid fa-cubes", title: "False Ceiling Design", desc: "Layered POP, gypsum, and wooden ceilings with cove lighting that redefine a room's character." },
  { icon: "fa-solid fa-compact-disc", title: "Media Storage", desc: "Built-in niches, display shelves, and media consoles crafted to hold every device and decor piece." },
  { icon: "fa-solid fa-wand-magic-sparkles", title: "Ambient Lighting", desc: "Recessed LEDs, backlit panels, and cove strips that set the perfect mood for every moment." },
];

// const stats = [
//   { value: "400+", label: "Units Installed" },
//   { value: "50+",  label: "Ceiling Styles" },
//   { value: "8yr",  label: "Warranty" },
// ];

export default function TvUnits() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <section id="tv-units" className="tv-section">

        <div className="tv-orb tv-orb-1" />
        <div className="tv-orb tv-orb-2" />

        {/* Eyebrow */}
        <motion.div
          className="tv-eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="tv-eyebrow-line" />
          <span>Our Services</span>
          <span className="tv-eyebrow-line" />
        </motion.div>

        <div className="tv-inner">

          {/* ── LEFT — Image ── */}
          <motion.div
            className="tv-image-col"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="tv-image-frame">
              <img src={tvImg} alt="TV Unit & Ceiling by Grha Sobha" />
              {/* <div className="tv-stats-card">
              {stats.map((s) => (
                <div className="tv-stat" key={s.label}>
                  <span className="tv-stat-value">{s.value}</span>
                  <span className="tv-stat-label">{s.label}</span>
                </div>
              ))}
            </div> */}
            </div>
          </motion.div>

          {/* ── RIGHT — Content ── */}
          <div className="tv-content-col">

            <motion.h2
              className="tv-title"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="tv-title-thin">Walls & Ceilings That</span>
              <span className="tv-title-bold">Command the Room</span>
            </motion.h2>

            <motion.p
              className="tv-desc"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A great living space starts from the ceiling down. Our TV units and false ceiling
              designs combine precision carpentry with architectural lighting to turn any room into
              a cinematic, curated environment. Every panel, every cove, every recessed light is
              engineered to make your space feel both grand and intimate.
            </motion.p>

            {/* Feature grid */}
            <div className="tv-features">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  className="tv-feature"
                  initial={{ y: 24, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
                >
                  <div className="tv-feature-icon">
                    <i className={f.icon} />
                  </div>
                  <div>
                    <h4 className="tv-feature-title">{f.title}</h4>
                    <p className="tv-feature-desc">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

             <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {/* ✅ button instead of <a> — opens modal */}
              <button
                className="btn-primary"
                onClick={() => setModalOpen(true)}
              >
                Book a Consultation
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}