<template>
  <div class="sticky-top-container">
    <header>
      <div class="container">
        <div class="top-header-bar d-flex justify-content-between align-items-center">
          <router-link to="/" class="top-header-brand">PKF Myanmar</router-link>
          <div class="social-media">
            <a href="https://www.linkedin.com/in/pkf-myanmar-a4a151298" target="_blank" class="linkedin"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://www.facebook.com/profile.php?id=61552517021210" target="_blank" class="fb"><i class="fa-brands fa-square-facebook"></i></a>
          </div>
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
              <div class="simple-dropdown" v-if="isShow">
                <ul class="dropdown-list">
                  <li>
                    <router-link to="/services/assurance" :class="{ 'active-sub': currentRoute == '/services/assurance' }">
                      Audit &amp; Assurance
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/services/advisory" :class="{ 'active-sub': currentRoute == '/services/advisory' }">
                      Advisory
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/services/tax" :class="{ 'active-sub': currentRoute == '/services/tax' }">
                      Tax
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/services/corporate" :class="{ 'active-sub': currentRoute == '/services/corporate' }">
                      Corporate Secretarial
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/services/account-financial" :class="{ 'active-sub': currentRoute == '/services/account-financial' }">
                      Accounting &amp; Financial Reporting
                    </router-link>
                  </li>
                </ul>
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
                to="/publications"
                class="nav-link"
                :class="{
                  'active-menu': currentRoute.substring(0, 13) == '/publications',
                }"
                >PUBLICATIONS</router-link
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
  </div>
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
.sticky-top-container {
  position: sticky;
  top: 0;
  z-index: 1000;
}
.main-navbar {
  position: relative;
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
.top-header-bar {
  position: relative;
}
.top-header-brand {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-decoration: none;
  transition: opacity 0.2s ease;
  white-space: nowrap;
}
.top-header-brand:hover {
  color: #ffffff;
  opacity: 0.85;
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
  font-size: 13px;
  font-weight: 600;
  padding: 10px 20px !important;
  letter-spacing: 0.3px;
  transition: all 0.25s ease;
}

.nav-link:hover {
  color: #002d7a !important;
}

.service-menu {
  position: relative;
}

.simple-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 260px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transform: translateY(10px);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
  padding: 10px 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.service-menu:hover > .simple-dropdown {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}

.dropdown-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.dropdown-list li {
  margin: 0;
  padding: 0;
}

.dropdown-list a {
  display: block;
  padding: 10px 20px;
  color: #1a3a6e;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.dropdown-list a:hover {
  background-color: #f4f7fd;
  color: #0045b6;
}

.dropdown-list a.active-sub {
  color: #0045b6;
  font-weight: 700;
  background-color: #f4f7fd;
}

.active-menu {
  background: #0045b6;
  color: #fff !important;
  font-size: 13px;
  font-weight: 600;
  border-radius: 6px;
  padding: 10px 20px !important;
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
  .simple-dropdown {
    position: static;
    top: 100%;
    left: 0;
    width: 100%;
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
    display: block;
    transition: 0.5s;
    background-color: #f4f7fd;
    margin-bottom: 10px;
    padding: 5px 0;
    box-shadow: none;
    border: none;
  }
  .dropdown-list a {
    padding: 10px 15px;
    font-size: 14px;
    background: transparent;
  }
  .dropdown-list a:hover {
    background: rgba(0, 69, 182, 0.05);
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
    font-size: 12.5px;
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
