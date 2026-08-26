'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { List, X } from '@phosphor-icons/react/dist/ssr';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/data';
import { Logo } from '../Logo';

import { motion } from 'framer-motion';
import { hoverPop } from '@/lib/hover-animation';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header at the top of the page
      if (currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Hide header when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300 ease-in-out",
        isVisible ? 'translate-y-0' : '-translate-y-full'
      )}
    >
      <div className="container flex h-14 md:h-16 lg:h-17 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center space-x-3 lg:space-x-6 xl:space-x-8 text-sm md:text-base font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'relative transition-all duration-300 ease-out py-1',
                pathname === link.href 
                  ? 'text-foreground font-bold' 
                  : 'text-foreground/70 hover:text-foreground'
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full" />
              )}
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary/0 hover:bg-primary/30 rounded-full transition-colors duration-300" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
            <motion.div
              whileHover={hoverPop.whileHover}
              transition={hoverPop.transition}
              className="hidden md:flex"
            >
              <Button asChild className="h-10 md:h-11 px-5 text-sm md:text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow-md rounded-lg">
                  <Link href="/contact">Book a Workshop</Link>
              </Button>
            </motion.div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="md:hidden">
                    <Button variant="ghost" size="icon">
                    <List className="h-6 w-6" />
                    <span className="sr-only">Toggle List</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full max-w-xs bg-background">
                    <SheetHeader className="sr-only">
                        <SheetTitle>Navigation Menu</SheetTitle>
                    </SheetHeader>
                    <div className="flex h-full flex-col">
                        <div className="flex items-center justify-between border-b pb-4">
                            <Link href="/" onClick={() => setIsOpen(false)}>
                                <Logo />
                            </Link>
                            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                                <X className="h-6 w-6" />
                                <span className="sr-only">Close List</span>
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
