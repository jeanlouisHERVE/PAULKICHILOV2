import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from '../../Utils/MenuItemsData';
import './Dropdown.scss';

function Dropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item) => (
          <li key={item.id}>
            <Link
              className={item.cName}
              to={item.path}
              onClick={() => setClick(false)}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Dropdown;
