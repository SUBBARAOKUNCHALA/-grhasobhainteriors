import { useState } from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import Sideimg from "../assets/home.jpg";
import ConsultationModal from "./ConsultationModal";

const services = ["Modular Kitchen", "Custom Wardrobes", "TV Units & Ceilings", "Premium Wood Finishes"];
const serviceRoutes = {
  "Modular Kitchen":      "#modular-kitchen",
  "Custom Wardrobes":     "#custom-wardrobes",
  "TV Units & Ceilings":  "#tv-units",
  "Premium Wood Finishes":"#wood-finishes",
};

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="hero">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="hero-inner">

          {/* ── LEFT ── */}
          <div className="hero-left">

            <motion.div
              className="hero-brand"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <div className="brand-icon">
                <i className="fa-solid fa-house" />
              </div>
              <div className="brand-text">
                <span className="brand-name">GRHA SOBHA</span>
                <span className="brand-tagline">Interior &amp; Space Designers</span>
              </div>
            </motion.div>

             <motion.div
              className="hero-contact-inline"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span><i className="fa-solid fa-envelope" /> grhasobhainteriors@gmail.com</span>
              <span className="bar-divider" />
              <span><i className="fa-solid fa-phone" /> +91 8639709850</span>
              <span className="bar-divider" />
              <span><i className="fa-brands fa-instagram" /> @grhasobhainterios</span>
            </motion.div>

            <motion.h1
              className="hero-headline"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <span className="headline-thin">Spaces That</span>
              <span className="headline-bold">Tell Your Story</span>
            </motion.h1>

            <motion.p
              className="services-label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              Our Services
            </motion.p>

            <motion.div
              className="service-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {services.map((s, i) => (
                <motion.a
                  key={s}
                  href={serviceRoutes[s]}
                  className="btn-service"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.55 + i * 0.1 }}
                >
                  {s}
                </motion.a>
              ))}
            </motion.div>

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

          {/* ── RIGHT ── */}
          <motion.div
            className="hero-right"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
          >
            <div className="image-frame">
              <img src={Sideimg} alt="Interior Design" />
              {/* <div className="image-badge">
                <span className="badge-number">10+</span>
                <span className="badge-label">Years of Craft</span>
              </div> */}
            </div>
          </motion.div>

        </div>

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

      {/* Modal rendered outside hero div so it overlays everything */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}