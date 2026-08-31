<template>
  <header>
    <div class="container">
      <div class="social-media">
        <a href="https://www.linkedin.com/in/pkf-myanmar-a4a151298" target="_blank" class="linkedin"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://www.facebook.com/profile.php?id=61552517021210" target="_blank" class="fb"><i class="fa-brands fa-square-facebook"></i></a>
      </div>
    </div>
  </header>

  <nav class="navbar navbar-expand-lg navbar-light main-navbar">
    <div class="container">
      <a
        href="/"
        class="navbar-brand py-0 d-flex align-items-center"
        id="Logo"
        title="PKF Myanmar"
        @click.prevent="handlePhooLogoClick"
      >
        <img
          src="../assets/images/logo.png"
          alt="PKF Myanmar"
          class="nav-logo"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fa-solid fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 align-items-lg-center">
          <li class="nav-item">
            <router-link
              to="/about-us"
              class="nav-link"
              :class="{ 'active-menu': currentRoute == '/about-us' }"
              >ABOUT US</router-link
            >
          </li>

          <li class="nav-item service-menu">
            <router-link
              to="/services/our-services"
              @mouseenter="showSubMenu"
              @click="toggleSubMenu"
              class="nav-link services nav2-info-container"
              :class="{
                'active-menu': currentRoute.substring(0, 8) == '/service',
              }"
              >SERVICES
              <i
                class="ms-2 fa-solid fa-caret-down text-primary"
                :class="{
                  'text-white': currentRoute.substring(0, 8) == '/service',
                }"
              ></i
            ></router-link>
            <div class="dropdown" v-if="isShow">
              <div class="container pt-3">
                <div class="row w-100">
                  <div class="col-md-12 col-lg-3 col-sm-12 mb-4">
                    <div class="row">
                      <div
                        class="d-none d-lg-block col-md-2 col-lg-4 pl-0 pr-0"
                      >
                        <img
                          src="../assets/images/assurance.png"
                          alt=" Audit &amp; Assurance"
                        />
                      </div>
                      <div
                        class="col-sm-12 col-md-10 col-lg-8 pl-2 d-flex align-items-center"
                      >
                        <router-link to="/services/assurance"
                          ><h5
                            :class="{
                              'active-sub-menu':
                                currentRoute == '/services/assurance',
                            }"
                          >
                            Audit &amp; Assurance
                          </h5></router-link
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-3 col-sm-12 mb-4">
                    <div class="row">
                      <div
                        class="d-none d-lg-block col-md-2 col-lg-4 pl-0 pr-0"
                      >
                        <img
                          src="../assets/images/advisory.png"
                          alt=" Advisory"
                        />
                      </div>
                      <div
                        class="col-sm-12 col-md-10 col-lg-8 pl-2 d-flex align-items-center"
                      >
                        <router-link to="/services/advisory"><h5>Advisory</h5></router-link>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-3 col-sm-12 mb-4">
                    <div class="row">
                      <div
                        class="d-none d-lg-block col-md-2 col-lg-4 pl-0 pr-0"
                      >
                        <img src="../assets/images/tax-legal.png" alt="Tax" />
                      </div>
                      <div
                        class="col-sm-12 col-md-10 col-lg-8 pl-2 d-flex align-items-center"
                      >
                        <router-link to="/services/tax"><h5>Tax</h5></router-link>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-3 col-sm-12 mb-4">
                    <div class="row">
                      <div
                        class="d-none d-lg-block col-md-2 col-lg-4 pl-0 pr-0"
                      >
                        <img
                          src="../assets/images/business-solutions.png"
                          alt="Business Solutions"
                        />
                      </div>
                      <div
                        class="col-sm-12 col-md-10 col-lg-8 pl-2 d-flex align-items-center"
                      >
                        <router-link to="/services/corporate"
                          ><h5>Corporate Secretarial</h5></router-link
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 col-lg-3 col-sm-12 mb-4 mt-3">
                    <div class="row">
                      <div
                        class="d-none d-lg-block col-md-2 col-lg-4 pl-0 pr-0"
                      >
                        <img
                          src="../assets/images/finance.png"
                          alt="Technology &amp; Risk Services"
                        />
                      </div>
                      <div
                        class="col-sm-12 col-md-10 col-lg-8 pl-2 d-flex align-items-center"
                      >
                        <router-link to="/services/account-financial"
                          ><h5>Accounting & Financial Reporting</h5></router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="nav-item">
            <router-link
              to="/news-events"
              class="nav-link"
              :class="{
                'active-menu': currentRoute.substring(0, 12) == '/news-events',
              }"
              >NEWS &amp; EVENTS</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/people"
              class="nav-link"
              :class="{
                'active-menu': currentRoute.substring(0, 7) == '/people',
              }"
              >PEOPLE</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/careers/careers"
              class="nav-link"
              :class="{
                'active-menu': currentRoute.substring(0, 8) == '/careers',
              }"
              >JOB OPPORTUNITIES</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/contact-us"
              class="nav-link"
              :class="{ 'active-menu': currentRoute == '/contact-us' }"
              >CONTACT US</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
