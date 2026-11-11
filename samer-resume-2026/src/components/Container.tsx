import type { HTMLAttributes } from "react";

type ContainerSize = "default" | "wide" | "narrow";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    size?: ContainerSize;
}

const sizeClasses: Record<ContainerSize, string> = {
    default: "max-w-6xl",
    wide: "max-w-7xl",
    narrow: "max-w-3xl",
};

const Container = ({
    children,
    size = "default",
    className = "",
    ...props
}: ContainerProps) => {
    return (
        <div
            className={`mx-auto w-full px-6 sm:px-8 ${sizeClasses[size]} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}

export default Container;
