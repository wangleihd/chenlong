import { Button } from "@/components/Button";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Cpu, BookOpen, Users, ArrowUpRight } from "lucide-react";
import { PRODUCTS, SOLUTIONS } from "@/lib/constants";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '辰龙OS - 国产开源教学开发板操作系统',
  description: '基于清华大学ArceOS内核打造，为高校、职教及中小学，提供“硬件+OS+课程+服务”一体化教学解决方案。',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-16 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950 overflow-hidden">
        <div className="container mx-auto text-center z-10 relative">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6 animate-fade-in-up">
            国产开源教学OS，赋能AI机器人教育
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:to-blue-400">
            辰龙OS <br className="hidden md:block" />
            <span className="text-foreground text-3xl md:text-5xl lg:text-6xl mt-2 block">国产开源教学开发板操作系统</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            基于清华大学ArceOS内核打造，深度适配RK3588等国产开发板NPU能力，为高校AI/机器人专业、职教智能制造实训、中小学STEAM教育，提供“硬件+OS+课程+服务”一体化教学解决方案，契合国家教育数字化与人工智能教育基地建设政策要求。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className={buttonVariants({ size: "lg", className: "text-base h-12 px-8" })}
            >
              查看产品套件 <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className={buttonVariants({ size: "lg", variant: "outline", className: "text-base h-12 px-8" })}
            >
              咨询合作方案
            </Link>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      </section>

      {/* Core Advantages */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">四大核心优势，打造教学OS新标杆</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AdvantageCard
              icon={<ShieldCheck className="h-10 w-10 text-primary" />}
              title="国产自主可控"
              description="依托ArceOS开源内核，完美适配RK3588、飞腾派等国产开发板，满足教育领域自主化教学工具采购需求。"
            />
            <AdvantageCard
              icon={<Cpu className="h-10 w-10 text-primary" />}
              title="AI/机器人原生支持"
              description="深度集成ROS2、OpenCV、TFLite，完成RK3588 NPU算力适配，覆盖AI模型部署、机器人运动控制全教学场景。"
            />
            <AdvantageCard
              icon={<BookOpen className="h-10 w-10 text-primary" />}
              title="教学资源丰富"
              description="配套“入门-进阶-综合”三级实验案例，精准匹配高校及职教课程大纲，附赠标准化课件与实验报告模板。"
            />
            <AdvantageCard
              icon={<Users className="h-10 w-10 text-primary" />}
              title="灵活合作模式"
              description="支持硬件预装分成、校企课程共建、定制化项目开发，低门槛对接高校、厂商、培训机构等多类型合作伙伴。"
            />
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">全教育阶段覆盖，三款标准化教学套件</h2>
            <p className="text-muted-foreground">针对不同教育阶段定制优化，满足差异化教学需求</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <div key={product.id} className="flex flex-col p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit mb-4">
                  {product.badge}
                </div>
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-6 flex-1">{product.description}</p>
                <div className="text-2xl font-bold text-primary mb-6">{product.price}</div>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/products">
                    查看详情 <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/products" className="inline-flex items-center text-primary hover:underline font-medium text-lg">
              进入产品中心，解锁完整配置与采购方案 <ArrowUpRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">多元化商业化方案，实现生态共赢</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {SOLUTIONS.map((solution) => (
              <div key={solution.id} className="flex gap-4 p-6 rounded-xl border bg-background hover:border-primary/50 transition-colors">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center space-y-2">
            <p className="font-medium">典型案例</p>
            <p className="text-muted-foreground">某理工大学：100套高校版套件落地《智能机器人》课程，学生课程实践完成率提升92%</p>
            <p className="text-muted-foreground">某硬件厂商：RK3588预装辰龙OS，月销量同比增长30%</p>
          </div>
        </div>
      </section>

      {/* Cooperation CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">携手辰龙OS，共建教育新生态</h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            无论您是高校、职业院校、教育培训机构，还是开发板硬件厂商，辰龙OS均可提供定制化合作方案，以开源技术撬动教育与商业价值双赢。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cooperation" className={buttonVariants({ size: "lg", className: "h-12 px-8" })}>
              了解合作模式
            </Link>
            <Link href="/contact" className={buttonVariants({ size: "lg", variant: "outline", className: "h-12 px-8" })}>
              提交定制需求
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function AdvantageCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
