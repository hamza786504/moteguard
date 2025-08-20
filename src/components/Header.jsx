"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft, FiSearch, FiX } from "react-icons/fi";
import { RiMenu2Line } from "react-icons/ri";
import { IoGlobeOutline } from "react-icons/io5";

const menuData = [
    {
        title: "Company Overview",
        slug: "company",
        subMenu: [
            { title: "Who We Are", slug: "who-we-are" },
            { title: "Our Business", slug: "our-business" },
            { title: "Leadership", slug: "leadership" },
            { title: "Responsibility & Sustainability", slug: "responsibility-and-sustainability" },
            { title: "Ethics & Business Integrity", slug: "ethics-and-business-integrity" },
            { title: "Partners", slug: "partners" },
            { title: "Contract Vehicles", slug: "contract-vehicles" },
            { title: "Global", slug: "global" },
            { title: "History", slug: "history" }
        ]
    },
    {
        title: "Markets",
        slug: "markets",
        subMenu: [
            { title: "Aviation", slug: "aviation" },
            { title: "Defense", slug: "defense" },
            { title: "Energy & Industry", slug: "energy" },
            { title: "Government", slug: "government" },
            { title: "Healthcare", slug: "health" },
            { title: "Homeland Security", slug: "homeland" },
            { title: "Intelligence", slug: "intelligence" },
            { title: "Science", slug: "science" },
            { title: "Space", slug: "space" }
        ]
    },
    {
        title: "Capabilities",
        slug: "capabilities",
        subMenu: [
            { title: "Trusted Mission AI", slug: "../ai" },
            { title: "CyberSecurity", slug: "cyber" },
            { title: "Digital Modernization", slug: "digital-modernization" },
            { title: "Integrated Systems", slug: "integrated-systems" },
            { title: "Mission Operations", slug: "mission-operations" },
            { title: "Mission Software System", slug: "mission-software-systems" },
            { title: "Rapid Prototyping Manufacturing", slug: "rapid-prototyping-manufacturing" },
        ]
    },
    {
        title: "Insights",
        slug: "insights",
        subMenu: [
            { title: "Insights Overview", slug: "insights-overview" },
        ]
    },
    {
        title: "Careers",
        slug: "careers",
        subMenu: [
            { title: "Latest Opportunities", slug: "/" },
            { title: "Life at Leidos", slug: "life" },
            { title: "Pay & Benefits", slug: "pay-benifits" },
            { title: "Frequently Asked Questions", slug: "faq" },
            { title: "Careers in Australia", slug: "careers-australia" },
            { title: "Careers in the UK", slug: "careers-uk" }
        ]
    },
    {
        title: "Investors",
        slug: "investors",
        subMenu: null
    },
    {
        title: "Newsroom",
        slug: "newsroom",
        subMenu: null
    },
    {
        title: "Employees",
        slug: "employees",
        subMenu: null
    },
    {
        title: "Suppliers",
        slug: "suppliers",
        subMenu: null
    },
    {
        title: "Global",
        slug: "company/global",
        subMenu: null
    },
    {
        title: "Contact",
        slug: "contact",
        subMenu: null
    }
];

