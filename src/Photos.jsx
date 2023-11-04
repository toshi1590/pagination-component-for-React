import PhotosModule from './Photos.module.css';
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
      <div className={PhotosModule.table_container}>
      <table className={PhotosModule.table}>
        <thead>
          <tr>
            <th className={PhotosModule.th}>albumId</th>
            <th className={PhotosModule.th}>id</th>
            <th className={PhotosModule.th}>title</th>
            <th className={PhotosModule.th}>url</th>
            <th className={PhotosModule.th}>thumbnailUrl</th>
          </tr>
        </thead>
        <tbody>
          {props.photos.map((element, index) => {
            if (index >= (props.page - 1) * props.the_number_of_elements_per_page && index < (props.page * props.the_number_of_elements_per_page)) {
              return(
                <tr className={PhotosModule.tr} key={index}>
                  <td className={PhotosModule.td}>{element.albumId}</td>
                  <td className={PhotosModule.td}>{element.id}</td>
                  <td className={PhotosModule.td}>{element.title}</td>
                  <td className={PhotosModule.td}>{element.url}</td>
                  <td className={PhotosModule.td}>{element.thumbnailUrl}</td>
                </tr>
              )
            }
          })}
        </tbody>
      </table>
      </div>
      
    </>
  );
}

export default Photos;