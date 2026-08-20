<template>
  <div class="container-fluid px-0 home-banner-container pb-5">
    <div class="home-banner-wrap" @click="handleBannerClick" style="cursor: pointer;">
      <img
        src="../assets/images/home-banner.jpg"
        class="d-block w-100 home-banner-img"
        alt="PKF Myanmar Banner"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const clickCount = ref(0);
    let clickTimeout = null;

    const handleBannerClick = () => {
      clearTimeout(clickTimeout);
      clickCount.value++;
      if (clickCount.value >= 5) {
        clickCount.value = 0;
        router.push("/secret-portal");
      } else {
        clickTimeout = setTimeout(() => {
          clickCount.value = 0;
        }, 3000);
      }
    };

    return {
      handleBannerClick
    };
  }
};
</script>

<style scoped>
.home-banner-container {
  margin-top: 0;
}
.home-banner-wrap {
  width: 100%;
  max-height: 450px;
  overflow: hidden;
  border-radius: 0;
  box-shadow: none;
}
.home-banner-img {
  width: 100%;
  height: 450px;
  object-fit: cover;
  object-position: top;
  display: block;
}

@media (max-width: 768px) {
  .home-banner-wrap {
    max-height: 250px;
  }
  .home-banner-img {
    height: 250px;
  }
}
</style>
