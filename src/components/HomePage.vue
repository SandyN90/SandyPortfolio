<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="bg-white pb-8 sm:pb-12 lg:pb-12">
    <div class="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48 flex justify-between">
      <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
        <div>
          <div class="mt-20">
            <div class="mt-6 sm:max-w-xl">
              <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
               Hello I'm Sandeep Kumar Navik
              </h1>
              <p class="mt-6 text-xl text-gray-500">
                I am a front End Web developer, Exploring things in website developement and leading towords a perfection of creativity
              </p>
              <button class="border border-gray-600 px-4 py-2 rounded-full mt-20 hover:bg-blue-500 hover:text-white"><a href="https://drive.google.com/file/d/1F9dB83FxAafyetxZ4aElOOdi9YFpvTGf/view?usp=share_link" target="_blank" rel="noopener noreferrer">Download CV</a></button>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <div class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div class="hidden sm:block">
            <div class="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
            <svg class="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0" width="404" height="392" fill="none" viewBox="0 0 404 392">
              <defs>
                <pattern id="837c3e70-6c3a-44e6-8854-cc48c737b659" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="392" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
            </svg>
          </div>
          <div class="relative flex justify-center pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
            <img class="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none" src="../assets/images/sandy.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <EducationDetails/>
</template>

<script setup lang="ts">
import { ChevronRightIcon, StarIcon } from '@heroicons/vue/solid'
import EducationDetails from './EducationDetails.vue';

</script>