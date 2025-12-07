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
                        <SheetContent side="right">
                            <div className="grid gap-6 py-6">
                                <Link href="/" className="flex items-center space-x-2">
                                    <Image src="./icon.png" alt="辰龙OS Logo" width={32} height={32} className="h-8 w-auto object-contain" />
                                    <span className="font-bold text-primary">辰龙OS</span>
                                </Link>
                                <div className="grid gap-4">
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
                                    <Link
                                        href="https://github.com/chenlongos"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                                    >
                                        GitHub <ExternalLink className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
