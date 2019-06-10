<template>
  <div>
    <div id="header">
      <div
        class="flex bg-white border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center"
      >
        <div class="w-full max-w-screen-xl relative px-6 h-full">
          <div class="flex -mx-6 h-full">
            <div class="lg:w-40 pl-6 pr-6 lg:pr-8 text-white bg-indigo-100">
              <div class="flex items-center h-full">
                <svg
                  class="fill-current h-8 w-8 mr-2"
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
                  />
                </svg>
              </div>
            </div>
            <div
              class="flex flex-grow lg:w-3/4 xl:w-4/5 bg-white h-full items-center"
            >
              <div class="w-full lg:px-6 xl:px-12">
                <div class="block md:hidden">
                  <button
                    class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                  >
                    <svg
                      class="fill-current h-3 w-3"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>
                        Menu
                      </title>
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                  </button>
                </div>
                <div
                  class="w-full block hidden flex-grow lg:flex lg:items-center lg:w-auto md:block"
                >
                  <div class="text-sm lg:flex-grow">
                    Paul Keen
                  </div>

                  <div>
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Download
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full max-w-screen-xl px-6">
      <div class="lg:flex -mx-6">
        <div
          id="sidebar"
          class="fixed inset-0 pt-16 h-full bg-indigo-100 z-90 w-full border-b -mb-16
             lg:-mb-0 lg:static lg:h-screen lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-40 xl:block lg:border-0
             hidden"
        >
          <div
            id="navWrapper"
            class="h-full overflow-y-auto scrolling-touch
               lg:h-auto lg:block lg:relative lg:sticky lg:bg-transparent
               inset-x-0 top-0 pt-16"
          >
            <nav
              id="nav"
              class="px-6 pt-6 overflow-y-auto text-base lg:text-sm lg:py-12 lg:pl-6 lg:pr-8 sticky?lg:h-(screen-16)"
            >
              <div class="mb-10">
                <router-link to="/" class="flex items-center  menu-link">
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      class="text-gray-400 fill-current"
                      d="M12 21a2 2 0 0 1-1.41-.59l-.83-.82A2 2 0 0 0 8.34 19H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a5 5 0 0 1 4 2v16z"
                    ></path>
                    <path
                      class="text-gray-700 fill-current"
                      d="M12 21V5a5 5 0 0 1 4-2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4.34a2 2 0 0 0-1.42.59l-.83.82A2 2 0 0 1 12 21z"
                    ></path>
                  </svg>
                  <span class="ml-3">Home</span>
                </router-link>
                <router-link to="/name" class="flex items-center  menu-link">
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      class="text-gray-400 fill-current"
                      d="M12 21a2 2 0 0 1-1.41-.59l-.83-.82A2 2 0 0 0 8.34 19H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a5 5 0 0 1 4 2v16z"
                    ></path>
                    <path
                      class="text-gray-700 fill-current"
                      d="M12 21V5a5 5 0 0 1 4-2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4.34a2 2 0 0 0-1.42.59l-.83.82A2 2 0 0 1 12 21z"
                    ></path>
                  </svg>
                  <span class="ml-3">Name</span>
                </router-link>
                <router-link
                  to="/subtitle"
                  class="flex items-center  menu-link"
                >
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      class="text-gray-400 fill-current"
                      d="M12 21a2 2 0 0 1-1.41-.59l-.83-.82A2 2 0 0 0 8.34 19H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a5 5 0 0 1 4 2v16z"
                    ></path>
                    <path
                      class="text-gray-700 fill-current"
                      d="M12 21V5a5 5 0 0 1 4-2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4.34a2 2 0 0 0-1.42.59l-.83.82A2 2 0 0 1 12 21z"
                    ></path>
                  </svg>
                  <span class="ml-3">Subtitle</span>
                </router-link>
                <router-link to="/email" class="flex items-center menu-link">
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      class="text-gray-400 fill-current"
                      d="M12 21a2 2 0 0 1-1.41-.59l-.83-.82A2 2 0 0 0 8.34 19H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a5 5 0 0 1 4 2v16z"
                    ></path>
                    <path
                      class="text-gray-700 fill-current"
                      d="M12 21V5a5 5 0 0 1 4-2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4.34a2 2 0 0 0-1.42.59l-.83.82A2 2 0 0 1 12 21z"
                    ></path>
                  </svg>
                  <span class="ml-3">Email</span>
                </router-link>
                <router-link
                  to="/experience"
                  class="flex items-center menu-link"
                >
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      class="text-gray-400 fill-current"
                      d="M12 21a2 2 0 0 1-1.41-.59l-.83-.82A2 2 0 0 0 8.34 19H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a5 5 0 0 1 4 2v16z"
                    ></path>
                    <path
                      class="text-gray-700 fill-current"
                      d="M12 21V5a5 5 0 0 1 4-2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4.34a2 2 0 0 0-1.42.59l-.83.82A2 2 0 0 1 12 21z"
                    ></path>
                  </svg>
                  <span class="ml-3">Experience</span>
                </router-link>
              </div>
            </nav>
          </div>
        </div>

        <div
          id="content-wrapper bg-gray-400"
          class="h-screen w-full lg:static lg:max-h-full lg:overflow-visible bg-gray-100"
        >
          <div id="content" class="h-full">
            <div id="_app" class="flex h-full">
              <div class="pt-24 pb-16 lg:pt-28 w-full h-full">
                <div class="flex h-full">
                  <div
                    class="markdown px-6 xl:px-12 w-full md:w-2/5 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 overflow-y-auto max-h-full"
                  >
                    <router-view />
                  </div>
                  <div
                    class="hidden xl:text-sm md:block xl:px-6 overflow-y-auto max-h-full"
                  >
                    <Preview />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Preview from "@/components/Preview.vue";

export default {
  components: {
    Preview
  },

  created() {
    this.$store.dispatch("fetchResume");
  }
};
</script>

<style lang="scss">
.menu-link {
  @apply px-2 -mx-2 py-1 font-medium text-blue-600;
}

.menu-link:hover {
  @apply text-gray-900;
}

.menu-link.router-link-exact-active {
  @apply text-blue-900;
}
</style>
