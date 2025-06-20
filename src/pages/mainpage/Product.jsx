import { FaSearch } from "react-icons/fa";
import { Card } from "../../components/card/Card";
import { Layout } from "../../components/layout/Layout";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ReactSlider from "react-slider";
import { Filter } from "../../components/filter/Filter";
import axios from "axios";

const GridCardWrapper = ({ categoryId, priceRange, filterTriggered }) => {
  const [breakpoint, setBreakpoint] = useState("mobile");
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const topRefProduct = useRef(null);

  const allCards = products;

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

  const fetchProducts = async () => {
    try {
      const params = new URLSearchParams();
      if (categoryId) params.append("category_id", categoryId);
      if (filterTriggered === true) {
        params.append("min_price", priceRange[0]);
        params.append("max_price", priceRange[1]);
      }
      const response = await axios.get(
        `http://localhost:5000/api/packages?${params.toString()}`,
      );
      setProducts(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
    setTimeout(() => handleResize(), 100);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [categoryId]);
  useEffect(() => {
    if (filterTriggered) {
      fetchProducts();
    }
  }, [filterTriggered]);

  const getCardsPerPage = () => {
    switch (breakpoint) {
      case "desktop":
        return 9;
      case "tablet":
        return 9;
      default:
        return 10;
    }
  };

  const cardsPerPage = getCardsPerPage();
  const totalPages = Math.ceil(allCards.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = allCards.slice(indexOfFirstCard, indexOfLastCard);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      topRefProduct.current?.scrollIntoView({ behavior: "smooth" });
    }
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
    <div className="col-span-3 space-y-10" ref={topRefProduct}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {currentCards.map((card, index) => (
          <Card key={index} />
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

export const Product = () => {
  const [price, setPrice] = useState([30000000, 90000000]);
  const [categoryId, setCategoryId] = useState(null);
  const [filterTriggered, setFilterTriggered] = useState(false);
  const topRefPage = useRef(null);
  const toTopPage = (page) => {
    topRefPage.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Layout page={"Produk"}>
        <div
          className="mb-4 flex w-full max-sm:flex-col max-sm:gap-4 sm:mb-6 lg:hidden"
          ref={topRefPage}
        >
          <div className="m-auto flex w-[75vw]">
            <input
              type="text"
              placeholder="   Search..."
              className="w-full rounded-tl-lg rounded-bl-lg border border-gray-300 ring-black"
            />
            <button
              onClick={toTopPage}
              className="bg-gradient cursor-pointer rounded-tr-lg rounded-br-lg px-4 py-3"
            >
              <FaSearch color="white" stroke="1" />
            </button>
          </div>
          <div className="flex justify-end max-sm:basis-full">
            <Filter someRef={toTopPage} />
          </div>
        </div>
        <div className="grid grid-cols-4 max-lg:grid-cols-3">
          <div className="col-span-1 w-full space-y-6 pe-8 text-sm text-gray-800 max-lg:hidden">
            <div className="flex">
              <input
                type="text"
                placeholder="   Search..."
                className="w-full rounded-tl-lg rounded-bl-lg border border-gray-300"
              />
              <button className="bg-gradient cursor-pointer rounded-tr-lg rounded-br-lg px-4 py-3">
                <FaSearch color="white" stroke="1" />
              </button>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Category</h3>
              <ul className="space-y-1">
                <li>
                  <button
                    onClick={() => setCategoryId(null)}
                    className="text-primary font-medium"
                  >
                    --- Semua (15)
                  </button>
                </li>
                <li>
                  <button onClick={() => setCategoryId(1)}>Haji (08)</button>
                </li>
                <li>
                  <button onClick={() => setCategoryId(2)}>Umroh (08)</button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Product Popular</h3>
              <div className="space-y-4">
                {[
                  { title: "Paket Umroh #1", price: "Rp. 35.000.000" },
                  { title: "Paket Haji #2", price: "Rp. 35.000.000" },
                  { title: "Paket Umroh #3", price: "Rp. 35.000.000" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <img
                      src="https://via.placeholder.com/50"
                      alt={item.title}
                      className="h-12 w-12 rounded object-cover"
                    />
                    <div>
                      <h4 className="text-sm font-medium">{item.title}</h4>
                      <p className="text-primary font-semibold">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-2 font-semibold">Filter by Price</h3>
              <p>
                Rp.{price[0].toLocaleString()} - Rp.{price[1].toLocaleString()}
              </p>
              <ReactSlider
                className="h-2 w-full rounded bg-gray-200"
                thumbClassName="w-4 h-4 bg-gradient rounded-full cursor-pointer"
                trackClassName=" h-2 rounded"
                min={30000000}
                max={90000000}
                step={1000000}
                value={price}
                onChange={(newPrice) => setPrice(newPrice)}
                pearling
                minDistance={5000000}
              />
              <button
                onClick={() => {
                  setFilterTriggered(true);
                }}
                className="text-primary mt-2 text-sm font-medium hover:underline"
              >
                → FILTER
              </button>
            </div>
          </div>
          <GridCardWrapper
            priceRange={price}
            categoryId={categoryId}
            filterTriggered={filterTriggered}
          />
        </div>
      </Layout>
    </>
  );
};
