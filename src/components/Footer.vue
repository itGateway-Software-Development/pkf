<template>
  <footer class="immersive-footer">
    <div class="container py-5 px-4 px-lg-5 text-white position-relative z-1">
      <div class="row gy-5">
        <!-- Brand & Social -->
        <div class="col-lg-4 col-md-12 pe-lg-5">
          <div class="brand-section mb-4">
            <div class="logo-wrapper bg-white d-inline-block px-3 py-2 rounded mb-3 shadow-sm">
              <img src="../assets/images/logo.png" alt="PKF Myanmar Logo" class="footer-logo" />
            </div>
            <h3 class="fw-bold mb-3 tracking-wide text-uppercase" style="color: #ffffff; font-size: 1.4rem;">PKF Myanmar</h3>
            <p class="footer-tagline pe-md-4">
              Empowering your business with expert audit, tax, and advisory solutions in Myanmar and beyond.
            </p>
          </div>
          <div class="social-links-wrapper d-flex gap-3 mb-4">
            <a href="https://www.linkedin.com/in/pkf-myanmar-a4a151298" target="_blank" class="social-link"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="https://www.facebook.com/profile.php?id=61552517021210" target="_blank" class="social-link"><i class="fa-brands fa-facebook-f"></i></a>
          </div>
          
          <a href="https://www.pkf.com/" target="_blank" class="pkfi-btn">
            <i class="fa-solid fa-earth-americas me-2"></i> PKF International
          </a>
        </div>

        <!-- Contact Information -->
        <div class="col-lg-4 col-md-6 mt-5 mt-lg-4">
          <h5 class="footer-heading mb-4">Contact Us</h5>
          <ul class="contact-list list-unstyled">
            <li class="d-flex mb-4">
              <div class="icon-box me-3">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div class="contact-text">
                706-708, 7th Floor, Bld B, Gonyi Residence,<br />
                Corner of Upper Pansodan Rd. &amp; Myanma Gonyi St.,<br />
                Mingalar Taung Nyunt T/S, Yangon, Myanmar.
              </div>
            </li>
            <li class="d-flex mb-4">
              <div class="icon-box me-3">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div class="contact-text pt-1">
                +959 799907720
              </div>
            </li>
            <li class="d-flex mb-3">
              <div class="icon-box me-3">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div class="contact-text pt-1">
                info@pkf.com.mm
              </div>
            </li>
          </ul>
        </div>

        <!-- Network Disclaimer -->
        <div class="col-lg-4 col-md-6 mt-5 mt-lg-4">
          <h5 class="footer-heading mb-4">Our Network</h5>
          <div class="disclaimer-box p-4 rounded shadow-sm">
            <p class="mb-3 d-flex align-items-start fw-bold">
              <i class="fa-solid fa-circle-check mt-1 me-2" style="color: #ffffff;"></i>
              <span>PKF Myanmar member of PKF International</span>
            </p>
            <p class="small lh-base m-0 text-justify">
              PKF Myanmar is a member firm of the PKF International Limited
              family of legally independent firms and does not accept any
              responsibility or liability for the actions or inactions of any
              individual member or correspondent firm or firms.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Copyright -->
    <div class="footer-bottom position-relative z-1">
      <div class="container px-4 px-lg-5">
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center py-4">
          <p class="mb-0 small">&copy; 2021 PKF Myanmar. All Rights Reserved.</p>
          <div class="footer-bottom-links mt-3 mt-md-0 d-flex gap-4">
            <a href="#" class="small text-white text-decoration-none footer-link-hover">Privacy Policy</a>
            <a href="#" class="small text-white text-decoration-none footer-link-hover">Terms of Use</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
/* Force text white and bold against global inherited styles */
.immersive-footer p,
.immersive-footer div,
.immersive-footer span,
.immersive-footer a,
.immersive-footer i {
  color: #ffffff !important;
  font-weight: bold !important;
}

/* Ensure icons stay white and heading stays white */
.immersive-footer h3,
.immersive-footer h5 {
  color: #ffffff !important;
  font-weight: bold !important;
}

.footer-bottom-links a:hover {
  text-decoration: underline !important;
}

.immersive-footer {
  background: linear-gradient(135deg, #0a2656 0%, #0f3780 100%);
  color: #ffffff;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  border-top: 4px solid #000000;
}

/* Subtle background accent overlay */
.immersive-footer::before {
  content: "";
  position: absolute;
  top: -30%;
  right: -5%;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 0, 0, 0.2), transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.footer-logo {
  width: 90px;
  height: auto;
}

.tracking-wide {
  letter-spacing: 1px;
}

.footer-tagline {
  font-size: 0.9rem;
  line-height: 1.7;
}

.footer-heading {
  font-weight: 700;
  font-size: 1.25rem;
  color: #fff;
  position: relative;
  padding-bottom: 0.75rem;
}

.footer-heading::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 3px;
  background: #000000;
  border-radius: 2px;
}

/* Social Links */
.social-links-wrapper {
  margin-top: 1.5rem;
}
.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  text-decoration: none;
}
.social-link:hover {
  background: #000000;
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}

/* PKFI Button */
.pkfi-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.6rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  text-decoration: none;
  border-radius: 30px;
  font-size: 0.95rem;
  font-weight: 600;
  transition: all 0.3s ease;
}
.pkfi-btn:hover {
  background: #000000;
  border-color: #000000;
  color: #fff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
}

/* Contact List */
.icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.4);
  color: #ffffff;
  font-size: 1rem;
  flex-shrink: 0;
}
.contact-text {
  font-size: 0.95rem;
  line-height: 1.6;
}

/* Disclaimer Box */
.disclaimer-box {
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-left: 3px solid #000000;
}
.text-justify {
  text-align: justify;
}

/* Bottom Copyright */
.footer-bottom {
  background: rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}
</style>
