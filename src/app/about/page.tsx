import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Flag, Users, Target, Rocket } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '关于辰龙OS - 国产教学OS的探索与实践',
    description: '依托顶尖开源内核技术，聚焦教育场景痛点，致力于打造自主可控、易用高效的教学开发板操作系统。',
};

export default function AboutPage() {
    return (
        <div className="container py-16 md:py-24">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">关于辰龙OS——国产教学OS的探索与实践</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        依托顶尖开源内核技术，聚焦教育场景痛点，辰龙OS致力于打造自主可控、易用高效的教学开发板操作系统，为教育数字化与国产OS生态建设贡献力量。
                    </p>
                </div>

                {/* Project Background */}
                <div className="prose prose-lg dark:prose-invert max-w-none mb-20">
                    <h2 className="flex items-center text-2xl font-bold mb-6">
                        <Flag className="w-6 h-6 mr-3 text-primary" /> 项目背景
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 not-prose">
                        <div className="bg-muted/30 p-6 rounded-xl">
                            <h3 className="font-bold text-lg mb-2">技术溯源</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                基于清华大学ArceOS开源内核开发，融合Starry-OS先进组件化技术架构，具备高安全、低延迟、多架构适配的核心技术优势。
                            </p>
                        </div>
                        <div className="bg-muted/30 p-6 rounded-xl">
                            <h3 className="font-bold text-lg mb-2">项目初衷</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                解决教育领域AI/机器人教学依赖国外工具、技术壁垒高、硬件适配难痛点，以“开源+教育”为核心，提供自主可控解决方案。
                            </p>
                        </div>
                        <div className="bg-muted/30 p-6 rounded-xl">
                            <h3 className="font-bold text-lg mb-2">核心定位</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                国内首款专注教育场景的国产开源嵌入式操作系统，以教学开发板为载体，链接技术、教育与商业生态。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Development History */}
                <div className="mb-20">
                    <h2 className="flex items-center text-2xl font-bold mb-8">
                        <Calendar className="w-6 h-6 mr-3 text-primary" /> 发展历程
                    </h2>
                    <div className="relative border-l-2 border-primary/20 ml-3 space-y-12 pl-8 py-2">
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary" />
                            <h3 className="text-lg font-bold">2024年 Q2</h3>
                            <p className="text-muted-foreground mt-1">项目启动，完成ArceOS内核教育场景适配，成功对接RK3588开发板NPU算力。</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary" />
                            <h3 className="text-lg font-bold">2024年 Q4</h3>
                            <p className="text-muted-foreground mt-1">推出高校版、职教版、中小学版三款教学套件，落地首批3所高校、2所职教试点。</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary/30" />
                            <h3 className="text-lg font-bold">2025年 Q2 (计划)</h3>
                            <p className="text-muted-foreground mt-1">建立硬件合作联盟，签约瑞芯微、友善之臂等3家厂商，服务教育机构超15家，GitHub社区Star数突破1000。</p>
                        </div>
                    </div>
                </div>

                {/* Team Info */}
                <div className="mb-20">
                    <h2 className="flex items-center text-2xl font-bold mb-8">
                        <Users className="w-6 h-6 mr-3 text-primary" /> 团队介绍
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="border rounded-2xl p-6">
                            <h3 className="font-bold text-lg mb-2">核心研发团队</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                团队核心成员均来自清华大学OS实验室、国内头部嵌入式开发企业、教育信息化领域，平均拥有8年以上OS研发与教育行业经验，具备深厚的技术积淀与丰富的教育场景落地能力。
                            </p>
                        </div>
                        <div className="border rounded-2xl p-6">
                            <h3 className="font-bold text-lg mb-2">专家顾问团</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                组建由高校OS学科带头人、AI教育专家、机器人行业资深工程师构成的顾问团，为项目技术迭代与教育场景适配提供专业指导。
                            </p>
                        </div>
                    </div>
                </div>

                {/* Future Strategy */}
                <div>
                    <h2 className="flex items-center text-2xl font-bold mb-8">
                        <Rocket className="w-6 h-6 mr-3 text-primary" /> 发展规划
                    </h2>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-24 flex-shrink-0 font-bold text-primary">短期目标<br /><span className="text-xs text-muted-foreground font-normal">(1年内)</span></div>
                            <p className="text-muted-foreground text-sm flex-1">
                                覆盖全国50+高校与职教院校，拓展10+硬件合作厂商，辰龙OS教学套件累计销量突破2000套，开发者社区规模达5000人。
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-24 flex-shrink-0 font-bold text-primary">中期目标<br /><span className="text-xs text-muted-foreground font-normal">(2年内)</span></div>
                            <p className="text-muted-foreground text-sm flex-1">
                                成为教育领域国产开源OS头部品牌，实现项目盈利平衡，建立完善的教育生态联盟，推出企业级OS定制服务。
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-24 flex-shrink-0 font-bold text-primary">长期目标<br /><span className="text-xs text-muted-foreground font-normal">(3年内)</span></div>
                            <p className="text-muted-foreground text-sm flex-1">
                                从教育场景拓展至工业机器人、民用物联网领域，构建“教育引流-行业落地”的OS生态闭环，实现国产OS多场景规模化应用。
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