export default {
  props: ["currentRoute"],
  setup(props) {
    const router = useRouter();
    const phooClicks = ref(0);
    let phooTimeout = null;
    let isSticky = ref(false);
    let isShow = ref(false);

    let showSubMenu = () => {
      if (window.innerWidth > 990) {
        isShow.value = true;
      }
    };

    let toggleSubMenu = () => {
      if (window.innerWidth < 990) {
        isShow.value = !isShow.value;
      }
    };

    let handleScroll = () => {
      isSticky.value = window.pageYOffset;
    };



    const handlePhooLogoClick = () => {
      clearTimeout(phooTimeout);
      phooClicks.value++;
      if (phooClicks.value >= 5) {
        phooClicks.value = 0;
        router.push("/phoo-portal");
      } else {
        phooTimeout = setTimeout(() => {
          phooClicks.value = 0;
          router.push("/");
        }, 400);
      }
    };

    watch(
      () => props.currentRoute,
      () => {
        isShow.value = false;
        const navbar = document.getElementById("navbarSupportedContent");
        if (navbar && navbar.classList.contains("show")) {
          navbar.classList.remove("show");
        }
        const toggler = document.querySelector(".navbar-toggler");
        if (toggler) {
          toggler.setAttribute("aria-expanded", "false");
          toggler.classList.add("collapsed");
        }
      }
    );

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    return { isSticky, isShow, showSubMenu, toggleSubMenu, handlePhooLogoClick };
  },
};
</script>

<style scoped>
.container {
  padding: 0 15px;
}
.main-navbar {
  position: sticky;
  top: 0;
  z-index: 999;
  background: #fff;
  padding-top: 12px;
  padding-bottom: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: padding 0.3s ease, box-shadow 0.3s ease;
}
img {
  width: 80px;
}

/* ---top header---  */
header {
  background: #0f3780;
  padding: 7px 0;
}
.social-media {
  display: flex;
  gap: 0.8rem;
  align-items: center;
}
.social-media i {
  font-size: 22px;
  color: #fff;
  transition: transform 0.2s ease;
}
.social-media i:hover {
  transform: scale(1.1);
}

/* ---top header end---  */

.nav-logo {
  width: 140px;
  height: auto;
  transition: transform 0.3s ease;
}

.nav-logo:hover {
  transform: scale(1.04);
}

.navbar-brand {
  padding: 0;
  margin-right: 1.5rem;
}

.row .col-lg-8 a h5 {
  font-size: 16px;
  text-align: left !important;
}

.row .col-lg-8 a {
  text-decoration: none;
}

.nav-item > a {
  margin-left: 10px;
}

.nav-link {
  color: #0045b6 !important;
  font-size: 15px;
  font-weight: 600;
  padding: 10px 20px !important;
  letter-spacing: 0.3px;
  transition: all 0.25s ease;
}

.nav-link:hover {
  color: #002d7a !important;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  transform: translateY(10px);
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;
  background-color: #e7e8ea;
  display: flex;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.service-menu:hover > .dropdown {
  transform: translate(0, 0);
  pointer-events: auto;
  opacity: 1;
  visibility: visible;
}
.service-menu .dropdown img {
  width: 58px !important;
}

.dropdown h5 {
  font-size: 15.5px !important;
  font-weight: 600;
}

.active-menu {
  background: #0045b6;
  color: #fff !important;
  font-size: 15px;
  font-weight: 600;
  border-radius: 6px;
  padding: 10px 20px !important;
}
.active-sub-menu {
  color: #0045b6;
}

/* --- main navbar end---  */

@media (max-width: 990px) {
  .main-navbar {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .nav-logo {
    width: 110px;
  }
  .dropdown {
    position: static;
    top: 100%;
    left: 0;
    width: 100%;
    transform: translateY(10px);
    opacity: 1;
    visibility: visible;
    display: block;
    transition: 0.5s;
    background-color: #e7e8ea;
    margin-bottom: 10px;
    padding: 0 0 10px;
  }
  .col-md-12.col-lg-3.col-sm-12 {
    margin: 10px 0 0 !important;
  }
  .navbar-toggler {
    padding: 8px 12px;
    border: 2px solid #0045b6 !important;
    background-color: transparent;
    transition: all 0.3s ease;
  }
  .navbar-toggler i {
    color: #0045b6 !important;
    font-size: 1.35rem;
  }
  .navbar-toggler:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 69, 182, 0.25) !important;
  }
  .nav-link {
    font-size: 14.5px;
    padding: 10px 14px !important;
  }
}

.brand-title-text {
  font-family: 'Aptos', sans-serif;
  color: #0f3780;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 2.1rem;
  font-weight: 800;
  margin: 0;
  transition: all 0.3s ease;
}

.brand-myanmar {
  font-weight: 300;
  color: #0045b6;
  letter-spacing: 4px;
}

.brand-title-text:hover {
  opacity: 0.85;
}
</style>
