// interface SectionHeadingProps {
//   title: string;
//   subtitle?: string;
//   centered?: boolean;
//   light?: boolean;
// }

// const SectionHeading = ({ title, subtitle, centered = false, light = false }: SectionHeadingProps) => {
//   return (
//     <div className={`mb-10 md:mb-12 ${centered ? 'text-center' : ''}`}>
//       <h2 className={`heading-section ${light ? 'text-primary-foreground' : 'text-foreground'}`}>
//         {title}
//       </h2>
//       {subtitle && (
//         <p className={`mt-4 text-base md:text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
//           {subtitle}
//         </p>
//       )}
//       <div className={`mt-4 h-1 w-16 bg-accent ${centered ? 'mx-auto' : ''}`} />
//     </div>
//   );
// };

// export default SectionHeading;
import React from 'react';

interface SectionHeadingProps {
  title: React.ReactNode; // Updated from string to React.ReactNode
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ title, subtitle, centered = false, light = false }: SectionHeadingProps) => {
  return (
    <div className={`mb-10 md:mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`heading-section ${light ? 'text-primary-foreground' : 'text-foreground'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 bg-accent ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeading;