import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="border-t border-[var(--border-light)] bg-[var(--surface-white)] pt-12 pb-8">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col gap-2">
                        <span className="text-lg font-bold text-[var(--secondary-900)]">MediScan</span>
                        <p className="text-sm text-[var(--secondary-500)]">
                            AI-powered medication guidance system for a healthier future.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="text-[var(--secondary-400)] hover:text-[var(--primary-600)] transition-colors">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="text-[var(--secondary-400)] hover:text-[var(--primary-600)] transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="#" className="text-[var(--secondary-400)] hover:text-[var(--primary-600)] transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-[var(--border-light)] text-center text-sm text-[var(--secondary-400)]">
                    © {new Date().getFullYear()} MediScan AI. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
