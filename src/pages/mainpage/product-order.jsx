import { useState } from "react";
import { FaUser, FaUserPlus } from "react-icons/fa";
import logoImage from "../../assets/logo.png";

export const ProductOrder = () => {
  const [jamaahList, setJamaahList] = useState([
    {
      namaLengkap: "",
      nomorKTP: "",
      tempatLahir: "",
      tanggalLahir: "",
      nomorHP: "",
      alamat: "",
      jenisProduk: "",
      kontakDaruratNomor: "",
      kontakDaruratNama: "",
      hubunganDarurat: "",
      punyaPaspor: "",
    },
  ]);

  const handleTambahJamaah = () => {
    setJamaahList((prev) => [
      ...prev,
      {
        namaLengkap: "",
        nomorKTP: "",
        tempatLahir: "",
        tanggalLahir: "",
        nomorHP: "",
        alamat: "",
        jenisProduk: "",
        kontakDaruratNomor: "",
        kontakDaruratNama: "",
        hubunganDarurat: "",
        punyaPaspor: "",
      },
    ]);
  };

  const handleChangeJamaah = (index, e) => {
    const { name, value } = e.target;
    const newList = [...jamaahList];
    newList[index][name] = value;
    setJamaahList(newList);
  };

  const handleSubmit = () => {
    console.log("Data Jamaah:", jamaahList);
    alert("Data jamaah berhasil dikirim! (cek console)");
  };

  return (
    <div className="m-auto flex min-h-screen max-w-[1064px] flex-col px-4">
      {/* Header */}
      <div className="mt-10 mb-8 flex flex-row items-center justify-between gap-4">
        <div className="flex">
          <img src={logoImage} className="h-11" alt="Logo GoUmrah" />
        </div>
      </div>

      <div className="flex w-full flex-row gap-10 rounded-lg py-8">
        <div className="w-80 py-8">
          <div className="relative h-auto w-full overflow-hidden bg-white p-2 max-sm:h-auto">
            {/* Label Umrah */}

            <div
              className={`bg-primary absolute top-4 left-4 z-10 mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold text-white`}
            >
              Umrah
            </div>

            <div className="relative flex h-auto w-full items-center justify-center rounded-lg bg-gray-200">
              <img className="aspect-square w-full" src={`/image.png`} alt="" />
            </div>

            <h3 className="mt-1 line-clamp-1 text-lg font-semibold text-gray-800 max-sm:line-clamp-2 max-sm:text-sm">
              Produk Umrah Reguller
            </h3>

            <div className="flex items-center gap-1">
              <h3></h3>
              <h3 className="text-gray-700"></h3>
            </div>
            <div className="mb-1 flex items-center gap-1">
              <h3></h3>
              <h3 className="text-gray-700"></h3>
            </div>
            <div className="flex justify-between">
              <h3 className="text-primary text-lg font-medium max-sm:text-sm"></h3>
              <h3 className="text-sm font-medium text-gray-700 max-lg:hidden"></h3>
            </div>
            <hr className="text-gray-300" />
            <h3 className="mt-1 line-clamp-1 text-sm text-gray-700 max-sm:text-xs"></h3>
          </div>
        </div>
        <div className="flex w-full flex-col py-8">
          <h2 className="mb-4 text-2xl font-bold">Pemesanan</h2>

          <div className="w-full space-y-6">
            <div className="rounded-lg border border-gray-300">
              <div className="m-6 space-y-10">
                {jamaahList.map((jamaah, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex flex-row items-center gap-2">
                      <div className="bg-primary flex items-center justify-center rounded-sm p-2">
                        <FaUser size={18} className="text-white" />
                      </div>
                      <h2 className="font-semibold">Jamaah {index + 1}</h2>
                    </div>
                    {index === 0 && (
                      <div className="flex flex-row justify-between">
                        <span className="text-gray-700">
                          *Apakah data sesuai dengan profile?
                        </span>
                        <button className="bg-primary flex flex-row items-center gap-2 rounded-sm px-3 py-1">
                          <p className="text-sm text-white">Iya</p>
                        </button>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        name="namaLengkap"
                        value={jamaah.namaLengkap}
                        onChange={(e) => handleChangeJamaah(index, e)}
                        className="w-full border-b-2 border-gray-300 px-4 py-2 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Nomor KTP
                      </label>
                      <input
                        type="text"
                        name="nomorKTP"
                        value={jamaah.nomorKTP}
                        onChange={(e) => handleChangeJamaah(index, e)}
                        className="w-full border-b-2 border-gray-300 px-4 py-2 focus:outline-none"
                      />
                    </div>

                    <div className="grid w-full grid-cols-2 gap-10">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Tempat Lahir
                        </label>
                        <input
                          type="text"
                          name="tempatLahir"
                          value={jamaah.tempatLahir}
                          onChange={(e) => handleChangeJamaah(index, e)}
                          className="w-full border-b-2 border-gray-300 px-4 py-2 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Tanggal Lahir
                        </label>
                        <input
                          type="date"
                          name="tanggalLahir"
                          value={jamaah.tanggalLahir}
                          onChange={(e) => handleChangeJamaah(index, e)}
                          className="w-full border-b-2 border-gray-300 px-4 py-2 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Nomor HP
                      </label>
                      <input
                        type="text"
                        name="nomorHP"
                        value={jamaah.nomorHP}
                        onChange={(e) => handleChangeJamaah(index, e)}
                        className="w-full border-b-2 border-gray-300 px-4 py-2 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Alamat
                      </label>
                      <input
                        type="text"
                        name="alamat"
                        value={jamaah.alamat}
                        onChange={(e) => handleChangeJamaah(index, e)}
                        className="w-full border-b-2 border-gray-300 px-4 py-2 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Jenis Produk
                      </label>
                      <select
                        name="jenisProduk"
                        value={jamaah.jenisProduk}
                        onChange={(e) => handleChangeJamaah(index, e)}
                        className="w-full border-b-2 border-gray-300 px-4 py-2 text-gray-700 focus:outline-none"
                      >
                        <option value="">Pilih Produk</option>
                        <option value="quad">1 Kamar 4 Orang (QUAD)</option>
                        <option value="triple">1 Kamar 3 Orang (TRIPLE)</option>
                        <option value="double">1 Kamar 2 Orang (DOUBLE)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Nomor Kontak Darurat
                      </label>
                      <input
                        type="text"
                        name="kontakDaruratNomor"
                        value={jamaah.kontakDaruratNomor}
                        onChange={(e) => handleChangeJamaah(index, e)}
                        className="w-full border-b-2 border-gray-300 px-4 py-2 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Nama Kontak Darurat
                      </label>
                      <input
                        type="text"
                        name="kontakDaruratNama"
                        value={jamaah.kontakDaruratNama}
                        onChange={(e) => handleChangeJamaah(index, e)}
                        className="w-full border-b-2 border-gray-300 px-4 py-2 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Hubungan Dengan Jamaah
                      </label>
                      <input
                        type="text"
                        name="hubunganDarurat"
                        value={jamaah.hubunganDarurat}
                        onChange={(e) => handleChangeJamaah(index, e)}
                        className="w-full border-b-2 border-gray-300 px-4 py-2 focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-row items-center justify-between rounded-lg border border-gray-300">
                      <p className="px-4 text-sm font-medium text-gray-700">
                        Sudah Punya Paspor
                      </p>
                      <div className="flex flex-row">
                        <label className="flex flex-row justify-between gap-2 p-6">
                          <p className="block text-sm font-medium text-gray-700">
                            iya
                          </p>
                          <input
                            type="radio"
                            name={`punyaPaspor_${index}`}
                            value="iya"
                            checked={jamaah.punyaPaspor === "iya"}
                            onChange={(e) =>
                              handleChangeJamaah(index, {
                                target: { name: "punyaPaspor", value: "iya" },
                              })
                            }
                          />
                        </label>
                        <label className="flex flex-row justify-between gap-2 p-6">
                          <p className="block text-sm font-medium text-gray-700">
                            tidak
                          </p>
                          <input
                            type="radio"
                            name={`punyaPaspor_${index}`}
                            value="tidak"
                            checked={jamaah.punyaPaspor === "tidak"}
                            onChange={(e) =>
                              handleChangeJamaah(index, {
                                target: { name: "punyaPaspor", value: "tidak" },
                              })
                            }
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  onClick={handleTambahJamaah}
                  className="bg-primary focus:outline-none mt-4 flex flex-row items-center gap-2 rounded-sm px-3 py-1"
                >
                  <FaUserPlus size={18} className="text-white" />
                  <p className="text-white">Tambah Jamaah</p>
                </button>
              </div>
            </div>

            <div className="rounded-lg border border-gray-300 focus:outline-none">
              <div className="flex flex-row items-center justify-between p-6">
                <p className="block text-sm font-medium text-gray-700">
                  Total Pembiayaan
                </p>
                <p className="text-primary px-4 py-2 font-bold">
                  RP.30.000.000
                </p>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="bg-primary rounded-lg px-4 py-2 text-white"
            >
              Pesan Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
