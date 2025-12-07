import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Check, Cpu, ShoppingCart, Settings, BookOpen, Monitor, Briefcase } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '产品中心 - 全教育阶段教学套件',
    description: '针对高校专业教学、职教技能实训、中小学兴趣启蒙三大场景，定制标准化“硬件+OS+资源”教学套件。',
};

const DETAILED_PRODUCTS = [
    {
    id: 'beginner',
    name: '辰龙OS 初级入门版套件',
    tag: '初级入门',
    price: '¥299/套',
    priceNote: '入门级高性价比，无技术支持服务，适合个人爱好者入门学习',
    hardware: 'RV1126B开发板 + 单轮驱动小车底盘 + 入门级高清摄像头',
    software: '预装辰龙OS入门版，集成轻量ROS2基础组件、OpenCV基础版本、简易NPU推理工具，适配入门级AI视觉与小车运动控制场景',
    resources: '50+入门级教学视频、10+基础实验案例（含小车循迹、摄像头图像采集完整项目）、《RV1126B开发板快速上手》手册、基础代码模板',
    scenarios: '个人AI与机器人技术入门学习、中小学科技兴趣社团实践、零基础爱好者的嵌入式开发启蒙',
    },
    {
        id: 'university',
        name: '辰龙OS 高校版套件',
        tag: 'AI/机器人专业适配',
        price: '¥3980/套',
        priceNote: '含1年基础技术支持，支持批量采购折扣',
        hardware: 'RK3588开发板（8G内存+64G存储）+ 高清摄像头 + 多轴电机驱动模块 + 机器人底盘套件',
        software: '预装辰龙OS教学版，原生集成ROS2 Humble、OpenCV 4.8、TensorFlow Lite 2.15，完成NPU算力调度优化，支持多终端设备通信与边缘AI推理',
        resources: '10用户课程授权、30+专业实验案例（含AI视觉捡球机器人完整项目）、《智能机器人开发》课件模板、实验报告标准范式',
        scenarios: '高校《操作系统原理》《智能机器人开发》《AI模型边缘部署》等专业课程；高校AI/机器人创新实验室',
    },
    {
        id: 'vocational',
        name: '辰龙OS 职教版套件',
        tag: '智能制造实训专属',
        price: '¥2980/套',
        priceNote: '含5用户实训授权，配套1+X考核适配服务',
        hardware: '飞腾派ARM开发板（4G内存+32G存储）+ 工业PLC通信模块 + 小型机械臂套件',
        software: '辰龙OS轻量化实训版，强化边缘计算与工业设备通信能力，兼容主流工业控制协议，支持实训项目快速部署与调试',
        resources: '5用户实训授权、20+智能制造实训项目（如PLC与开发板通信、工业机器人轨迹规划）、1+X证书考核适配指南、实训基地建设方案',
        scenarios: '中职/高职《嵌入式系统实训》《智能制造基础》《工业机器人运维》等实训课程；职业院校智能制造实训基地',
    },
    {
        id: 'k12',
        name: '辰龙OS 中小学版套件',
        tag: 'STEAM/AI启蒙优选',
        price: '¥1280/套',
        priceNote: '含1用户启蒙授权，附赠教师培训课程',
        hardware: '树莓派4B（2G内存+16G存储）+ 简易机器人套件（含捡球机械爪）+ 颜色识别传感器',
        software: '辰龙OS少儿版，搭载图形化编程界面，支持Scratch与Python双模式开发，简化代码编写与设备控制流程',
        resources: '1用户启蒙授权、10+趣味实验（如颜色识别捡球、智能避障、语音控制机器人）、中小学AI启蒙课程手册、教师快速上手指南',
        scenarios: '中小学STEAM课程、人工智能教育基地课后活动、校外AI启蒙培训机构',
    },
];

