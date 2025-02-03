import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";

function Footer() {
  // const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("USD $");
  

  return (
    <>
      <footer className="bg-black  text-white py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-semibold text-lg mb-3">About GoDaddy</h3>
            <ul className="space-y-2">
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
            <ul className="space-y-2">
              <li><a href="/#" className="hover:underline">Product Support</a></li>
              <li><a href="/#" className="hover:underline">Report Abuse</a></li>
            </ul>
            <h3 className="font-semibold text-lg mt-6 mb-3">Resources</h3>
            <ul className="space-y-2">
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
            <ul className="space-y-2">
              <li><a href="/#" className="hover:underline">Affiliates</a></li>
              <li><a href="/#" className="hover:underline">Reseller Programs</a></li>
              <li><a href="/#" className="hover:underline">GoDaddy Pro</a></li>
            </ul>
            <h3 className="font-semibold text-lg mt-6 mb-3">Account</h3>
            <ul className="space-y-2">
              <li><a href="/#" className="hover:underline">My Products</a></li>
              <li><a href="/#" className="hover:underline">Renewals & Billing</a></li>
              <li><a href="/#" className="hover:underline">Create Account</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Shopping</h3>
            <ul className="space-y-2">
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

        {/* Language & Currency Selector and Social Icons */}
        <div className="flex justify-between items-center p-5 w-full">
          {/* Logo and Select Options */}
          <div className="flex items-center space-x-4"> 
            <img className="h-[80px] w-[auto]" src="https://netherlands.wordcamp.org/2023/files/2023/03/godaddy-logo-1024x257.png" alt="svg"></img>
            <div class=" flex list-none p-0 m-0 bg-white text-black">
              <div id="toggleDiv" class="hidden mt-4 p-4 bg-gray-100">
                <button></button>
              {/* <h1> Choose your country/Region</h1> */}
                  <ul className="flex flex-wrap ">
                    <li className="w-1/3 p-2">India - Hindi, English</li>
                    <li className="w-1/3 p-2">USA - English</li>
                    <li className="w-1/3 p-2">Canada - English, French</li>
                    <li className="w-1/3 p-2">UK - English</li>
                    <li className="w-1/3 p-2">Australia - English</li>
                    <li className="w-1/3 p-2">Afghanistan - Dari, Pashto</li>
                    <li className="w-1/3 p-2">Albania - Albanian</li>
                    <li className="w-1/3 p-2">Algeria - Arabic, Berber</li>
                    <li className="w-1/3 p-2">Andorra - Catalan</li>
                    <li className="w-1/3 p-2">Angola - Portuguese</li>
                    <li className="w-1/3 p-2">Argentina - Spanish</li>
                    <li className="w-1/3 p-2">Armenia - Armenian</li>
                    <li className="w-1/3 p-2">Austria - German</li>
                    <li className="w-1/3 p-2">Azerbaijan - Azerbaijani</li>
                    <li className="w-1/3 p-2">Bahamas - English</li>
                    <li className="w-1/3 p-2">Bahrain - Arabic</li>
                    <li className="w-1/3 p-2">Bangladesh - Bengali</li>
                    <li className="w-1/3 p-2">Barbados - English</li>
                    <li className="w-1/3 p-2">Belarus - Belarusian, Russian</li>
                    <li className="w-1/3 p-2">Belgium - Dutch, French, German</li>
                    <li className="w-1/3 p-2">Belize - English</li>
                    <li className="w-1/3 p-2">Benin - French</li>
                    <li className="w-1/3 p-2">Bhutan - Dzongkha</li>
                    <li className="w-1/3 p-2">Bolivia - Spanish, Quechua, Aymara</li>
                    <li className="w-1/3 p-2">Bosnia and Herzegovina - Bosnian, Croatian, Serbian</li>
                    <li className="w-1/3 p-2">Botswana - English, Setswana</li>
                    <li className="w-1/3 p-2">Brazil - Portuguese</li>
                    <li className="w-1/3 p-2">Brunei - Malay</li>
                    <li className="w-1/3 p-2">Bulgaria - Bulgarian</li>
                    <li className="w-1/3 p-2">Burkina Faso - French</li>
                    <li className="w-1/3 p-2">Burundi - Kirundi, French, English</li>
                    <li className="w-1/3 p-2">Cabo Verde - Portuguese</li>
                    <li className="w-1/3 p-2">Cambodia - Khmer</li>
                    <li className="w-1/3 p-2">Cameroon - French, English</li>
                    <li className="w-1/3 p-2">Chile - Spanish</li>
                    <li className="w-1/3 p-2">China - Mandarin</li>
                    <li className="w-1/3 p-2">Colombia - Spanish</li>
                    <li className="w-1/3 p-2">Comoros - Comorian, Arabic, French</li>
                    <li className="w-1/3 p-2">Congo - French</li>
                    <li className="w-1/3 p-2">Costa Rica - Spanish</li>
                    <li className="w-1/3 p-2">Croatia - Croatian</li>
                    <li className="w-1/3 p-2">Cuba - Spanish</li>
                    <li className="w-1/3 p-2">Cyprus - Greek, Turkish</li>
                    <li className="w-1/3 p-2">Czech Republic - Czech</li>
                    <li className="w-1/3 p-2">Denmark - Danish</li>
                    <li className="w-1/3 p-2">Djibouti - Arabic, French</li>
                    <li className="w-1/3 p-2">Dominica - English</li>
                    <li className="w-1/3 p-2">Dominican Republic - Spanish</li>
                    <li className="w-1/3 p-2">Ecuador - Spanish</li>
                    <li className="w-1/3 p-2">Egypt - Arabic</li>
                    <li className="w-1/3 p-2">El Salvador - Spanish</li>
                    <li className="w-1/3 p-2">Equatorial Guinea - Spanish, French, Portuguese</li>
                    <li className="w-1/3 p-2">Eritrea - Tigrinya, Arabic, English</li>
                    <li className="w-1/3 p-2">Estonia - Estonian</li>
                    <li className="w-1/3 p-2">Eswatini - siSwati, English</li>
                    <li className="w-1/3 p-2">Ethiopia - Amharic</li>
                    <li className="w-1/3 p-2">Fiji - English, Fijian, Hindustani</li>
                    <li className="w-1/3 p-2">Finland - Finnish, Swedish</li>
                    <li className="w-1/3 p-2">France - French</li>
                    <li className="w-1/3 p-2">Gabon - French</li>
                    <li className="w-1/3 p-2">Gambia - English</li>
                    <li className="w-1/3 p-2">Georgia - Georgian</li>
                    <li className="w-1/3 p-2">Germany - German</li>
                    <li className="w-1/3 p-2">Ghana - English</li>
                    <li className="w-1/3 p-2">Greece - Greek</li>
                    <li className="w-1/3 p-2">Grenada - English</li>
                    <li className="w-1/3 p-2">Guatemala - Spanish</li>
                    <li className="w-1/3 p-2">Guinea - French</li>
                    <li className="w-1/3 p-2">Guinea-Bissau - Portuguese</li>
                    <li className="w-1/3 p-2">Guyana - English</li>
                    <li className="w-1/3 p-2">Haiti - Haitian Creole, French</li>
                    <li className="w-1/3 p-2">Honduras - Spanish</li>
                    <li className="w-1/3 p-2">Hungary - Hungarian</li>
                    <li className="w-1/3 p-2">Iceland - Icelandic</li>
                    <li className="w-1/3 p-2">Indonesia - Indonesian</li>
                    <li className="w-1/3 p-2">Iran - Persian</li>
                    <li className="w-1/3 p-2">Iraq - Arabic, Kurdish</li>
                    <li className="w-1/3 p-2">Ireland - Irish, English</li>
                    <li className="w-1/3 p-2">Israel - Hebrew, Arabic</li>
                    <li className="w-1/3 p-2">Italy - Italian</li>
                    <li className="w-1/3 p-2">Jamaica - English</li>
                    <li className="w-1/3 p-2">Japan - Japanese</li>
                    <li className="w-1/3 p-2">Jordan - Arabic</li>
                    <li className="w-1/3 p-2">Kazakhstan - Kazakh, Russian</li>
                    <li className="w-1/3 p-2">Kenya - Swahili, English</li>
                    <li className="w-1/3 p-2">Kiribati - English, Gilbertese</li>
                    <li className="w-1/3 p-2">South Korea - Korean</li>
                    <li className="w-1/3 p-2">Kosovo - Albanian, Serbian</li>
                    <li className="w-1/3 p-2">Kuwait - Arabic</li>
                    <li className="w-1/3 p-2">Kyrgyzstan - Kyrgyz, Russian</li>
                    <li className="w-1/3 p-2">Laos - Lao</li>
                    <li className="w-1/3 p-2">Latvia - Latvian</li>
                    <li className="w-1/3 p-2">Lebanon - Arabic, French</li>
                    <li className="w-1/3 p-2">Lesotho - Sesotho, English</li>
                    <li className="w-1/3 p-2">Liberia - English</li>
                    <li className="w-1/3 p-2">Libya - Arabic</li>
                    <li className="w-1/3 p-2">Liechtenstein - German</li>
                    <li className="w-1/3 p-2">Lithuania - Lithuanian</li>
                    <li className="w-1/3 p-2">Luxembourg - Luxembourgish, French, German</li>
                    <li className="w-1/3 p-2">Madagascar - Malagasy, French</li>
                    <li className="w-1/3 p-2">Malawi - English, Chichewa</li>
                    <li className="w-1/3 p-2">Malaysia - Malay</li>
                    <li className="w-1/3 p-2">Maldives - Dhivehi</li>
                    <li className="w-1/3 p-2">Mali - French</li>
                    <li className="w-1/3 p-2">Malta - Maltese, English</li>
                    <li className="w-1/3 p-2">Marshall Islands - Marshallese, English</li>
                    <li className="w-1/3 p-2">Mauritania - Arabic</li>
                    <li className="w-1/3 p-2">Mauritius - English, French</li>
                    <li className="w-1/3 p-2">Mexico - Spanish</li>
                    <li className="w-1/3 p-2">Micronesia - English</li>
                    <li className="w-1/3 p-2">Moldova - Romanian</li>
                    <li className="w-1/3 p-2">Monaco - French</li>
                    <li className="w-1/3 p-2">Mongolia - Mongolian</li>
                    <li className="w-1/3 p-2">Montenegro - Montenegrin</li>
                    <li className="w-1/3 p-2">Morocco - Arabic, Berber</li>
                    <li className="w-1/3 p-2">Mozambique - Portuguese</li>
                    <li className="w-1/3 p-2">Myanmar - Burmese</li>
                    <li className="w-1/3 p-2">Namibia - English</li>
                    <li className="w-1/3 p-2">Nauru - Nauruan, English</li>
                    <li className="w-1/3 p-2">Nepal - Nepali</li>
                    <li className="w-1/3 p-2">Netherlands - Dutch</li>
                    <li className="w-1/3 p-2">New Zealand - English, Māori</li>
                    <li className="w-1/3 p-2">Nicaragua - Spanish</li>
                    <li className="w-1/3 p-2">Niger - French</li>
                    <li className="w-1/3 p-2">Nigeria - English</li>
                    <li className="w-1/3 p-2">North Macedonia - Macedonian</li>
                    <li className="w-1/3 p-2">Norway - Norwegian</li>
                    <li className="w-1/3 p-2">Oman - Arabic</li>
                    <li className="w-1/3 p-2">Pakistan - Urdu, English</li>
                    <li className="w-1/3 p-2">Palau - Palauan, English</li>
                    <li className="w-1/3 p-2">Panama - Spanish</li>
                    <li className="w-1/3 p-2">Papua New Guinea - Tok Pisin, Hiri Motu, English</li>
                    <li className="w-1/3 p-2">Paraguay - Spanish, Guaraní</li>
                    <li className="w-1/3 p-2">Peru - Spanish, Quechua, Aymara</li>
                    <li className="w-1/3 p-2">Philippines - Filipino, English</li>
                    <li className="w-1/3 p-2">Poland - Polish</li>
                    <li className="w-1/3 p-2">Portugal - Portuguese</li>
                    <li className="w-1/3 p-2">Qatar - Arabic</li>
                    <li className="w-1/3 p-2">Romania - Romanian</li>
                    <li className="w-1/3 p-2">Russia - Russian</li>
                    <li className="w-1/3 p-2">Rwanda - Kinyarwanda, French, English</li>
                    <li className="w-1/3 p-2">Saint Kitts and Nevis - English</li>
                    <li className="w-1/3 p-2">Saint Lucia - English</li>
                    <li className="w-1/3 p-2">Saint Vincent and the Grenadines - English</li>
                    <li className="w-1/3 p-2">Samoa - Samoan, English</li>
                    <li className="w-1/3 p-2">San Marino - Italian</li>
                    <li className="w-1/3 p-2">São Tomé and Príncipe - Portuguese</li>
                    <li className="w-1/3 p-2">Saudi Arabia - Arabic</li>
                    <li className="w-1/3 p-2">Senegal - French</li>
                    <li className="w-1/3 p-2">Serbia - Serbian</li>
                    <li className="w-1/3 p-2">Seychelles - Seychellois Creole, English, French</li>
                    <li className="w-1/3 p-2">Sierra Leone - English</li>
                    <li className="w-1/3 p-2">Singapore - English, Malay, Mandarin, Tamil</li>
                    <li className="w-1/3 p-2">Slovakia - Slovak</li>
                    <li className="w-1/3 p-2">Slovenia - Slovenian</li>
                    <li className="w-1/3 p-2">Solomon Islands - English</li>
                    <li className="w-1/3 p-2">Somalia - Somali, Arabic</li>
                    <li className="w-1/3 p-2">South Africa - 11 official languages</li>
                    <li className="w-1/3 p-2">South Sudan - English</li>
                    <li className="w-1/3 p-2">Spain - Spanish</li>
                    <li className="w-1/3 p-2">Sri Lanka - Sinhala, Tamil</li>
                    <li className="w-1/3 p-2">Sudan - Arabic, English</li>
                    <li className="w-1/3 p-2">Suriname - Dutch</li>
                    <li className="w-1/3 p-2">Sweden - Swedish</li>
                    <li className="w-1/3 p-2">Switzerland - German, French, Italian, Romansh</li>
                    <li className="w-1/3 p-2">Syria - Arabic</li>
                    <li className="w-1/3 p-2">Taiwan - Mandarin</li>
                    <li className="w-1/3 p-2">Tajikistan - Tajik</li>
                    <li className="w-1/3 p-2">Tanzania - Swahili, English</li>
                    <li className="w-1/3 p-2">Thailand - Thai</li>
                    <li className="w-1/3 p-2">Timor-Leste - Tetum, Portuguese</li>
                    <li className="w-1/3 p-2">Togo - French</li>
                    <li className="w-1/3 p-2">Tonga - Tongan, English</li>
                    <li className="w-1/3 p-2">Trinidad and Tobago - English</li>
                    <li className="w-1/3 p-2">Tunisia - Arabic</li>
                    <li className="w-1/3 p-2">Turkey - Turkish</li>
                    <li className="w-1/3 p-2">Turkmenistan - Turkmen</li>
                    <li className="w-1/3 p-2">Tuvalu - Tuvaluan, English</li>
                    <li className="w-1/3 p-2">Uganda - English, Swahili</li>
                    <li className="w-1/3 p-2">Ukraine - Ukrainian</li>
                    <li className="w-1/3 p-2">United Arab Emirates - Arabic</li>
                    <li className="w-1/3 p-2">United Kingdom - English</li>
                    <li className="w-1/3 p-2">United States - English</li>
                    <li className="w-1/3 p-2">Uruguay - Spanish</li>
                    <li className="w-1/3 p-2">Uzbekistan - Uzbek</li>
                    <li className="w-1/3 p-2">Vanuatu - Bislama, English, French</li>
                    <li className="w-1/3 p-2">Venezuela - Spanish</li>
                    <li className="w-1/3 p-2">Vietnam - Vietnamese</li>
                    <li className="w-1/3 p-2">Yemen - Arabic</li>
                    <li className="w-1/3 p-2">Zambia - English</li>
                    <li className="w-1/3 p-2">Zimbabwe - English, Shona, Sindebele</li>
                  </ul>
              </div>
            </div>
            <span>|</span>
            <select
              className="bg-black p-2 rounded"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="USD $">USD $</option>
              <option value="INR ₹">INR ₹</option>
              <option value="EUR €">EUR €</option>
            </select>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 text-4xl">
            <a href="/#" className="hover:text-gray-300"><FaFacebook /></a>
            <a href="/#" className="hover:text-gray-300"><FaInstagram /></a>
            <a href="/#" className="hover:text-gray-300"><FaTiktok /></a>
            <a href="/#" className="hover:text-gray-300"><FaTwitter /></a>
            <a href="/#" className="hover:text-gray-300"><FaYoutube /></a>
            
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 mt- pt-6  text-sm  flex justify-between font-semibold ml-2">
          <div>
            <p className="mt-4">Copyright © 1999 - 2025 GoDaddy Operating Company, LLC. All Rights Reserved. The GoDaddy word mark is a registered trademark of GoDaddy Operating Company, LLC in the US and other countries. The “GO” logo is a registered trademark of GoDaddy.com, LLC in the US.</p>
            <p className="mt-2">Use of this Site is subject to express terms of use. By using this site, you signify that you agree to be bound by these Universal Terms of Service.</p>
            </div>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="/#" className="hover:underline">Legal</a>
            <a href="/#" className="hover:underline">Privacy Policy</a>
            <a href="/#" className="hover:underline">Cookies</a>
            <a href="/#" className="hover:underline">Do not sell my personal information</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
