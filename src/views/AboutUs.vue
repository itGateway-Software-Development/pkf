<template>
  <div class="about">
    <div class="page-banner">
      <h2 v-if="category == 'pkf'" class="banner-title">ABOUT PKF MYANMAR</h2>
      <h2 v-if="category == 'thida'" class="banner-title">ABOUT THIDA & PARTNERS</h2>
    </div>

    <div class="row mt-5 about-body">
      <div class="col-lg-3 col-md-3 about-category">
        <div
          class="side-link"
          :class="{ 'active-link': category == 'pkf' }"
          @click="category = 'pkf'"
        >
          <a :class="{ 'text-white': category == 'pkf' }">PKF Myanmar</a>
        </div>
        <div
          class="side-link"
          :class="{ 'active-link': category == 'thida' }"
          @click="category = 'thida'"
        >
          <a :class="{ 'text-white': category == 'thida' }">Thida & Partners</a>
        </div>
      </div>
      <div class="col-lg-9 col-md-9">
    <a href="/contact-us" class="float-end contact-btn me-4">Contact Us</a>
        <div v-if="category == 'pkf'">
          <PKF @about="category = 'about-us'"></PKF>
        </div>
        <div v-if="category == 'thida'">
          <ThidaPartner @about="category = 'about-us'"></ThidaPartner>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ThidaPartner from "../components/ThidaPartner";
import PKF from "../components/PKF";
import { onMounted, onUpdated, ref } from "vue";
export default {
  components: {
    ThidaPartner,
    PKF,
  },
  setup() {
    let category = ref("pkf");

    onUpdated(() => {
      window.scrollTo(0, 0);
    });
    onMounted(() => {
      window.scrollTo(0, 0);
    });

    return { category };
  },
};
</script>

<style scoped>
.about {
  position: relative;
  overflow-x: hidden;
}

.about-body {
  padding: 30px 9%;
}
.page-banner {
  width: 100%;
  height: 200px;
  background: #104982;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.banner-title {
  font-size: 2.4rem;
  font-weight: 900;
  letter-spacing: 4px;
  color: #fff;
  margin: 0;
  white-space: nowrap;
}
.about-category {
    background: #e7e8ea;
    padding: 10px 15px;
    font-size: 13px;
    height: fit-content;
    align-self: flex-start;
}
.about-category a {
  color: #003594;
}
.side-link {
    border-bottom: 1px solid rgb(157, 151, 151);
    margin-bottom: 15px;
    padding-bottom: 5px;
    transition: 0.5s ease;
    cursor: pointer;
}
.side-link:hover {
  background: #0045b6;
}
.side-link a {
  padding: 2px 5px;
  transition: 0.5s ease;
  color: #003594;
  font-size: 15px;
  font-weight: bold;
  display: block;
  line-height: 1.3;
}
.side-link:hover a {
  padding: 0 10px;
  color: #e7e8ea;
}
.active-link {
  background: #003594;
  padding: 5px 10px;
}

@media (max-width: 768px) {
  .page-banner {
    height: 120px;
  }
  .banner-title {
    font-size: 1.5rem;
    letter-spacing: 2px;
  }
}

@media (max-width: 450px) {
  .about-body {
    display: flex;
    flex-direction: column-reverse;
  }
  .about-category {
    margin-top: 15px;
  }
}
</style>
