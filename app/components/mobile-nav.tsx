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
            activeSection === "home" ? "border-b-2 border-blue-600" : ""
          }`}
          onClick={() => handleLinkClick("home")}
        >
          <Link href={"/"}>Home</Link>
        </li>
        <li
          className={`py-4 ${
            activeSection === "about" ? "border-b-2 border-blue-600" : ""
          }`}
          onClick={() => handleLinkClick("about")}
        >
          <Link href={"#about"}>About</Link>
        </li>
        <li
          className={`py-4 ${
            activeSection === "projects" ? "border-b-2 border-blue-600" : ""
          }`}
          onClick={() => handleLinkClick("projects")}
        >
          <Link href={"#projects"}>Projects</Link>
        </li>
        <li
          className={`py-4 ${
            activeSection === "contact" ? "border-b-2 border-blue-600" : ""
          }`}
          onClick={() => handleLinkClick("contact")}
        >
          <Link href={"#contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
