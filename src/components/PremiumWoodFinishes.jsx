import { motion } from "framer-motion";
import woodImg from "../assets/wood.avif"; // replace with your actual image
import "./PremiumWoodFinishes.css";
import { useState } from "react";
import ConsultationModal from "./ConsultationModal";
const features = [
  { icon: "fa-solid fa-tree",           title: "Solid Hardwood",       desc: "Sourced from sustainably managed forests — teak, oak, walnut, and rosewood available in full-slab form." },
  { icon: "fa-solid fa-brush",          title: "Hand-Applied Finishes", desc: "Every surface is hand-sanded, stained, and lacquered by our artisans for a depth no machine can replicate." },
  { icon: "fa-solid fa-shield-halved",  title: "Anti-Warp Treatment",  desc: "Kiln-dried timber with moisture-resistant sealing ensures your finishes stay flawless for decades." },
  { icon: "fa-solid fa-swatchbook",     title: "50+ Wood Tones",        desc: "From bleached Nordic white to deep espresso — curated palettes to match any interior style or mood." },
];

// const stats = [
//   { value: "50+",  label: "Wood Tones" },
//   { value: "100%", label: "Natural Materials" },
//   { value: "20yr", label: "Durability" },
// ];

const woodTypes = ["Teak", "Oak", "Walnut", "Rosewood", "Mango Wood", "Pine"];

export default function PremiumWoodFinishes() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
        <section id="wood-finishes" className="pw-section">

      <div className="pw-orb pw-orb-1" />
      <div className="pw-orb pw-orb-2" />
      <div className="pw-orb pw-orb-3" />

      {/* Eyebrow */}
      <motion.div
        className="pw-eyebrow"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="pw-eyebrow-line" />
        <span>Our Services</span>
        <span className="pw-eyebrow-line" />
      </motion.div>

      <div className="pw-inner">

        {/* ── LEFT — Content ── */}
        <div className="pw-content-col">

          <motion.h2
            className="pw-title"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="pw-title-thin">Where Nature Meets</span>
            <span className="pw-title-bold">Masterful Craft</span>
          </motion.h2>

          <motion.p
            className="pw-desc"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Premium wood finishes transform a space from beautiful to timeless.
            We work exclusively with natural hardwoods and artisan-grade veneers,
            hand-finished to bring out the grain, warmth, and character unique to
            every piece — because no two trees are ever the same.
          </motion.p>

          {/* Wood type chips */}
          <motion.div
            className="pw-wood-chips"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="pw-chips-label">Available Wood Types</p>
            <div className="pw-chips">
              {woodTypes.map((w, i) => (
                <motion.span
                  key={w}
                  className="pw-chip"
                  initial={{ scale: 0.85, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.07 }}
                >
                  {w}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Feature grid */}
          <div className="pw-features">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="pw-feature"
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              >
                <div className="pw-feature-icon">
                  <i className={f.icon} />
                </div>
                <div>
                  <h4 className="pw-feature-title">{f.title}</h4>
                  <p className="pw-feature-desc">{f.desc}</p>
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

        {/* ── RIGHT — Image ── */}
        <motion.div
          className="pw-image-col"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <div className="pw-image-frame">
            <img src={woodImg} alt="Premium Wood Finishes by Grha Sobha" />

            {/* Floating stats */}
            {/* <div className="pw-stats-card">
              {stats.map((s) => (
                <div className="pw-stat" key={s.label}>
                  <span className="pw-stat-value">{s.value}</span>
                  <span className="pw-stat-label">{s.label}</span>
                </div>
              ))}
            </div> */}

            {/* Grain texture overlay badge */}
            <div className="pw-grain-badge">
              <i className="fa-solid fa-leaf" />
              <span>100% Natural</span>
            </div>
          </div>
        </motion.div>

               {/* <motion.div
          className="hero-contact-bar"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span><i className="fa-solid fa-envelope" /> grhasobhainteriors@gmail.com</span>
          <span className="bar-divider" />
          <span><i className="fa-solid fa-phone" /> +91 8639709850</span>
          <span className="bar-divider" />
          <span><i className="fa-brands fa-instagram" /> @grhasobhainterios</span>
        </motion.div> */}


      </div>
    </section>

     <ConsultationModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
          />
    </>
  );
}