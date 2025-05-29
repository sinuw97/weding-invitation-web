import InvitationPage from "@/components/InvitationPage";

export default function WahyuPage() {
  const wahyuData = {
    withButton: true,
    date: "21 Juni 2025",
    time: "09.00",
    pasutriName: "Wahyu & Dianita",
    acara: "ngunduh mantu",
    countdownDate: new Date("2025-06-21T09:00:00+07:00"),
    cards: 1,
    weddingDay: "Minggu, 21 Juni 2025",
    weddingPlace: "Kediaman",
    weddingAddress: "Sumberejo RT. 02 RW. 10 Waru, Kebakkramat, Karanganyar",
    weddingGmaps: "https://goo.gl/maps/CP24TGRNx7jmup4v5",
    weddingReception: "21 Juni 2025 | 09:00 WIB",
    gmapFrame:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.2237581049661!2d110.9091396846023!3d-7.511514913677216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1b90cddf15a1%3A0x28b4034293f7f0da!2sNunu%20pancing!5e0!3m2!1sen!2sid!4v1748511479469!5m2!1sen!2sid",
    bankName: "Bank CIMB Niaga",
    logoBank: "logo-cimb 1.svg",
    logoGopay: "logo-gopay 1.svg",
    noRek: "701734587100",
    noHp: "085725034557",
    namaPemilik: "Wahyu Utomo",
    alamat: "https://goo.gl/maps/CP24TGRNx7jmup4v5",
  };
  
  return <InvitationPage variant="wahyu" data={wahyuData}/>
}