import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion"; // Import Framer Motion
import { useInView } from "react-intersection-observer"; // Import Intersection Observer
import FileCard from "./FileCard";

const Slider = () => {
  const sliderRef = useRef();
  const { ref, inView } = useInView({ triggerOnce: true }); // Observer for scroll animations
  const controls = useAnimation();

  // Dummy data for courses
  const courses = [
    {
      id: 1,
      moduleName: "Mathematics for Engineers",
      type: "TP",
      instructor: "Prof. Smith",
      year: "2023",
      description: "This course introduces advanced mathematical concepts for engineering students...",
      image: "https://via.placeholder.com/150",
      fileUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      moduleName: "Physics I",
      type: "Course",
      instructor: "Dr. Johnson",
      year: "2021",
      description: "Fundamentals of mechanics and thermodynamics...",
      image: "https://via.placeholder.com/150",
      fileUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      moduleName: "Introduction to Programming",
      type: "EFM",
      instructor: "Mr. Lee",
      year: "2022",
      description: "Learn the basics of programming with Python...",
      image: "https://via.placeholder.com/150",
      fileUrl: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      moduleName: "Advanced Chemistry",
      type: "Lab",
      instructor: "Dr. Brown",
      year: "2020",
      description: "Explore chemical reactions with hands-on experiments...",
      image: "https://via.placeholder.com/150",
      fileUrl: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      moduleName: "Machine Learning Basics",
      type: "EFM",
      instructor: "Prof. Taylor",
      year: "2024",
      description: "Understand the foundations of machine learning algorithms...",
      image: "https://via.placeholder.com/150",
      fileUrl: "https://via.placeholder.com/150",
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 300; // Adjust scroll speed
      }
    }, 3000); // Interval of 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Trigger animation when in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-screen bg-[#F8F8F8] dark:bg-[#1F2937] px-6 sm:px-8"
    >
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white font-poppins mb-6">
        Meilleurs documents cette semaine
      </h2>

      {/* Gradient Background (matching Hero's gradient) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[50%] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1E3A8A] to-[#60A5FA] opacity-40 sm:left-[calc(50%-15rem)] sm:w-[72.1875rem]"
        />
      </div>

      {/* Slider */}
      <motion.div
        ref={sliderRef}
        className="flex overflow-x-auto gap-6 py-12 sm:py-16 scrollbar-hide"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8 }}
      >
        {courses.map((course) => (
          <motion.div
            key={course.id}
            className="w-full sm:w-80"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FileCard
              image={course.image}
              moduleName={course.moduleName}
              type={course.type}
              instructor={course.instructor}
              year={course.year}
              description={course.description}
              fileUrl={course.fileUrl}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Slider;
