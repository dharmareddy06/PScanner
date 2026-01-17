import React from 'react';
import { Camera, Cpu, FileText, Bell, CheckCircle } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Link } from 'react-router-dom';

export const HowItWorks: React.FC = () => {
    const steps = [
        {
            id: 1,
            icon: Camera,
            title: "Snap a Photo",
            description: "Simply use your phone's camera to take a clear picture of your prescription label or document. You can also upload existing files."
        },
        {
            id: 2,
            icon: Cpu,
            title: "AI Analysis",
            description: "Our secure AI engine instantly processes the image, complying with HIPAA standards to extract medication names, dosages, and instructions."
        },
        {
            id: 3,
            icon: FileText,
            title: "Review Details",
            description: "Verify the extracted information. We'll automatically flag any potential interactions with your existing medication profile."
        },
        {
            id: 4,
            icon: Bell,
            title: "Set Reminders",
            description: "With one click, add the medication to your schedule. We'll set up smart notifications so you never miss a dose."
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[var(--surface-background)]">
            {/* Hero Section */}
            <section className="pt-20 pb-16 text-center px-4 bg-[var(--surface-white)] border-b border-[var(--border-light)]">
                <div className="container max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--secondary-100)] text-[var(--secondary-600)] text-sm font-medium mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-[var(--secondary-400)]"></span>
                        <span>Simple Process</span>
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-[var(--secondary-900)] mb-6 tracking-tight">
                        From paper to digital in <span className="text-[var(--primary-600)]">seconds</span>
                    </h1>
                    <p className="text-lg text-[var(--secondary-500)] leading-relaxed">
                        Managing meds shouldn't be a headache. See how MediScan transforms your physical prescriptions into actionable health data.
                    </p>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-24 px-4">
                <div className="container max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[var(--border-light)] -translate-x-1/2"></div>

                        {steps.map((step, index) => (
                            <div key={step.id} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''}`}>

                                {/* Content */}
                                <div className="flex-1 space-y-4">
                                    <div className={`flex items-center gap-3 text-[var(--primary-600)] font-bold text-sm uppercase tracking-wider ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                                        <span>Step 0{step.id}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-[var(--secondary-900)]">{step.title}</h3>
                                    <p className="text-[var(--secondary-500)] leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Center Marker */}
                                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-[var(--surface-white)] border-4 border-[var(--primary-50)] text-[var(--primary-600)] flex items-center justify-center shadow-lg">
                                    <step.icon size={28} />
                                </div>

                                {/* Empty Space for Grid alignment */}
                                <div className="flex-1 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust/Safety Banner */}
            <section className="py-16 bg-[var(--primary-900)] text-white px-4">
                <div className="container max-w-4xl text-center">
                    <div className="w-16 h-16 mx-auto bg-[var(--primary-800)] rounded-full flex items-center justify-center mb-6">
                        <CheckCircle size={32} />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Your Privacy comes first</h2>
                    <p className="text-[var(--primary-100)] text-lg mb-8 max-w-2xl mx-auto">
                        We do not store your prescription images after processing. All data extraction is performed securely, and your personal health information remains under your control.
                    </p>
                    <Link to="/scan">
                        <Button size="lg" className="bg-white text-[var(--primary-900)] hover:bg-[var(--primary-50)] border-none shadow-lg">
                            Start Scanning Now
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};
