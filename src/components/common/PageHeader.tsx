interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

const PageHeader = ({
  title,
  description,
  className = "",
}: PageHeaderProps) => {
  return (
    <section className={`space-y-4 ${className}`}>
      <h1 className="text-4xl font-bold text-dark-100">{title}</h1>
      {description && (
        <p className="text-dark-300 text-lg max-w-2xl">{description}</p>
      )}
    </section>
  );
};

export default PageHeader;
