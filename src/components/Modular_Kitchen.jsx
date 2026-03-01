import { motion } from "framer-motion";
import kitchenImg from "../assets/Kitchen.avif";
import "./Modularkitchen.css";
import { useState } from "react";
import ConsultationModal from "./ConsultationModal";
const features = [
  { icon: "fa-solid fa-layer-group",   title: "Smart Storage",      desc: "Floor-to-ceiling cabinets with soft-close hinges and pull-out organisers that maximise every inch." },
  { icon: "fa-solid fa-fire-burner",   title: "Premium Appliances", desc: "Curated built-in appliances — hobs, ovens & chimneys — seamlessly integrated into the design." },
  { icon: "fa-solid fa-palette",       title: "Custom Finishes",    desc: "Choose from 80+ laminates, lacquers, and veneers to perfectly match your home's aesthetic." },
  { icon: "fa-solid fa-ruler-combined",title: "Precision-Fit",      desc: "Every unit measured and crafted to the millimetre, ensuring a seamless, gap-free installation." },
];

// const stats = [
//   { value: "500+", label: "Kitchens Delivered" },
//   { value: "80+",  label: "Finish Options" },
//   { value: "10yr", label: "Warranty" },
// ];

export default function ModularKitchen() {
const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
        <section id="modular-kitchen" className="mk-section">

      {/* Orbs to match Hero */}
      <div className="mk-orb mk-orb-1" />
      <div className="mk-orb mk-orb-2" />

      {/* ── Section label ── */}
      <motion.div
        className="mk-eyebrow"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="mk-eyebrow-line" />
        <span>Our Services</span>
        <span className="mk-eyebrow-line" />
      </motion.div>

      <div className="mk-inner">

        {/* ── LEFT — Image ── */}
        <motion.div
          className="mk-image-col"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="mk-image-frame">
            <img src={kitchenImg} alt="Modular Kitchen by Grha Sobha" />

            {/* Floating stats card */}
            {/* <div className="mk-stats-card">
              {stats.map((s) => (
                <div className="mk-stat" key={s.label}>
                  <span className="mk-stat-value">{s.value}</span>
                  <span className="mk-stat-label">{s.label}</span>
                </div>
              ))}
            </div> */}
          </div>
        </motion.div>

        {/* ── RIGHT — Content ── */}
        <div className="mk-content-col">

          <motion.h2
            className="mk-title"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="mk-title-thin">Crafted for the Way</span>
            <span className="mk-title-bold">You Live & Cook</span>
          </motion.h2>

          <motion.p
            className="mk-desc"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A Grha Sobha modular kitchen is more than cabinetry — it's a thoughtfully
            engineered space where every surface, material, and fitting is chosen for beauty
            and function. We design kitchens that feel as good as they look, built to last a lifetime.
          </motion.p>

          {/* Feature grid */}
          <div className="mk-features">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="mk-feature"
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
              >
                <div className="mk-feature-icon">
                  <i className={f.icon} />
                </div>
                <div>
                  <h4 className="mk-feature-title">{f.title}</h4>
                  <p className="mk-feature-desc">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA row */}
          <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
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