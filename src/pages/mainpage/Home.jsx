import { Card } from "../../components/card/Card";
import { useEffect, useRef, useState } from "react";
import { LayoutHome } from "../../components/layout/Layout";
import logo from "../../assets/logo-remove-bg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";
const UmrahSection = () => {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2">
      <div>
        <h2 className="mb-4 font-bold max-lg:text-2xl lg:text-3xl">
          Goumrah - Pilihan Terbaik
        </h2>
        <p className="mb-4 text-gray-700 max-lg:text-lg lg:text-xl">
          Percayakan perjalanan suci Anda kepada GoUmrah perjalanan umrah
          terpercaya mengutamakan kenyamanan, bimbingan spiritual, dan pelayanan
          terbaik. Dengan tim profesional dan berpengalaman dan fasilitas
          terbaik, kami hadir untuk menemani langkah Anda menuju Tanah Suci
          dengan tenang.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-gray-700 max-lg:text-lg lg:text-xl">
          <li>Pelayanan Ramah Dan Amanah</li>
          <li>Program Umrah Sesuai Sunnah</li>
          <li>Fasilitas Premium Dan Nyaman</li>
        </ul>
      </div>

      <div className="flex justify-center">
        <div className="bg-gradient-secondary h-96 rounded-lg p-6 shadow-lg max-w-xs">
          <div className="mb-2 flex items-center">
            <img
              src={logo}
              alt="GoUmrah"
              className="h-6 max-lg:h-5 max-md:h-4.5 max-sm:h-4"
            />
          </div>
          <h3 className="mb-6 text-center text-white max-lg:text-xl lg:text-2xl">
            Cari Paket Umrah
          </h3>

          <div className="space-y-6 px-2">
            <select className="w-full rounded-md bg-white p-1.5 text-gray-700 focus:outline-none">
              <option>Tarif/biaya</option>
              <option>Di bawah 20jt</option>
              <option>20-30jt</option>
              <option>Di atas 30jt</option>
            </select>

            <select className="w-full rounded-md bg-white p-1.5 text-gray-700 focus:outline-none">
              <option>Jadwal Keberangkatan</option>
              <option>Juli 2025</option>
              <option>Agustus 2025</option>
              <option>September 2025</option>
            </select>

            <select className="w-full rounded-md bg-white p-1.5 text-gray-700 focus:outline-none">
              <option>Pembiayaan Jamaah</option>
              <option>Lunas</option>
              <option>Cicilan</option>
            </select>

            <button className="w-full rounded-md bg-yellow-400 py-2 font-semibold text-black hover:bg-yellow-500">
              Cari
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export function TestimonialSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const testimonials = [
    {
      name: "Siti Aishah",
      role: "Karyawan Swasta",
      review:
        "Pelayanan di Amoora sangat professional, mulai dari keberangkatan dan kedatangan kembali ke tanah air dilayani dengan sangat baik dan memuaskan para peserta.",
      image: "https://amoora.id/assets_landingPage/img/avatars/1.png",
    },
    {
      name: "Ahmad Yusuf",
      role: "Wiraswasta",
      review: "GoUmrah sangat terpercaya dan profesional. Saya puas sekali!",
      image: "https://amoora.id/assets_landingPage/img/avatars/1.png",
    },
    {
      name: "Hendra Wijaya",
      role: "Pengusaha",
      review: "Hotel sangat dekat dengan Masjidil Haram. Fasilitas terbaik!",
      image: "https://amoora.id/assets_landingPage/img/avatars/1.png",
    },
  ];

  function applySlideOpacity(swiper) {
    const maxDepth = 3;
    const activeIndex = swiper.activeIndex;

    swiper.slides.forEach((slide, index) => {
      const distance = index - activeIndex;
      const absDistance = Math.abs(distance);

      if (absDistance === 0) {
        slide.style.opacity = "1";
      } else if (absDistance === 1) {
        slide.style.opacity = "0.75";
      } else if (absDistance === 2) {
        slide.style.opacity = "0.75";
      } else {
        slide.style.opacity = "0";
      }
    });
  }

  return (
    <div className="flex flex-col gap-8 text-white md:flex-row">
      {/* Left Section */}
      <div className="space-y-4 md:w-1/2">
        <h2 className="font-bold max-lg:text-2xl lg:text-3xl">
          Apa Kata Customer kita?
        </h2>
        <p className="leading-relaxed max-lg:text-lg lg:text-xl">
          Berikut ini adalah respon yang diberikan customer yang telah
          menggunakan GoUmrah sebagai travel layanan Umrah dan Haji mereka.
        </p>
        <div className="mt-10 flex gap-20">
          <div>
            <p className="max-lg:2xl: font-bold lg:text-3xl">13k+</p>
            <p className="max-lg:text-sm lg:text-lg">User people</p>
          </div>
          <div>
            <p className="max-lg:2xl: font-bold lg:text-3xl">5.0</p>
            <p className="max-lg:text-sm lg:text-lg">Overall rating</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center md:w-1/2">
        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards, Navigation, Pagination]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => applySlideOpacity(swiper)}
          onSlideChange={(swiper) => applySlideOpacity(swiper)}
          className="my-swiper h-96 w-full max-w-80"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full flex-col justify-between rounded-lg bg-white p-6 text-gray-800 shadow-lg">
                <div>
                  <h4 className="text-md text-primary mb-8 font-semibold">
                    Professional Harga Bersahabat
                  </h4>
                  <p className="text-lg">"{item.review}"</p>
                </div>
                <div className="mt-4 flex items-center gap-4 border-t pt-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Navigation Buttons */}
        <div className="mt-4 flex gap-8">
          <button ref={prevRef} className="rounded-full text-white">
            &#60;
          </button>
          <button ref={nextRef} className="rounded-full text-white">
            &#62;
          </button>
        </div>
      </div>
    </div>
  );
}

