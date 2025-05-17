import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { FaArrowLeft, FaCheckCircle, FaUsers, FaUserPlus, FaQuoteRight, FaQuoteLeft } from 'react-icons/fa';
import main from "../images/main.jpg";

const MembersPage = () => {
  const [activeTab, setActiveTab] = useState('beneficii');

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);

    // Handle URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const sectionParam = urlParams.get('section');
    if (sectionParam) {
      setActiveTab(sectionParam);
    }
  }, []);

  const pageInfo = {
    title: "Program de Membri",
    description: "Alătură-te celei mai importante comunități din industria de panificație și morărit din România",
    breadcrumbs: [
      { name: "Acasă", path: "/" },
      { name: "Membri", path: "/membri" }
    ]
  };

  // Member categories
  const categories = [
    { id: 'beneficii', name: 'Beneficii' },
    { id: 'inscriere', name: 'Înscriere' },
    { id: 'actuali', name: 'Membri Actuali' },
    { id: 'testimoniale', name: 'Testimoniale' }
  ];

  // Benefits data
  const benefits = [
    {
      title: "Lobby și reprezentare",
      description: "Reprezentare în fața autorităților statului și participare la elaborarea și modificarea legislației relevante"
    },
    {
      title: "Acces la informații de piață",
      description: "Studii și rapoarte actualizate despre evoluția pieței, tendințe și oportunități de afaceri"
    },
    {
      title: "Networking",
      description: "Participare la evenimente exclusive, conferințe și întâlniri cu profesioniști din domeniu"
    },
    {
      title: "Training și educație",
      description: "Acces la seminarii, ateliere de lucru și programe de instruire specializate"
    },
    {
      title: "Consultanță",
      description: "Asistență în probleme de conformitate, implementare de standarde și optimizare a proceselor"
    },
    {
      title: "Acces la inovație",
      description: "Informații despre noi tehnologii, produse și soluții inovatoare pentru industrie"
    },
    {
      title: "Promovare",
      description: "Oportunități de promovare prin canalele asociației și expunere în cadrul evenimentelor"
    },
    {
      title: "Reduceri exclusive",
      description: "Tarife preferențiale la evenimente, servicii și colaborări cu partenerii asociației"
    }
  ];

  // Current members (mock data)
  const members = [
    { name: "Moara Românească S.A.", logo: "https://via.placeholder.com/150", category: "Morărit", joined: 2018 },
    { name: "Brutăria Tradițională", logo: "https://via.placeholder.com/150", category: "Panificație", joined: 2019 },
    { name: "Agro Cereals S.R.L.", logo: "https://via.placeholder.com/150", category: "Producție Agricolă", joined: 2017 },
    { name: "Pâine și Specialități", logo: "https://via.placeholder.com/150", category: "Panificație", joined: 2020 },
    { name: "Cereale de Top", logo: "https://via.placeholder.com/150", category: "Comerț", joined: 2021 },
    { name: "Utilaje Morărit Pro", logo: "https://via.placeholder.com/150", category: "Echipamente", joined: 2018 },
    { name: "Analize Laborator Expert", logo: "https://via.placeholder.com/150", category: "Servicii", joined: 2022 },
    { name: "Consultanță Agro", logo: "https://via.placeholder.com/150", category: "Consultanță", joined: 2021 },
    { name: "Transport Cereale Rapid", logo: "https://via.placeholder.com/150", category: "Logistică", joined: 2019 },
    { name: "Școala de Brutari", logo: "https://via.placeholder.com/150", category: "Educație", joined: 2020 },
    { name: "Ambalaje Eco", logo: "https://via.placeholder.com/150", category: "Furnizori", joined: 2021 },
    { name: "Faină Premium Plus", logo: "https://via.placeholder.com/150", category: "Morărit", joined: 2022 }
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      text: "Apartenența la ANIPM ne-a oferit oportunități extraordinare de creștere și dezvoltare. Rețeaua de contacte și accesul la informații actualizate despre piață au fost esențiale pentru succesul nostru.",
      author: "Maria Popescu",
      position: "Director General, Moara Românească S.A.",
      image: "https://via.placeholder.com/100"
    },
    {
      id: 2,
      text: "Consultanța oferită de specialiștii asociației ne-a ajutat să implementăm standarde de calitate la nivel european și să ne îmbunătățim semnificativ procesele de producție.",
      author: "Ioan Dumitrescu",
      position: "Fondator, Brutăria Tradițională",
      image: "https://via.placeholder.com/100"
    },
    {
      id: 3,
      text: "Datorită ANIPM, am avut acces la informații legislative vitale și am putut anticipa schimbările din domeniul reglementărilor. Acest lucru ne-a oferit un avantaj competitiv important.",
      author: "Elena Ionescu",
      position: "Director Calitate, Pâine și Specialități",
      image: "https://via.placeholder.com/100"
    },
    {
      id: 4,
      text: "Evenimentele de networking organizate de asociație ne-au permis să stabilim parteneriate valoroase și să ne extindem operațiunile în noi regiuni ale țării.",
      author: "Alexandru Georgescu",
      position: "CEO, Cereale de Top",
      image: "https://via.placeholder.com/100"
    }
  ];

  // Registration steps
  const registrationSteps = [
    {
      title: "1. Completează formularul de înscriere",
      description: "Primul pas constă în completarea unui formular online cu informațiile despre companie"
    },
    {
      title: "2. Trimite documentele necesare",
      description: "După completarea formularului, vei primi instrucțiuni pentru a trimite documentele necesare evaluării"
    },
    {
      title: "3. Evaluarea candidaturii",
      description: "Consiliul director analizează aplicația ta în termen de 14 zile lucrătoare"
    },
    {
      title: "4. Aprobarea și plata cotizației",
      description: "După aprobarea candidaturii, vei primi instrucțiuni pentru plata cotizației anuale"
    },
    {
      title: "5. Primirea pachetului de bun venit",
      description: "La finalizarea înscrierii, vei primi pachetul de bun venit și acces la toate beneficiile"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="members-page"
    >
      <PageHero 
        title={pageInfo.title} 
        description={pageInfo.description}
        breadcrumbs={pageInfo.breadcrumbs}
        bgImage={main}
      />
      
      {/* Navigation Tabs */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-full font-medium text-base transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      {activeTab === 'beneficii' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-3 text-center font-heading">Beneficiile Membrilor</h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Ca membru ANIPM, beneficiezi de numeroase avantaje care te vor ajuta să crești și să te dezvolți în industrie
            </p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 hover:border-primary-200"
                >
                  <div className="mb-4 text-primary-500">
                    <FaCheckCircle className="text-3xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}
      
      {/* Registration Section */}
      {activeTab === 'inscriere' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-3 text-center font-heading">Procedura de Înscriere</h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Procesul de înscriere este simplu și transparent. Urmează pașii de mai jos pentru a deveni membru ANIPM
            </p>
            
            <div className="max-w-4xl mx-auto">
              {registrationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex mb-8 relative"
                >
                  {index < registrationSteps.length - 1 && (
                    <div className="absolute left-6 top-14 w-0.5 h-full bg-primary-100"></div>
                  )}
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-primary-500 text-white rounded-full mr-6 z-10">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-semibold mb-6">Pregătit să te alături?</h3>
              <button className="px-8 py-4 bg-primary-500 text-white rounded-full font-semibold shadow-md hover:bg-primary-600 transition-colors duration-300 text-lg">
                Completează Formularul de Înscriere
              </button>
              <p className="text-gray-500 mt-4">Pentru asistență, contactează-ne la <a href="mailto:membri@anipm.ro" className="text-primary-600 hover:underline">membri@anipm.ro</a></p>
            </div>
          </div>
        </section>
      )}
      
      {/* Current Members Section */}
      {activeTab === 'actuali' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-3 text-center font-heading">Membrii Noștri</h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              ANIPM reunește companiile de top din industria de panificație și morărit din România
            </p>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {members.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="p-6 flex flex-col items-center text-center">
                    <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img 
                        src={member.logo} 
                        alt={member.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-primary-600 transition-colors duration-300">{member.name}</h3>
                    <p className="text-primary-500 font-medium mb-1">{member.category}</p>
                    <p className="text-gray-500 text-sm">Membru din {member.joined}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600">
                Suntem mândri de comunitatea noastră de peste 100 de membri care contribuie la dezvoltarea industriei.
              </p>
              <button className="mt-6 px-6 py-3 bg-white border border-primary-500 text-primary-600 rounded-full font-medium hover:bg-primary-50 transition-colors duration-300">
                <FaUsers className="inline-block mr-2" />
                Vezi lista completă a membrilor
              </button>
            </div>
          </div>
        </section>
      )}
      
      {/* Testimonials Section */}
      {activeTab === 'testimoniale' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-3 text-center font-heading">Ce Spun Membrii Noștri</h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Descoperă experiențele și beneficiile reale ale membrilor ANIPM
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md p-8 hover:shadow-lg transition-shadow duration-300 relative"
                >
                  <FaQuoteLeft className="absolute top-6 left-6 text-primary-200 text-4xl opacity-40" />
                  <div className="relative z-10">
                    <p className="text-gray-700 mb-6 relative z-10">{testimonial.text}</p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-primary-200"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-800">{testimonial.author}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                  <FaQuoteRight className="absolute bottom-6 right-6 text-primary-200 text-4xl opacity-40" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 font-heading">Vrei să devii membru ANIPM?</h2>
            <p className="text-lg text-gray-600 mb-8">Alătură-te comunității noastre și beneficiază de toate avantajele oferite membrilor.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setActiveTab('inscriere')} 
                className="px-8 py-3 bg-primary-500 text-white rounded-full font-semibold shadow-md hover:bg-primary-600 transition-colors duration-300"
              >
                <FaUserPlus className="inline-block mr-2" />
                Vreau să mă înscriu
              </button>
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-white text-primary-600 border border-primary-500 rounded-full font-semibold hover:bg-primary-50 transition-colors duration-300"
              >
                Am întrebări
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <div className="my-16 text-center">
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-primary-50 text-primary-600 rounded-full font-semibold hover:bg-primary-100 transition-colors duration-300"
        >
          <FaArrowLeft className="mr-2" />
          Înapoi la pagina principală
        </Link>
      </div>
    </motion.div>
  );
};

export default MembersPage;
