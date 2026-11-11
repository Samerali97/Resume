const PrimaryFooter = () => {
    return (
        <footer className="relative z-10 border-t border-border/60 py-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted sm:flex-row sm:px-8">
                <p>
                    © {new Date().getFullYear()} Samer Ali. All rights reserved.
                </p>

                <a
                    href="#home"
                    className="transition-colors duration-200 hover:text-primary focus-visible:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                    Back to top ↑
                </a>
            </div>
        </footer>
    );
};

export default PrimaryFooter;