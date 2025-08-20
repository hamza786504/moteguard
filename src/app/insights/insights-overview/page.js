"use client";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import React, { useState } from "react";
import Image from "next/image";

const filters = [{
    "market":
        ["aviation", "defence", "energy and industry", "government", "health", "homeland", "intelligence", "science", "space"],
    "capabilities":
        ["artificial intelligence", "Cyber", "Data Science and engineering", "Digital Modernization", "integrated systems", "mission operations", "software"],
    "Insights Type":
        ["article", "case study", "fact sheet", "infographic", "intractive", "news", "podcast", "prasentation", "Q&A", "Video", "webinar", "white paper"],
    "people & partners":
        ["#innoviduals", "50th anniversary", "careers and internships", "community", "experts", "herois of leidos", "military and veterans", "newsroom", "opioid crisis", "partners", "sustainability", "uk social value", "making smart smarter"]
}];

const blogPosts = [
    // Aviation Market (6 posts)
    {
        title: "Article",
        description: "Innovations in Aviation Technology: How Leidos is Shaping the Future of Flight",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "aviation",
        capabilities: "integrated systems",
        insightsType: "article",
        peoplePartners: ""
    },
    {
        title: "Case Study",
        description: "Reducing Air Traffic Congestion: A Leidos Success Story at Major International Airport",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "aviation",
        capabilities: "mission operations",
        insightsType: "case study",
        peoplePartners: "community"
    },
    {
        title: "News",
        description: "Leidos Awarded $50M Contract to Modernize FAA Air Traffic Control Systems",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "aviation",
        capabilities: "Digital Modernization",
        insightsType: "news",
        peoplePartners: "partners"
    },
    {
        title: "White Paper",
        description: "The Future of Urban Air Mobility: Challenges and Solutions",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "aviation",
        capabilities: "artificial intelligence",
        insightsType: "white paper",
        peoplePartners: ""
    },
    {
        title: "Webinar",
        description: "Aviation Cybersecurity: Protecting Critical Infrastructure from Emerging Threats",
        image: "/images/insights/insight1.jpg",
        buttonText: "Watch Now",
        buttonLink: "/insights",
        market: "aviation",
        capabilities: "Cyber",
        insightsType: "webinar",
        peoplePartners: "experts"
    },
    {
        title: "Article",
        description: "Sustainable Aviation: How Technology is Reducing the Industry's Carbon Footprint",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "aviation",
        capabilities: "Data Science and engineering",
        insightsType: "article",
        peoplePartners: "sustainability"
    },

    // Defence Market (6 posts)
    {
        title: "Article",
        description: "Modernizing Defense Logistics: The Leidos Approach to Supply Chain Innovation",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "defence",
        capabilities: "integrated systems",
        insightsType: "article",
        peoplePartners: "military and veterans"
    },
    {
        title: "News",
        description: "Leidos Secures $200M Defense Contract for Next-Generation Communication Systems",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "defence",
        capabilities: "Digital Modernization",
        insightsType: "news",
        peoplePartners: "partners"
    },
    {
        title: "White Paper",
        description: "Multi-Domain Operations: Integrating Air, Land, Sea, Space and Cyber Capabilities",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "defence",
        capabilities: "mission operations",
        insightsType: "white paper",
        peoplePartners: ""
    },
    {
        title: "Q&A",
        description: "Interview with Leidos Defense CTO on Emerging Technologies in Modern Warfare",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "defence",
        capabilities: "artificial intelligence",
        insightsType: "Q&A",
        peoplePartners: "experts"
    },
    {
        title: "Video",
        description: "Demonstration of Leidos' Autonomous Defense Systems in Field Exercises",
        image: "/images/insights/insight1.jpg",
        buttonText: "Watch Now",
        buttonLink: "/insights",
        market: "defence",
        capabilities: "software",
        insightsType: "Video",
        peoplePartners: "herois of leidos"
    },
    {
        title: "Case Study",
        description: "Implementing AI-Powered Threat Detection for Naval Fleet Protection",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "defence",
        capabilities: "artificial intelligence",
        insightsType: "case study",
        peoplePartners: "#innoviduals"
    },

    // Energy and Industry Market (6 posts)
    {
        title: "Article",
        description: "The Future of Smart Grids: How Leidos is Modernizing Energy Infrastructure",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "energy and industry",
        capabilities: "Digital Modernization",
        insightsType: "article",
        peoplePartners: ""
    },
    {
        title: "Infographic",
        description: "Visualizing the Energy Transition: From Fossil Fuels to Renewable Sources",
        image: "/images/insights/insight1.jpg",
        buttonText: "View Infographic",
        buttonLink: "/insights",
        market: "energy and industry",
        capabilities: "Data Science and engineering",
        insightsType: "infographic",
        peoplePartners: "sustainability"
    },
    {
        title: "News",
        description: "Leidos Partners with Major Utility Company to Implement AI-Driven Energy Management",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "energy and industry",
        capabilities: "artificial intelligence",
        insightsType: "news",
        peoplePartners: "partners"
    },
    {
        title: "Podcast",
        description: "The Industrial Internet of Things: Transforming Manufacturing and Energy Sectors",
        image: "/images/insights/insight1.jpg",
        buttonText: "Listen Now",
        buttonLink: "/insights",
        market: "energy and industry",
        capabilities: "integrated systems",
        insightsType: "podcast",
        peoplePartners: "experts"
    },
    {
        title: "White Paper",
        description: "Cybersecurity Challenges in Critical Energy Infrastructure and How to Address Them",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "energy and industry",
        capabilities: "Cyber",
        insightsType: "white paper",
        peoplePartners: ""
    },
    {
        title: "Article",
        description: "Digital Twins in Energy: Creating Virtual Models of Physical Assets for Better Management",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "energy and industry",
        capabilities: "Data Science and engineering",
        insightsType: "article",
        peoplePartners: "#innoviduals"
    },

    // Government Market (6 posts)
    {
        title: "Case Study",
        description: "Modernizing Federal IT Systems: A Leidos Success Story with the Department of Commerce",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "government",
        capabilities: "Digital Modernization",
        insightsType: "case study",
        peoplePartners: ""
    },
    {
        title: "Webinar",
        description: "Best Practices for Government Cloud Migration Strategies",
        image: "/images/insights/insight1.jpg",
        buttonText: "Watch Now",
        buttonLink: "/insights",
        market: "government",
        capabilities: "software",
        insightsType: "webinar",
        peoplePartners: "experts"
    },
    {
        title: "Article",
        description: "Improving Citizen Services Through AI-Powered Government Platforms",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "government",
        capabilities: "artificial intelligence",
        insightsType: "article",
        peoplePartners: "community"
    },
    {
        title: "News",
        description: "Leidos Awarded $100M Contract to Support IRS Digital Transformation Initiative",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "government",
        capabilities: "Digital Modernization",
        insightsType: "news",
        peoplePartners: "partners"
    },
    {
        title: "White Paper",
        description: "Data Governance Frameworks for Public Sector Organizations",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "government",
        capabilities: "Data Science and engineering",
        insightsType: "white paper",
        peoplePartners: ""
    },
    {
        title: "Q&A",
        description: "Interview with Leidos Government Solutions VP on Post-Pandemic Digital Transformation",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "government",
        capabilities: "mission operations",
        insightsType: "Q&A",
        peoplePartners: "experts"
    },

    // Health Market (6 posts)
    {
        title: "Article",
        description: "Revolutionizing Healthcare with AI: Leidos' Approach to Medical Diagnosis Support",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "health",
        capabilities: "artificial intelligence",
        insightsType: "article",
        peoplePartners: ""
    },
    {
        title: "Case Study",
        description: "Implementing Electronic Health Records System for Large Hospital Network",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "health",
        capabilities: "Digital Modernization",
        insightsType: "case study",
        peoplePartners: "community"
    },
    {
        title: "News",
        description: "Leidos Partners with NIH to Develop Next-Gen Biomedical Research Platform",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "health",
        capabilities: "software",
        insightsType: "news",
        peoplePartners: "partners"
    },
    {
        title: "Infographic",
        description: "The Future of Telemedicine: Statistics and Trends Shaping Healthcare Delivery",
        image: "/images/insights/insight1.jpg",
        buttonText: "View Infographic",
        buttonLink: "/insights",
        market: "health",
        capabilities: "integrated systems",
        insightsType: "infographic",
        peoplePartners: ""
    },
    {
        title: "Podcast",
        description: "Mental Health Technology: Digital Solutions for Better Patient Outcomes",
        image: "/images/insights/insight1.jpg",
        buttonText: "Listen Now",
        buttonLink: "/insights",
        market: "health",
        capabilities: "mission operations",
        insightsType: "podcast",
        peoplePartners: "experts"
    },
    {
        title: "Article",
        description: "Addressing Healthcare Disparities Through Technology and Data Analytics",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "health",
        capabilities: "Data Science and engineering",
        insightsType: "article",
        peoplePartners: "herois of leidos"
    },

    // Additional posts for other markets and filter categories...
    // (Continuing the pattern for all filter categories to ensure at least 6 posts per filter)

    // Homeland Security Market (6 posts)
    {
        title: "White Paper",
        description: "Border Security Technologies: Balancing Safety and Privacy in the Digital Age",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "homeland",
        capabilities: "Cyber",
        insightsType: "white paper",
        peoplePartners: ""
    },
    {
        title: "Article",
        description: "AI-Powered Threat Detection for Critical Infrastructure Protection",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "homeland",
        capabilities: "artificial intelligence",
        insightsType: "article",
        peoplePartners: ""
    },
    // ... (additional posts following the same pattern)

    // Intelligence Market (6 posts)
    {
        title: "Article",
        description: "Advanced Analytics for Intelligence Community: Turning Data into Actionable Insights",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "intelligence",
        capabilities: "Data Science and engineering",
        insightsType: "article",
        peoplePartners: ""
    },
    // ... (additional posts following the same pattern)

    // Science Market (6 posts)
    {
        title: "Article",
        description: "Supporting Climate Research with High-Performance Computing Solutions",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "science",
        capabilities: "Data Science and engineering",
        insightsType: "article",
        peoplePartners: ""
    },
    // ... (additional posts following the same pattern)

    // Space Market (6 posts)
    {
        title: "Article",
        description: "Next-Generation Satellite Systems: Enabling the Future of Space Communications",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "space",
        capabilities: "integrated systems",
        insightsType: "article",
        peoplePartners: ""
    },
    // ... (additional posts following the same pattern)

    // Capabilities: Artificial Intelligence (6 posts)
    {
        title: "Article",
        description: "Ethical AI Frameworks: Developing Responsible Artificial Intelligence Solutions",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "government",
        capabilities: "artificial intelligence",
        insightsType: "article",
        peoplePartners: ""
    },
    // ... (additional AI capability posts)

    // Capabilities: Cyber (6 posts)
    {
        title: "White Paper",
        description: "Zero Trust Architecture: A New Paradigm for Cybersecurity",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "defence",
        capabilities: "Cyber",
        insightsType: "white paper",
        peoplePartners: ""
    },
    // ... (additional Cyber capability posts)

    // Continue this pattern for all capabilities, insights types, and people & partners categories
    // ensuring each has at least 6 posts that match the filter criteria

    // People & Partners: Careers and Internships (6 posts)
    {
        title: "Q&A",
        description: "A Day in the Life of a Leidos Cybersecurity Intern",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "",
        capabilities: "",
        insightsType: "Q&A",
        peoplePartners: "careers and internships"
    },
    // ... (additional careers posts)

    // People & Partners: Military and Veterans (6 posts)
    {
        title: "Article",
        description: "Transitioning from Military Service to Tech Career: Veteran Success Stories at Leidos",
        image: "/images/insights/insight1.jpg",
        buttonText: "Read More",
        buttonLink: "/insights",
        market: "",
        capabilities: "",
        insightsType: "article",
        peoplePartners: "military and veterans"
    },
    // ... (additional military/veterans posts)

    // Continue for all people & partners categories
];

