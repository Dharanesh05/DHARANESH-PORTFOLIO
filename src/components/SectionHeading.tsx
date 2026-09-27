import React from 'react';

interface SectionHeadingProps {
  number: string;
  category: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  category,
  title,
  subtitle,
  align = 'center',
}) => {
  const isLeft = align === 'left';

  return (
    <div className={`space-y-3 mb-12 sm:mb-16 ${isLeft ? 'text-left' : 'text-center max-w-3xl mx-auto'}`}>
      {/* Editorial Number & Category Tag */}
      <div className={`flex items-center gap-3 ${isLeft ? 'justify-start' : 'justify-center'}`}>
        <span className="text-3xl sm:text-4xl font-serif-editorial italic font-bold text-[#F20D2F] select-none">
          {number}
        </span>
        <span className="text-[#525252] font-mono-tech text-sm">—</span>
        <span className="px-3.5 py-1 rounded-full text-xs font-mono-tech font-bold uppercase tracking-widest bg-[#F20D2F]/20 text-[#F20D2F] border border-[#F20D2F]/40">
          {category}
        </span>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-[#FFFFFF] leading-tight">
        {title}
      </h2>

      {/* Optional Subtitle */}
      {subtitle && (
        <p className="text-sm sm:text-base text-[#525252] font-normal leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Divider */}
      <div className={`w-20 h-1 bg-gradient-to-r from-[#F20D2F] to-[#A8061F] rounded-full ${isLeft ? '' : 'mx-auto'}`} />
    </div>
  );
};
