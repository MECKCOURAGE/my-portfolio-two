type TextHighlighterProps = {
  text: string;
};

const TextHighlighter = ({ text }: TextHighlighterProps) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <p className="text-[17px] text-customSlate">
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          const boldText = part.replace(/\*\*/g, "");
          return (
            <strong key={index} className="font-semibold text-slate-200">
              {boldText}
            </strong>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </p>
  );
};

export default TextHighlighter;
