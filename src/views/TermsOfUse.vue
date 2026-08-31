<template>
  <div class="terms-of-use">
    <div class="page-banner">
      <h1 class="banner-title">TERMS OF USE</h1>
    </div>

    <div class="container py-5 content-body">
      <p class="text-muted last-updated">Last Updated: August 2026</p>
      
      <section class="mb-4">
        <h3>1. Acceptance of Terms</h3>
        <p>By accessing or using the website of PKF Myanmar (the "Site"), you agree to comply with and be bound by these Terms of Use. If you do not agree with any part of these terms, you must immediately discontinue using our Site.</p>
      </section>

      <section class="mb-4">
        <h3>2. Use of Content</h3>
        <p>All information, text, articles, graphics, and logos on this Site are the property of PKF Myanmar or its content suppliers and are protected by copyright laws. You may view and print content from the Site for your personal, non-commercial use only. Any redistribution, copying, or modifying of the Site's materials without prior written consent from us is strictly prohibited.</p>
      </section>

      <section class="mb-4">
        <h3>3. Professional Disclaimer</h3>
        <p>The content provided on this Site is for general informational purposes only and does not constitute professional accounting, auditing, tax, legal, or advisory services. You should not act or rely on any information on this Site without seeking appropriate professional advice tailored to your specific circumstances.</p>
      </section>

      <section class="mb-4">
        <h3>4. Network Structure</h3>
        <p>PKF Myanmar is a member firm of the PKF International Limited network of legally independent firms. PKF Myanmar does not accept any responsibility or liability for the actions or inactions of any other individual member or correspondent firm. Each member firm operates independently under local laws.</p>
      </section>

      <section class="mb-4">
        <h3>5. Limitation of Liability</h3>
        <p>PKF Myanmar makes no representations or warranties, express or implied, regarding the accuracy, completeness, or reliability of the information on this Site. We will not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of, or inability to use, the Site.</p>
      </section>

      <section class="mb-4">
        <h3>6. Governing Law</h3>
        <p>These Terms of Use shall be governed by and construed in accordance with the laws of the Republic of the Union of Myanmar. Any disputes arising in connection with the Site shall be subject to the exclusive jurisdiction of the courts of Myanmar.</p>
      </section>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'

export default {
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
  }
}
</script>

<style scoped>
.terms-of-use {
  background-color: #fff;
  font-family: 'Aptos', sans-serif;
  color: #334155;
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

.content-body {
  max-width: 900px;
  line-height: 1.8;
}

.last-updated {
  font-size: 0.9rem;
  font-style: italic;
}

h3 {
  color: #104982;
  font-weight: 700;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
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
