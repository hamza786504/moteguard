"use client";
import React, { useState } from 'react'

function ContactForm() {
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        country: "",
        partnerCategory: "",
        company: "",
        message: "",
        optIn: false
    });


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.firstName) newErrors.firstName = "First Name is required";
        if (!formData.lastName) newErrors.lastName = "Last Name is required";
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.country) newErrors.country = "Country/Region is required";
        if (!formData.partnerCategory)
            newErrors.partnerCategory = "Partner Category is required";
        if (!formData.company) newErrors.company = "Company is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Form submitted successfully!");
        }
    };

    return (
        <>
            <div className="max-w-6xl mt-10 mb-0 mx-auto">
                <h3 className="text-center text-[#6c87a5] text-xl md:text-5xl font-bold">Contact Us</h3>
                <div className="min-h-screen flex items-center justify-center md:px-4 pt-0 pb-0">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white rounded-lg p-3 md:p-0 w-full max-w-4xl"
                    >
                        <div className="grid md:grid-cols-2 gap-4">
                            {/* First Name */}
                            <div>
                                <label className="block text-[#6c87a5] font-medium mb-1">
                                    First Name<span className="text-[#335f80]">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={`w-full border ${errors.firstName ? "border-[#335f80]" : "border-gray-300"
                                        } rounded-md p-2 focus:outline-none focus:border-[#6c87a5]`}
                                />
                                {errors.firstName && (
                                    <p className="text-[#335f80] text-sm">{errors.firstName}</p>
                                )}
                            </div>

                            {/* Last Name */}
                            <div>
                                <label className="block text-[#6c87a5] font-medium mb-1">
                                    Last Name<span className="text-[#335f80]">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={`w-full border ${errors.lastName ? "border-[#335f80]" : "border-gray-300"
                                        } rounded-md p-2 focus:outline-none focus:border-[#6c87a5]`}
                                />
                                {errors.lastName && (
                                    <p className="text-[#335f80] text-sm">{errors.lastName}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-[#6c87a5] font-medium mb-1">
                                    Email<span className="text-[#335f80]">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full border ${errors.email ? "border-[#335f80]" : "border-gray-300"
                                        } rounded-md p-2 focus:outline-none focus:border-[#6c87a5]`}
                                />
                                {errors.email && (
                                    <p className="text-[#335f80] text-sm">{errors.email}</p>
                                )}
                            </div>

                            {/* Country/Region */}
                            <div>
                                <label className="block text-[#6c87a5] font-medium mb-1">
                                    Country/Region<span className="text-[#335f80]">*</span>
                                </label>
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className={`w-full border ${errors.country ? "border-[#335f80]" : "border-gray-300"
                                        } rounded-md p-2 focus:outline-none focus:border-[#6c87a5]`}
                                >
                                    <option value="">Please Select</option>
                                    <option value="USA">United States</option>
                                    <option value="UK">United Kingdom</option>
                                    <option value="CA">Canada</option>
                                </select>
                                {errors.country && (
                                    <p className="text-[#335f80] text-sm">{errors.country}</p>
                                )}
                            </div>

                            {/* Company */}
                            <div>
                                <label className="block text-[#6c87a5] font-medium mb-1">
                                    Company<span className="text-[#335f80]">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className={`w-full border ${errors.company ? "border-[#335f80]" : "border-gray-300"
                                        } rounded-md p-2 focus:outline-none focus:border-[#6c87a5]`}
                                />
                                {errors.company && (
                                    <p className="text-[#335f80] text-sm">{errors.company}</p>
                                )}
                            </div>

                            {/* Partner Category */}
                            <div>
                                <label className="block text-[#6c87a5] font-medium mb-1">
                                    Partner Category<span className="text-[#335f80]">*</span>
                                </label>
                                <select
                                    name="partnerCategory"
                                    value={formData.partnerCategory}
                                    onChange={handleChange}
                                    className={`w-full border ${errors.partnerCategory ? "border-[#335f80]" : "border-gray-300"
                                        } rounded-md p-2 focus:outline-none focus:border-[#6c87a5]`}
                                >
                                    <option value="">Please Select</option>
                                    <option value="Tech">Technology Partner</option>
                                    <option value="Consulting">Consulting Partner</option>
                                    <option value="Supplier">Supplier Partner</option>
                                </select>
                                {errors.partnerCategory && (
                                    <p className="text-[#335f80] text-sm">{errors.partnerCategory}</p>
                                )}
                            </div>
                        </div>

                        {/* Message */}
                        <div className="mt-4">
                            <label className="block text-[#6c87a5] font-medium mb-1">
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Please include additional details for our team to review."
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#6c87a5]"
                            ></textarea>
                        </div>

                        {/* Opt-in */}
                        <div className="mt-4 flex items-center">
                            <input
                                type="checkbox"
                                name="optIn"
                                checked={formData.optIn}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            <span className="text-[#6c87a5] text-sm">
                                Opt-in to email updates from Leidos. You can update your preferences at any time.
                            </span>
                        </div>

                        {/* Submit */}
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="bg-[#6c87a5] hover:bg-[#335f80] text-white px-6 py-2 rounded-md font-semibold"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactForm
