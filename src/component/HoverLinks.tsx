const HoverLinks = ({ text, cursor }: { text: string; cursor?: boolean }) => {
  return (
    <div className="relative flex whitespace-nowrap overflow-hidden group hover-link" data-cursor={!cursor && `disable`}>
      <div className="relative transition-all duration-300 group-hover:-translate-y-full group-hover:text-[var(--color-accent)] hover-in">
        {text} <div className="flex absolute top-full left-0">{text}</div>
      </div>
    </div>
  );
};

export default HoverLinks;
