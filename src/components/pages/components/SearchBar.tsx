import { ChangeEvent} from "react";

interface Props {
 handleSearchQuery: Function
}

const SearchBar = ({ handleSearchQuery }: Props) => {
  return (
    <div className="flex justify-start items-center box-border border-2 border-violet-400 mb-12">
      <input
        className="focus:outline-0 text-[20px] w-[300px] placeholder:text-[16px] placeholder:absolute placeholder:top-4 p-2"
        placeholder="Search by keywords or Patent Field"
        onChange={(event:ChangeEvent<HTMLInputElement>)=>{
            if (event && event.target && event.target.value){
                handleSearchQuery(event.target.value);
            }
            else{
                handleSearchQuery("");
            }
        }}
      />
      <div className="h-full flex items-center p-2 bg-violet-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};
export default SearchBar;
