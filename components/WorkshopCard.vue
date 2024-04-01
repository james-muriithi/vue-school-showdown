<template>
  <div class="workshop-card rounded-xl text-start">
    <div class="card-header py-4 px-5 rounded-t-xl">
      <p class="text-gray-200">
        <IconMaterialSymbols:CalendarToday class="inline" />
        <span class="pl-2 text-sm"> {{ workshop.date }} </span>
      </p>
    </div>
    <div class="card-body px-5 py-6 bg-secondary rounded-b-xl">
      <div class="flex gap-x-5">
        <p class="text-gray-400 text-sm">
          <IconMaterialSymbols:PlayCircle class="inline" />
          {{workshop.type}}
        </p>
        <p class="text-gray-400 text-sm">
          <IconMaterialSymbols:NestClockFarsightAnalogRounded class="inline" />
          {{workshop.duration}}
        </p>
      </div>
      <h5 class="text-gray-200 mt-3 text-xl">Vue.js Fundamentals</h5>

      <p class="text-gray-400 text-sm mt-2 line-clamp-2">
        {{workshop.description}}
      </p>
      <div class="mt-3">
        <div class="flex items-center text-gray-400 text-sm">
          <img
            src="@/assets/images/steve-avatar.svg"
            alt="Steve Popoola"
            class="h-6 w-6 rounded-full mr-2"
          />
          Steve Popoola
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type Workshop from '@/types/Workshop';

interface Props {
  workshop: Workshop;
}
defineProps<Props>();
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