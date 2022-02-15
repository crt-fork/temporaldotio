import React from 'react';
import ColumnLayout from './ColumnLayout';
import { CodeWindow } from './CodeWindow';

export default function TextAndCode({
  left, right, leftProps, rightProps
}) {
  return <ColumnLayout
    left={
      <div className="lg:col-span-7 xl:col-span-6 lg:row-end-1">
        <h2 className="mt-8 font-semibold text-sky-500">Component-driven</h2><p className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50 ">
          Worried about duplication? Don&apos;t&nbsp;be.</p><p className="mt-4 max-w-3xl space-y-6 ">If you&apos;re repeating the same utilities over and over and over again, all you have to do is extract them into a component or template partial and boom — you&apos;ve got a single source of truth so you can make changes in one place.</p>
      </div>
    }
    right={
      <CodeWindow>
        <CodeWindow.Code
          tokens={tokens}
          tokenProps={{ theme }}
        />
      </CodeWindow>
    }
  />;
}
