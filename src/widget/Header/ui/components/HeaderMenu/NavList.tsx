import { useRef, useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import style from './NavList.module.scss';

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
  const [activeItem, setActiveItem] = useState<NavItem | null>(null);
  const location = useLocation();
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [dashStyle, setDashStyle] = useState({ width: 0, transform: 'translateX(0)' });

  // Определение активного элемента
  useEffect(() => {
    const active = navItems.find(item => location.pathname.startsWith(item.path));
    setActiveItem(active || null);
  }, [location]);

  // Расчет позиции подчеркивания
  useEffect(() => {
    if (!activeItem || !listRef.current) {
      setDashStyle({ width: 0, transform: 'translateX(0)' });
      return;
    }

    const index = navItems.findIndex(item => item.path === activeItem.path);
    const activeElement = itemRefs.current[index];
    
    if (activeElement && listRef.current) {
      const rect = activeElement.getBoundingClientRect();
      const listRect = listRef.current.getBoundingClientRect();
      const left = rect.left - listRect.left;
      
      setDashStyle({
        width: rect.width,
        transform: `translateX(${left}px)`
      });
    }
  }, [activeItem]);

  // Обработчик ресайза окна
  useEffect(() => {
    const handleResize = () => {
      if (activeItem && listRef.current) {
        const index = navItems.findIndex(item => item.path === activeItem.path);
        const activeElement = itemRefs.current[index];
        
        if (activeElement) {
          const rect = activeElement.getBoundingClientRect();
          const listRect = listRef.current.getBoundingClientRect();
          const left = rect.left - listRect.left;
          
          setDashStyle({
            width: rect.width,
            transform: `translateX(${left}px)`
          });
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeItem]);

  return (
    <ul className={style.list} ref={listRef}>
      {navItems.map((item, index) => (
        <li 
          key={item.path} 
          ref={el => {
            itemRefs.current[index] = el;
          }}
        >
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
      <div className={style.dash} style={dashStyle} />
    </ul>
  );
};

export default NavList;
