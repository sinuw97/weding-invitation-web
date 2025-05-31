import React from "react";
import { LuClipboardList } from "react-icons/lu";
import toast from "react-hot-toast";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  fadeInScale,
  fadeInSlide,
  slideUp,
  fadeInText,
  fadeUp,
} from "@/utils/animations.js";
import db from "../firebase.js";
import { collection, addDoc } from "firebase/firestore";

export function RSVPForm({
  withButton,
  bankName,
  logoBank,
  noRek,
  noHp,
  logoGopay,
  namaPemilik,
  alamat,
}) {
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
        {withButton ? (
          <div className="gift-with-btn-container">
            <motion.details className="gift-details" {...fadeUp}>
              <summary>Lihat Detail</summary>
              <div className="one-gift-card__container">
                <div className="bank-info">
                  <div className="bank-name">
                    <p>{bankName}</p>
                    <img src={`/img/logo/${logoBank}`} alt="logo-bank" />
                  </div>
                  <div className="rekening">
                    <p>No. Rek</p>
                    <div className="no__rek">
                      <button
                        className="card__toggle"
                        onClick={() => handlerCopy(`${noRek}`)}
                        aria-label="Copy Rekening"
                      >
                        <LuClipboardList className="clipboard" />
                      </button>
                      <span className="rek__number">{noRek}</span>
                    </div>
                  </div>
                </div>
                <div className="rekerning-divider">
                  <div className="divider"></div>
                </div>
                <div className="bank-info">
                  <div className="bank-name">
                    <p>Gopay</p>
                    <img src={`/img/logo/${logoGopay}`} alt="logo-gopay" />
                  </div>
                  <div className="rekening">
                    <p>No. Hp</p>
                    <div className="no__rek">
                      <button
                        className="card__toggle"
                        onClick={() => handlerCopy(`${noHp}`)}
                        aria-label="Copy Hp"
                      >
                        <LuClipboardList className="clipboard" />
                      </button>
                      <span className="rek__number">{noHp}</span>
                    </div>
                  </div>
                </div>
                <div className="nama-pemilik">{namaPemilik}</div>
              </div>
            </motion.details>
          </div>
        ) : (
          <div className="gift-card__container">
            {/* BNI */}
            <motion.div className="gift-card" {...slideUp}>
              <div className="card__logo">
                <p>{bankName}</p>
                <img src={`/img/logo/${logoBank}`} alt="logo-bank" />
              </div>
              <div className="card_info">
                <p>No. Rek</p>
                <div className="no__rek">
                  <button
                    className="card__toggle"
                    onClick={() => handlerCopy(`${noRek}`)}
                    aria-label="Copy Rekening"
                  >
                    <LuClipboardList className="clipboard" />
                  </button>
                  <span className="rek__number">{noRek}</span>
                </div>
              </div>
              <p className="card__nama">{namaPemilik}</p>
            </motion.div>
            {/* GOPAY */}
            <motion.div className="gift-card" {...slideUp}>
              <div className="card__logo">
                <p>Gopay</p>
                <img src={`/img/logo/${logoGopay}`} alt="logo-gopay" />
              </div>
              <div className="card_info">
                <p>No. Hp</p>
                <div className="no__rek">
                  <button
                    className="card__toggle"
                    onClick={() => handlerCopy(`${noHp}`)}
                    aria-label="Copy Hp"
                  >
                    <LuClipboardList className="clipboard" />
                  </button>
                  <span className="rek__number">{noHp}</span>
                </div>
              </div>
              <p className="card__nama">{namaPemilik}</p>
            </motion.div>
          </div>
        )}

        <div className="gift__info">
          <motion.h3 {...fadeInScale}>
            Atau juga bisa mengirimkan tanda kasih secara langsung ke alamat
            berikut
          </motion.h3>
        </div>

        <div className="alamat-with-btn-container">
          <motion.details className="alamat-details" {...fadeUp}>
            <summary>Lihat Alamat</summary>
            <motion.div className="one-alamat-card__container p-lr-15" {...slideUp}>
              <div className="bank-info">
                <h3 className="m-top-10">{namaPemilik}</h3>
                <p className="text-center">{alamat}</p>
              </div>
            </motion.div>
          </motion.details>
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
              <span>**Kirimkan ucapan dan doa mu untuk pasutri</span>
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
