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
        <p>
          <span style={{ color: '#89DDFF' }}>func</span>
          <span style={{ color: '#A6ACCD' }}> </span>
          <span style={{ color: '#82AAFF' }}>RemindUserWorkflow</span>
          <span style={{ color: '#89DDFF' }}>(</span>
          <span style={{ color: '#A6ACCD' }}>ctx workflow</span>
          <span style={{ color: '#89DDFF' }}>.</span>
          <span style={{ color: '#A6ACCD' }}>Context</span>
          <span style={{ color: '#89DDFF' }}>,</span>
          <span style={{ color: '#A6ACCD' }}> userID </span>
          <span style={{ color: '#C792EA' }}>string</span>
          <span style={{ color: '#89DDFF' }}>,</span>
          <span style={{ color: '#A6ACCD' }}> intervals </span>
          <span style={{ color: '#89DDFF' }}>[]</span>
          <span style={{ color: '#C792EA' }}>int</span>
          <span style={{ color: '#89DDFF' }}>)</span>
          <span style={{ color: '#A6ACCD' }}> </span>
          <span style={{ color: '#C792EA' }}>error</span>
          <span style={{ color: '#A6ACCD' }}> </span>
          <span style={{ color: '#89DDFF' }}>{'{'}</span>
        </p>
        <p>
          <span style={{ color: '#A6ACCD' }}>{'  '}</span>
          <span style={{ color: '#676E95', fontStyle: 'italic' }}>//</span>
          <span style={{ color: '#90EE90', fontStyle: 'italic' }}>
            {' '}
            Send reminder emails, e.g. after 1, 7, and 30 days
          </span>
        </p>
        <p>
          <span style={{ color: '#A6ACCD' }}>{'  '}</span>
          <span style={{ color: '#89DDFF', fontStyle: 'italic' }}>for</span>
          <span style={{ color: '#A6ACCD' }}> _</span>
          <span style={{ color: '#89DDFF' }}>,</span>
          <span style={{ color: '#A6ACCD' }}> interval </span>
          <span style={{ color: '#89DDFF' }}>:=</span>
          <span style={{ color: '#A6ACCD' }}> </span>
          <span style={{ color: '#89DDFF', fontStyle: 'italic' }}>range</span>
          <span style={{ color: '#A6ACCD' }}> intervals </span>
          <span style={{ color: '#89DDFF' }}>{'{'}</span>
        </p>
        <p>
          <span style={{ color: '#A6ACCD' }}>{'    '}_ </span>
          <span style={{ color: '#89DDFF' }}>=</span>
          <div className="border-b-2 border-dotted border-offwhite inline cursor-pointer">
            <Tippy
              arrow={true}
              placement="left"
              theme="dark"
              content="This function can sleep for days then the workflow will continue execution!">
              <div className="inline">
                <span style={{ color: '#A6ACCD' }}> workflow</span>
                <span style={{ color: '#89DDFF' }}>.</span>
                <span style={{ color: '#82AAFF' }}>Sleep</span>
                <span style={{ color: '#89DDFF' }}>(</span>
                <span style={{ color: '#A6ACCD' }}>interval </span>
                <span style={{ color: '#89DDFF' }}>*</span>
                <span style={{ color: '#A6ACCD' }}> 24 </span>
                <span style={{ color: '#89DDFF' }}>*</span>
                <span style={{ color: '#A6ACCD' }}> time</span>
                <span style={{ color: '#89DDFF' }}>.</span>
                <span style={{ color: '#A6ACCD' }}>Hour</span>
                <span style={{ color: '#89DDFF' }}>)</span>
              </div>
            </Tippy>
          </div>
          <span style={{ color: '#A6ACCD' }}>{'                            '}</span>
        </p>
        <p>
          <span style={{ color: '#A6ACCD' }}>{'    '}_ </span>
          <span style={{ color: '#89DDFF' }}>=</span>
          <div className="border-b-2 border-dotted border-offwhite inline cursor-pointer">
            <Tippy
              arrow={true}
              placement="left"
              theme="dark"
              content="Activities are retried by default!">
              <div className="inline">
                <span style={{ color: '#A6ACCD' }}> </span>
                <span style={{ color: '#A6ACCD' }}>workflow</span>
                <span style={{ color: '#89DDFF' }}>.</span>
                <span style={{ color: '#82AAFF' }}>ExecuteActivity</span>
                <span style={{ color: '#89DDFF' }}>(</span>
                <span style={{ color: '#A6ACCD' }}>ctx</span>
                <span style={{ color: '#89DDFF' }}>,</span>
                <span style={{ color: '#A6ACCD' }}> SendEmail</span>
                <span style={{ color: '#89DDFF' }}>,</span>
                <span style={{ color: '#A6ACCD' }}> userID</span>
                <span style={{ color: '#89DDFF' }}>).</span>
                <span style={{ color: '#82AAFF' }}>Get</span>
                <span style={{ color: '#89DDFF' }}>(</span>
                <span style={{ color: '#A6ACCD' }}>ctx</span>
                <span style={{ color: '#89DDFF' }}>,</span>
                <span style={{ color: '#A6ACCD' }}> </span>
                <span style={{ color: '#89DDFF' }}>nil)</span>
              </div>
            </Tippy>
          </div>
        </p>
        <p>
          <span style={{ color: '#A6ACCD' }}>{'  '}</span>
          <span style={{ color: '#89DDFF' }}>{'}'}</span>
        </p>
        <p>
          <span style={{ color: '#A6ACCD' }}>{'  '}</span>
          <span style={{ color: '#676E95', fontStyle: 'italic' }}>//</span>
          <span style={{ color: '#90EE90', fontStyle: 'italic' }}>
            {' '}
            Easily cancelled when user unsubscribes
          </span>
        </p>
        <p>
          <span style={{ color: '#89DDFF' }}>{'}'}</span>
        </p>
      </code>
    </pre>
  );
};
