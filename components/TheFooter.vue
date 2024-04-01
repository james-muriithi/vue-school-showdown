<template>
  <footer
    class="my-32 max-w-screen-xl mx-auto px-5 xl:px-3 text-center lg:text-start"
  >
    <div class="grid lg:grid-cols-11 gap-x-5 gap-y-16">
      <div class="col-span-5">
        <router-link to="#" class="space-x-3">
          <img
            src="@/assets/images/logo.svg"
            class="h-16 mx-auto lg:ml-0"
            alt="Vue school Logo"
          />
        </router-link>

        <p class="mt-16 text-white md:pr-5">
          Thanks to fine people like you, Vue School can proudly sponsor Evan
          and the future of Vue.js by being a Platinum Patreon
        </p>

        <div class="mt-10">
          <p class="uppercase text-gray-500 font-semibold">
            FOLLOW US IN SOCIAL MEDIA
          </p>
          <div
            class="social-media-icons flex gap-x-8 mt-5 justify-center lg:justify-start"
          >
            <router-link
              v-for="link in socialMediaLinks"
              :key="link.title"
              :to="link.to"
              class="h-12 w-12 bg-secondary rounded-full items-center justify-center flex"
            >
              <component :is="link.icon" class="text-gray-500 text-2xl" />
            </router-link>
          </div>
        </div>
      </div>
      <div class="col-span-5 text-center sm:text-start">
        <div class="sm:columns-2 md:columns-3 lg:columns-2 gap-5 footer-links">
          <div
            v-for="groupTitle in Object.keys(footerLinks)"
            :key="groupTitle"
            class="h-auto"
          >
            <p class="uppercase text-gray-500 font-semibold">
              {{ groupTitle }}
            </p>
            <div class="mt-2">
              <router-link
                v-for="link in footerLinks[groupTitle]"
                :key="`${groupTitle}-${link.title}`"
                :to="link.to"
                class="text-sm text-gray-200 hover:text-white hover:underline transition-all block mb-2"
              >
                {{ link.title }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import facebookIcon from "~icons/bx/bxl-facebook-circle";
import twitterIcon from "~icons/bx/bxl-twitter";
import githubIcon from "~icons/bx/bxl-github";
import linkedinIcon from "~icons/bx/bxl-linkedin";
import youtubeIcon from "~icons/bx/bxl-youtube";
import { type RouteLocation } from "vue-router/dist/vue-router";

const socialMediaLinks = [
  {
    title: "Facebook",
    to: "#",
    icon: facebookIcon,
  },
  {
    title: "Twitter",
    to: "#",
    icon: twitterIcon,
  },
  {
    title: "Github",
    to: "#",
    icon: githubIcon,
  },
  {
    title: "Lnkedin",
    to: "#",
    icon: linkedinIcon,
  },
  {
    title: "Youttube",
    to: "#",
    icon: youtubeIcon,
  },
];

interface FooterLink {
  title: string;
  to: RouteLocation;
}

interface FooterLinks {
  [key: string]: FooterLink[];
}

const footerLinks: FooterLinks = {
  products: [
    {
      title: "Courses",
      to: "#",
    },
    {
      title: "Workshops",
      to: "#",
    },
    {
      title: "Vue Masterclass",
      to: "#",
    },
    {
      title: "Mastering Nuxt",
      to: "#",
    },
  ],
  pricing: [
    {
      title: "Plans",
      to: "#",
    },
  ],
  "connect with us": [
    {
      title: "About Us",
      to: "#",
    },
    {
      title: "Careers",
      to: "#",
    },
    {
      title: "Contact Us",
      to: "#",
    },
  ],
  events: [
    {
      title: "Vue.js Nation",
      to: "#",
    },
    {
      title: "Nuxt Nation",
      to: "#",
    },
    {
      title: "Vue.js Forge",
      to: "#",
    },
  ],
  corporate: [
    {
      title: "Corporate Training",
      to: "#",
    },
    {
      title: "Developer Recruitment",
      to: "#",
    },
    {
      title: "Course Development",
      to: "#",
    },
    {
      title: "On-site Workshops",
      to: "#",
    },
    {
      title: "Consulting",
      to: "#",
    },
    {
      title: "Affiliate Programs",
      to: "#",
    },
  ],
  resources: [
    {
      title: "Articles",
      to: "#",
    },
  ],
};
</script>

<style lang="scss" scoped>
.footer-links {
  > div {
    page-break-inside: avoid;
    break-inside: avoid-column;
    margin-bottom: 2rem;
  }
}
</style>