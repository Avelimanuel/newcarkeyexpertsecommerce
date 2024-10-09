import { getKeyCovers } from "../../hooks/getKeyCovers";

const CarKeyCovers = () => {
  const { allKeyCovers, loading, error } = getKeyCovers();

  if (loading) {
    return <div className="text-center text-lg font-semibold">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-lg text-red-600">
        An error occured...{error}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      {allKeyCovers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {allKeyCovers.map((keycover) => (
            <div
              key={keycover._id}
              className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={keycover.productImageUrl}
                alt={keycover.productName}
                className="w-full h-60 object-cover sm:h-60 md:h-60  rounded-t-l" // Adjust object-fit based on screen size
                srcSet={`${keycover.productImageUrl}?w=320 320w,
                         ${keycover.productImageUrl}?w=640 640w,
                         ${keycover.productImageUrl}?w=960 960w,
                         ${keycover.productImageUrl}?w=1280 1280w`} // Responsive image sizes
                sizes="(max-width: 640px) 320px, 
                       (max-width: 768px) 640px, 
                       (max-width: 1024px) 960px, 
                       1280px" // Sizes for different screen breakpoints
              />
              <div className="mt-4 break-words text-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  {keycover.productName}
                </h2>
                <h3 className="text-md font-medium text-gray-600 mt-2">
                  {keycover.productDescription}
                </h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-lg font-medium">
          No key covers found
        </div>
      )}
    </div>
  );
};

export default CarKeyCovers;
