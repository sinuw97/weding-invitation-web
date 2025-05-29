import InvitationPage from "@/components/InvitationPage";

export default function DianitaPage() {
  const dianitaData = {
    withButton: false,
    date: "15 June 2025",
    time: "10.00",
    countdownDate: new Date("2025-06-15T10:00:00+07:00"),
    cards: 2,
    weddingDay: "Sunday, 15 June 2025",
    weddingCeremony: "15 June 2025 | 09:00 WIB",
    weddingPlace: "Gedung Al Irsyad",
    weddingAddress: "Jl. Kapten Mulyadi No. 117, Surakarta",
    weddingGmaps: "https://maps.app.goo.gl/qyjue2BJ8X5SNWqb9",
    weddingReception: "15 June 2025 | 10:00 WIB",
    gmapFrame:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0026089686176!2d110.8302118741861!3d-7.574692774821506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1794ef66a5ff%3A0xe17e9199a4a07f4d!2sGedung%20Al%20Irsyad%20Surakarta!5e0!3m2!1sen!2sid!4v1746791646446!5m2!1sen!2sid",
    bankName: "Bank BNI",
    logoBank: "logo-bni.svg",
    logoGopay: "logo-gopay.svg",
    noRek: "345644104",
    noHp: "081573548098",
    namaPemilik: "Dianita Agna Primaningtyas",
    alamat: "https://maps.app.goo.gl/A7dUDQf1WS8u6Dii6",
  };

  return <InvitationPage variant="dianita" data={dianitaData} />;
}
