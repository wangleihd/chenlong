import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, Download, Users2, Landmark, Factory, ArrowRight, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '合作模式 - 生态共建，互利共赢',
    description: '辰龙OS开放高校、硬件厂商、培训机构多类型合作端口，以开源技术为纽带，实现多方价值协同。',
};

const COOPERATION_MODELS = [
    {
        id: 'university',
        title: '高校/职教合作',
        icon: <Landmark className="w-8 h-8 text-primary" />,
        description: '结合院校专业特色，联合编写教材、共建实训基地与学术成果申报。',
        content: [
            { label: '课程联合开发', text: '联合编写教材、开发专属实验案例' },
            { label: '实训基地共建', text: '挂牌“辰龙OS教学示范基地”' },
            { label: '学术成果申报', text: '联合申报省级/国家级教育科研项目' },
        ],
        process: '需求对接 → 方案定制 → 免费试点 → 正式签约 → 落地服务',
        rights: '免费提供3-5套试用套件、专属师资培训、学术资源共享',
    },
    {
        id: 'hardware',
        title: '硬件厂商合作',
        icon: <Factory className="w-8 h-8 text-primary" />,
        description: '预装分成、联合定制、渠道共享，零成本为硬件赋能教育软件能力。',
        content: [
            { label: '预装分成', text: '按销量获取5%-10%收益分成' },
            { label: '联合定制', text: '打造“辰龙教育版”定制开发板' },
            { label: '渠道共享', text: '双向引流，扩大市场覆盖' },
        ],
        process: '商务洽谈 → 样机适配 → 预装测试 → 签署协议 → 上架销售',
        rights: '共享辰龙OS教育行业资源，提升品牌教育领域影响力',
    },
    {
        id: 'training',
        title: '教育培训机构合作',
        icon: <Users2 className="w-8 h-8 text-primary" />,
        description: '课程授权、联合招生、项目共建，打造差异化培训品牌。',
        content: [
            { label: '课程授权', text: '使用辰龙OS配套AI/机器人课程体系' },
            { label: '联合招生', text: '推出“辰龙OS机器人特训营”' },
            { label: '实训共建', text: '定制专属实训项目' },
        ],
        process: '资质审核 → 课程培训 → 授权挂牌 → 招生启动',
        rights: '适配青少年AI启蒙、职业技能提升、机器人竞赛集训',
    },
];

export default function CooperationPage() {
    return (
        <div className="container py-16 md:py-24">
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">合作模式——生态共建，互利共赢</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    辰龙OS开放多类型合作端口，针对高校、硬件厂商、教育培训机构的不同需求，定制专属合作方案，以开源技术为纽带，实现多方价值协同。
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3 mb-20">
                {COOPERATION_MODELS.map((model) => (
                    <Card key={model.id} className="flex flex-col h-full border-2 hover:border-primary/50 transition-colors">
                        <CardHeader>
                            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                {model.icon}
                            </div>
                            <CardTitle className="text-2xl mb-2">{model.title}</CardTitle>
                            <CardDescription className="text-base text-foreground/80 leading-relaxed">
                                {model.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 space-y-6">
                            <div className="space-y-3">
                                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">合作内容</h4>
                                <ul className="space-y-2">
                                    {model.content.map((item, i) => (
                                        <li key={i} className="text-sm flex items-start">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span><span className="font-medium">{item.label}：</span>{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                                <div>
                                    <span className="text-xs font-bold uppercase text-primary">合作流程</span>
                                    <p className="text-xs text-muted-foreground mt-1">{model.process}</p>
                                </div>
                                <div className="pt-2 border-t border-dashed border-muted-foreground/20">
                                    <span className="text-xs font-bold uppercase text-primary">权益/优势</span>
                                    <p className="text-xs text-muted-foreground mt-1">{model.rights}</p>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" asChild>
                                <Link href={`/contact?type=${model.id}#form`}>
                                    申请合作 <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 md:p-12 border">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-3xl font-bold">合作资质与资料下载</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            为您准备了详细的《合作手册》与《协议模板》，助您快速了解合作细节。
                        </p>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <div className="flex items-center text-sm font-medium text-muted-foreground bg-background px-3 py-1.5 rounded-full border">
                                <FileText className="w-4 h-4 mr-2" /> 辰龙OS合作手册
                            </div>
                            <div className="flex items-center text-sm font-medium text-muted-foreground bg-background px-3 py-1.5 rounded-full border">
                                <FileText className="w-4 h-4 mr-2" /> 硬件预装协议模板
                            </div>
                            <div className="flex items-center text-sm font-medium text-muted-foreground bg-background px-3 py-1.5 rounded-full border">
                                <FileText className="w-4 h-4 mr-2" /> 课程共建方案
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                        <Button variant="outline" size="lg" className="h-14 px-8 text-base">
                            <Download className="mr-2 h-5 w-5" /> 打包下载资料
                        </Button>
                    </div>
                </div>
            </div>

            <div className="mt-16 text-center">
                <p className="text-muted-foreground mb-4">填写信息，1个工作日内商务团队将与您对接</p>
                <Button size="lg" className="h-12 px-8" asChild>
                    <Link href="/contact">
                        立即咨询合作
                    </Link>
                </Button>
            </div>
        </div>
    );
}
