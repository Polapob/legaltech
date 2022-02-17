import Dropdown from "../components/Dropdown";
import { useState, useEffect } from "react";
import TimeResultModal from "./TimeResultModal";
import { Link } from "react-router-dom";
import { dropdownType, dropdownObjects } from "../../../utils/DropdownObject"

const TimeCalculatorPage = () => {
  const [isFillAll, setIsFillAll] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<dropdownType>({
    invention: "",
    typeOfInvention: "",
    numberOfSheets: "",
    movingPart: "",
    drawing: "",
    complexity: "",
  });

  const handleClose = () => {
    setIsFillAll(false);
  };
  const handleSelectValue = (type: string, value: string) => {
    //console.log(type);
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

  useEffect(() => {
    const handleFillAll = () => {
      if (
        selectValue["invention"] !== "" &&
        selectValue["typeOfInvention"] !== "" &&
        selectValue["numberOfSheets"] !== "" &&
        selectValue["movingPart"] !== "" &&
        selectValue["drawing"] !== "" &&
        selectValue["complexity"] !== ""
      ) {
        setIsFillAll(true);
      }
    };
    const timer = setTimeout(() => {
      handleFillAll();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [selectValue]);
  console.log(isFillAll);
  return (
    <div className="flex flex-col justify-center items-center relative">
      <Link to="/">
        <button className="box-border border-2 px-6 py-2 bg-blue-500 text-white text-[20px] rounded-3xl font-mono">
          Back to Mainpage
        </button>
      </Link>

      <div className="text-[46px] text-[rgb(57,174,52)] font-mono mt-16">
        Time Estimating
      </div>
      <div className="text-[20px] font-Kanit">
        กรอกข้อมูลที่ใช้ในการประเมิณเวลาที่จะยื่นขอสิทธิบัตรจนไปถึงการประกาศใช้สิทธิบัตร
      </div>
      <div className="flex justify-between items-start box-border w-full px-32 mt-16">
        <div className="w-full space-y-12 flex flex-col justify-center items-center">
          <Dropdown
            titleName="Invention or Design Patent"
            selectData={selectValue.invention}
            chooseData={dropdownObjects.invention}
            handleSelectValue={handleSelectValue}
            type="invention"
          />
          <Dropdown
            titleName="Type of Invention"
            selectData={selectValue.typeOfInvention}
            chooseData={dropdownObjects.typeOfInvention}
            handleSelectValue={handleSelectValue}
            type="typeOfInvention"
          />
          <Dropdown
            titleName="Number of Sheets"
            selectData={selectValue.numberOfSheets}
            chooseData={dropdownObjects.numberOfSheets}
            handleSelectValue={handleSelectValue}
            type="numberOfSheets"
          />
          {/* </div> */}
        </div>
        <div className="w-full space-y-12 flex justify-center items-center flex-col">
          <Dropdown
            titleName="Level of Complexity"
            selectData={selectValue.complexity}
            chooseData={dropdownObjects.complexity}
            handleSelectValue={handleSelectValue}
            type="complexity"
          />
          <Dropdown
            titleName="Drawing"
            selectData={selectValue.drawing}
            chooseData={dropdownObjects.drawing}
            handleSelectValue={handleSelectValue}
            type="drawing"
          />
          <Dropdown
            titleName="Number of Moving"
            selectData={selectValue.movingPart}
            chooseData={dropdownObjects.movingParts}
            handleSelectValue={handleSelectValue}
            type="movingPart"
          />
        </div>
      </div>
      <div></div>
      <TimeResultModal isOpen={isFillAll} handleClose={handleClose} />
    </div>
  );
};
export default TimeCalculatorPage;
