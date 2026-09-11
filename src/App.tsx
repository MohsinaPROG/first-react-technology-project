import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

import type { Technology } from "./types/technology";

const App = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  // Load JSON
  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true);

        const response = await fetch("/data/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error(error);

        toast.error("Failed to load technologies.");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  // Add technology
  const handleAddToStack = (technology: Technology) => {

    // Prevent duplicate
    const alreadyExists = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyExists) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack.`);
  };

  // Remove individual technology
  const handleRemove = (id: string) => {

    const removedTechnology = stack.find(
      (item) => item.id === id
    );

    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed from your stack.`);
    }
  };

  // Remove all
  const handleRemoveAll = () => {
    setStack([]);

    toast.info("All technologies removed from your stack.");
  };

  return (
    <>
      <Navbar />

      <main>
        <Banner />

        {/* Loading */}
        {loading ? (
          <section className="flex min-h-[300px] items-center justify-center">
            <div className="text-center">
              <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-pink-500" />

              <p className="mt-3 text-sm text-gray-500">
                Loading technologies...
              </p>
            </div>
          </section>
        ) : (
          <Technologies
            technologies={technologies}
            stack={stack}
            onAdd={handleAddToStack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        )}

        {/* Dummy sections for navbar links */}
        <section id="projects" className="hidden">
          Projects
        </section>

        <section id="about" className="hidden">
          About
        </section>

        <section id="contact" className="hidden">
          Contact
        </section>
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;