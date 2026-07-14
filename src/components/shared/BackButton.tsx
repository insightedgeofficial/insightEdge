'use client';

import { ArrowLeft } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface BackButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

export function BackButton({ href, label = 'Back', className }: BackButtonProps) {
  const router = useRouter();

  if (href) {
    return (
      <Button variant="ghost" size="sm" asChild className={`group h-9 ${className || ''}`}>
        <Link href={href}>
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-sm">{label}</span>
        </Link>
      </Button>
    );
  }

  return (
    <Button 
      variant="ghost" 
      size="sm"
      onClick={() => router.back()}
      className={`group h-9 ${className || ''}`}
    >
      <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
      <span className="text-sm">{label}</span>
    </Button>
  );
}
