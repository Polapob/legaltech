import { MouseEventHandler, useRef, useEffect } from "react";

interface Props {
  isOpen: boolean;
  handleClose: MouseEventHandler<HTMLDivElement>;
}

const TimeResultModal = ({ isOpen, handleClose }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleCloseModal = (event:any) => {
      if (
        modalRef && event && event.target &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        handleClose(event);
      }
    };
    window.addEventListener('click',handleCloseModal);
    
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
            TOTAL TIME SPENDING
          </div>
          <div className="bg-[rgba(255,255,255,0.34)] w-[250px] h-[150px] rounded-2xl flex flex-col items-center justify-center text-white">
            <div className=" text-7xl font-bold">32</div>
            <div className=" text-4xl">Months</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimeResultModal;
