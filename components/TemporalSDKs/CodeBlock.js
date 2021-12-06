import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/oceanicNext';
import Prism from 'prism-react-renderer/prism';

(typeof global !== 'undefined' ? global : window).Prism = Prism;

require('prismjs/components/prism-java');
require('prismjs/components/prism-php');

const diffSymbols = {
  '-': '#133929',
  '*': '#32275f',
  '+': '#0f7bfe40'
};

export const CodeBlock = ({ code, lang }) => {
  return (
    <Highlight {...defaultProps} code={code} language={lang} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`p-5 rounded-b-lg shadow-xl overflow-x-scroll hide-scrollbar ${className} text-sm leading-relaxed min-h-[275px]`}
          style={style}>
          <code>
            {tokens.map((line, i) => {
              let lineClass = {
                backgroundColor: ''
              };
              let diffSymbol = '';
              if (
                (line[0] &&
                  line[0].content.length &&
                  (line[0].content[0] === '+' ||
                    line[0].content[0] === '-' ||
                    line[0].content[0] === '*')) ||
                (line[0] &&
                  line[0].content === '' &&
                  line[0].content[1] !== '+' &&
                  line[0].content[1] !== '-' &&
                  line[0].content[1] !== '*')
              ) {
                diffSymbol =
                  line[0] && line[0].content.length ? line[0].content[0] : line[1].content;
                lineClass = {
                  backgroundColor: diffSymbols[diffSymbol],
                  padding: '0.2rem 0.5rem',
                  borderRadius: '0.5rem'
                };

                if (
                  line[0] &&
                  line[0].content.length &&
                  (line[0].content[0] === '+' ||
                    line[0].content[0] === '-' ||
                    line[0].content[0] === '*')
                ) {
                  line[0].content = '';
                }

                if (
                  (line[1] && line[1].content.length && line[1].content === '-') ||
                  line[1].content === '+' ||
                  line[1].content === '*'
                ) {
                  line[1].content = '';
                }
              }

              const lineProps = getLineProps({ line, key: i });
              lineProps.style = { ...lineClass };

              return (
                <div key={i}>
                  {/* <span className="ml-1 mr-4 text-sm text-gray-200">{i + 1}</span> */}
                  <span {...lineProps}>
                    {line.map((token, key) => {
                      return <span key={key} {...getTokenProps({ token, key })} />;
                    })}
                  </span>
                </div>
              );
            })}
          </code>
        </pre>
      )}
    </Highlight>
  );
};
