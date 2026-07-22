'use client';

import React, { useState, useEffect } from "react";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import { api } from "@/utils/api";
import Link from "next/link";
import Image from "next/image";

interface Blog {
  id: string;
  title: string;
  slug: string;
  featuredImage: string;
  contents: string;
  is_active: boolean;
  created_at: string;
}

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await api.get<{ blogs: Blog[] }>("/blog?active=true");
        if (response.success && response.data) {
          setBlogs(response.data.blogs);
        } else {
          setError("Failed to load blog posts.");
        }
      } catch (err) {
        setError("An error occurred while fetching blog posts.");
        console.error(err);
      }
      setLoading(false);
    };

    fetchBlogs();
  }, []);

  const imageBaseUrl = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || 'http://localhost:5000';

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogs.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="bg-[#f5f8fa] min-h-screen">
      {/* Hero section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/images/travelhero2.png)` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,40,57,0.35),rgba(6,40,57,0.8))]" />
        <div className="container relative flex min-h-[320px] flex-col justify-center py-20 text-white lg:min-h-[360px]">
          <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl text-center sm:text-left" style={{ fontFamily: "var(--font-playfair), serif" }}>
            Our <span className="text-[#fa7301]">Blog</span>
          </h1>
        </div>
      </section>

      {/* Content section */}
      <section className="container mx-auto px-4 relative z-10 -mt-10 pb-20 lg:-mt-16 lg:pb-24">
        <div className="rounded-[34px] bg-white p-6 shadow-[0_30px_90px_rgba(15,23,42,0.12)] sm:p-8 lg:p-10 min-h-[500px]">
          <div className="text-center w-full max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold">Latest Articles</h2>
            <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">
              Read the latest news and stories from our blog.
            </span>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-48">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#fa7301]"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-10">{error}</div>
          ) : blogs.length === 0 ? (
            <div className="text-center text-neutral-500 dark:text-neutral-400 py-20 text-lg">
              No posts available at the moment. Please check back later.
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {currentPosts.map((post) => (
                  <div key={post.id} className="relative flex flex-col group bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-neutral-100">
                    <Link href={`/blog/${post.slug || post.id}`} className="block aspect-w-16 aspect-h-10 relative w-full h-64 overflow-hidden">
                      <img
                        src={post.featuredImage?.startsWith('/') ? `${imageBaseUrl}${post.featuredImage}` : (post.featuredImage || '/images/placeholder.png')}
                        alt={post.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-xs text-neutral-500 dark:text-neutral-400 mb-2 block">
                        {new Date(post.created_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white line-clamp-2 mb-4">
                        <Link href={`/blog/${post.slug || post.id}`} className="hover:text-[#fa7301] transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <div className="mt-auto">
                        <Link 
                          href={`/blog/${post.slug || post.id}`}
                          className="text-sm font-medium text-[#fa7301] hover:text-[#e66a01] flex items-center"
                        >
                          Read more
                          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-16 space-x-2">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`w-10 h-10 flex items-center justify-center rounded-full border ${
                      currentPage === 1 
                        ? 'border-neutral-200 text-neutral-400 cursor-not-allowed dark:border-neutral-700' 
                        : 'border-neutral-300 hover:bg-neutral-50 text-neutral-700 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-800'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => paginate(i + 1)}
                      className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
                        currentPage === i + 1
                          ? 'bg-[#fa7301] text-white shadow-lg shadow-[#fa7301]/20'
                          : 'border border-neutral-300 hover:bg-neutral-50 text-neutral-700 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-800'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`w-10 h-10 flex items-center justify-center rounded-full border ${
                      currentPage === totalPages 
                        ? 'border-neutral-200 text-neutral-400 cursor-not-allowed dark:border-neutral-700' 
                        : 'border-neutral-300 hover:bg-neutral-50 text-neutral-700 dark:border-neutral-600 dark:text-neutral-300 dark:hover:bg-neutral-800'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
