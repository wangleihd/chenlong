"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { Loader2, Send } from "lucide-react"

type FormData = {
    name: string
    email: string
    organization: string
    message: string
}

export function ContactForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true)
        // Simulate API call
        console.log("Submitting form:", data)
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        setIsSuccess(true)
        reset()
        setTimeout(() => setIsSuccess(false), 5000)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">姓名 *</label>
                    <Input
                        id="name"
                        placeholder="您的姓名"
                        {...register("name", { required: "请输入姓名" })}
                        className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                    <label htmlFor="organization" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">学校/单位</label>
                    <Input
                        id="organization"
                        placeholder="所在高校或企业名称"
                        {...register("organization")}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">联系邮箱 *</label>
                <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    {...register("email", {
                        required: "请输入邮箱",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "邮箱格式不正确"
                        }
                    })}
                    className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">咨询内容 *</label>
                <Textarea
                    id="message"
                    placeholder="请描述您的需求（如：课程合作、样机申请、技术咨询等）"
                    className={`min-h-[120px] ${errors.message ? "border-destructive" : ""}`}
                    {...register("message", { required: "请输入咨询内容" })}
                />
                {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 提交中...
                    </>
                ) : isSuccess ? (
                    "提交成功！我们会尽快联系您"
                ) : (
                    <>
                        <Send className="mr-2 h-4 w-4" /> 提交咨询
                    </>
                )}
            </Button>
        </form>
    )
}
