import { useCallback, useEffect, useState } from "react";
import RecommendCard from "./RecommendCard";
import { MockData } from "../../interfaces/mockDataInterface";
import mockData from "../../../mockdata/mockData.json";

interface Props {
  searchQuery: string;
}

const RecommendCards = ({ searchQuery }: Props) => {
  const [cardData, setCardData] = useState<MockData[]>([]);
  const [numberShow, setNumberShow] = useState<number>(10);
  const searchResults = useCallback(() => {
    const filteredData = mockData.filter((data: MockData) => {
      if (data && data.ProductName && data.ProductName.includes(searchQuery)) {
        return true;
      }
      return false;
    });
    setCardData(filteredData);
  }, [searchQuery]);
  useEffect(() => {
    searchResults();
  }, [searchResults, searchQuery]);
  return (
    <div>
      {searchQuery !== "" &&
        cardData.length > 0 &&
        cardData.map((eachData: MockData, idx) => {
          if (eachData.ProductName !== null && idx < numberShow) {
            console.log(eachData);
            return (
              <div key={eachData.เลขที่คำขอ}>
                <RecommendCard patentData={eachData} />
              </div>
            );
          }
        })}
    </div>
  );
};
export default RecommendCards;
