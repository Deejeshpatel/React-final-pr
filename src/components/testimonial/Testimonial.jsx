const Testimonial = () => {
    return (
      <div>
        <section className="text-gray-700 body-font mb-10 bg-white">
          {/* main  */}
          <div className="container px-5 py-12 mx-auto">
            {/* Heading  */}
            <h1 className="text-center text-4xl font-extrabold text-gray-800 mb-4">Testimonials</h1>
            {/* para  */}
            <h2 className="text-center text-xl font-semibold mb-10">
              What our <span className="text-pink-600">customers</span> are saying
            </h2>
  
            <div className="flex flex-wrap -m-4">
              {/* Testimonial 1 */}
              <div className="lg:w-1/3 w-full mb-6 p-4">
                <div className="h-full text-center p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img
                    alt="testimonial"
                    className="w-24 h-24 mb-6 object-cover object-center rounded-full inline-block border-4 border-pink-200 bg-gray-100"
                    src="https://img.clipart-library.com/2/clip-pics-of-animated-cartoons/clip-pics-of-animated-cartoons-8.png"
                  />
                  <p className="leading-relaxed text-gray-600 italic">
                    "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                  <h2 className="text-gray-900 font-semibold title-font tracking-wider text-lg uppercase">
                    A A Patel
                  </h2>
                  <p className="text-gray-500">Senior Product Designer</p>
                </div>
              </div>
  
              {/* Testimonial 2 */}
              <div className="lg:w-1/3 w-full mb-6 p-4">
                <div className="h-full text-center p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img
                    alt="testimonial"
                    className="w-24 h-24 mb-6 object-cover object-center rounded-full inline-block border-4 border-pink-200 bg-gray-100"
                    src="https://img.clipart-library.com/2/clip-pics-of-animated-cartoons/clip-pics-of-animated-cartoons-8.png"
                  />
                  <p className="leading-relaxed text-gray-600 italic">
                    "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                  <h2 className="text-gray-900 font-semibold title-font tracking-wider text-lg uppercase">
                     D A Patel
                  </h2>
                  <p className="text-gray-500">UI Developer</p>
                </div>
              </div>
  
              {/* Testimonial 3 */}
              <div className="lg:w-1/3 w-full mb-6 p-4">
                <div className="h-full text-center p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img
                    alt="testimonial"
                    className="w-24 h-24 mb-6 object-cover object-center rounded-full inline-block border-4 border-pink-200 bg-gray-100"
                    src="https://img.clipart-library.com/2/clip-pics-of-animated-cartoons/clip-pics-of-animated-cartoons-8.png"
                  />
                  <p className="leading-relaxed text-gray-600 italic">
                    "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware."
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                  <h2 className="text-gray-900 font-semibold title-font tracking-wider text-lg uppercase">
                    R D patel
                  </h2>
                  <p className="text-gray-500">CTO</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Testimonial;
  