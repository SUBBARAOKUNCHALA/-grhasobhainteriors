import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import "./ConsultationModal.css";

export default function ConsultationModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxnfXHF1kahnA8F4e4IBIE33brmuzYUGsGYcwnXXbCVTIb0KbgCELxzJ47kmS5DHTpQ/exec"; // ← paste your URL

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Google Apps Script requires this
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
        }),
      });
      // no-cors means we can't read the response, so assume success
      setStatus("success");
      setForm({ name: "", email: "", phone: "" });
    } catch {
      setStatus("error");
    }
  };
  const handleClose = () => {
    onClose();
    setTimeout(() => setStatus("idle"), 400);
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
          />

          {/* Positioner — flexbox centres the card, no transform needed */}
          <div className="modal-positioner">
            <motion.div
              className="modal-wrapper"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <button className="modal-close" onClick={handleClose}>
                <i className="fa-solid fa-xmark" />
              </button>

              {status === "success" ? (
                <motion.div
                  className="modal-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="success-icon">
                    <i className="fa-solid fa-check" />
                  </div>
                  <h3 className="success-title">Request Sent!</h3>
                  <p className="success-msg">
                    Thank you, <strong>{form.name || "there"}</strong>!<br />
                    Our team will contact you shortly to schedule your consultation.
                  </p>
                  <button className="btn-modal-primary" onClick={handleClose}>
                    Close
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="modal-header">
                    <div className="modal-brand">
                      <div className="modal-brand-icon">
                        <i className="fa-solid fa-house" />
                      </div>
                      <span>Grha Sobha</span>
                    </div>
                    <h2 className="modal-title">
                      <span className="modal-title-thin">Book a</span>
                      <span className="modal-title-bold">Free Consultation</span>
                    </h2>
                    <p className="modal-subtitle">
                      Fill in your details and our interior design experts will reach out within 24 hours.
                    </p>
                  </div>

                  <form className="modal-form" onSubmit={handleSubmit}>
                    <div className="form-field">
                      <label htmlFor="name">Full Name</label>
                      <div className="input-wrapper">
                        <i className="fa-solid fa-user input-icon" />
                        <input id="name" name="name" type="text"
                          placeholder="e.g. Ramesh Kumar"
                          value={form.name} onChange={handleChange} required />
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="email">Email Address</label>
                      <div className="input-wrapper">
                        <i className="fa-solid fa-envelope input-icon" />
                        <input id="email" name="email" type="email"
                          placeholder="you@example.com"
                          value={form.email} onChange={handleChange} />
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="phone">Phone Number</label>
                      <div className="input-wrapper">
                        <i className="fa-solid fa-phone input-icon" />
                        <input id="phone" name="phone" type="tel"
                          placeholder="+91 98765 43210"
                          value={form.phone} onChange={handleChange} required />
                      </div>
                    </div>

                    {status === "error" && (
                      <p className="form-error">
                        <i className="fa-solid fa-triangle-exclamation" />
                        Something went wrong. Please try again or call us directly.
                      </p>
                    )}

                    <button type="submit" className="btn-modal-primary"
                      disabled={status === "sending"}>
                      {status === "sending"
                        ? <><i className="fa-solid fa-spinner fa-spin" /> Sending…</>
                        : <><i className="fa-solid fa-paper-plane" /> Book Now</>
                      }
                    </button>
                  </form>

                  <p className="modal-note">
                    <i className="fa-solid fa-lock" /> Your details are private and will never be shared.
                  </p>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}