import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const Contact = ({ isFullPage = false }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-primary-500" />,
      title: "Adresa Noastră",
      content: "Bulevardul Libertății nr. 16, București, România"
    },
    {
      icon: <FaPhone className="text-primary-500" />,
      title: "Telefon",
      content: "+40 21 123 4567"
    },
    {
      icon: <FaEnvelope className="text-primary-500" />,
      title: "Email",
      content: "contact@agroromania.ro"
    },
    {
      icon: <FaClock className="text-primary-500" />,
      title: "Program",
      content: "Luni - Vineri: 9:00 - 17:00"
    }
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: "#", label: "Facebook" },
    { icon: <FaTwitter />, url: "#", label: "Twitter" },
    { icon: <FaLinkedinIn />, url: "#", label: "LinkedIn" },
    { icon: <FaInstagram />, url: "#", label: "Instagram" }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-full h-full bg-grain"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {!isFullPage && (
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4 font-heading text-gray-800">Contactează-ne</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-accent">
              Suntem aici pentru a-ți răspunde întrebărilor și pentru a te sprijini
            </p>
          </div>
        )}
        
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {isFullPage && (
                <div className="mb-10">
                  <h3 className="text-2xl font-bold mb-6 font-heading text-gray-800">Trimite-ne un mesaj</h3>
                  <p className="text-gray-600 mb-6">
                    Completează formularul de mai jos și te vom contacta în cel mai scurt timp posibil.
                  </p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitSuccess && (
                  <div className="bg-green-50 text-green-800 p-4 rounded-lg border-l-4 border-green-500 animate__animated animate__fadeIn">
                    Mesajul tău a fost trimis cu succes! Te vom contacta în curând.
                  </div>
                )}
                
                {submitError && (
                  <div className="bg-red-50 text-red-800 p-4 rounded-lg border-l-4 border-red-500 animate__animated animate__fadeIn">
                    A apărut o eroare la trimiterea mesajului. Te rugăm să încerci din nou mai târziu.
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nume complet</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="form-input w-full rounded-lg focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                      placeholder="Numele tău"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="form-input w-full rounded-lg focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subiect</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="form-input w-full rounded-lg focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                    placeholder="Subiectul mesajului"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mesaj</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="form-textarea w-full rounded-lg focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                    placeholder="Mesajul tău..."
                  ></textarea>
                </div>
                
                <div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`inline-flex items-center justify-center w-full py-3 px-6 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Trimitere...
                      </>
                    ) : (
                      <>
                        Trimite Mesajul
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 font-heading text-gray-800">Informații de Contact</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1 text-gray-800">{info.title}</h4>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4 text-gray-800">Urmărește-ne</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index + 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-primary-600 hover:bg-primary-100 transition-colors duration-300"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
              
              {isFullPage && (
                <div className="mt-10">
                  <h4 className="text-lg font-bold mb-4 text-gray-800">Locația Noastră</h4>
                  <div className="rounded-lg overflow-hidden h-64 shadow-lg">
                    <iframe
                      title="map"
                      className="w-full h-full"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087936!2d26.089731376939553!3d44.42915907107755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zQnVsZXZhcmR1bCBMaWJlcnTEg8ibaWksIEJ1Y3VyZciZdGk!5e0!3m2!1sro!2sro!4v1651146505657!5m2!1sro!2sro"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
