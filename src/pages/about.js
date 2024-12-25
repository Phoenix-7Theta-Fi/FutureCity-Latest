import Head from 'next/head';

const About = () => {
  return (
    <div>
      <Head>
        <title>About Future City Real Estate</title>
        <meta name="description" content="About Future City Real Estate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-4">
        <section className="py-12">
          <h1 className="text-4xl font-bold mb-4 text-center">About Future City Real Estate</h1>
          <p className="text-lg mb-4">Welcome to Future City Real Estate, your trusted partner in finding exceptional properties in the burgeoning Hyderabad region. We specialize in connecting you with the finest real estate opportunities in and around the innovative Future City.</p>
          <p className="text-lg mb-4">Our mission is to provide unparalleled service and expert guidance to our clients, whether they are looking to invest in the next big development or find their dream home in a sustainable and technologically advanced environment.</p>
          <p className="text-lg mb-4">With a deep understanding of the local market and a focus on the future of urban development, Future City Real Estate is uniquely positioned to assist you in making informed and successful real estate decisions.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <p className="text-lg mb-4">Our team comprises experienced real estate professionals with a passion for the Hyderabad market and a commitment to client satisfaction. We bring a wealth of knowledge and a personalized approach to every transaction.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Expertise in the Future City and Hyderabad real estate market.</li>
            <li>Personalized service tailored to your unique needs.</li>
            <li>A commitment to integrity and transparency.</li>
            <li>Access to exclusive listings and investment opportunities.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg">To be the leading real estate agency in the Future City region, recognized for our expertise, innovation, and commitment to creating lasting value for our clients and the community.</p>
        </section>
      </main>
    </div>
  );
};

export default About;
