import { CategoryProps } from "@/lib/types";

const CategoryComponent: React.FC<CategoryProps> = ({ categoryName }) => {
  return (
    <span className="text-gray-500">
      <span className="font-bold text-black">Category:</span> {categoryName}
    </span>
  );
};

export default CategoryComponent;