export default function Header() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [subMenuIndex, setSubMenuIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    // Add this useEffect for scroll handling
    useEffect(() => {
        const handleScroll = () => {
            if (menuOpen) {
                setMenuOpen(false);
                setSubMenuIndex(null); // Also close any open submenus
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [menuOpen]); // Only re-run if menuOpen changes

    const handleMenuItemClick = (index) => {
        if (menuData[index].subMenu && isMobile) {
            setSubMenuIndex(index);
        }
    };

    const handleBackClick = () => {
        setSubMenuIndex(null);
    };

    return (
        <header className="relative w-full bg-white shadow-md z-50 h-22">
            <div className="h-full max-w-6xl mx-auto flex justify-between items-center px-4 py-0 lg:px-0">
                {/* Country */}
                <div className="flex max-w-[130px] w-full items-center justify-start text-gray-600 text-sm font-medium">
                    {/* Hamburger Menu */}
                    <button className="text-gray-600 hover:text-burgundy transition">
                        <RiMenu2Line size={24} className="cursor-pointer" onClick={() => { setMenuOpen(!menuOpen); setSearchOpen(false); }} />
                    </button>
                </div>

                {/* Logo Center */}
                <Link href="/" className="relative flex-1 w-full flex items-center justify-center">
                    <Image
                        src="/images/MoteguardLogo.png"
                        alt="logo"
                        width={140} height={150}
                        className="object-cover rounded-t-lg"
                    />
                </Link>

                {/* Menu & Search Icons */}
                <div className="z-100 flex max-w-[130px] w-full justify-end items-center space-x-4">
                    {/* Search Icon */}
                    <span
                        className="text-gray-600 cursor-pointer flex items-center justify-center hover:text-gray-800 transition"
                    >
                        <FiSearch size={22} onClick={() => { setSearchOpen(true); setMenuOpen(false); }} />
                    </span>

                    <button type="button"><IoGlobeOutline size={21} className="-me-3" /></button>
                    <select name="country" id="country" defaultValue="usa" className="outline-0">
                        <option value="usa">USA</option>
                    </select>
                </div>
            </div>
            <div className={`${menuOpen === false && "hidden"} z-100 fixed overflow-hidden top-22 left-0 w-full bg-white`} style={{ height: "calc(100vh - 88px)" }}>
                <div className="rounded-full h-[750px] w-[750px] bg-[#5b6270] opacity-15 absolute -bottom-[400px] -right-1/5"></div>

                <div className="z-100 w-full flex items-stretch justify-stretch h-full mx-auto relative overflow-x-hidden">
                    {/* Main Menu */}
                    <div className={`w-full md:max-w-[350px] bg-[#6c87a5] transition-transform duration-300 ease-in-out ${subMenuIndex !== null && isMobile ? '-translate-x-full' : 'translate-x-0'}`}>
                        <ul className="relative overflow-x-hidden space-y-1 p-6 w-full h-full">
                            <div className="rounded-full h-[350px] w-[350px] bg-[#607791] absolute bottom-0 -left-1/2"></div>
                            <div className="rounded-full h-[270px] w-[270px] bg-[#516173] absolute bottom-[20px] -left-1/2"></div>
                            {menuData.map((item, index) => (
                                <li key={index} className="md:text-end relative p-2">
                                    {item.subMenu ? (
                                        <Link
                                            href={`/${item.slug}`}
                                            onClick={() => { handleMenuItemClick(index); setMenuOpen(false) }}
                                            className={`${item.subMenu !== null ? "font-bold text-xl" : "text-base"} text-start md:text-end hover:underline cursor-pointer text-white w-full`}
                                            onMouseEnter={() => !isMobile && item.subMenu && setSubMenuIndex(index)}
                                        >
                                            {item.title}
                                        </Link>
                                    ) : (
                                        <Link
                                            href={`/${item.slug}`}
                                            className={`${item.subMenu !== null ? "font-bold text-2xl" : "text-lg"} hover:underline cursor-pointer text-white`}
                                        >
                                            {item.title}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Submenu */}
                    {subMenuIndex !== null && menuData[subMenuIndex]?.subMenu && (
                        <div className={`absolute top-0 left-0 w-full h-full  transition-transform duration-300 ease-in-out ${isMobile ? (subMenuIndex !== null ? 'translate-x-0' : 'translate-x-full') : ''} md:relative md:flex-1`}>
                            <ul className="overflow-y-auto w-full flex flex-col p-6 space-y-3 h-full">
                                {isMobile && (
                                    <li className="p-1 px-2">
                                        <button
                                            onClick={handleBackClick}
                                            className="flex items-center space-x-2 justify-start"
                                        >
                                            <FiArrowLeft size={22} />
                                            <span>Back</span>
                                        </button>
                                    </li>
                                )}
                                {menuData[subMenuIndex].subMenu.map((subItem, subIndex) => {
                                    return (
                                        <li key={subIndex} className="p-1 px-2">
                                            <Link
                                                href={`/${menuData[subMenuIndex].slug}/${subItem.slug}`}
                                                className="cursor-pointer hover:underline text-lg"
                                                onClick={() => setMenuOpen(false)}
                                            >
                                                {subItem.title}
                                            </Link>

                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            {/* Search Panel */}
            <div
                className={`fixed top-0 right-0 w-full md:w-1/3 h-full bg-white shadow-lg transition-all duration-300 ease-in-out flex flex-col ${searchOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
            >
                {/* Close Button */}
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setSearchOpen(false)}
                        className="text-gray-600 hover:text-burgundy transition"
                    >
                        <FiX size={26} />
                    </button>
                </div>

                {/* Search Input */}
                <div className="flex flex-col items-start px-6">
                    <h3 className="text-2xl text-start mb-3 font-semibold">Search</h3>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-burgundy"
                    />
                    <button className="mt-4 px-6 py-2 text-white rounded-md bg-[#6c87a5] hover:bg-[#335f80] transition">
                        Search
                    </button>
                </div>
            </div>
        </header >
    );
}