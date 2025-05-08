import "./index.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
      }
    >
      <Helmet>
        <title>SoftSell | Sell Unused Software Licenses</title>
        <meta
          name="description"
          content="Turn your unused software licenses into cash quickly and securely with SoftSell."
        />
        <meta
          name="keywords"
          content="software resale, license resale, unused software, sell license, software marketplace"
        />
        <meta name="author" content="SoftSell Chandu Dhondi" />
        <meta property="og:title" content="SoftSell" />
        <meta
          property="og:description"
          content="Turn your unused software licenses into cash quickly and securely."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://softsell.com" />
      </Helmet>

      <header className="p-6 flex justify-between items-center">
        <motion.h1
          className="text-2xl font-bold"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          SoftSell
        </motion.h1>
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-200 text-black p-2 rounded"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </motion.button>
      </header>

      <section className="text-center py-20 px-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Turn Unused Software Licenses Into Cash
        </motion.h2>
        <p className="mb-6">
          We help you unlock value from your unused software with secure resale
          options.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded">
          Get a Quote
        </button>
      </section>

      <section className="py-20 px-4 grid md:grid-cols-3 gap-8 text-center">
        {[
          {
            title: "Upload License",
            description:
              "Submit the license details for the software you want to sell.",
          },
          {
            title: "Get Valuation",
            description:
              "We’ll analyze your license and offer a fair market price.",
          },
          {
            title: "Get Paid",
            description: "Accept the offer and receive your payment securely.",
          },
        ].map((step, i) => (
          <motion.div
            key={i}
            className="p-6 border rounded shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          >
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </section>

      <section className="py-20 px-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white grid md:grid-cols-2 gap-6">
        {[
          {
            title: "Fast Payments",
            description:
              "Receive your funds within 24 hours of license approval.",
          },
          {
            title: "Trusted Buyers",
            description:
              "We work only with verified, high-reputation software buyers.",
          },
          {
            title: "No Hidden Fees",
            description:
              "Our pricing is transparent—what you see is what you get.",
          },
          {
            title: "Secure Transactions",
            description:
              "Your license data is encrypted and protected end-to-end.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="p-6 border rounded shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <h4 className="font-bold text-lg mb-2">{item.title}</h4>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </section>

      <section className="py-20 px-4 text-center">
        <motion.h3
          className="text-3xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          What Our Customers Say
        </motion.h3>
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
        >
          <div className="p-6 border rounded">
            <p className="italic">
              “SoftSell helped us recover $3k in unused software. Great team!”
            </p>
            <p className="mt-4 font-semibold">
              Emily Tran, IT Manager, DevSolutions
            </p>
          </div>
          <div className="p-6 border rounded">
            <p className="italic">
              “Quick, easy, and transparent process. Highly recommend.”
            </p>
            <p className="mt-4 font-semibold">Jared Lee, CTO, CodePath Ltd.</p>
          </div>
        </motion.div>
      </section>

      <motion.section
        className="py-20 px-4"
        initial={{ opacity: 0, x: -1000 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "tween", stiffness: "200" }}
      >
        <h3 className="text-3xl font-bold mb-8 text-center">Contact Us</h3>
        <form className="max-w-xl mx-auto grid gap-4">
          <input className="p-3 border rounded" placeholder="Name" required />
          <input
            className="p-3 border rounded"
            type="email"
            placeholder="Email"
            required
          />
          <input className="p-3 border rounded" placeholder="Company" />
          <select className="p-3 border rounded">
            <option>License Type</option>
            <option>Antivirus</option>
            <option>Office Suite</option>
            <option>Dev Tools</option>
          </select>
          <textarea
            className="p-3 border rounded"
            placeholder="Message"
            rows={4}
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-2 rounded">
            Submit
          </button>
        </form>
      </motion.section>

      <footer className="p-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2025 SoftSell. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
