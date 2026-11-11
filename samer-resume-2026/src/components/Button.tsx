import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    children: ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
    primary:
        "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-hover",
    secondary:
        "border border-border bg-surface text-text hover:border-primary hover:bg-card",
};

const Button = ({
    children,
    variant = "primary",
    className = "",
    ...props
}: ButtonProps) => {
    return (
        <button
            className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50 ${variantClasses[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;