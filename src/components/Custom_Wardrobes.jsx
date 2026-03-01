import { motion } from "framer-motion";
import wardrobeImg from "../assets/word.jpg"; // replace with your actual image
import "./CustomWardrobes.css";
import { useState } from "react";
import ConsultationModal from "./ConsultationModal";
const features = [
  { icon: "fa-solid fa-shirt",          title: "Walk-In Design",      desc: "Spacious walk-in configurations with dedicated zones for clothing, accessories, and shoes." },
  { icon: "fa-solid fa-sliders",        title: "Modular Flexibility",  desc: "Mix drawers, shelves, hanging rails, and pull-outs — reconfigured as your wardrobe needs evolve." },
  { icon: "fa-solid fa-door-open",      title: "Sliding & Swing Doors", desc: "Space-saving sliding panels or classic hinged doors, available in mirror, glass, or solid finishes." },
  { icon: "fa-solid fa-lightbulb",      title: "Integrated Lighting",  desc: "Sensor-activated LED strips that illuminate every corner the moment you open the door." },
];

// const stats = [
//   { value: "300+", label: "Wardrobes Built" },
//   { value: "60+",  label: "Door Finishes" },
//   { value: "5yr",  label: "Warranty" },
// ];

export default function CustomWardrobes() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
        <section id="custom-wardrobes" className="cw-section">

      <div className="cw-orb cw-orb-1" />
      <div className="cw-orb cw-orb-2" />

      {/* Eyebrow */}
      <motion.div
        className="cw-eyebrow"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="cw-eyebrow-line" />
        <span>Our Services</span>
        <span className="cw-eyebrow-line" />
      </motion.div>

      <div className="cw-inner">

        {/* ── LEFT — Content ── */}
        <div className="cw-content-col">

          <motion.h2
            className="cw-title"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="cw-title-thin">Storage That Feels Like</span>
            <span className="cw-title-bold">Luxury, Every Day</span>
          </motion.h2>

          <motion.p
            className="cw-desc"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our custom wardrobes are designed around your lifestyle — how you dress,
            what you own, and how you move through your space. Every shelf, rail, and
            drawer is placed with intention, wrapped in finishes that elevate your bedroom
            from ordinary to extraordinary.
          </motion.p>

          {/* Feature grid */}
          <div className="cw-features">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="cw-feature"
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
              >
                <div className="cw-feature-icon">
                  <i className={f.icon} />
                </div>
                <div>
                  <h4 className="cw-feature-title">{f.title}</h4>
                  <p className="cw-feature-desc">{f.desc}</p>
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
          className="cw-image-col"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <div className="cw-image-frame">
            <img src={wardrobeImg} alt="Custom Wardrobe by Grha Sobha" />
            {/* <div className="cw-stats-card">
              {stats.map((s) => (
                <div className="cw-stat" key={s.label}>
                  <span className="cw-stat-value">{s.value}</span>
                  <span className="cw-stat-label">{s.label}</span>
                </div>
              ))}
            </div> */}
          </div>
        </motion.div>

      </div>
    </section>

     <ConsultationModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
          />
    
    </>
  );
}