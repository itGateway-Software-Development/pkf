<template>
  <div class="welcome container my-4">
    <h3 class="mb-4">WELCOME TO PKF MYANMAR</h3>
    <p>
      We are partnered with a global network of PKF international. Our director
      and members have operated under the PKF brand since 2018 and have stood as
      a private accounting firm since 2013. Our company represents our
      commitment to providing our clients with a consistent experience and for
      each member to be an Independent ethical professional accountant, improve
      client satisfaction and confidence, and for us to grow together. PKF
      Myanmar
    </p>
    <div class="about-us">
      <router-link to="/about-us">About us <i class="fa-solid fa-chevron-right"></i> </router-link>
    </div>

    <!-- Services Section -->
    <div class="services-section">
      <p class="services-label">OUR SERVICES</p>
      <div class="services-grid">

        <router-link to="/services/assurance" class="service-card">
          <div class="card-icon-wrap">
            <img src="../assets/images/assurance1.png" alt="Audit & Assurance" />
          </div>
          <span class="card-title">Audit &amp; Assurance</span>
          <span class="card-arrow"><i class="fa-solid fa-arrow-right"></i></span>
        </router-link>

        <router-link to="/services/advisory" class="service-card">
          <div class="card-icon-wrap">
            <img src="../assets/images/advisory1.png" alt="Advisory" />
          </div>
          <span class="card-title">Advisory</span>
          <span class="card-arrow"><i class="fa-solid fa-arrow-right"></i></span>
        </router-link>

        <router-link to="/services/tax" class="service-card">
          <div class="card-icon-wrap">
            <img src="../assets/images/tax-legal1.png" alt="Tax" />
          </div>
          <span class="card-title">Tax</span>
          <span class="card-arrow"><i class="fa-solid fa-arrow-right"></i></span>
        </router-link>

        <router-link to="/services/corporate" class="service-card">
          <div class="card-icon-wrap">
            <img src="../assets/images/business-solutions1.png" alt="Corporate Secretarial" />
          </div>
          <span class="card-title">Corporate Secretarial</span>
          <span class="card-arrow"><i class="fa-solid fa-arrow-right"></i></span>
        </router-link>

        <router-link to="/services/account-financial" class="service-card">
          <div class="card-icon-wrap">
            <img src="../assets/images/risk-advisory1.png" alt="Accounting & Financial Reporting" />
          </div>
          <span class="card-title">Accounting &amp; Financial Reporting</span>
          <span class="card-arrow"><i class="fa-solid fa-arrow-right"></i></span>
        </router-link>

      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
  background: #0045b6;
  padding: 3px 16px;
  border-radius: 5px;
}
.about-us a {
  text-decoration: none;
  color: #fff;
}
.about-us i {
  font-size: 12px;
  color: #fff;
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
  /* last item centred if it lands alone */
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
