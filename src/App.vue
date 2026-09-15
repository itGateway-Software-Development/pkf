<template>
  <Nav :currentRoute="currentRoute" />
  <router-view v-slot="{ Component }">
    <transition name="page" mode="out-in">
      <component :is="Component" :key="$route.name" />
    </transition>
  </router-view>
  <Footer />
</template>

<script>
  import Nav from './components/Nav.vue'
  import Footer from './components/Footer.vue'
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
import { computed, onBeforeMount, onMounted, ref, watch } from 'vue';

  export default {
    components: {Nav, Footer},
    setup() {
      let store = useStore();
      let router = useRouter();
      let currentRoute = computed(() => store.getters.getCurrentRoute);

      onMounted(() => {
        store.dispatch('getRoute', router.currentRoute.value.path);
      });

      router.afterEach((to) => {
        store.dispatch('getRoute', to.path);
      });

      return {currentRoute}
    }
  }

</script>

<style>
#app {
  font-family: 'Aptos', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}

a {
  text-decoration: none;
}

/* Page Transition Animations */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.35s cubic-bezier(0.165, 0.84, 0.44, 1), transform 0.35s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}
</style>
