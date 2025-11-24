'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/data';
import { Logo } from '../Logo';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === link.href ? 'text-foreground' : 'text-foreground/60'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact">Book a Workshop</Link>
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="md:hidden">
                    <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full max-w-xs bg-background">
                    <div className="flex h-full flex-col">
                        <div className="flex items-center justify-between border-b pb-4">
                            <Link href="/" onClick={() => setIsOpen(false)}>
                                <Logo />
                            </Link>
                            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                                <X className="h-6 w-6" />
                                <span className="sr-only">Close Menu</span>
                            </Button>
                        </div>
                        <nav className="mt-6 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        'text-lg font-medium transition-colors hover:text-foreground/80',
                                        pathname === link.href ? 'text-foreground' : 'text-foreground/60'
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                        <Button asChild className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                            <Link href="/contact" onClick={() => setIsOpen(false)}>Book a Workshop</Link>
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
