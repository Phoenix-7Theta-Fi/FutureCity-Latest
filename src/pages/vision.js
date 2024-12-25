import Head from 'next/head';

const VisionPage = () => {
  return (
    <div>
      <Head>
        <title>Our Vision - Future City Real Estate</title>
        <meta name="description" content="Our vision for the future of real estate in Future City" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto p-4">
        <section className="vision mt-8">
          <h1 className="text-3xl font-bold mb-4">Our Vision</h1>
          <div className="space-y-4">
            <p className="text-lg">Our vision is to be the pioneering force in real estate development, transforming the landscape of Hyderabad through:</p>
            <ul className="list-disc list-inside text-lg">
              <li>Creating innovative, sustainable, and technologically advanced property solutions</li>
              <li>Establishing Future City as a global benchmark for intelligent urban development</li>
              <li>Empowering clients to invest in properties that represent the future of living and working</li>
              <li>Fostering a community that embraces innovation, sustainability, and progress</li>
            </ul>
            <p className="text-lg">We envision a Future City that is not just a location, but a lifestyle – where technology, sustainability, and human potential converge.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VisionPage;
