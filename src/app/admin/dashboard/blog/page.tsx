'use client';

import React, { useState, useEffect } from "react";
import { api } from "@/utils/api";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import Input from "@/shared/Input";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

interface Blog {
  id: string;
  title: string;
  slug: string;
  featuredImage: string;
  contents: string;
  is_active: boolean;
  created_at: string;
}

const BlogAdminPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Form states
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [isActive, setIsActive] = useState(true);

  // Files state
  const [file, setFile] = useState<File | null>(null);
  const [existingImage, setExistingImage] = useState<string>("");

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await api.get<{ blogs: Blog[] }>("/blog");
      if (response.success && response.data) {
        setBlogs(response.data.blogs);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const openAddForm = () => {
    setEditId(null);
    setTitle("");
    setContents("");
    setIsActive(true);
    setFile(null);
    setExistingImage("");
    setIsFormOpen(true);
  };

  const openEditForm = (blog: Blog) => {
    setEditId(blog.id);
    setTitle(blog.title || "");
    setContents(blog.contents || "");
    setIsActive(blog.is_active);
    
    setFile(null);
    setExistingImage(blog.featuredImage || "");
    setIsFormOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("contents", contents);
    formData.append("is_active", isActive.toString());

    if (file) {
      formData.append("featuredImage", file);
    }

    try {
      let response;
      if (editId) {
        response = await api.put(`/blog/${editId}`, formData);
      } else {
        response = await api.post("/blog", formData);
      }

      if (response.success) {
        setIsFormOpen(false);
        fetchBlogs();
      } else {
        alert(response.message || "Failed to save blog details");
      }
    } catch (err: any) {
      alert("Error saving blog");
    }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;
    try {
      const response = await api.delete(`/blog/${id}`);
      if (response.success) {
        fetchBlogs();
      } else {
        alert(response.message || "Failed to delete blog post");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const toggleBlogActive = async (blog: Blog) => {
    try {
      const response = await api.put(`/blog/${blog.id}`, {
        is_active: !blog.is_active,
      });
      if (response.success) {
        fetchBlogs();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const imageBaseUrl = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || 'http://localhost:5000';

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };

  return (
    <div className="space-y-8">
      {/* Header section */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-white">Blog Posts</h2>
          <p className="text-neutral-500 dark:text-neutral-400 mt-1">
            Manage your TravelEase blog posts and articles.
          </p>
        </div>
        {!isFormOpen && (
          <ButtonPrimary 
            onClick={openAddForm}
            className="!bg-[#fa7301] hover:!bg-[#e66a01] border-none"
          >
            Add New Post
          </ButtonPrimary>
        )}
      </div>

      {isFormOpen ? (
        /* Form view */
        <section className="bg-white dark:bg-[#0b2e4e] p-6 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-700">
          <h3 className="text-xl font-semibold mb-6 dark:text-white">
            {editId ? `Edit Post: ${title}` : "Add New Post"}
          </h3>
          <form onSubmit={handleSave} className="space-y-6">
            <div className="space-y-4">
              <label className="block">
                <span className="text-sm font-medium dark:text-neutral-300">Post Title</span>
                <Input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Top 10 places in Sri Lanka"
                  className="mt-1 !bg-white/5 dark:!text-white"
                />
              </label>

              <label className="flex items-center space-x-3 pt-2">
                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                  className="rounded text-[#fa7301] focus:ring-[#fa7301] dark:bg-white/5"
                />
                <span className="text-sm font-medium dark:text-neutral-300">Active / Published</span>
              </label>

              <label className="block">
                <span className="text-sm font-medium dark:text-neutral-300">Featured Image</span>
                
                {existingImage && !file && (
                  <div className="mt-2 mb-4 relative aspect-video rounded-xl overflow-hidden group border border-neutral-200 dark:border-neutral-700 w-48 h-32">
                    <img
                      src={existingImage.startsWith('/') ? `${imageBaseUrl}${existingImage}` : existingImage}
                      alt="Featured Image"
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="mt-1 block w-full text-sm text-neutral-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#fa7301]/10 file:text-[#fa7301] hover:file:bg-[#fa7301]/20"
                />
              </label>

              <label className="block pb-12">
                <span className="text-sm font-medium dark:text-neutral-300 block mb-2">Post Content</span>
                <div className="bg-white dark:text-black rounded-lg overflow-hidden border border-neutral-200">
                  <ReactQuill 
                    theme="snow" 
                    value={contents} 
                    onChange={setContents} 
                    modules={modules}
                    className="h-64 mb-10"
                  />
                </div>
              </label>
            </div>

            {/* Action buttons */}
            <div className="flex justify-end gap-4 border-t border-neutral-200 dark:border-neutral-700 pt-6">
              <ButtonSecondary
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="border-neutral-200 hover:bg-neutral-100"
              >
                Cancel
              </ButtonSecondary>
              <ButtonPrimary
                type="submit"
                loading={saving}
                className="!bg-[#fa7301] hover:!bg-[#e66a01] border-none"
              >
                {editId ? "Update Post" : "Create Post"}
              </ButtonPrimary>
            </div>
          </form>
        </section>
      ) : (
        /* Blogs List view */
        <section className="bg-white dark:bg-[#0b2e4e] rounded-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden shadow-sm">
          {loading ? (
            <div className="text-center py-10 dark:text-neutral-400">Loading blog posts...</div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-12 dark:text-neutral-400">
              No blog posts found. Get started by clicking "Add New Post".
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-neutral-50 dark:bg-white/5 text-neutral-500 dark:text-neutral-300 font-medium">
                  <tr>
                    <th className="px-6 py-4">Title</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Created Date</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-150 dark:divide-neutral-700 dark:text-neutral-300">
                  {blogs.map((blog) => (
                    <tr key={blog.id} className="hover:bg-neutral-50/50 dark:hover:bg-white/5 transition-all">
                      <td className="px-6 py-4 font-semibold text-neutral-800 dark:text-white">
                        {blog.title}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => toggleBlogActive(blog)}
                          className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                            blog.is_active
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-400"
                          }`}
                        >
                          {blog.is_active ? "Published" : "Draft"}
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        {new Date(blog.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-right space-x-1">
                        <button
                          onClick={() => openEditForm(blog)}
                          className="inline-flex items-center justify-center w-6 h-6 rounded border border-green-200 dark:border-green-800 text-green-600 dark:text-green-400 hover:text-green-700 hover:bg-green-50 dark:hover:bg-green-950/20 transition-colors"
                          title="Edit Post"
                        >
                          <PencilIcon className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(blog.id)}
                          className="inline-flex items-center justify-center w-6 h-6 rounded border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
                          title="Delete Post"
                        >
                          <TrashIcon className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default BlogAdminPage;
