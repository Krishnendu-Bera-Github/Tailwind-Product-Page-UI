import ImageSlider from "./ImageSlider";
import ProductDescription from "./ProductDescription";

const HeroSection = () => {
  return (
    <div className="md:flex max-w-5xl mx-auto ">
      <div className="md:w-1/2">
        <ImageSlider />
      </div>
      <div className="md:w-1/2">
        <ProductDescription />
      </div>
    </div>
  );
};

export default HeroSection;
