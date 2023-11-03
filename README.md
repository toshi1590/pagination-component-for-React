# Pagination module for React

## Description

## How to use

PhotosPage.jsx

```javascript
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
```

Photos.jsx

```javascript
import { useEffect } from "react";

export const Photos = (props) => {  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then((json) => {
      props.setPhotos(json);
    })
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>albumId</th>
            <th>id</th>
            <th>title</th>
            <th>url</th>
            <th>thumbnailUrl</th>
          </tr>
        </thead>
        <tbody>
          {props.photos.map((element, index) => {
            if (index >= (props.page - 1) * props.the_number_of_elements_per_page && index < (props.page * props.the_number_of_elements_per_page)) {
              return(
                <tr key={index}>
                  <td>{element.albumId}</td>
                  <td>{element.id}</td>
                  <td>{element.title}</td>
                  <td>{element.url}</td>
                  <td>{element.thumbnailUrl}</td>
                </tr>
              )
            }
          })}
        </tbody>
      </table>
    </>
  );
}

export default Photos;
```

Pagination.jsx

```javascript
const Pagination = (props) => {  
  let the_number_of_pagination_buttons;

  if (props.the_number_of_elements % props.the_number_of_elements_per_page != 0) {
    the_number_of_pagination_buttons = Math.floor(props.the_number_of_elements / props.the_number_of_elements_per_page) + 1;
  } else {
    the_number_of_pagination_buttons = Math.floor(props.the_number_of_elements / props.the_number_of_elements_per_page);
  }

  const first = () => {
    props.setPage(1);
  }

  const back = () => {
    if (props.page != 1) {
      props.setPage(props.page - 1);
    }
  }

  const move = (index) => {
    props.setPage(index);
  }

  const next = () => {
    if (props.page != the_number_of_pagination_buttons) {
      props.setPage(props.page + 1);
    }
  }
  
  const last = () => {
    props.setPage(the_number_of_pagination_buttons);
  }

  const renderPaginationButtons = () => {
    const numPagesToShow = 5;
    const pages = [];
    let startPage = Math.max(1, props.page - 2);
    let endPage = Math.min(the_number_of_pagination_buttons, startPage + numPagesToShow - 1);

    if (endPage - startPage < numPagesToShow - 1) {
      startPage = Math.max(1, endPage - numPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button key={i} onClick={() => {move(i)}} style={{color: i === props.page ? 'red' : 'black'}}>{i}</button>
      );
    }

    return pages;
  };

  return (
    <>
      <div>
        <button onClick={first}>{"<<"}</button>
        <button onClick={back}>{"<"}</button>
        {renderPaginationButtons()}
        <button onClick={next}>{">"}</button>
        <button onClick={last}>{">>"}</button>
      </div>
    </>
  );
}

export default Pagination;
```
