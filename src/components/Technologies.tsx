import TechnologyCard from "./TechnologyCard.tsx";
import YourStack from "./YourStack.tsx";
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
    <section
      id="technologies"
      className="bg-white py-10 lg:py-14"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section heading */}
        <div className="mb-8">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Explore the{" "}
            <span className="gradient-text">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-xs text-gray-500">
            Pick the technology category to build your ideal stack.
          </p>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">

          {/* Technology cards */}
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

          {/* Sidebar */}
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