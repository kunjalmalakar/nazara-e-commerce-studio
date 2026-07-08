export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10 text-center">
      <h2 className="font-display text-3xl font-semibold tracking-wide sm:text-4xl">
        {title}
      </h2>
      <div className="divider-fancy mt-4">
        <span className="inline-block h-1.5 w-1.5 rotate-45 bg-gold" />
      </div>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}
