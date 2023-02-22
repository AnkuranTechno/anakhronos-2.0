import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Gallery.scss";
import {
  gallimg1,
  gallimg2,
  gallimg3,
  gallimg4,
  gallimg5,
  gallimg6,
  gallimg7,
  gallimg8,
  gallimg9,
  gallimg10,
  gallimg11,
  gallimg12,
  gallimg13,
  gallimg14,
  gallimg15,
  gallimg16,
  gallimg17,
  gallimg18,
  gallimg19,
  gallimg20,
  gallimg21,
  gallimg22,
  gallimg23,
  gallimg24,
  gallimg25,
  gallimg26,
  gallimg27,
} from "../../constants/images";

const data = [
  {
    img: gallimg1,
    id: 1,
  },
  {
    img: gallimg2,
    id: 2,
  },
  {
    img: gallimg3,
    id: 3,
  },
  {
    img: gallimg4,
    id: 4,
  },
  {
    img: gallimg5,
    id: 5,
  },
  {
    img: gallimg6,
    id: 6,
  },
  {
    img: gallimg7,
    id: 7,
  },
  {
    img: gallimg8,
    id: 8,
  },
  {
    img: gallimg9,
    id: 9,
  },
  {
    img: gallimg10,
    id: 10,
  },
  {
    img: gallimg11,
    id: 11,
  },
  {
    img: gallimg12,
    id: 12,
  },
  {
    img: gallimg13,
    id: 13,
  },
  {
    img: gallimg14,
    id: 14,
  },
  {
    img: gallimg15,
    id: 15,
  },
  {
    img: gallimg16,
    id: 16,
  },
  {
    img: gallimg17,
    id: 17,
  },
  {
    img: gallimg18,
    id: 18,
  },
  {
    img: gallimg19,
    id: 19,
  },
  {
    img: gallimg20,
    id: 20,
  },
  {
    img: gallimg21,
    id: 21,
  },
  {
    img: gallimg22,
    id: 22,
  },
  {
    img: gallimg23,
    id: 23,
  },
  {
    img: gallimg24,
    id: 24,
  },
  {
    img: gallimg25,
    id: 25,
  },
  {
    img: gallimg26,
    id: 26,
  },
  {
    img: gallimg27,
    id: 27,
  },
];
const Gallery = () => {
  return (
    <div className="app__section gallery" id="gallery">
      <h1 className="app__section-container">Gallery</h1>
      <div className=" gallery__container">
        {data.map((item, id) => {
          return (
            <div className="item" key={id}>
              <LazyLoadImage
                src={item.img}
                effect="blur"
                height={"100%"}
                width={"100%"}
                alt="gallery"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
