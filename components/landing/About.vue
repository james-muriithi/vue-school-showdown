<template>
  <section class="px-5 xl:px-3 pt-32 md:py-10 -mt-20">
    <div class="max-w-screen-xl mx-auto">
      <div class="w-full min-h-[50vh] h-[50vh] flex items-center">
        <div>
          <div
            class="rounded-2xl about px-8 md:px-16 py-12 grid sm:grid-cols-12 gap-6"
          >
            <div class="flex items-center justify-center sm:col-span-2">
              <img
                src="@/assets/images/logo-big.svg"
                alt="Vue School"
                class="w-24"
              />
            </div>
            <div class="sm:col-span-10">
              <h2 class="text-white text-2xl font-bold">
                About Vue School corporate training
              </h2>
              <p class="mt-6 text-gray-300 text-lg">
                School is the #1 training resource for Vue.js and has provided
                the most comprehensive Vue.js video library in the world to over
                140,000 developers. Private individuals and small to enterprise
                companies have used our services to develop their skills since
                2016.
              </p>
            </div>
          </div>
          <div class="mt-10">
            <div class="hidden lg:flex justify-between flex-wrap">
              <router-link v-for="i in 6" :key="`icon-${i}`" to="#">
                <img src="@/assets/images/google-icon.svg" alt="Google" />
              </router-link>
            </div>
          </div>

          <div class="mt-20">
            <div
              class="grid md:grid-cols-12 gap-x-5 lg:gap-x-10 gap-y-5 items-center"
            >
              <div class="col-span-6 lg:pr-10">
                <h3 class="capitalize">YOUR #1 SOURCE OF VUE.JS COURSES</h3>
                <h2 class="title text-white">
                  Full Stack <span>Vue Training</span> Solutions
                </h2>
              </div>
              <div class="col-span-6 flex justify-between w-full stats">
                <div>
                  <h3>763</h3>
                  <p class="mt-2 text-center">
                    <IconMaterialSymbols:PlayCircle
                      class="text-white text-sm inline"
                    />
                    <span class="text-gray-300 text-xs font-semibold">
                      Video lessons
                    </span>
                  </p>
                </div>
                <div>
                  <h3>40</h3>
                  <p class="mt-2 text-center">
                    <img src="@/assets/images/courses.svg" class="inline h-4" />
                    <span class="text-gray-300 text-xs font-semibold">
                      Courses
                    </span>
                  </p>
                </div>
                <div>
                  <h3>64</h3>
                  <p class="mt-2 text-center">
                    <IconMaterialSymbols:NestClockFarsightAnalogRounded
                      class="text-white text-sm inline"
                    />
                    <span class="text-gray-300 text-xs font-semibold">
                      15 hours
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

section {
  @apply xl:bg-cover;
  background: linear-gradient(
      180deg,
      rgba($color: $dark, $alpha: 0) 0%,
      rgba($color: $dark, $alpha: 1) 90%
    ),
    url("assets/images/corporate-training-waves.svg");
  background-repeat: no-repeat;
  .about {
    background: rgba($color: #2b2f44, $alpha: 0.9);
  }
  h3 {
    @apply font-semibold;
    background: linear-gradient(90deg, #{$primary} 0%, #00f0ff 76.56%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h2 > span {
    background: linear-gradient(
      90deg,
      #00f0ff 0%,
      #{$primary} 80%,
      #00f0ff 80%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .stats h3 {
    @apply text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold;
  }
}
</style>