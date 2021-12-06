import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { PHP, TypeScript, Java, Go } from './CodeSnippets';
import { CodeBlock } from './CodeBlock';

export const CodeSwitcher = ({
  // lang,
  setLang
}) => {
  return (
    <Tabs.Root
      onValueChange={setLang}
      defaultValue={'Go'}
      className="lg:col-span-7 rounded-lg w-full">
      <Tabs.List
        aria-label="code examples"
        className=" bg-gray-600 rounded-tr-lg rounded-tl-lg flex items-center justify-start  overflow-x-scroll hide-scrollbar cursor-pointer w-full">
        <Tabs.Trigger
          value={'Go'}
          className="text-sm rounded-tl-lg text-gray-200 py-1 px-4 tab flex-shrink-0">
          <div className="flex items-center space-x-2">
            <img
              className="filter grayscale w-7 h-7 mt-1"
              src="/logos/languages/go.svg"
              alt="go lang logo"
            />
            <p>Go</p>
          </div>
        </Tabs.Trigger>
        <Tabs.Trigger
          value={'Java'}
          className="text-sm bg-gray-600 text-gray-200 py-1 px-4 tab flex-shrink-0">
          <div className="flex items-center space-x-2">
            <img
              className="filter grayscale w-7 h-7 p-1"
              src="/logos/languages/java.svg"
              alt="java lang logo"
            />
            <p>Java</p>
          </div>
        </Tabs.Trigger>
        <Tabs.Trigger
          value={'TypeScript'}
          className="text-sm bg-gray-600 text-gray-200 py-1 px-4 tab flex-shrink-0">
          <div className="flex items-center space-x-2">
            <img
              className="filter grayscale w-7 h-7 p-1"
              src="/logos/languages/typescript.svg"
              alt="TypeScript logo"
            />
            <p>TypeScript</p>
          </div>
        </Tabs.Trigger>
        <Tabs.Trigger
          value={'PHP'}
          className="text-sm bg-gray-600 text-gray-200 py-1 px-4 tab flex-shrink-0">
          <div className="flex items-center space-x-2">
            <img
              className="filter grayscale w-7 h-7"
              src="/logos/languages/php.svg"
              alt="php lang logo"
            />
            <p>PHP</p>
          </div>
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value={'Go'}>
        <CodeBlock lang="go" code={Go} />
      </Tabs.Content>
      <Tabs.Content value={'Java'}>
        <CodeBlock value="java" lang="java" code={Java} />
      </Tabs.Content>
      <Tabs.Content value={'PHP'}>
        <CodeBlock value="php" lang="php" code={PHP} />
      </Tabs.Content>
      <Tabs.Content value={'TypeScript'}>
        <CodeBlock value="typescript" lang="typescript" code={TypeScript} />
      </Tabs.Content>
    </Tabs.Root>
  );
};
