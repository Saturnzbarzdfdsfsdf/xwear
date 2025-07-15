import { NavLink } from 'react-router-dom';
import style from '../Header.module.scss'; // Импорт стилей из родителя

interface NavItem {
  path: string;
  label: string;
}

const navItems: NavItem[] = [
  { path: "/clothing", label: "Одежда" },
  { path: "/footwear", label: "Обувь" },
  { path: "/accessories", label: "Аксессуары" },
  { path: "/brands", label: "Бренды" },
  { path: "/calculation", label: "Расчет стоимости" },
  { path: "/info", label: "Информация" },
];

const NavList = () => {
  return (
    <ul className={style.list}>
      {navItems.map((item) => (
        <li key={item.path}>
          <NavLink 
            to={item.path}
            className={({ isActive }: {isActive: boolean}) => 
              `${style.link} ${isActive ? style.active : ''}`
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavList;