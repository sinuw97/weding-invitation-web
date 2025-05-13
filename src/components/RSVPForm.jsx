import React from "react";
import { LuClipboardList } from "react-icons/lu";
import toast from "react-hot-toast";
import { useState } from "react";
import { motion } from "framer-motion";
import db from "../firebase.js";

import { collection, addDoc } from "firebase/firestore";

const fadeInScale = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: false, amount: 0.3 },
};

const slideUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: false, amount: 0.3 },
};

const fadeInSlide = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: false, amount: 0.3 },
};

const fadeInText = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 1, ease: "easeOut" },
  viewport: { once: false, amount: 0.3 },
};

export function RSVPForm() {
  const [copyStatus, setCopyStatus] = useState("");
  const [kehadiran, setKehadiran] = useState("");
  const [name, setName] = useState("");
  const [jumlah, setJumlah] = useState(0);
  const [pesan, setPesan] = useState("");

  const handlerCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyStatus("Tersalin!");
      setTimeout(() => setCopyStatus(""), 2000);
      toast.success("Nomor berhasil disalin!");
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataYgDikirim = {
      name: name,
      kehadiran: kehadiran,
      jumlah: jumlah,
      pesan: pesan || "NULL",
      timestamp: new Date(),
    };

    // Simpan data ke firestore
    try {
      const data = await addDoc(collection(db, "rsvp"), {
        ...dataYgDikirim,
      });
      console.log("error add doc: ", data.id);
    } catch (err) {
      console.error("Error adding document: ", err);
    }
    console.log("RSVP data: ", dataYgDikirim);
    console.log("Data Berhasil Dikirim");
    toast.success("Kehadiranmu telah disimpan!");
    // Reset form
    setName("");
    setKehadiran("");
    setJumlah(0);
    setPesan("");
  };

  return (
    <section className="gift-rsvp-sections">
      <motion.div className="bar-divider" {...fadeInSlide}>
        <span className="line"></span>
        <motion.h2 {...fadeInText}>GIFT & RSVP</motion.h2>
        <span className="line"></span>
      </motion.div>
      {/* GIFT */}
      <div className="gift-container">
        <div className="gift__info">
          <motion.h3 {...fadeInScale}>
            Kehadiran Anda adalah hadiah terbaik bagi kami. <br />
            Namun, jika berkenan memberikan tanda kasih, berikut detailnya:
          </motion.h3>
        </div>
        <div className="gift-card__container">
          {/* BNI */}
          <motion.div className="gift-card" {...slideUp}>
            <div className="card__logo">
              <p>Bank BNI</p>
              <img src="/img/logo/logo-bni.svg" alt="" />
            </div>
            <div className="card_info">
              <p>No. Rek</p>
              <div className="no__rek">
                <button
                  className="card__toggle"
                  onClick={() => handlerCopy("345644104")}
                  aria-label="Copy Rekening"
                >
                  <LuClipboardList className="clipboard" />
                </button>
                <span className="rek__number">345644104</span>
              </div>
            </div>
            <p className="card__nama">Dianita Agna Primaningtyas</p>
          </motion.div>
          {/* GOPAY */}
          <motion.div className="gift-card" {...slideUp}>
            <div className="card__logo">
              <p>Gopay</p>
              <img src="/img/logo/logo-gopay.svg" alt="" />
            </div>
            <div className="card_info">
              <p>No. Hp</p>
              <div className="no__rek">
                <button
                  className="card__toggle"
                  onClick={() => handlerCopy("081573548098")}
                  aria-label="Copy Hp"
                >
                  <LuClipboardList className="clipboard" />
                </button>
                <span className="rek__number">081573548098</span>
              </div>
            </div>
            <p className="card__nama">Dianita Agna Primaningtyas</p>
          </motion.div>
        </div>

        <div className="gift__info">
          <motion.h3 {...fadeInScale}>
            Atau juga bisa mengirimkan tanda kasih secara langsung ke alamat
            berikut
          </motion.h3>
        </div>
        <div className="gift-card__container">
          <motion.div className="gift-card" {...slideUp}>
            <div className="card_alamat-info">
              <p>
                Jl Kaliwidas, Kp. Mertodranan RT 03 RW 03 Kel Pasarkliwon, Kec
                Pasarkliwon Surakarta 57118
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      {/* RSVP */}
      <motion.div className="rsvp-container" {...slideUp}>
        <motion.div className="rsvp__title" {...fadeInSlide}>
          <h2>RSVP</h2>
          <p>Konfirmasi kehadiran Anda</p>
        </motion.div>
        <div className="rsvp__form">
          <form onSubmit={handleSubmit} action={handleSubmit}>
            <div className="form__nama">
              <label htmlFor="nama">Nama</label>
              <br />
              <input
                id="nama"
                type="text"
                name="nama"
                value={name}
                placeholder="Nama Anda"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form__kehadiran">
              <label htmlFor="kehadiran">Konfirmasi Kehadiran</label>
              <div className="kehadiran">
                <div className="hadir">
                  <input
                    type="radio"
                    id="kehadiran"
                    name="kehadiran"
                    value="Hadir"
                    checked={kehadiran === "Hadir"}
                    onChange={(e) => setKehadiran(e.target.value)}
                    required
                  />
                  <span className="ml-2">Hadir</span>
                </div>
                <div className="tidak-hadir">
                  <input
                    type="radio"
                    id="tidak-hadir"
                    name="kehadiran"
                    value="Tidak Hadir"
                    checked={kehadiran === "Tidak Hadir"}
                    onChange={(e) => setKehadiran(e.target.value)}
                  />
                  <span className="ml-2">Tidak Hadir</span>
                </div>
              </div>
            </div>
            <div className="form__jumlah">
              <label htmlFor="jumlah">Jumlah orang</label>
              <br />
              <input
                id="jumlah"
                type="number"
                placeholder="Jumlah"
                name="jumlah"
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
              />
            </div>
            <div className="form__doa">
              <label htmlFor="doa">Ucapan dan Doa</label>
              <span>**Kirimkan ucapan dan doa mu untuk pengantin</span>
              <textarea
                id="doa"
                name="doa"
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn-rsvp">
              Kirim RSVP
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
