'use client';

import { createGlobalState } from 'react-hooks-global-state';
import { ListingGalleryImage } from '@/components/listing-image-gallery/utils/types';

interface GlobalState {
  listingImages: ListingGalleryImage[];
}

const initialState: GlobalState = {
  listingImages: [],
};

const { useGlobalState } = createGlobalState(initialState);

export const useListingImages = () => {
  return useGlobalState('listingImages');
};
