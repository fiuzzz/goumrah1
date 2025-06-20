import { FaX } from "react-icons/fa6";
import logoImage from "../../../assets/logo.png";
import { useState } from "react";

export const RegistrationTravel = () => {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };
  return (
    <>
      <div className="m-auto flex min-h-screen max-w-[1064px] flex-col px-4">
        {/* Header */}
        <div className="mt-10 mb-8 flex flex-row items-center justify-between gap-4">
          <div className="flex">
            <img src={logoImage} className="h-11" alt="Logo GoUmrah" />
          </div>
          <div>
            <FaX size={18} className="text-gray-500"></FaX>
          </div>
        </div>

        <div className="w-full rounded-lg bg-white p-6">
          <div className="flex w-full flex-col py-8">
            <h2 className="mb-4 text-2xl font-bold">Registration</h2>

            <div className="w-full space-y-6">
              <div className="rounded-lg border border-gray-300">
                <div className="m-6 space-y-4">
                  <div className="flex items-center gap-10 space-x-6 max-md:flex-col max-md:items-start">
                    {/* Preview logo */}
                    <div className="flex aspect-square w-40 items-center justify-center bg-gray-300 text-lg font-bold text-gray-600">
                      {preview ? (
                        <img
                          src={preview}
                          alt="Logo Preview"
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <span>Logo</span>
                      )}
                    </div>

                    {/* Input file */}
                    <div className="flex w-full flex-col space-y-2">
                      <label
                        htmlFor="logo-upload"
                        className="text-sm font-medium text-gray-700"
                      >
                        Logo Travel
                      </label>
                      <div className="flex w-full max-w-96 items-center overflow-hidden rounded border border-gray-300">
                        <label
                          htmlFor="logo-upload"
                          className="cursor-pointer bg-gray-300 px-4 py-2 text-sm whitespace-nowrap text-gray-700 transition hover:bg-gray-400"
                        >
                          Choose File
                        </label>
                        <input
                          type="file"
                          id="logo-upload"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="px-2 py-2 text-sm text-gray-500 focus:outline-none"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Nama Travel
                    </label>
                    <input
                      type="text"
                      className="w-full border-b-2 border-gray-300 px-4 py-2 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Nama Perusahaan
                    </label>
                    <input
                      type="text"
                      className="w-full border-b-2 border-gray-300 px-4 py-2 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Nomor SK
                    </label>
                    <input
                      type="text"
                      className="w-full border-b-2 border-gray-300 px-4 py-2 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Alamat Kantor
                    </label>
                    <input
                      type="text"
                      className="w-full border-b-2 border-gray-300 px-4 py-2 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Nomor HP
                    </label>
                    <input
                      type="text"
                      className="w-full border-b-2 border-gray-300 px-4 py-2 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full border-b-2 border-gray-300 px-4 py-2 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Katasandi
                    </label>
                    <input
                      type="password"
                      className="w-full border-b-2 border-gray-300 px-4 py-2 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Konfirmasi Katasandi
                    </label>
                    <input
                      type="Password"
                      className="w-full border-b-2 border-gray-300 px-4 py-2 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <button className="bg-primary rounded-lg px-4 py-2 text-white">
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
