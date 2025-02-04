import { useContext } from "react";
import { SidebarContext } from "../../contexts/SidebarContext";
import { FaArrowRight } from "react-icons/fa";
import TreeView from "../tree-view";
import menus from "../tree-view/data";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);

  return (
    <>
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } w-full  bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-50 px-4 lg:px-[35px]`}
      >
        <div className="flex items-center justify-between py-6 border-b">
          <div
            onClick={handleClose}
            className="cursor-pointer w-8 h-8 flex justify-center items-center"
          >
            <FaArrowRight className="text-2xl" />
          </div>
        </div>

        <div>
          <TreeView menus={menus} handleClose={handleClose} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
