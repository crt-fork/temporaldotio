import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { PHP, TypeScript, Java, Go } from './CodeSnippets';
import { CodeBlock } from './CodeBlock';

export const CodeSwitcher = ({ setTabIndex }) => {
  return (
    <Tabs
      defaultIndex={0}
      onSelect={(index) => setTabIndex(index)}
      className="lg:col-span-7 rounded-lg w-full">
      <TabList className="drop-shadow-lg rounded-tr-lg rounded-tl-lg p-3 ml-2 flex items-center justify-center md:justify-start flex-wrap cursor-pointer space-x-5">
        <Tab selectedClassName="bg-temporalblue text-white p-1 rounded-lg">
          <p>Go</p>
        </Tab>
        <Tab selectedClassName="bg-orange1 text-white p-1 rounded-lg">
          <p>Java</p>
        </Tab>
        <Tab selectedClassName="bg-temporalbrightblue text-white p-1 rounded-lg">
          <p>PHP</p>
        </Tab>
        <Tab selectedClassName="bg-green2 text-white p-1 rounded-lg">
          <p>TypeScript (alpha)</p>
        </Tab>
      </TabList>
      <TabPanel>
        <CodeBlock lang="go" code={Go} />
      </TabPanel>
      <TabPanel>
        <CodeBlock lang="java" code={Java} />
      </TabPanel>
      <TabPanel>
        <CodeBlock lang="php" code={PHP} />
      </TabPanel>
      <TabPanel>
        <CodeBlock lang="typescript" code={TypeScript} />
      </TabPanel>
    </Tabs>
  );
};
