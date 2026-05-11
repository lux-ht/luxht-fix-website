import { blogPosts, getPostBySlug } from '@/data/blogPosts';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return blogPosts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: post.title,
        description: post.excerpt,
        alternates: { canonical: `https://fix.luxht.com/blog/${post.slug}/` },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: ['LUXHT Fix'],
            tags: post.tags,
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "image": "https://fix.luxht.com/images/logo-wide-hammers.png",
        "author": {
            "@type": "Organization",
            "name": "LUXHT Fix",
            "url": "https://fix.luxht.com/"
        },
        "publisher": {
            "@type": "Organization",
            "name": "LUXHT Fix",
            "logo": {
                "@type": "ImageObject",
                "url": "https://fix.luxht.com/images/logo-wide-hammers.png"
            }
        },
        "datePublished": new Date(post.date).toISOString(),
        "dateModified": new Date(post.date).toISOString()
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <BlogPostClient post={post} />
        </>
    );
}
