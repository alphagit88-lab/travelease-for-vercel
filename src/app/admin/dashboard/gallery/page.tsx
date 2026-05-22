'use client';

import React, { useState, useEffect } from "react";
import { api } from "@/utils/api";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import Input from "@/shared/Input";
import Image from "next/image";
import { TrashIcon } from "@heroicons/react/24/outline";

interface GalleryImage {
  id: number;
  title: string;
  description: string;
  image_url: string;
  sort_order: number;
  is_active: boolean;
}

const GalleryPage = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchImages = async () => {
    setLoading(true);
    const response = await api.get<{ images: GalleryImage[] }>("/gallery");
    if (response.success && response.data) {
      setImages(response.data.images);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("description", description);

    const response = await api.post("/gallery", formData);
    setUploading(false);

    if (response.success) {
      setFile(null);
      setTitle("");
      setDescription("");
      fetchImages();
    } else {
      alert(response.message || "Upload failed");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    const response = await api.delete(`/gallery/${id}`);
    if (response.success) {
      fetchImages();
    } else {
      alert(response.message || "Delete failed");
    }
  };

  const toggleActive = async (image: GalleryImage) => {
    const response = await api.put(`/gallery/${image.id}`, {
      is_active: !image.is_active,
    });
    if (response.success) {
      fetchImages();
    }
  };

  return (
    <div className="space-y-10">
      {/* Upload Form */}
      <section className="bg-white dark:bg-[#0b2e4e] p-6 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-xl font-semibold mb-6 dark:text-white">Upload New Image</h3>
        <form onSubmit={handleUpload} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <label className="block">
              <span className="text-sm font-medium dark:text-neutral-300">Image File</span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="mt-1 block w-full text-sm text-neutral-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#fa7301]/10 file:text-[#fa7301] hover:file:bg-[#fa7301]/20"
                required
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium dark:text-neutral-300">Title</span>
              <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Slider Title"
                className="mt-1 !bg-white/5 dark:!text-white"
              />
            </label>
          </div>
          <div className="space-y-4">
            <label className="block">
              <span className="text-sm font-medium dark:text-neutral-300">Description</span>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Image description..."
                className="mt-1 block w-full rounded-2xl border-neutral-200 focus:border-[#fa7301] focus:ring focus:ring-[#fa7301]/20 bg-white dark:bg-white/5 dark:border-neutral-700 p-3 dark:text-white"
                rows={3}
              />
            </label>
            <div className="flex justify-end pt-2">
              <ButtonPrimary 
                type="submit" 
                loading={uploading} 
                disabled={!file}
                className="!bg-[#fa7301] hover:!bg-[#e66a01] border-none"
              >
                Upload Image
              </ButtonPrimary>
            </div>
          </div>
        </form>
      </section>

      {/* Images List */}
      <section>
        <h3 className="text-xl font-semibold mb-6 dark:text-white">Current Gallery Images</h3>
        {loading ? (
          <div className="text-center py-10 dark:text-neutral-400">Loading images...</div>
        ) : images.length === 0 ? (
          <div className="text-center py-10 bg-white dark:bg-[#0b2e4e] rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-700 dark:text-neutral-400">
            No images uploaded yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => {
              const imageBaseUrl = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || 'http://localhost:5000';
              return (
                <div key={image.id} className="bg-white dark:bg-[#0b2e4e] rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700 group transition-all hover:shadow-lg">
                  <div className="relative aspect-[16/9] w-full">
                    <img
                      src={`${imageBaseUrl}${image.image_url}`}
                      alt={image.title}
                      className="object-cover w-full h-full"
                    />
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button
                      onClick={() => toggleActive(image)}
                      className={`p-2 rounded-full shadow-lg transition-all ${image.is_active ? 'bg-[#fa7301] text-white' : 'bg-gray-200 text-gray-600'}`}
                      title={image.is_active ? "Active" : "Inactive"}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-lg truncate dark:text-white">{image.title || "No Title"}</h4>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2 mt-1 min-h-[2.5rem]">
                    {image.description || "No description provided."}
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs text-neutral-400">Order: {image.sort_order}</span>
                    <button
                      onClick={() => handleDelete(image.id)}
                      className="inline-flex items-center justify-center w-6 h-6 rounded border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
                      title="Delete Image"
                    >
                      <TrashIcon className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default GalleryPage;
