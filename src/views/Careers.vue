<template>
    <section>
        <div class="page-banner">
            <h2 class="banner-title">JOB OPPORTUNITIES</h2>
        </div>

        <div class="container job-container my-5">
            <!-- Language toggle buttons -->
            <div class="d-flex justify-content-end gap-2 mb-4">
                <button class="btn btn-lang" :class="{ 'btn-lang-active': language === 'my' }" @click="language = 'my'">
                     မြန်မာ
                </button>
                <button class="btn btn-lang" :class="{ 'btn-lang-active': language === 'en' }" @click="language = 'en'">
                     English
                </button>
            </div>

            <div class="job-card shadow-lg p-4 p-md-5 bg-white rounded-4 border-0">
                <!-- English Version -->
                <div v-if="language === 'en'">
                    <div class="text-center mb-5 header-section">
                        <span class="badge bg-primary px-3 py-2 text-uppercase mb-3 rounded-pill fw-semibold shadow-sm" style="background-color: #0045b6 !important;">📢 We Are Hiring! Join Our Growing Team</span>
                        <h1 class="job-title fw-bold mb-3" style="color: #0f3780;">Junior Accountant <span class="d-block fs-5 text-muted fw-normal mt-2">(Tax & Corporate Compliance) – 2 Positions</span></h1>
                        <p class="lead text-secondary mt-4 px-md-5">
                            🌟 <strong>Start your career in Taxation & Corporate Compliance!</strong><br/>
                            Are you a fresh graduate or early-career professional looking to build a strong foundation in accounting, tax, and corporate regulatory work? This is your chance to grow with a professional Audit & Advisory team!
                        </p>
                    </div>

                    <div class="row g-5">
                        <div class="col-lg-6">
                            <div class="job-section mb-5">
                                <h4 class="section-title fw-bold mb-4" style="color: #0045b6;"><i class="fa-solid fa-list-check me-2"></i> What You’ll Do</h4>
                                <ul class="job-list custom-bullet-list">
                                    <li>Prepare monthly, quarterly & annual tax returns</li>
                                    <li>Assist in tax filings with the Internal Revenue Department (IRD)</li>
                                    <li>Support corporate compliance & DICA filings (incorporation, annual returns & statutory documents)</li>
                                    <li>Maintain accurate client records & documentation</li>
                                    <li>Work closely with senior professionals on real client assignments</li>
                                </ul>
                            </div>
                            
                            <div class="job-section mb-4 mb-lg-0 p-4 rounded-4 shadow-sm highlight-box" style="background-color: #f8fbff; border: 1px solid #e0ebf9;">
                                <h4 class="section-title fw-bold mb-4" style="color: #0045b6;"><i class="fa-solid fa-rocket me-2"></i> Why Join Us?</h4>
                                <ul class="job-list list-unstyled feature-list mt-3">
                                    <li class="mb-3 d-flex align-items-start"><i class="fa-solid fa-star text-warning me-3 mt-1"></i> <span>Hands-on experience in real tax & compliance work</span></li>
                                    <li class="mb-3 d-flex align-items-start"><i class="fa-solid fa-star text-warning me-3 mt-1"></i> <span>Learn from experienced professionals</span></li>
                                    <li class="mb-3 d-flex align-items-start"><i class="fa-solid fa-star text-warning me-3 mt-1"></i> <span>Career growth opportunities in accounting & audit field</span></li>
                                    <li class="mb-3 d-flex align-items-start"><i class="fa-solid fa-star text-warning me-3 mt-1"></i> <span>Supportive and learning-focused environment</span></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="job-section mb-5">
                                <h4 class="section-title fw-bold mb-4" style="color: #0045b6;"><i class="fa-solid fa-user-check me-2"></i> Who We’re Looking For</h4>
                                <ul class="job-list custom-bullet-list">
                                    <li>Bachelor’s degree (or final year student) in Accounting, Finance, or Business</li>
                                    <li>Fresh graduates are highly encouraged to apply</li>
                                    <li>Basic understanding of Myanmar Tax Law & Companies Law (advantage)</li>
                                    <li>Strong attention to detail & willingness to learn</li>
                                    <li>Good communication & teamwork skills</li>
                                    <li>Proficient in Microsoft Excel & Word</li>
                                </ul>
                            </div>

                            <div class="job-section mb-4 mb-lg-0 p-4 rounded-4 shadow-sm highlight-box" style="background-color: #f8fbff; border: 1px solid #e0ebf9;">
                                <h4 class="section-title fw-bold mb-4" style="color: #0045b6;"><i class="fa-solid fa-sack-dollar me-2"></i> Compensation</h4>
                                <ul class="job-list list-unstyled mt-3">
                                    <li class="mb-3 d-flex align-items-start"><i class="fa-solid fa-circle-check text-success me-3 mt-1 fs-5"></i> <span>Salary will be based on qualifications.</span></li>
                                    <li class="mb-3 d-flex align-items-start"><i class="fa-solid fa-circle-check text-success me-3 mt-1 fs-5"></i> <span>Fresh graduates are welcome.</span></li>
                                    <li class="mb-3 d-flex align-items-start"><i class="fa-solid fa-circle-check text-success me-3 mt-1 fs-5"></i> <span>Candidates with relevant experience may negotiate a higher salary.</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="apply-section text-center mt-5 pt-5 border-top">
                        <div class="apply-cta-box bg-light p-5 rounded-4 shadow-sm d-inline-block w-100" style="max-width: 600px;">
                            <h3 class="mb-3 fw-bold" style="color: #0f3780;">Ready to start your career journey?</h3>
                            <p class="text-muted mb-4 fs-5">Apply now and grow with us!</p>
                            <router-link :to="'/careers/' + career + '/apply'" class="contact-btn px-5 py-3" style="font-size: 16px;">
                                Apply Now <i class="fa-solid fa-paper-plane ms-2"></i>
                            </router-link>
                        </div>
                    </div>
                </div>

                <!-- Burmese Version -->
                <div v-else class="burmese-translation">
                    <div class="text-center mb-5 header-section">
                        <span class="badge bg-primary px-3 py-2 text-uppercase mb-3 rounded-pill fw-semibold shadow-sm" style="background-color: #0045b6 !important;">📢 ဝန်ထမ်းများ ခေါ်ယူနေပါသည်! ကျွန်ုပ်တို့နှင့်အတူ လက်တွဲပြီး တိုးတက်အောင်မြင်မည့် အဖွဲ့ဝင်တစ်ဦးအဖြစ် ပါဝင်လိုက်ပါ။</span>
                        <h1 class="job-title fw-bold mb-3" style="color: #0f3780;">Junior စာရင်းကိုင် <span class="d-block fs-5 text-muted fw-normal mt-2">(အခွန်နှင့် ကော်ပိုရိတ် လိုက်နာဆောင်ရွက်မှု) – ၂ ဦး</span></h1>
                        <p class="lead text-secondary mt-4 px-md-5">
                            🌟 <strong>Tax & Corporate လိုက်နာဆောင်ရွက်မှု လုပ်ငန်းခွင်၌ သင်၏ career ကို စတင်လိုက်ပါ!</strong><br/>
                            သင်ဟာ ဘွဲ့ရပြီးခါစသူတစ်ဦးဖြစ်ပါသလား၊ ဒါမှမဟုတ် စာရင်းကိုင်၊ အခွန်နှင့် ကုမ္ပဏီဆိုင်ရာ စည်းမျဉ်းစည်းကမ်းလိုက်နာမှုလုပ်ငန်းများတွင် အခြေခံကောင်းတစ်ခု တည်ဆောက်လိုသော လုပ်ငန်းခွင်အစောပိုင်းအဆင့် ပညာရှင်တစ်ဦးဖြစ်ပါသလား?

