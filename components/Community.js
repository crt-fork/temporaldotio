import React from 'react';
import Image from 'next/image';

import DirectionalControl from './DirectionalControl';
export const Community = () => {
  return (
    <>
      <section className="mt-24 max-w-screen-2xl py-28 mx-auto flex flex-col items-center justify-center px-4 md:px-8">
        <h2 className="text-center text-3xl font-bold sm:text-6xl mb-5">
          Meetups, Workshops, Tutorials
        </h2>
        <p className="mt-5 mb-16 text-center text-lg max-w-md mx-auto">
          Join{' '}
          <a
            href="https://temporal.io/meetup"
            className="text-blue-200 hover:text-blue-100 hover:underline">
            our meetups live
          </a>{' '}
          (they are lots of fun!) or catch up async on{' '}
          <a
            href="https://temporal.io/youtube"
            className="text-blue-200 hover:text-blue-100 hover:underline">
            our YouTube channel
          </a>
          !
        </p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          <a
            href="https://www.youtube.com/watch?v=Crkcr1S-NSc"
            className="mx-auto transition transform hover:-translate-y-1">
            <Image
              className="rounded-lg object-fill"
              src="/yt-stripe-temporal.png"
              width="350"
              height="200"
            />
            <p className="text-lg text-center mt-5">How Stripe uses Temporal</p>
          </a>
          <a
            href="https://www.youtube.com/watch?v=LliBP7YMGyA"
            className="mx-auto transition transform hover:-translate-y-1">
            <Image
              className="rounded-lg object-fill"
              src="/yt-netflix-temporal.png"
              width="350"
              height="200"
            />
            <p className="text-lg text-center mt-5">How Netflix uses Temporal</p>
          </a>
          <a
            href="https://www.youtube.com/watch?v=VoSiIwkvuX0"
            className="mx-auto transition transform hover:-translate-y-1">
            <Image
              className="rounded-lg object-fill"
              src="/yt-java-workshop.png"
              width="350"
              height="200"
            />
            <p className="text-lg text-center mt-5">Temporal Intro Workshop with Java</p>
          </a>
        </div>
        <div className="mt-12 flex justify-center">
          <DirectionalControl secondary href="https://temporal.io/youtube">
            More on YouTube
          </DirectionalControl>
        </div>
      </section>
      <section className="max-w-screen-2xl py-28 mx-auto flex flex-col items-center justify-center px-4 md:px-8">
        <div className="">
          <h2 className="text-center text-3xl font-bold sm:text-6xl mb-16">
            Join the Temporal Community
          </h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="p-5 rounded-lg mb-10">
              <svg
                className="w-14 h-14 mb-5"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  className="text-gray-700"
                  d="M36 0H12C5.37258 0 0 5.37258 0 12V36C0 42.6274 5.37258 48 12 48H36C42.6274 48 48 42.6274 48 36V12C48 5.37258 42.6274 0 36 0Z"
                  fill="currentColor"
                />
                <path
                  d="M15.8827 27.6938C15.8827 29.3127 14.5603 30.6351 12.9414 30.6351C11.3225 30.6351 10 29.3127 10 27.6938C10 26.0749 11.3225 24.7524 12.9414 24.7524H15.8827V27.6938Z"
                  fill="#E01E5A"
                />
                <path
                  d="M17.3647 27.6938C17.3647 26.0749 18.6872 24.7524 20.3061 24.7524C21.925 24.7524 23.2475 26.0749 23.2475 27.6938V35.0585C23.2475 36.6774 21.925 37.9999 20.3061 37.9999C18.6872 37.9999 17.3647 36.6774 17.3647 35.0585V27.6938Z"
                  fill="#E01E5A"
                />
                <path
                  d="M20.3061 15.8827C18.6872 15.8827 17.3647 14.5603 17.3647 12.9414C17.3647 11.3225 18.6872 10 20.3061 10C21.925 10 23.2475 11.3225 23.2475 12.9414V15.8827H20.3061Z"
                  fill="#36C5F0"
                />
                <path
                  d="M20.3062 17.3647C21.9251 17.3647 23.2476 18.6872 23.2476 20.3061C23.2476 21.925 21.9251 23.2475 20.3062 23.2475H12.9414C11.3225 23.2475 10 21.925 10 20.3061C10 18.6872 11.3225 17.3647 12.9414 17.3647H20.3062Z"
                  fill="#36C5F0"
                />
                <path
                  d="M32.1174 20.3061C32.1174 18.6872 33.4399 17.3647 35.0588 17.3647C36.6777 17.3647 38.0002 18.6872 38.0002 20.3061C38.0002 21.925 36.6777 23.2475 35.0588 23.2475H32.1174V20.3061Z"
                  fill="#2EB67D"
                />
                <path
                  d="M30.6351 20.3062C30.6351 21.9251 29.3127 23.2476 27.6938 23.2476C26.0749 23.2476 24.7524 21.9251 24.7524 20.3062V12.9414C24.7524 11.3225 26.0749 10 27.6938 10C29.3127 10 30.6351 11.3225 30.6351 12.9414V20.3062Z"
                  fill="#2EB67D"
                />
                <path
                  d="M27.6938 32.1172C29.3127 32.1172 30.6351 33.4397 30.6351 35.0586C30.6351 36.6774 29.3127 37.9999 27.6938 37.9999C26.0749 37.9999 24.7524 36.6774 24.7524 35.0586V32.1172H27.6938Z"
                  fill="#ECB22E"
                />
                <path
                  d="M27.6938 30.6351C26.0749 30.6351 24.7524 29.3127 24.7524 27.6938C24.7524 26.0749 26.0749 24.7524 27.6938 24.7524H35.0585C36.6774 24.7524 37.9999 26.0749 37.9999 27.6938C37.9999 29.3127 36.6774 30.6351 35.0585 30.6351H27.6938Z"
                  fill="#ECB22E"
                />
              </svg>
              <h3 className="text-2xl font-semibold mb-5">Join the conversation on Slack</h3>
              <p className="mb-5">
                Engage with a vibrant community of developers and companies adopting Temporal at
                scale
              </p>
              <a
                href="https://temporal.io/slack"
                className="text-blue-200 font-medium text-lg hover:underline">
                Join Temporal on Slack
              </a>
            </div>
            <div className="p-5 rounded-lg">
              <svg
                className="flex-none w-12 h-12 mb-5"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  className="text-gray-700"
                  d="M36 0H12C5.37258 0 0 5.37258 0 12V36C0 42.6274 5.37258 48 12 48H36C42.6274 48 48 42.6274 48 36V12C48 5.37258 42.6274 0 36 0Z"
                  fill="currentColor"></path>
                <path
                  d="M30.3095 17.6905C29.4593 11.3193 27.3067 6 24 6C20.6942 6 18.5416 11.3184 17.6905 17.6905C11.3193 18.5407 6 20.6933 6 24C6 27.3058 11.3193 29.4584 17.6905 30.3095C18.5407 36.6798 20.6933 42 24 42C27.3058 42 29.4584 36.6807 30.3095 30.3095C36.6807 29.4584 42 27.3067 42 24C42 20.6933 36.6798 18.5407 30.3095 17.6905ZM17.4833 28.4526C11.381 27.5711 7.82284 25.5539 7.82284 23.9991C7.82284 22.4443 11.3819 20.4271 17.4833 19.5456C17.3488 21.0147 17.2788 22.5143 17.2788 23.9991C17.2788 25.4839 17.3488 26.9853 17.4833 28.4526ZM24.0009 7.82192C25.5557 7.82192 27.5729 11.381 28.4544 17.4823C26.9862 17.3479 25.4857 17.2779 24.0009 17.2779C22.5161 17.2779 21.0157 17.3479 19.5474 17.4823C20.4289 11.3801 22.4461 7.82192 24.0009 7.82192ZM30.5177 28.4526C30.2174 28.4968 28.985 28.6405 28.6736 28.6718C28.6432 28.984 28.4977 30.2155 28.4544 30.5158C27.5729 36.6181 25.5557 40.1772 24.0009 40.1772C22.4461 40.1772 20.4289 36.6181 19.5474 30.5158C19.5041 30.2155 19.3586 28.9831 19.3282 28.6718C19.1864 27.2257 19.1007 25.6718 19.1007 23.9991C19.1007 22.3273 19.1864 20.7734 19.3282 19.3255C20.7743 19.1836 22.3282 19.0979 24.0009 19.0979C25.6727 19.0979 27.2266 19.1836 28.6736 19.3255C28.9859 19.3558 30.2174 19.5014 30.5177 19.5447C36.6199 20.4262 40.1799 22.4443 40.1799 23.9982C40.179 25.552 36.6199 27.5711 30.5177 28.4526Z"
                  fill="currentColor"></path>
              </svg>
              <h3 className="text-2xl font-semibold mb-5">Temporal Community Forum</h3>
              <p className="mb-5">
                This is a place to ask questions and have discussions about anything related to
                Temporal!
              </p>
              <a
                href="https://community.temporal.io"
                className="text-blue-200 font-medium text-lg hover:underline">
                Join the Temporal Community
              </a>
            </div>
          </div>
          <div className="p-6 rounded-lg bg-gray-700 w-full flex flex-wrap items-center md:space-x-5">
            <div className="max-w-md">
              <h3 className="text-2xl font-semibold mb-2">Subscribe to the newsletter</h3>
              <p className="mb-5 text-lg">Keep up with the latest features and news on Temporal!</p>
            </div>
            <form
              action="https://temporal.us17.list-manage.com/subscribe/post?u=2334a0f23e55fd1840613755d&amp;id=bbbbd4709f"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              target="_blank"
              noValidate=""
              className="sm:flex flex-grow">
              <label htmlFor="mce-EMAIL" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="EMAIL"
                id="mce-EMAIL"
                required="true"
                autoComplete="email"
                className="px-5 py-3 text-gray-100 rounded-md border-gray-300 placeholder-yellow-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full sm:max-w-xs bg-gray-400"
                placeholder="Enter your email"
              />
              <span className="cta_text" style="display:none">
                You are on the waitlist!
              </span>
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  name="waitlist"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md bg-blue-300 hover:opacity-90 ">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
