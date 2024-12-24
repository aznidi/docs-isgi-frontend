import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ClipLoader } from 'react-spinners';

// Validation de formulaire avec Yup
const validationSchema = Yup.object({
  author: Yup.string().required('Le nom est requis').min(3, 'Le nom doit contenir au moins 3 caractères'),
  field: Yup.string().required('Le domaine d\'études est requis'),
  text: Yup.string().required('Le texte est requis').min(10, 'Le texte doit contenir au moins 10 caractères'),
  image: Yup.mixed().required('L\'image est requise'),
});

function AddAvis() {
  const [imagePreview, setImagePreview] = useState(null); // Pour prévisualiser l'image téléchargée
  const [isSubmitting, setIsSubmitting] = useState(false); // Pour gérer le spinner du bouton de soumission

  // Initialisation de Formik
  const formik = useFormik({
    initialValues: {
      author: '',
      field: '',
      text: '',
      image: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsSubmitting(true);
      // Simuler une soumission de formulaire
      setTimeout(() => {
        console.log('Avis soumis : ', values);
        setIsSubmitting(false);
      }, 2000);
    },
  });

  // Fonction pour gérer l'upload d'image par drag-and-drop
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        formik.setFieldValue('image', file); // Mettre l'image dans Formik
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="px-6 py-12 overflow-hidden font-poppins"
    >
      <div className="relative z-10 max-w-5xl mx-auto text-start">
        

        {/* Formulaire */}
        <form onSubmit={formik.handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg space-y-6 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Colonne de gauche : Image */}
          <div className="flex flex-col items-center justify-center">
            <div
              className="w-full min-h-100 text-2xl underline rounded-lg flex items-center justify-center cursor-pointer"
              onClick={() => document.getElementById('imageUpload').click()} // Ouvrir le sélecteur de fichier au clic
            >
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-md" />
              ) : (
                <p className="text-[#1E3A8A] dark:text-[#FAFAFA]">Choisir votre image</p>
              )}
            </div>
            <input
              id="imageUpload"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            {formik.touched.image && formik.errors.image ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.image}</div>
            ) : null}
          </div>

          {/* Colonne de droite : Formulaire */}
          <div className="space-y-2">
            <motion.h2
                className="text-3xl font-bold text-[#1E3A8A] dark:text-[#FAFAFA] mb-2"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            >
                Ajouter un avis
            </motion.h2>
            <motion.p
                className="text-lg text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
            >
            Partagez votre expérience avec ISGIDocs.
            </motion.p>
            {/* Champ pour l'auteur */}
            <hr />
            <div>
              <label htmlFor="author" className="block text-lg font-medium text-[#1E3A8A] dark:text-[#FAFAFA] mb-2">Votre nom</label>
              <input
                id="author"
                name="author"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.author}
                className={`dark:text-blue-900 border ${
                  formik.errors.author && formik.touched.author
                    ? 'border-red-500'
                    : 'border-gray-300'
                } rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 ${
                  formik.errors.author && formik.touched.author
                    ? 'focus:ring-red-500'
                    : 'focus:ring-blue-900'
                }`}
              />
              {formik.touched.author && formik.errors.author ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.author}</div>
              ) : null}
            </div>

            {/* Champ pour le domaine d'étude */}
            <div>
              <label htmlFor="field" className="block text-lg font-medium text-[#1E3A8A] dark:text-[#FAFAFA] mb-2">Domaine d'études</label>
              <input
                id="field"
                name="field"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.field}
                className={`dark:text-blue-900 border ${
                  formik.errors.field && formik.touched.field
                    ? 'border-red-500'
                    : 'border-gray-300'
                } rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 ${
                  formik.errors.field && formik.touched.field
                    ? 'focus:ring-red-500'
                    : 'focus:ring-blue-900'
                }`}
              />
              {formik.touched.field && formik.errors.field ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.field}</div>
              ) : null}
            </div>

            {/* Champ pour le texte de l'avis */}
            <div>
              <label htmlFor="text" className="block text-lg font-medium text-[#1E3A8A] dark:text-[#FAFAFA] mb-2">Votre avis</label>
              <textarea
                id="text"
                name="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.text}
                rows="4"
                className={`dark:text-blue-900 border ${
                  formik.errors.text && formik.touched.text
                    ? 'border-red-500'
                    : 'border-gray-300'
                } rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 ${
                  formik.errors.text && formik.touched.text
                    ? 'focus:ring-red-500'
                    : 'focus:ring-blue-900'
                }`}
              />
              {formik.touched.text && formik.errors.text ? (
                <div className="text-red-500 text-sm mt-1">{formik.errors.text}</div>
              ) : null}
            </div>

            {/* Bouton de soumission avec spinner */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full rounded-lg px-4 py-2 text-lg font-poppins cursor-pointer ${
                isSubmitting
                  ? 'bg-blue-800 text-white hover:bg-blue-900 hover:ring-2 hover:ring-blue-900 hover:shadow-xl hover:shadow-blue-900 focus:ring-blue-500 focus:shadow-blue-800'
                  : 'bg-blue-800 text-white hover:bg-blue-900 hover:ring-2 hover:ring-blue-900 hover:shadow-xl hover:shadow-blue-900 focus:ring-blue-500 focus:shadow-blue-800'
              } transition duration-300 ease-in-out`}
            >
              {isSubmitting ? (
                <div className="flex justify-center items-center">
                  <ClipLoader size={26} color="#ffffff" />
                </div>
              ) : (
                'Soumettre'
              )}
            </motion.button>
          </div>
        </form>
      </div>
    </motion.section>
  );
}

export default AddAvis;
