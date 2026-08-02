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
          'Thida is a certified public accountant (CPA) with over 30 years of experience in auditing and tax services in Myanmar. She helps both local and international companies with tax and compliance needs. She advises clients on business taxes, tax issues, and investments. Her background in international standards helps her guide clients on starting a business, getting licenses, and setting up tax plans.',
          'She graduated with a Bachelor\'s degree in Commerce from the Yangon Institute of Economics in 1991. She holds a Diploma in International Financial Reporting Standards (Dip. IFR) and has completed key levels of the ACCA program. She also studied ASEAN economics and holds a Postgraduate Diploma in Intellectual Property Law from the University of Yangon.',
          'Thida has worked with many different businesses, from hotels to large factories, helping them with audit and tax tasks. As a Managing Partner, she has also led audits for major non-profit organizations and public projects, including programs funded by Japan, Relief International, Save the Children, Oxfam, and Finn Church Aid.',
          'With her deep knowledge and continuous learning, she and her team help clients get the best results for their business.'
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
          'Myint is a certified public accountant (CPA) with more than 15 years of experience in auditing in Myanmar. She also worked for two years as an accountant in a private company. She has served both local and international businesses. Her expertise includes standard audits and special financial checks. As an Engagement Partner, she brings strong auditing experience across many industries.',
          'She graduated with a Bachelor\'s degree in Commerce from the Yangon Institute of Economics in 2006. She earned a Diploma in International Financial Reporting Standards (Dip. IFR) from ACCA in 2015, and a Diploma in Business Law from the University of Yangon in 2016.',
          'She has audit experience with public and non-profit projects funded by international partners. This includes work for projects by Relief International, Oxfam Novib, and Finn Church Aid.'
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
          'Chaw has over 15 years of experience as a business advisor. She helps companies set up new businesses, get licenses, manage taxes, close companies, and handle legal paperwork. She has led teams to deliver custom business support and financial reviews to both local and international clients. She is highly skilled at helping companies understand local rules and business setups.',
          'She has a Bachelor\'s degree in Science and a Master of Business Administration (MBA) from the Swiss School of Business Research. She also holds diplomas in accounting (LCCI UK), human resources, and business management.',
          'Chaw regularly takes courses to update her skills. She has studied accounting at the Auditor General\'s Office, business management at UMFCCI, labor law, trademarks, and copyright rules.',
          'Currently, Chaw is a Board Director and leads the Client Services team. She focuses on providing helpful business services to keep clients satisfied and helps them reach their financial and business goals.'
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
          'Nway graduated with a Bachelor\'s degree in Business Management from Dagon University and holds several finance and accounting certificates. She earned an accounting diploma from LCCI, an ACCA diploma in financial reporting, and a certificate in corporate law.',
          'She is currently studying for her CPA qualification and ACCA Part II. Nway is skilled in accounting software like Tally and Odoo, which helps her manage business numbers and financial data easily.',
          'Nway has nearly 20 years of experience in accounting and auditing. She has worked with many local and international groups in different industries. Her work includes standard audits, making financial reports, checking expenses, and advising businesses on financial rules.',
          'As an Audit Manager, Nway leads teams and shares her knowledge. She coaches junior and senior staff to ensure all audit work is done accurately, honestly, and to a high standard.'
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
          'Min has a Bachelor\'s degree in Accounting and is a certified public accountant (CPA) in Myanmar. She is also preparing for her ACCA Part II exams. She is experienced with major accounting programs like Peachtree, SAP, Tally, and the Inflo audit system, which helps her work efficiently.',
          'Min has more than 17 years of experience in auditing and accounting. She started her career working for four years at the Office of the Union Auditor General, where she learned about government finance. She also worked as a general accountant, giving her a strong understanding of daily business finances.',
          'Min has audited many different businesses, charities, and non-profit groups. She is good at checking financial statements, writing audit reports, and giving clear advice to help clients run their businesses better.',
          'She is skilled at managing and teaching audit teams. She guides junior staff during their work to ensure all audits are high quality, consistent, and follow official regulations.'
        ]
      },
      {
        name: 'Tin Zar Lynn',
        position: 'Financial Controller',
        email: 'tinzarlynn@pkf.com.mm',
        phone: '09-757628060',
        linkedin: null,
        photo: '/downloads/people/tinzarlynn.png',
        bio: [
          'Tin Zar Lynn has over 12 years of experience in finance and auditing across government, private, and international companies. She holds a Bachelor of Commerce from the Yangon Institute of Economics, is a Myanmar CPA, and completed her MBA coursework at Meiktila University of Economics.',
          'She specializes in financial audits, business reports, compliance, and financial planning. She has a strong understanding of international accounting standards (IFRS) and Myanmar business rules.',
          'She previously worked as the Chief Accountant for a joint venture company. In that role, she made consolidated financial statements, managed budgets, and worked closely with external auditors to ensure high standards.',
          'She also spent seven years with the Ministry of Electricity and Energy, managing foreign money budgets and financial reports for large power projects. She is known for her leadership and problem-solving skills.',
          'Currently, she is a Financial Controller and Audit Manager. She leads audits of financial statements, reviews internal controls, and helps clients ensure their finances comply with regulations.'
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
    padding: 0 15px;
  }
  .banner-title {
    font-size: 1.5rem;
    letter-spacing: 2px;
    white-space: normal;
    text-align: center;
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
