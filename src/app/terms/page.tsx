import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '服务条款 - 辰龙OS',
    description: '辰龙OS网站服务条款，包括使用规则、知识产权声明及免责条款。',
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 md:py-20">
            <div className="container">
                <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
                    {/* 头部 */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 md:p-12">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">服务条款</h1>
                        <p className="text-blue-100 text-lg">最后更新日期：2025年12月07日</p>
                    </div>
                    
                    {/* 内容 */}
                    <div className="p-8 md:p-12 space-y-8">
                        <div className="space-y-4">
                            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                                欢迎访问辰龙OS官方网站（以下简称“本网站”）。请您在浏览或使用本网站前仔细阅读以下条款。访问本网站即表示您同意受本服务条款的约束。
                            </p>
                        </div>

                        {/* 条款部分 */}
                        <div className="space-y-6">
                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-200 dark:border-slate-700">
                                    1. 条款的接受与修改
                                </h2>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    本服务条款是您与辰龙OS项目组（以下简称“我们”）之间关于您使用本网站所订立的协议。我们保留随时修改本条款的权利，修改后的条款一旦公布即生效。您继续使用本网站将被视为接受修改后的条款。
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-200 dark:border-slate-700">
                                    2. 知识产权声明
                                </h2>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    本网站包含的所有内容（包括但不限于文字、图片、音频、视频、软件代码、界面设计、商标等）均受著作权法、商标法及其他相关法律法规的保护。
                                </p>
                                <ul className="space-y-3 pl-6 list-disc">
                                    <li className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        <strong className="text-slate-800 dark:text-slate-100">开源软件：</strong> 辰龙OS本身基于 Apache 2.0 协议开源，其代码的使用、修改和分发遵循该开源协议的规定。
                                    </li>
                                    <li className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        <strong className="text-slate-800 dark:text-slate-100">网站内容：</strong> 未经我们书面许可，任何单位或个人不得以任何方式复制、转载、引用、链接、抓取或以其他方式使用本网站的非开源内容用于商业目的。
                                    </li>
                                </ul>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-200 dark:border-slate-700">
                                    3. 用户行为规范
                                </h2>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    您在使用本网站时，必须遵守中华人民共和国相关法律法规，不得利用本网站从事以下行为：
                                </p>
                                <ul className="space-y-3 pl-6 list-disc">
                                    <li className="text-slate-700 dark:text-slate-300 leading-relaxed">发布、传送、传播、储存违反国家法律法规禁止的内容；</li>
                                    <li className="text-slate-700 dark:text-slate-300 leading-relaxed">侵犯他人知识产权、商业秘密等合法权益；</li>
                                    <li className="text-slate-700 dark:text-slate-300 leading-relaxed">进行网络攻击、传播计算机病毒或未经授权访问我们的服务器；</li>
                                    <li className="text-slate-700 dark:text-slate-300 leading-relaxed">利用本网站进行虚假宣传、诈骗等违法犯罪活动。</li>
                                </ul>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-200 dark:border-slate-700">
                                    4. 合作与采购
                                </h2>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    对于通过本网站进行的教学套件采购、技术服务合作等商业行为，具体的权利义务将由双方另行签署的书面合同约定。本网站上的产品描述、价格等信息仅供参考，不构成要约。
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-200 dark:border-slate-700">
                                    5. 免责声明
                                </h2>
                                <ul className="space-y-3 pl-6 list-disc">
                                    <li className="text-slate-700 dark:text-slate-300 leading-relaxed">我们致力于提供准确、及时的信息，但不对本网站内容的准确性、完整性、时效性做任何明示或暗示的保证。</li>
                                    <li className="text-slate-700 dark:text-slate-300 leading-relaxed">对于因使用或无法使用本网站而造成的任何直接、间接、附带或后果性的损害，我们不承担法律责任。</li>
                                    <li className="text-slate-700 dark:text-slate-300 leading-relaxed">本网站可能包含指向第三方网站的链接，我们对第三方网站的内容或隐私政策不承担责任。</li>
                                </ul>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-200 dark:border-slate-700">
                                    6. 适用法律与争议解决
                                </h2>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    本服务条款的解释、效力及纠纷解决均适用中华人民共和国法律。如发生争议，双方应友好协商解决；协商不成的，任何一方均可向北京市海淀区人民法院提起诉讼。
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 pb-2 border-b border-slate-200 dark:border-slate-700">
                                    7. 联系我们
                                </h2>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                    如对本服务条款有任何疑问，请联系我们：
                                    <a 
                                        href="mailto:contact@chenlongos.com" 
                                        className="text-blue-600 dark:text-blue-400 hover:underline ml-1 font-medium"
                                    >
                                        contact@chenlongos.com
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
