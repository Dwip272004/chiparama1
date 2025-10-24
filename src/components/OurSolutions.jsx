import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBuilding, FaClipboardCheck, FaUsers, FaChevronDown } from 'react-icons/fa';
import { IoCubeOutline, IoCodeOutline, IoShieldCheckmarkOutline, IoPulseOutline, IoGitCommitOutline, IoHardwareChipOutline } from 'react-icons/io5';

// --- Data Definitions (Updated Icons and Styling) ---
const services = [
  {
    title: "ASIC/SoC Design",
    description:
      "End-to-end design and development of custom Application-Specific Integrated Circuits and Systems on a Chip for complex applications.",
    icon: <IoHardwareChipOutline className="w-6 h-6" />,
  },
  {
    title: "RTL Design",
    description:
      "High-quality Register-Transfer Level design and coding, ensuring efficient and synthesizable hardware logic for your projects.",
    icon: <IoCodeOutline className="w-6 h-6" />,
  },
  {
    title: "Verification",
    description:
      "Rigorous and comprehensive verification services to ensure the functional correctness and reliability of your semiconductor designs.",
    icon: <IoShieldCheckmarkOutline className="w-6 h-6" />,
  },
  {
    title: "DFT & Test",
    description:
      "Design for Testability (DFT) strategies and test pattern generation to ensure manufacturability and high yield.",
    icon: <IoPulseOutline className="w-6 h-6" />,
  },
  {
    title: "Physical Design",
    description:
      "Converting a verified design into a physical layout, including floor planning, placement, routing, and timing closure.",
    icon: <IoCubeOutline className="w-6 h-6" />,
  },
  {
    title: "Embedded Systems",
    description:
      "Developing robust and reliable embedded software and hardware solutions tailored to specific project requirements.",
    icon: <IoGitCommitOutline className="w-6 h-6" />,
  },
];

// Key Metrics is removed as requested
const staffingSolutions = [
  {
    title: "Build-Operate-Transfer (BOT)",
    icon: <FaBuilding className="w-5 h-5" />,
    description:
      "The **BOT** model is a low-risk strategy for establishing an offshore team. We **build** the team, **operate** it efficiently, and then **transfer** full ownership to you, ensuring a seamless transition and long-term success.",
  },
  {
    title: "Statement of Work (SOW)",
    icon: <FaClipboardCheck className="w-5 h-5" />,
    description:
      "A **Statement of Work (SOW)** defines a project with a fixed scope and clear deliverables. It shifts the burden of completion to the staffing partner, providing predictability and accountability for projects with well-defined outcomes.",
  },
  {
    title: "Contingent Staffing",
    icon: <FaUsers className="w-5 h-5" />,
    description:
      "**Contingent staffing** offers the ultimate flexibility. It allows you to quickly onboard temporary or contract workers to meet short-term project needs or manage workforce fluctuations without the administrative overhead.",
  },
];

// --- Accordion Item (Updated for Dark Mode and Neon Aesthetic) ---
const AccordionItem = ({ title, description, icon, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-700 last:border-b-0">
      <motion.button
        className={`flex justify-between items-center w-full p-5 text-left font-semibold text-lg transition-colors duration-200 ${
            isOpen ? "bg-gray-800 text-cyan-400" : "text-gray-200 hover:bg-gray-800"
        }`}
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <div className="flex items-center space-x-4">
          <span className="text-cyan-400 flex-shrink-0 p-1 border border-cyan-500/20 rounded-md bg-gray-900/50">
            {icon}
          </span>
          <span className={`${isOpen ? 'text-white' : 'text-gray-300'}`}>{title}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-cyan-400"
        >
          <FaChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden bg-gray-900/50"
          >
            <div className="p-5 pt-2 text-gray-400">
              <p className="leading-relaxed">{description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


// --- Main Component (Futuristic Dark Mode) ---

export default function CombinedExpertiseFuturistic() {
  const [activeSection, setActiveSection] = useState("services");
  const [activeIndex, setActiveIndex] = useState(0); 

  const servicesRef = useRef(null);
  const staffingRef = useRef(null);
  const containerRef = useRef(null);
  const [sliderStyle, setSliderStyle] = useState({});

  useEffect(() => {
    // Logic for the sliding background pill for the section selector
    if (containerRef.current) {
      const activeRef = activeSection === "services" ? servicesRef : staffingRef;
      const activeElement = activeRef.current;
      const containerLeft = containerRef.current.getBoundingClientRect().left;
      const activeLeft = activeElement.getBoundingClientRect().left;

      setSliderStyle({
        width: activeElement.offsetWidth,
        x: activeLeft - containerLeft,
      });
    }
  }, [activeSection]);

  const data = activeSection === "services" ? services : staffingSolutions;

  // Toggle function for the accordion
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 font-sans bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title and Subtitle */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-6 tracking-tight">
          <span className="text-cyan-400">Integrated</span>{" "}
          <span className="text-white">Innovation</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 font-medium text-center mb-12 max-w-2xl mx-auto">
          From semiconductor design to staffing — we deliver complete, future-ready engineering ecosystems.
        </p>

        {/* Section Slider (Pill Selector) - Dark/Neon Style */}
        <div className="flex justify-center mb-16">
          <div
            ref={containerRef}
            className="relative p-1 rounded-full bg-gray-900 border border-cyan-800/50 shadow-xl shadow-cyan-900/20 flex space-x-1"
          >
            <motion.button
              ref={servicesRef}
              onClick={() => {
                setActiveSection("services");
                setActiveIndex(0); 
              }}
              className={`py-2 px-5 rounded-full font-semibold transition-colors duration-300 relative z-10 text-lg ${
                activeSection === "services" ? "text-gray-900" : "text-gray-300"
              }`}
            >
              Engineering Solutions
            </motion.button>
            <motion.button
              ref={staffingRef}
              onClick={() => {
                setActiveSection("staffing");
                setActiveIndex(0); 
              }}
              className={`py-2 px-5 rounded-full font-semibold transition-colors duration-300 relative z-10 text-lg ${
                activeSection === "staffing" ? "text-gray-900" : "text-gray-300"
              }`}
            >
              Staffing Solutions
            </motion.button>
            {/* Moving background pill (Electric Cyan Gradient) */}
            <motion.div
              className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 shadow-lg shadow-cyan-500/50"
              initial={false}
              animate={{
                x: sliderStyle.x || 0,
                width: sliderStyle.width || 0,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ top: 4, bottom: 4 }}
            />
          </div>
        </div>

        {/* Accordion Content Area - Futuristic Panel */}
        <div className="bg-gray-900 rounded-xl shadow-2xl shadow-cyan-900/30 overflow-hidden border border-cyan-900/50">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {data.map((item, index) => (
                <AccordionItem
                  key={item.title}
                  {...item}
                  isOpen={activeIndex === index}
                  onClick={() => toggleAccordion(index)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}