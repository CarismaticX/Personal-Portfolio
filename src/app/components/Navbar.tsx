"use client";

import img from "@/../public/logo.png";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { useState, useEffect } from "react";

import { Link as ScrollLink } from "react-scroll";

const navItems = [
  { label: "About", to: "about" },

  { label: "Experience", to: "experience" },

  { label: "Skills", to: "skills" },

  { label: "Projects", to: "projects" },

  { label: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const [isScrolled, setIsScrolled] =
    useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(
        window.scrollY > 50
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const renderLink = (
    item: {
      label: string;
      to: string;
    },

    isMobile = false
  ) => {
    const isHomePage =
      pathname === "/";

    const baseClasses =
      isMobile
        ? "block cursor-pointer py-3 text-lg font-semibold transition-all duration-300 border-b border-white/5"
        : "cursor-pointer transition-all duration-300 relative group px-2 py-1 text-sm lg:text-base font-medium";

    if (isHomePage) {
      return (
        <ScrollLink
          key={item.to}
          to={item.to}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          activeClass="text-red-500 !font-bold"
          className={`${baseClasses} text-slate-300 hover:text-white`}
          onClick={
            isMobile
              ? () =>
                  setIsMenuOpen(
                    false
                  )
              : undefined
          }
        >
          {item.label}

          {!isMobile && (
            <span className="
            absolute
            -bottom-1
            left-0
            w-0
            h-0.5
            bg-gradient-to-r
            from-red-600
            to-red-900
            transition-all
            duration-300
            group-hover:w-full
            [.text-red-500_&]:w-full
            " />
          )}
        </ScrollLink>
      );
    }

    return (
      <Link
        key={item.to}
        href={`/#${item.to}`}
        className={`${baseClasses} text-slate-300 hover:text-white`}
        onClick={() =>
          isMobile &&
          setIsMenuOpen(
            false
          )
        }
      >
        {item.label}

        {!isMobile && (
          <span className="
          absolute
          -bottom-1
          left-0
          w-0
          h-0.5
          bg-gradient-to-r
          from-red-600
          to-red-900
          transition-all
          duration-300
          group-hover:w-full
          " />
        )}
      </Link>
    );
  };

  return (
    <nav
      className={`sticky top-0 z-[9999] transition-all duration-500 ${
        isScrolled
          ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/10 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="
      container
      flex
      items-center
      justify-between
      mx-auto
      px-4
      lg:px-8
      ">

        <Link
          href="/"
          className="
          transition-transform
          duration-300
          hover:scale-105
          "
        >
          <Image
            src={img}
            alt="Shekhar Singh"
            width={
              isScrolled
                ? 50
                : 60
            }
            height={
              isScrolled
                ? 50
                : 60
            }
            className="
            transition-all
            duration-500
            "
          />
        </Link>

        <div className="
        hidden
        md:flex
        items-center
        space-x-8
        ">
          {navItems.map(
            (item) =>
              renderLink(
                item
              )
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;