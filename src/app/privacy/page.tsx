import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '隐私政策 - 辰龙OS',
    description: '辰龙OS如何收集、使用和保护您的个人信息。',
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 md:py-20">
            <div className="container">
                <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
                    {/* 头部 */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 md:p-12">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">隐私政策</h1>
                        <p className="text-blue-100 text-lg">生效日期：2025年12月07日</p>
                    </div>
                    
                    {/* 内容 */}
                    <div className="p-8 md:p-12 space-y-8">
                        <div className="space-y-4">
                            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                                辰龙OS项目组（以下简称“我们”）非常重视您的隐私保护。本隐私政策旨在向您说明我们在您使用辰龙OS官方网站及相关服务时，如何收集、使用、存储和保护您的个人信息。
                            </p>
                        </div>

                        {/* 隐私政策部分 */}
                        <div className="space-y-6">
                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-200 dark:border-slate-700">
                                    1. 我们收集的信息
                                </h2>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    我们仅在必要范围内收集您的信息，主要包括：
                                </p>
                                <ul className="space-y-3 pl-6 list-disc">
                                    <li className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        <strong className="text-slate-800 dark:text-slate-100">咨询与合作信息：</strong> 当您通过网站填写“联系我们”或“合作咨询”表单时，我们可能会收集您的姓名、联系电话、电子邮箱、所属单位及您填写的需求描述。这些信息用于回复您的咨询或进行商务对接。
                                    </li>
                                    <li className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        <strong className="text-slate-800 dark:text-slate-100">网站访问日志：</strong> 我们的服务器会自动记录您的IP地址、浏览器类型、访问时间、访问页面等日志信息。这些信息仅用于网站安全维护和流量统计分析，不与您的个人身份关联。
                                    </li>
                                </ul>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-200 dark:border-slate-700">
                                    2. 信息的用途
                                </h2>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    我们收集的信息将用于以下目的：
                                </p>
                                <ul className="space-y-3 pl-6 list-disc">
                                    <li className="text-slate-700 dark:text-slate-300 leading-relaxed">处理您的商务合作申请、样机试用申请或技术咨询；</li>
                                    <li className="text-slate-700 dark:text-slate-300 leading-relaxed">向您发送产品更新通知、服务状态提醒（仅在您同意的情况下）；</li>
                                    <li className="text-slate-700 dark:text-slate-300 leading-relaxed">优化网站功能，改善用户体验；</li>
                                    <li className="text-slate-700 dark:text-slate-300 leading-relaxed">保障网站网络安全，防范欺诈和滥用。</li>
                                </ul>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-200 dark:border-slate-700">
                                    3. 信息的共享与披露
                                </h2>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    我们承诺不会出售您的个人信息。除以下情况外，我们不会向第三方共享您的信息：
                                </p>
                                <ul className="space-y-3 pl-6 list-disc">
                                    <li className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        <strong className="text-slate-800 dark:text-slate-100">获得您的明确同意：</strong> 在征得您同意的情况下共享；
                                    </li>
                                    <li className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        <strong className="text-slate-800 dark:text-slate-100">法律法规要求：</strong> 根据法律法规、司法程序或政府主管部门的强制性要求；
                                    </li>
                                    <li className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        <strong className="text-slate-800 dark:text-slate-100">关联公司与合作伙伴：</strong> 为实现服务目的（如硬件厂商发货），我们可能与授权合作伙伴共享必要的联系信息，但会要求其遵守本隐私政策。
                                    </li>
                                </ul>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-200 dark:border-slate-700">
                                    4. 信息安全
                                </h2>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    我们采取行业通用的安全技术和管理措施（如HTTPS加密传输、访问控制等）来保护您的个人信息，防止信息泄露、毁损或丢失。
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-200 dark:border-slate-700">
                                    5. Cookie 的使用
                                </h2>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    为确保网站正常运转，我们会使用 Cookie 技术。Cookie 包含少量数据，通常包含匿名唯一标识符。您可以通过浏览器设置拒绝 Cookie，但这可能影响您使用网站的部分功能。
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-200 dark:border-slate-700">
                                    6. 未成年人保护
                                </h2>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    我们的产品主要面向高校师生及开发者。若您是未成年人，建议在监护人指导下浏览本网站或提交个人信息。
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-200 dark:border-slate-700">
                                    7. 政策更新
                                </h2>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    我们可能会适时更新本隐私政策。更新后的政策将在本页面发布，重大变更我们会通过显著方式通知。
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-200 dark:border-slate-700">
                                    8. 联系我们
                                </h2>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    如果您对本隐私政策有任何疑问或投诉，请通过以下方式联系我们：
                                </p>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    邮箱：
                                    <a 
                                        href="mailto:privacy@chenlongos.com" 
                                        className="text-blue-600 dark:text-blue-400 hover:underline ml-1 font-medium"
                                    >
                                        privacy@chenlongos.com
                                    </a>
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
