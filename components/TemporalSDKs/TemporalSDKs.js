import React, { useState } from 'react';
import { CodeSwitcher } from './CodeSwitcher';

export const TemporalSDKs = () => {
  // const [lang, setLang] = useLocalStorage('preferredLang', null);
  const [lang, setLang] = useState(null);
  const link =
    {
      Go: 'https://docs.temporal.io/docs/go/getting-started',
      Java: 'https://docs.temporal.io/docs/java/introduction',
      TypeScript: 'https://docs.temporal.io/docs/typescript/introduction',
      PHP: 'https://docs.temporal.io/docs/php/introduction'
    }[lang] || 'https://docs.temporal.io';

  return (
    <section className=" mb-28 rounded-lg md:shadow-blue container mx-auto p-4 bg-gray-800">
      <div className="md:p-10 max-w-screen-2xl w-full mx-auto">
        <h2 className="text-xl mb-3 text-gray-100">Temporal SDKs</h2>
        <h3 className="text-4xl md:text-5xl font-bold">Workflows as Code.</h3>
        <p className="my-5 max-w-2xl text-lg md:text-xl md:leading-relaxed md:text-justify">
          Write, reuse, test, and migrate dynamic asynchronous logic with idiomatic SDKs. Use
          software engineering best practices, whether you are automating Infra Provisioning,
          wrangling a Data pipeline, or even creating an SDK or DSL to offer Workflows on your own
          platform!
        </p>
        <div className="mt-12 gap-10 grid grid-cols-1 lg:grid-cols-12 place-items-start">
          <CodeSwitcher lang={lang} setLang={setLang} />
          <div className="lg:col-span-5 ">
            <div className="space-y-3">
              <p className=" border-l-4 border-l-blue-400 bg-blue-500 p-5 rounded-lg">
                Workflows orchestrate the execution of Activities, persisting every state change and
                executed on a scalable fleet of Workers!
              </p>
              <p className=" border-l-4 border-l-green-400 bg-green-500 p-5 rounded-lg">
                Workflows can block for any length of time, condition, or human signal and
                seamlessly resume from any failure!
              </p>
              <p className=" border-l-4 border-l-purple-400 bg-purple-500 p-5 rounded-lg">
                Activities have durable timeouts and retries by default!
              </p>
            </div>
            <a
              className="mt-4 space-x-2 flex items-center text-xl text-blue-200 hover:underline"
              href={link}>
              <span>View {lang ?? 'Language'} SDK docs</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// function useLocalStorage(key, initialValue) {
//   // State to store our value
//   // Pass initial state function to useState so logic is only executed once
//   const [storedValue, setStoredValue] = useState(() => {
//     try {
//       // Get from local storage by key
//       if (typeof window !== 'undefined') {
//         const item = window.localStorage.getItem(key);
//         // Parse stored json or if none return initialValue
//         return item ? JSON.parse(item) : initialValue;
//       } else {
//         return initialValue
//       }
//     } catch (error) {
//       // If error also return initialValue
//       console.log(error);
//       return initialValue;
//     }
//   });
//   // Return a wrapped version of useState's setter function that ...
//   // ... persists the new value to localStorage.
//   const setValue = (value) => {
//     try {
//       // Allow value to be a function so we have same API as useState
//       const valueToStore = value instanceof Function ? value(storedValue) : value;
//       // Save state
//       setStoredValue(valueToStore);
//       // Save to local storage
//       window.localStorage.setItem(key, JSON.stringify(valueToStore));
//     } catch (error) {
//       // A more advanced implementation would handle the error case
//       console.log(error);
//     }
//   };
//   return [storedValue, setValue];
// }
