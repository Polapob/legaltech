import Map from "../../../picture/map.png";
import Money from "../../../picture/money.png";
import Clock from "../../../picture/clock.png";
import NavigationButton from "./NavigationButton";

const NavigationBox = () => {
  return (
    <div className="flex flex-row justify-between items-start w-[1250px] mt-12">
      <div className="flex flex-col justify-center items-center w-[350px] space-y-2">
        <div className="w-[150px] h-[150px] flex justify-center items-center">
        <img src={Map} alt = "map" width = "150" height = "150" />
        </div>
        <div className="text-[32px] font-bold">Patent Mapping</div>
        <div className="text-[18px] text-center font-normal font-Kanit pb-4">
          แผนที่เชื่อมโยง ความหนาแน่นของสิทธิบัตรแต่ละประเภท
          พร้อมระบบวิเคราะห์ภายในตัว เพื่อเห็นเทรนด์ในภาพรวมได้อย่างง่ายดาย
        </div>

        <NavigationButton path = "/search" />
      </div>
      <div className="flex flex-col justify-start items-center w-[350px] space-y-2">
          <div className="w-[150px] h-[150px] flex justify-center items-center">
          <img src={Clock} alt="clock" width="135" height="135" />
          </div>
        <div className="text-[32px] font-bold">Time estimating</div>
        <div className="text-[18px] text-center font-normal font-Kanit pb-4">
          ช่วยให้เห็นระยะเวลาที่คุณจะใช้ยื่นสิทธิบัตรจนได้รับการจดของแต่ละประเภทได้อย่างแม่นยำด้วยสถิติ
        </div>
        <NavigationButton path = "/timecalculator" />
      </div>
      <div className="flex flex-col justify-center items-center w-[350px] space-y-2">
      <div className="w-[150px] h-[150px] flex justify-center items-center">
          <img src={Money} alt="money" width="135" height="135" />
          </div>
        <div className="text-[32px] font-bold">Patent cost calculator</div>
        <div className="text-[18px] text-center font-normal font-Kanit pb-4">
        ช่วยคำนวณงบประมาณก่อนยื่น และระหว่างยื่นสิทธิบัตร ทำให้คุณประมาณค่าใช้จ่ายได้อย่างถูกต้อง
        </div>
        <div className="my-[6rem]"></div>
        <NavigationButton path = "/costcalculator" />
      </div>
    </div>
  );
};
export default NavigationBox;
