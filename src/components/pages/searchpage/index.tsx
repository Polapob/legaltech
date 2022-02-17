import SearchBar from "../components/SearchBar";
import RecommendCards from "../components/RecommendCards";
import { useState } from "react";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleSearchQuery = (text: string) => {
    setSearchQuery(text);
  };
  return (
    <div className="flex flex-col items-center h-screen">
      <div className=" text-[52px] font-bold my-12">Start your search</div>
      <SearchBar handleSearchQuery={handleSearchQuery} />
      <RecommendCards searchQuery={searchQuery} />
    </div>
  );
};
export default SearchPage;
