import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCardExpansion = (cardIndex) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

  // Development Cards Data with updated image paths
  const developmentCards = [
    {
      icon: '🤖',
      title: 'Artificial Intelligence Hub',
      image: '/Pictures/AI HUB.jpeg',
      shortDescription: 'A 200-acre innovation ecosystem for AI technologies...',
      fullDescription: 'The AI Hub is a groundbreaking 200-acre innovation ecosystem designed to foster cutting-edge artificial intelligence research and development. This state-of-the-art facility brings together top researchers, tech companies, and startups to push the boundaries of AI technology. With advanced laboratories, collaborative spaces, and a focus on emerging technologies, the AI Hub aims to position Future City as a global leader in artificial intelligence innovation.'
    },
    {
      icon: '🧬',
      title: 'Life Sciences Hub',
      image: '/Pictures/lifesciences.jpeg',
      shortDescription: 'Spanning 4,207 acres of biotech and pharmaceutical innovation...',
      fullDescription: 'The Life Sciences Hub is a comprehensive 4,207-acre zone dedicated to revolutionizing medical research and pharmaceutical development. This expansive facility features cutting-edge laboratories, research centers, and collaborative spaces for biotech companies, medical researchers, and pharmaceutical innovators. Our goal is to create an ecosystem that accelerates medical breakthroughs, supports critical research, and drives forward-thinking healthcare solutions.'
    },
    {
      icon: '💻',
      title: 'Electronics & Manufacturing Zone',
      image: '/Pictures/Electronic and manufacturing zone.jpeg',
      shortDescription: 'A 3,642-acre advanced manufacturing ecosystem...',
      fullDescription: 'The Electronics & Manufacturing Zone is a sprawling 3,642-acre ecosystem designed for advanced manufacturing and technological innovation. This zone provides state-of-the-art facilities, research institutions, and collaborative spaces for companies specializing in electronics, robotics, and advanced manufacturing technologies. It serves as a hub for industrial advancement, fostering growth and development in the manufacturing sector.'
    },
    {
      icon: '🏥',
      title: 'Healthcare & Pharma City',
      image: '/Pictures/healthcare and pharma.jpeg',
      shortDescription: '116 acres dedicated to medical innovation and research...',
      fullDescription: 'The Healthcare & Pharma City is a focused 116-acre district dedicated to medical innovation, research, and advanced healthcare services. This city features world-class hospitals, pharmaceutical research centers, and biotechnology labs, creating a synergistic environment for medical breakthroughs and enhanced patient care. It aims to be a leading destination for healthcare and pharmaceutical advancements.'
    },
    {
      icon: '⚽',
      title: 'Sports Hub',
      image: '/Pictures/sports hub.jpeg',
      shortDescription: '258 acres of world-class sports infrastructure...',
      fullDescription: 'The Sports Hub is an expansive 258-acre zone dedicated to fostering athletic excellence and sports development. This hub includes a state-of-the-art Multi-purpose Indoor Arena, advanced training facilities, and recreational areas designed to support a wide range of sports and activities. It aims to be a premier destination for sports enthusiasts and athletes, promoting health, wellness, and competitive sports.'
    },
    {
      icon: '🎓',
      title: 'Education & University Zone',
      image: '/Pictures/education.jpeg',
      shortDescription: '255 acres for advanced learning and skill development...',
      fullDescription: 'The Education & University Zone is a 255-acre precinct dedicated to advanced learning and skill development. This innovative zone is anchored by the Young India Skills University and includes various educational institutions, research centers, and vocational training facilities. It aims to create a hub for academic excellence and practical skill-building, preparing the next generation for future challenges.'
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <Head>
        <title>Future City - Transforming Urban Living</title>
        <meta name="description" content="Future City: A revolutionary urban development project in Hyderabad" />
        <meta name="keywords" content="Future City, Real Estate, Urban Development, Hyderabad, Innovation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="hero bg-primary-dark py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/Pictures/AI HUB.jpeg" 
            alt="Future City Landscape" 
            layout="fill" 
            objectFit="cover" 
          />
        </div>
        <div className="container mx-auto relative z-10 px-4">
          <h1 className="text-5xl font-bold mb-4 text-accent-gold animate-fade-in">
            Welcome to Future City
          </h1>
          <p className="text-xl mb-8 text-foreground animate-slide-up">
            Pioneering the next generation of urban innovation and sustainable living
          </p>
          <div className="space-x-4">
            <Link href="/listings" className="btn-gold inline-block animate-slide-up">
              Explore Properties
            </Link>
            <Link href="/about" className="inline-block border border-accent-gold text-accent-gold px-6 py-3 rounded-lg hover:bg-accent-gold hover:text-primary-dark transition">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Future City Description Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-secondary-dark rounded-lg p-6">
          <div className="text-foreground text-lg space-y-4">
            <p>
              Telangana govt's ambitious Future City and Net Zero City will come up in 10,124 acres in the southern parts of Hyderabad. Future City will cover about 10 villages, including Mucherla, Meerkhanpet and surrounding villages.
            </p>
            <p>
              It is an expansion to its traditional boundaries of Hyderabad, Secunderabad, and Cyberabad with the introduction of the 'Future City' at Mucherla in Rangareddy district, approximately 50 km south of the main city by providing road and infrastructure facilities and metro rail connectivity to the proposed future city from various parts of the city, especially from Shamshabad airport, Outer Ring Road (ORR) and the proposed Regional Ring Road (RRR).
            </p>
          </div>
        </div>
      </section>

      {/* Development Zones Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-accent-gold">
          Future City Opportunities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developmentCards.map((card, index) => (
            <div
              key={index}
              className="dark-card transform transition hover:scale-105 relative group"
            >
              {/* Image Container */}
              <div className="mb-4 relative h-56 w-full overflow-hidden">
                <Image 
                  src={card.image} 
                  alt={card.title} 
                  layout="fill" 
                  objectFit="cover" 
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <div className="text-6xl mb-4 text-accent-gold text-center">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-accent-light-gold text-center">
                  {card.title}
                </h3>
                <div className={`text-foreground mb-4 text-justify transition-all duration-500 ease-in-out ${expandedCard === index ? 'max-h-[500px] opacity-100' : 'max-h-[100px] opacity-80 overflow-hidden'}`}>
                  {expandedCard === index ? card.fullDescription : card.shortDescription}
                </div>
                <div className="flex justify-center items-center">
                  <button
                    onClick={() => toggleCardExpansion(index)}
                    className="btn-gold text-sm"
                  >
                    {expandedCard === index ? 'Show Less' : 'Learn More'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Investment Opportunities Section */}
      <section className="bg-secondary-dark py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary-dark rounded-lg p-8 shadow-dark-glow">
            <h2 className="text-3xl font-bold mb-6 text-accent-gold text-center">
              Investment Opportunities
            </h2>
            <div className="text-foreground text-lg space-y-4">
              <p>
                For setting up Residential Facilities for those working in these zones, as many as 1,170 acres was earmarked and 336 acres for entertainment facilities like Malls & Multiplexes, Parks, Hotels etc.
              </p>
              <p>
                These developments present significant opportunities for investors and stakeholders looking to be part of Hyderabad's next phase of growth. The Telangana government's commitment to creating a sustainable and technologically advanced urban landscape makes the 'Future City' a promising venture for various sectors.
              </p>
              <div className="flex justify-center mt-8">
                <Link
                  href="/listings"
                  className="btn-gold inline-block"
                >
                  Explore Investment Opportunities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-secondary-dark py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-accent-gold">
            Your Future Starts Here
          </h2>
          <p className="text-xl mb-8 text-foreground max-w-2xl mx-auto">
            Discover a revolutionary urban ecosystem where innovation, sustainability, and community converge to create tomorrow's living spaces.
          </p>
          <div className="space-x-4">
            <Link href="/contact" className="btn-gold inline-block">
              Contact Us
            </Link>
            <Link href="/vision" className="inline-block border border-accent-gold text-accent-gold px-6 py-3 rounded-lg hover:bg-accent-gold hover:text-primary-dark transition">
              Our Vision
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
