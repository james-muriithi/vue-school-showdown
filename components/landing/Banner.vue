<template>
  <section class="mt-10 max-w-screen-xl mx-auto px-5 xl:px-3">
    <div class="grid lg:grid-cols-2 h-full gap-x-4 gap-y-20">
      <div class="flex items-center">
        <div>
          <h1
            class="title text-gray-200 text-center lg:text-start"
          >
            Complete <span class="text-primary">Vue.js training</span> solutions
            for companies
          </h1>
          <p class="mt-10 text-gray-200 text-xl lg:text-2xl text-center lg:text-start">
            Training solutions designed for companies, agencies and
            organisations with developers using or who are considering using the
            Vue.js framework
          </p>
          <div class="mt-10 text-center lg:text-start">
            <router-link to="#" class="bg-primary px-7 py-4 rounded-xl font-semibold">
                Talk to sales
            </router-link>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <img
          src="@/assets/images/banner-image.svg"
          alt="Vue School"
          class="h-72 md:h-96 lg:h-full"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>