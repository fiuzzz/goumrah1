import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useState } from "react";
import { LuFilter } from "react-icons/lu";
import ReactSlider from "react-slider";
export function Filter({someRef}) {
  const [price, setPrice] = useState([30000000, 90000000]);
  
  const coba = () => {
    alert("Umrah");
  }
  return (
    <Menu as="div" className="relative rounded-b-full">
      <div>
        <MenuButton className="flex gap-2 p-1 lg:hidden" onClick={someRef}>
          <h2 className="text-primary">Filter</h2>
          <div className="flex items-center">
            <LuFilter className="text-primary" />
          </div>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-20 mt-2 w-56 origin-top-right overflow-visible rounded-md bg-white shadow-lg   data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in max-lg:w-[70vw] max-sm:w-[90vw]"
      >
        <div className="py-1">
          <MenuItem>
            <button className="block w-full px-4 py-2 text-start text-sm text-gray-700 ">
              Haji
            </button>
          </MenuItem>
          <MenuItem>
            <button
              onClick={coba}
              className="block w-full px-4 py-2 text-start text-sm text-gray-700 "
            >
              Umrah
            </button>
          </MenuItem>
          {/* Filter by Price */}
          <div className="block w-full px-4 py-2 text-start text-sm">
            <h3 className="mb-2 font-semibold">Filter by Price</h3>
            <p className="mb-2">
              Rp.{price[0].toLocaleString()} - Rp.{price[1].toLocaleString()}
            </p>

            <ReactSlider
              className="h-2 mb-4 w-full rounded bg-gray-200"
              thumbClassName="w-5 h-5 bg-gradient rounded-full cursor-pointer"
              trackClassName=" h-2 rounded"
              min={30000000}
              max={90000000}
              step={1000000}
              value={price}
              onChange={(newPrice) => {
                setPrice(newPrice);
              }}
              pearling
              minDistance={5000000}
            />
            <button className="text-primary mt-2 text-sm font-medium hover:underline">
              → FILTER
            </button>
          </div>
        </div>
      </MenuItems>
    </Menu>
  );
}

export function FilterBlog({ someRef }) {
  const coba = () => {
    alert("Umrah");
  };
  return (
    <Menu as="div" className="relative lg:hidden basis-full rounded-b-full">
      <div className="flex justify-center" >
        <MenuButton className="flex gap-2 p-1 lg:hidden" onClick={someRef}>
          <h2 className="text-primary">Filter</h2>
          <div className="flex items-center">
            <LuFilter className="text-primary" />
          </div>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-20 mt-2 w-56 origin-top-right overflow-visible rounded-md bg-white shadow-lg data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in max-lg:w-[70vw] max-sm:w-[90vw]"
      >
        <div className="py-1">
          <MenuItem>
            <button className="block w-full px-4 py-2 text-start text-sm text-gray-700">
              Haji
            </button>
          </MenuItem>
          <MenuItem>
            <button
              onClick={coba}
              className="block w-full px-4 py-2 text-start text-sm text-gray-700"
            >
              Umrah
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
