
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigationLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
            <nav
                aria-label="Main navigation"
                className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8"
            >
                {/* Logo */}
                <a
                    href="#home"
                    onClick={handleLinkClick}
                    className="text-xl font-bold tracking-tight text-text"
                >
                    Samer<span className="text-primary">.</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {navigationLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted transition-colors duration-200 hover:text-primary focus-visible:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setIsMenuOpen((previous) => !previous)}
                    className="rounded-lg p-2 text-text transition-colors hover:bg-surface md:hidden"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div
                    id="mobile-navigation"
                    className="border-t border-border/60 bg-background/95 px-6 py-4 backdrop-blur-xl md:hidden"
                >
                    <div className="mx-auto flex max-w-7xl flex-col gap-4">
                        {navigationLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={handleLinkClick}
                                className="py-2 text-sm font-medium text-muted transition-colors hover:text-primary"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
