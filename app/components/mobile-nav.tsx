import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

const MobileNav = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleLinkClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="flex flex-col items-center space-y-6 sm:hidden">
      <ul className="text-md Aliyan-Dev">
        <li
          className={`py-4 ${
            activeSection === "home" ? "border-b-4 border-blue-600" : ""
          } transition-all duration-300 ease-in-out`}
          onClick={() => handleLinkClick("home")}
        >
          <Link href={"/"} className="hover:text-blue-600">
            Home
          </Link>
        </li>
        <li
          className={`py-4 ${
            activeSection === "about" ? "border-b-4 border-blue-600" : ""
          } transition-all duration-300 ease-in-out`}
          onClick={() => handleLinkClick("about")}
        >
          <Link href={"/about"} className="hover:text-blue-600">
            About
          </Link>
        </li>
        <li
          className={`py-4 ${
            activeSection === "projects" ? "border-b-4 border-blue-600" : ""
          } transition-all duration-300 ease-in-out`}
          onClick={() => handleLinkClick("projects")}
        >
          <Link href={"/projects"} className="hover:text-blue-600">
            Projects
          </Link>
        </li>
        <li
          className={`py-4 ${
            activeSection === "contact" ? "border-b-4 border-blue-600" : ""
          } transition-all duration-300 ease-in-out`}
          onClick={() => handleLinkClick("contact")}
        >
          <Link href={"/contact"} className="hover:text-blue-600">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
