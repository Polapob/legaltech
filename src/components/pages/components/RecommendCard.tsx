import { MockData } from "../../interfaces/mockDataInterface";

interface Props{
    patentData:MockData
}

const RecommendCard = ({patentData}:Props)=>{
    return <div className="flex box-border border-2 flex-col w-[750px] px-2 my-4">
        <div className="font-bold text-[18px]">{patentData.ProductName || ""}</div>
        <div>สถานะสุดท้าย: {patentData.สถานะสุดท้าย || ""}</div>
        <div className="">Application Number: {patentData.เลขที่คำขอ || ""}</div>
        <div>Applicants: {patentData.PatentApplicant || ""}</div>
        <div>Inventor:{patentData["ผู้ประดิษฐ์/ออกแบบ"] || ""}</div>
    </div>
}
export default RecommendCard;