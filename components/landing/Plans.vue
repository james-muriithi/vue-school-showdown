<template>
  <section class="mt-32">
    <div class="text-center">
      <h2 class="title lg:w-1/2 mx-auto text-white">
        Discounted <span> Corporate Training </span>Bundles
      </h2>
    </div>
    <div class="plans">
      <div class="max-w-screen-xl mx-auto px-5 xl:px-3">
        <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          <div v-for="plan in plans" :key="plan.id">
            <PlanCard :plan="plan" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BasicOneIcon from "@/assets/images/basic-plan.svg";
import ProfessionalIcon from "@/assets/images/professional-plan.svg";
import BasicTwoIcon from "@/assets/images/basic-two-plan.svg";
import type Plan from "~/types/Plan";

const plans: Plan[] = [
  {
    id: 1,
    title: "Basic",
    icon: BasicOneIcon,
    benefits: [
      {
        title: "All Video Courses",
        disabled: false,
      },
      {
        title: "Vue.Js Master class",
        disabled: false,
      },
      {
        title: "Developer assist Slack channel",
        disabled: false,
      },
      {
        title: "Live Weekly QnA",
        disabled: true,
      },
      {
        title: "1 x ws ticket per license",
        disabled: true,
      },
    ],
    pricePerSeat: 50,
    priceInterval: "month",
    currency: "$",
  },
  {
    id: 2,
    title: "Professional",
    icon: ProfessionalIcon,
    benefits: [
      {
        title: "All Video Courses",
        disabled: false,
      },
      {
        title: "Vue.Js Master class",
        disabled: false,
      },
      {
        title: "Developer assist Slack channel",
        disabled: false,
      },
      {
        title: "Live Weekly QnA",
        disabled: false,
      },
      {
        title: "4 x Virtual Workshop of your choice",
        disabled: false,
      },
    ],
    pricePerSeat: 50,
    priceInterval: "month",
    currency: "$",
    showMasterClassCourse: true,
  },
  {
    id: 3,
    title: "Basic",
    icon: BasicTwoIcon,
    benefits: [
      {
        title: "All Video Courses",
        disabled: false,
      },
      {
        title: "Vue.Js Master class",
        disabled: false,
      },
      {
        title: "Developer assist Slack channel",
        disabled: false,
      },
      {
        title: "Live Weekly QnA",
        disabled: false,
      },
      {
        title: "1 x ws ticket per license",
        disabled: false,
      },
    ],
    pricePerSeat: 50,
    priceInterval: "month",
    currency: "$",
  },
];
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
section {
  h2 > span {
    background: linear-gradient(
      90deg,
      #{$variant} 0%,
      #{$primary} 80%,
      #{$variant} 80%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .plans {
    @apply xl:bg-cover py-32;
    background: linear-gradient(
        180deg,
        rgba($color: $dark, $alpha: 0) 0%,
        rgba($color: $dark, $alpha: 1) 95%
      ),
      url("assets/images/plan-waves.svg");
    background-repeat: no-repeat;
  }
}
</style>