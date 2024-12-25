import Head from 'next/head';

const MissionPage = () => {
  return (
    <div>
      <Head>
        <title>Our Mission - Future City Real Estate</title>
        <meta name="description" content="Our mission at Future City Real Estate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto p-4">
        <section className="mission mt-8">
          <h1 className="text-3xl font-bold mb-4">Our Mission</h1>
          <div className="space-y-4">
            <p className="text-lg">At Future City Real Estate, our mission is to:</p>
            <ul className="list-disc list-inside text-lg">
              <li>Provide exceptional real estate services tailored to our clients' unique needs</li>
              <li>Connect individuals and businesses with transformative property opportunities in the Future City development</li>
              <li>Deliver transparent, ethical, and innovative real estate solutions</li>
              <li>Support sustainable urban development and technological advancement</li>
            </ul>
            <p className="text-lg">We are committed to being more than just a real estate agency – we are your partners in building the future.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MissionPage;
