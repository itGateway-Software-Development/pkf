<template>
  <section class="about">
    <div class="position-relative">
      <img src="../assets/images/carousel2.jpg" alt="" />
      <h2 v-if="service == 'assurance'" class="banner-assurance">AUDIT & ASSURANCE</h2>
      <h2 v-if="service == 'our-services'" class="banner-our-services">OUR SERVICES</h2>
      <h2 v-if="service == 'advisory'" class="banner-advisory">ADVISORY</h2>
      <h2 v-if="service == 'tax'" class="banner-tax">TAX</h2>

      <h2 v-if="service == 'corporate'" class="banner-corporate">CORPORATE SECRETARIAL SERVICE</h2>
      <h2 v-if="service == 'account-financial'" class="banner-account-financial">ACCOUNTING & FINANCIAL REPORTING</h2>
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
.about img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center 30%;
  filter: brightness(0.4);
}
.service-content {
  padding: 30px 9%;
}
/* shared base style for all banners */
.banner-assurance,
.banner-our-services,
.banner-advisory,
.banner-tax,
.banner-business,
.banner-tech,
.banner-corporate,
.banner-account-financial {
  position: absolute;
  color: #fff;
  font-weight: bolder;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #104982;
  padding: 10px 50px;
  white-space: nowrap;
}

/* individual positioning for each */
.banner-assurance { top: 50%; }
.banner-our-services { top: 50%; }
.banner-advisory { top: 50%; }
.banner-tax { top: 50%; }
/* .banner-business { top: 50%; } */
/* .banner-tech { top: 50%; } */
.banner-corporate { top: 50%; }
.banner-account-financial { top: 50%; }

@media (max-width: 990px) {
  .about h2 {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #104982;
    padding: 10px 30px;
    font-size: 20px;
    text-align: center;
  }
}

@media (max-width: 450px) {
  .about img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: center 30%;
    filter: brightness(0.4);
  }
  .about h2 {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #104982;
    padding: 10px 30px;
    font-size: 16px;
    text-align: center;
  }
  .service-content {
    display: flex;
    flex-direction: column-reverse;
    padding-top: 0px;
  }
}
</style>
