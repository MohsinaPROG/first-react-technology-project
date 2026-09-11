import { FaTimes } from "react-icons/fa";
import type { Technology } from "../types/technology";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <aside className="h-fit rounded-xl border border-gray-200 bg-white p-4 shadow-sm lg:sticky lg:top-24">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-4">
        <div>
          <h2 className="font-bold text-gray-900">
            Your Stack
          </h2>

          <p className="mt-1 text-[11px] text-gray-500">
            {stack.length}{" "}
            {stack.length === 1
              ? "Technology"
              : "Technologies"}{" "}
            Selected
          </p>
        </div>

        {stack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-[11px] font-medium text-red-500 hover:text-red-600"
          >
            Remove All
          </button>
        )}
      </div>

      {/* Empty state */}
      {stack.length === 0 ? (
        <div className="py-10 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-xl">
            🧰
          </div>

          <p className="mt-3 text-xs font-medium text-gray-700">
            Your stack is empty
          </p>

          <p className="mt-1 text-[10px] leading-4 text-gray-400">
            Add technologies from the list to build your ideal stack.
          </p>
        </div>
      ) : (
        <div className="mt-4 space-y-3">

          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-lg border border-gray-100 p-3"
            >
              {/* Icon */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-gray-50 p-1.5">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Info */}
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-xs font-semibold text-gray-800">
                  {technology.name}
                </h3>

                <p className="mt-1 text-[10px] text-gray-400">
                  {technology.category}
                </p>
              </div>

              {/* Remove */}
              <button
                onClick={() => onRemove(technology.id)}
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-gray-400 hover:bg-red-50 hover:text-red-500"
                title={`Remove ${technology.name}`}
              >
                <FaTimes size={11} />
              </button>
            </div>
          ))}

        </div>
      )}
    </aside>
  );
};

export default YourStack;