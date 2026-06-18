import Button from "./Button";

const filterProp = ["All", "Technology", "Travel", "Lifestyle"];

export default function FilterPost({ activeFilter, onFilterChange }) {
  return (
    <>
      <div className=" flex justify-around items-center my-3">
        {filterProp.map((category) => (
          <Button
            key={category}
            category={category}
            onClick={() => onFilterChange(category)}
            activeFilter={activeFilter}
          />
        ))}
      </div>
    </>
  );
}
