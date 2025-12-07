import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, BookOpen, Handshake, Users, TrendingUp, Cpu, GraduationCap, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '解决方案 - 以教育为锚点，构建商业闭环',
    description: '依托“教育套件+技术服务+硬件分成+生态增值”四大盈利模式，辰龙OS实现“教育场景引流、专业服务变现、生态协同增值”的可持续商业化。',
};

const DETAILED_SOLUTIONS = [
    {
        id: 'education',
        title: '教育套件销售',
        ratio: '核心收入 40%',
        icon: <BookOpen className="h-6 w-6 text-primary" />,
        description: '面向高校、职教、中小学等教育机构，提供标准化“硬件+OS+课程资源+基础服务”教学套件，按套收费，支持批量采购阶梯折扣，是项目核心收入来源。',
        clients: '高校教务处、职业院校实训中心、中小学AI教育基地、校外素质教育机构',
        caseStudy: '某省理工大学采购100套高校版套件，用于2025学年《智能机器人开发》课程教学，配套辰龙OS专属实验案例，学生课程实践完成率从65%提升至92%，课程满意度达95%。',
    },
    {
        id: 'tech-service',
        title: '技术服务',
        ratio: '稳定收入 30%',
        icon: <Users className="h-6 w-6 text-primary" />,
        description: '包含定制培训（3000元/人·2天）、项目迁移（5万-20万/项目）、LTS长期支持（1万-5万/年），全方位满足院校与个性化技术需求。',
        clients: '职业院校教师团队、科研实验室、存量项目迁移需求方',
        caseStudy: '某职业技术学院定制“智能制造实训讲师培训”，50名专业教师参与2天线下+1周线上辅导，掌握辰龙OS工业实训项目部署能力，成功落地校内智能制造实训基地。',
    },
    {
        id: 'hardware',
        title: '硬件合作分成',
        ratio: '流量入口 20%',
        icon: <Cpu className="h-6 w-6 text-primary" />,
        description: '与开发板厂商预装合作（5%-10%分成）及电商渠道分销（15%-20%佣金），为硬件厂商赋能教育软件能力，借助厂商渠道扩大覆盖。',
        clients: '瑞芯微、友善之臂、飞腾派等开发板厂商；京东/淘宝电子元器件分销商',
        caseStudy: '与友善之臂达成RK3588开发板预装合作，合作首月销量突破500块，辰龙OS获得分成收益超8万元，同时实现品牌曝光超10万次。',
    },
    {
        id: 'ecosystem',
        title: '生态增值服务',
        ratio: '未来收入 10%',
        icon: <TrendingUp className="h-6 w-6 text-primary" />,
        description: '开发者会员（99元/年）、企业级OS定制（10万-50万/项目）、政府项目申报支持，拓展长期盈利空间。',
        clients: '个人开发者、工业物联网企业、地方教育局信息化项目',
        caseStudy: '2025年申报“教育部人工智能教育基地配套项目”，成功承接2个地级市基地建设，获得政府补贴30万元，同步落地辰龙OS教学套件150套。',
    },
];

export default function SolutionsPage() {
    return (
        <div className="container py-16 md:py-24">
            {/* Header */}
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">解决方案——以教育为锚点，构建商业闭环</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    依托“教育套件+技术服务+硬件分成+生态增值”四大盈利模式，辰龙OS实现“教育场景引流、专业服务变现、生态协同增值”的可持续商业化，为合作伙伴创造多元收益空间。
                </p>
            </div>

            {/* Solution Details */}
            <div className="grid gap-8 mb-24">
                {DETAILED_SOLUTIONS.map((solution) => (
                    <Card key={solution.id} className="overflow-hidden">
                        <div className="grid md:grid-cols-12 gap-0">
                            <div className="md:col-span-4 bg-muted/30 p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 flex-shrink-0">
                                        {solution.icon}
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold">{solution.title}</h2>
                                        <div className="text-sm font-medium text-primary mt-1 bg-primary/5 px-2 py-0.5 rounded w-fit">
                                            {solution.ratio}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    {solution.description}
                                </p>
                            </div>
                            <div className="md:col-span-8 p-8 flex flex-col justify-center">
                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="font-semibold mb-2 text-foreground flex items-center">
                                            <Users className="w-4 h-4 mr-2 text-primary" /> 适配客户
                                        </h4>
                                        <p className="text-muted-foreground text-sm">
                                            {solution.clients}
                                        </p>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border">
                                        <h4 className="font-semibold mb-2 text-foreground text-sm flex items-center">
                                            <TrendingUp className="w-4 h-4 mr-2 text-green-600" /> 落地案例
                                        </h4>
                                        <p className="text-muted-foreground text-sm italic">
                                            "{solution.caseStudy}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Success Cases Module */}
            <div className="bg-primary/5 rounded-3xl p-8 md:p-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">已服务10+高校/5+职教/3+硬件厂商，落地20+标杆项目</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-background p-6 rounded-2xl border shadow-sm">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                            <GraduationCap className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">高校案例：XX理工大学</h3>
                        <p className="text-muted-foreground text-sm">
                            辰龙OS高校版套件助力机器人专业课程改革，实现“理论+实践”一体化教学，学生科创竞赛获奖率提升40%。
                        </p>
                    </div>
                    <div className="bg-background p-6 rounded-2xl border shadow-sm">
                        <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4 text-green-600 dark:text-green-400">
                            <Building2 className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">职教案例：XX职业技术学院</h3>
                        <p className="text-muted-foreground text-sm">
                            共建智能制造实训基地，职教版套件适配1+X证书考核，年培训技能人才超200人。
                        </p>
                    </div>
                    <div className="bg-background p-6 rounded-2xl border shadow-sm">
                        <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mb-4 text-orange-600 dark:text-orange-400">
                            <Handshake className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">厂商案例：XX硬件厂商</h3>
                        <p className="text-muted-foreground text-sm">
                            预装辰龙OS后，开发板教育渠道销量占比从15%提升至45%，产品溢价空间增加20%。
                        </p>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <Button size="lg" asChild>
                        <Link href="/contact">咨询合作方案</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
