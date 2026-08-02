<template>
    <section>
        <div class="page-banner">
            <h2 class="banner-title">LATEST NEWS</h2>
        </div>
        <div class="row mt-5 detail-header">
            <div class="col-lg-3 col-md-4">
                <div class="side-link" :class="{'active-link' : category == 'one'}" @click="category = 'one'">
                    <a :class="{'text-white' : category == 'one'}">Events</a>
                </div>
                
            </div>
            <div class="col-lg-9 col-md-8">
                <a href="" class="float-end contact-btn me-4">Contact Us</a>
                <p class="show-link">
                    <router-link to="/">Home</router-link>&nbsp;/&nbsp;
                    <router-link to="/">News & Events</router-link>&nbsp;/&nbsp;
                    Event1
                </p>

                <div class="row mt-3 pt-3 detail-content">
                    <h3>Sosialisasi Program Pengungkapan Sukarela (PPS)</h3>
                    <p>
                        We are excited to announce that PKF Arsilon, our member firm headquartered in Paris, will be recruiting 80 new employees across France.
                    </p>
                    <p>
                        This recruitment drive forms a key part of PKF Arsilon’s growth strategy and will see the firm create 80 new permanent and fixed-term positions. With opportunities at junior and experienced levels, PKF Arsilon is seeking individuals with technical and sector-specific skills who are passionate about delivering exceptional client service. Internships and work-study positions will also be offered.
                    </p>
                    <p>
                        Providing a broad range of services (including audit, accounting, tax, legal and consulting), PKF Arsilon supports organisations and entrepreneurs in all stages of their structuring, development and transformation. Fabien Labussière, Director of Human Resources, explains, “PKF Arsilon brings together nearly 800 employees in 26 offices across the country. Joining us means choosing a firm on a human scale where relationships and balances of life are our priorities.”
                    </p>
                    <p>
                        Successful candidates will enjoy a diverse career path at PKF Arsilon and opportunities to progress within the firm. The company is committed to developing the skills of its teams and offers a training programme to all employees, irrespective of their role within the business. Staff are actively encouraged to pursue personal development courses and are supported in their studies towards professional qualifications (such as the DEC (Diploma in Accounting Expertise) and the DSCG (Higher Diploma in Accounting and Management).
                    </p>
                    <p>
                        To find out more about vacancies at PKF Arsilon, please visit www.pkf-arsilon.com/rejoignez-nous.
                    </p>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
import {  onMounted, onUpdated, ref } from 'vue'
    export default {
        setup() {
            
            onMounted(() => {
                setTimeout(() => {
                    window.scrollTo(0,0)
                }, 100);
            })
            onUpdated(() => {
                window.scrollTo(0,0)
            })

            let category = ref('del later this');

            return {category}
        }
    }
</script>

<style scoped>
    .detail-hero {
        position: relative;
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
    .detail-header {
        padding: 0px 12%;
    }
    .detail-content h3 {
        color: #0045b6;
    }
    .detail-content p {
        font-size: 13px;
        color: #5d5d5e;
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
    @media (max-width:450px) {
        .detail-header {
            display: flex;
            flex-direction: column-reverse;
        }
        .detail-content h3 {
            color: #0045b6;
            font-size: 18px;
        }
        .detail-content p {
            font-size: 12px;
            color: #5d5d5e;
        }

    }
</style>
