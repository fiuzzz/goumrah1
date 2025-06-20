import { FaRegClock } from "react-icons/fa";
import { MdDateRange, MdOutlineAirplanemodeActive, MdOutlineLocationOn } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import imageDummy from "/image-dummy.png"

export const Card = ({ product }) => {
  
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(angka);
  };
  return (
    <div className="max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="bg-primary overflow-hidden relative h-36 text-white">
        <div className="absolute top-0 left-0 rounded-br-full bg-gray-100 px-2 p-1 text-xs text-black">
          Umrah
        </div>
        <div className="w-full h-full">
          <img src={imageDummy} className="w-full h-full" alt="" />
        </div>
        <div className="absolute right-0 bottom-0 rounded-tl-full bg-white">
          <p className="text-primary px-4 text-lg font-medium">Rp59.000.000</p>
        </div>
      </div>

      {/* Body */}
      <div className="space-y-2 p-4 text-sm text-gray-700">
        <h3 className="text-base font-semibold text-gray-900">
          Umrah Fairuz Landing
          <br />
          Jeddah 13 Juli 2025
        </h3>

        <ul className="space-y-1 text-gray-700">
          <li className="flex items-center gap-2">
            <MdDateRange />
            <p>
              Keberangkatan: <strong>13 Jul 25</strong>
            </p>
          </li>
          <li className="flex items-center gap-2">
            <FaRegClock></FaRegClock>{" "}
            <p>
              Durasi Perjalanan: <strong>9 Hari</strong>
            </p>
          </li>
          <li className="flex items-center gap-2">
           <RiHotelLine></RiHotelLine> Kelas Hotel: <span className="text-yellow-500">★★★★★</span>
          </li>

          <li className="flex items-center gap-2">
            <MdOutlineLocationOn></MdOutlineLocationOn> Berangkat dari: <strong>JAKARTA</strong>
          </li>

          <li className="flex items-center gap-2">
            <MdOutlineAirplanemodeActive></MdOutlineAirplanemodeActive> Maskapai: <strong>Saudia Airlines</strong>
          </li>
        </ul>
      </div>

      {/* Button */}
      <div className="p-4">
        <button className="bg-gradient w-full rounded-full py-2 font-semibold text-white transition hover:bg-blue-800">
          Lihat Detail
        </button>
      </div>
    </div>
  );
};

export const CardBlog = () => {
  return (
    <>
      <div className="relative h-auto w-full overflow-hidden rounded-[8px] border-2 border-[#D9D9D9] bg-white p-2 max-sm:h-auto">
        <div className="relative flex h-auto w-full items-center justify-center rounded-lg bg-gray-200">
          <img className="w-full" src="src/assets/blog.png" alt="" />
        </div>
        <h3 className="mt-1 line-clamp-3 text-lg font-semibold text-gray-800 max-sm:text-sm">
          3 Tempat di Madinah yang tidak boleh kamu lewatkan jika berkunjung
        </h3>
        <h3 className="text-xs font-medium text-gray-700">
          Selasa,3 Juni 2025
        </h3>
      </div>
    </>
  );
};
