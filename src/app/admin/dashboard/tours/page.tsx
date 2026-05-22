'use client';

import React, { useState, useEffect } from "react";
import { api } from "@/utils/api";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import Input from "@/shared/Input";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

interface ItineraryDay {
  day: string;
  title: string;
  desc: string;
}

interface Tour {
  id: string;
  title: string;
  duration: string;
  overview: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  price: string;
  galleryImgs: string[];
  address: string;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  reviewStart: number;
  reviewCount: number;
  map: { lat: number; lng: number };
  is_active: boolean;
  priceData?: { type: string; p2: string; p4: string; p6: string }[];
}

const ToursAdminPage = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Form states
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [overview, setOverview] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [maxGuests, setMaxGuests] = useState(0);
  const [reviewStart, setReviewStart] = useState(5.0);
  const [reviewCount, setReviewCount] = useState(0);
  const [mapLat, setMapLat] = useState(6.9271);
  const [mapLng, setMapLng] = useState(79.8612);
  const [isActive, setIsActive] = useState(true);

  // Pricing Table states
  const [stdP2, setStdP2] = useState("");
  const [stdP4, setStdP4] = useState("");
  const [stdP6, setStdP6] = useState("");
  const [supP2, setSupP2] = useState("");
  const [supP4, setSupP4] = useState("");
  const [supP6, setSupP6] = useState("");
  const [luxP2, setLuxP2] = useState("");
  const [luxP4, setLuxP4] = useState("");
  const [luxP6, setLuxP6] = useState("");

  // Arrays/Objects states
  const [highlightsInput, setHighlightsInput] = useState("");
  const [inclusionsInput, setInclusionsInput] = useState("");
  const [exclusionsInput, setExclusionsInput] = useState("");
  
  const [itinerary, setItinerary] = useState<ItineraryDay[]>([]);
  const [newDay, setNewDay] = useState("");
  const [newDayTitle, setNewDayTitle] = useState("");
  const [newDayDesc, setNewDayDesc] = useState("");

  // Files state
  const [files, setFiles] = useState<FileList | null>(null);
  const [existingImages, setExistingImages] = useState<string[]>([]);

  const fetchTours = async () => {
    setLoading(true);
    const response = await api.get<{ tours: Tour[] }>("/tours");
    if (response.success && response.data) {
      setTours(response.data.tours);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const openAddForm = () => {
    setEditId(null);
    setTitle("");
    setDuration("");
    setOverview("");
    setPrice("");
    setAddress("");
    setBedrooms(0);
    setBathrooms(0);
    setMaxGuests(0);
    setReviewStart(5.0);
    setReviewCount(0);
    setMapLat(6.9271);
    setMapLng(79.8612);
    setIsActive(true);
    setHighlightsInput("");
    setInclusionsInput("");
    setExclusionsInput("");
    setItinerary([]);
    setFiles(null);
    setExistingImages([]);
    setStdP2("");
    setStdP4("");
    setStdP6("");
    setSupP2("");
    setSupP4("");
    setSupP6("");
    setLuxP2("");
    setLuxP4("");
    setLuxP6("");
    setIsFormOpen(true);
  };

  const openEditForm = (tour: Tour) => {
    setEditId(tour.id);
    setTitle(tour.title || "");
    setDuration(tour.duration || "");
    setOverview(tour.overview || "");
    setPrice(tour.price || "");
    setAddress(tour.address || "");
    setBedrooms(tour.bedrooms || 0);
    setBathrooms(tour.bathrooms || 0);
    setMaxGuests(tour.maxGuests || 0);
    setReviewStart(tour.reviewStart || 5.0);
    setReviewCount(tour.reviewCount || 0);
    setMapLat(tour.map?.lat || 6.9271);
    setMapLng(tour.map?.lng || 79.8612);
    setIsActive(tour.is_active);
    
    setHighlightsInput((tour.highlights || []).join("\n"));
    setInclusionsInput((tour.inclusions || []).join("\n"));
    setExclusionsInput((tour.exclusions || []).join("\n"));
    
    setItinerary(tour.itinerary || []);
    setFiles(null);
    setExistingImages(tour.galleryImgs || []);

    const priceData = tour.priceData || [];
    const std = (priceData.find((p: any) => p.type === "Standard") || {}) as any;
    const sup = (priceData.find((p: any) => p.type === "Superior") || {}) as any;
    const lux = (priceData.find((p: any) => p.type === "Luxury") || {}) as any;

    setStdP2(std.p2 || "");
    setStdP4(std.p4 || "");
    setStdP6(std.p6 || "");
    setSupP2(sup.p2 || "");
    setSupP4(sup.p4 || "");
    setSupP6(sup.p6 || "");
    setLuxP2(lux.p2 || "");
    setLuxP4(lux.p4 || "");
    setLuxP6(lux.p6 || "");

    setIsFormOpen(true);
  };

  const addItineraryDay = () => {
    if (!newDay || !newDayTitle) return;
    setItinerary([...itinerary, { day: newDay, title: newDayTitle, desc: newDayDesc }]);
    setNewDay("");
    setNewDayTitle("");
    setNewDayDesc("");
  };

  const removeItineraryDay = (index: number) => {
    setItinerary(itinerary.filter((_, i) => i !== index));
  };

  const removeExistingImage = (idx: number) => {
    setExistingImages(existingImages.filter((_, i) => i !== idx));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("duration", duration);
    formData.append("overview", overview);
    formData.append("price", price);
    formData.append("address", address);
    formData.append("bedrooms", bedrooms.toString());
    formData.append("bathrooms", bathrooms.toString());
    formData.append("maxGuests", maxGuests.toString());
    formData.append("reviewStart", reviewStart.toString());
    formData.append("reviewCount", reviewCount.toString());
    formData.append("is_active", isActive.toString());
    formData.append("map", JSON.stringify({ lat: Number(mapLat), lng: Number(mapLng) }));

    const parsedHighlights = highlightsInput.split("\n").map(h => h.trim()).filter(Boolean);
    const parsedInclusions = inclusionsInput.split("\n").map(i => i.trim()).filter(Boolean);
    const parsedExclusions = exclusionsInput.split("\n").map(ex => ex.trim()).filter(Boolean);

    formData.append("highlights", JSON.stringify(parsedHighlights));
    formData.append("inclusions", JSON.stringify(parsedInclusions));
    formData.append("exclusions", JSON.stringify(parsedExclusions));
    formData.append("itinerary", JSON.stringify(itinerary));
    formData.append("galleryImgs", JSON.stringify(existingImages));

    const parsedPriceData = [
      { type: "Standard", p2: stdP2, p4: stdP4, p6: stdP6 },
      { type: "Superior", p2: supP2, p4: supP4, p6: supP6 },
      { type: "Luxury", p2: luxP2, p4: luxP4, p6: luxP6 },
    ];
    formData.append("priceData", JSON.stringify(parsedPriceData));

    if (files) {
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }
    }

    let response;
    if (editId) {
      response = await api.put(`/tours/${editId}`, formData);
    } else {
      response = await api.post("/tours", formData);
    }

    setSaving(false);
    if (response.success) {
      setIsFormOpen(false);
      fetchTours();
    } else {
      alert(response.message || "Failed to save tour details");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this tour?")) return;
    const response = await api.delete(`/tours/${id}`);
    if (response.success) {
      fetchTours();
    } else {
      alert(response.message || "Failed to delete tour");
    }
  };

  const toggleTourActive = async (tour: Tour) => {
    const response = await api.put(`/tours/${tour.id}`, {
      is_active: !tour.is_active,
    });
    if (response.success) {
      fetchTours();
    }
  };

  const imageBaseUrl = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || 'http://localhost:5000';

  return (
    <div className="space-y-8">
      {/* Header section */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-white">Tours Packages</h2>
          <p className="text-neutral-500 dark:text-neutral-400 mt-1">
            Manage your TravelEase tour packages, details, and itineraries.
          </p>
        </div>
        {!isFormOpen && (
          <ButtonPrimary 
            onClick={openAddForm}
            className="!bg-[#fa7301] hover:!bg-[#e66a01] border-none"
          >
            Add New Tour
          </ButtonPrimary>
        )}
      </div>

      {isFormOpen ? (
        /* Form view */
        <section className="bg-white dark:bg-[#0b2e4e] p-6 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-700">
          <h3 className="text-xl font-semibold mb-6 dark:text-white">
            {editId ? `Edit Tour: ${title}` : "Add New Tour"}
          </h3>
          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column: Basic Details */}
              <div className="space-y-4">
                <label className="block">
                  <span className="text-sm font-medium dark:text-neutral-300">Tour Title</span>
                  <Input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Beachfront Delights"
                    className="mt-1 !bg-white/5 dark:!text-white"
                  />
                </label>

                <div className="grid grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-sm font-medium dark:text-neutral-300">Duration</span>
                    <Input
                      type="text"
                      required
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      placeholder="e.g. 4 Nights / 5 Days"
                      className="mt-1 !bg-white/5 dark:!text-white"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium dark:text-neutral-300">Price (USD)</span>
                    <Input
                      type="text"
                      required
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="e.g. $900"
                      className="mt-1 !bg-white/5 dark:!text-white"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-sm font-medium dark:text-neutral-300">Places Visited / Address</span>
                  <Input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="e.g. Bentota, Galle, Colombo"
                    className="mt-1 !bg-white/5 dark:!text-white"
                  />
                </label>

                <div className="grid grid-cols-3 gap-2">
                  <label className="block">
                    <span className="text-sm font-medium dark:text-neutral-300">Bedrooms</span>
                    <Input
                      type="number"
                      value={bedrooms}
                      onChange={(e) => setBedrooms(Number(e.target.value))}
                      className="mt-1 !bg-white/5 dark:!text-white"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium dark:text-neutral-300">Bathrooms</span>
                    <Input
                      type="number"
                      value={bathrooms}
                      onChange={(e) => setBathrooms(Number(e.target.value))}
                      className="mt-1 !bg-white/5 dark:!text-white"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium dark:text-neutral-300">Max Guests</span>
                    <Input
                      type="number"
                      value={maxGuests}
                      onChange={(e) => setMaxGuests(Number(e.target.value))}
                      className="mt-1 !bg-white/5 dark:!text-white"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-sm font-medium dark:text-neutral-300">Latitude</span>
                    <Input
                      type="number"
                      step="any"
                      value={mapLat}
                      onChange={(e) => setMapLat(Number(e.target.value))}
                      className="mt-1 !bg-white/5 dark:!text-white"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium dark:text-neutral-300">Longitude</span>
                    <Input
                      type="number"
                      step="any"
                      value={mapLng}
                      onChange={(e) => setMapLng(Number(e.target.value))}
                      className="mt-1 !bg-white/5 dark:!text-white"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-sm font-medium dark:text-neutral-300">Rating (out of 5)</span>
                    <Input
                      type="number"
                      step="0.1"
                      min="1"
                      max="5"
                      value={reviewStart}
                      onChange={(e) => setReviewStart(Number(e.target.value))}
                      className="mt-1 !bg-white/5 dark:!text-white"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium dark:text-neutral-300">Reviews Count</span>
                    <Input
                      type="number"
                      value={reviewCount}
                      onChange={(e) => setReviewCount(Number(e.target.value))}
                      className="mt-1 !bg-white/5 dark:!text-white"
                    />
                  </label>
                </div>

                <label className="flex items-center space-x-3 pt-2">
                  <input
                    type="checkbox"
                    checked={isActive}
                    onChange={(e) => setIsActive(e.target.checked)}
                    className="rounded text-[#fa7301] focus:ring-[#fa7301] dark:bg-white/5"
                  />
                  <span className="text-sm font-medium dark:text-neutral-300">Active / Published</span>
                </label>
              </div>

              {/* Right Column: Text Areas and Arrays */}
              <div className="space-y-4">
                <label className="block">
                  <span className="text-sm font-medium dark:text-neutral-300">Overview Description</span>
                  <textarea
                    required
                    value={overview}
                    onChange={(e) => setOverview(e.target.value)}
                    placeholder="Describe the tour..."
                    className="mt-1 block w-full rounded-2xl border-neutral-200 focus:border-[#fa7301] focus:ring focus:ring-[#fa7301]/20 bg-white dark:bg-white/5 dark:border-neutral-700 p-3 dark:text-white"
                    rows={4}
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium dark:text-neutral-300">Tour Highlights (One per line)</span>
                  <textarea
                    value={highlightsInput}
                    onChange={(e) => setHighlightsInput(e.target.value)}
                    placeholder="UNESCO heritage sites&#10;Safari experience"
                    className="mt-1 block w-full rounded-2xl border-neutral-200 focus:border-[#fa7301] focus:ring focus:ring-[#fa7301]/20 bg-white dark:bg-white/5 dark:border-neutral-700 p-3 dark:text-white"
                    rows={3}
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium dark:text-neutral-300">Inclusions (One per line)</span>
                  <textarea
                    value={inclusionsInput}
                    onChange={(e) => setInclusionsInput(e.target.value)}
                    placeholder="Accommodation in selected hotels&#10;Daily breakfast"
                    className="mt-1 block w-full rounded-2xl border-neutral-200 focus:border-[#fa7301] focus:ring focus:ring-[#fa7301]/20 bg-white dark:bg-white/5 dark:border-neutral-700 p-3 dark:text-white"
                    rows={3}
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium dark:text-neutral-300">Exclusions (One per line)</span>
                  <textarea
                    value={exclusionsInput}
                    onChange={(e) => setExclusionsInput(e.target.value)}
                    placeholder="Visa charges&#10;Meal costs"
                    className="mt-1 block w-full rounded-2xl border-neutral-200 focus:border-[#fa7301] focus:ring focus:ring-[#fa7301]/20 bg-white dark:bg-white/5 dark:border-neutral-700 p-3 dark:text-white"
                    rows={3}
                  />
                </label>
              </div>
            </div>

            {/* Price Table Section */}
            <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
              <h4 className="text-lg font-medium dark:text-white mb-4">Detailed Pricing Table</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Standard */}
                <div className="space-y-3 bg-neutral-50/50 dark:bg-white/5 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700">
                  <h5 className="font-semibold text-neutral-800 dark:text-neutral-200">Standard Package</h5>
                  <label className="block">
                    <span className="text-xs text-neutral-500">2 Pax Price</span>
                    <Input type="text" value={stdP2} onChange={(e) => setStdP2(e.target.value)} placeholder="e.g. $900" className="mt-1 !bg-white/5 dark:!text-white" />
                  </label>
                  <label className="block">
                    <span className="text-xs text-neutral-500">4 Pax Price</span>
                    <Input type="text" value={stdP4} onChange={(e) => setStdP4(e.target.value)} placeholder="e.g. $900" className="mt-1 !bg-white/5 dark:!text-white" />
                  </label>
                  <label className="block">
                    <span className="text-xs text-neutral-500">6+ Pax Price</span>
                    <Input type="text" value={stdP6} onChange={(e) => setStdP6(e.target.value)} placeholder="e.g. $900" className="mt-1 !bg-white/5 dark:!text-white" />
                  </label>
                </div>
                
                {/* Superior */}
                <div className="space-y-3 bg-neutral-50/50 dark:bg-white/5 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700">
                  <h5 className="font-semibold text-neutral-800 dark:text-neutral-200">Superior Package</h5>
                  <label className="block">
                    <span className="text-xs text-neutral-500">2 Pax Price</span>
                    <Input type="text" value={supP2} onChange={(e) => setSupP2(e.target.value)} placeholder="e.g. $1,100" className="mt-1 !bg-white/5 dark:!text-white" />
                  </label>
                  <label className="block">
                    <span className="text-xs text-neutral-500">4 Pax Price</span>
                    <Input type="text" value={supP4} onChange={(e) => setSupP4(e.target.value)} placeholder="e.g. $1,100" className="mt-1 !bg-white/5 dark:!text-white" />
                  </label>
                  <label className="block">
                    <span className="text-xs text-neutral-500">6+ Pax Price</span>
                    <Input type="text" value={supP6} onChange={(e) => setSupP6(e.target.value)} placeholder="e.g. $1,100" className="mt-1 !bg-white/5 dark:!text-white" />
                  </label>
                </div>

                {/* Luxury */}
                <div className="space-y-3 bg-neutral-50/50 dark:bg-white/5 p-4 rounded-xl border border-neutral-200 dark:border-neutral-700">
                  <h5 className="font-semibold text-neutral-800 dark:text-neutral-200">Luxury Package</h5>
                  <label className="block">
                    <span className="text-xs text-neutral-500">2 Pax Price</span>
                    <Input type="text" value={luxP2} onChange={(e) => setLuxP2(e.target.value)} placeholder="e.g. $1,800" className="mt-1 !bg-white/5 dark:!text-white" />
                  </label>
                  <label className="block">
                    <span className="text-xs text-neutral-500">4 Pax Price</span>
                    <Input type="text" value={luxP4} onChange={(e) => setLuxP4(e.target.value)} placeholder="e.g. $1,800" className="mt-1 !bg-white/5 dark:!text-white" />
                  </label>
                  <label className="block">
                    <span className="text-xs text-neutral-500">6+ Pax Price</span>
                    <Input type="text" value={luxP6} onChange={(e) => setLuxP6(e.target.value)} placeholder="e.g. $1,800" className="mt-1 !bg-white/5 dark:!text-white" />
                  </label>
                </div>
              </div>
            </div>

            {/* Itinerary Management Section */}
            <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
              <h4 className="text-lg font-medium dark:text-white mb-4">Tour Itinerary</h4>
              
              {/* Existing days */}
              <div className="space-y-3 mb-6">
                {itinerary.map((day, idx) => (
                  <div key={idx} className="flex justify-between items-start bg-neutral-50 dark:bg-white/5 p-4 rounded-xl border border-neutral-100 dark:border-neutral-800">
                    <div>
                      <p className="text-xs text-[#fa7301] font-semibold uppercase">{day.day}</p>
                      <h5 className="font-semibold text-neutral-800 dark:text-white mt-0.5">{day.title}</h5>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{day.desc}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItineraryDay(idx)}
                      className="text-red-500 hover:text-red-700 text-xs font-semibold"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              {/* Add day form fields */}
              <div className="bg-neutral-50/50 dark:bg-white/5 p-4 rounded-xl border border-dashed border-neutral-300 dark:border-neutral-700 grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  type="text"
                  placeholder="e.g. Day 1"
                  value={newDay}
                  onChange={(e) => setNewDay(e.target.value)}
                  className="!bg-white/5 dark:!text-white"
                />
                <Input
                  type="text"
                  placeholder="e.g. Arrival in Colombo"
                  value={newDayTitle}
                  onChange={(e) => setNewDayTitle(e.target.value)}
                  className="col-span-2 !bg-white/5 dark:!text-white"
                />
                <textarea
                  placeholder="Activity description..."
                  value={newDayDesc}
                  onChange={(e) => setNewDayDesc(e.target.value)}
                  className="md:col-span-3 block w-full rounded-2xl border-neutral-200 focus:border-[#fa7301] focus:ring focus:ring-[#fa7301]/20 bg-white dark:bg-white/5 dark:border-neutral-700 p-3 dark:text-white"
                  rows={2}
                />
                <div className="md:col-span-3 flex justify-end">
                  <ButtonSecondary
                    type="button"
                    onClick={addItineraryDay}
                    className="border-neutral-200 hover:bg-neutral-100"
                  >
                    Add Day
                  </ButtonSecondary>
                </div>
              </div>
            </div>

            {/* Images Upload / Management Section */}
            <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
              <h4 className="text-lg font-medium dark:text-white mb-4">Tour Image Gallery</h4>

              {/* Existing photos preview */}
              {existingImages.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 mb-6">
                  {existingImages.map((imgUrl, idx) => (
                    <div key={idx} className="relative aspect-video rounded-xl overflow-hidden group border border-neutral-200 dark:border-neutral-700">
                      <img
                        src={imgUrl.startsWith('/') ? `${imageBaseUrl}${imgUrl}` : imgUrl}
                        alt="Tour Photo"
                        className="object-cover w-full h-full"
                      />
                      <button
                        type="button"
                        onClick={() => removeExistingImage(idx)}
                        className="absolute inset-0 bg-red-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white font-semibold text-sm transition-opacity"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Select new files */}
              <label className="block">
                <span className="text-sm font-medium dark:text-neutral-300">Upload New Tour Photos</span>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => setFiles(e.target.files)}
                  className="mt-1 block w-full text-sm text-neutral-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#fa7301]/10 file:text-[#fa7301] hover:file:bg-[#fa7301]/20"
                />
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
                {editId ? "Update Tour" : "Create Tour"}
              </ButtonPrimary>
            </div>
          </form>
        </section>
      ) : (
        /* Tours List view */
        <section className="bg-white dark:bg-[#0b2e4e] rounded-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden shadow-sm">
          {loading ? (
            <div className="text-center py-10 dark:text-neutral-400">Loading tours...</div>
          ) : tours.length === 0 ? (
            <div className="text-center py-12 dark:text-neutral-400">
              No tours found. Get started by clicking "Add New Tour".
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-neutral-50 dark:bg-white/5 text-neutral-500 dark:text-neutral-300 font-medium">
                  <tr>
                    <th className="px-6 py-4">Title</th>
                    <th className="px-6 py-4">Duration</th>
                    <th className="px-6 py-4">Price</th>
                    <th className="px-6 py-4">Location</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-150 dark:divide-neutral-700 dark:text-neutral-300">
                  {tours.map((tour) => (
                    <tr key={tour.id} className="hover:bg-neutral-50/50 dark:hover:bg-white/5 transition-all">
                      <td className="px-6 py-4 font-semibold text-neutral-800 dark:text-white">
                        {tour.title}
                      </td>
                      <td className="px-6 py-4">{tour.duration}</td>
                      <td className="px-6 py-4 font-medium">{tour.price}</td>
                      <td className="px-6 py-4 truncate max-w-[200px]" title={tour.address}>
                        {tour.address}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => toggleTourActive(tour)}
                          className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                            tour.is_active
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-400"
                          }`}
                        >
                          {tour.is_active ? "Published" : "Draft"}
                        </button>
                      </td>
                      <td className="px-6 py-4 text-right space-x-1">
                        <button
                          onClick={() => openEditForm(tour)}
                          className="inline-flex items-center justify-center w-6 h-6 rounded border border-green-200 dark:border-green-800 text-green-600 dark:text-green-400 hover:text-green-700 hover:bg-green-50 dark:hover:bg-green-950/20 transition-colors"
                          title="Edit Tour"
                        >
                          <PencilIcon className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(tour.id)}
                          className="inline-flex items-center justify-center w-6 h-6 rounded border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
                          title="Delete Tour"
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

export default ToursAdminPage;
