import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQS = [
    {
        question: "辰龙OS的开源授权范围是什么？商业使用需要付费吗？",
        answer: "辰龙OS基于Apache 2.0协议开源，个人与院校非商业教学使用可免费获取；企业商业场景使用需保留官方版权声明，批量商用可联系我们获取授权，具体费用可洽谈。",
    },
    {
        question: "教学套件的售后服务包含哪些内容？",
        answer: "采购套件可享1年免费技术咨询（7*12小时在线）、季度OS版本更新、实验案例迭代；超出免费期可购买LTS长期支持服务，享受更全面的运维保障。",
    },
    {
        question: "硬件预装的分成比例是多少？结算周期多久？",
        answer: "预装分成比例为5%-10%，具体根据厂商销量与合作深度浮动；结算周期为月度结算，每月5日前完成上月数据核对与收益打款。",
    },
    {
        question: "校企课程共建的周期是多久？需要院校投入哪些资源？",
        answer: "常规课程共建周期为1-3个月，复杂精品课程为3-6个月；院校需提供课程大纲、师资对接、教学场景测试等基础资源，辰龙OS负责课程开发与技术支持。",
    },
    {
        question: "辰龙OS对RK3588 NPU的适配支持哪些AI模型？",
        answer: "已完成YOLOv5/v8、ResNet、MobileNet等主流CV模型的NPU适配，支持TensorFlow Lite、ONNX等主流模型格式，可满足高校AI教学与实训需求。",
    },
    {
        question: "院校能否基于辰龙OS进行二次开发？是否提供技术支持？",
        answer: "辰龙OS完全支持二次开发，我们将提供完整的开发文档、API接口说明，同时为合作院校提供专属技术对接群，保障二次开发顺利开展。",
    },
]

export function FAQAccordion() {
    return (
        <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
