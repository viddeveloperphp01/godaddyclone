import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";

function CountrySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [currency, setCurrency] = useState("Select currency");
  const [selectedCountry, setSelectedCountry] = useState("Select Country"); 
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [rotated, setRotated] = useState(false);
  const [crotated, setcRotated] = useState(false);

  const toggleRotation = () => {
    setRotated(!rotated); // Toggle the rotation state
  };
  const toggleCurrencyRotation = () => {
    setcRotated(!crotated); // Toggle the rotation state
  };

  const currencyList = [
    "USD $",
    "AED AED",
    "AUD $",
    "CAD C$",
    "CHF CHF",
    "CLP $",
    "CNY ¥",
    "COP $",
    "DKK kr",
    "EUR €",
    "GBP £",
    "HKD HK$",
    "IDR Rp",
    "ILS ₪",
    "JPY ¥",
    "KRW ₩",
    "MXN MXN",
    "MYR RM",
    "NZD $",
    "PEN S/",
    "PHP ₱",
    "PKR ₨",
    "PLN zł",
    "SAR SAR",
    "SEK kr",
    "SGD SG$",
    "THB ฿",
    "TWD NT$",
    "UAH ₴",
    "VND ₫",
    "ZAR R"
  ];

  const handleCurrencyClick = (currency) => {
    setCurrency(currency);
    setIsCurrencyOpen(false); // Close the currency dropdown after selection
  };

  const countries = [
    "Afghanistan - Pashto, Dari",
    "Albania - Albanian",
    "Algeria - Arabic, Berber",
    "Andorra - Catalan",
    "Angola - Portuguese",
    "Antigua and Barbuda - English",
    "Argentina - Spanish",
    "Armenia - Armenian",
    "Australia - English",
    "Austria - German",
    "Azerbaijan - Azerbaijani",
    "India - Hindi, English",
    "Bahamas - English",
    "Bahrain - Arabic",
    "Bangladesh - Bengali",
    "Barbados - English",
    "Belarus - Belarusian, Russian",
    "Belgium - Dutch, French, German",
    "Belize - English",
    "Benin - French",
    "Iceland - Icelandic",
    "Lebanon - Arabic",
    "Lesotho - Sesotho, English",
    "Liberia - English",
    "Libya - Arabic",
    "Liechtenstein - German",
    "Lithuania - Lithuanian",
    "Luxembourg - Luxembourgish, French, German",
    "Madagascar - Malagasy, French",
    "Malawi - English, Chichewa",
    "Malaysia - Malay",
    "Maldives - Dhivehi",
    "Mali - French",
    "Malta - Maltese, English",
    "Marshall Islands - Marshallese, English",
    "Mauritania - Arabic"
  ];

  const handleCountryClick = (country) => {
    setSelectedCountry(country); // ✅ Update the button text
    setIsOpen(false); // ✅ Close the dropdown after selection
  };

  return (
    <>
    <footer className="bg-black text-white py-10 relative">
      <div className="grid grid-cols-6 ml-10 gap-4">
          <div>
            <h3 className="font-semibold text-lg mb-3">About GoDaddy</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/#" className="hover:underline">About Us</a></li>
              <li><a href="/#" className="hover:underline">Annual Returns</a></li>
              <li><a href="/#" className="hover:underline">Careers</a></li>
              <li><a href="/#" className="hover:underline">Contact Us</a></li>
              <li><a href="/#" className="hover:underline">GoDaddy Blog</a></li>
              <li><a href="/#" className="hover:underline">Investor Relations</a></li>
              <li><a href="/#" className="hover:underline">Legal</a></li>
              <li><a href="/#" className="hover:underline">Newsroom</a></li>
              <li><a href="/#" className="hover:underline">Trust Center</a></li>
            </ul>
          </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/#" className="hover:underline">Product Support</a></li>
                <li><a href="/#" className="hover:underline">Report Abuse</a></li>
                <li><a href="/#" className="hover:underline">Resources</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/#" className="hover:underline">Webmail</a></li>
                <li><a href="/#" className="hover:underline">WHOIS</a></li>
                <li><a href="/#" className="hover:underline">ICANN Confirmation</a></li>
                <li><a href="/#" className="hover:underline">Designers & Developers</a></li>
                <li><a href="/#" className="hover:underline">Redeem Code</a></li>
                <li><a href="/#" className="hover:underline">Customer Testimonials</a></li>
                <li><a href="/#" className="hover:underline">Product Catalog</a></li>
                <li><a href="/#" className="hover:underline">Business Name Generator</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">Partner Programs</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/#" className="hover:underline">Affiliates</a></li>
                <li><a href="/#" className="hover:underline">Reseller Programs</a></li>
                <li><a href="/#" className="hover:underline">GoDaddy Pro</a></li>
              </ul> 
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Account</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/#" className="hover:underline">My Products</a></li>
                <li><a href="/#" className="hover:underline">Renewals & Billing</a></li>
                <li><a href="/#" className="hover:underline">Create Account</a></li>
              </ul>
            </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Shopping</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/#" className="hover:underline">Buy a Domain</a></li>
              <li><a href="/#" className="hover:underline">Websites</a></li>
              <li><a href="/#" className="hover:underline">Business Email</a></li>
              <li><a href="/#" className="hover:underline">WordPress</a></li>
              <li><a href="/#" className="hover:underline">Hosting</a></li>
              <li><a href="/#" className="hover:underline">Web Security</a></li>
              <li><a href="/#" className="hover:underline">Logo Generator</a></li>
            </ul>
          </div>
        </div>
        <div className="flex items-center w-full flex-wrap">
          <div className="flex items-center p-4 justify-between gap-5 w-full flex-wrap">
            {/* Logo */}
            <div className="flex items-center space-x-6 w-full sm:w-auto">
              <img
                className="h-[60px] sm:h-[80px] w-auto"
                src="https://netherlands.wordcamp.org/2023/files/2023/03/godaddy-logo-1024x257.png"
                alt="GoDaddy Logo"
              />
            </div>

            {/* Country & Currency Selector */}
            <div className="flex w-full sm:w-auto items-center justify-between space-x-4 mt-4 sm:mt-0">
              
              <div className="relative w-full sm:w-auto">
                <button
                  className="px-4 py-2 text-white rounded-md w-full sm:w-60"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div className="flex justify-between items-center">
                    <div className="font-bold">{selectedCountry}</div>
                    <div
                      className={`transition-transform duration-200 ${rotated ? 'rotate-180' : ''}`}
                      onClick={toggleRotation}
                    >
                      <svg
                        fill="#ffffff"
                        height="15px"
                        width="20px"
                        viewBox="0 0 407.436 407.436"
                      >
                        <polygon points="203.718,91.567 0,294.621 21.179,315.869 203.718,133.924 386.258,315.869 407.436,294.621" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Country List Modal */}
                <div
                  className={`fixed top-10 left-0 w-full sm:w-full md:w-full h-[56vh] bg-white text-black transition-transform duration-500 ease-in-out transform origin-left ${
                    isOpen ? "translate-x-0 opacity-100 scale-100" : "-translate-x-full opacity-0 scale-0"
                  }`}
                >
                  <button
                    className="absolute top-5 right-5 text-white text-2xl"
                    onClick={() => setIsOpen(false)}
                  >
                    ✖
                  </button>
                  <div className="text-center text-2xl font-bold mt-10">Choose Your Country</div>
                  <ul className="bg-[#E8EAEB] text-black text-center text-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-[66vh]">
                    {countries.map((country) => (
                      <li
                        key={country}
                        className="cursor-pointer hover:bg-white hover:text-cyan-600 rounded transition duration-200"
                        onClick={() => handleCountryClick(country)}
                      >
                        {country}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Currency Selector */}
              <div className="relative w-full sm:w-auto">
                <button
                  className="px-4 py-2 text-white rounded-md w-full sm:w-60"
                  onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                >
                  <div className="flex justify-between items-center">
                    <div className="font-bold">{currency}</div>
                    <div
                      className={`transition-transform duration-300 ${crotated ? 'rotate-180' : ''}`}
                      onClick={toggleCurrencyRotation}
                    >
                      <svg
                        fill="#ffffff"
                        height="15px"
                        width="20px"
                        viewBox="0 0 407.436 407.436"
                      >
                        <polygon points="203.718,91.567 0,294.621 21.179,315.869 203.718,133.924 386.258,315.869 407.436,294.621" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Currency List Modal */}
                <div
                  className={`fixed top-0 left-70  h-[56vh] bg-[#E8EAEB] text-black transition-transform duration-300 ease-in-out ${
                    isCurrencyOpen ? "translate-y-0" : "-translate-y-full"
                  }`}
                >
                  <button
                    className="absolute top-5 right-5 text-white text-2xl"
                    onClick={() => setIsCurrencyOpen(false)}
                  >
                    ✖
                  </button>
                  <ul className="bg-[#E8EAEB] text-black text-xl grid grid-cols-1 h-[56vh] p-6 w-[100%] overflow-y-auto">
                    {currencyList.map((currency) => (
                      <li
                        key={currency}
                        className="cursor-pointer hover:bg-white rounded transition duration-200"
                        onClick={() => handleCurrencyClick(currency)}
                      >
                        {currency}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex  space-x-6 text-2xl sm:text-4xl mt-4 sm:mt-0">
              <a href="/#" className="hover:text-gray-300"><FaFacebook /></a>
              <a href="/#" className="hover:text-gray-300"><FaInstagram /></a>
              <a href="/#" className="hover:text-gray-300"><FaTiktok /></a>
              <a href="/#" className="hover:text-gray-300"><FaTwitter /></a>
              <a href="/#" className="hover:text-gray-300"><FaYoutube /></a>
            </div>
          </div>
        </div>

          
          {/* </div> */}

          {/* Footer Bottom Section */}
          <div className="border-t border-gray-700 pt-6 text-sm flex justify-between font-semibold ml-2">
            <div>
              <p className="mt-4">
                Copyright © 1999 - 2025 GoDaddy Operating Company, LLC. All Rights Reserved.
              </p>
              <p className="mt-2">
                Use of this Site is subject to express terms of use. By using this site, you agree to these Universal Terms of Service.
              </p>
            </div>
            <div className="flex space-x-4 mt-2">
              <div className="flex space-x-4 mt-2">
                <a href="/#" className="hover:underline">Legal</a>
                <a href="/#" className="hover:underline">Privacy Policy</a>
                <a href="/#" className="hover:underline">Cookies</a>
              </div>     
              <div>
                <a href="/#" className="hover:underline">Do not sell my personal information</a>
              </div>
            </div>
        </div>
    </footer>
  </>
  );
}

export default CountrySelector;
