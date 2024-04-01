<template>
  <section class="my-10 max-w-screen-xl mx-auto px-5 xl:px-3">
    <div class="flex flex-wrap">
      <h2 class="title text-white">Available Workshops</h2>
      <div class="ml-auto hidden md:block">
        <button class="rounded-lg px-5 py-3 bg-primary text-sm">
          See all workshops
        </button>
      </div>
    </div>
    <div class="mt-10">
      <div class="">
        <Carousel :breakpoints="breakpoints" class="cursor-pointer h-72">
          <slide
            v-for="(workshop, index) in workshops"
            :key="`${workshop.title}-${index}`"
            class="h-full"
          >
            <WorkshopCard :workshop="workshop" />
          </slide>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import type Workshop from "@/types/Workshop";

const breakpoints = {
  0: {
    itemsToShow: 1,
    snapAlign: "start",
  },

  540: {
    itemsToShow: 1.5,
    snapAlign: "start",
  },

  840: {
    itemsToShow: 2.5,
    snapAlign: "start",
  },
};

const workshops: Workshop[] = [
  {
    title: "Vue.js Fundamentals",
    description:
      "A progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally",
    type: "LIVE Training",
    date: "December 14th - 11:00 AM (GMT-3)",
    duration: "15 Hours",
  },
  {
    title: "Vue 3 and Composition API",
    description:
      "Take a deep dive into the new and exciting features of Vue 3. Learn about Portals, Suspense, Composition API, Fragments, and much much more",
    type: "LIVE Training",
    date: "December 14th - 11:00 AM (GMT-3)",
    duration: "15 Hours",
  },
  {
    title: "Vue 3 and Composition API",
    description:
      "Take a deep dive into the new and exciting features of Vue 3. Learn about Portals, Suspense, Composition API, Fragments, and much much more",
    type: "LIVE Training",
    date: "December 14th - 11:00 AM (GMT-3)",
    duration: "15 Hours",
  },
];
</script>

<style lang="scss" scoped>
:deep(ol.carousel__track) {
  @apply flex gap-x-5;
}
</style>