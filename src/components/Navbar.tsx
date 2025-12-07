"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants";
import { Menu, Github, ExternalLink } from "lucide-react";

export function Navbar() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src="./icon.png" alt="辰龙OS Logo" width={36} height={36} className="h-8 md:h-9 w-auto object-contain" />
                        <span className="text-xl font-bold text-primary">辰龙OS</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-primary ${pathname === link.href
                                        ? "text-foreground"
                                        : "text-muted-foreground"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" asChild className="hidden md:inline-flex">
                        <Link
                            href="https://github.com/chenlongos"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                    </Button>

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="pr-0">
                            <div className="h-full bg-white dark:bg-slate-800">
                                <div className="mx-auto max-w-md w-full h-full p-6 flex flex-col">
                                    <div className="mb-8">
                                        <Link href="/" className="flex items-center space-x-2">
                                            <Image src="./icon.png" alt="辰龙OS Logo" width={36} height={36} className="h-9 w-auto object-contain" />
                                            <span className="text-xl font-bold text-primary">辰龙OS</span>
                                        </Link>
                                    </div>
                                    <nav className="flex-1 space-y-1">
                                        {NAV_LINKS.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className={`flex items-center py-3 px-4 rounded-lg text-base font-medium transition-all duration-200 ${pathname === link.href
                                                        ? "bg-blue-100 dark:bg-blue-900/30 text-primary font-semibold"
                                                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50"
                                                    }`}
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                        <Link
                                            href="https://github.com/chenlongos"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center py-3 px-4 rounded-lg text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-all duration-200"
                                        >
                                            <Github className="mr-3 h-5 w-5" />
                                            GitHub
                                            <ExternalLink className="ml-auto h-4 w-4 opacity-70" />
                                        </Link>
                                    </nav>
                                    <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                                        <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
                                            © {new Date().getFullYear()} 辰龙OS
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
