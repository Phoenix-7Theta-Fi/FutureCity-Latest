import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [expandedCard, setExpandedCard] = useState(null);

  const featuredCards = [
    {
      title: 'Future Development',
      description: 'Explore our innovative real estate opportunities in the cutting-edge Future City.',
      icon: '🏙️',
      additionalInfo: 'Our Future Development projects focus on integrating smart technology and sustainable practices to create a thriving urban environment.',
    },
    {
      title: 'Investment Potential',
      description: 'Discover high-growth property investments in the most promising urban development zone.',
      icon: '📈',
      additionalInfo: 'Investing in Future City offers unique opportunities for growth, with a focus on emerging markets and innovative real estate solutions.',
    },
    {
      title: 'Sustainable Living',
      description: 'Experience next-generation sustainable and technologically advanced living spaces.',
      icon: '🌿',
      additionalInfo: 'Our sustainable living initiatives prioritize eco-friendly designs and energy-efficient technologies to enhance quality of life.',
    }
  ];

  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <div className="bg-background min-h-screen">
      <Head>
        <title>Future City Real Estate</title>
        <meta name="description" content="Welcome to Future City Real Estate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-4">
        {/* Hero Section */}
        <section className="hero py-12 text-center animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 text-accent-gold">
            Welcome to Future City Real Estate
          </h1>
          <p className="text-lg text-foreground mb-8">
            Find your dream home in the city of tomorrow.
          </p>
          <Link href="/listings" className="btn-gold">
            Explore Listings
          </Link>
        </section>

        {/* Featured Cards Section */}
        <section className="grid md:grid-cols-3 gap-6 mt-12 animate-slide-up">
          {featuredCards.map((card, index) => (
            <div 
              key={index} 
              className="dark-card transform transition duration-300 hover:scale-105 hover:shadow-gold-glow"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h2 className="text-2xl font-bold mb-3 text-accent-gold">
                {card.title}
              </h2>
              <p className="text-foreground mb-4">
                {card.description}
              </p>
              <button 
                onClick={() => toggleExpand(index)} 
                className="text-light-gold hover:text-accent-gold transition duration-300 inline-flex items-center"
              >
                {expandedCard === index ? 'Show Less' : 'Learn More'}
              </button>
              {expandedCard === index && (
                <div className="mt-4 text-foreground">
                  <p>{card.additionalInfo}</p>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Additional Section */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6 text-accent-gold">
            Your Gateway to Future Living
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Future City Real Estate is not just about properties. It's about creating innovative, sustainable, and technologically advanced living spaces that redefine urban living.
          </p>
        </section>
      </main>
    </div>
  );
}
