import { useState } from "react";
import logoImage from "../../../assets/logo.png";
import axios from "axios";

export default function RegistrationJamaah() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [activeBank, setActiveBank] = useState("");

  const userDataStep1 = {
    email: email,
  };

  const registerUserStep1 = async (userDataStep1) => {
    try {
      const response = await axios.post(
        "http://192.168.100.106:5000/api/auth/register/send-otp",
        userDataStep1,
      );
    } catch (error) {
      console.error(
        "Error registering user:",
        error.response ? error.response.data : error.message,
      );
    }
  };

  const registerUserStep2 = async (code) => {
    try {
      const response = await axios.post(
        "http://192.168.100.106:5000/api/auth/register/complete",
        code,
      );
    } catch (error) {
      console.error(
        "Error registering user:",
        error.response ? error.response.data : error.message,
      );
    }
  };
  const handleSendCode = async () => {
    try {
      const success = await registerUserStep1(userDataStep1);
      setIsCodeSent(true);
      setStep(2);
    } catch (err) {
      console.log(err);
    }
  };

  const handleVerifyCode = async () => {
    if (code.length === 6) {
      const success = await registerUserStep2(code)
      setIsCodeVerified(true);
      setStep(3);
    }
  };

  const handleRegister = () => {
    alert("Registrasi berhasil!");
    setStep(4);
  };

  const handleBank = (e) => {
    if (e.target.value === "on") {
      setActiveBank("on");
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
        </div>

        <div className="w-full rounded-lg bg-white p-6">
          <div className="mx-auto flex w-full flex-col py-8">
            <h2 className="mb-4 text-2xl font-bold">Registration</h2>
            <p className="mb-8 text-gray-600">
              Fill in the registration data. It will take a couple of minutes.
              All you need is a phone number and e-mail
            </p>

            {/* Step 1: Email Input */}
            {step === 1 && (
              <div className="w-full space-y-6">
                <div className="rounded-lg border border-gray-300">
                  <div className="m-6 space-y-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Enter your email
                    </label>
                    <input
                      type="email"
                      className="w-full border-b-2 border-gray-300 px-4 py-2"
                      placeholder="your@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  onClick={handleSendCode}
                  className="rounded-lg border border-gray-300 px-4 py-2"
                >
                  Send Code
                </button>
              </div>
            )}

            {/* Step 2: Verify Code */}
            {step === 2 && (
              <div className="w-full space-y-6">
                <div className="rounded-md border border-gray-200 p-4 text-sm text-gray-800">
                  <div className="flex items-center justify-between">
                    <span>{email}</span>
                    <button
                      onClick={handleVerifyCode}
                      className="text-sm text-blue-600 underline"
                    >
                      Edit
                    </button>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Number not confirmed yet
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Confirmation code
                  </label>
                  <input
                    type="text"
                    className="w-full border-b-1 border-gray-300 px-4 py-2"
                    placeholder="----"
                    maxLength={6}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                  <div>{ }</div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Confirm email with code from message</span>
                    <button className="text-green-600 hover:underline">
                      Send again
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleVerifyCode}
                  className="rounded-md border border-gray-300 px-4 py-2"
                >
                  Confirm
                </button>
              </div>
            )}

            {/* Step 3: Phone + Password */}
            {step === 3 && (
              <div className="w-full space-y-6">
                <div className="rounded-lg border border-gray-300 p-4 text-sm text-gray-800">
                  <p className="font-medium text-green-600">{email}</p>
                  <p className="text-xs text-gray-500">Email confirmed</p>
                </div>

                <div className="rounded-lg border border-gray-300">
                  <div className="m-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Enter your phone number
                      </label>
                      <input
                        type="tel"
                        className="w-full border-b-1 border-gray-300 px-4 py-2"
                        placeholder="+62 812-3456-7890"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Set a password
                      </label>
                      <input
                        type="password"
                        className="w-full border-b-1 border-gray-300 px-4 py-2"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <p className="text-xs text-green-600">
                        {password.length >= 6
                          ? "Good password"
                          : "Minimum 6 characters"}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleRegister}
                  className="rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                >
                  Register Now
                </button>
              </div>
            )}

            {step === 4 && (
              <div className="w-full space-y-6">
                <div className="rounded-lg border border-gray-300">
                  <div className="m-6 space-y-4">
                    <div>
                      <h2 className="font-semibold">Personal Data</h2>
                      <span className="text-gray-700">
                        Isi sesuai dengan informasi asli anda{" "}
                      </span>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        className="w-full border-b-2 border-gray-300 px-4 py-2 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Nomor KTP
                      </label>
                      <input
                        type="text"
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
                          className="w-full border-b-2 border-gray-300 px-4 py-2 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Tanggal Lahir
                        </label>
                        <input
                          type="date"
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
                        className="w-full border-b-2 border-gray-300 px-4 py-2 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border border-gray-300 focus:outline-none">
                  <label
                    htmlFor="personal"
                    className="flex flex-row justify-between p-6"
                  >
                    <p className="block text-sm font-medium text-gray-700">
                      Pembiayaan Personal
                    </p>
                    <input
                      type="radio"
                      className="border-b-2 border-gray-300 px-4 py-2 focus:outline-none"
                      name="pembiayaan"
                      id="personal"
                      onChange={(e) => {
                        setActiveBank("of");
                      }}
                    />
                  </label>
                </div>
                <div className="rounded-lg border border-gray-300">
                  <label
                    htmlFor="bank"
                    className="flex flex-row justify-between p-6"
                  >
                    <p className="block text-sm font-medium text-gray-700">
                      Pembiayaan Bank
                    </p>
                    <input
                      id="bank"
                      type="radio"
                      className="border-b-2 border-gray-300 px-4 py-2"
                      name="pembiayaan"
                      onChange={(e) => {
                        setActiveBank(e.target.value);
                      }}
                    />
                  </label>
                </div>
                <div>
                  <div>
                    <span className="text-red-700">*</span>
                    <span className="text-gray-700">
                      Catatan kami hanya bekerja sama dengan 3 bank
                    </span>
                  </div>
                </div>
                {
                  <div className={activeBank === "on" ? "" : "hidden"}>
                    <label className="block text-sm font-medium text-gray-700">
                      Pilih bank
                    </label>
                    <select className="w-full border-b-2 border-gray-300 px-4 py-2 text-gray-700 focus:outline-none">
                      <option value="" className="text-gray-700">
                        Pilih Bank
                      </option>
                      <option value="" className="text-gray-700">
                        BSI
                      </option>
                      <option value="" className="text-gray-700">
                        BRI
                      </option>
                      <option value="" className="text-gray-700">
                        BPD
                      </option>
                    </select>
                  </div>
                }
                <button
                  onClick={handleSendCode}
                  className="rounded-lg border border-gray-300 px-4 py-2"
                >
                  Go Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
