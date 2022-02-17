import { useEffect, useRef } from "react";

export const CodeSnippet = ({ children, language, logoComponent }) => {
  const highlighter = useRef(null);
  
  useEffect(() => {
    if (highlighter.current) {
      window.Prism.highlightElement(highlighter.current);
    }
  }, [highlighter]);

  return (
    <div className="m-auto max-w-min">
      <pre className="p-20 sm:rounded-xl text-xs md:text-sm lg:text-base xl:text-xl">
        <code className={`language-${language}`} ref={highlighter}>
          {children}
        </code>
        <div className="absolute right-5 bottom-5">{logoComponent}</div>
      </pre>
    </div>
  );
};
export default CodeSnippet;
