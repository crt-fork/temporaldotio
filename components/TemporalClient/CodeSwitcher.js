import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { PHP, TypeScript, Java, Go } from './CodeSnippets';
import { CodeBlock } from './CodeBlock';

export const CodeSwitcher = () => {
  return (
    <Tabs.Root defaultValue={0} className="lg:col-span-7 rounded-lg w-full">
      <Tabs.List
        aria-label="code examples"
        className=" bg-gray-600 rounded-tr-lg rounded-tl-lg flex items-center justify-start  overflow-x-scroll hide-scrollbar cursor-pointer w-full">
        <Tabs.Trigger
          value={0}
          className="text-sm rounded-tl-lg text-gray-200 py-1 px-4 tab flex-shrink-0">
          <div className="flex items-center space-x-2">
            <img
              className="filter grayscale w-7 h-7 mt-1"
              src="/logos/languages/go.svg"
              alt="go lang logo"
            />
            <p>workflow.go</p>
          </div>
        </Tabs.Trigger>
        <Tabs.Trigger
          value={1}
          className="text-sm bg-gray-600 text-gray-200 py-1 px-4 tab flex-shrink-0">
          <div className="flex items-center space-x-2">
            <img
              className="filter grayscale w-7 h-7 p-1"
              src="/logos/languages/java.svg"
              alt="java lang logo"
            />
            <p>workflow.java</p>
          </div>
        </Tabs.Trigger>
        <Tabs.Trigger
          value={2}
          className="text-sm bg-gray-600 text-gray-200 py-1 px-4 tab flex-shrink-0">
          <div className="flex items-center space-x-2">
            <img
              className="filter grayscale w-7 h-7"
              src="/logos/languages/php.svg"
              alt="php lang logo"
            />
            <p>workflow.php</p>
          </div>
        </Tabs.Trigger>
        <Tabs.Trigger
          value={3}
          className="text-sm bg-gray-600 text-gray-200 py-1 px-4 tab flex-shrink-0">
          <div className="flex items-center space-x-2">
            <img
              className="filter grayscale w-7 h-7 p-1"
              src="/logos/languages/typescript.svg"
              alt="TypeScript logo"
            />
            <p>workflow.ts</p>
          </div>
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value={0}>
        <CodeBlock lang="go" code={Go} />
      </Tabs.Content>
      <Tabs.Content value={1}>
        <CodeBlock value="java" lang="java" code={Java} />
      </Tabs.Content>
      <Tabs.Content value={2}>
        <CodeBlock value="php" lang="php" code={PHP} />
      </Tabs.Content>
      <Tabs.Content value={3}>
        <CodeBlock value="typescript" lang="typescript" code={TypeScript} />
      </Tabs.Content>
    </Tabs.Root>
  );
};
