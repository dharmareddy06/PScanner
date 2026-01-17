import React from 'react';
import { Link } from 'react-router-dom';
import { Pill, ScanLine, User } from 'lucide-react';
import { Button } from '../common/Button';
import { useAuth } from '../../context/AuthContext';

export const Header: React.FC = () => {
    const { isAuthenticated, user } = useAuth();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-[var(--border-light)] bg-[var(--surface-white)]/80 backdrop-blur-md">
            <div className="container h-[var(--header-height)] flex items-center justify-between">
                {/* Logo Area */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary-50)] text-[var(--primary-600)] transition-colors group-hover:bg-[var(--primary-100)]">
                        <ScanLine size={24} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-bold leading-none text-[var(--secondary-900)]">MediScan</span>
                        <span className="text-xs font-medium text-[var(--secondary-500)]">AI Guidance</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-sm font-medium text-[var(--secondary-600)] hover:text-[var(--primary-600)] transition-colors">
                        Home
                    </Link>
                    <Link to="/features" className="text-sm font-medium text-[var(--secondary-600)] hover:text-[var(--primary-600)] transition-colors">
                        Features
                    </Link>
                    <Link to="/how-it-works" className="text-sm font-medium text-[var(--secondary-600)] hover:text-[var(--primary-600)] transition-colors">
                        How it Works
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    {isAuthenticated ? (
                        <Link to="/profile">
                            <div className="flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full bg-[var(--surface-background)] hover:bg-[var(--secondary-50)] border border-[var(--border-light)] transition-all cursor-pointer group">
                                <div className="w-8 h-8 rounded-full bg-[var(--primary-100)] flex items-center justify-center text-[var(--primary-600)]">
                                    <User size={16} />
                                </div>
                                <span className="text-sm font-medium text-[var(--secondary-700)] group-hover:text-[var(--primary-700)]">
                                    {user?.name?.split(' ')[0] || 'Profile'}
                                </span>
                            </div>
                        </Link>
                    ) : (
                        <Link to="/login" className="hidden sm:block">
                            <Button variant="ghost" size="sm">Log in</Button>
                        </Link>
                    )}

                    <Link to="/scan">
                        <Button variant="primary" size="sm" icon={Pill}>
                            Scan Prescription
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
};
