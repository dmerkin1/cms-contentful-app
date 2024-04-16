const TopBar = () => {
  return (
    <>
      <div className="bg-gray-100 p-4 justify-between items-center px-20 hidden md:flex">
        <div className="text-lg">
          <h4 className="text-gray-500 text-sm">
            Welcome to FinPro, your expert in managing your finances!
          </h4>
        </div>
        <div className="flex items-center space-x-4">{/* Icons */}</div>
      </div>
      <div className="bg-white text-black p-4 justify-between items-center px-20 hidden md:flex">
        <div className="flex items-center space-x-4">
          <div className="text-lg font-bold">Logo</div>
        </div>
        <div className="flex space-x-10">
          <div className="flex flex-col items-start space-y-1">
            <div className="flex items-center space-x-1">
              {/* Icon */}
              <span className="font-bold">Mon - Sat: 9:00 - 18:00</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-gray-500">Sunday CLOSED</span>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-1">
            <div className="flex items-center space-x-1">
              {/* Icon */}
              <span className="font-bold">267 Park Avenue</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-gray-500">New York, NY 90210</span>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-1">
            <div className="flex items-center space-x-1">
              {/* Icon */}
              <span className="font-bold">(123) 4567890</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-gray-500">info@demolink.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
