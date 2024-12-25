import Head from 'next/head';

const Listings = () => {
  const listingsData = [
    {
      title: 'Luxury Villa in AI City',
      description: 'A stunning villa located in the heart of the Artificial Intelligence City.',
      price: '$500,000',
      image: '/ai-villa.jpg', // Placeholder image
    },
    {
      title: 'Modern Apartment in Life Sciences Hub',
      description: 'A contemporary apartment with easy access to the Life Sciences Hub.',
      price: '$350,000',
      image: '/life-sciences-apartment.jpg', // Placeholder image
    },
    {
      title: 'Commercial Plot in Manufacturing Zone',
      description: 'A prime commercial plot in the bustling Electronics and Advanced Manufacturing Zone.',
      price: '$1,000,000',
      image: '/manufacturing-plot.jpg', // Placeholder image
    },
    // Add more listings here
  ];

  return (
    <div>
      <Head>
        <title>Property Listings - Future City Real Estate</title>
        <meta name="description" content="Explore our property listings in Future City" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-4">
        <section className="py-12">
          <h1 className="text-4xl font-bold mb-4 text-center">Property Listings</h1>
          <p className="text-lg text-center mb-8">Explore our exclusive listings in the Future City area. Find your perfect property today!</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listingsData.map((listing, index) => (
              <div key={index} className="border rounded p-4">
                <img src={listing.image} alt={listing.title} className="w-full h-56 object-cover mb-4 rounded" />
                <h2 className="text-xl font-bold mb-2">{listing.title}</h2>
                <p className="text-gray-700 mb-2">{listing.description}</p>
                <p className="text-primary-gold font-bold">{listing.price}</p>
                <button className="bg-secondary-gold text-white py-2 px-4 rounded mt-4 block">View Details</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Listings;
