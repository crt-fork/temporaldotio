import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export const Go = () => {
  return (
    <pre
      style={{ backgroundColor: '#292D3E' }}
      className="p-4 rounded-br-lg rounded-bl-lg overflow-auto line-numbers
    ">
      <code className="overflow">
        <span style="display:block">
          <span style="color: #89DDFF">func</span>
          <span style="color: #A6ACCD"> </span>
          <span style="color: #82AAFF">RemindUserWorkflow</span>
          <span style="color: #89DDFF">(</span>
          <span style="color: #A6ACCD">ctx workflow</span>
          <span style="color: #89DDFF">.</span>
          <span style="color: #A6ACCD">Context</span>
          <span style="color: #89DDFF">,</span>
          <span style="color: #A6ACCD"> userID </span>
          <span style="color: #C792EA">string</span>
          <span style="color: #89DDFF">,</span>
          <span style="color: #A6ACCD"> intervals </span>
          <span style="color: #89DDFF">[]</span>
          <span style="color: #C792EA">int</span>
          <span style="color: #89DDFF">)</span>
          <span style="color: #A6ACCD"> </span>
          <span style="color: #C792EA">error</span>
          <span style="color: #A6ACCD"> </span>
          <span style="color: #89DDFF">{'{'}</span>
        </span>
        <span style="display:block">
          <span style="color: #A6ACCD"> </span>
          <span style="color: #90EE90; font-style: italic">
            // Send reminder emails, e.g. after 1, 7, and 30 days
          </span>
        </span>
        <span style="display:block">
          <span style="color: #A6ACCD"> </span>
          <span style="color: #89DDFF; font-style: italic">for</span>
          <span style="color: #A6ACCD"> _</span>
          <span style="color: #89DDFF">,</span>
          <span style="color: #A6ACCD"> interval </span>
          <span style="color: #89DDFF">:=</span>
          <span style="color: #A6ACCD"> </span>
          <span style="color: #89DDFF; font-style: italic">range</span>
          <span style="color: #A6ACCD"> intervals </span>
          <span style="color: #89DDFF">{'{'}</span>
        </span>
        <span style="display:block">
          <span style="color: #A6ACCD">{'    '}_ </span>
          <span style="color: #89DDFF">=</span>
          <span style="color: #A6ACCD"> workflow</span>
          <span style="color: #89DDFF">.</span>
          <span style="color: #82AAFF">Sleep</span>
          <span style="color: #89DDFF">(</span>
          <span style="color: #A6ACCD">ctx</span>
          <span style="color: #89DDFF">,</span>
          <span style="color: #A6ACCD"> </span>
          <span style="color: #82AAFF">days</span>
          <span style="color: #89DDFF">(</span>
          <span style="color: #A6ACCD">interval</span>
          <span style="color: #89DDFF">))</span>
          <span style="color: #A6ACCD"> </span>
          <span style="color: #90EE90; font-style: italic">// Sleep for days!</span>
        </span>
        <span style="display:block">
          <span style="color: #A6ACCD">{'    '}_ </span>
          <span style="color: #89DDFF">=</span>
          <span style="color: #A6ACCD"> workflow</span>
          <span style="color: #89DDFF">.</span>
          <span style="color: #82AAFF">ExecuteActivity</span>
          <span style="color: #89DDFF">(</span>
          <span style="color: #A6ACCD">ctx</span>
          <span style="color: #89DDFF">,</span>
          <span style="color: #A6ACCD"> SendEmail</span>
          <span style="color: #89DDFF">,</span>
          <span style="color: #A6ACCD"> userID</span>
          <span style="color: #89DDFF">).</span>
          <span style="color: #82AAFF">Get</span>
          <span style="color: #89DDFF">(</span>
          <span style="color: #A6ACCD">ctx</span>
          <span style="color: #89DDFF">,</span>
          <span style="color: #A6ACCD"> </span>
          <span style="color: #89DDFF">nil)</span>
          <span style="color: #A6ACCD"> </span>
        </span>
        <span style="display:block">
          <span style="color: #A6ACCD">{'    '}</span>
          <span style="color: #90EE90; font-style: italic">
            // Activities have timeouts, and will be retried by default!
          </span>
        </span>
        <span style="display:block">
          <span style="color: #A6ACCD"> </span>
          <span style="color: #89DDFF">{'}'}</span>
        </span>
        <span style="display:block">
          <span style="color: #A6ACCD"> </span>
          <span style="color: #90EE90; font-style: italic">// ...</span>
        </span>
        <span style="display:block">
          <span style="color: #89DDFF">{'}'}</span>
        </span>
        <span style="display:block"></span>
      </code>
    </pre>
  );
};
