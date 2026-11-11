interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) => {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow && (
        <p className="text-primary mb-3 text-sm font-semibold tracking-[0.2em] uppercase">
          {eyebrow}
        </p>
      )}

      <h2 className="text-text text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="text-muted mt-4 text-base leading-7">{description}</p>
      )}
    </div>
  );
};

export default SectionHeading;
