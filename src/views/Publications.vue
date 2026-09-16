<template>
  <div class="publications">
    <div class="page-banner">
      <h2 class="banner-title">PUBLICATIONS</h2>
    </div>

    <div class="container py-3 py-md-4">


      <!-- Main Content Grid -->
      <div class="row align-items-center g-4 mt-2">
        <!-- Left Side: Publication Title, Description & CTA -->
        <div class="col-lg-7 col-md-12">
          <!-- Main Publication Title -->
          <h1 class="publication-heading fw-bold mb-4">Doing Business in Myanmar</h1>

          <p class="lead-text mb-3">
            We're pleased to launch the latest edition of our Doing Business in Myanmar guide.
          </p>

          <p class="description-text mb-3">
            This publication provides an overview of the key features of the business landscape in Myanmar. With commentary on current business opportunities for foreign investors, entry requirements and the accounting, tax and legal framework, this guide is essential reading for anyone interested in establishing activities in Myanmar.
          </p>

          <p class="cta-text fw-bold mb-3">
            Click on the link below to download your copy of this guide.
          </p>

          <div class="mt-3">
            <a 
              href="/downloads/doing-business-in-myanmar.pdf" 
              download="Doing_Business_in_Myanmar.pdf" 
              target="_blank" 
              class="contact-btn px-4 py-2.5 d-inline-flex align-items-center fw-bold"
              style="border-radius: 6px; font-weight: 700; color: #ffffff;"
            >
              <i class="fa-solid fa-file-pdf me-2 fs-5 text-white" style="color: #ffffff !important;"></i> DOWNLOAD PDF
            </a>
          </div>
        </div>

        <!-- Right Side: Gray Box Container with 3D Tilted Cover Photo -->
        <div class="col-lg-5 col-md-12">
          <div class="mockup-container d-flex align-items-center justify-content-center p-3">
            <img 
              src="/images/doing-business-cover.jpg" 
              alt="Doing Business in Myanmar Book Cover" 
              class="book-3d-mockup img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUpdated } from "vue";

export default {
  name: "Publications",
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
    onUpdated(() => {
      window.scrollTo(0, 0);
    });
  }
};
</script>

<style scoped>
.publications {
  font-family: 'Aptos', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  position: relative;
  overflow-x: hidden;
  background-color: #fff;
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
  font-family: 'Aptos', sans-serif;
  font-size: 2.4rem;
  font-weight: 900;
  letter-spacing: 4px;
  color: #fff;
  margin: 0;
  white-space: nowrap;
}

/* Breadcrumbs */
.breadcrumb-item a {
  font-family: 'Aptos', sans-serif;
  color: #495057;
  text-decoration: underline;
  font-size: 14px;
}
.breadcrumb-item.active {
  font-family: 'Aptos', sans-serif;
  color: #6c757d;
  font-size: 14px;
}

/* Heading */
.publication-heading {
  font-family: 'Aptos', sans-serif;
  color: #003594;
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.publication-date {
  font-family: 'Aptos', sans-serif;
  font-size: 14px;
  color: #6c757d;
}

/* Text Elements */
.lead-text {
  font-family: 'Aptos', sans-serif;
  font-size: 16px;
  color: #222222;
  line-height: 1.65;
}

.description-text {
  font-family: 'Aptos', sans-serif;
  font-size: 15px;
  color: #333333;
  line-height: 1.7;
}

.cta-text {
  font-family: 'Aptos', sans-serif;
  color: #111111;
  font-size: 15px;
  font-weight: 700;
}

/* 3D Mockup Container */
.mockup-container {
  background-color: #eaedf1;
  border-radius: 10px;
  padding: 1.25rem;
  perspective: 1200px;
}

.book-3d-mockup {
  max-height: 280px;
  width: auto;
  border-radius: 4px;
  transform: perspective(1000px) rotateY(-18deg) rotateX(6deg) rotateZ(1deg);
  box-shadow: -12px 12px 24px rgba(0, 0, 0, 0.2), -3px 3px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.book-3d-mockup:hover {
  transform: perspective(1000px) rotateY(-6deg) rotateX(2deg) scale(1.02);
  box-shadow: -16px 16px 30px rgba(0, 0, 0, 0.25);
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
  .publication-heading {
    font-size: 2rem;
  }
}
</style>
