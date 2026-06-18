<template>
  <section class="people-page">

    <!-- Banner -->
    <div class="people-banner">
      <h2 class="banner-title">OUR PEOPLE</h2>
    </div>

    <!-- Breadcrumb -->
    <div class="people-breadcrumb-wrap">
      <p class="show-link mb-0">
        <router-link to="/">Home</router-link>&nbsp;/&nbsp;Our People
      </p>
    </div>

    <!-- Intro -->
    <div class="people-intro">
      <h3>Meet Our Team</h3>
      <p>Our team of experienced professionals brings deep expertise across audit, tax, advisory, and business services. Each member is committed to delivering quality, integrity, and value to our clients.</p>
    </div>

    <!-- People List -->
    <div class="people-container">

      <!-- Person Card -->
      <div
        v-for="(person, index) in people"
        :key="index"
        class="person-card"
        :class="{ expanded: expanded === index }"
      >
        <div class="person-header" @click="toggle(index)">
          <!-- Left: Photo + Contact -->
          <div class="person-left">
            <div class="person-photo-wrap">
              <img
                :src="person.photo"
                :alt="person.name"
                class="person-photo"
                @error="onImgError"
              >
            </div>
            <div class="person-contact">
              <p v-if="person.email"><i class="fa-solid fa-envelope me-2"></i>{{ person.email }}</p>
              <p v-if="person.phone"><i class="fa-solid fa-phone me-2"></i>{{ person.phone }}</p>
              <a v-if="person.linkedin" :href="'https://' + person.linkedin" target="_blank" rel="noopener" class="linkedin-link">
                <i class="fa-brands fa-linkedin me-2"></i>LinkedIn
              </a>
            </div>
          </div>

          <!-- Right: Name + Position + Bio toggle -->
          <div class="person-right">
            <div class="person-meta">
              <span class="person-position">{{ person.position }}</span>
              <h3 class="person-name">{{ person.name }}</h3>
            </div>
            <div class="person-bio-preview">
              <p>{{ person.bio[0] }}</p>
            </div>
            <button class="expand-btn">
              {{ expanded === index ? 'Show Less' : 'Read Full Bio' }}
              <i class="fa-solid ms-2" :class="expanded === index ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
            </button>
          </div>
        </div>

        <!-- Expanded Full Bio -->
        <transition name="slide-bio">
          <div v-if="expanded === index" class="person-fullbio">
            <div v-for="(para, i) in person.bio.slice(1)" :key="i">
              <p>{{ para }}</p>
            </div>
          </div>
        </transition>
      </div>

    </div>

  </section>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const expanded = ref(null)

    const toggle = (index) => {
      expanded.value = expanded.value === index ? null : index
    }

    const onImgError = (e) => {
      e.target.src = 'https://ui-avatars.com/api/?name=PKF&background=0045b6&color=fff&size=200'
    }

    const people = [
      {
        name: 'Thida Cho Win',
        position: 'Managing Partner',
        email: 'thidachowin@pkf.com.mm',
        phone: '09-5150902',
        linkedin: 'www.linkedin.com/in/thida-cho-win-6a68403b/',
        photo: '/downloads/people/thida.png',
        bio: [
          'Thida is a qualified CPA with more than 30 years with a specialized audit and tax firm in Myanmar. She draws on her vast experience as an auditor and tax advisor serving Myanmar and international enterprises. She advises clients on corporate taxation, controversy, withholding taxes, commercial tax, compliance and investment issues. Her experience with international standard assurance makes her well-placed to advise clients in a wide range of business sectors on taxation, market entry, corporate establishment and investment licensing.',
          'She holds a bachelor\'s degree in Commerce from the Yangon Institute of Economics with the distinction of Management Science in 1991 and obtained her Diploma in International Financial Reporting Standards (Dip. IFR) with the Association of Chartered Certified Accountants (ACCA) in June 2010 and She completes the fundamental level of ACCA in June 2011 and currently, she is a candidate in the Professional level of ACCA as well. She completed her attending in the certification course of ASEAN Economics Studies in December 2012. She obtained her Postgraduate Diploma in Intellectual Property Law (DIPL) with University of Yangon in December 2019.',
          'With her firm grasp of practical compliance and accounting issues, Thida has assisted Myanmar businesses with audit and tax clearance across industries ranging from hospitality to heavy manufacturing. As a managing partner, she has successfully delivered professional services to the public sector in recent years for projects such as Japan\'s grant assistance for grassroots Human Security Project (GGP) (From 2012-13 to Present), Financial audit and agreed-upon procedure for Save the Children International (2024), expenditure verification of Enhancing Social and Economic Development through Civil Society and Local Authority Engagement in Rakhine State implemented by Relief International, UK (2022), Durable Peace Programme (DDP) implemented by Oxfam Novib (2022), Poverty and Hunger Alleviation through Support, Empowerment and Increased Networking-Phase 2 project implemented by Action Contre La Faim (ACF) and Danish Refugee Council (DRC) (2023) and Strengthening resilience in a COVID-19 project implemented by Dan Church Aid (DCA) (2023), statutory audit and agreed-upon procedures service for Finn Church Aid, Myanmar (From Year 2022 to present) together with her team.',
          'Her comprehensive knowledge, experience and continuous learning will lead clients to achieve unique services.'
        ]
      },
      {
        name: 'Myint Myint San',
        position: 'Engagement Partner',
        email: 'myintmyitsan@pkf.com.mm',
        phone: '09-450022623',
        linkedin: 'www.linkedin.com/in/myint-myint-san',
        photo: '/downloads/people/myint.png',
        bio: [
          'Myint is a qualified CPA with more than 15 years with a specialized audit in Myanmar. Also has a two-year experience as an Accountant in private sector. She draws on her vast experience as an auditor serving Myanmar and international enterprises. Her experience with international standard assurance makes her well-placed to specialize statutory and other audit, agreed-upon procedures service. As an engagement partner of one of the leading accounting and audit firms in Myanmar, she has provided the services together with strong and extensive audit experience in various sectors.',
          'She holds a bachelor\'s degree in Commerce from the Yangon Institute of Economic in 2006. She obtained her Diploma in International Financial Reporting Standards (Dip. IFR) with the Association of Chartered Certified Accountants (ACCA) in 2015 and also obtained Diploma in Business Law with Law Department, Yangon University in 2016.',
          'Concerning public sector that are funded by international development partners (IDPs) and NGOs, she has recently completed an audit for projects such as Enhancing Social and Economic Development through Civil Society and Local Authority Engagement in Rakhine State implemented by Relief International, UK (2022), Durable Peace Programme (DPP) implemented by Oxfam Novib (2022), statutory audit and agreed-upon procedures service for Finn Church Aid, Myanmar (From Year 2022 to present) together with her team.'
        ]
      },
      {
        name: 'Chaw Nandar Aung',
        position: 'Director',
        email: 'chawnandaraung@pkf.com.mm',
        phone: '09-964884324',
        linkedin: 'www.linkedin.com/in/chaw-nandar-aung-93867a191',
        photo: '/downloads/people/chaw.jpg',
        bio: [
          'Chaw is an experienced management professional with over 15 years in the business advisory field. Her expertise covers a wide range of services, including company establishment, investment licensing, taxation, liquidation, and corporate secretarial matters. Throughout her career, she has led high-performing teams in delivering tailored non-assurance services and agreed-upon procedures to both local and international clients. Her ability to guide clients through regulatory and operational complexities has earned her a strong reputation in the advisory services sector.',
          'She holds a Bachelor\'s degree in Science and a Master of Business Administration from the Swiss School of Business Research (SSBR) in Switzerland. Her academic achievements also include the LCCI Group Diploma in Accounting (UK) and professional diplomas in Human Resources and Business Management endorsed by ABE, as well as advanced qualifications such as the Business Management Higher Diploma (BMHD) and Business Management Advanced Diploma (BMAD).',
          'In addition to her academic qualifications, Chaw is dedicated to continuous learning and professional development. She has completed a broad range of specialized courses, including bookkeeping and accounting from the Auditor General\'s Office, applied accounting and management from UMFCCI, ASEAN economic studies, labor law, and IFRS adoption. She has also undertaken training in trademark and copyright regulations, as well as various programs related to human resources, administration, and management.',
          'Currently, Chaw serves as a Board Director and leads the Business Development and Client Services team at her firm. Her leadership focuses on expanding non-audit services while maintaining high standards of client satisfaction. With her strong technical knowledge, client-focused mindset, and strategic leadership, she continues to play a key role in helping clients navigate their financial and operational goals successfully.'
        ]
      },
      {
        name: 'Nway Nandar Aung',
        position: 'Audit Manager',
        email: 'nwaynandaraung@pkf.com.mm',
        phone: '09-421086629',
        linkedin: null,
        photo: '/downloads/people/nway.jpg',
        bio: [
          'Nway holds a Bachelor of Arts in Business Management from Dagon University and has continuously built her professional foundation with a strong portfolio of certifications in finance and accounting. She earned a Diploma in Accounting from LCCI, along with additional qualifications from ACCA, including Diploma in International Financial Reporting\' Diploma in Accounting and Business. She possesses a Certificate in Corporate and Business Law to enhance her professional skills.',
          'Currently, Nway is pursuing both Part II of the ACCA program and her CPA credential from the Myanmar Accountancy Council. In addition to her academic and professional qualifications, Nway is proficient in ERP systems, including Tally ERP and Odoo, which enhance her ability to manage complex financial data and deliver efficient, tech-enabled accounting solutions for clients.',
          'With nearly two decades of experience in the fields of accounting and auditing, Nway has worked with a broad spectrum of local and international organizations, handling clients across industries. Her career encompasses not only technical accounting and reporting but also advisory roles that require sound judgment, attention to detail, and regulatory compliance. Her extensive background covers financial statement audits, account compilation, and expenditure verification, among other assurance and non-assurance services.',
          'As a manager, Nway plays a pivotal role in team leadership and knowledge sharing. She is deeply invested in the professional growth of her team, providing hands-on coaching and structured guidance to junior and senior staff alike. Through her mentorship, she ensures that audit and accounting work is carried out with accuracy, integrity, and alignment to client expectations.'
        ]
      },
      {
        name: 'Min Min Thaung',
        position: 'Audit Manager',
        email: 'minminthaung@pkf.com.mm',
        phone: '09-979277230',
        linkedin: null,
        photo: '/downloads/people/min.png',
        bio: [
          'Min holds a Bachelor\'s degree in Accounting and is a licensed Certified Public Accountant (CPA) in Myanmar. She is currently advancing her professional qualifications as a Part II candidate of the Association of Chartered Certified Accountants (ACCA). In addition to her academic credentials, she has developed strong technical skills through hands-on experience with computerized accounting systems such as Peachtree, SAP, Tally ERP, and the Inflo audit platform, enhancing her efficiency and adaptability in modern audit environments.',
          'With over 17 years of professional experience in auditing and accounting, Min brings deep and well-rounded expertise to her role. She began her career in the public sector, serving more than four years in various capacities at the Office of the Union Auditor General, where she gained valuable insights into public financial accountability. She also gained practical experience as a full-spectrum accountant, giving her strong foundational knowledge of financial operations.',
          'Min\'s extensive experience in auditing spans across multiple industries, non-profit organizations, and charities, equipping her with a keen understanding of sector-specific requirements. She has developed strong capabilities not only in auditing financial statements but also in preparing audit reports and management letters that deliver actionable insights to clients.',
          'She is also highly skilled in supervising and mentoring audit teams, guiding both senior and junior auditors through fieldwork and ensuring the quality and consistency needed to support well-founded audit opinions. Min\'s combination of technical proficiency, regulatory knowledge, and leadership in audit execution makes her a valuable asset to clients seeking accuracy, insight, and compliance in their financial reporting.'
        ]
      },
      {
        name: 'Tin Zar Lynn',
        position: 'Financial Controller',
        email: 'tinzarlynn@pkf.com.mm',
        phone: '09-757628060',
        linkedin: null,
        photo: '/downloads/people/tinzarlynn.jpg',
        bio: [
          'Tin Zar Lynn is a seasoned finance and audit professional with over 12 years of progressive experience across public, private, and multinational sectors. She holds a Bachelor of Commerce from Yangon Institute of Economics and Myanmar CPA, and has completed her MBA coursework and thesis from Meiktila University of Economics.',
          'Her core expertise spans financial auditing, corporate reporting, compliance, and financial planning. With a strong foundation in accounting principles and a deep understanding of both IFRS and Myanmar regulatory requirements, she brings a well-rounded perspective to financial leadership.',
          'She experienced as the position of Chief Accountant at a joint venture organization, where she was responsible for preparing consolidated financial statements, business planning, MIC reporting, and overseeing intercompany transactions. Her leadership ensured alignment with audit standards, effective budget monitoring, and smooth coordination with internal and external auditors.',
          'Her experience includes seven years with the Department of Hydropower Implementation under the Ministry of Electricity and Energy, where she managed foreign exchange budgeting, loan disbursement and financial reporting for large-scale infrastructure projects. Known for her strengths in governance, compliance, leadership, and cross-functional teamwork, she brings a meticulous, solution-oriented approach to every assignment.',
          'She is currently serving as a Financial Controller cum Audit Manager and leads audits of financial statements, conducts internal control reviews, and engages with clients to ensure audit quality and compliance.'
        ]
      }
    ]

    onMounted(() => {
      window.scrollTo(0, 0)
    })

    return { people, expanded, toggle, onImgError }
  }
}
</script>

