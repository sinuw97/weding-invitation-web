import React, { useEffect, useState } from "react";
export function AyatQuran() {
  const [ayat, setAyat] = useState(null);

  useEffect(() => {
    fetch("https://equran.id/api/v2/surat/30")
      .then((response) => response.json())
      .then((result) => {
        setAyat(result.data.ayat[20]);
      })
      .catch((error) => {
        console.error("Gagal ambil data:", error);
      });
  }, []);

  return (
    <section className="ayat-section">
      <div className="ayat-container">
        {ayat ? (
          <>
            <div className="arab-latin">
              <p className="arab">{ayat.teksArab}</p>
              <p className="latin">{ayat.teksLatin}</p>
            </div>
            <p className="terjemahan">"{ayat.teksIndonesia}"</p>
          </>
        ) : (
          <p>Memuat ayat...</p>
        )}
        <p className="ayat-info">Ar Rum 30:21</p>
      </div>
    </section>
  );
}
