import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from 'react-router-dom';
import flashImageFromFile from '../images/flash.jpg';

export const About = ({ isFullPage = false }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const objectives = [
    "Promovarea intereselor membrilor în industria agricolă",
    "Dezvoltarea de standarde înalte de calitate",
    "Facilitarea accesului la piața europeană",
    "Stimularea inovației și cercetării în domeniu",
    "Dezvoltarea de programe educaționale",
    "Reprezentarea în fața autorităților"
  ];

  return (
    <section id="despre-noi" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background parallax effect */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-10 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-primary-50"></div>
        <div className="absolute inset-0 bg-grain"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {!isFullPage && (
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10" data-aos="fade-right">
              <div className="relative">
                <motion.img 
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                  src={flashImageFromFile}
                  alt="About AgroRomânia" 
                  className="rounded-lg shadow-2xl"
                />
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-xl animate__animated animate__fadeInUp"
                >
                  <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text">25+ ani</p>
                  <p className="text-gray-600">De excelență în industrie</p>
                </motion.div>
              </div>
            </div>

            <div className="lg:w-1/2" data-aos="fade-left">
              <h2 className="text-4xl font-bold mb-6 font-heading text-gray-800">Despre AgroRomânia</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mb-6"></div>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Asociația Națională AgroRomânia reunește cei mai importanți producători din industriile de morărit, panificație și produse făinoase din România. Cu o tradiție de peste 25 de ani, reprezentăm interesele membrilor noștri și promovăm excelența în întregul lanț de producție - de la cultivarea grâului la produsele finite.
              </p>

              <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                Misiunea noastră este să contribuim la dezvoltarea durabilă a sectorului agroalimentar românesc și să asigurăm standarde înalte de calitate și siguranță alimentară.
              </p>

              <div>
                <h3 className="text-2xl font-bold mb-6 font-heading text-gray-800">Obiectivele Noastre</h3>
                <ul className="space-y-4">
                  {objectives.map((objective, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center mt-1 shadow-highlight">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-700">{objective}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {!isFullPage && (
                <div className="mt-10">
                  <Link
                    to="/despre-noi"
                    className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-full font-bold hover:bg-primary-700 transition-colors duration-300"
                  >
                    Află mai multe
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        {isFullPage && (
          <>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 font-heading text-gray-800">Despre AgroRomânia</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Descoperiți povestea noastră, misiunea și valorile care ne ghidează activitatea
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h3 className="text-3xl font-bold mb-6 font-heading text-gray-800">Misiunea Noastră</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Asociația Națională AgroRomânia are misiunea de a contribui la dezvoltarea durabilă a sectorului agroalimentar românesc și de a asigura standarde înalte de calitate și siguranță alimentară.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Ne propunem să reprezentăm interesele membrilor noștri, să promovăm inovația și să facilităm accesul la piețele internaționale pentru produsele românești.
                </p>
                <div className="flex items-center p-4 bg-primary-50 rounded-lg border-l-4 border-primary-500">
                  <p className="text-primary-700 italic">
                    "Excelența în agricultură și panificație prin inovație, calitate și colaborare."
                  </p>
                </div>
              </div>
              <div className="relative">
                <motion.img 
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                  src={flashImageFromFile}
                  alt="About AgroRomânia" 
                  className="rounded-lg shadow-2xl w-full"
                />
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-xl"
                >
                  <p className="text-4xl font-bold text-transparent bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text">25+ ani</p>
                  <p className="text-gray-600">De excelență în industrie</p>
                </motion.div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg mb-20">
              <h3 className="text-3xl font-bold mb-6 font-heading text-center text-gray-800">Valorile Noastre</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                {[
                  { title: "Calitate", description: "Promovăm cele mai înalte standarde de calitate în toate procesele de producție." },
                  { title: "Inovație", description: "Încurajăm adoptarea tehnologiilor moderne și a abordărilor inovatoare." },
                  { title: "Sustenabilitate", description: "Acționăm responsabil față de mediu și comunitate în toate activitățile noastre." },
                  { title: "Colaborare", description: "Credem în puterea parteneriatului și a cooperării pentru rezultate mai bune." }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 border border-gray-100 rounded-xl hover:border-primary-200 transition-colors duration-300"
                  >
                    <h4 className="text-xl font-bold mb-3 text-primary-600">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-8 font-heading text-gray-800 text-center">Obiectivele Noastre</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {objectives.map((objective, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center mr-4 shadow-highlight">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-gray-800">{objective}</h4>
                      <p className="text-gray-600">Lucrăm zi de zi pentru a atinge acest obiectiv prin activitățile noastre.</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
