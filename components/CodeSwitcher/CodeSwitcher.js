import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Go } from './Go';
import { TypeScript } from './TypeScript';
import { Java } from './Java';
import { PHP } from './PHP';

export const CodeSwitcher = () => {
  return (
    <div>
      <Tabs
        className="bg-[#292D3E] rounded-lg p-4 max-w-lg  w-full shadow-temporalblue"
        style={{ minWidth: '900px' }}>
        <div className="flex mb-4 ml-6">
          <span className="h-3 w-3 bg-[#4A5568] rounded-full"></span>{' '}
          <span className="ml-2 h-3 w-3 bg-[#4A5568] rounded-full"></span>{' '}
          <span className="ml-2 h-3 w-3 bg-[#4A5568] rounded-full"></span>
        </div>
        <TabList className="text-white drop-shadow-lg rounded-tr-lg rounded-tl-lg p-2 ml-2 flex cursor-pointer space-x-5 overflow-auto">
          <Tab selectedClassName="bg-temporalblue text-spaceblack p-1 rounded-lg">
            <p>Go</p>
          </Tab>
          <Tab selectedClassName="bg-orange1 text-spaceblack p-1 rounded-lg">
            <p>Java</p>
          </Tab>
          <Tab selectedClassName="bg-temporalbrightblue text-spaceblack p-1 rounded-lg">
            <p>PHP</p>
          </Tab>
          <Tab selectedClassName="bg-green1 text-spaceblack p-1 rounded-lg">
            <p>TypeScript (alpha)</p>
          </Tab>
        </TabList>
        <TabPanel>
          <Go />
        </TabPanel>
        <TabPanel>
          <Java />
        </TabPanel>
        <TabPanel>
          <PHP />
        </TabPanel>
        <TabPanel>
          <TypeScript />
        </TabPanel>
      </Tabs>
    </div>
  );
};
