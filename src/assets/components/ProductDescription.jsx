const ProductDescription = () => {
  return (
    <div className="max-w-4xl p-5">
      <div>
        <p className="text-orange text-lg font-medium -tracking-tighter">
          SNEAKER COMPANY
        </p>
        <h3 className="text-4xl font-medium py-3">
          Fall Limitless Edition Sneakers
        </h3>
        <p className="text-gray-500">
          These low profile sneakers are your perfect casual wear companion.
          featuring a durable rubber outside sole, they will withstand
          everything the weather can offer.
        </p>
      </div>

      <div className="flex justify-between items-center my-6">
        <div className="flex items-center gap-5">
          <span className="text-4xl font-medium">$125.00</span>
          <span className="bg-paleOrange text-lg font-medium py-1 px-2 rounded-md text-orange">
            50%
          </span>
        </div>
        <div>
          <span className="text-lg font-semibold text-gray-500">$250.00</span>
        </div>
      </div>

      <div className="bg-lightGrayishBlue py-3 px-8 flex justify-between items-center rounded-md">
        <img
          className="cursor-pointer"
          src="public/images/icon-minus.svg"
          alt=""
        />
        <span className="font-bold text-lg">0</span>
        <img
          className="cursor-pointer"
          src="public/images/icon-plus.svg"
          alt=""
        />
      </div>

      <div className="my-6 bg-orange py-3 px-8 text-white flex items-center justify-center gap-5 rounded-md cursor-pointer font-semibold hover:opacity-80">
        <img className="text-white" src="public/images/icon-cart.svg" alt="" />
        <button>Add to Cart</button>
      </div>

      {/* <div className="min-h-screen"></div> */}
    </div>
  );
};

export default ProductDescription;
