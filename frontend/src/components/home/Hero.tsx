import React from 'react';
import { Button } from '../common/Button';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Text Content */}
                    <div className="flex flex-col gap-6 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-50)] border border-[var(--primary-100)] text-[var(--primary-700)] text-sm font-medium w-fit mx-auto lg:mx-0">
                            <span className="flex h-2 w-2 rounded-full bg-[var(--primary-500)] animate-pulse"></span>
                            <span>AI-Powered Health Assistant</span>
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-[var(--secondary-900)] leading-[1.1]">
                            Decipher Your Health, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-600)] to-[var(--primary-400)]">
                                One Scan at a Time
                            </span>
                        </h1>

                        <p className="text-lg text-[var(--secondary-500)] leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Instantly identify medications, understand prescriptions, and manage your dosage with our advanced optical character recognition.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <Button size="lg" icon={ArrowRight} className="w-full sm:w-auto">
                                Start Scanning
                            </Button>
                            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                                View Demo
                            </Button>
                        </div>

                        <div className="pt-8 flex items-center justify-center lg:justify-start gap-6 text-[var(--secondary-500)] text-sm">
                            <div className="flex items-center gap-2">
                                <ShieldCheck size={18} className="text-[var(--primary-600)]" />
                                <span>HIPAA Compliant</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap size={18} className="text-[var(--primary-600)]" />
                                <span>Instant Results</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual/Image Area */}
                    <div className="relative mx-auto lg:ml-auto w-full max-w-lg lg:max-w-none">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-[var(--primary-100)] rounded-full blur-3xl opacity-30 animate-pulse"></div>

                        <div className="relative rounded-2xl bg-[var(--surface-card)] border border-[var(--border-light)] shadow-2xl p-6 lg:p-8">
                            {/* Mock Interface */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between border-b border-[var(--border-light)] pb-4">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="h-4 w-32 bg-[var(--secondary-100)] rounded-full"></div>
                                </div>

                                <div className="aspect-[4/3] w-full bg-[var(--primary-50)] rounded-lg border border-[var(--primary-100)] flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
                                    <div className="relative text-center p-6">
                                        <div className="w-16 h-16 mx-auto bg-[var(--primary-100)] rounded-full flex items-center justify-center mb-4 text-[var(--primary-600)]">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        </div>
                                        <p className="font-medium text-[var(--secondary-700)]">Upload or Scan Prescription</p>
                                        <p className="text-sm text-[var(--secondary-400)] mt-1">Drag and drop or click to select</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="h-2 w-3/4 bg-[var(--secondary-100)] rounded-full"></div>
                                    <div className="h-2 w-1/2 bg-[var(--secondary-100)] rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
