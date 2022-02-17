import { Link } from "react-router-dom";

interface Props{
    path:string
}

const NavigationButton = ({path}:Props) => {
  return (
    <Link to = {path}>
      <div className="box-border border-[2px] py-2 px-4 [border-color:rgb(57,174,52)] rounded-3xl text-[#39AE34] font-light hover:bg-green-200">
        Get Started
      </div>
    </Link>
  );
};
export default NavigationButton;
