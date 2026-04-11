<template>
  <div class="welcome container my-4">
    <h3 class="mb-4 fw-bold" style="color: #0045b6;">WELCOME TO PKF MYANMAR</h3>
    <p>
      We are partnered with a global network of PKF international. Our director
      and members have operated under the PKF brand since 2018 and have stood as
      a private accounting firm since 2013. Our company represents our
      commitment to providing our clients with a consistent experience and for
      each member to be an Independent ethical professional accountant, improve
      client satisfaction and confidence, and for us to grow together.
    </p>
    <div class="about-us">
      <router-link to="/about-us">About us <i class="fa-solid fa-chevron-right"></i> </router-link>
    </div>

    <div class="services-section">
      <p class="services-label">OUR SERVICES</p>
      <div class="services-grid">
        
        <router-link 
          v-for="(service, index) in services" 
          :key="index"
          :to="service.route" 
          class="service-card"
        >
          <div class="card-icon-wrap">
            <img :src="service.icon" :alt="service.title" />
          </div>
          <span class="card-title">{{ service.title }}</span>
          <span class="card-arrow"><i class="fa-solid fa-arrow-right"></i></span>
        </router-link>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: "Audit & Assurance",
          route: "/services/assurance",
          icon: require("@/assets/images/assurance1.png"), 
        },
        {
          title: "Advisory",
          route: "/services/advisory",
          icon: require("@/assets/images/advisory1.png"),
        },
        {
          title: "Tax",
          route: "/services/tax",
          icon: require("@/assets/images/tax-legal1.png"),
        },
        {
          title: "Corporate Secretarial",
          route: "/services/corporate",
          icon: require("@/assets/images/business-solutions1.png"),
        },
        {
          title: "Accounting & Financial Reporting",
          route: "/services/account-financial",
          icon: require("@/assets/images/risk-advisory1.png"),
        }
      ]
    };
  }
};
</script>

<style scoped>
.welcome p {
  text-align: justify;
  font-size: 16px;
  line-height: 40px;
}
.about-us {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: linear-gradient(135deg, #0045b6 0%, #002d7a 100%);
  padding: 7px 20px;
  border-radius: 6px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 69, 182, 0.3);
  cursor: pointer;
}
.about-us:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 69, 182, 0.4);
  background: linear-gradient(135deg, #0056e0 0%, #003694 100%);
}
.about-us a {
  text-decoration: none;
  color: #fff;
  font-family: 'Inter', 'Segoe UI', Roboto, sans-serif;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.about-us i {
  font-size: 11px;
  color: #fff;
  transition: transform 0.3s ease;
}
.about-us:hover i {
  transform: translateX(4px);
}

/* ── Services Section ── */
.services-section {
  margin-top: 40px;
}
.services-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #0045b6;
  margin-bottom: 16px;
  line-height: 1;
}
.services-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
}

/* ── Card ── */
.service-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none;
  background: #f4f7fd;
  border: 1.5px solid #dce6f7;
  border-radius: 14px;
  padding: 20px 10px 14px;
  gap: 10px;
  position: relative;
  transition: all 0.28s ease;
  cursor: pointer;
}
.service-card:hover {
  background: #0045b6;
  border-color: #0045b6;
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 69, 182, 0.22);
}
.card-icon-wrap {
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0,69,182,0.1);
  flex-shrink: 0;
  transition: background 0.28s ease;
}
.service-card:hover .card-icon-wrap {
  background: #fff;
}
.card-icon-wrap img {
  width: 36px;
  height: 36px;
  object-fit: contain;
}
.card-title {
  font-size: 12px;
  font-weight: 600;
  color: #1a3a6e;
  line-height: 1.35;
  transition: color 0.28s ease;
}
.service-card:hover .card-title {
  color: #fff;
}
.card-arrow {
  font-size: 11px;
  color: #0045b6;
  opacity: 0;
  transform: translateX(-4px);
  transition: all 0.28s ease;
}
.service-card:hover .card-arrow {
  opacity: 1;
  color: #fff;
  transform: translateX(0);
}

/* ── Tablet ── */
@media (max-width: 990px) {
  .welcome h3 {
    color: #0045b6;
    font-size: 18px;
  }
  .welcome p {
    font-size: 15px;
  }
  .about-us a {
    font-size: 12px;
    padding-top: 5px;
  }
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* ── Mobile ── */
@media (max-width: 500px) {
  .welcome {
    padding: 0 4%;
  }
  .welcome h3 {
    color: #0045b6;
    font-size: 16px;
  }
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .service-card:last-child:nth-child(odd) {
    grid-column: 1 / -1;
    max-width: 180px;
    margin: 0 auto;
  }
  .card-icon-wrap {
    width: 48px;
    height: 48px;
  }
  .card-icon-wrap img {
    width: 28px;
    height: 28px;
  }
  .card-title {
    font-size: 11px;
  }
}
</style>
