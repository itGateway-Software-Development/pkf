<template>
  <section class="about">
    <div class="page-banner">
      <h2 v-if="service == 'assurance'" class="banner-title">AUDIT & ASSURANCE</h2>
      <h2 v-if="service == 'our-services'" class="banner-title">OUR SERVICES</h2>
      <h2 v-if="service == 'advisory'" class="banner-title">ADVISORY</h2>
      <h2 v-if="service == 'tax'" class="banner-title">TAX</h2>

      <h2 v-if="service == 'corporate'" class="banner-title">CORPORATE SECRETARIAL SERVICE</h2>
      <h2 v-if="service == 'account-financial'" class="banner-title">ACCOUNTING & FINANCIAL REPORTING</h2>
    </div>

    <div class="row mt-5 service-content">
      <ServicesCategory :service="service"></ServicesCategory>
      <div class="col-lg-9 col-md-8">
        <div v-if="service == 'our-services'">
          <OurServices></OurServices>
        </div>
        <div v-else-if="service == 'assurance'">
          <Assurance></Assurance>
        </div>
        <div v-else-if="service == 'advisory'">
          <Advisory></Advisory>
        </div>
        <div v-else-if="service == 'tax'">
          <Tax></Tax>
        </div>
        <div v-else-if="service == 'corporate'">
          <Corporate></Corporate>
        </div>
        <div v-else>
          <AccountFinicial></AccountFinicial>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AccountFinicial from "../components/AccountFinicial";
import Corporate from "../components/Corporate";
import Tax from "../components/Tax";
import Advisory from "../components/Advisory";
import OurServices from "../components/OurServices";
import Assurance from "../components/Assurance";
import ServicesCategory from "../components/ServicesCategory";
import { onMounted, onUpdated, ref } from "vue";
export default {
  components: {
    AccountFinicial,
    Corporate,
    Tax,
    Advisory,
    OurServices,
    Assurance,
    ServicesCategory,
  },
  props: ["service"],
  setup() {
    let category = ref("about-us");

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
.service-content {
  padding: 30px 9%;
}

@media (max-width: 768px) {
  .page-banner {
    height: 120px;
    padding: 0 15px;
  }
  .banner-title {
    font-size: 1.5rem;
    letter-spacing: 2px;
    white-space: normal;
    text-align: center;
  }
}

@media (max-width: 450px) {
  .service-content {
    display: flex;
    flex-direction: column-reverse;
    padding-top: 0px;
  }
}
</style>
