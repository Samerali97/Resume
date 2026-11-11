const PrimaryFooter = () => {
  return (
    <footer className="border-border/60 relative z-10 border-t py-8">
      <div className="text-muted mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} Samer Ali. All rights reserved.</p>

        <a
          href="#home"
          className="hover:text-primary focus-visible:text-primary focus-visible:outline-primary transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};

export default PrimaryFooter;
