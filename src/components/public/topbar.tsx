'use client';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toogle';
import { buttonVariants } from '@/components/ui/button';
import { useState } from 'react';

import { useTranslations } from 'next-intl';

interface RouteProps {
  href: string;
  label: string;
}

export default function Topbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const t = useTranslations('Topbar');

  const routeList: RouteProps[] = [
    {
      href: '#features',
      label: t('Features'),
    },
    {
      href: '#testimonials',
      label: t('Testimonials'),
    },
    {
      href: '#pricing',
      label: t('Pricing'),
    },
    {
      href: '#faq',
      label: t('FAQ'),
    },
  ];

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <Image src="/globe.svg" alt="App Logo" width={40} height={40} />
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ThemeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={'left'}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    Shadcn/React
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <Link
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({
                        variant: 'ghost',
                      })}
                    >
                      {label}
                    </Link>
                  ))}
                  <Link
                    rel="noreferrer noopener"
                    href="login"
                    // target="_blank"
                    className={`w-[110px] border ${buttonVariants({
                      variant: 'secondary',
                    })}`}
                  >
                    {t('Login')}
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <Link
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: 'ghost',
                })}`}
              >
                {route.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <Link
              rel="noreferrer noopener"
              href="login"
              // target="_blank"
              className={`border ${buttonVariants({ variant: 'secondary' })}`}
            >
              {t('Login')}
            </Link>

            <ThemeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
