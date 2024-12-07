import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { gsap } from "gsap";

function Hero() {
  const phrases = ["Cours", "TPS", "EFM", "EFF"];
  const [currentWord, setCurrentWord] = useState("Cours");

  // Refs pour les animations
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const wordRef = useRef(null);
  const buttonRef = useRef(null);
  const inputRef = useRef(null);

  const animateElements = () => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });
    tl.fromTo(heroRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0 })
      .fromTo(bgRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, "<")
      .fromTo(titleRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, "<")
      .fromTo(inputRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, "<")
      .fromTo(buttonRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, "<");
  };

  useEffect(() => {
    animateElements();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = phrases.indexOf(prevWord);
        return phrases[(currentIndex + 1) % phrases.length];
      });

      gsap.fromTo(
        wordRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1.5 }
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [phrases]);

  return (
    <>
      <div
        ref={bgRef}
        aria-hidden="true"
        className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[50%] aspect-[4000/1000] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1E3A8A] to-[#60A5FA] opacity-50 sm:left-[calc(50%-15rem)] sm:w-[72.1875rem] animate-pulse"
        />
      </div>

      <div className="text-center z-10 mx-auto px-6 sm:px-8">
        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#1E3A8A] dark:text-[#FAFAFA] mb-6 font-poppins"
        >
          Accéder à vos{" "}
          <span
            ref={wordRef}
            className="inline-block text-5xl sm:text-6xl md:text-7xl font-bold font-poppins text-blue-800 rounded-md transition duration-300 ease-in-out hover:text-blue-900"
          >
            {currentWord}
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 font-poppins">
          Trouvez toutes vos ressources en quelques secondes.
        </p>

        <div
          ref={inputRef}
          className="flex items-center bg-white dark:bg-[#374151] border border-gray-300 dark:border-[#4B5563] rounded-md p-3 max-w-lg mx-auto mb-6 transition-all duration-500 ease-in-out hover:shadow-lg"
        >
          <FaSearch className="text-2xl text-[#1E3A8A] dark:text-white mr-4" />
          <input
            type="text"
            placeholder="Recherchez un document..."
            className="border-none text-lg font-poppins bg-transparent text-[#1E3A8A] dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none w-full"
          />
        </div>

        <button
          ref={buttonRef}
          className="mt-5 px-9 py-2 text-xl font-poppins bg-blue-800 rounded-md text-white font-semibold transition duration-300 ease-in-out hover:bg-blue-900 hover:ring-2 hover:ring-blue-900 hover:shadow-xl hover:shadow-blue-900 focus:ring-blue-500 focus:shadow-blue-800"
        >
          Rechercher
        </button>
      </div>
    </>
  );
}

export default Hero;
