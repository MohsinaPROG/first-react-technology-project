import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import type { Technology } from "../types/technology";

interface TechnologiesProps {
  technologies: Technology[];
  stack: Technology[];
  onAdd: (technology: Technology) => void;
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const Technologies = ({
  technologies,
  stack,
  onAdd,
  onRemove,
  onRemoveAll,
}: TechnologiesProps) => {
  return (
    <section id="technologies" className="bg-white py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Explore the{" "}
            <span className="gradient-text">Technologies</span>
          </h2>

          <p className="mt-2 text-xm text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Cards + Your Stack */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">

          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isAdded={stack.some(
                  (item) => item.id === technology.id
                )}
                onAdd={onAdd}
              />
            ))}
          </div>

          {/* Your Stack */}
          <YourStack
            stack={stack}
            onRemove={onRemove}
            onRemoveAll={onRemoveAll}
          />

        </div>
      </div>
    </section>
  );
};

export default Technologies;