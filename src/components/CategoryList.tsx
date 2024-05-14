import React from "react";

type Props = {
  categoryList: string[];
  selected: string;
  onClick: (selected: string) => void;
};

const CategoryList = ({ categoryList, selected, onClick }: Props) => {
  return (
    <section className="text-center p-4">
      <h2 className="text-lg font-bold underline underline-offset-8 decoration-sky-500">
        Category
      </h2>
      <ul>
        {categoryList.map((category) => (
          <li
            className={`cursor-pointer hover:text-sky-500 ${
              selected === category && "text-sky-600"
            }`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CategoryList;
