import React from 'react';

export const Node = () => {
  return (
    <pre
      className="p-4 rounded-br-lg rounded-bl-lg overflow-auto w-full line-numbers"
      style={{ backgroundColor: '#292D3E' }}>
      <code>
        <p style={{ display: 'block' }}>
          <span style={{ color: '#676E95', fontStyle: 'italic' }}>//</span>
          <span style={{ color: '#90EE90', fontStyle: 'italic' }}> workflows/remind-user.js</span>
        </p>
        <p style={{ display: 'block' }}>
          <span style={{ color: '#C792EA' }}>async</span>
          <span style={{ color: '#A6ACCD' }}> </span>
          <span style={{ color: '#C792EA' }}>function</span>
          <span style={{ color: '#A6ACCD' }}> </span>
          <span style={{ color: '#82AAFF' }}>main</span>
          <span style={{ color: '#89DDFF' }}>(</span>
          <span style={{ color: '#A6ACCD' }}>userId</span>
          <span style={{ color: '#89DDFF' }}>,</span>
          <span style={{ color: '#A6ACCD' }}> intervals</span>
          <span style={{ color: '#89DDFF' }}>)</span>

          <span style={{ color: '#89DDFF' }}>{'{ '}</span>
        </p>
        <p style={{ display: 'block' }}>
          <span style={{ color: '#89DDFF' }}>{'  '}</span>
          <span style={{ color: '#676E95', fontStyle: 'italic' }}>//</span>
          <span style={{ color: '#90EE90', fontStyle: 'italic' }}>
            {' '}
            Send reminder emails, e.g. after 1, 7, and 30 days
          </span>
        </p>
        <p style={{ display: 'block' }}>
          <span style={{ color: '#F07178' }}>{'  '}</span>
          <span style={{ color: '#89DDFF', fontStyle: 'italic' }}>for</span>
          <span style={{ color: '#F07178' }}> (</span>
          <span style={{ color: '#C792EA' }}>const</span>
          <span style={{ color: '#F07178' }}> </span>
          <span style={{ color: '#A6ACCD' }}>interval</span>
          <span style={{ color: '#F07178' }}> </span>
          <span style={{ color: '#89DDFF' }}>of</span>
          <span style={{ color: '#F07178' }}> </span>
          <span style={{ color: '#A6ACCD' }}>intervals</span>
          <span style={{ color: '#F07178' }}>) </span>
          <span style={{ color: '#89DDFF' }}>{'{'}</span>
        </p>
        <p style={{ display: 'block' }}>
          <span style={{ color: '#F07178' }}>{'    '}</span>
          <span style={{ color: '#89DDFF', fontStyle: 'italic' }}>await</span>
          <span style={{ color: '#F07178' }}> </span>
          <span style={{ color: '#82AAFF' }}>sleep</span>
          <span style={{ color: '#F07178' }}>(</span>
          <span style={{ color: '#A6ACCD' }}>interval</span>
          <span style={{ color: '#F07178' }}> </span>
          <span style={{ color: '#89DDFF' }}>*</span>
          <span style={{ color: '#F07178' }}> </span>
          <span style={{ color: '#A6ACCD' }}>DAYS</span>
          <span style={{ color: '#F07178' }}>)</span>
          <span style={{ color: '#89DDFF' }}>;</span>
          <span style={{ color: '#F07178' }}> </span>
          <span style={{ color: '#676E95', fontStyle: 'italic' }}>//</span>
          <span style={{ color: '#90EE90', fontStyle: 'italic' }}> Sleep for days!</span>
        </p>
        <p style={{ display: 'block' }}>
          <span style={{ color: '#F07178' }}>{'    '}</span>
          <span style={{ color: '#89DDFF', fontStyle: 'italic' }}>await</span>
          <span style={{ color: '#F07178' }}> </span>
          <span style={{ color: '#A6ACCD' }}>activities</span>
          <span style={{ color: '#89DDFF' }}>.</span>
          <span style={{ color: '#82AAFF' }}>sendEmail</span>
          <span style={{ color: '#F07178' }}>(</span>
          <span style={{ color: '#A6ACCD' }}>interval</span>
          <span style={{ color: '#89DDFF' }}>,</span>
          <span style={{ color: '#F07178' }}> </span>
          <span style={{ color: '#A6ACCD' }}>userId</span>
          <span style={{ color: '#F07178' }}>)</span>
          <span style={{ color: '#89DDFF' }}>;</span>
          <span style={{ color: '#F07178' }}> </span>
          <span style={{ color: '#676E95', fontStyle: 'italic' }}>//</span>
          <span style={{ color: '#90EE90', fontStyle: 'italic' }}>
            {' '}
            Activities retried by default!
          </span>
        </p>
        <p style={{ display: 'block' }}>
          <span style={{ color: '#F07178' }}>{'  '}</span>
          <span style={{ color: '#89DDFF' }}>{' } '}</span>
        </p>
        <p style={{ display: 'block' }}>
          <span style={{ color: '#89DDFF' }}>{'  '}</span>
          <span style={{ color: '#676E95', fontStyle: 'italic' }}>//</span>
          <span style={{ color: '#90EE90', fontStyle: 'italic' }}>
            {' '}
            Easily cancelled when user unsubscribes
          </span>
        </p>
        <p style={{ display: 'block' }}>
          <span style={{ color: '#89DDFF' }}>{' } '}</span>
        </p>
      </code>
    </pre>
  );
};
