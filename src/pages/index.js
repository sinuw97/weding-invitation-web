// // pages/index.js
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen p-10 bg-pink-50">
//       <h1 className="text-3xl font-bold mb-4">Selamat datang di Undangan Pernikahan</h1>
//       <p className="mb-8">Silakan pilih undangan yang ingin kamu lihat:</p>
//       <div className="flex gap-4">
//         <Link href="/dianita">
//           <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">Lihat Undangan Dianita</button>
//         </Link>
//         <Link href="/wahyu">
//           <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Lihat Undangan Wahyu</button>
//         </Link>
//       </div>
//     </main>
//   );
// }

import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dianita");
  }, [router]);

  return null;
}