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
        <svg
          className="w-12 h-12 transform transition duration-300 hover:scale-110"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clipRule="evenodd"
          />
        </svg>
        <div className="text-left">
          <p className="text-2xl">How it works</p>
          <p className="text-lg font-light">2 min video</p>
        </div>
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
                  <iframe
                    className={`absolute top-0 left-0  w-full h-full`}
                    width="1424"
                    height="652"
                    src={`https://www.youtube.com/embed/f-18XztyN6c?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
