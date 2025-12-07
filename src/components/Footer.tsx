"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { Github, Mail, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t bg-muted/40">
            <div className="container py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-primary">辰龙OS</h4>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            国产开源教学开发板操作系统，致力于构建高校与职业教育的嵌入式实训新生态。
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">快速导航</h4>
                        <ul className="space-y-2 text-sm">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">资源与支持</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    文档中心
                                </Link>
                            </li>
                            <li>
                                <Link href="https://github.com/chenlongos" className="text-muted-foreground hover:text-primary transition-colors">
                                    GitHub 仓库
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                                    技术支持
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">联系我们</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <span>contact@chenlongos.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                <span>010-12345678</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} 辰龙OS. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-primary">隐私政策</Link>
                        <Link href="/terms" className="hover:text-primary">服务条款</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
