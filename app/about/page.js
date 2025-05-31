"use client";

import Services from "@/components/Services";

export default function page() {
  return (
    <div className="py-8 bg-gray-900  px-4 sm:px-6 lg:px-8">
      {/* Story Section */}
      <section>
        <div className="max-w-7xl mx-auto ">
          <div className="text-center mb-12">
            <h2 className="text-3xl  font-bold text-white mb-4">About Us</h2>
            <p className="text-md text-gray-400 max-w-3xl lg:text-lg md:text-lg mx-auto">
              I am Dr. Nalin K. Pagi, currently serving as Assistant Professor
              at V.P. & R.P.T.P. Science College, V.V. Nagar.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Experience & About us
              </h2>

              {/* <p className="text-md font-bold text-white mb-4">
                Selkey Cyber Security Private Limited
              </p> */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                Presently, I am working as an Assistant Professor at V.P. &
                R.P.T.P. Science College, VVNagar, where I have taken the
                initiative to establish a “Miyawaki Forest” spanning 45 x 45
                meters, consisting of over 2,200 trees from more than 70
                species. I also coordinate the “Hydroponics and Urban Farming”
                course in the Department of Botany, contributing to student and
                community engagement in sustainable farming practices.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Previously, I served as a Research Associate in the Department
                of Horticulture at BACA, AAU Anand for 6.5 years. During this
                time, I gained hands-on experience in both open-field and
                protected farming systems, including net house and greenhouse
                vegetable cultivation. I also specialized in exotic vegetable
                production using hydroponic systems, combining scientific
                knowledge with practical execution.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With over 5 years of experience as a Hydroponics Agronomist
                Consultant, I have successfully designed, established, and
                managed 3–4 commercial hydroponic units. My expertise includes
                planning and executing site preparation, managing crop cycles,
                maintaining detailed farm records, and overseeing production,
                sales, and marketing programs. I also conduct farm tours and
                public outreach activities to promote sustainable agriculture
                and engage the wider community.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-8 shadow-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-100">
                    SDAU, Dantiwada, Agricultural University, Sardarkrushinagar{" "}
                    <br />
                    <small>
                      Doctorate, C.P. College of Agriculture
                      <br /> 08/2016
                    </small>
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-100">
                    Gujarat University,Ahmedabad, Gujarat <br />
                    <small>
                      Master’s degree in Botany, Department of Botany <br />{" "}
                      05/2011
                    </small>
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-100">
                    Gujarat University, Ahmedabad, Gujarat. <br />
                    <small>
                      B. Sc. Botany, St. Xavier’s College <br />
                      03/2009
                    </small>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <Services />

          <section className="max-w-7xl mx-auto mb-12 mt-6 overflow-hidden flex flex-col md:flex-row items-center">
            <div className="flex-1 p-4 md:p-12 text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-tr from-white  via-green-400  to-green-900 bg-clip-text text-transparent mb-6">
                Aqui Grower LLP
              </h1>
              <p className="text-md md:text-lg text-gray-300 mb-8 max-w-xl">
                <b>AQUI GROWER LLP</b> is a dynamic and socially responsible
                Limited Liability Partnership based in Ahmedabad, Gujarat,
                India, established in January 2021. The organization is deeply
                committed to sustainable agricultural practices and
                environmental stewardship, focusing on providing for basic human
                needs while promoting ecological balance and community
                awareness.
              </p>
              <a
                href="https://www.instagram.com/aqui_grower"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg text-md transition-colors duration-200 shadow"
              >
                Instagram Follow Us
              </a>
            </div>

            <div className="flex-1 flex items-center justify-center h-full w-full p-8">
              <img
                src="../img/logo.png"
                alt="YouTube Hero"
                className="max-w-xs rounded-full w-full shadow-2xl border border-gray-800 object-cover"
              />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
