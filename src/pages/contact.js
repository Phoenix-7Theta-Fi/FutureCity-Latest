import Head from 'next/head';

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact Future City Real Estate</title>
        <meta name="description" content="Contact us at Future City Real Estate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto p-4">
        <section className="py-12">
          <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-lg text-center mb-8">We'd love to hear from you! Please reach out with any questions or inquiries.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg mb-2"><strong>Address:</strong></p>
              <p className="text-gray-700 mb-4">Future City Development Area,<br /> Mucherla, Hyderabad, Telangana</p>
              <p className="text-lg mb-2"><strong>Phone:</strong></p>
              <p className="text-primary-gold mb-4">+91 90000 00000</p>
              <p className="text-lg mb-2"><strong>Email:</strong></p>
              <p className="text-primary-gold mb-4">info@futurecityrealestate.com</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                  <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                  <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
                </div>
                <div>
                  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-secondary-gold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
