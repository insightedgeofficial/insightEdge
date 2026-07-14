import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon';
  className?: string;
}

export function Logo({ variant = 'horizontal', className }: LogoProps) {
  let src = '';
  let width = 180;
  let height = 48;

  switch (variant) {
    case 'stacked':
      src = '/logos/VerticalLockup.svg';
      width = 180;
      height = 210;
      break;
    case 'icon':
      src = '/logos/Icon (1).svg';
      width = 48;
      height = 48;
      break;
    case 'horizontal':
    default:
      src = '/logos/HorizontalLockup.svg';
      width = 180;
      height = 48;
      break;
  }

  // Clearspace X is the diameter of the circle.
  // By adding p-4 we ensure other elements don't crowd the logo.
  return (
    <div className={cn("p-4 flex items-center justify-center", className)}>
      <Image 
        src={src} 
        alt="InsightEdge" 
        width={width} 
        height={height} 
        priority
        className="object-contain"
      />
    </div>
  );
}
