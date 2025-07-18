import React, { useState, useRef, useEffect } from 'react';
import styles from './Burger.module.scss';

const Burger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInitial, setIsInitial] = useState(true);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (isInitial) setIsInitial(false);
    setIsOpen(!isOpen);
  };

  // Аналог "void btn.offsetWidth" для перезапуска анимации
  useEffect(() => {
    if (!isInitial && buttonRef.current) {
      const btn = buttonRef.current;
      const animationClass = isOpen ? styles.open : styles.close;
      
      // Удаляем классы анимации
      btn.classList.remove(styles.open, styles.close);
      
      // Принудительный reflow
      void btn.offsetWidth;
      
      // Добавляем нужный класс
      btn.classList.add(animationClass);
    }
  }, [isOpen, isInitial, styles]);

  const getButtonClass = () => {
    let className = styles.btnToggle;
    if (!isInitial) {
      className += ` ${isOpen ? styles.open : styles.close}`;
    }
    return className;
  };

  return (
    <button
      ref={buttonRef}
      className={getButtonClass()}
      onClick={handleClick}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </button>
  );
};

export default Burger;