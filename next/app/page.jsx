import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>My Next.js Landing Page</title>
        <meta name="description" content="A simple landing page built with Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MyApp</h1>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="container mx-auto text-center py-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to MyApp</h2>
          <p className="text-lg text-gray-600 mb-8">Build amazing things with Next.js and Tailwind CSS.</p>
          <a
            href="#get-started"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
