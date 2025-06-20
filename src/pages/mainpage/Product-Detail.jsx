import { LayoutSecond } from "../../components/layout/Layout";
import image from "../../assets/makkah-1.png";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
function UmrahPackage() {
  return (
    <div className="grid grid-cols-1 gap-8 pb-16 md:grid-cols-2">
      <div className="flex gap-4 max-lg:flex-col-reverse lg:flex-row">
        <div className="md:flex-com scrollbar-none flex gap-2 overflow-scroll lg:flex-row">
          <div className="flex gap-2 max-lg:flex-row lg:flex-col">
            <img
              src={image}
              alt="thumb1"
              className="aspect-square w-16 rounded-lg"
            />
            <img
              src={image}
              alt="thumb2"
              className="aspect-square w-16 rounded-lg"
            />
            <img
              src={image}
              alt="thumb3"
              className="aspect-square w-16 rounded-lg"
            />
            <img
              src={image}
              alt="thumb2"
              className="aspect-square w-16 rounded-lg lg:hidden"
            />
            <img
              src={image}
              alt="thumb3"
              className="aspect-square w-16 rounded-lg lg:hidden"
            />
          </div>
          <div className="flex gap-2 max-lg:hidden md:flex-row lg:flex-col">
            <img
              src={image}
              alt="thumb1"
              className="aspect-square w-16 rounded-lg"
            />
            <img
              src={image}
              alt="thumb2"
              className="aspect-square w-16 rounded-lg"
            />
          </div>
        </div>
        <div>
          <img
            src={image}
            alt="Ka'bah"
            className="aspect-square h-full w-full rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-primary text-sm font-semibold">
          Availability: In stock
        </p>
        <h2 className="font-bold max-lg:text-2xl lg:text-3xl">
          Paket Umroh Makkah
        </h2>
        <div className="flex items-center space-x-2">
          <div className="flex text-yellow-400">{"★".repeat(5)}</div>
          <p className="text-sm text-gray-600">(2 reviews)</p>
        </div>

        {/* Price */}
        <p className="font-bold text-gray-800 max-lg:text-xl lg:text-2xl">
          Rp 30.000.000<span className="text-sm font-normal">/orang</span>
        </p>

        {/* Description */}
        <p className="text-sm leading-relaxed text-gray-700">
          Harga Termasuk Hotel Pesawat Asuransi Covid - 19 Koper Bagasi Fiber 24
          (Kapasitas 23 Kg) | Kain Ihram (Pria) | Sabuk Ihram (Pria) | Bahan
          Seragam (2.5 M) | Kerudung Syar’i Wanita | Tas Sandal | Tas Paspor |
          Sarung koper (mika) | Makan Sesuai Jadwal <br />
          <span className="font-semibold">Harga Tidak Termasuk:</span> Biaya
          Mahram, Vaksin Meningitis, Biaya Handling, Biaya Karantina di
          Indonesia sebelum & sesudah keberangkatan (termasuk biaya PCR swab)
        </p>

        <div className="flex gap-2">
          <button className="bg-primary rounded-full px-4 py-2 font-semibold text-white">
            Pesan Sekarang
          </button>
          <button className="rounded-full px-4 py-2 font-semibold bg-gradient text-white">
            <FaCartPlus size={18}></FaCartPlus>
          </button>
        </div>
      </div>
    </div>
  );
}

function UmrahTabs() {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { key: "description", label: "DESCRIPTION" },
    { key: "itinerary", label: "ITINERARY" },
    { key: "terms", label: "SYARAT & KONDISI" },
  ];

  const tabContent = {
    description: (
      <div className="space-y-2">
        <p className="font-semibold">Harga Termasuk :</p>
        <ul className="ml-6 list-disc ">
          <li>Hotel, Pesawat, Asuransi Covid - 19</li>
          <li>Koper Bagasi Fiber 24 (Kapasitas 23 kg)</li>
          <li>Kain Ihram (Pria)</li>
          <li>Sabuk Ihram (Pria)</li>
          <li>Bahan Seragam (2,5 M)</li>
          <li>Kerudung Syar'i Wanita</li>
          <li>Tas Sandal</li>
          <li>Tas Paspor</li>
          <li>Sarung koper (mika)</li>
          <li>Makan Sesuai Jadwal</li>
        </ul>

        <p className="mt-4 font-semibold">Harga Tidak Termasuk:</p>
        <ul className="ml-6 list-disc">
          <li>Biaya Mahram</li>
          <li>Vaksin Meningitis</li>
          <li>Biaya Handling</li>
          <li>
            Biaya Karantina di Indonesia sebelum & sesudah keberangkatan
            (termasuk biaya PCR swab)
          </li>
        </ul>
      </div>
    ),
    itinerary: (
      <p className="text-gray-700">
        Rincian itinerary perjalanan umrah akan ditampilkan di sini...
      </p>
    ),
    terms: (
      <p className="text-gray-700">
        Syarat & ketentuan akan ditampilkan di sini...
      </p>
    ),
  };

  return (
    <div className="mt-8">
      {/* Tabs */}
      <div className="scrollbar-none flex overflow-scroll border-b border-gray-200 text-sm font-medium">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`-mb-px border-b-2 px-4 py-2 whitespace-nowrap ${
              activeTab === tab.key
                ? "border-green-500 text-green-600"
                : "border-transparent text-gray-500 hover:text-green-600"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-6 text-sm text-gray-800">{tabContent[activeTab]}</div>
    </div>
  );
}

export const ProductDetail = () => {
  return (
    <>
      <LayoutSecond page={"Produk - Detail"}>
        <div className="w-full overflow-hidden bg-[#EAEAEB]">
          <div className="m-auto w-full max-w-[1064px]">
            <div className="px-6 py-10">
              <UmrahPackage></UmrahPackage>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <div className="m-auto w-full max-w-[1064px]">
            <div className="px-6 py-10">
              <UmrahTabs></UmrahTabs>
            </div>
          </div>
        </div>
      </LayoutSecond>
    </>
  );
};