const TabunganSection = () => {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2">
      <div>
        <h2 className="mb-4 font-bold max-lg:text-2xl lg:text-3xl">
          Tabungan Umrah & Haji
        </h2>
        <p className="mb-4 text-gray-700 max-lg:text-lg lg:text-xl">
          Mulailah perjalanan suci Anda bersama Tabungan Haji kami, solusi
          keuangan syariah yang dirancang untuk membantu Anda mewujudkan impian
          ke Tanah Suci. Dengan sistem setoran ringan, perencanaan transparan,
          dan pendampingan spiritual, kami hadir sebagai sahabat setia dalam
          setiap langkah menuju Baitullah, dengan aman, nyaman, dan penuh
          keberkahan.
        </p>
        <p className="list-disc text-gray-700 max-lg:text-lg lg:text-xl">
          Mulai Tabungan Hajimu Sekarang!
        </p>
      </div>
      <div className="flex justify-center">
        <div className="bg-gradient-secondary h-96 rounded-lg p-6 shadow-lg md:w-full lg:w-9/12">
          <div className="mb-8 flex items-center">
            <img
              src={logo}
              alt="GoUmrah"
              className="h-6 max-lg:h-5 max-md:h-4.5 max-sm:h-4"
            />
          </div>
          <div className="px-2">
            <h2 className="mb-4 text-3xl text-white">
              Wujudkan Impian <br></br>Ke Tanah Suci
            </h2>
            <h2 className="mb-12 text-lg text-white">
              Dengan tabungan haji, kamu lebih dekat selangkah menuju Baitullah.
            </h2>

            <button className="w-full rounded-md bg-yellow-400 py-2 font-semibold text-black hover:bg-yellow-500">
              Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};



export const Home = () => {
  const GridCardWrapper = () => {
    const [breakpoint, setBreakpoint] = useState("mobile");
    const [products, setProducts] = useState([]);
    const cards = products;
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/packages/featured",
        );
        setProducts(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    const updateSize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setBreakpoint("desktop");
      } else if (width >= 640) {
        setBreakpoint("tablet");
      } else {
        setBreakpoint("mobile");
      }
    };
    useEffect(() => {
      fetchProducts();

      updateSize(); // run on mount
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }, []);

    // Tentukan berapa card yang ditampilkan
    let displayedCards = [];
    if (breakpoint === "desktop") {
      displayedCards = cards.slice(0, 4);
    } else if (breakpoint === "tablet") {
      displayedCards = cards.slice(0, 3);
    } else {
      displayedCards = cards.slice(0, 4);
    }

    return (
      <div className="grid gap-4 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {displayedCards.map((product, index) => (
          <Card product={product} key={index} />
        ))}
      </div>
    );
  };
  return (
    <>
      <LayoutHome>
        <div className="m-auto max-w-[1064px]">
          <div className="px-4 py-10">
            <UmrahSection></UmrahSection>
          </div>
        </div>
        <div className="m-auto max-w-[1064px]">
          <div className="px-4 py-10">
            <div className="flex flex-col gap-10">
              <h2 className="lg:text-3xl max-lg:text-2xl font-bold">Rekomendasi Produk</h2>
              <GridCardWrapper></GridCardWrapper>
            </div>
          </div>
        </div>
        <div className="bg-primary w-full overflow-hidden">
          <div className="m-auto max-w-[1064px]">
            <div className="px-4 py-10">
              <TestimonialSection></TestimonialSection>
            </div>
          </div>
        </div>
        <div className="m-auto max-w-[1064px]">
          <div className="px-4 py-10">
            <TabunganSection></TabunganSection>
          </div>
        </div>
      </LayoutHome>
    </>
  );
};
