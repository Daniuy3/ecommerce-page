/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./MainGallery.css";

function MainGallery({imgActive, setImgActive}) {
    
    useEffect(() => {
        const mainImg = document.querySelectorAll(".mainGallery__img");
        const thumbs = document.querySelectorAll(".mainGallery__thumb--container");
        thumbs.forEach(thumb => {
            if(thumb.id === `thumb${imgActive}`){
                thumb.classList.add("thumb--active")
            }
            else{
                thumb.classList.remove("thumb--active")
            }
        })
        mainImg.forEach( img => {
          if(img.id === `img${imgActive}`){
            img.classList.add("mainGallery__img--active")
            img.classList.remove("mainGallery__img--inactive")
          }
          else{
            img.classList.remove("mainGallery__img--active")
            img.classList.add("mainGallery__img--inactive")
          }
        })
      }, [imgActive])

  return (
    <div className="mainGallery">
        <div className="mainGallery__container">
            <div className="img__container">
                <img id="img1" className="mainGallery__img" src="/image-product-1.jpg" alt="Image 1" />
            </div>

            <div className="img__container">
                <img id="img2" className="mainGallery__img" src="/image-product-2.jpg" alt="Image 2" />
            </div>
            <div className="img__container">
                <img id="img3" className="mainGallery__img" src="/image-product-3.jpg" alt="Image 3" />
            </div>
            <div className="img__container">
                <img id="img4" className="mainGallery__img" src="/image-product-4.jpg" alt="Image 4" />
            </div>
            
        </div>
        <div className="mainGalery__thumb-container">
            <div id="thumb1" className="mainGallery__thumb--container" onClick={() => setImgActive(1)}>
                <img  className="mainGallery__thumb" src="/image-product-1-thumbnail.jpg" alt="Image 1" />
            </div>

            <div id="thumb2" className="mainGallery__thumb--container" onClick={() => setImgActive(2)}>
                <img  className="mainGallery__thumb" src="/image-product-2-thumbnail.jpg" alt="Image 2" />
            </div>
            <div id="thumb3" className="mainGallery__thumb--container" onClick={() => setImgActive(3)}>
                <img  className="mainGallery__thumb" src="/image-product-3-thumbnail.jpg" alt="Image 3" />
            </div>
            <div id="thumb4" className="mainGallery__thumb--container" onClick={() => setImgActive(4)}>
                <img  className="mainGallery__thumb" src="/image-product-4-thumbnail.jpg" alt="Image 4" />
            </div>
           
        </div>
    </div>
  )
}

export default MainGallery