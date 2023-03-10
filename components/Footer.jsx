import Image from 'next/image';
import React from 'react';

function Footer() {
  return (
    <section className="bg-gray-100">
      <hr className="pb-5" />
      {/* Footer Top */}
      <div className="flex flex-col items-center md:items-start md:flex-row lg:px-28 md:px-10 justify-evenly">
        {/* Footer Left */}
        <div className="w-64">
          <h3 className="text-xl uppercase font-semibold">About</h3>
          <p className="py-5 text-gray-500">
            Fusce quis tellus nulla. Donec sodales mauris eget pellentesque
            hendrerit. Donec molestie non urna sit amet aliquet. Curabitur sit
            amet est nec nulla varius fermentum.
          </p>
        </div>
        {/* Footer Center */}
        <div className="w-64">
          <h3 className="text-xl uppercase font-semibold">Contact Us</h3>
          <p className="py-5 text-gray-500">
            <span>Call-centre: 1 (323) 938-5798</span>
            <span>Email: info@styleixthemes.com</span>
            <span>1840 E Garvey Avenue Street West Covina, CA 91791, U.S.</span>
            <span>Monday - Friday: 9:00am - 9:00pm</span>
          </p>
        </div>
        {/* Footer Right */}
        <div className="w-2/3 md:w-2/3 mx-auto md:ml-5 ">
          <h3 className="text-xl uppercase font-semibold">Newsletter</h3>
          <div className="mt-4">
            <input
              type="email"
              id="email"
              className="outline-none  items-center md:inline-flex bg-white  p-2 md:p-3 shadow-xl w-11/12 rounded-md md:w-2/3"
              required
              placeholder="Enter email address"
            ></input>
            <label htmlFor="email" className="hidden">
              Enter your email
            </label>
            <button className="text-gray-500 rounded-md p-2 md:p-3 ml-2  bg-white border-lg shadow-xl mt-3">
              Submit
            </button>
            <span className="text-sm text-gray-400 mt-2 block">We never spam you!</span>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="flex justify-center md:justify-end items-center space-x-5 p-2 bg-green-200">
        <FooterImage imageName={'facebook'} />
        <FooterImage imageName={'instagram'} />
        <FooterImage imageName={'github'} />
        <FooterImage imageName={'linkedin'} />
        <FooterImage imageName={'twitter'} />
      </div>
    </section>
  );
}

function FooterImage({ imageName }) {
  return (
    <span className="">
      <Image
        className="text-gray-500"
        src={`/social/${imageName}.svg`}
        height={25}
        width={25}
        alt={`${imageName} icon`}
      />
    </span>
  );
}

export default Footer;
