import React, { useState } from 'react';
import { CodeSwitcher } from './CodeSwitcher';

export const TemporalClient = () => {
  // const [lang, setLang] = useLocalStorage('preferredLang', null);
  const [lang, setLang] = useState(null);
  const link =
    {
      Go: 'https://docs.temporal.io/docs/go/getting-started',
      Java: 'https://docs.temporal.io/docs/java/introduction',
      PHP: 'https://docs.temporal.io/docs/php/introduction',
      TypeScript: 'https://docs.temporal.io/docs/typescript/introduction'
    }[lang] || 'https://docs.temporal.io';
  return (
    <section className="mt-12 mb-28 rounded-lg md:shadow-blue container mx-auto p-4 bg-gray-800">
      <div className="md:p-10 max-w-screen-2xl w-full mx-auto">
        <h2 className="text-xl mb-3 text-gray-100">Temporal SDKs</h2>
        <h3 className="text-4xl md:text-5xl font-bold">No more JSON or YAML</h3>
        <p className="my-5 max-w-2xl text-lg md:text-xl">
          Easily write, reuse, test, version, and migrate dynamic asynchronous logic with idiomatic
          APIs. Use software engineering best practices, whether you are writing Infra Provisioning
          automation, wrangling a Data pipeline, or even building a domain specific Workflow Engine!
        </p>
        <a href={link} className="text-blue-100 text-lg hover:underline">
          See {lang ?? 'Language'} SDK docs
        </a>
        <div className="mt-12 gap-10 grid grid-cols-1 lg:grid-cols-12 place-items-end">
          <div className="lg:col-span-5 space-y-3">
            <p className=" border-l-4 border-l-green-400 bg-green-500 p-5 rounded-lg">
              Workflows orchestrate the execution of activities, which are particular tasks in your
              business logic{' '}
            </p>
            <p className=" border-l-4 border-l-red-400 bg-red-500 p-5 rounded-lg">
              Activities can sleep for days, and can continue right where they left off
            </p>
            <p className=" border-l-4 border-l-blue-400 bg-blue-500 p-5 rounded-lg">
              Activities have timeouts, and will be retried by default!
            </p>
          </div>
          <CodeSwitcher lang={lang} setLang={setLang} />
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
