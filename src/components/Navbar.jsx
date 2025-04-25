import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Close menu when clicking outside, excluding hamburger button
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Close menu on navigation
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/About", label: "About Us" },
    { path: "/Contact", label: "Contact" },
  ];

  const handleHamburgerClick = () => {
    setMenuOpen((prev) => !prev); // Toggle based on previous state
  };

  const handleMenuItemClick = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="p-4 text-primary-foreground fixed top-0 left-0 w-full z-50">
      <div className="container flex h-14 mx-auto md:justify-between">
        {/* Logo */}
        <div className="flex items-center p-2">
          <Link to="/" className="cursor-pointer text-lg font-bold">
            <img
              src={
                isHomePage
                  ? "/assets/images/Logo.png"
                  : "/assets/images/Logo(Black).png"
              }
              alt="Loan Site"
              className="h-24 w-auto"
            />
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          ref={hamburgerRef}
          className={`block md:hidden p-4 z-50 ml-auto mr-4 ${
            isHomePage ? "text-secondary-foreground" : "text-secondary"
          }`}
          onClick={handleHamburgerClick}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30"
              height="30"
              className="fill-current"
            >
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="20"
              viewBox="0 0 26 20"
              fill={isHomePage ? "#e40013" : "currentColor"}
            >
              <path d="M0 1.11111C0 0.5 0.4875 0 1.08333 0H19.5C20.0958 0 20.5833 0.5 20.5833 1.11111C20.5833 1.72222 20.0958 2.22222 19.5 2.22222H1.08333C0.4875 2.22222 0 1.72222 0 1.11111ZM19.5 17.7778H1.08333C0.4875 17.7778 0 18.2778 0 18.8889C0 19.5 0.4875 20 1.08333 20H19.5C20.0958 20 20.5833 19.5 20.5833 18.8889C20.5833 18.2778 20.0958 17.7778 19.5 17.7778ZM24.9167 8.88889H6.5C5.90417 8.88889 5.41667 9.38889 5.41667 10C5.41667 10.6111 5.90417 11.1111 6.5 11.1111H24.9167C25.5125 11.1111 26 10.6111 26 10C26 9.38889 25.5125 8.88889 24.9167 8.88889Z"></path>
            </svg>
          )}
        </button>

        {/* Navigation Menu */}
        <ul
          ref={menuRef}
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row md:items-stretch space-y-3 md:space-y-0 md:space-x-3 absolute md:static top-24 left-0 w-full md:w-auto bg-primary md:bg-secondary md:rounded-2xl md:text-primary-foreground md:top-5 p-4 md:p-0`}
        >
          {menuItems.map((item) => (
            <li key={item.path} className="flex">
              <Link
                to={item.path}
                className="block w-full px-4 py-4 cursor-pointer font-semibold"
                onClick={() => handleMenuItemClick(item.path)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <NavigationMenu>
            <NavigationMenuList>
              
            </NavigationMenuList>
          </NavigationMenu>
        </ul>

        <Link >
          <Button className="md:flex hidden bg-primary text-secondary cursor-pointer">
            Get Loan Now!
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;