import React from "react";
import { LuClipboardList } from "react-icons/lu";
import toast from 'react-hot-toast';
import { useState } from "react";

export function RSVPForm() {
  const [copyStatus, setCopyStatus] = useState("");
  const [kehadiran, setKehadiran] = useState("");
  const [name, setName] = useState("");
  const [jumlah, setJumlah] = useState(0);
  const [doa, setDoa] = useState("");

  const handlerCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyStatus("Tersalin!");
      setTimeout(() => setCopyStatus(""), 2000);
      toast.success("Nomor berhasil disalin!");
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      kehadiran,
      jumlah,
      doa: doa || "NULL",
    };
    console.log("RSVP data: ", data);
    console.log("Data Berhasil Dikirim")
    // Reset form
    setName("");
    setKehadiran("");
    setJumlah(0);
    setDoa("");
  };

  return (
    <section className="gift-rsvp-sections">
      <div className="bar-divider">
        <span className="line"></span>
        <h2>GIFT & RSVP</h2>
        <span className="line"></span>
      </div>
      {/* GIFT */}
      <div className="gift-container">
        <div className="gift__info">
          <h3>
            Kehadiran Anda adalah hadiah terbaik bagi kami. <br />
            Namun, jika berkenan memberikan tanda kasih, berikut detailnya:
          </h3>
        </div>
        <div className="gift-card__container">
          <div className="gift-card">
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
          </div>
          <div className="gift-card">
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
          </div>
        </div>
        {copyStatus && <p className="copy-alert">{copyStatus}</p>}

        <div className="gift__info">
          <h3>
            Atau juga bisa mengirimkan tanda kasih secara langsung ke alamat
            berikut
          </h3>
        </div>
        <div className="gift-card__container">
          <div className="gift-card">
            <div className="card_alamat-info">
              <p>
                Jl Kaliwidas, Kp. Mertodranan RT 03 RW 03 Kel Pasarkliwon, Kec
                Pasarkliwon Surakarta 57118
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* RSVP */}
      <div className="rsvp-container">
        <div className="rsvp__title">
          <h2>RSVP</h2>
          <p>Konfirmasi kehadiran Anda</p>
        </div>
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
                value={doa}
                onChange={(e) => setDoa(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn-rsvp">
              Kirim RSVP
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
