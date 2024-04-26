import { useState } from "react";

const ImageSlider = () => {
  const allImages = [
    "image-product-1.jpg",
    "image-product-2.jpg",
    "image-product-3.jpg",
    "image-product-4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % allImages.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrevious = () => {
    const previousIndex =
      (currentIndex - 1 + allImages.length) % allImages.length;
    setCurrentIndex(previousIndex);
  };

  return (
    <div>
      <div className="relative">
        <div className="">
          <img
            className="w-full h-80"
            src={`public/images/${allImages[currentIndex]}`}
            alt=""
          />
        </div>
        <div
          className="previous bg-white w-fit rounded-full p-4 absolute top-[40%] right-4 cursor-pointer"
          onClick={handleNext}
        >
          <img src="public/images/icon-next.svg" alt="Next" />
        </div>
        <div
          className="previous bg-white w-fit p-4 rounded-full absolute top-[40%] left-4 cursor-pointer"
          onClick={handlePrevious}
        >
          <img src="public/images/icon-previous.svg" alt="Previous" />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