<style scoped>
/* ── Banner ─────────────────────────────── */
.people-page {
  position: relative;
}
.people-banner {
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

/* ── Breadcrumb ──────────────────────────── */
.people-breadcrumb-wrap {
  padding: 24px 9% 0;
}

/* ── Intro ───────────────────────────────── */
.people-intro {
  text-align: center;
  padding: 28px 9% 28px;
  max-width: 760px;
  margin: 0 auto;
}
.people-intro h3 {
  font-size: 1.8rem;
  font-weight: 800;
  color: #0f3780;
  margin-bottom: 14px;
}
.people-intro p {
  color: #555;
  font-size: 15px;
  line-height: 1.7;
}

/* ── People Container ────────────────────── */
.people-container {
  padding: 10px 9% 60px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

/* ── Person Card ─────────────────────────── */
.person-card {
  background: #fff;
  border-radius: 14px;
  border-left: 5px solid #0045b6;
  box-shadow: 0 4px 20px rgba(0, 69, 182, 0.08);
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}
.person-card:hover {
  box-shadow: 0 8px 32px rgba(0, 69, 182, 0.15);
}
.person-card.expanded {
  border-left-color: #002d7a;
}

.person-header {
  display: flex;
  gap: 28px;
  padding: 28px;
  cursor: pointer;
  align-items: flex-start;
}

/* ── Left column ─────────────────────────── */
.person-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 160px;
  max-width: 180px;
  gap: 14px;
}
.person-photo-wrap {
  width: 150px;
  height: 170px;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid #e0ebf9;
  background: #f0f4fb;
  flex-shrink: 0;
}
.person-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
}
.person-contact {
  width: 100%;
  text-align: center;
}
.person-contact p,
.person-contact a {
  font-size: 12.5px;
  color: #444;
  margin: 4px 0;
  word-break: break-all;
  display: block;
  text-decoration: none;
  line-height: 1.4;
}
.person-contact i {
  color: #0045b6;
}
.linkedin-link {
  color: #0a66c2 !important;
  font-weight: 600;
}
.linkedin-link i {
  color: #0a66c2 !important;
}

