import Photos from './Photos';
import Pagination  from './Pagination';
import { useState } from 'react';

export const PhotosPage = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const the_number_of_elements_per_page = 5;

  return (
    <>
      <Photos
        photos={photos} 
        setPhotos={setPhotos} 
        page={page}
        the_number_of_elements_per_page={the_number_of_elements_per_page}
      />
      <Pagination 
        the_number_of_elements={photos.length} 
        page={page} 
        setPage={setPage} 
        the_number_of_elements_per_page={the_number_of_elements_per_page} 
      />
    </>
  );
}

export default PhotosPage;