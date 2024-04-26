import { useState } from "react";

const ImageSlider = () => {
  const allImages = [
    "image-product-1.jpg",
    "image-product-2.jpg",
    "image-product-3.jpg",
    "image-product-4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % allImages.length;
    setCurrentIndex(nextIndex);
    setSelectedThumbnailIndex(nextIndex);
  };

  const handlePrevious = () => {
    const previousIndex =
      (currentIndex - 1 + allImages.length) % allImages.length;
    setCurrentIndex(previousIndex);
    setSelectedThumbnailIndex(previousIndex);
  };

  const handleSelectImage = (index) => {
    setCurrentIndex(index);
    setSelectedThumbnailIndex(index);
  };

  return (
    <div className="relative md:max-w-5xl md:mx-2 lg:mx-2 xl:mx-auto">
      <div>
        <div className="md:overflow-hidden">
          <img
            className="w-full h-80 md:w-[88%] md:rounded-2xl md:h-96 md:transform md:hover:scale-110 md:transition duration-500 md:cursor-pointer "
            src={`public/images/${allImages[currentIndex]}`}
            alt=""
          />
        </div>
        <div className="hidden md:mt-4 md:flex md:justify-between gap-4 md:w-[88%]">
          {allImages.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer relative ${
                selectedThumbnailIndex === index
                  ? "border-orange border-2 rounded-2xl"
                  : ""
              }`}
              onClick={() => handleSelectImage(index)}
            >
              <img
                className="md:w-24 md:rounded-xl"
                src={`public/images/${item}`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <div
        className="previous bg-white w-fit rounded-full p-4 absolute top-[40%] right-4 cursor-pointer md:right-20 md:top-[35%]"
        onClick={handleNext}
      >
        <img src="public/images/icon-next.svg" alt="Next" />
      </div>
      <div
        className="previous bg-white w-fit p-4 rounded-full absolute top-[40%] left-4 cursor-pointer md:top-[35%]"
        onClick={handlePrevious}
      >
        <img src="public/images/icon-previous.svg" alt="Previous" />
      </div>
    </div>
  );
};

export default ImageSlider;