ဒါဆိုရင် Professional Audit & Advisory Team နှင့်အတူ လက်တွေ့အတွေ့အကြုံများရယူရင်း သင့်ရဲ့ အသက်မွေးဝမ်းကြောင်းကို တိုးတက်အောင်မြင်စေဖို့ ဒီအခွင့်အရေးကို လက်လွတ်မခံလိုက်ပါနဲ့!
                        </p>
                    </div>

                    <div class="row g-5">
                        <div class="col-lg-6">
                            <div class="job-section mb-5">
                                <h4 class="section-title fw-bold mb-4" style="color: #0045b6;"><i class="fa-solid fa-list-check me-2"></i> လုပ်ဆောင်ရမည့် လုပ်ငန်းတာဝန်များ</h4>
                                <ul class="job-list custom-bullet-list">
                                    <li>လစဉ်၊ သုံးလပတ်နှင့် နှစ်စဉ် အခွန်ကြေညာလွှာများကို ပြင်ဆင်ပေးခြင်း</li>
                                    <li>ပြည်တွင်းအခွန်များဦးစီးဌာန (IRD) သို့ အခွန်ပေးဆောင်ခြင်းနှင့် အခွန်ကြေညာလွှာများ တင်သွင်းခြင်းတို့တွင် ကူညီပေးခြင်း</li>
                                    <li>ကုမ္ပဏီများ၏ ဥပဒေနှင့် စည်းမျဉ်းစည်းကမ်းများ လိုက်နာဆောင်ရွက်နိုင်ရန်နှင့် DICA သို့ တင်သွင်းရမည့် စာရွက်စာတမ်းများ၊ ကုမ္ပဏီတည်ထောင်ခြင်းနှင့် နှစ်စဉ်အစီရင်ခံစာတင်သွင်းခြင်းများတွင် ကူညီပေးခြင်း</li>
                                    <li>ဖောက်သည်များ၏ စာရင်းမှတ်တမ်းများနှင့် သက်ဆိုင်ရာ စာရွက်စာတမ်းများကို စနစ်တကျနှင့် တိကျမှန်ကန်စွာ ထိန်းသိမ်းပေးခြင်း</li>
                                    <li>အတွေ့အကြုံရင့် ကျွမ်းကျင်ပညာရှင်များနှင့်အတူ လက်တွေ့ကျသော သုံးစွဲသူတာဝန်များကို နီးကပ်စွာ ဆောင်ရွက်ခြင်း</li>
                                </ul>
                            </div>
                            
                            <div class="job-section mb-4 mb-lg-0 p-4 rounded-4 shadow-sm highlight-box" style="background-color: #f8fbff; border: 1px solid #e0ebf9;">
                                <h4 class="section-title fw-bold mb-4" style="color: #0045b6;"><i class="fa-solid fa-rocket me-2"></i> ကျွန်ုပ်တို့နှင့်အတူ ဘာကြောင့် ပူးပေါင်းသင့်သလဲ။</h4>
                                <ul class="job-list list-unstyled feature-list mt-3">
                                    <li class="mb-3 d-flex align-items-start"><i class="fa-solid fa-star text-warning me-3 mt-1"></i> <span>အခွန်နှင့် စည်းမျဉ်းစည်းကမ်းလိုက်နာမှုဆိုင်ရာ လုပ်ငန်းများတွင် လက်တွေ့အတွေ့အကြုံများ ရရှိနိုင်ခြင်း</span></li>
                                    <li class="mb-3 d-flex align-items-start"><i class="fa-solid fa-star text-warning me-3 mt-1"></i> <span>အတွေ့အကြုံရှိ ကျွမ်းကျင်ပညာရှင်များထံမှ လေ့လာသင်ယူနိုင်ခြင်း</span></li>
                                    <li class="mb-3 d-flex align-items-start"><i class="fa-solid fa-star text-warning me-3 mt-1"></i> <span>စာရင်းကိုင်နှင့် စာရင်းစစ်နယ်ပယ်တွင် အသက်မွေးဝမ်းကြောင်းအတွက် တိုးတက်နိုင်မည့် အခွင့်အလမ်းများ ရရှိခြင်း</span></li>
                                    <li class="mb-3 d-flex align-items-start"><i class="fa-solid fa-star text-warning me-3 mt-1"></i> <span>အချင်းချင်း ပံ့ပိုးကူညီပေးပြီး လေ့လာသင်ယူမှုကို အားပေးသည့် လုပ်ငန်းခွင်ပတ်ဝန်းကျင်တွင် အလုပ်လုပ်နိုင်ခြင်း</span></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="job-section mb-5">
                                <h4 class="section-title fw-bold mb-4" style="color: #0045b6;"><i class="fa-solid fa-user-check me-2"></i> ရှာဖွေနေသည့် အရည်အချင်းများ</h4>
                                <ul class="job-list custom-bullet-list">
                                    <li>စာရင်းကိုင်၊ ဘဏ္ဍာရေး သို့မဟုတ် စီးပွားရေးဆိုင်ရာ ဘွဲ့ရရှိထားသူ (သို့မဟုတ် နောက်ဆုံးနှစ် ကျောင်းသား/သူ)</li>
                                    <li>ဘွဲ့ရခါစ မောင်မယ်များအားလည်း လျှောက်ထားရန် အထူးတိုက်တွန်းပါသည်</li>
                                    <li>မြန်မာနိုင်ငံ၏ အခွန်ဥပဒေများနှင့် ကုမ္ပဏီများဥပဒေကို အခြေခံနားလည်ထားသူများအား ဦးစားပေးမည်</li>
                                    <li>အသေးစိတ်အချက်အလက်များကို ဂရုတစိုက်ဆောင်ရွက်နိုင်ပြီး အသစ်အဆန်းများကို လေ့လာသင်ယူလိုစိတ်ရှိသူ</li>
                                    <li>ကောင်းမွန်သော ဆက်သွယ်ပြောဆိုနိုင်စွမ်းနှင့် အဖွဲ့လိုက် ပူးပေါင်းဆောင်ရွက်နိုင်စွမ်းရှိသူ</li>
                                    <li>Microsoft Excel နှင့် Word ကို ကောင်းမွန်စွာ အသုံးပြုနိုင်သူ</li>
                                </ul>
                            </div>

                            <div class="job-section mb-4 mb-lg-0 p-4 rounded-4 shadow-sm highlight-box" style="background-color: #f8fbff; border: 1px solid #e0ebf9;">
                                <h4 class="section-title fw-bold mb-4" style="color: #0045b6;"><i class="fa-solid fa-sack-dollar me-2"></i> ခံစားခွင့်များ</h4>
                                <ul class="job-list list-unstyled mt-3">
                                    <li class="mb-3 d-flex align-items-start"><i class="fa-solid fa-circle-check text-success me-3 mt-1 fs-5"></i> <span>လစာကို အရည်အချင်းနှင့် အတွေ့အကြုံအပေါ် မူတည်၍ သတ်မှတ်ပေးမည်ဖြစ်ပါသည်။</span></li>
                                    <li class="mb-3 d-flex align-items-start"><i class="fa-solid fa-circle-check text-success me-3 mt-1 fs-5"></i> <span>ဘွဲ့ရခါစ လူငယ်များလည်း လျှောက်ထားရန် ကြိုဆိုပါသည်။</span></li>
                                    <li class="mb-3 d-flex align-items-start"><i class="fa-solid fa-circle-check text-success me-3 mt-1 fs-5"></i> <span>သက်ဆိုင်ရာ လုပ်ငန်းအတွေ့အကြုံရှိသူများအတွက် လစာကို အရည်အချင်းနှင့် အတွေ့အကြုံအလိုက် ညှိနှိုင်းပေးမည်ဖြစ်ပါသည်။</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="apply-section text-center mt-5 pt-5 border-top">
                        <div class="apply-cta-box bg-light p-5 rounded-4 shadow-sm d-inline-block w-100" style="max-width: 600px;">
                            <h3 class="mb-3 fw-bold" style="color: #0f3780;">သင့်ရဲ့ အောင်မြင်တဲ့ အသက်မွေးဝမ်းကြောင်းခရီးကို ဒီနေ့ပဲ စတင်လိုက်ပါ။</h3>
                            <p class="text-muted mb-4 fs-5">ယခုပဲ လျှောက်ထားပြီး ကျွန်ုပ်တို့နှင့်အတူ ရှေ့ဆက်လိုက်ပါ!</p>
                            <router-link :to="'/careers/' + career + '/apply'" class="contact-btn px-5 py-3" style="font-size: 16px;">
                                ယခုပင် လျှောက်ထားပါ <i class="fa-solid fa-paper-plane ms-2"></i>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { onUpdated, onMounted, ref } from 'vue'
