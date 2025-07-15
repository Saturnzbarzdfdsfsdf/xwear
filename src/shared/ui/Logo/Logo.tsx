import React from 'react';

interface ILogoProps {
  props: string | React.FunctionComponent<React.SVGProps<SVGSVGElement>> | React.ReactNode;
}

const Logo: React.FC<ILogoProps> = ({ props: logoContent }) => {
  // Переименовали пропс внутри компонента для ясности
  if (typeof logoContent === 'string') {
    // Определяем, похожа ли строка на URL
    const isUrl = /^(https?:\/\/|\/|\.\/|\.\.\/)/i.test(logoContent);
    
    if (isUrl) {
       // Если строка - URL, используем тег img
      return <img src={logoContent} alt="Logo" />;
    } else {
       // Если строка не URL, выводим как текстовый логотип
      return <div className="text-logo">{logoContent}</div>;
    }
  } 
  // Проверяем, является ли props функцией (компонентом)
  else if (typeof logoContent === 'function') {
    const SvgComponent = logoContent;
    return <SvgComponent />;
  } 
  else {
    return <>{logoContent}</>;
  }
};

export default Logo;