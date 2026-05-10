'use client';

import Link from 'next/link';
import { blogPosts, getAllCategories } from '@/data/blogPosts';
import { Calendar, Clock, ArrowRight, BookOpen, Search, Tag } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const categories = getAllCategories();

    const filteredPosts = blogPosts
        .filter(post => !selectedCategory || post.category === selectedCategory)
        .filter(post =>
            !searchQuery ||
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        );

    const featuredPost = blogPosts[0];
    const restPosts = filteredPosts.filter(p => p.slug !== featuredPost.slug || selectedCategory || searchQuery);

    return (
        <>
        <Navbar />
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Hero */}
            <section className="bg-gradient-to-br from-[#584D94] via-[#6B5FA8] to-[#3D3566] text-white pt-28 pb-20 px-4">
                <div className="container mx-auto max-w-5xl text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 py-2 px-4 rounded-full text-sm font-semibold text-white/90 mb-6">
                        <BookOpen size={16} /> LUXHT Fix Blog
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Home Repair Tips, Guides & News
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                        Expert advice for South Florida & Central Florida homeowners — from hurricane prep to bathroom remodels.
                    </p>
                    <div className="max-w-md mx-auto relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#64CEBB] focus:border-transparent"
                        />
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-6 px-4 border-b border-slate-100 bg-white sticky top-0 z-20">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex items-center gap-3 overflow-x-auto pb-2">
                        <Tag size={16} className="text-slate-400 shrink-0" />
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                                !selectedCategory
                                    ? 'bg-[#584D94] text-white'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                        >
                            All Posts
                        </button>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                                    selectedCategory === cat
                                        ? 'bg-[#584D94] text-white'
                                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            {!selectedCategory && !searchQuery && (
                <section className="py-12 px-4">
                    <div className="container mx-auto max-w-5xl">
                        <Link href={`/blog/${featuredPost.slug}`} className="block group">
                            <div className="bg-gradient-to-br from-[#584D94]/5 to-[#64CEBB]/5 rounded-3xl p-8 md:p-12 border border-slate-100 hover:border-[#64CEBB]/30 transition-all hover:shadow-lg">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-[#64CEBB] text-white text-xs font-bold px-3 py-1 rounded-full">Latest</span>
                                    <span className="text-slate-500 text-sm flex items-center gap-1">
                                        <Calendar size={14} /> {new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                    </span>
                                    <span className="text-slate-500 text-sm flex items-center gap-1">
                                        <Clock size={14} /> {featuredPost.readTime}
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 group-hover:text-[#584D94] transition-colors mb-4">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-lg text-slate-600 mb-6 max-w-3xl">{featuredPost.excerpt}</p>
                                <span className="inline-flex items-center gap-2 text-[#584D94] font-semibold group-hover:gap-3 transition-all">
                                    Read Article <ArrowRight size={18} />
                                </span>
                            </div>
                        </Link>
                    </div>
                </section>
            )}

            {/* Post Grid */}
            <section className="py-8 px-4 pb-20">
                <div className="container mx-auto max-w-5xl">
                    {filteredPosts.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-slate-500 text-lg">No articles found matching your search.</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {(selectedCategory || searchQuery ? filteredPosts : restPosts).map(post => (
                                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                                    <article className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg hover:border-[#64CEBB]/30 transition-all h-full flex flex-col">
                                        <div className="h-40 overflow-hidden">
                                            <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        </div>
                                        <div className="p-6 flex flex-col flex-1">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="text-xs font-bold text-[#584D94] bg-[#584D94]/10 px-2 py-1 rounded-full">{post.category}</span>
                                                <span className="text-slate-400 text-xs flex items-center gap-1">
                                                    <Clock size={12} /> {post.readTime}
                                                </span>
                                            </div>
                                            <h3 className="font-bold text-lg text-slate-800 group-hover:text-[#584D94] transition-colors mb-3 line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                                                <span className="text-xs text-slate-400">
                                                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                </span>
                                                <span className="text-[#584D94] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                                                    Read <ArrowRight size={14} />
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </main>
        </>
    );
}
