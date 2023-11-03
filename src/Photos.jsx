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