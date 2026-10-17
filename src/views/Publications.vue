<template>
  <div class="publications">
    <div class="page-banner">
      <h2 class="banner-title">PUBLICATIONS</h2>
    </div>

    <div class="container py-4 py-lg-5">
      <!-- Main Publication Card -->
      <div class="publication-card shadow-lg p-4 p-md-5 bg-white rounded-4 border-0">
        <div class="row align-items-center g-4 g-lg-5">
          <!-- Left Side: Publication Title, Description & CTA -->
          <div class="col-lg-7 col-md-12">
            <h1 class="publication-heading fw-bold mb-3" style="color: #0f3780;">
              Doing Business in Myanmar
            </h1>

            <p class="lead-text mb-3">
              We're pleased to launch the latest edition of our <strong>Doing Business in Myanmar</strong> guide.
            </p>

            <p class="description-text mb-4">
              This publication provides an overview of the key features of the business landscape in Myanmar. With commentary on current business opportunities for foreign investors, entry requirements, and the accounting, tax, and legal framework. This guide is essential reading for anyone interested in establishing activities in Myanmar.
            </p>

            <!-- Key Topics Chips -->
            <div class="topics-covered mb-4">
              <span class="topics-label fw-bold d-block mb-2 text-uppercase" style="font-size: 12px; color: #64748b; letter-spacing: 0.5px;">Key Topics Covered</span>
              <div class="d-flex flex-wrap gap-2">
                <span class="topic-chip"><i class="fa-solid fa-check me-1 text-primary"></i> Business &amp; Investment Climate</span>
                <span class="topic-chip"><i class="fa-solid fa-check me-1 text-primary"></i> Company Incorporation &amp; DICA</span>
                <span class="topic-chip"><i class="fa-solid fa-check me-1 text-primary"></i> Myanmar Taxation &amp; Filing</span>
                <span class="topic-chip"><i class="fa-solid fa-check me-1 text-primary"></i> Accounting &amp; Regulatory Compliance</span>
              </div>
            </div>

            <!-- Download Action CTA Box -->
            <div class="download-cta-box p-3 p-md-4 rounded-3 mt-4" style="background-color: #f8fbff; border: 1px solid #e0ebf9;">
              <p class="cta-text fw-semibold mb-3" style="color: #1e293b; font-size: 14.5px;">
                Download your free copy of this comprehensive guide:
              </p>
              <div class="d-flex flex-wrap align-items-center gap-3">
                <a 
                  href="/downloads/doing-business-in-myanmar.pdf" 
                  download="Doing_Business_in_Myanmar.pdf" 
                  target="_blank" 
                  class="contact-btn px-4 py-3 d-inline-flex align-items-center fw-bold shadow-sm"
                  style="border-radius: 8px; font-weight: 700; color: #ffffff !important;"
                >
                  <i class="fa-solid fa-file-pdf me-2 fs-5" style="color: #ffffff !important;"></i>
                  <span style="color: #ffffff !important;">DOWNLOAD PDF</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Right Side: Elevated Showcase Mockup -->
          <div class="col-lg-5 col-md-12 text-center">
            <div class="mockup-stage d-flex flex-column align-items-center justify-content-center p-4 p-md-5">
              <a href="/downloads/doing-business-in-myanmar.pdf" target="_blank" class="d-inline-block text-decoration-none" title="Click to view Doing Business in Myanmar">
                <img 
                  src="/images/doing-business-cover.jpg" 
                  alt="Doing Business in Myanmar Book Cover" 
                  class="book-3d-mockup img-fluid"
                />
                <div class="book-hint mt-3 d-flex align-items-center justify-content-center gap-2">
                  <i class="fa-solid fa-arrow-pointer" style="font-size: 13px; color: #0045b6;"></i>
                  <span style="font-size: 13px; color: #475569; font-weight: 500;">Click the book to view the website version</span>
                </div>
              </a>
            </div>
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
  position: relative;
  overflow-x: hidden;
  background-color: #f8fafd;
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

/* Publication Card */
.publication-card {
  box-shadow: 0 10px 35px rgba(0, 45, 120, 0.08) !important;
  border: 1px solid #e2e8f0 !important;
}

/* Heading */
.publication-heading {
  font-size: calc(1.4rem + 1vw);
  line-height: 1.25;
  letter-spacing: -0.02em;
}

@media (min-width: 1200px) {
  .publication-heading {
    font-size: 2.35rem;
  }
}

/* Text Elements */
.lead-text {
  font-size: 1.05rem;
  color: #334155;
  line-height: 1.7;
}

.description-text {
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.8;
}

/* Topic Chips */
.topic-chip {
  background-color: #f0f7ff;
  color: #0045b6;
  border: 1px solid #d2e5fc;
  font-size: 12.5px;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  transition: all 0.25s ease;
}

.topic-chip:hover {
  background-color: #e2efff;
  transform: translateY(-1px);
}

/* Mockup Stage */
.mockup-stage {
  background: radial-gradient(circle at center, #ffffff 0%, #edf4fc 100%);
  border: 1px solid #dbe7f7;
  border-radius: 18px;
  position: relative;
  box-shadow: inset 0 2px 8px rgba(0, 45, 120, 0.03);
}

.book-3d-mockup {
  max-height: 380px;
  width: auto;
  border-radius: 6px;
  transform: perspective(1200px) rotateY(-14deg) rotateX(4deg);
  box-shadow: -15px 18px 35px rgba(15, 55, 128, 0.2), -3px 5px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.contact-btn,
.contact-btn span,
.contact-btn i {
  color: #ffffff !important;
}

.book-3d-mockup:hover {
  transform: perspective(1200px) rotateY(-5deg) rotateX(1deg) scale(1.03);
  box-shadow: -20px 25px 45px rgba(15, 55, 128, 0.26), -4px 8px 16px rgba(0, 0, 0, 0.1);
}

.book-hint {
  transition: all 0.3s ease;
}

a:hover .book-hint span {
  color: #0045b6 !important;
  text-decoration: underline;
}

a:hover .book-hint i {
  transform: translateY(-2px);
  transition: transform 0.2s ease;
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
    font-size: 1.8rem;
  }
  .book-3d-mockup {
    max-height: 280px;
  }
}
</style>
