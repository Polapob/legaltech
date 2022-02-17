import { MouseEventHandler, useRef, useEffect, useState } from "react";
import { dropdownType, keyToValueObjects } from "../../../utils/DropdownObject";
import { apiClient } from "../../../utils/Apiclient";

interface Props {
  isOpen: boolean;
  handleClose: MouseEventHandler<HTMLDivElement>;
  selectValue: dropdownType;
}

const CostResultModal = ({ isOpen, handleClose, selectValue }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [costResult, setCostResult] = useState<number>(0);

  useEffect(() => {
    const calculateCost = async () => {
      const A = keyToValueObjects[selectValue.invention];
      const B = keyToValueObjects[selectValue.complexity];
      const C = keyToValueObjects[selectValue.movingPart];
      const D = keyToValueObjects[selectValue.numberOfSheets];
      const E = keyToValueObjects[selectValue.drawing];
      const cost =
        25041 +
        2450 * A +
        1194 * B +
        2175 * C +
        2450 * D +
        2453 * E -
        1091 * A * C +
        772 * A * B * C * D -
        766 * B * D -
        691 * A * D +
        494 * B * C * D;
      //console.log(selectValue.complexity);
      const dateString = new Date().toISOString().split("T")[0];
      // console.log(dateString)
      const response = await apiClient.get(
        `/Stat-ReferenceRate/v2/DAILY_REF_RATE/?start_period=${dateString}&end_period=${dateString}`,
        {
          headers: {
            "X-IBM-Client-Id": process.env.REACT_APP_BOT_CLIENT_ID || "",
            accept: "application/json",
          },
        }
      );
      const { result } = await response.data;
      const usdThb = parseFloat(result.data.data_detail[0].rate);
      const convertToThb = Math.round(cost * usdThb);
      setCostResult(convertToThb);
      // return cost.toString();
    };
    calculateCost();
  }, [selectValue]);
  useEffect(() => {
    const handleCloseModal = (event: any) => {
      if (
        modalRef &&
        event &&
        event.target &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        handleClose(event);
      }
    };
    window.addEventListener("click", handleCloseModal);
  }, [handleClose]);

  return (
    <div
      className={`fixed w-full inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center ${
        !isOpen && "hidden"
      }`}
    >
      <div
        className="w-[800px] h-[500px] box-border border-2 rounded-[2rem] bg-white flex flex-col justify-center items-center relative"
        ref={modalRef}
      >
        <div
          className="absolute right-6 top-4 box-border border-2 rounded-full w-[32px] h-[32px] flex justify-center items-center font-sans border-black text-[16px] font-bold hover:text-[20px]"
          onClick={handleClose}
        >
          X
        </div>
        <div className="bg-[#221C64] w-[650px] h-[400px] rounded-[2rem] flex flex-col justify-center items-center font-Kanit space-y-8">
          <div className="text-white text-3xl font-bold">
            TOTAL COST SPENDING
          </div>
          <div className="bg-[rgba(255,255,255,0.34)] w-[250px] h-[150px] rounded-2xl flex flex-col items-center justify-center text-white space-y-2">
            <div className=" text-4xl font-bold">{isOpen && costResult}</div>
            <div className=" text-4xl">Baht</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CostResultModal;
