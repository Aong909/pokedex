import { generationList, typesList, sortList } from "../../utils/optionList";
import { useSearchForm } from "./SearchForm.hook";

const SearchForm = () => {
  const { fieldKeyWord, fieldKeyGeneration, fieldKeyType, fieldKeySort } =
    useSearchForm();
  return (
    <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
      <div>
        <label
          htmlFor="generation"
          className="block mb-2 text-mb font-medium text-white"
        >
          Generation
        </label>
        <select
          {...fieldKeyGeneration}
          id="generation"
          className="bg-[#253641] capitalize border border-gray-300 text-white text-sm rounded-lg focus:ring-[#316bad] focus:border-[#316bad] block w-full p-2.5"
        >
          {generationList.map((item, index) => {
            return (
              <option
                className="capitalize"
                key={`generation-key-${index}`}
                value={index}
              >
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label
          htmlFor="type"
          className="block mb-2 text-mb font-medium text-white"
        >
          Type
        </label>
        <select
          {...fieldKeyType}
          id="type"
          className="bg-[#253641] capitalize border border-gray-300 text-white text-sm rounded-lg focus:ring-[#316bad] focus:border-[#316bad] block w-full p-2.5"
        >
          {typesList.map((item, index) => {
            return (
              <option
                className="capitalize"
                key={`type-key-${index}`}
                value={item}
              >
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label
          htmlFor="sort"
          className="block mb-2 text-mb font-medium text-white"
        >
          Sort By
        </label>
        <select
          {...fieldKeySort}
          id="sort"
          className="bg-[#253641] capitalize border border-gray-300 text-white text-sm rounded-lg focus:ring-[#316bad] focus:border-[#316bad] block w-full p-2.5"
        >
          {sortList.map((item, index) => {
            return (
              <option
                className="capitalize"
                key={`sort-key-${index}`}
                value={item}
              >
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        {" "}
        <label
          htmlFor="generation"
          className="block mb-2 text-mb font-medium text-white"
        >
          Name
        </label>
        <input
          {...fieldKeyWord}
          id="generation"
          className="bg-[#253641] capitalize border border-gray-300 text-white text-sm rounded-lg focus:ring-[#316bad] focus:border-[#316bad] block w-full p-2.5"
        />
      </div>
    </form>
  );
};

export default SearchForm;
