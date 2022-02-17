interface Props {
  itemName: string;
  handleClose: Function;
  handleSelectValue: Function;
  itemValue: number;
  type: string;
}

const DropdownItem = ({
  itemName,
  itemValue,
  handleClose,
  type,
  handleSelectValue,
}: Props) => {
  const handleItemSelect = () => {
    handleSelectValue(type, itemName);
    handleClose();
  };
  return (
    <div
      className="hover:bg-[#B8B8C2] hover:[--tw-bg-opacity:0.27] text-[14px] py-[6px] px-2"
      onClick={handleItemSelect}
    >
      {itemName}
    </div>
  );
};
export default DropdownItem;
