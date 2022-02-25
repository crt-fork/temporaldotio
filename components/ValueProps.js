import Image from 'next/image';

export default function ValueProps({ copy = {} }) {
  return (
    <div className="container">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-slate-900 font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-center dark:text-white">Get it all out-of-the-box</h2>
        <p className="mt-6 text-lg text-center max-w-3xl mx-auto dark:text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla ac nunc non molestie. Nam lectus augue, luctus eget rhoncus tincidunt, gravida eu nibh.</p>
        div.
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 mx-auto'>
        <div className="h-full w-full rounded-lg border-solid border-gray-300 flex flex-col items-start">
          {/* <Image /> */}
          <h3 className="text-2xl tracking-wide font-semibold">Test</h3>
          <p className="">some text description of whatever thing this is about</p>
        </div>
        <div className="h-full w-full rounded-lg border-solid border-gray-300 flex flex-col items-start">
          {/* <Image /> */}
          <h3 className="text-2xl tracking-wide font-semibold">Test</h3>
          <p className="">some text description of whatever thing this is about</p>
        </div>
        <div className="h-full w-full rounded-lg border-solid border-gray-300 flex flex-col items-start">
          {/* <Image /> */}
          <h3 className="text-2xl tracking-wide font-semibold">Test</h3>
          <p className="">some text description of whatever thing this is about</p>
        </div>
      </div>
    </div>
  )
}
