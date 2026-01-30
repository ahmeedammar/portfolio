export default function Experience() {
    const experiences = [
        {
            title: 'IT and Project Control Engineer',
            company: 'ASF Consulting',
            location: 'Tunis, Tunisia',
            period: 'Sept 2024 - Sept 2025',
            current: false,
            responsibilities: [
                'Developed and maintained PHP-based project management applications',
                'Optimized MySQL queries for better performance and scalability',
                'Collaborated with cross-functional teams to integrate backend systems with frontend interfaces'
            ],
            color: 'blue'
        },
        {
            title: 'Software Engineer Intern',
            company: 'FinLogik Offshore Solutions',
            location: 'Tunis, Tunisia',
            period: 'Feb 2023 - Jun 2023',
            current: false,
            responsibilities: [
                'Designed and built a Cost Center Billing System using PHP and Laravel',
                'Implemented automated invoice generation and income/expense tracking modules'
            ],
            color: 'purple'
        },
        {
            title: 'Technician Intern',
            company: 'NeoWeb',
            location: 'Tunis, Tunisia',
            period: 'Jul 2022 - Sept 2022',
            current: false,
            responsibilities: [
                'Developed transaction tracking web application using PHP, JavaScript, and Bootstrap',
                'Applied responsive design principles to improve accessibility across devices'
            ],
            color: 'green'
        },
        {
            title: 'Software Engineer Intern',
            company: 'Freedom Of Dev Services',
            location: 'Sfax, Tunisia',
            period: 'Feb 2022 - Apr 2022',
            current: false,
            responsibilities: [
                'Created student progress tracking system for International Institute of Technology using PHP and MySQL',
                'Built robust data management and reporting features'
            ],
            color: 'orange'
        },
        {
            title: 'Worker Intern',
            company: 'NeoWeb',
            location: 'Tunis, Tunisia',
            period: 'Jul 2021 - Aug 2021',
            current: false,
            responsibilities: [
                'Enhanced existing CRM system with new features using PHP and jQuery',
                'Improved user interface and overall usability'
            ],
            color: 'pink'
        }
    ];

    const colorClasses: Record<string, { bg: string; border: string; dot: string }> = {
        blue: { bg: 'bg-blue-100 dark:bg-blue-900/30', border: 'border-blue-500', dot: 'bg-blue-500' },
        purple: { bg: 'bg-purple-100 dark:bg-purple-900/30', border: 'border-purple-500', dot: 'bg-purple-500' },
        green: { bg: 'bg-green-100 dark:bg-green-900/30', border: 'border-green-500', dot: 'bg-green-500' },
        orange: { bg: 'bg-orange-100 dark:bg-orange-900/30', border: 'border-orange-500', dot: 'bg-orange-500' },
        pink: { bg: 'bg-pink-100 dark:bg-pink-900/30', border: 'border-pink-500', dot: 'bg-pink-500' }
    };

    return (
        <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fadeInUp">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Work Experience
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        My professional journey and contributions
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

                        {experiences.map((exp, index) => {
                            const colors = colorClasses[exp.color];
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className={`relative mb-12 animate-fadeInUp ${isEven ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                                        }`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className={`md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'} pl-12 md:pl-12`}>
                                        {/* Timeline dot */}
                                        <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 ${colors.dot} rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10`}>
                                            <div className={`absolute inset-0 ${colors.dot} rounded-full animate-ping opacity-75`}></div>
                                        </div>

                                        {/* Content card */}
                                        <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover border-l-4 ${colors.border}`}>
                                            <div className={`p-6 ${colors.bg}`}>
                                                <div className="flex items-start justify-between mb-2">
                                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                        {exp.title}
                                                    </h3>
                                                    {exp.current && (
                                                        <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                                                            Current
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-1">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                    </svg>
                                                    <span className="font-semibold">{exp.company}</span>
                                                </div>

                                                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                                                    <div className="flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        <span>{exp.location}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                        <span>{exp.period}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-6">
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                                                    Key Responsibilities:
                                                </h4>
                                                <ul className="space-y-2">
                                                    {exp.responsibilities.map((resp, rIndex) => (
                                                        <li key={rIndex} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                                                            <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-sm">{resp}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
