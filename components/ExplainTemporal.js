import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useRef } from 'react';

export default function ExplainTemporal() {
  let [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <button className="flex items-center justify-center space-x-3" onClick={openModal}>
        <div>
          <p className="text-2xl">How it works</p>
          <p className="text-lg font-light">2 min video</p>
        </div>
        <svg
          className="w-12 h-12 transform transition duration-300 hover:scale-110"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill="#C7EDEF"
            stroke="#C7EDEF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 8L16 12L10 16V8Z"
            fill="black"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          initialFocus={videoRef}
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-spaceblack opacity-80" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <div className="inline-block w-full max-w-7xl my-8 overflow-hidden text-left align-middle transition-all transform shadow-temporalblue rounded-lg">
                <div
                  className=" h-0 relative overflow-hidden shadow-temporalblue"
                  style={{ paddingBottom: '56.25%' }}>
                  <video
                    ref={videoRef}
                    autoPlay={true}
                    loop={true}
                    controls={true}
                    className="rounded-lg absolute top-0 left-0 w-full h-full">
                    <track kind="captions" />
                    <source type="video/mp4" src="/temporal-in-two-minutes.mp4"></source>
                  </video>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