export default {
    props: ['career'],
    setup() {
        const language = ref('en')
        onUpdated(() => {
            window.scrollTo(0,0);
        })
        onMounted(() => {
            window.scrollTo(0,0)
        })
        return {
            language
        }
    }
}
</script>

<style scoped>
    .btn-lang {
        background-color: #e9ecef;
        color: #0045b6;
        font-weight: 600;
        border: none;
        border-radius: 8px;
        padding: 8px 22px;
        font-size: 0.95rem;
        transition: all 0.2s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }
    .btn-lang-active {
        background-color: #0045b6 !important;
        color: #ffffff !important;
    }
    .btn-lang:hover {
        opacity: 0.9;
        transform: translateY(-1px);
    }

    .job-card {
        border-top: 5px solid #0045b6 !important;
        transition: transform 0.3s ease;
    }
    .job-card:hover {
        transform: translateY(-5px);
    }
    .custom-bullet-list {
        list-style: none;
        padding-left: 0;
    }
    .custom-bullet-list li {
        position: relative;
        padding-left: 25px;
        margin-bottom: 12px;
        color: #495057;
        line-height: 1.6;
    }
    .custom-bullet-list li::before {
        content: '✓';
        position: absolute;
        left: 0;
        top: 0;
        color: #0045b6;
        font-weight: bold;
    }
    .highlight-box {
        transition: all 0.3s ease;
    }
    .highlight-box:hover {
        background-color: #eef5ff !important;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05) !important;
    }

    .apply-cta-box {
        border: 2px dashed #e0ebf9;
        transition: all 0.3s ease;
    }
    .apply-cta-box:hover {
        border-color: #0045b6;
        background-color: #f8fbff !important;
    }

    section {
        overflow-x: hidden;
    }
    .career-header {
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

   .career-content {
        padding: 20px 9%;
   }

   @media (max-width:990px) {
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
        .career-form {
            top: 20%;
            left: 30%;
            transform: translate(-50%, -50%);
            padding: .5rem 1rem 1rem;
            min-width: 350px;
        }
        .career-form h2 {
            color: #fff;
            margin-top: 40px;
            font-size: 22px;
        }
        .career-form input {
            margin: 15px 0 5px;
            border: none;        
            padding: 6px 10px;
            border-radius: 7px;
            font-size: 12px;
            width: 250px;
        }
        .career-form button {
            border: none;
            padding: 3px 15px;
            background: #00b5e2;
            border-radius: 7px;
        }
        .career-form button i {
            padding-top: 3px;
        }
        .career-form small {
            display: inline-block;
            color: rgb(240, 239, 239);
            margin-top: 30px;
        }
        .career-form .social {
            margin-top: .7rem;
            display: flex;
            gap: 1rem;
        }

        .career-form .fa-twitter {
            color: #00acee;
            font-size: 20px;
        }
        .career-form .fa-linkedin {
            color: #0A66C2;
            font-size: 20px;
        }
        .career-form .fa-facebook {
            color: #426cc7;
            font-size: 20px;
        }
        .career-form .fa-instagram {
            color: #d62976;
            font-size: 20px;
        }
   }

   @media (max-width:450px) {
        .career-form {
            top: 13%;
            left: 43%;
            transform: translate(-50%, -50%);
            padding: .5rem 1rem 1rem;
            min-width: 300px;
        }
        .career-form a {
            color: #00b5e2;
            font-size: 11px;
        }
        .career-form h2 {
            color: #fff;
            margin-top: 15px;
            font-size: 18px;
        }
        .career-form input {
            margin: 10px 0 5px;
            border: none;        
            padding: 4px 10px;
            border-radius: 7px;
            font-size: 12px;
            width: 250px;
        }
        .career-form button {
            border: none;
            padding: 3px 15px;
            background: #00b5e2;
            border-radius: 7px;
        }
        .career-form button i {
            padding-top: 5px;
        }
        .career-form small {
            display: inline-block;
            color: rgb(240, 239, 239);
            margin-top: 10px;
        }
        .career-form .social {
            margin-top: .5rem;
            display: flex;
            gap: 1rem;
        }

        .career-form .fa-twitter {
            color: #00acee;
            font-size: 16px;
        }
        .career-form .fa-linkedin {
            color: #0A66C2;
            font-size: 16px;
        }
        .career-form .fa-facebook {
            color: #426cc7;
            font-size: 16px;
        }
        .career-form .fa-instagram {
            color: #d62976;
            font-size: 16px;
        }
        .career-content {
            display: flex;
            flex-direction: column-reverse;
        }
   }

   /* Burmese Specific Font Adjustments */
   .burmese-translation,
   .burmese-translation p,
   .burmese-translation li,
   .burmese-translation span {
     font-size: 0.94rem !important;
     line-height: 1.65;
   }
   .burmese-translation h1 {
     font-size: 2.15rem !important;
   }
   .burmese-translation h3 {
     font-size: 1.6rem !important;
   }
   .burmese-translation h4 {
     font-size: 1.35rem !important;
   }
   .burmese-translation .lead {
     font-size: 1.05rem !important;
   }
   .burmese-translation .badge {
     font-size: 0.85rem !important;
   }
   .burmese-translation .contact-btn {
     font-size: 0.9rem !important;
   }
</style>
