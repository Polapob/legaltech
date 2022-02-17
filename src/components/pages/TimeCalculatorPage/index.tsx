import Dropdown from "./Dropdown";
import { useState } from "react";

const dropdownObjects = {
  invention: [
    { selectValue: 0, selectTitle: "Invention patent" },
    { selectValue: 1, selectTitle: "Design Patent" },
  ],
  typeOfInvention: [
    { selectValue: 0, selectTitle: "Engineering" },
    { selectValue: 1, selectTitle: "Chemical" },
    { selectValue: 2, selectTitle: "Electricity" },
    { selectValue: 3, selectTitle: "Biotechnology" },
    { selectValue: 4, selectTitle: "Pharmacy" },
    { selectValue: 5, selectTitle: "Physic" },
    { selectValue: 6, selectTitle: "Pitro Chemical" },
    { selectValue: 7, selectTitle: "Pitro" },
    { selectValue: 8, selectTitle: "Design 1" },
    { selectValue: 9, selectTitle: "Design 2" },
    { selectValue: 10, selectTitle: "Design 3" },
    { selectValue: 11, selectTitle: "Chemical Engineering" },
    { selectValue: 12, selectTitle: "Food and Cosmetic Patent" },
  ],
  numberOfSheets: [
    { selectValue: 0, selectTitle: "Low" },
    { selectValue: 1, selectTitle: "High" },
  ],
  movingParts: [
    { selectValue: 0, selectTitle: "Yes" },
    { selectValue: 1, selectTitle: "Yes" },
  ],
  drawing: [
    { selectValue: 0, selectTitle: "Less than 10 pages" },
    { selectValue: 1, selectTitle: "More than 10 pages" },
  ],
  complexity: [
    { selectValue: 0, selectTitle: "Low" },
    { selectValue: 1, selectTitle: "High" },
  ],
};
interface dropdownType {
  invention: string;
  typeOfInvention: string;
  numberOfSheets: string;
  movingPart: string;
  drawing: string;
  complexity: string;
}

const TimeCalculatorPage = () => {
  const [selectValue, setSelectValue] = useState<dropdownType>({
    invention: "",
    typeOfInvention: "",
    numberOfSheets: "",
    movingPart: "",
    drawing: "",
    complexity: "",
  });
  const handleSelectValue = (type: string, value: string) => {
    console.log(type);
    if (type === "invention") {
      setSelectValue({ ...selectValue, invention: value });
    } else if (type === "typeOfInvention") {
      setSelectValue({ ...selectValue, typeOfInvention: value });
    } else if (type === "numberOfSheets") {
      setSelectValue({ ...selectValue, numberOfSheets: value });
    } else if (type === "movingPart") {
      setSelectValue({ ...selectValue, movingPart: value });
    } else if (type === "drawing") {
      setSelectValue({ ...selectValue, drawing: value });
    } else if (type === "complexity") {
      setSelectValue({ ...selectValue, complexity: value });
    }
  };
  //console.log(selectValue);
  return (
    <div className="flex flex-col justify-center items-center mt-24">
      <div className="text-[46px] text-[rgb(57,174,52)] font-mono">
        Time Estimating
      </div>
      <div className="text-[20px] font-Kanit">
        กรอกข้อมูลที่ใช้ในการประเมิณเวลาที่จะยื่นขอสิทธิบัตรจนไปถึงการประกาศใช้สิทธิบัตร
      </div>
      <div className="flex justify-between items-start box-border w-full px-32 mt-4">
        <div className="w-full box-border border-2">
          <div>
            <Dropdown
              titleName="Invention or Design patent"
              selectData={selectValue.invention}
              chooseData={dropdownObjects.invention}
              handleSelectValue={handleSelectValue}
              type="invention"
            />
            {/* <div className="flex flex-row justify-start items-center font-Kanit space-x-2">
              <div className="text-[20px]">Invention or Design patent</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="box-border border-2 w-[250px] mt-2 border-[#7B46FF] h-[35px] justify-between items-center flex px-2">
              <div></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#7B46FF"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
  </div> */}
          </div>
        </div>
        <div className="w-full box-border border-2">123</div>
      </div>
    </div>
  );
};
export default TimeCalculatorPage;
