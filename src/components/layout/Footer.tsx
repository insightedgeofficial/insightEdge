'use client';

import Link from 'next/link';
import { Logo } from '../Logo';
import { footerLinks, socialLinks } from '@/lib/data';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useEffect, useState } from 'react';

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-still-ground text-morning-quiet">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-5 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="mb-8 inline-block">
              <Logo variant="horizontal" light className="justify-start scale-145 md:scale-165 origin-left" />
            </Link>
            <p className="max-w-md text-base md:text-lg font-medium text-morning-quiet/90">
              Experience Designers
            </p>
            <form className="mt-4 flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email" className="bg-background"/>
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
            </form>
          </div>
          
          <div>
            <h3 className="font-headline text-xl md:text-2xl font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base md:text-lg text-morning-quiet/80 transition-colors hover:text-morning-quiet font-normal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-xl md:text-2xl font-bold">Contact</h3>
            <div className="mt-4 space-y-2.5 text-base md:text-lg text-morning-quiet/80 font-normal break-words">
              <p className="break-all">insightedge.contact@gmail.com</p>
              <p>+91 9840421104</p>
            </div>
          </div>

          <div>
            <h3 className="font-headline text-xl md:text-2xl font-bold">Follow Us</h3>
            <div className="mt-4 flex space-x-5">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-morning-quiet/80 transition-colors hover:text-morning-quiet hover:scale-110 transform duration-200">
                  <social.icon className="h-8 w-8 md:h-9 md:w-9" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col items-center justify-between py-6 text-sm md:flex-row">
          <p className="text-morning-quiet/80">
            © {year} InsightEdge | Experience Designers
          </p>
        </div>
      </div>
    </footer>
  );
}
