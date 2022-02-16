import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { v4 as uuid } from "uuid";

export default function Expander({children, expandedCopy, closedCopy}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState('0px');
  const [uniqueId, setUniqueId] = useState(null);
  const expanderRef = useRef();

  const toggleExpander = (val) => {
    if (typeof val !== undefined) {
      setIsExpanded(val);
    }
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (!uniqueId) {
      setUniqueId(uuid());
    }
  }, []);

  useEffect(() => {
    setHeight(isExpanded ? `${expanderRef.current.scrollHeight}px`: '0px')
  }, [isExpanded]);

  return (
    <div className="w-full">
      <div className="mt-8 text-center">
        <button
          onClick={() => toggleExpander(!isExpanded)}
          type="button"
          aria-expanded={isExpanded}
          aria-controls={uniqueId}
          className={clsx(
            "underline text-center text-sm sm:text-2xl text-black hover:text-blue-700",
            isExpanded ? 'text-blue-700' : 'text-black'
          )} >
          <FontAwesomeIcon className="inline-block h-[0.5em] mr-2.5" icon={["fal", isExpanded ? 'minus' : 'plus']}/>
          {isExpanded ? expandedCopy : closedCopy}
        </button>
      </div>
      <div
        id={uniqueId}
        ref={expanderRef}
        style={{ maxHeight: `${height}` }}
        className="overflow-hidden transition-max-height duration-700 ease-in-out"
      >
        <div className="pb-10"
          aria-hidden={!isExpanded}
          hidden={!isExpanded}
          ref={expanderRef}>
          {children}
        </div>
      </div>
    </div>
  );
}
