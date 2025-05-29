import { fadeUp, fadeLeft, fadeRight, fadeInText } from "@/utils/animations";
import { AyatQuran } from "./AyatAlQuran";
import Decoration from "./Decoration";
import { motion } from "framer-motion";

export default function PasutriSection({ acara, variant }) {
  return (
    <>
      <div className="salam-pembuka border-none shadow-none ring-0">
        <Decoration />
        <motion.p className="bismilah" {...fadeInText}>
          Bismillahirrahmanirrahim
        </motion.p>
        <motion.p {...fadeUp}>
          Dengan memohon Rahmat dan Ridha Allah SWT, kami bermaksud
          menyelenggarakan {acara} putra/putri kami
        </motion.p>
      </div>
      <section className="pasutri-section">
        {variant === "dianita" ? (
          <>
            {/* Foto dan Nama Bride */}
            <motion.div
              className="text bride-text"
              {...fadeLeft}
              transition={{ delay: 0.2 }}
            >
              <h3>Dianita Agna P. A.Md.Keb</h3>
              <p>The Bride</p>
              <span>Putri dari Bp. Slamet Riyadi dan Ibu Riana Triwiyatmi</span>
            </motion.div>
            <motion.div className="foto bride-photo" {...fadeLeft} />

            <motion.div className="with" {...fadeUp}>
              Dengan
            </motion.div>

            {/* Teks dan Foto Groom */}
            <motion.div className="text groom-text" {...fadeRight}>
              <h3>Wahyu Utomo S.E</h3>
              <p id="groom">The Groom</p>
              <span>Putra dari Bp. Mulyono dan Ibu Purwanti</span>
            </motion.div>
            <motion.div className="foto groom-photo" {...fadeRight} />
          </>
        ) : (
          <>
            {/* Teks dan Foto Groom */}
            <motion.div className="text groom-text" {...fadeRight}>
              <h3>Wahyu Utomo S.E</h3>
              <p id="groom">The Groom</p>
              <span>Putra dari Bp. Mulyono dan Ibu Purwanti</span>
            </motion.div>
            <motion.div className="foto groom-photo" {...fadeRight} />

            <motion.div className="with" {...fadeUp}>
              Dengan
            </motion.div>

            {/* Foto dan Nama Bride */}
            <motion.div
              className="text bride-text"
              {...fadeLeft}
              transition={{ delay: 0.2 }}
            >
              <h3>Dianita Agna P. A.Md.Keb</h3>
              <p>The Bride</p>
              <span>Putri dari Bp. Slamet Riyadi dan Ibu Riana Triwiyatmi</span>
            </motion.div>
            <motion.div className="foto bride-photo" {...fadeLeft} />
          </>
        )}
      </section>
      <Decoration />
      <AyatQuran />
    </>
  );
}
