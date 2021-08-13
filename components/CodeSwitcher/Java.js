import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export const Java = () => {
  return (
    <pre
      className="p-4 rounded-br-lg rounded-bl-lg overflow-auto line-numbers"
      style={{ backgroundColor: '#292D3E' }}>
      <code>
        <p style={{ display: 'block' }}>
          <span style={{ color: '#C792EA' }}>public</span>
          <span style={{ color: '#A6ACCD' }}> </span>
          <span style={{ color: '#C792EA' }}>static</span>
          <span style={{ color: '#A6ACCD' }}> </span>
          <span style={{ color: '#C792EA' }}>class</span>
          <span style={{ color: '#A6ACCD' }}> </span>
          <span style={{ color: '#FFCB6B' }}>RemindUserWorkflowImpl</span>
          <span style={{ color: '#A6ACCD' }}> </span>
          <span style={{ color: '#C792EA' }}>implements</span>
          <span style={{ color: '#A6ACCD' }}> </span>
          <span style={{ color: '#FFCB6B' }}>RemindUserWorkflow</span>
          <span style={{ color: '#A6ACCD' }}> </span>
          <span style={{ color: '#89DDFF' }}>{'{ '}</span>
        </p>
        <p style={{ display: 'block' }}>
          <span style={{ color: '#A6ACCD' }}>{'  '}</span>
          <span style={{ color: '#C792EA' }}>public</span>
          <span style={{ color: '#A6ACCD' }}> </span>
          <span style={{ color: '#C792EA' }}>void</span>
          <span style={{ color: '#A6ACCD' }}> </span>
          <span style={{ color: '#82AAFF' }}>EmailUser</span>
          <span style={{ color: '#89DDFF' }}>(</span>
          <span style={{ color: '#C792EA' }}>String</span>
          <span style={{ color: '#A6ACCD' }}> userId</span>
          <span style={{ color: '#89DDFF' }}>,</span>
          <span style={{ color: '#A6ACCD' }}> </span>
          <span style={{ color: '#C792EA' }}>int</span>
          <span style={{ color: '#89DDFF' }}>[]</span>
          <span style={{ color: '#A6ACCD' }}> intervals</span>
          <span style={{ color: '#89DDFF' }}>)</span>
          <span style={{ color: '#A6ACCD' }}> </span>
          <span style={{ color: '#89DDFF' }}>{'{ '}</span>
        </p>
        <p style={{ display: 'block' }}>
          <span style={{ color: '#89DDFF' }}>{'    '}</span>
          <span style={{ color: '#676E95', fontStyle: 'italic' }}>//</span>
          <span style={{ color: '#90EE90', fontStyle: 'italic' }}>
            {' '}
            Send reminder emails, e.g. after 1, 7, and 30 days
          </span>
        </p>
        <p style={{ display: 'block' }}>
          <span style={{ color: '#A6ACCD' }}>{'    '}</span>
          <span style={{ color: '#89DDFF', fontStyle: 'italic' }}>for</span>
          <span style={{ color: '#A6ACCD' }}> </span>
          <span style={{ color: '#89DDFF' }}>(</span>
          <span style={{ color: '#C792EA' }}>int</span>
          <span style={{ color: '#A6ACCD' }}> interval </span>
          <span style={{ color: '#89DDFF', fontStyle: 'italic' }}>:</span>
          <span style={{ color: '#A6ACCD' }}> intervals</span>
          <span style={{ color: '#89DDFF' }}>)</span>
          <span style={{ color: '#A6ACCD' }}> </span>
          <span style={{ color: '#89DDFF' }}>{'{'}</span>
          <span style={{ color: '#A6ACCD' }}>{'   '}</span>
        </p>
        <p style={{ display: 'block' }}>
          <span style={{ color: '#A6ACCD' }}>{'      '}</span>
          <div className="border-b-2 border-dotted border-offwhite inline cursor-pointer">
            <Tippy
              arrow={true}
              placement="left"
              theme="dark"
              content="This function can sleep for days then the workflow will continue execution!">
              <div className="inline">
                <span style={{ color: '#A6ACCD' }}>Workflow</span>
                <span style={{ color: '#89DDFF' }}>.</span>
                <span style={{ color: '#82AAFF' }}>sleep</span>
                <span style={{ color: '#89DDFF' }}>(</span>
                <span style={{ color: '#A6ACCD' }}>Duration</span>
                <span style={{ color: '#89DDFF' }}>.</span>
                <span style={{ color: '#82AAFF' }}>ofDays</span>
                <span style={{ color: '#89DDFF' }}>(</span>
                <span style={{ color: '#A6ACCD' }}>interval</span>
                <span style={{ color: '#89DDFF' }}>));</span>
              </div>
            </Tippy>
          </div>
        </p>
        <p style={{ display: 'block' }}>
          <span style={{ color: '#A6ACCD' }}>{'      '}</span>
          <div className="border-b-2 border-dotted border-offwhite inline cursor-pointer">
            <Tippy
              arrow={true}
              placement="left"
              theme="dark"
              content="Activities are retried by default!">
              <div className="inline">
                <span style={{ color: '#A6ACCD' }}>activities</span>
                <span style={{ color: '#89DDFF' }}>.</span>
                <span style={{ color: '#82AAFF' }}>sendEmail</span>
                <span style={{ color: '#89DDFF' }}>(</span>
                <span style={{ color: '#A6ACCD' }}>interval</span>
                <span style={{ color: '#89DDFF' }}>,</span>
                <span style={{ color: '#A6ACCD' }}> userId</span>
                <span style={{ color: '#89DDFF' }}>);</span>
              </div>
            </Tippy>
          </div>
          <span style={{ color: '#A6ACCD' }}>{'    '}</span>
        </p>
        <p style={{ display: 'block' }}>
          <span style={{ color: '#A6ACCD' }}>{'    '}</span>
          <span style={{ color: '#89DDFF' }}>{' } '}</span>
        </p>
        <p style={{ display: 'block' }}>
          <span style={{ color: '#89DDFF' }}>{'    '}</span>
          <span style={{ color: '#676E95', fontStyle: 'italic' }}>//</span>
          <span style={{ color: '#90EE90', fontStyle: 'italic' }}>
            {' '}
            Easily cancelled when user unsubscribes
          </span>
        </p>
        <p style={{ display: 'block' }}>
          <span style={{ color: '#A6ACCD' }}>{'  '}</span>
          <span style={{ color: '#89DDFF' }}>{'  } '}</span>
        </p>
        <p style={{ display: 'block' }}>
          <span style={{ color: '#89DDFF' }}>{'} '}</span>
        </p>
      </code>
    </pre>
  );
};
