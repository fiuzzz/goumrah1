import {Layout} from "../../components/layout/Layout";
import { FaEnvelope, FaWhatsappSquare } from "react-icons/fa";

import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

export function FormWhatsApp() {
  const [nama, setNama] = useState("");
  const [paket, setPaket] = useState("");
  const [tanggal, setTanggal] = useState("");

  const handleKirim = () => {
    const noWa = "6285603623523"; // Ganti nomor WA tujuan
    const pesan = `Halo, saya ${nama}, ingin bertanya tentang paket umrah ${paket}, dengan jadwal keberangkatan pada ${tanggal}.`;
    const url = `https://wa.me/${noWa}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="mx-auto max-w-md space-y-4">
      <input
        type="text"
        placeholder="Nama"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        className="w-full rounded border px-3 py-2"
      />
      <input
        type="text"
        placeholder="Paket Umrah"
        value={paket}
        onChange={(e) => setPaket(e.target.value)}
        className="w-full rounded border px-3 py-2"
      />
      <input
        type="date"
        value={tanggal}
        onChange={(e) => setTanggal(e.target.value)}
        className="w-full rounded border px-3 py-2"
      />
      <button
        onClick={handleKirim}
        className="w-full rounded bg-green-500 py-2 text-white hover:bg-green-600"
      >
        Chat via WhatsApp
      </button>
    </div>
  );
}

export const Kontak = () => {
  return (
    <>
      <Layout page="Kontak">
        {/* Google Maps Embed */}
        <div className="mb-8 h-[400px] w-full">
          <iframe
            title="Lokasi Kantor"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7932.369934007865!2d106.82345507770998!3d-6.239335699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3c2f78e1417%3A0x6e69dc9146860164!2sPT%20Surveyor%20Indonesia!5e0!3m2!1sid!2sid!4v1748935349573!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-md"
          ></iframe>
        </div>
        <div className="grid grid-cols-3 gap-6 text-center max-lg:grid-cols-2 max-md:grid-cols-1">
          {/* Kontak Telepon */}
          <div className="flex h-56 flex-col items-center justify-center space-y-2 rounded-lg shadow-md">
            <FaWhatsappSquare className="h-6 w-6 text-green-500" />
            <p className="font-medium text-gray-700">+62215265235</p>
          </div>

          {/* Alamat */}
          <div className="flex h-56 flex-col items-center justify-center space-y-2 rounded-lg shadow-md max-lg:order-3 max-lg:col-span-2 max-md:col-span-1">
            <FaLocationDot className="h-6 w-6 text-green-500" />
            <p className="text-sm leading-relaxed font-medium text-gray-700">
              Jl. Tole Iskandar No. 11, Sukmajaya, <br></br> Kec. Sukmajaya,
              Kota Depok, Jawa Barat 16412
            </p>
          </div>

          {/* Email */}
          <div className="space-y- flex h-56 flex-col items-center justify-center rounded-lg shadow-md">
            <FaEnvelope className="h-6 w-6 text-green-500" />
            <p className="font-medium text-gray-700">
              customerservice@amoora.id
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};
