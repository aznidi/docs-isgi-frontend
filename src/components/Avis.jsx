import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaGraduationCap, FaClock } from "react-icons/fa"; // Importation des icônes
import { formatDistanceToNow } from "date-fns"; // Pour la date relative
import { fr } from "date-fns/locale"; // Locale français
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'; // Importation du CSS correct pour Swiper

// Fonction pour obtenir le temps relatif (comme "il y a 1 heure")
const formatDate = (date) => formatDistanceToNow(new Date(date), { addSuffix: true, locale: fr });

function Avis() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="px-6 py-12 overflow-hidden font-poppins"
    >
      {/* Titre */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-[#1E3A8A] dark:text-[#FAFAFA] mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        >
          Ce que disent nos étudiants
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
        >
          Découvrez les retours des étudiants qui utilisent <strong>ISGIDocs</strong> pour leur auto-formation.
        </motion.p>

        {/* Slider des avis */}
        <Swiper
          spaceBetween={30} // Espacement entre les slides
          slidesPerView="auto" // Nombre de slides visibles
          loop={true} // Boucle infinie
          autoplay={{ delay: 3000 }} // Délai de l'autoplay (3 secondes)
          pagination={{ clickable: true }} // Pagination cliquable
          breakpoints={{
            // Responsivité pour différents écrans
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {[{
            text: "“isgiDocs m'a permis d'organiser mes cours et de mieux me préparer pour les examens. Tout est simple et accessible !”",
            author: "Anas Benkirane",
            date: "2024-12-22T14:30:00", // Exemple de date
            field: "Développement Web",
            image: "https://randomuser.me/api/portraits/men/51.jpg", // Image fictive
          },
          {
            text: "“Une ressource indispensable pour tous les étudiants. Les vidéos et documents sont d'une grande aide.”",
            author: "Sarah Dupont",
            date: "2024-12-20T10:15:00",
            field: "Développement Backend",
            image: "https://randomuser.me/api/portraits/women/61.jpg", // Image fictive
          },
          {
            text: "“Ce site est une véritable mine d'or pour tous ceux qui veulent améliorer leurs compétences techniques rapidement !”",
            author: "Ahmed Rami",
            date: "2024-12-15T16:00:00",
            field: "Machine Learning",
            image: "https://randomuser.me/api/portraits/men/40.jpg", // Image fictive
          },
          {
            text: "“La meilleure plateforme pour organiser et structurer mes ressources d'apprentissage. Très intuitif.”",
            author: "Lina Saad",
            date: "2024-12-18T12:45:00",
            field: "Data Science",
            image: "https://randomuser.me/api/portraits/women/25.jpg", // Image fictive
          },
          {
            text: "“Un outil précieux pour réviser efficacement et suivre l'évolution de mes progrès d'études.”",
            author: "Yassir Nouh",
            date: "2024-12-10T08:00:00",
            field: "Développement Web",
            image: "https://randomuser.me/api/portraits/men/15.jpg", // Image fictive
          },
          {
            text: "“Très pratique pour centraliser mes documents de formation. Une ressource incontournable.”",
            author: "Miriam Lopez",
            date: "2024-12-14T09:30:00",
            field: "Informatique",
            image: "https://randomuser.me/api/portraits/women/17.jpg", // Image fictive
          },
          {
            text: "“Une plateforme extrêmement bien pensée, qui me permet de rester organisé dans mes études.”",
            author: "Sofiane El Hachemi",
            date: "2024-12-16T11:15:00",
            field: "Cyber Sécurité",
            image: "https://randomuser.me/api/portraits/men/60.jpg", // Image fictive
          },
          {
            text: "“Une solution simple et efficace pour organiser mes cours et accéder à des ressources pertinentes.”",
            author: "Oumayma Bekri",
            date: "2024-12-21T17:30:00",
            field: "Développement Mobile",
            image: "https://randomuser.me/api/portraits/women/72.jpg", // Image fictive
          }]
            .map((avis, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col gap-4 max-w-[300px] sm:max-w-[350px]">
                  {/* Message de l'avis */}
                  <div className="text-gray-800 dark:text-gray-200 mb-4">
                    <p className="text-lg sm:text-xl font-medium">{avis.text}</p>
                  </div>

                  {/* Informations de l'auteur */}
                  <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mt-auto">
                    {/* Image de l'étudiant */}
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#1E3A8A]">
                      <img
                        src={avis.image}
                        alt={avis.author}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Informations secondaires */}
                    <div className="flex flex-col">
                      <p className="text-sm font-medium text-[#1E3A8A]">{avis.author}</p>
                      <p className="text-xs text-gray-500">{avis.field}</p>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <FaClock />
                        <p>{formatDate(avis.date)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </motion.section>
  );
}

export default Avis;
