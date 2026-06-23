'use client';

import Link from 'next/link';
import { BlogPost, blogPosts } from '@/data/blogPosts';
import { Calendar, Clock, ArrowLeft, ArrowRight, Phone, Tag } from 'lucide-react';
import { useModal } from '@/context/ModalContext';
import ReactMarkdown from 'react-markdown';
import Navbar from '@/components/Navbar';

export default function BlogPostClient({ post }: { post: BlogPost }) {
    const { openModal } = useModal();

    const relatedPosts = blogPosts
        .filter(p => p.slug !== post.slug)
        .filter(p => p.category === post.category || p.tags.some(t => post.tags.includes(t)))
        .slice(0, 3);

    return (
        <>
        <Navbar />
        <main className="min-h-screen bg-white">
            {/* Hero */}
            <section className="bg-gradient-to-br from-[#584D94] via-[#6B5FA8] to-[#3D3566] text-white pt-28 pb-16 px-4">
                <div className="container mx-auto max-w-3xl">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
                        <ArrowLeft size={16} /> Back to Blog
                    </Link>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-[#64CEBB] text-white text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
                        <span className="text-white/70 text-sm flex items-center gap-1">
                            <Calendar size={14} /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="text-white/70 text-sm flex items-center gap-1">
                            <Clock size={14} /> {post.readTime}
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight">{post.title}</h1>
                    <p className="text-lg text-white/80 mt-4">{post.excerpt}</p>
                </div>
            </section>

            {/* Hero Image */}
            <div className="w-full max-w-4xl mx-auto -mt-8 px-4">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img src={post.image} alt={post.title} className="w-full h-64 md:h-80 object-cover" />
                </div>
            </div>

            {/* Article Content */}
            <article className="py-12 px-4">
                <div className="container mx-auto max-w-3xl">
                    <div className="prose prose-lg prose-slate max-w-none
                        prose-headings:text-slate-800 prose-headings:font-bold
                        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-[#584D94]
                        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                        prose-p:text-slate-600 prose-p:leading-relaxed
                        prose-li:text-slate-600
                        prose-strong:text-slate-800
                        prose-a:text-[#584D94] prose-a:no-underline hover:prose-a:underline
                        prose-table:border-collapse
                        prose-th:bg-[#584D94]/10 prose-th:text-[#584D94] prose-th:p-3 prose-th:text-left
                        prose-td:p-3 prose-td:border-b prose-td:border-slate-100
                    ">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>

                    {/* Tags */}
                    <div className="mt-12 pt-8 border-t border-slate-100">
                        <div className="flex items-center gap-2 flex-wrap">
                            <Tag size={16} className="text-slate-400" />
                            {post.tags.map(tag => (
                                <span key={tag} className="bg-slate-100 text-slate-600 text-sm px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-12 bg-gradient-to-r from-[#584D94] to-[#7B6FCC] rounded-2xl p-8 text-white text-center">
                        <h3 className="text-2xl font-bold mb-3">Need Help With Your Home?</h3>
                        <p className="text-white/80 mb-6">LUXHT Fix serves South Florida & Central Florida with construction-grade expertise.</p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <a href="tel:9543003043" className="bg-[#64CEBB] text-white font-bold py-3 px-8 rounded-full hover:bg-[#52bdbc] transition-all flex items-center gap-2 justify-center">
                                <Phone size={18} /> Call (954) 300-3043
                            </a>
                            <button onClick={() => openModal()} className="bg-white/20 backdrop-blur-sm text-white font-bold py-3 px-8 rounded-full hover:bg-white/30 transition-all border border-white/30">
                                Get Free Quote
                            </button>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-12 px-4 bg-slate-50">
                    <div className="container mx-auto max-w-5xl">
                        <h2 className="text-2xl font-bold text-slate-800 mb-8">Related Articles</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {relatedPosts.map(rp => (
                                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group">
                                    <article className="bg-white rounded-xl border border-slate-100 p-6 hover:shadow-md hover:border-[#64CEBB]/30 transition-all h-full flex flex-col">
                                        <span className="text-xs font-bold text-[#584D94] bg-[#584D94]/10 px-2 py-1 rounded-full self-start mb-3">{rp.category}</span>
                                        <h3 className="font-bold text-slate-800 group-hover:text-[#584D94] transition-colors mb-2 line-clamp-2">{rp.title}</h3>
                                        <p className="text-slate-500 text-sm line-clamp-2 flex-1">{rp.excerpt}</p>
                                        <span className="text-[#584D94] text-sm font-semibold flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
                                            Read <ArrowRight size={14} />
                                        </span>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
        </>
    );
}
