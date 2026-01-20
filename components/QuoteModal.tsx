"use client";

import React, { useState } from 'react';
import { useModal } from '@/context/ModalContext';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AddressAutocomplete from './AddressAutocomplete';
import { supabase } from '@/lib/supabase';

export default function QuoteModal() {
    const { isOpen, closeModal, mode } = useModal();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        service: 'General Repair',
        referral: '',
        comments: ''
    });

    const services = [
        "General Repair",
        "Drywall Repair",
        "TV Mounting",
        "Flooring Installation",
        "Deck Building",
        "Door, Lock & Trim",
        "Faucet & Fixtures",
        "Smart Home Installation",
        "Furniture Assembly",
        "Kitchen Refacing",
        "Bath Remodel",
        "Other"
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedImage(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            let imageUrl = null;

            // 1. Upload Image if exists
            if (selectedImage) {
                const fileExt = selectedImage.name.split('.').pop();
                const fileName = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}.${fileExt}`;
                const { data: uploadData, error: uploadError } = await supabase.storage
                    .from('quote-images')
                    .upload(fileName, selectedImage);

                if (uploadError) {
                    console.error("Image Upload Error:", uploadError);
                } else if (uploadData) {
                    // Get public URL
                    const { data: { publicUrl } } = supabase.storage
                        .from('quote-images')
                        .getPublicUrl(uploadData.path);
                    imageUrl = publicUrl;
                }
            }

            // 2. Insert Lead Data
            const { error: insertError } = await supabase
                .from('leads')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        address: formData.address,
                        service: formData.service,
                        referral_source: formData.referral,
                        details: formData.comments, // mapped 'comments' to 'details' based on table schema
                        image_url: imageUrl
                    }
                ]);

            if (insertError) throw insertError;

            console.log("Form Submitted Successfully");
            setIsSuccess(true);

            // Clean up form
            setFormData({
                name: '', email: '', phone: '', address: '',
                service: 'General Repair', referral: '', comments: ''
            });
            setSelectedImage(null);

            // Close after delay
            setTimeout(() => {
                closeModal();
                setIsSuccess(false);
            }, mode === 'schedule' ? 2000 : 3000);

        } catch (error: any) {
            console.error("Submission Error:", error);

            // Helpful error for production debugging
            if (error?.message?.includes("Supabase") || !process.env.NEXT_PUBLIC_SUPABASE_URL) {
                alert("Configuration Error: Database connection failed. Please ensure the 'NEXT_PUBLIC_SUPABASE_URL' and 'NEXT_PUBLIC_SUPABASE_ANON_KEY' environment variables are set in your deployment settings.");
            } else {
                alert(`Error sending quote: ${error.message || "Please check your connection and try again."}`);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    // Animation variants
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.3, ease: "easeOut" as const }
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.2, ease: "easeIn" as const, delay: 0.1 }
        }
    };

    const modalVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 60
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                damping: 25,
                stiffness: 300,
                delay: 0.1
            }
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            y: 20,
            transition: { duration: 0.2, ease: "easeIn" as const }
        }
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2,
                duration: 0.3,
                ease: "easeOut" as const
            }
        }
    };

    const successVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring" as const,
                damping: 15,
                stiffness: 300
            }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={closeModal}
                    />

                    {/* Modal Content */}
                    <motion.div
                        className="relative bg-white rounded-3xl w-full max-w-lg md:max-w-2xl lg:max-w-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Header */}
                        <motion.div
                            className="bg-gradient-to-r from-[#584D94] via-[#6B5FAA] to-[#584D94] bg-[length:200%_100%] p-6 text-white flex justify-between items-center sticky top-0 z-10"
                            initial={{ backgroundPosition: "0% 0%" }}
                            animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                            <motion.div
                                variants={contentVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <h2 className="text-2xl font-bold">
                                    {mode === 'schedule' ? "Schedule Appointment" : "Get a Free Quote"}
                                </h2>
                                <p className="text-blue-100 text-sm">Tell us about your project.</p>
                            </motion.div>
                            <motion.button
                                onClick={closeModal}
                                className="text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors"
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <X size={24} />
                            </motion.button>
                        </motion.div>

                        {/* Body */}
                        <div className="p-8">
                            <AnimatePresence mode="wait">
                                {isSuccess ? (
                                    <motion.div
                                        key="success"
                                        className="text-center py-10 space-y-4"
                                        variants={successVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                    >
                                        <motion.div
                                            className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ type: "spring", damping: 10, stiffness: 200 }}
                                        >
                                            <CheckCircle size={32} />
                                        </motion.div>
                                        <motion.h3
                                            className="text-2xl font-bold text-slate-800"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            {mode === 'schedule' ? "Redirecting..." : "Request Sent!"}
                                        </motion.h3>
                                        <motion.p
                                            className="text-slate-600"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            {mode === 'schedule'
                                                ? "We're taking you to our scheduling calendar."
                                                : <>We got your message and we are taking care of the issue.<br />We will be back to you shortly.</>
                                            }
                                        </motion.p>
                                        {mode !== 'schedule' && (
                                            <motion.button
                                                onClick={closeModal}
                                                className="mt-6 bg-slate-100 text-slate-600 font-bold py-2 px-6 rounded-full hover:bg-slate-200 transition-colors"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.4 }}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                Close
                                            </motion.button>
                                        )}
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        className="space-y-4"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >

                                        {/* Name */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                autoComplete="name"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#64CEBB] focus:ring-2 focus:ring-[#64CEBB]/20 outline-none transition-all placeholder:text-slate-400"
                                            />
                                        </motion.div>

                                        <motion.div
                                            className="grid grid-cols-2 gap-4"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.15 }}
                                        >
                                            {/* Email */}
                                            <div>
                                                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    autoComplete="email"
                                                    placeholder="john@example.com"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#64CEBB] focus:ring-2 focus:ring-[#64CEBB]/20 outline-none transition-all placeholder:text-slate-400"
                                                />
                                            </div>

                                            {/* Phone */}
                                            <div>
                                                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Phone</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                    autoComplete="tel"
                                                    placeholder="(555) 123-4567"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#64CEBB] focus:ring-2 focus:ring-[#64CEBB]/20 outline-none transition-all placeholder:text-slate-400"
                                                />
                                            </div>
                                        </motion.div>

                                        {/* Address with Autocomplete */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <AddressAutocomplete
                                                value={formData.address}
                                                onChange={(val) => setFormData(prev => ({ ...prev, address: val }))}
                                            />
                                        </motion.div>

                                        {/* Service */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.25 }}
                                        >
                                            <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Service Needed</label>
                                            <div className="relative">
                                                <select
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#64CEBB] focus:ring-2 focus:ring-[#64CEBB]/20 outline-none transition-all appearance-none bg-white text-slate-700"
                                                >
                                                    {services.map(s => (
                                                        <option key={s} value={s}>{s}</option>
                                                    ))}
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                                    <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L1 4h10L6 9z" fill="currentColor" /></svg>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Comments */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Project Details (Optional)</label>
                                            <textarea
                                                name="comments"
                                                rows={3}
                                                placeholder="Describe your project..."
                                                value={formData.comments}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#64CEBB] focus:ring-2 focus:ring-[#64CEBB]/20 outline-none transition-all placeholder:text-slate-400 resize-none"
                                            ></textarea>
                                        </motion.div>

                                        {/* Image Upload */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.35 }}
                                        >
                                            <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Upload Image (Optional)</label>
                                            <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 text-center hover:border-[#64CEBB] transition-colors cursor-pointer group relative">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                                                    onChange={handleImageChange}
                                                />
                                                <div className="text-slate-400 group-hover:text-[#64CEBB] transition-colors pointer-events-none">
                                                    <p className="text-sm font-medium truncate px-4">
                                                        {selectedImage ? `Selected: ${selectedImage.name}` : "Click to upload or drag and drop"}
                                                    </p>
                                                    <p className="text-[10px] mt-1 opacity-70">PNG, JPG up to 5MB</p>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Referral Source */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">How did you hear about us?</label>
                                            <div className="relative">
                                                <select
                                                    name="referral"
                                                    value={formData.referral}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#64CEBB] focus:ring-2 focus:ring-[#64CEBB]/20 outline-none transition-all appearance-none bg-white text-slate-700"
                                                >
                                                    <option value="" disabled>Select an option</option>
                                                    <option value="TikTok">TikTok</option>
                                                    <option value="Instagram">Instagram</option>
                                                    <option value="Facebook">Facebook</option>
                                                    <option value="Google Search">Google Search</option>
                                                    <option value="Friend/Family">Friend or Family</option>
                                                    <option value="Flyer/Mail">Flyer or Mail</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                                    <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L1 4h10L6 9z" fill="currentColor" /></svg>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Submit Button */}
                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full btn-gradient-primary btn-gradient-shimmer py-4 rounded-xl mt-2 disabled:opacity-70"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.45 }}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="animate-spin inline mr-2" size={20} /> Sending...
                                                </>
                                            ) : (
                                                mode === 'schedule' ? "Proceed to Scheduling" : "Get Free Quote"
                                            )}
                                        </motion.button>

                                        <motion.p
                                            className="text-center text-xs text-slate-400"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            We respect your privacy. No spam, ever.
                                        </motion.p>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

