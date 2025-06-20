import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
export function Burgerbar() {
  return (
    <Menu as="div" className="relative rounded-b-full">
      <div>
        <MenuButton className="bg-gradient rounded-full p-1 lg:hidden">
          <RxHamburgerMenu size={20} color="white" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right overflow-visible rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <Link
              to={"/daftar"}
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Daftar
            </Link>
          </MenuItem>

          <MenuItem>
            <Link
              to={"/"}
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Beranda
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to={"/produk"}
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Produk
            </Link>
          </MenuItem>

          <MenuItem>
            <Link
              to={"/keranjang"}
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden sm:hidden"
            >
              Keranjang
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to={"/tabungan"}
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Tabungan Umrah & Haji
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to={"/blog"}
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Blog
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to={"/kontak"}
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Kontak
            </Link>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}

