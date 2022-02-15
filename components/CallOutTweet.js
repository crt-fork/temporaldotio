import React from 'react';
import TweetEmbed from 'react-tweet-embed'
import lineBreak from '@/utilities/lineBreak';
export default function CallOutTweet({ copy = {}, tweetId, className}) {
  return (
    <div className={`${className}`}>
      <div className='container mx-auto px-10 lg:flex lg:text-left lg:content-center'>
        <div className='lg:w-3/5 lg:pr-12'>
          <h3 className='text-4xl sm:text-6xl md:text-8xl mb-6 lg:mb-12 font-bold'>{lineBreak(copy.headline)}</h3>
          <p className='text-2xl mb-6 font-medium xl:text-3xl'>{copy.subhead}</p>
          <p className='mb-10 lg:text-2xl	'>{copy.body}</p>
        </div>

         <TweetEmbed className='lg:w-2/5 lg:flex lg:items-center' id={`${tweetId}`} options={{cards: 'hidden', theme: 'dark' }}/>
      </div>

    </div>
  );
}

