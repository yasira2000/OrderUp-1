import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <form className="max-w px-4 py-2">
      <div className="relative">
        <CiSearch className="absolute inset-y-0 left-4 my-auto text-gray-500 size-5" />
        <input
          type="text"
          placeholder="Search"
          className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-3xl outline-none bg-gray-50 focus:bg-white focus:border-gra"
        />
      </div>
    </form>
  );
}
