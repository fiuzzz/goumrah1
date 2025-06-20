import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import logo from "../../assets/logo.png";
import { IoBagOutline } from "react-icons/io5";
import {Burgerbar} from "../bar/Burgerbar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full max-w-[1064px] basis-full max-sm:mt-5 sm:mt-5 md:mt-6 lg:mt-7">
      {/* Top Bar */}
      <div className="justify-center max-sm:hidden sm:hidden md:flex">
        <div className="bg-gradient mx-[44px] flex w-full max-w-[986px] items-center justify-between rounded-t-full px-4 py-2 text-sm text-white">
          <div className="ms-4 flex items-center gap-4">
            <div className="flex items-center gap-1">
              <FaEnvelope size={12} />
              <span className="text-xs">info@goumrah.net</span>
            </div>
            <div className="items-center gap-1 sm:hidden md:hidden lg:flex">
              <HiLocationMarker size={12} />
              <span className="text-xs">Indonesia</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="items-center gap-1 sm:hidden md:hidden lg:flex">
              <FaPhoneAlt size={12} />
              <span className="text-xs">+62 123-5000</span>
            </div>
            <div className="me-4 flex items-center gap-3">
              <FaTwitter size={12} className="cursor-pointer" />
              <FaFacebookF size={12} className="cursor-pointer" />
              <FaInstagram size={14} className="cursor-pointer" />
              <FaYoutube size={14} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="relative z-10 flex items-center justify-between rounded-t-[10px] bg-white px-8 shadow-md max-sm:rounded-b-[30px] max-sm:py-3 sm:rounded-b-[30px] sm:py-3 md:rounded-b-[46px] lg:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="GoUmrah" className="h-8" />
        </div>

        {/* Nav Links */}
        <nav className="flex gap-6 text-sm font-medium text-gray-700 max-sm:hidden sm:hidden lg:flex">
          <Link to={"/"}>Beranda</Link>
          <Link to={"/produk"}>Produk</Link>
          <Link to={"/tabungan"}>Tabungan Haji & Umrah</Link>
          <Link to={"/blog"}>Blog</Link>
          <Link to={"/kontak"}>Kontak</Link>
        </nav>

        {/* CTA Button */}
        <div className="flex gap-1">
          <div className="flex items-center gap-2 rounded-full px-4 py-2 text-white max-sm:hidden sm:flex">
            <IoBagOutline size={20} className="text-gray-700" />
          </div>
          <div className="flex items-center px-4 py-2 text-white max-sm:px-0">
            <Link to={"/daftar"}>
              <p className="bg-gradient rounded-2xl ps-[12px] pe-[12px] pt-[3px] pb-[3px] max-sm:hidden sm:hidden lg:flex">
                Daftar
              </p>
            </Link>
            <Burgerbar></Burgerbar>
          </div>
        </div>
      </div>
    </header>
  );
}
