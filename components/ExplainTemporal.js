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
          className="w-12 h-12 transform transition duration-300 hover:scale-110 text-blue-300"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="8" fill="currentColor" className="text-blue-400" />
          <path
            className="text-blue-100"
            d="M9.555 7.168C9.4044 7.06752 9.22935 7.00981 9.04852 7.00103C8.86769 6.99225 8.68786 7.03272 8.52823 7.11813C8.3686 7.20354 8.23516 7.33068 8.14213 7.48599C8.04909 7.6413 7.99997 7.81896 8 8V12C7.99997 12.181 8.04909 12.3587 8.14213 12.514C8.23516 12.6693 8.3686 12.7965 8.52823 12.8819C8.68786 12.9673 8.86769 13.0078 9.04852 12.999C9.22935 12.9902 9.4044 12.9325 9.555 12.832L12.555 10.832C12.692 10.7407 12.8043 10.617 12.8819 10.4718C12.9596 10.3267 13.0002 10.1646 13.0002 10C13.0002 9.83539 12.9596 9.67332 12.8819 9.52818C12.8043 9.38305 12.692 9.25932 12.555 9.168L9.555 7.168Z"
            fill="currentColor"
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
