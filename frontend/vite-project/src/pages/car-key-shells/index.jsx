import { getKeyshells } from "../../hooks/getKeyshells.jsx";

const CarKeyShells = () => {
  const { allKeyShells, loading, error } = getKeyshells();
  if (loading) {
    return <div className="text-center text-lg font-semibold">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-lg text-red-600">An error occured...{error}</div>;
  }
  return (
    <div className="max-w-7xl mx-auto p-4">
      {allKeyShells.length  > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {allKeyShells.map((keyshell) => (
            <div
              key={keyshell._id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                src={keyshell.productImageUrl}
                alt={keyshell.productName}
                className="w-full h-60 object-cover sm:h-60 md:h-48  rounded-t-lg" // Adjust object-fit based on screen size
                // srcSet={`${keyshell.productImageUrl}?w=320 320w,
                //        ${keyshell.productImageUrl}?w=640 640w,
                //        ${keyshell.productImageUrl}?w=960 960w,
                //        ${keyshell.productImageUrl}?w=1280 1280w`} // Responsive image sizes
                // sizes="(max-width: 640px) 320px, 
                //      (max-width: 768px) 640px, 
                //      (max-width: 1024px) 960px, 
                //      1280px" // Sizes for different screen breakpoints
              />
              <div className="mt-4 text-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  {keyshell.productName}
                </h2>
                <h3 className="text-md font-medium text-gray-600 mt-2">
                  {keyshell.productDescription}
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

export default CarKeyShells;
