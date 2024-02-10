import MenuItem from "./menu-item";

export default function MenuList({ list = [], handleClose }) {

  return (

    <ul className="menu-list-container flex flex-col gap-4">
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem} handleClose={handleClose} />)
        : null}
    </ul>
    
  );

}