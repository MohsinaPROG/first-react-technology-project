import { FaStar } from "react-icons/fa";
import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <div className="group flex flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Top */}
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 p-2">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-full w-full object-contain"
          />
        </div>

        <span className="rounded-full bg-purple-50 px-2.5 py-1 text-[10px] font-medium text-purple-600">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-4 text-base font-bold text-gray-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 min-h-[48px] text-xs leading-5 text-gray-500">
        {technology.description}
      </p>



      {/* Category */}
      {/* <div className="mt-4">
        <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-medium text-gray-600">
          {technology.category}
        </span>
      </div> */}

      {/* Difficulty + rating */}
      {/* <div className="mt-4 flex items-center justify-between text-[10px] text-gray-500">
        <span>
          <span className="font-medium text-gray-700">
            {technology.difficulty}
          </span>
        </span>

        <span className="flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          {technology.rating}
        </span>
      </div>  */}

      {/* Category + Difficulty + Rating */}
<div className="mt-4 flex items-center justify-between text-[10px] text-gray-500">
  
  {/* Category */}
  <span className="rounded-full bg-gray-100 px-2.5 py-1 font-medium text-gray-600">
    {technology.category}
  </span>

  {/* Difficulty */}
  <span className="font-medium text-gray-700">
    {technology.difficulty}
  </span>

  {/* Rating */}
  <span className="flex items-center gap-1">
    <FaStar className="text-yellow-400" />
    {technology.rating}
  </span>

</div>




      {/* Add button */}
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-4 w-full rounded-md py-2.5 text-xs font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-gray-200 text-gray-500"
            : "bg-gray-950 text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;