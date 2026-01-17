import React from 'react';
import {
    ScanLine,
    ShieldCheck,
    Clock,
    Database,
    Share2,
    Lock,
    Zap,
    Activity
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { Link } from 'react-router-dom';

const features = [
    {
        icon: ScanLine,
        title: "Instant OCR Scanning",
        description: "Advanced optical character recognition instantly converts physical prescriptions into digital data with 99% accuracy."
    },
    {
        icon: ShieldCheck,
        title: "Safety Analysis",
        description: "Automatically cross-reference new prescriptions with your current medications to detect potentially dangerous interactions."
    },
    {
        icon: Clock,
        title: "Smart Reminders",
        description: "Never miss a dose. Our system creates intelligent schedules based on your prescription's specific instructions."
    },
    {
        icon: Database,
        title: "Digital Medicine Cabinet",
        description: "Keep a complete, searchable history of all your past and present medications in one secure location."
    },
    {
        icon: Share2,
        title: "Doctor Sharing",
        description: "Easily export and share your medication history with healthcare providers in PDF or secure link formats."
    },
    {
        icon: Lock,
        title: "HIPAA Compliant Security",
        description: "Your health data is encrypted at rest and in transit, meeting the highest standards of medical data privacy."
    }
];

export const Features: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[var(--surface-background)]">
            {/* Hero Section */}
            <section className="pt-20 pb-12 lg:pt-32 lg:pb-20 text-center px-4">
                <div className="container max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-50)] text-[var(--primary-700)] text-sm font-medium mb-6">
                        <Zap size={16} fill="currentColor" />
                        <span>Powerful Capabilities</span>
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-[var(--secondary-900)] mb-6 tracking-tight">
                        Everything you need to manage your <br className="hidden md:block" />
                        <span className="text-[var(--primary-600)]">medication health</span>
                    </h1>
                    <p className="text-lg text-[var(--secondary-500)] max-w-2xl mx-auto leading-relaxed">
                        We combine cutting-edge AI with intuitive design to make managing complex prescriptions simple, safe, and secure.
                    </p>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="pb-24 px-4">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group p-8 rounded-2xl bg-[var(--surface-card)] border border-[var(--border-light)] hover:shadow-lg hover:border-[var(--primary-200)] transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-[var(--primary-50)] rounded-xl flex items-center justify-center text-[var(--primary-600)] mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-[var(--secondary-900)] mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-[var(--secondary-500)] leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Analytics Preview Section */}
            <section className="py-20 bg-[var(--surface-white)] border-y border-[var(--border-light)]">
                <div className="container px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-100)] to-[var(--secondary-100)] rounded-3xl transform rotate-3 scale-105 opacity-50 blur-xl"></div>
                            <div className="relative bg-white rounded-2xl border border-[var(--border-light)] shadow-2xl p-8">
                                {/* Mock Chart UI */}
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h4 className="font-bold text-lg text-[var(--secondary-900)]">Adherence Score</h4>
                                        <p className="text-sm text-[var(--secondary-500)]">Last 30 Days</p>
                                    </div>
                                    <div className="text-2xl font-bold text-[var(--primary-600)]">94%</div>
                                </div>
                                <div className="h-48 flex items-end justify-between gap-2">
                                    {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                                        <div key={i} className="w-full bg-[var(--primary-100)] rounded-t-lg relative group">
                                            <div
                                                style={{ height: `${h}%` }}
                                                className="absolute bottom-0 w-full bg-[var(--primary-500)] rounded-t-lg transition-all duration-500 group-hover:bg-[var(--primary-600)]"
                                            ></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 text-[var(--primary-600)] font-medium mb-4">
                                <Activity size={20} />
                                <span>Health Analytics</span>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-[var(--secondary-900)] mb-6">
                                Stay on top of your health goals
                            </h2>
                            <p className="text-lg text-[var(--secondary-500)] mb-8 leading-relaxed">
                                Visual insights help you understand your adherence patterns. Track improvements over time and get motivated to maintain your health regimen.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {['Weekly Reports', 'Missed Dose Alerts', 'Progress Tracking'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[var(--secondary-700)]">
                                        <div className="w-5 h-5 rounded-full bg-[var(--primary-100)] flex items-center justify-center text-[var(--primary-600)]">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 text-center">
                <div className="container max-w-3xl">
                    <h2 className="text-3xl font-bold text-[var(--secondary-900)] mb-6">
                        Ready to simplify your medication management?
                    </h2>
                    <p className="text-lg text-[var(--secondary-500)] mb-8">
                        Join thousands of users who have switched to a smarter, safer way to handle their prescriptions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/scan">
                            <Button size="lg">Get Started Now</Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="secondary" size="lg">Contact Experience</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
