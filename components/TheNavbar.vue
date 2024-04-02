<template>
  <nav class="">
    <div
      class="max-w-screen-2xl flex flex-wrap items-center mx-auto p-4 lg:justify-between"
    >
      <button
        data-collapse-toggle="navbar-dropdown"
        type="button"
        class="inline-flex items-center p-1 w-10 h-10 justify-center text-3xl text-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600 mr-2"
        aria-controls="navbar-dropdown"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <IconMaterialSymbols:MenuRounded />
      </button>
      <a href="#" class="space-x-3">
        <img
          src="@/assets/images/logo.svg"
          class="h-11"
          alt="Vue school Logo"
        />
      </a>
      <div class="hidden w-full lg:block md:w-auto" id="navbar-dropdown">
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 md:space-x-8 md:flex-row md:mt-0 text-base"
        >
          <li v-for="(item, index) in menuItems" :key="item.title">
            <NuxtLink
              v-if="!item.dropdownLinks"
              :to="item.link"
              class="block py-2 px-3 text-gray-300 rounded md:bg-transparent md:p-0 hover:text-white"
            >
              {{ item.title }}
            </NuxtLink>
            <button
              v-else
              :id="`dropdown-${index}`"
              :data-dropdown-toggle="`dropdownNavbar-${index}`"
              class="flex items-center justify-between w-full py-2 px-3 text-gray-300 md:hover:bg-transparent hover:text-white md:p-0 md:w-auto"
            >
              {{ item.title }}
              <IconOcticon:TriangleDown16 class="text-base ms-1.5" />
            </button>
          </li>
        </ul>
      </div>
      <div class="ml-auto lg:ml-0 hidden sm:block">
        <ul
          class="flex font-medium p-2 space-x-2 md:space-x-8 text-base items-center"
        >
          <NuxtLink
            to="#"
            class="block py-2 px-3 text-gray-300 rounded md:bg-transparent md:p-0"
          >
            Log in
          </NuxtLink>
          <NuxtLink
            to="#"
            class="block py-3 px-7 text-primary rounded-xl md:bg-transparent signup-btn relative"
          >
            Sign up
          </NuxtLink>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const menuItems = [
  {
    title: "Courses",
    link: "#",
    dropdownLinks: [],
  },
  {
    title: "Plans",
    link: "#",
  },
  {
    title: "Business Service",
    link: "#",
    dropdownLinks: [],
  },
  {
    title: "Learning Paths",
    link: "#",
  },
  {
    title: "Hiring",
    link: "#",
  },
  {
    title: "Articles",
    link: "#",
  },
  {
    title: "Events",
    link: "#",
    dropdownLinks: [],
  },
  {
    title: "Get Certified",
    link: "#",
  },
];
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables";
.signup-btn {
  &::before {
    @apply border border-2 border-transparent absolute inset-0 rounded-lg -z-10;
    content: "";
    background: linear-gradient(95deg, #{$primary}, #00c2ff) border-box;
    -webkit-mask: linear-gradient(#{$white} 0 0) padding-box,
      linear-gradient(#{$white} 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
}
</style>