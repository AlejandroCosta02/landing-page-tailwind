import React from "react";

function Knowledge() {
  return (
    <div className="bg-base-200">
      <div className="bg-base-200 mx-auto sm:w-1/2 sm:mb-6 sm:px-4 py-8 mb-6">
        <div className="bg-gray-200 w-10/12 mx-auto rounded-2xl py-5 px-3">
          <h1 className="text-3xl font-bold">
            Hi, I’m Matt. Nice to meet you.
          </h1>
          <p className="text-xl pt-5">
            Since beginning my journey as a freelance designer over 11 years
            ago, I've done remote work for agencies, consulted for startups, and
            collaborated with talented people to create digital products for
            both business and consumer use. I'm quietly confident, naturally
            curious, and perpetually working on improving my chops one design
            problem at a time.
          </p>
        </div>
      </div>
      <div
        className="bg-base-200 px-9 flex flex-col space-y-4 flex-wrap sm:flex-row sm:space-x-10 sm:space-y-0 justify-center align-middle text-center mx-auto"
        id="about-me"
      >
        <div className="max-w-md border-solid border-2 border-gray-500 rounded-xl flex flex-col sm:flex-1 shadow-lg shadow-cyan-500/50 transition duration-500 hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-24 w-24 text-black-500 mx-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
            />
          </svg>

          <h1 className="text-4xl font-bold pt-5">Knowledge</h1>
          <p className="text-2xl pb-3 px-3">
            I have a good knowledge of the following technologies:
          </p>
        </div>
        <div className="max-w-md border-solid border-2 border-gray-500 rounded-xl flex flex-col sm:flex-1 shadow-lg shadow-cyan-500/50 transition duration-500 hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-24 w-24 text-black-500 mx-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
            />
          </svg>

          <h1 className="text-3xl font-bold pt-5">Frontend</h1>
          <p className="text-2xl pb-3">
            <ul className="">
              <li>React</li>
              <li>React Native</li>
              <li>Next.js</li>
              <li>Vue.js</li>
            </ul>
          </p>
        </div>
        <div className="max-w-md border-solid border-2 border-gray-500 rounded-xl flex flex-col sm:flex-1 shadow-lg shadow-cyan-500/50 transition duration-500 hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-24 w-24 text-black-500 mx-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
            />
          </svg>

          <h1 className="text-3xl font-bold pt-5">Backend</h1>
          <ul className="text-2xl pb-3">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Knowledge;
