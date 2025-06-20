import { Layout } from "../../components/layout/Layout";
import { CardBlog } from "../../components/card/Card";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FilterBlog } from "../../components/filter/Filter";

export const GridCardWrapper = () => {
  const [breakpoint, setBreakpoint] = useState("mobile");
  const [currentPage, setCurrentPage] = useState(1);
  const topRef = useRef(null);
  // Data contoh - bisa diganti dengan data dari API
  const allCards = Array.from({ length: 100 });

  // Deteksi breakpoint
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setBreakpoint("desktop");
      } else if (width >= 768) {
        setBreakpoint("tablet");
      } else {
        setBreakpoint("mobile");
      }
    };

    // Set initial breakpoint
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Tentukan jumlah card per halaman berdasarkan breakpoint
  const getCardsPerPage = () => {
    switch (breakpoint) {
      case "desktop":
        return 8;
      case "tablet":
        return 6;
      default:
        return 12;
    }
  };

  // Hitung pagination
  const cardsPerPage = getCardsPerPage();
  const totalPages = Math.ceil(allCards.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = allCards.slice(indexOfFirstCard, indexOfLastCard);

  // Fungsi navigasi halaman
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      topRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toTopPage = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = breakpoint === "mobile" ? 1 : 3;

    let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
    let endPage = startPage + maxVisiblePages - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    // Tombol pertama dan ellipsis jika perlu
    if (startPage > 1) {
      pageNumbers.push(
        <button
          key={1}
          onClick={() => goToPage(1)}
          className={`rounded px-3 py-1 ${currentPage === 1 ? "border-1 border-[#D9D9D9]" : "border-1 border-[#D9D9D9]"}`}
        >
          1
        </button>,
      );

      if (startPage > 2) {
        pageNumbers.push(
          <span key="left-ellipsis" className="px-2">
            ...
          </span>,
        );
      }
    }

    // Nomor halaman utama
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={`rounded px-3 py-1 ${currentPage === i ? "mx-1 scale-125 border-1 border-[#D9D9D9]" : "border-1 border-[#D9D9D9]"}`}
        >
          {i}
        </button>,
      );
    }

    // Tombol terakhir dan ellipsis jika perlu
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(
          <span key="right-ellipsis" className="px-2">
            ...
          </span>,
        );
      }

      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => goToPage(totalPages)}
          className={`rounded px-3 py-1 ${currentPage === totalPages ? "border-1 border-[#D9D9D9]" : "border-1 border-[#D9D9D9]"}`}
        >
          {totalPages}
        </button>,
      );
    }

    return pageNumbers;
  };

  return (
    <div className="space-y-10" ref={topRef}>
      <div className="flex w-full justify-center gap-4">
        <button className="bg-primary rounded-sm px-4 py-2 text-white max-lg:hidden">
          All
        </button>
        <button className="rounded-sm bg-gray-500 px-4 py-2 text-white max-lg:hidden">
          Umrah
        </button>
        <button className="rounded-sm bg-gray-500 px-4 py-2 text-white max-lg:hidden">
          Haji
        </button>
        <button className="rounded-sm bg-gray-500 px-4 py-2 text-white max-lg:hidden">
          Travel
        </button>
        <button className="rounded-sm bg-gray-500 px-4 py-2 text-white max-lg:hidden">
          Perjalanan
        </button>
        <FilterBlog someRef={toTopPage}></FilterBlog>
      </div>
      <div className="grid gap-4 max-sm:grid-cols-1 max-sm:gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {currentCards.map((card) => (
          <CardBlog />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="cursor-pointer rounded-full"
            >
              <IoIosArrowBack
                className="bg-gradient h-full w-full rounded-full p-3"
                color="white"
              />
            </button>

            <div className="flex gap-1">{renderPageNumbers()}</div>

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="cursor-pointer rounded-full"
            >
              <IoIosArrowForward
                className="bg-gradient h-full w-full rounded-full p-3"
                color="white"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const Blog = () => {
  return (
    <>
      <Layout page="Blog">
        <div>
          <GridCardWrapper></GridCardWrapper>
        </div>
      </Layout>
    </>
  );
};
