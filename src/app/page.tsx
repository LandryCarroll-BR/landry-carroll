import Image from 'next/image'
import landry_carroll from '../../public/images/landry-carroll-avatar@2x.webp'

import { Header } from '@/components/header'
import { Experience } from '@/components/experience'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/button'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Projects } from '@/components/projects'

export default function Home() {
  return (
    <main className="">
      <Header />

      <section className="h-[60vh] flex items-center justify-center py-16">
        <div className="container flex md:items-center items-start justify-center gap-8 md:flex-row flex-col">
          <div className="mix-blend-luminosity w-20 md:w-fit">
            <Image
              src={landry_carroll}
              width={185}
              height={185}
              alt="A head shot of Landry Carroll"
            />
          </div>
          <div className="max-w-sm">
            <h1 className="text-4xl mb-3">Landry Carroll</h1>
            <p className="text-foreground/60 mb-4">
              I&apos;m a designer-gone-developer with two years of experience
              crafting graphics, digital tools, and websites. Currently,
              I&apos;m creating robust, usercentric websites at Boldist.
            </p>
            <div className="flex gap-2">
              <Link
                href="#"
                className={cn(
                  buttonVariants({ size: 'lg', variant: 'secondary' })
                )}
              >
                <span className="mr-2">Github</span>
                <GitHubLogoIcon />
              </Link>
              <Link
                href="#projects"
                className={cn(
                  buttonVariants({ size: 'lg', variant: 'outline' })
                )}
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 relative">
        <div className="hidden md:block h-16 sticky w-full top-0 left-0 bg-gradient-to-b from-background to-background/0 z-10 "></div>
        <div className="container flex flex-col md:flex-row justify-center items-start gap-28 md:gap-16">
          <div className="md:sticky top-16 flex-1">
            <h2 className="text-2xl mb-2">About</h2>

            <div className="text-foreground/60 space-y-3">
              <p>
                Glad you stopped by! My name is Landry, and I&apos;m passionate
                about designing and creating websites and web applications.
              </p>
              <p>
                I started coding back in 2020 because I needed some custom CSS
                for a Squarespace site and something clicked (pun intended). The
                next thing I know, I&apos;m enrolled in web development courses,
                and since then, I&apos;ve never looked back. My first web
                developer job was in 2021 as an Intern with Entrepreneurs Across
                Borders, during which I helped build their landing page using
                Wild Apricot CMS.
              </p>
              <p>
                Today, I&apos;m focused on learning new technologies and
                improving my programming chops while continuing to work
                full-time as a graphic designer at Ecoscience Resource Group.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <Experience />
          </div>
        </div>
      </section>

      <section id="projects" className="h-screen py-16">
        <div className="container">
          <h2 className="text-2xl mb-8">Projects</h2>

          <Projects />
        </div>
      </section>

      <footer></footer>
    </main>
  )
}
