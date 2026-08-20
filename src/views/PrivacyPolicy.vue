<template>
  <div class="privacy-policy">
    <div class="page-banner">
      <h1 class="banner-title">PRIVACY POLICY</h1>
    </div>

    <div class="container py-5 content-body">
      <p class="text-muted last-updated">Last Updated: August 2026</p>
      
      <section class="mb-4">
        <h3>Purpose of this Notice</h3>
        <p>This privacy notice describes how PKF Myanmar collects and uses personal data about you, in accordance with applicable data protection laws, including Myanmar’s Electronic Transactions Law and relevant corporate regulations, as amended or updated from time to time ('Data Protection Legislation').</p>
      </section>

      <section class="mb-4">
        <h3>About Us</h3>
        <p>PKF Myanmar and Thida & Partners Ltd. are member firms of the PKF International Limited network of legally independent firms. PKF Myanmar provides professional accounting, audit, tax, advisory, and corporate secretarial services to businesses and individuals, operating locally with offices based in Yangon, Myanmar.</p>
      </section>

      <section class="mb-4">
        <h3>How We May Collect Your Data</h3>
        <p>We obtain personal data about you, for example, when:</p>
        <ul>
          <li>You request a proposal or consultation from us regarding our services;</li>
          <li>Our clients engage us to provide professional services (and during the course of providing those services);</li>
          <li>You contact us directly by email, telephone, post, or social media channels; or</li>
          <li>We retrieve information from third parties and/or publicly available regulatory resources.</li>
        </ul>
      </section>

      <section class="mb-4">
        <h3>The Kind of Information We Hold About You</h3>
        <p>The information we process may include:</p>
        <ul>
          <li><strong>Personal Data:</strong> Name, address, ID/passport number, date of birth, nationality, or other details enabling direct or indirect identification.</li>
          <li><strong>Sensitive Data:</strong> Racial/ethnic origin, religious beliefs, criminal records, biometrics, or union memberships, processed only under explicit legal consent or statutory obligations.</li>
          <li><strong>Contact Details:</strong> Interaction logs regarding service provision, emails, phone numbers, and communications.</li>
          <li><strong>Client Services Data:</strong> Information generated from audits, tax calculations, or secretarial registrations.</li>
          <li><strong>Recruitment Data:</strong> CVs, qualifications, and employment histories submitted to our Careers portal.</li>
        </ul>
      </section>

      <section class="mb-4">
        <h3>How We Use Personal Data We Hold About You</h3>
        <p>We process your data for necessary contract performance with clients and compliance with legal duties. We also process data for legitimate interests (such as statistical checks, security, and service development), provided it does not override your rights and freedoms. We will not use sensitive personal data without your explicit consent unless required by law.</p>
      </section>

      <section class="mb-4">
        <h3>Data Retention</h3>
        <p>We will only retain your personal data for as long as necessary to fulfill the purposes for which it was collected, taking into consideration business service requirements, statutory or legal storage obligations (such as tax and audit record retention terms), and legal advice.</p>
      </section>

      <section class="mb-4">
        <h3>Data Sharing</h3>
        <p>We share your personal data with third parties where required by law, where necessary to administer our client relationship, or where there is a legitimate interest. This includes:</p>
        <ul>
          <li>Government and regulatory authorities in Myanmar (including the Revenue Department, Ministry of Commerce, Directorate of Investment and Company Administration (DICA), and Ministry of Labour);</li>
          <li>Third-party IT, database, and cloud service providers; and</li>
          <li>Other member firms within the PKF International network when necessary for cross-border transactions or compliance audits.</li>
        </ul>
        <p>All third-party service providers are required to take commercially reasonable security measures to protect your personal data in accordance with our instructions.</p>
      </section>

      <section class="mb-4">
        <h3>Transferring Personal Data Outside Myanmar</h3>
        <p>We may transfer the personal data we collect to countries outside of Myanmar (e.g., regional cloud storage or global servers). In these cases, we require that any third-party providers agree to protect and process the data in a manner consistent with appropriate security protocols.</p>
      </section>

      <section class="mb-4">
        <h3>Your Rights in Connection with Personal Data</h3>
        <p>Under certain circumstances, you have the right by law to:</p>
        <ul>
          <li><strong>Request Access:</strong> Receive details of the personal data we hold about you and verify lawful processing.</li>
          <li><strong>Request Correction:</strong> Request correction of any incomplete or inaccurate data we hold.</li>
          <li><strong>Request Erasure:</strong> Ask us to delete or remove personal data where there is no good reason for us to continue processing it.</li>
          <li><strong>Object to Processing:</strong> Object to processing where we rely on a legitimate interest or process data for marketing purposes.</li>
          <li><strong>Request Restriction:</strong> Suspend processing to verify accuracy or reasoning.</li>
          <li><strong>Withdraw Consent:</strong> Withdraw your consent at any time, which will not affect data collected legally prior to withdrawal.</li>
        </ul>
        <p>To exercise any of these rights, please contact our local administration at <strong>info@pkf.com.mm</strong>.</p>
      </section>

      <section class="mb-4">
        <h3>Data Security</h3>
        <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, accessed, altered, or disclosed in an unauthorized way. In addition, we limit data access to employees, agents, and contractors who have a strict business need to know, subject to confidentiality agreements.</p>
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
.privacy-policy {
  background-color: #fff;
  font-family: 'Outfit', sans-serif;
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
  margin-top: 1.8rem;
  margin-bottom: 0.75rem;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 5px;
}

ul {
  padding-left: 1.5rem;
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
