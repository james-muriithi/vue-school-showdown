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
      <div class="grid grid-cols-3">
        <div class="workshop-card rounded-xl">
          <div class="card-header py-4 px-5 rounded-t-xl">
            <p class="text-gray-200">
              <IconMaterialSymbols:CalendarToday class="inline" />
              <span class="pl-2 text-sm">
                December 14th - 11:00 AM (GMT-3)
              </span>
            </p>
          </div>
          <div class="card-body px-5 py-6 bg-secondary rounded-b-xl">
            <div class="flex gap-x-5">
              <p class="text-gray-400 text-sm">
                <IconMaterialSymbols:PlayCircle class="inline" />
                LIVE Training
              </p>
              <p class="text-gray-400 text-sm">
                <IconMaterialSymbols:NestClockFarsightAnalogRounded
                  class="inline"
                />
                15 Hours
              </p>
            </div>
            <h5 class="text-gray-200 mt-3 text-xl">Vue.js Fundamentals</h5>

            <p class="text-gray-400 text-sm mt-2 line-clamp-2">
              A progressive framework for building user interfaces. Unlike other
              monolithic frameworks, Vue is designed from the ground up to be
              incrementally
            </p>
            <div class="mt-3">
                <div class="flex items-center text-gray-400 text-sm">
                    <img src="@/assets/images/steve-avatar.svg" alt="Steve Popoola" class="h-6 w-6 rounded-full mr-2">
                    Steve Popoola
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
.workshop-card {
  .card-header {
    background: linear-gradient(
      90deg,
      rgba(79, 8, 230, 0.5) 0%,
      rgba(255, 73, 117, 0.5) 96.56%
    );
  }
}
</style>