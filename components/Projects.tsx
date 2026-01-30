export default function Projects() {
    const projects = [
        {
            title: 'PHP-based Project Management Applications',
            company: 'ASF Consulting',
            period: 'Sept 2024 - Sept 2025',
            description: 'Developed and maintained PHP-based project management applications with focus on performance and scalability',
            technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
            highlights: [
                'Optimized MySQL queries for better performance and scalability',
                'Collaborated with cross-functional teams to integrate backend systems with frontend interfaces'
            ],
            color: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Cost Center Billing System',
            company: 'FinLogik Offshore Solutions',
            period: 'Feb 2023 - Jun 2023',
            description: 'Designed and built a comprehensive Cost Center Billing System using PHP and Laravel',
            technologies: ['PHP', 'Laravel', 'MySQL', 'REST APIs'],
            highlights: [
                'Implemented automated invoice generation',
                'Created income/expense tracking modules',
                'Built robust REST API endpoints'
            ],
            color: 'from-purple-500 to-pink-500'
        },
        {
            title: 'Transaction Tracking Web Application',
            company: 'NeoWeb',
            period: 'Jul 2022 - Sept 2022',
            description: 'Developed a transaction tracking web application using modern web technologies',
            technologies: ['PHP', 'JavaScript', 'Bootstrap', 'MySQL'],
            highlights: [
                'Applied responsive design principles',
                'Improved accessibility across multiple devices',
                'Enhanced user interface and overall usability'
            ],
            color: 'from-green-500 to-emerald-500'
        },
        {
            title: 'Student Progress Tracking System',
            company: 'Freedom Of Dev Services',
            period: 'Feb 2022 - Apr 2022',
            description: 'Created a comprehensive student progress tracking system for International Institute of Technology',
            technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
            highlights: [
                'Built robust data management and reporting features',
                'Implemented user-friendly interface for students and administrators',
                'Ensured data integrity and security'
            ],
            color: 'from-orange-500 to-red-500'
        },
        {
            title: 'CRM System Enhancement',
            company: 'NeoWeb',
            period: 'Jul 2021 - Aug 2021',
            description: 'Enhanced existing CRM system with new features and improved usability',
            technologies: ['PHP', 'jQuery', 'MySQL', 'JavaScript'],
            highlights: [
                'Added new features to improve customer relationship management',
                'Improved user interface and overall usability',
                'Optimized database queries for better performance'
            ],
            color: 'from-indigo-500 to-purple-500'
        }
    ];

    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fadeInUp">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Featured Projects
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        Real-world applications I've built and contributed to
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover animate-fadeInUp"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Gradient header */}
                            <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

                            <div className="p-6">
                                {/* Project header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                            </svg>
                                            <span className="font-medium">{project.company}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mt-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span>{project.period}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Highlights */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Highlights:</h4>
                                    <ul className="space-y-1">
                                        {project.highlights.map((highlight, hIndex) => (
                                            <li key={hIndex} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white rounded-full text-xs font-medium`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
