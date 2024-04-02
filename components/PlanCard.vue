<template>
  <div class="plan-card px-5 py-10 rounded-2xl bg-secondary shadow">
    <p class="font-bold text text-white">
      <img :src="plan.icon" :alt="`${plan.title}-icon`" class="inline h-5" />
      <span class="pl-3"> {{ plan.title }} </span>
    </p>

    <div class="mt-10">
      <p class="text-primary text-sm mb-5">Includes 1 year access to:</p>

      <div>
        <ul class="text-gray-200 text-sm">
          <li
            v-for="(benefit, index) in plan.benefits"
            :key="`benefit-${index}-${plan.id}`"
            class="flex items-center mb-3"
            :class="{ 'opacity-60': benefit.disabled }"
          >
            <IconMaterialSymbols:CheckCircle class="text-primary inline" />
            <span class="pl-3"> {{ benefit.title }} </span>
            <span class="ml-auto">
              <IconMdi:CloseCircle
                v-if="benefit.disabled"
                class="text-primary inline"
              />
              <IconMdi:InformationVariantCircle v-else />
            </span>
          </li>
        </ul>
      </div>

      <div v-if="plan.showMasterClassCourse" class="my-4">
        <div class="course-card px-4 py-4 rounded-lg">
          <div class="flex gap-x-4">
            <div>
              <img src="@/assets/images/vue-masterclass.svg" alt="vue masterclass" class="rounded-lg h-10 w-10">
            </div>
            <div>
              <p class="text-gray-400 text-xs">
                Enough time to watch:
              </p>
              <p class="text-gray-200 text-sm mt-1">
                The Vue 3 Masterclass
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="my-4">
        <div class="bg-dark rounded-lg px-3 py-6">
          <p class="flex items-center">
            <span class="font-semibold text-3xl text-white">
              {{ plan.currency }}{{ plan.pricePerSeat }}
            </span>
            <span class="pl-3 text-sm text-gray-400">
              / seat / {{ plan.priceInterval }}
            </span>
          </p>
          <p class="mt-10 mb-3 font-semibold text-sm text-white">
            How many licenses do you need?
          </p>
          <input
            type="range"
            min="5"
            max="20"
            value="10"
            step="5"
            class="w-full h-1 mb-6 rounded-lg appearance-none cursor-pointer range-sm bg-primary slider"
          />
          <div class="mt-3 flex justify-between items-center">
            <div class="flex items-center">
              <img src="@/assets/images/people.svg" alt="seats" class="h-4 inline" />
              <p class="inline">
                <span class="font-bold pl-2 text-white text-xl"> 12 </span>
                <span class="text-gray-400 text-sm pl-2"> seats </span>
              </p>
            </div>
            <p class="text-primary text-sm font-semibold">26% discount</p>
          </div>
        </div>
      </div>

      <div>
        <button
          class="bg-primary w-full py-3 rounded-lg font-semibold text-gray-700"
        >
          Start learning
        </button>
      </div>
      <div class="mt-3 text-center">
        <NuxtLink to="#" class="text-sm font-semibold text-primary">
          Refer your manager
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type Plan from "../types/Plan";

interface Props {
  plan: Plan;
}
defineProps<Props>();
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

.plan-card {
  .slider {
    &::-webkit-slider-thumb {
      @apply rounded-full h-3 w-3 appearance-none bg-primary;
    }
  }
  .course-card {
    background: rgba($color: $primary, $alpha: 0.2);
  }
}
</style>