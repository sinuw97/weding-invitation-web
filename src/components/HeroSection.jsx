import { AyatQuran } from "./AyatAlQuran";

export default function HeroSection() {
  return (
    <>
      {/* Hero section */}
      <header className="hero-section">
        <div className="hero-section__wrapper">
          <div className="hero-section__text-box">
            <h3>You're Invited to Our Wedding</h3>
            <div className="hero-section__name-box">
              <h1>Dianita & Wahyu</h1>
            </div>
            <div className="date-time">
              <p id="date_time">Date & Time</p>
              <span id="date">15 June 2025 | 09:00 WIB</span>
            </div>
            <div className="hero-section__button">
              <button aria-label="Save the Date">Save the date</button>
            </div>
          </div>
        </div>
      </header>
      <AyatQuran />
      {/* Section nama pengantin dan foto */}
      <section className="pasutri-section">
        {/* Foto dan Nama Bride */}
        <div className="foto bride-photo"></div>
        <div className="text bride-text">
          <h3>Dianita Agna Primaningtyas</h3>
          <p>The Bride</p>
        </div>
        {/* Foto dab Nama Groom */}
        <div className="text groom-text">
          <h3>Wahyu Utomo</h3>
          <p id="groom">The Groom</p>
        </div>
        <div className="foto groom-photo"></div>
      </section>
    </>
  );
}
