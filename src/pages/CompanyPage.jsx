import React from 'react';
import { Zap, Puzzle, Handshake } from 'lucide-react'; // FIX: Replaced react-icons/fa with lucide-react

const values = [
  {
    name: 'Innovation',
    description: 'We push the boundaries of what is possible, constantly exploring new technologies to stay ahead.',
    icon: Zap, // Replaced FaBolt with Zap
  },
  {
    name: 'Excellence',
    description: 'Our commitment to quality ensures every project we deliver exceeds expectations and industry standards.',
    icon: Puzzle, // Replaced FaPuzzlePiece with Puzzle
  },
  {
    name: 'Integrity',
    description: 'We operate with complete transparency and honesty, building trust with every client.',
    icon: Handshake, // Replaced FaHandshake with Handshake
  },
];

const teamMembers = [
  {
    name: 'Saurabh Mishra',
    title: 'President & Chief Executive Officer',
    bio: 'Founded by industry veteran Saurabh Mishra who has vast experience in setting up and growing consulting companies. He joined Mirafra when it was 20 people team, and after making it grow tremendously in Bengaluru he moved to US to start its US operations and was sole person behind its another tremendous growth in US.',
    image: 'https://img1.wsimg.com/isteam/ip/220ef3fb-1d22-4d11-bc42-d9a443f327d0/CROPPED-DSC00008_Saurabh_Mishra.jpg/:/',
  },
  {
    name: 'Prashant Gautam ',
    title: 'Executive Director - Business Operations',
    bio: 'With 15+ years of experience, I am the Director of Talent Acquisition at Chiparama, specializing in recruiting top talent for the semiconductor and AI sectors. I focus on aligning recruitment strategies with innovation in ASIC design, verification, and advanced semiconductor solutions, building teams that drive impactful technology across global markets.',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQF120lOExaVYQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1689609259088?e=1762387200&v=beta&t=3Be0fPxKPrGicUCDw_UcxheWG20a4AsE6xhJzs5Mum4',
  },
];

const advisors = [
  {
    name: 'Dr. Alan Smith',
    title: 'Advisor – Semiconductor Strategy',
    bio: 'Former VP at Intel with 25+ years in chip design and strategy.',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2670&auto=format&fit=crop',
  },
  {
    name: 'Maria Gonzalez',
    title: 'Advisor – Business Development',
    bio: 'Helps drive global partnerships and scaling strategies for deep tech startups.',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2670&auto=format&fit=crop',
  },
];

const clients = [
  { name: 'Meta', logo: 'https://logos-world.net/wp-content/uploads/2021/11/Meta-Symbol.png', region: 'USA' },
  { name: 'Tenstorrent', logo: 'https://cdn.prod.website-files.com/619c5a34100fe677d0c61e04/66ed8880ff59ab137de39ad7_Tenstorrent%20Log-Updated%202024.png', region: 'Canada' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', region: 'USA' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', region: 'USA' },
  { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png', region: 'USA' },
  { name: 'Skyverse', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXNU3JmeHzpJklAB9DoKCS_g5kIbn5XJYb2w&s', region: 'China' },
];


export default function CompanyPage() {
  return (
    <div className="bg-gray-900 text-white font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center p-6">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518131346337-b647f523c937?q=80&w=2670&auto=format&fit=crop')",
          }}
        ></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-blue-400 leading-tight mb-4">
            Shaping the Future <br className="hidden md:inline" /> of Silicon
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We are a collective of visionary engineers and designers, dedicated
            to pushing the boundaries of semiconductor technology.
          </p>
        </div>
      </section>

      {/* About Us & Our Values */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Our Story & Mission
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Chiparama is a forward-thinking semiconductor company dedicated
               to driving innovation through smart chip technology. Our mission 
               is to empower businesses across industries—such as manufacturing, 
               healthcare, logistics, and energy—by delivering advanced 
               semiconductor solutions that enhance efficiency, automation, and 
               sustainability. By leveraging cutting-edge technologies like 3D chip 
               architecture, AI accelerators, and edge computing, we help clients 
               stay ahead in a rapidly evolving digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.name}
                className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-lg text-center transform transition-transform duration-300 hover:scale-[1.05]"
              >
                <div className="flex justify-center mb-4">
                  {/* Icon component used directly */}
                  <value.icon className="w-12 h-12 text-blue-400" /> 
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {value.name}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
            Our team is comprised of industry veterans and passionate innovators,
            committed to turning your vision into a reality.
          </p>

          {/* Centered Grid */}
          <div className="flex justify-center">
            {/* Keeping lg:grid-cols-2 to center the two members on large screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-lg text-center"
                >
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-4">{member.title}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Trusted Advisors 
      <section className="py-24 px-6 bg-gray-950">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Trusted Advisors
          </h2>
          <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
            Guided by renowned experts who bring decades of experience in
            semiconductors and business strategy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {advisors.map((advisor) => (
              <div
                key={advisor.name}
                className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-lg text-center"
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {advisor.name}
                </h3>
                <p className="text-blue-400 font-medium mb-4">
                  {advisor.title}
                </p>
                <p className="text-gray-400">{advisor.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Clients Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Clients We Work With
          </h2>
          <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
            We are proud to collaborate with leading companies shaping the
            future of technology.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-center">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex justify-center items-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 object-contain opacity-80 hover:opacity-100 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            Partner with us to bring your next-generation product to life.
          </p>
          <a
            href="#"
            className="inline-block py-4 px-10 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
