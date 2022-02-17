import {
  Fragment,
  MouseEventHandler,
  useState,
  MouseEvent,
  useRef,
  useEffect,
} from "react";
import DropdownItem from "./DropdownItem";

interface Props {
  titleName: string;
  chooseData: Array<{ selectTitle: string; selectValue: number }>;
  selectData: string;
  handleSelectValue: Function;
  type: string;
}
const Dropdown = ({
  titleName,
  chooseData,
  selectData,
  handleSelectValue,
  type,
}: Props) => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const [isClick, setIsClick] = useState<boolean>(false);
  const handleOnClick: MouseEventHandler = (event: MouseEvent) => {
    setIsClick(true);
  };
  const handleClose = () => {
    setIsClick(false);
  };

  useEffect(() => {
    const checkPosition = (event: any) => {
      if (
        isClick &&
        event &&
        event.target &&
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target)
      ) {
        // console.log("user close dropdown!");
        handleClose();
      }
    };
    window.addEventListener("click", checkPosition);
    return () => {
      window.removeEventListener("click", checkPosition);
    };
  });

  // console.log(selectData);
  return (
    <Fragment>
      <div className="flex flex-row justify-start items-center font-Kanit space-x-2 mb-4 mt-2">
        <div className="text-[20px]">{titleName}</div>
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
      <div
        className="box-border border-2 w-[350px] mt-2 border-[#7B46FF] h-[35px] justify-between items-center flex px-2"
        onClick={handleOnClick}
      >
        <div className="font-Kanit text-[20px]">{selectData}</div>
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
      </div>
      {isClick && (
        <div
          className="box-border border-2 border-red w-[350px]"
          ref={dropDownRef}
        >
          {chooseData.map((val, idx) => {
              console.log(val);
            return (
              <div key={idx} className="w-[350px]">
                <DropdownItem
                  type={type}
                  itemName={val.selectTitle}
                  itemValue={val.selectValue}
                  handleClose={handleClose}
                  handleSelectValue={handleSelectValue}
                />
              </div>
            );
          })}
        </div>
      )}
    </Fragment>
  );
};
export default Dropdown;