/* ── Right column ────────────────────────── */
.person-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.person-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.person-position {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #0045b6;
  background: #e8f0fe;
  padding: 3px 10px;
  border-radius: 20px;
  display: inline-block;
  width: fit-content;
}
.person-name {
  font-size: 1.35rem;
  font-weight: 800;
  color: #0f3780;
  margin: 0;
}
.person-bio-preview p {
  font-size: 14.5px;
  color: #555;
  line-height: 1.75;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.person-card.expanded .person-bio-preview p {
  -webkit-line-clamp: unset;
  overflow: visible;
}

/* ── Expand Button ───────────────────────── */
.expand-btn {
  align-self: flex-start;
  background: linear-gradient(135deg, #0045b6 0%, #002d7a 100%);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 20px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 69, 182, 0.25);
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
}
.expand-btn i {
  color: #fff !important;
}
.expand-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 69, 182, 0.35);
}

/* ── Full Bio (expanded) ─────────────────── */
.person-fullbio {
  padding: 0 28px 28px calc(28px + 160px + 28px);
  border-top: 1px solid #e8f0fe;
  background: #fafcff;
}
.person-fullbio p {
  font-size: 14.5px;
  color: #444;
  line-height: 1.8;
  margin: 16px 0 0;
}

/* ── Slide transition ────────────────────── */
.slide-bio-enter-active,
.slide-bio-leave-active {
  transition: all 0.35s ease;
  overflow: hidden;
}
.slide-bio-enter-from,
.slide-bio-leave-to {
  max-height: 0;
  opacity: 0;
}
.slide-bio-enter-to,
.slide-bio-leave-from {
  max-height: 1200px;
  opacity: 1;
}

/* ── Responsive ──────────────────────────── */
@media (max-width: 768px) {
  .people-container {
    padding: 10px 5% 40px;
  }
  .people-banner {
    height: 120px;
  }
  .banner-title {
    font-size: 1.5rem;
    letter-spacing: 2px;
  }
  .person-header {
    flex-direction: column;
    align-items: center;
  }
  .person-left {
    max-width: 100%;
    min-width: unset;
  }
  .person-photo-wrap {
    width: 130px;
    height: 148px;
  }
  .person-right {
    align-items: center;
    text-align: center;
  }
  .person-meta {
    align-items: center;
  }
  .expand-btn {
    align-self: center;
  }
  .person-fullbio {
    padding: 16px 18px 24px;
  }
}
</style>