export default function ProductsPage() {
    return (
        <div className="container py-16 md:py-24">
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">产品中心——全教育阶段教学套件</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    针对高校专业教学、职教技能实训、中小学兴趣启蒙三大场景，定制标准化“硬件+OS+资源”教学套件，兼顾教学专业性与实操便捷性，降低教育机构工具采购与课程落地门槛。
                </p>
            </div>
            
            {/* 视频展示区 */}
            <div className="mb-20">
                <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg">
                    <div className="mx-auto max-w-4xl w-full p-4">
                        <video 
                            src="./demo.mp4" 
                            controls 
                            className="w-full rounded-xl" 
                            autoPlay 
                            muted 
                            loop
                            playsInline
                        >
                            您的浏览器不支持视频播放
                        </video>
                        <p className="text-center text-sm text-muted-foreground mt-4">
                            辰龙OS教学套件演示视频
                        </p>
                    </div>
                </div>
            </div>
            
            {/* 产品图片展示 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                        src="./robot-tennis.jpg" 
                        alt="辰龙OS智能机器人捡球演示"
                        className="w-full h-auto object-cover p-4"
                    />
                    <p className="text-center text-sm text-muted-foreground p-4">
                        智能机器人捡球演示
                    </p>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                        src="./robot-arm.jpg" 
                        alt="辰龙OS机械臂机器人" 
                        className="w-full h-auto object-cover p-4"
                    />
                    <p className="text-center text-sm text-muted-foreground p-4">
                        辰龙OS机械臂机器人
                    </p>
                </div>
            </div>

            <div className="grid gap-12 lg:gap-16">
                {DETAILED_PRODUCTS.map((product) => (
                    <Card key={product.id} className="overflow-hidden border-2 hover:border-primary/50 transition-colors relative">
                        {/* 推荐标识 */}
                        {product.id === 'beginner' && (
                            <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-3 py-1 transform -translate-y-1 -translate-x-1 rotate-[-10deg] shadow-lg">
                                推荐
                            </div>
                        )}
                        <div className="grid lg:grid-cols-5 gap-0">
                            <div className="lg:col-span-2 bg-muted/30 p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r">
                                <div>
                                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                                        {product.tag}
                                    </div>
                                    <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
                                    <div className="text-2xl font-bold text-primary mt-4">{product.price}</div>
                                    <p className="text-sm text-muted-foreground mt-1">{product.priceNote}</p>
                                </div>
                                <div className="mt-8">
                                    <Button className="w-full" size="lg" asChild>
                                        <Link href="/contact">
                                            <ShoppingCart className="w-4 h-4 mr-2" /> 咨询采购
                                        </Link>
                                    </Button>
                                    <Button variant="outline" className="w-full mt-3" asChild>
                                        <Link href="/contact">下载产品手册</Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="lg:col-span-3 p-8 space-y-6">
                                <div>
                                    <h3 className="flex items-center text-lg font-semibold mb-2">
                                        <Cpu className="w-5 h-5 text-primary mr-2" /> 核心适配硬件
                                    </h3>
                                    <p className="text-muted-foreground">{product.hardware}</p>
                                </div>
                                <div>
                                    <h3 className="flex items-center text-lg font-semibold mb-2">
                                        <Monitor className="w-5 h-5 text-primary mr-2" /> 软件能力
                                    </h3>
                                    <p className="text-muted-foreground">{product.software}</p>
                                </div>
                                <div>
                                    <h3 className="flex items-center text-lg font-semibold mb-2">
                                        <BookOpen className="w-5 h-5 text-primary mr-2" /> 资源配套
                                    </h3>
                                    <p className="text-muted-foreground">{product.resources}</p>
                                </div>
                                <div>
                                    <h3 className="flex items-center text-lg font-semibold mb-2">
                                        <Briefcase className="w-5 h-5 text-primary mr-2" /> 适配场景
                                    </h3>
                                    <p className="text-muted-foreground">{product.scenarios}</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="mt-24">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">专属定制，满足个性化教学需求</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 rounded-2xl border bg-card">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                            <Cpu className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">特殊硬件适配</h3>
                        <p className="text-muted-foreground">按需对接RISC-V等小众架构开发板，完成辰龙OS适配部署。</p>
                    </div>
                    <div className="p-6 rounded-2xl border bg-card">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                            <Settings className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">实验案例定制</h3>
                        <p className="text-muted-foreground">结合院校特色课程，定制专属教学实验与项目。</p>
                    </div>
                    <div className="p-6 rounded-2xl border bg-card">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                            <BookOpen className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">课程内容共建</h3>
                        <p className="text-muted-foreground">联合编写教材、开发特色课程，共建教学品牌。</p>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <Button size="lg" asChild>
                        <Link href="/contact">提交定制需求，获取专属方案报价</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
