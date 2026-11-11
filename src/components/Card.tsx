import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

const Card = ({
    children,
    className = "",
    ...props
}: CardProps) => {
    return (
        <div
            className={`rounded-2xl border border-border bg-surface/80 p-6 shadow-lg shadow-black/10 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;