export default function About() {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fadeInUp">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="animate-slideInLeft">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl transform rotate-3"></div>
                            <div className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl">
                                <h3 className="text-2xl font-bold mb-4 gradient-text">Professional Profile</h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    I am a highly motivated Software Engineer with solid skills in developing web applications utilizing advanced technologies. My passion is to write efficient codes that make a difference in the lives of users.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    I have experience in both frontend and backend development, proficient in PHP, Laravel, MySQL, JavaScript, React, and Angular. I work best in an agile environment where learning and collaboration result in outstanding achievement and innovation.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="animate-slideInRight">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 card-hover">
                                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Problem Solver</h4>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Passionate about tackling complex challenges and finding elegant solutions through code
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 card-hover">
                                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Team Collaboration</h4>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Experienced in working with cross-functional teams to deliver high-quality solutions
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-pink-50 to-orange-50 dark:from-gray-700 dark:to-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 card-hover">
                                <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Continuous Learning</h4>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Always exploring new technologies and best practices to stay ahead in the field
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
