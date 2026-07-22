'use client';

import React, { useEffect, useState } from "react";
import Badge from "@/shared/Badge";
import Image from "next/image";
import { api } from "@/utils/api";

interface Blog {
  id: string;
  title: string;
  slug: string;
  featuredImage: string;
  contents: string;
  is_active: boolean;
  created_at: string;
}

const Page = ({
  params,
}: {
  params: { slug: string[] };
}) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const slug = params.slug.join('/');

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const response = await api.get<{ blog: Blog }>(`/blog/${slug}`);
        if (response.success && response.data) {
          setBlog(response.data.blog);
        } else {
          setError("Blog post not found.");
        }
      } catch (err) {
        setError("An error occurred while fetching the blog post.");
        console.error(err);
      }
      setLoading(false);
    };

    fetchBlog();
  }, [slug]);

  const imageBaseUrl = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || 'http://localhost:5000';

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#fa7301]"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="text-center text-red-500 py-20 text-lg">
        {error || "Blog post not found."}
      </div>
    );
  }

  const renderHeader = () => {
    return (
      <header className="container rounded-xl">
        <div className="max-w-screen-md mx-auto space-y-5">
          <Badge href="/blog" color="purple" name="Blog" />
          <h1
            className="text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-4xl dark:text-neutral-100 max-w-4xl"
            title={blog.title}
          >
            {blog.title}
          </h1>
          <span className="block text-sm text-neutral-500 dark:text-neutral-400">
            {new Date(blog.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>
      </header>
    );
  };

  const renderContent = () => {
    return (
      <div
        id="single-entry-content"
        className="prose dark:prose-invert prose-sm !max-w-screen-md sm:prose lg:prose-lg mx-auto dark:prose-dark"
        dangerouslySetInnerHTML={{ __html: blog.contents }}
      />
    );
  };

  return (
    <div className="nc-PageSingle pt-8 lg:pt-16 ">
      {renderHeader()}
      
      {blog.featuredImage && (
        <div className="container my-10 sm:my-12 relative aspect-w-16 aspect-h-9 sm:aspect-h-7 lg:aspect-h-5 rounded-3xl overflow-hidden">
          <img 
            className="w-full h-full object-cover" 
            src={blog.featuredImage.startsWith('/') ? `${imageBaseUrl}${blog.featuredImage}` : blog.featuredImage} 
            alt={blog.title} 
          />
        </div>
      )}

      <div className="nc-SingleContent container space-y-10 mb-20">
        {renderContent()}
        {/*renderTags()*/}
        <div className="max-w-screen-md mx-auto border-b border-t border-neutral-100 dark:border-neutral-700"></div>
        {/*renderAuthor()*/}
        {/*renderCommentForm()*/}
        {/*renderCommentLists()*/}
      </div>
      {/* <div className="relative bg-neutral-100 dark:bg-neutral-800 py-16 lg:py-28 mt-16 lg:mt-24">
        <div className="container ">
          <h2 className="text-3xl font-semibold">Related posts</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"> */}
      {/*  */}
      {/*DEMO_POSTS.filter((_, i) => i < 4).map(renderPostRelated)*/}
      {/*  */}
      {/* </div>
        </div>
      </div> */}
    </div>
  );
};

export default Page;
