<template>
  <div class="home-banner-wrap pb-5">
    <img
      src="../assets/images/home-banner.gif"
      class="d-block w-100 home-banner-img"
      alt="Thida & Partners Banner"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home-banner-img {
  width: 100%;
  height: 550px;
  object-fit: cover;
}

@media (max-width: 990px) {
  .home-banner-img {
    height: 320px;
  }
}

@media (max-width: 450px) {
  .home-banner-img {
    height: 250px;
  }
}
</style>
