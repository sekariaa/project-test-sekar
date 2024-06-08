"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (href: string) => {
    return pathname === href ? "underline underline-offset-8 decoration-4" : "";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY === 0) {
          setIsAtTop(true);
        } else {
          setIsAtTop(false);
        }

        if (window.scrollY > lastScrollY) {
          setScrollDirection("down");
        } else {
          setScrollDirection("up");
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-transform duration-300 mx-auto max-w-[1640px] ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      } ${
        isAtTop ? "bg-opacity-100" : "bg-opacity-75"
      } bg-orange-500 py-2 px-3 md:px-28 flex items-center justify-between`}
    >
      <Image
        src="/logo-suitmedia.png"
        alt="Logo suitmedia"
        width={100}
        height={100}
        style={{ width: "auto", height: "auto" }}
      />
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleMenu}
        className="text-white md:hidden"
      >
        <MenuIcon />
      </IconButton>
      <ul
        className={`${
          isMenuOpen
            ? "block bg-orange-500/50 h-screen w-screen font-bold text-lg  py-5"
            : "hidden"
        } z-50 absolute md:relative text-white md:py-0 md:space-x-5 md:flex md:flex-row md:items-center md:mt-0 md:w-auto md:h-auto md:top-auto top-14 flex flex-col items-center justify-start gap-5 left-0 right-0`}
      >
        <li>
          <Link href="/work" passHref>
            <button className={`hover:underline-offset-8 ${isActive("/work")}`}>
              Work
            </button>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <button className={`${isActive("/about")}`}>About</button>
          </Link>
        </li>
        <li>
          <Link href="/services" passHref>
            <button className={`${isActive("/services")}`}>Services</button>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <button className={`${isActive("/")}`}>Ideas</button>
          </Link>
        </li>
        <li>
          <Link href="/careers" passHref>
            <button className={`${isActive("/careers")}`}>Careers</button>
          </Link>
        </li>
        <li>
          <Link href="/contact" passHref>
            <button className={`${isActive("/contact")}`}>Contact</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
