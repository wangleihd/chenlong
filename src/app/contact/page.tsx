import { ContactForm } from "@/components/Form";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { Mail, MapPin, Phone, MessageSquare, Clock } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '联系我们 - 快速对接，开启合作',
    description: '无论您有商务采购、技术咨询、合作洽谈还是定制化需求，均可通过以下方式与我们取得联系。',
};

export default function ContactPage() {
    return (
        <div className="container py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-16">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-6">联系我们——快速对接，开启合作</h1>
                    <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                        无论您有商务采购、技术咨询、合作洽谈还是定制化需求，均可通过以下方式与我们取得联系，辰龙OS团队将为您提供高效专业的服务。
                    </p>

                    <div className="space-y-8 mb-16">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <Phone className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">官方热线</h3>
                                <p className="text-muted-foreground">400-123-4567</p>
                                <p className="text-sm text-muted-foreground mt-1">工作日 9:00-18:00，节假日可留言</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <Mail className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">商务邮箱</h3>
                                <p className="text-muted-foreground">contact@chenlongos.com</p>
                                <p className="text-sm text-muted-foreground mt-1">邮件主题建议标注“合作咨询/产品采购/技术支持+单位名称”</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">办公地址</h3>
                                <p className="text-muted-foreground">北京市海淀区中关村软件园12号楼B座5层</p>
                                <p className="text-sm text-muted-foreground mt-1">可导航“辰龙OS技术中心”，支持上门洽谈</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                <MessageSquare className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">企业微信</h3>
                                <p className="text-muted-foreground">扫码添加商务专员，即时对接需求</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <Clock className="w-6 h-6 mr-2 text-primary" /> 线下对接
                        </h2>
                        <div className="bg-muted/30 border rounded-xl p-6">
                            <p className="text-muted-foreground leading-relaxed">
                                支持高校、机构、厂商上门洽谈合作，可提前1个工作日预约技术团队，现场演示辰龙OS教学套件功能、讲解合作方案。
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-6">常见问题 (FAQ)</h2>
                        <FAQAccordion />
                    </div>
                </div>

                <div className="bg-card border rounded-3xl p-6 md:p-8 shadow-sm h-fit sticky top-24">
                    <h2 className="text-2xl font-bold mb-2">在线咨询</h2>
                    <p className="text-sm text-muted-foreground mb-6">我们承诺对您的信息严格保密，商务团队将在1个工作日内与您响应对接。</p>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}
