import { useState, useEffect } from "react";
import ImageServices from "../../../images-services/ImagesServices";

import "./gallery.css";

const Gallery = () => {
  const [imgList, changeImgList] = useState([]);

  const imageservices = new ImageServices();
  imageservices.getImages("dog", 1).then((res: object) => console.log(res));

  // function renderItems(arr: []) {
  //   const items = arr.map((item, i) => {
  //     return (
  //       <li className="gallery-item" key={i}>
  //         <a className="gallery-link" href="https://google.com/">
  //           <div className="gallery-image">
  //             <img
  //               className="gallery-picture"
  //               src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
  //               alt="pic"
  //             />
  //           </div>
  //           <div className="gallery-control">
  //             <button className="button button-add">1</button>
  //             <button className="button button-add">2</button>
  //             <button className="button button-add">3</button>
  //           </div>
  //         </a>
  //       </li>
  //     );
  //   });

  //return <ul className="gallery-list">{items}</ul>;

  return (
    <div className="gallery">
      <ul className="gallery-list">
        <li className="gallery-item">
          <a className="gallery-link" href="https://google.com/">
            <div className="gallery-image">
              <img
                className="gallery-picture"
                src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                alt="pic"
              />
            </div>
            <div className="gallery-control">
              <button className="button button-add">1</button>
              <button className="button button-add">2</button>
              <button className="button button-add">3</button>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Gallery;
