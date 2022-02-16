import React, { useState } from 'react';
import { InlineWidget } from "react-calendly";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import clsx from 'clsx';

export default function OfficeHoursCta({ sessions = [], btnCopy = '', className }) {
  const [show, setShow] = useState(false);
  const [officeSession, setOfficeSession] = useState(undefined);

  const handleClose = () => setShow(false);
  const toggleShow = (val = false) => {
    if (typeof val !== undefined) {
      setShow(val)
    }
    setShow(!show);
  };
  const selectSession = (link = undefined) => {
    if (!!link && link !== officeSession) {
      setOfficeSession(link)
      setShow(true);
    }
  }
  // TODO: extract modal and create Global Modal Provider to trigger modal with content
  return (
    <>
      <Dropdown align="end">
        <Dropdown.Toggle className={clsx('mb-10 sm:mb-0  focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 font-medium h-12 px-6 rounded-lg w-full flex items-center transition justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 bg-slate-900 hover:bg-slate-700 text-white', className)}>
          {btnCopy}
          <img className='dropdown-chevron ml-[12px]' alt="" src="/images/icons/chevron.svg"></img>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {sessions.map((officeHours, i) => (
            <Dropdown.Item
              key={`office-hours-${i}`}
              onClick={() => selectSession(officeHours.link)}>
              {officeHours.copy}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <Modal show={show} onHide={() => toggleShow(false)}>
        <Modal.Header className='flex justify-end'>
          <button
            type="button"
            onClick={() => toggleShow(false)}
            className="py-4 px-5"
            aria-label="Close">
            <FontAwesomeIcon
              title="close modal icon"
              className='h-5'
              alt='close modal icon'
              icon={['fal', 'times']} />
          </button>
        </Modal.Header>
        <Modal.Body>
          <InlineWidget url={officeSession}
          styles={{
            height: '700px',
            width: '1000px',
            maxWidth: '100%',
          }}
          pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: false,
            hideLandingPageDetails: true,
            primaryColor: '00a2ff',
            textColor: '111827'
          }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
