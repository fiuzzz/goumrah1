import React, { useState } from "react";
import jamaahImage from "../../assets/jamaah.png";
import logoImage from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { RxHamburgerMenu } from "react-icons/rx";

// Komponen Utama
export const ToRegistration = () => {
  const [activeTab, setActiveTab] = useState("Daftar Jamaah");
  const [activeFormJamah, setActiveFormJamah] = useState(false);
  const [activeFormTravel, setActiveFormTravel] = useState(false);
  const navigate = useNavigate();

  function LoginFormTravel() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    return (
      <>
        <div
          onClick={() => {
            setActiveFormTravel(false);
          }}
          className={`fixed flex h-screen w-screen items-center justify-center bg-black/80`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="justify-cente flex items-center rounded-lg"
          >
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-sm space-y-4 rounded-lg bg-white p-6 shadow-md"
            >
              <h2 className="text-center text-xl font-semibold">
                Masuk Sebagai Travel
              </h2>

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-md border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-md border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />

              <button
                type="submit"
                className="bg-primary w-full rounded-md p-2 text-white"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }

  const TravelContent = () => (
    <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
      <div className="mt-4 w-full text-center lg:mt-0 lg:basis-1/2 lg:text-left">
        <h1 className="mb-4 text-3xl font-bold">
          Kelola Jamaah Haji & Umrah <br className="max-md:hidden"></br> Lebih
          Mudah Dan Efisien
        </h1>
        <p className="mb-6 text-lg text-gray-700">
          Nikmati kemudahan mengelola jamaah haji dan umrah dengan sistem
          manajemen modern yang cepat, aman. Data tersimpan rapi, proses
          terpantau jelas, dan layanan Anda jadi semakin profesional.
        </p>
        <div className="flex w-full justify-center gap-4 lg:justify-start">
          <button className="bg-primary rounded px-4 py-2 text-lg text-white">
            Daftar
          </button>
          <button
            onClick={() => {
              setActiveFormTravel(true);
            }}
            className="rounded bg-[#b3d783] px-4 py-2 font-semibold text-green-900 transition-colors hover:bg-[#9fc973]"
          >
            Masuk
          </button>
        </div>
      </div>
      <div className="mt-8 flex w-full justify-center lg:basis-1/2">
        <img
          src={""}
          alt="Photo Dashboard"
          className="aspect-square w-2/4 rounded-xl object-cover shadow-lg"
        />
      </div>
    </div>
  );

  function LoginFormJamaah() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    return (
      <>
        <div
          onClick={() => {
            setActiveFormJamah(false);
          }}
          className={`fixed flex h-screen w-screen items-center justify-center bg-black/80`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="justify-cente flex items-center rounded-lg"
          >
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-sm space-y-4 rounded-lg bg-white p-6 shadow-md"
            >
              <h2 className="text-center text-xl font-semibold">
                Masuk Sebagai Jamaah
              </h2>

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-md border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-md border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />

              <button
                type="submit"
                className="bg-primary w-full rounded-md p-2 text-white"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }

  const JamaahContent = () => (
    <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
      <div className="mt-4 w-full text-center lg:mt-0 lg:basis-1/2 lg:text-left">
        <h1 className="mb-4 text-3xl font-bold">
          Daftar Haji & Umrah jadi <br className="max-md:hidden" /> Lebih Mudah
          Dan Nyaman
        </h1>
        <p className="mb-6 text-lg text-gray-700">
          Nikmati kemudahan pendaftaran haji dan umrah dengan sistem modern yang
          cepat, dan aman. Data Anda terkelola dengan rapi, dan layanan terbaik
          siap menyertai setiap langkah Anda.
        </p>
        <div className="flex w-full justify-center gap-4 lg:justify-start">
          <button className="bg-primary hover:bg-primary-dark rounded-sm px-4 py-2 text-lg text-white transition-colors">
            Daftar
          </button>
          <button
            onClick={() => {
              setActiveFormJamah(true);
            }}
            className="rounded-sm bg-[#b3d783] px-4 py-2 font-semibold text-green-900 transition-colors hover:bg-[#9fc973]"
          >
            Masuk
          </button>
        </div>
      </div>
      <div className="mt-8 flex w-full items-center justify-center lg:basis-1/2">
        <img
          src={jamaahImage}
          alt="Jamaah Umrah"
          className="aspect-square h-auto w-2/4 rounded-xl object-cover shadow-lg max-lg:w-4/5"
        />
      </div>
    </div>
  );

  // Data Tabs
  const tabs = [
    { name: "Beranda" },
    { name: "Daftar Travel", content: <TravelContent /> },
    { name: "Daftar Jamaah", content: <JamaahContent /> },
  ];

  function BurgerbarToRegister() {
    return (
      <Menu as="div" className="relative md:hidden">
        <div>
          <MenuButton className="bg-gradient rounded-full p-1 lg:hidden">
            <RxHamburgerMenu size={22} color="white" />
          </MenuButton>
        </div>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right overflow-visible rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
        >
          <div className="py-1">
            {tabs.map((tab) => (
              <MenuItem>
                <button
                  key={tab.name}
                  onClick={() =>
                    tab?.name === "Beranda"
                      ? navigate("../")
                      : setActiveTab(tab?.name)
                  }
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  {tab.name}
                </button>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
    );
  }

  return (
    <>
      <div className="relative z-10">
        {activeFormJamah === true && (
          <div>
            <LoginFormJamaah />
          </div>
        )}
      </div>
      <div className="relative z-10">
        {activeFormTravel === true && (
          <div>
            <LoginFormTravel />
          </div>
        )}
      </div>
      <div className="m-auto flex min-h-screen max-w-11/12 flex-col px-4">
        {/* Header */}
        <div className="mt-10 mb-8 flex flex-row items-center justify-between gap-4">
          <div className="flex">
            <img src={logoImage} className="h-11" alt="Logo GoUmrah" />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() =>
                  tab?.name === "Beranda"
                    ? navigate("../")
                    : setActiveTab(tab?.name)
                }
                className={`flex cursor-pointer items-center gap-2 rounded-sm px-4 py-2 transition-colors max-md:hidden ${
                  activeTab === tab.name
                    ? "bg-[#b3d783] font-semibold text-green-800"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab.name}
              </button>
            ))}
            <BurgerbarToRegister></BurgerbarToRegister>
          </div>
        </div>
        <div className="w-full rounded-lg bg-white p-6 shadow-sm">
          {/* Konten Utama */}
          <div className="mx-auto flex w-full items-center justify-center py-8">
            {tabs.find((tab) => tab.name === activeTab)?.content}
          </div>
        </div>
      </div>
    </>
  );
};
