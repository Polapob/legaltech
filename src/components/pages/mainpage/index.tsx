import { ChangeEventHandler, useState } from "react";
import RecommendCards from "../components/RecommendCards";
import SearchBar from "../components/SearchBar";

const Mainpage = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleSearchQuery = (text: string) => {
    setSearchQuery(text);
  };
  console.log(searchQuery);
  return (
    <div className="flex flex-col items-center h-screen">
      <div className=" text-[52px] font-bold my-12">Start your search</div>
      <SearchBar handleSearchQuery={handleSearchQuery} />
      <RecommendCards searchQuery={searchQuery} />
    </div>
  );
};
export default Mainpage;
