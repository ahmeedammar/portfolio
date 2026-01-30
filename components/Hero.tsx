'use client';

import Image from 'next/image';

export default function Hero() {
    const handleDownloadCV = () => {
        // Create a link element and trigger download
        const link = document.createElement('a');
        link.href = '/ahmed-ammar-cv.pdf';
        link.download = 'Ahmed_Ammar_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <div className="text-center">
                    {/* Profile Image with Pop-out effect */}
                    <div className="mb-12 flex justify-center animate-fadeInUp">
                        <div className="relative group">
                            {/* Animated Rings */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>

                            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl bg-white dark:bg-gray-900">
                                {/* Background pattern inside the circle */}
                                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>

                                {/* The actual photo - casa1.png - perfectly contained */}
                                <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-500 ease-out">
                                    <Image
                                        src="/casa1.png"
                                        alt="Ahmed Ammar"
                                        fill
                                        className="object-cover object-top"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Status Indicator */}
                            <div className="absolute bottom-4 right-4 w-14 h-14 bg-white dark:bg-gray-800 rounded-full p-1 shadow-xl border-2 border-gray-100 dark:border-gray-700 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                                <div className="w-full h-full bg-green-500 rounded-full border-4 border-white dark:border-gray-800 animate-pulse flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="animate-fadeInUp animation-delay-200">
                        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-gray-900 dark:text-white">
                            Ahmed Ammar
                        </h1>

                        <div className="flex justify-center items-center gap-4 mb-8">
                            <div className="h-px w-8 bg-blue-600"></div>
                            <h2 className="text-2xl md:text-3xl font-bold gradient-text uppercase tracking-widest text-transparent bg-clip-text">
                                Software Engineer
                            </h2>
                            <div className="h-px w-8 bg-purple-600"></div>
                        </div>

                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
                            I build exceptional digital experiences through <span className="text-blue-600 dark:text-blue-400 font-bold">clean code</span> and <span className="text-purple-600 dark:text-purple-400 font-bold">innovative solutions</span>.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeInUp animation-delay-400">
                        <button
                            onClick={scrollToProjects}
                            className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-[0_10px_30px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.6)] transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
                        >
                            Explore My Work
                            <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>

                        <button
                            onClick={handleDownloadCV}
                            className="px-10 py-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-100 dark:border-gray-700 rounded-2xl font-bold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 group"
                        >
                            <svg className="w-6 h-6 text-blue-600 group-hover:bounce transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download Resume
                        </button>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex justify-center gap-8 mt-16 animate-fadeInUp animation-delay-600">
                        {[
                            { name: 'GitHub', icon: '/github.svg', href: 'https://github.com/ahmedammar' },
                            { name: 'LinkedIn', icon: '/linkedin.svg', href: 'https://linkedin.com/in/ahmedammar' }
                        ].map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                            >
                                <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex items-center justify-center overflow-hidden p-3">
                                    <Image
                                        src={social.name === 'GitHub' ? 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' : 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg'}
                                        alt={social.name}
                                        width={32}
                                        height={32}
                                        className="dark:invert opacity-70 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* High-end Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity" onClick={scrollToProjects}>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Scroll</span>
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
                    <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
