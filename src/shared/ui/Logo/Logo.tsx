import React from 'react';

interface ILogoProps {
  content: string | React.FunctionComponent<React.SVGProps<SVGSVGElement>> | React.ReactNode;
  className?: string;
}

const Logo: React.FC<ILogoProps> = ({ content, className }) => {
  if (typeof content === 'string') {
    const isUrl = /^(https?:\/\/|\/|\.\/|\.\.\/)/i.test(content);

    if (isUrl) {
      // content – это путь к изображению
      return <img className={className} src={content} alt="Logo" />;
    } else {
      // content – текстовый логотип
      return <div className={className}>{content}</div>;
    }
  } else if (typeof content === 'function') {
    const SvgComponent = content;
    return <SvgComponent className={className} />;
  } else {
    return <div className={className}>{content}</div>;
  }
};

export default Logo;
