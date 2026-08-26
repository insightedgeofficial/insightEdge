'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon';
  className?: string;
  light?: boolean;
}

export function Logo({ variant = 'horizontal', className, light = false }: LogoProps) {
  let src = '';
  let width = 180;
  let height = 48;

  switch (variant) {
    case 'stacked':
      src = '/Logos/VerticalLockup.svg';
      width = 180;
      height = 210;
      break;
    case 'icon':
      src = '/Logos/Icon (1).svg';
      width = 48;
      height = 48;
      break;
    case 'horizontal':
    default:
      src = '/Logos/HorizontalLockup.svg';
      width = 1198;
      height = 473;
      break;
  }

  return (
    <div className={cn("flex items-center justify-center p-0 overflow-visible", className)}>
      <Image
        src={src}
        alt="InsightEdge"
        width={width}
        height={height}
        priority
        unoptimized
        className={cn(
          "object-contain h-14 md:h-16 lg:h-18 w-auto max-w-none transform scale-125 md:scale-135 origin-left drop-shadow-sm",
          light && "brightness-0 invert"
        )}
      />
    </div>
  );
}
