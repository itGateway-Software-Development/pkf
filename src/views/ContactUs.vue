<template>
  <section class="contact-us-page">
    <div class="page-banner">
      <h2 class="banner-title">CONTACT US</h2>
    </div>
    
    <div class="container py-5 my-3">
      <div class="row justify-content-center mb-5">
        <div class="col-lg-10 text-center">
          <h3 class="fw-bold mb-3" style="color: #0f3780;">Thank you for your interest in PKF Myanmar</h3>
          <p class="text-secondary lead px-md-5">
            We are here to assist you with your audit, advisory, tax, and compliance needs. Please reach out to our team via the form below or contact our Yangon office directly.
          </p>
        </div>
      </div>

      <div class="row g-5 justify-content-center">
        <!-- Contact Info & Map Card -->
        <div class="col-lg-5 col-md-12">
          <div class="info-card p-4 p-md-5 rounded-4 shadow-lg h-100 bg-white border-0 d-flex flex-column">
            <h4 class="fw-bold mb-4" style="color: #0045b6;"><i class="fa-solid fa-building me-2"></i> Yangon Office</h4>
            
            <div class="contact-details-list">
              <div class="d-flex align-items-start mb-4">
                <div class="icon-wrap me-3"><i class="fa-solid fa-map-location-dot"></i></div>
                <div>
                  <h6 class="fw-bold text-dark mb-1">Our Address</h6>
                  <p class="text-muted small m-0">Room 802, Gonyi Residence, Bo Min Yaung Street, Mingalar Taung Nyunt Township, Yangon, Myanmar.</p>
                </div>
              </div>

              <div class="d-flex align-items-start mb-4">
                <div class="icon-wrap me-3"><i class="fa-solid fa-phone-volume"></i></div>
                <div>
                  <h6 class="fw-bold text-dark mb-1">Phone Numbers</h6>
                  <p class="text-muted small m-0">+959 799907720</p>
                </div>
              </div>

              <div class="d-flex align-items-start mb-4">
                <div class="icon-wrap me-3"><i class="fa-solid fa-envelope-open-text"></i></div>
                <div>
                  <h6 class="fw-bold text-dark mb-1">Email Address</h6>
                  <p class="text-muted small m-0"><a href="mailto:info@pkf.com.mm" class="text-decoration-none fw-semibold" style="color: #0045b6;">info@pkf.com.mm</a></p>
                </div>
              </div>

              <div class="d-flex align-items-start mb-4">
                <div class="icon-wrap me-3"><i class="fa-solid fa-clock"></i></div>
                <div>
                  <h6 class="fw-bold text-dark mb-1">Office Hours</h6>
                  <p class="text-muted small m-0">Monday – Friday: 9:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>

            <!-- Map Iframe Embedded inside Info Card -->
            <div class="map-wrap mt-4 overflow-hidden rounded-3 shadow-xs flex-grow-1 d-flex">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4720.046706379885!2d96.16061047591678!3d16.786326019840534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1edd4f2d32165%3A0xb905b32085af0b71!2sGonyi%20Residence!5e1!3m2!1sen!2sth!4v1773938992779!5m2!1sen!2sth" style="border:0; width: 100%; height: 100%; min-height: 230px; display: block; flex-grow: 1;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

        <!-- Form Card -->
        <div class="col-lg-5 col-md-12">
          <div class="form-card p-4 p-md-5 rounded-4 shadow-lg bg-white border-0 h-100">
            <h4 class="fw-bold mb-4" style="color: #0045b6;"><i class="fa-solid fa-envelope me-2"></i> Send Enquiry</h4>
            <p class="text-muted small mb-4">Complete the form below and a PKF representative will get back to you shortly.</p>

            <form action="https://formspree.io/f/meepbzrv" method="POST" class="w-100">
              <div class="mb-3">
                <label class="form-label small fw-bold text-muted">FULL NAME <span class="text-danger">*</span></label>
                <div class="input-group">
                  <span class="input-group-text bg-light border-end-0"><i class="fa-solid fa-user text-muted"></i></span>
                  <input type="text" class="form-control border-slate custom-input border-start-0" name="FullName" placeholder="e.g. John Doe" required />
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label small fw-bold text-muted">EMAIL ADDRESS <span class="text-danger">*</span></label>
                <div class="input-group">
                  <span class="input-group-text bg-light border-end-0"><i class="fa-solid fa-envelope text-muted"></i></span>
                  <input type="email" class="form-control border-slate custom-input border-start-0" name="Email" placeholder="e.g. john@example.com" required />
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label small fw-bold text-muted">PHONE NUMBER <span class="text-danger">*</span></label>
                <div class="input-group">
                  <span class="input-group-text bg-light border-end-0"><i class="fa-solid fa-phone text-muted"></i></span>
                  <input type="text" class="form-control border-slate custom-input border-start-0" name="PhoneNumber" placeholder="e.g. +959..." required />
                </div>
              </div>

              <div class="mb-4">
                <label class="form-label small fw-bold text-muted">MESSAGE <span class="text-danger">*</span></label>
                <div class="input-group">
                  <span class="input-group-text bg-light align-items-start pt-2 border-end-0"><i class="fa-solid fa-message text-muted mt-1"></i></span>
                  <textarea class="form-control border-slate custom-input border-start-0" name="Message" rows="4" placeholder="How can we help you?" style="resize: none;" required></textarea>
                </div>
              </div>

              <div class="mb-4 p-3 rounded bg-light border border-slate-light">
                <div class="form-check d-flex align-items-start gap-2">
                  <input type="checkbox" class="form-check-input mt-1 border-slate" id="dataConsent" name="PermissionToStoreData" style="flex-shrink: 0; width: 16px; height: 16px;" required />
                  <label class="form-check-label text-muted small fw-medium" for="dataConsent" style="font-size: 0.82rem; line-height: 1.4;">
                    Yes, I give PKF Myanmar permission to store and process my personal data to handle my enquiry in accordance with privacy policies. <span class="text-danger">*</span>
                  </label>
                </div>
              </div>

              <button type="submit" class="btn btn-primary-custom w-100 py-3 fw-bold shadow-xs">
                <i class="fa-solid fa-paper-plane me-2"></i>Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
  },
};
</script>

<style scoped>
.contact-us-page {
  background-color: #f8fafc;
  min-height: 100vh;
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

.info-card, .form-card {
  border-top: 5px solid #0045b6 !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover, .form-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.075) !important;
}

.icon-wrap {
  width: 38px;
  height: 38px;
  background-color: rgba(0, 69, 182, 0.08);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0045b6;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.border-slate {
  border: 1px solid #cbd5e1;
}

.border-slate-light {
  border: 1px solid #e2e8f0;
}

.custom-input {
  font-size: 0.9rem;
}

.custom-input:focus {
  border-color: #0045b6;
  box-shadow: 0 0 0 3px rgba(0, 69, 182, 0.15);
}

.input-group:focus-within .input-group-text {
  border-color: #0045b6;
  color: #0045b6;
}

.btn-primary-custom {
  background: #0045b6;
  border-color: #0045b6;
  color: #ffffff;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.btn-primary-custom:hover {
  background: #002d7a;
  border-color: #002d7a;
  color: #ffffff;
  transform: translateY(-1px);
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
</style>
