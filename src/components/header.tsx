import { cn } from '@/lib/utils'
import Link from 'next/link'
import React, { HTMLAttributes } from 'react'
import { buttonVariants } from './button'
import { ThemeToggle } from './theme-toggle'

const navLinks: NavLink[] = [
  {
    url: '#about',
    title: 'About',
    isButton: false,
  },
  {
    url: '#',
    title: 'Projects',
    isButton: false,
  },
  {
    url: '#',
    title: 'Resume',
    isButton: true,
  },
]

type NavLink = {
  url: string
  title: string
  isButton: boolean
}

interface NavLinksProps extends HTMLAttributes<HTMLDivElement> {
  navLinks: NavLink[]
}

const NavLinks: React.FC<NavLinksProps> = ({ className, navLinks }) => {
  return (
    <div className={cn(className, ' space-x-4')}>
      {navLinks.map((navLink) => {
        return (
          <Link
            key={navLink.title}
            className={cn(
              navLink.isButton
                ? buttonVariants()
                : buttonVariants({
                    variant: 'link',
                    className: 'text-foreground',
                  })
            )}
            href={navLink?.url}
          >
            {navLink?.title}
          </Link>
        )
      })}
    </div>
  )
}

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn(className, 'flex justify-end py-8 px-4 container')}>
      <NavLinks navLinks={navLinks} />
      <div className="ml-auto flex gap-2">
        <Link
          className={cn(
            buttonVariants({ variant: 'link', className: 'block' })
          )}
          href="mailto:carroll.landry@gmail.com"
        >
          carroll.landry@gmail.com
        </Link>
        <ThemeToggle />
      </div>
    </header>
  )
}