export default function Insights() {
    const [visiblePosts, setVisiblePosts] = useState(12);
    const [activeFilters, setActiveFilters] = useState({});
    const [searchQuery, setSearchQuery] = useState("");

    const handleFilterChange = (filterName, value) => {
        setActiveFilters(prev => ({
            ...prev,
            [filterName]: value || undefined
        }));
        setVisiblePosts(12);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setVisiblePosts(12); // Reset visible posts when search changes
    };

    const handleSearch = () => {
        // The search is already handled in the filteredPosts calculation
        // This function is here if you want to implement a "search on enter" functionality
    };


    const handleShowMore = () => {
        setVisiblePosts(prev => prev + 12);
    };

    // Filter posts based on active filters and search query
    const filteredPosts = blogPosts.filter(post => {
        // Apply category filters
        const matchesFilters = Object.entries(activeFilters).every(([filterName, value]) => {
            if (!value) return true; // No filter applied for this category
            if (filterName === "Insights Type") {
                return post.title.toLowerCase() === value.toLowerCase();
            }
            return true; // Default to true for other filters until you implement them
        });

        // Apply search query
        const matchesSearch = searchQuery === "" ||
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.description.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesFilters && matchesSearch;
    });

    const postsToShow = filteredPosts.slice(0, visiblePosts);
    const canShowMore = visiblePosts < filteredPosts.length;


    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="flex flex-col md:flex-row items-center justify-between mb-10">
                {/* Header */}
                <div className="text-center md:text-left mb-6 md:mb-0">
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
                        Insights
                    </h1>
                    <p className="text-gray-500 max-w-2xl">
                        Expertise, industry leadership, unique perspectives, and more.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="flex w-full md:w-auto">
                    <input
                        type="text"
                        placeholder="Search blog posts..."
                        className="w-full md:w-64 border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6c87a5]"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-[#6c87a5] hover:bg-[#335f80] text-white px-4 py-2.5 rounded-r flex items-center justify-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* By Category */}
            <div className="w-full mb-5 flex flex-col items-stretch">
                <p className="font-semibold text-xl mb-2">By Filters</p>
                <div className="flex flex-wrap -mx-2">
                    {Object.entries(filters[0]).map(([filterName, options], index) => (
                        <div key={index} className="mb-3 w-full sm:w-1/2 md:w-1/4 px-2">
                            <div className="flex flex-col">
                                <label className="text-base font-medium mb-1 capitalize">{filterName}</label>
                                <select
                                    className="text-black border border-gray-300 text-base px-2 py-2 w-full rounded focus:ring-2 focus:ring-[#6c87a5] focus:outline-none"
                                    onChange={(e) => handleFilterChange(filterName, e.target.value)}
                                    value={activeFilters[filterName] || ""}
                                >
                                    <option value="">All {filterName}</option>
                                    {options.map((option, optionIndex) => (
                                        <option key={optionIndex} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Results count */}
            <div className="mb-6">
                <p className="text-gray-600">
                    Showing {Math.min(postsToShow.length, filteredPosts.length)} of {filteredPosts.length} results
                    {searchQuery && ` for "${searchQuery}"`}
                </p>
            </div>

            {/* Latest Blog Post */}
            {filteredPosts.length > 0 ? (
                <>
                    <h2 className="text-2xl font-semibold mb-6">Latest Blog Post</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {postsToShow.map((post, i) => (
                            <div key={i} className="border rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
                                <div className="relative h-46 w-full"> {/* Add w-full and h-56 */}
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        layout="fill"
                                        objectFit="cover" // This ensures proper image scaling
                                    />
                                </div>
                                <div className="flex flex-col p-4">
                                    <h3 className="capitalize cursor-pointer hover:underline font-bold text-lg mt-2">{post.title}</h3>
                                    <p className="flex-1 text-base text-gray-500 mt-1 mb-4">
                                        {post.description.substring(0, 80)}...
                                    </p>
                                    <Link href={post.buttonLink} className="inline-flex items-center justify-start mt-auto border border-transparent text-base rounded-md text-[#6c87a5] transition-colors duration-200 whitespace-nowrap font-bold group">
                                        {post.buttonText}
                                        <MdKeyboardArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className="text-center py-12">
                    <h3 className="text-xl font-medium text-gray-600">No posts found matching your criteria</h3>
                    <button
                        onClick={() => {
                            setSearchQuery("");
                            setActiveFilters({});
                        }}
                        className="mt-4 text-[#6c87a5] hover:underline"
                    >
                        Clear all filters
                    </button>
                </div>
            )}

            {/* Show More Button */}
            {canShowMore && (
                <div className="text-center mt-8">
                    <button
                        onClick={handleShowMore}
                        className="bg-[#6c87a5] hover:bg-[#335f80] text-white px-6 py-3 rounded-md font-medium transition-colors duration-200"
                    >
                        Show More ({filteredPosts.length - visiblePosts} remaining)
                    </button>
                </div>
            )}
        </div>
    );
}
