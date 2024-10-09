import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="bg-red-100 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
        
        {/* Location Section */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h1 className="font-bold text-3xl text-red-500">Location</h1>
          <p className="text-gray-700 font-bold text-center md:text-left">
            Kiambu Road Near AAR Hospital
          </p>
          <p className="text-gray-700 text-center md:text-left">
            Phone: <a href="tel:+254716884011" className="underline">0716 884 011</a> / 
            <a href="tel:+254714615233" className="underline">0714 615 233</a>
          </p>
        </div>

        {/* Services Section */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h1 className="font-bold text-3xl text-red-500">Our Services</h1>
          <div className="grid grid-cols-2 gap-4 text-center md:text-left">
            <div className="space-y-2">
              <p>Car Key Programming</p>
              <p>Car Unlocking Services</p>
              <p>Car Alarm Installation</p>
              <p>Car Track Installation</p>
            </div>
            <div className="space-y-2">
              <p>Dash Camera Installation</p>
              <p>Fleet Management Services</p>
              <p>ECU Repair & Programming</p>
              <p>Ignition & Door locks repair</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-600 text-sm">
        <p>© {currentYear} Car Key Experts. All Rights Reserved.</p>
        <p className="text-red-500">Crafted by WebCraftersKE</p>
      </div>
    </footer>
  );
};

export default Footer;
