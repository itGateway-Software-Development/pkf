<template>
    <section>
        <div class="page-banner">
            <h2 class="banner-title">JOB OPPORTUNITIES</h2>
        </div>

        <div class="container job-container my-5">
            <!-- Top Controls: Role Selection Bar + Language Switcher -->
            <div class="d-flex flex-column flex-lg-row justify-content-between align-items-stretch align-items-lg-center gap-3 mb-4">
                <!-- Role Selector Tabs for 3 Roles -->
                <div class="role-switcher-container p-1 rounded-pill bg-white shadow-sm d-inline-flex flex-wrap align-items-center">
                    <!-- Tab 1: Apprentice -->
                    <button 
                        class="btn btn-role" 
                        :class="{ 'btn-role-active': selectedRole === 'apprentice' }" 
                        @click="selectedRole = 'apprentice'"
                    >
                        <span>Tax & Corporate Services Apprentice</span>
                        <span class="role-badge ms-2">2 Positions</span>
                    </button>

                    <!-- Tab 2: Junior -->
                    <button 
                        class="btn btn-role" 
                        :class="{ 'btn-role-active': selectedRole === 'junior' }" 
                        @click="selectedRole = 'junior'"
                    >
                        <span>Junior Tax & Compliance Associate</span>
                        <span class="role-badge ms-2">2 Positions</span>
                    </button>

                    <!-- Tab 3: Senior -->
                    <button 
                        class="btn btn-role" 
                        :class="{ 'btn-role-active': selectedRole === 'senior' }" 
                        @click="selectedRole = 'senior'"
                    >
                        <span>Senior Tax & Corporate Compliance Associate</span>
                        <span class="role-badge ms-2">2 Positions</span>
                    </button>
                </div>

                <!-- Language toggle buttons -->
                <div class="d-flex justify-content-end align-items-center gap-2">
                    <button class="btn btn-lang" :class="{ 'btn-lang-active': language === 'my' }" @click="language = 'my'">
                         မြန်မာ
                    </button>
                    <button class="btn btn-lang" :class="{ 'btn-lang-active': language === 'en' }" @click="language = 'en'">
                         English
                    </button>
                </div>
            </div>

            <transition name="role-fade" mode="out-in">
                <!-- ========================================================
                     ROLE 1: Tax & Corporate Services Apprentice
                     ======================================================== -->
                <div v-if="selectedRole === 'apprentice'" key="apprentice" class="job-card shadow-lg p-4 p-md-5 bg-white rounded-4 border-0">
                    <div class="text-center mb-5 header-section">
                        <span class="badge bg-primary px-3 py-2 text-uppercase mb-3 rounded-pill fw-semibold shadow-sm" style="background-color: #0045b6 !important;">
                            Paid Apprenticeship (3–6 Months)
                        </span>
                        <h1 class="job-title fw-bold mb-0" style="color: #0f3780;">
                            Tax &amp; Corporate Services Apprentice
                        </h1>
                    </div>

                    <!-- English Version -->
                    <div v-if="language === 'en'">

                        <div class="row g-5">
                            <div class="col-lg-6">
                                <div class="job-section mb-4">
                                    <h4 class="section-title fw-bold mb-4 d-flex align-items-center" style="color: #0045b6;">
                                        <i class="fa-solid fa-list-check me-2 fs-5"></i>
                                        <span>Key Responsibilities</span>
                                    </h4>
                                    <ul class="job-list custom-bullet-list">
                                        <li>Assist in preparing monthly tax payments, quarterly returns, annual tax returns, and tax clearance applications.</li>
                                        <li>Assist with tax compliance matters and liaise with the Internal Revenue Department (IRD) as required.</li>
                                        <li>Support DICA filings, including company incorporation, Annual Returns, and other statutory filings.</li>
                                        <li>Assist in preparing corporate compliance documents and maintaining client records.</li>
                                        <li>Support documentation relating to company liquidation and winding-up procedures.</li>
                                        <li>Assist in researching relevant Myanmar tax regulations, IRD notifications, and corporate compliance requirements.</li>
                                        <li>Assist in preparing client correspondence and following up on outstanding documents.</li>
                                        <li>Perform other related duties assigned by the supervisor.</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="job-section mb-4">
                                    <h4 class="section-title fw-bold mb-4 d-flex align-items-center" style="color: #0045b6;">
                                        <i class="fa-solid fa-user-check me-2 fs-5"></i>
                                        <span>Requirements</span>
                                    </h4>
                                    <ul class="job-list custom-bullet-list">
                                        <li>Bachelor’s degree in Accounting, Finance, Law, Business Administration, or a related field.</li>
                                        <li>Fresh graduates are encouraged to apply; no prior work experience is required.</li>
                                        <li>Basic knowledge of accounting and an interest in tax and corporate compliance.</li>
                                        <li>Basic proficiency in Microsoft Office, particularly Word and Excel.</li>
                                        <li>Good attention to detail and organizational skills.</li>
                                        <li>Good communication and interpersonal skills.</li>
                                        <li>Willingness to learn, work as part of a team, and meet deadlines.</li>
                                    </ul>
                                </div>

                                <div class="job-section p-4 rounded-4 shadow-sm highlight-box mt-4" style="background-color: #f8fbff; border: 1px solid #e0ebf9;">
                                    <h4 class="section-title fw-bold mb-3 d-flex align-items-center" style="color: #0045b6;">
                                        <i class="fa-solid fa-award me-2 fs-5"></i>
                                        <span>What We Offer</span>
                                    </h4>
                                    <ul class="job-list custom-bullet-list mb-0">
                                        <li>Paid, full-time apprenticeship for 3–6 months.</li>
                                        <li>Practical training and guidance from experienced professionals.</li>
                                        <li>Exposure to tax compliance, DICA filings, and corporate regulatory matters.</li>
                                        <li>Opportunity to be considered for permanent employment based on performance and business requirements.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="apply-section text-center mt-5 pt-5 border-top">
                            <div class="apply-cta-box bg-light p-5 rounded-4 shadow-sm d-inline-block w-100" style="max-width: 600px;">
                                <h3 class="mb-4 fw-bold" style="color: #0f3780;">Apply now and grow with us!</h3>
                                <router-link to="/jobopportunities/tax-corporate-services-apprentice/apply" class="contact-btn px-5 py-3" style="font-size: 16px;">
                                    Apply Now
                                </router-link>
                            </div>
                        </div>
                    </div>

                    <!-- Burmese Version -->
                    <div v-else class="burmese-translation">

                        <div class="row g-5">
                            <div class="col-lg-6">
                                <div class="job-section mb-4">
                                    <h4 class="section-title fw-bold mb-4 d-flex align-items-center" style="color: #0045b6;">
                                        <i class="fa-solid fa-list-check me-2 fs-5"></i>
                                        <span>အဓိကတာဝန်ယူရမည့် လုပ်ငန်းများ</span>
                                    </h4>
                                    <ul class="job-list custom-bullet-list">
                                        <li>လစဉ်အခွန်ပေးဆောင်မှုများ၊ သုံးလပတ်နှင့် နှစ်စဉ်အခွန်ကြေညာလွှာများနှင့် အခွန်ရှင်းလင်းကြောင်းလက်မှတ် လျှောက်ထားခြင်းများတွင် ကူညီပေးခြင်း။</li>
                                        <li>အခွန်ဆိုင်ရာကိစ္စရပ်များနှင့် ပြည်တွင်းအခွန်များဦးစီးဌာန (IRD) နှင့် လိုအပ်သလို ဆက်သွယ်ဆောင်ရွက်ရာတွင် ကူညီပေးခြင်း။</li>
                                        <li>ကုမ္ပဏီတည်ထောင်ခြင်း၊ နှစ်စဉ်အစီရင်ခံစာ (Annual Return) တင်သွင်းခြင်းနှင့် အခြားဥပဒေအရ တင်သွင်းရမည့် DICA ကိစ္စရပ်များကို ပံ့ပိုးပေးခြင်း။</li>
                                        <li>ကုမ္ပဏီလိုက်နာမှုဆိုင်ရာ စာရွက်စာတမ်းများ ပြင်ဆင်ခြင်းနှင့် သုံးစွဲသူမှတ်တမ်းများကို စနစ်တကျ ထိန်းသိမ်းပေးခြင်း။</li>
                                        <li>ကုမ္ပဏီဖျက်သိမ်းခြင်းနှင့် လုပ်ငန်းပိတ်သိမ်းခြင်းဆိုင်ရာ စာရွက်စာတမ်းများကို ပံ့ပိုးကူညီပေးခြင်း။</li>
                                        <li>မြန်မာနိုင်ငံ၏ သက်ဆိုင်ရာ အခွန်စည်းမျဉ်းများ၊ IRD ထုတ်ပြန်ချက်များနှင့် စည်းမျဉ်းစည်းကမ်း လိုအပ်ချက်များကို သုတေသနပြုရှာဖွေရာတွင် ကူညီပေးခြင်း။</li>
                                        <li>ဖောက်သည်များနှင့် အပြန်အလှန်ဆက်သွယ်သည့် စာရွက်စာတမ်းများ ပြင်ဆင်ခြင်းနှင့် လိုအပ်သည့် စာရွက်စာတမ်းများကို စောင့်ကြည့်ရယူခြင်း။</li>
                                        <li>ကြီးကြပ်သူမှ ပေးအပ်သော အခြားဆက်စပ်တာဝန်များကို ထမ်းဆောင်ခြင်း။</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="job-section mb-4">
                                    <h4 class="section-title fw-bold mb-4 d-flex align-items-center" style="color: #0045b6;">
                                        <i class="fa-solid fa-user-check me-2 fs-5"></i>
                                        <span>လိုအပ်သော အရည်အချင်းများ</span>
                                    </h4>
                                    <ul class="job-list custom-bullet-list">
                                        <li>စာရင်းကိုင်၊ ဘဏ္ဍာရေး၊ ဥပဒေ၊ စီးပွားစီမံ သို့မဟုတ် ဆက်စပ်နယ်ပယ်များတွင် ဘွဲ့ရရှိထားသူ။</li>
                                        <li>ဘွဲ့ရခါစလူငယ်များ လျှောက်ထားရန် ကြိုဆိုပါသည် (ယခင်အလုပ်အတွေ့အကြုံ မလိုအပ်ပါ)။</li>
                                        <li>စာရင်းကိုင်အခြေခံ အသိပညာရှိပြီး အခွန်နှင့် ကော်ပိုရိတ်လိုက်နာမှုလုပ်ငန်းများတွင် စိတ်ပါဝင်စားသူ။</li>
                                        <li>Microsoft Office (အထူးသဖြင့် Word နှင့် Excel) ကို အခြေခံကျွမ်းကျင်စွာ အသုံးပြုနိုင်သူ။</li>
                                        <li>အသေးစိတ်အချက်အလက်များကို ဂရုစိုက်နိုင်ပြီး စနစ်တကျ စီစဉ်ဆောင်ရွက်နိုင်စွမ်းရှိသူ။</li>
                                        <li>ကောင်းမွန်သော ဆက်ဆံရေးနှင့် ပေါင်းသင်းဆက်ဆံရေးစွမ်းရည်ရှိသူ။</li>
                                        <li>လေ့လာသင်ယူလိုစိတ်ရှိပြီး အဖွဲ့လိုက် ပူးပေါင်းဆောင်ရွက်နိုင်ကာ သတ်မှတ်အချိန်အတွင်း ပြီးမြောက်အောင် ဆောင်ရွက်နိုင်သူ။</li>
                                    </ul>
                                </div>

                                <div class="job-section p-4 rounded-4 shadow-sm highlight-box mt-4" style="background-color: #f8fbff; border: 1px solid #e0ebf9;">
                                    <h4 class="section-title fw-bold mb-3 d-flex align-items-center" style="color: #0045b6;">
                                        <i class="fa-solid fa-award me-2 fs-5"></i>
                                        <span>ရရှိနိုင်မည့် အကျိုးခံစားခွင့်များ</span>
                                    </h4>
                                    <ul class="job-list custom-bullet-list mb-0">
                                        <li>(၃ လ မှ ၆ လ) အခကြေးငွေရရှိမည့် အချိန်ပြည့် သင်တန်းကာလ။</li>
                                        <li>အတွေ့အကြုံရင့် ကျွမ်းကျင်ပညာရှင်များထံမှ လက်တွေ့လမ်းညွှန်သင်ကြားမှုများ။</li>
                                        <li>အခွန်၊ DICA နှင့် ကော်ပိုရိတ်စည်းမျဉ်းဥပဒေများကို လက်တွေ့လုပ်ငန်းခွင်တွင် ထိတွေ့ခွင့်ရရှိခြင်း။</li>
                                        <li>လုပ်ငန်းစွမ်းဆောင်ရည်နှင့် လုပ်ငန်းလိုအပ်ချက်အပေါ် မူတည်၍ အမြဲတမ်းဝန်ထမ်းအဖြစ် ခန့်အပ်ခံရနိုင်မည့် အခွင့်အရေး။</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="apply-section text-center mt-5 pt-5 border-top">
                            <div class="apply-cta-box bg-light p-5 rounded-4 shadow-sm d-inline-block w-100" style="max-width: 600px;">
                                <h3 class="mb-4 fw-bold" style="color: #0f3780;">Apply now and grow with us!</h3>
                                <router-link to="/jobopportunities/tax-corporate-services-apprentice/apply" class="contact-btn px-5 py-3" style="font-size: 16px;">
                                    ယခုပင် လျှောက်ထားပါ
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ========================================================
                     ROLE 2: Junior Tax & Compliance Associate
                     ======================================================== -->
                <div v-else-if="selectedRole === 'junior'" key="junior" class="job-card shadow-lg p-4 p-md-5 bg-white rounded-4 border-0">
                    <div class="text-center mb-5 header-section">
                        <span class="badge bg-primary px-3 py-2 text-uppercase mb-3 rounded-pill fw-semibold shadow-sm" style="background-color: #0045b6 !important;">
                            Full-Time Position
                        </span>
                        <h1 class="job-title fw-bold mb-0" style="color: #0f3780;">
                            Junior Tax &amp; Compliance Associate
                        </h1>
                    </div>

                    <!-- English Version -->
                    <div v-if="language === 'en'">

                        <div class="row g-5">
                            <div class="col-lg-6">
                                <div class="job-section mb-4">
                                    <h4 class="section-title fw-bold mb-4 d-flex align-items-center" style="color: #0045b6;">
                                        <i class="fa-solid fa-list-check me-2 fs-5"></i>
                                        <span>Key Responsibilities</span>
                                    </h4>
                                    <ul class="job-list custom-bullet-list">
                                        <li>Assist in preparation of monthly tax payments, quarterly returns, annual tax returns, and tax clearance applications.</li>
                                        <li>Support tax filing and compliance processes with the Internal Revenue Department (IRD).</li>
                                        <li>Assist in handling DICA-related matters including incorporation, annual returns, share transfers, and statutory filings.</li>
                                        <li>Support company liquidation and winding-up procedures under Myanmar laws.</li>
                                        <li>Prepare supporting documents, schedules, and compliance records for client assignments.</li>
                                        <li>Liaise with IRD, DICA, and other government authorities when required.</li>
                                        <li>Maintain proper client files and compliance documentation.</li>
                                        <li>Conduct basic tax and regulatory research.</li>
                                        <li>Provide support to senior team members in audit, tax, and compliance assignments.</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="job-section mb-4">
                                    <h4 class="section-title fw-bold mb-4 d-flex align-items-center" style="color: #0045b6;">
                                        <i class="fa-solid fa-user-check me-2 fs-5"></i>
                                        <span>Requirements</span>
                                    </h4>
                                    <ul class="job-list custom-bullet-list">
                                        <li>Bachelor’s degree or currently studying in Accounting, Finance, Business, Law, or related fields.</li>
                                        <li>Fresh graduates are encouraged to apply.</li>
                                        <li>Basic knowledge of Myanmar Tax Regulations and Myanmar Companies Law is an advantage.</li>
                                        <li>Strong interest in tax compliance, DICA matters, and corporate regulatory processes.</li>
                                        <li>Good communication and interpersonal skills.</li>
                                        <li>Basic Microsoft Office skills (Excel and Word).</li>
                                        <li>Strong attention to detail, organizational skills, and willingness to learn.</li>
                                        <li>Ability to work independently and as part of a team.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="apply-section text-center mt-5 pt-5 border-top">
                            <div class="apply-cta-box bg-light p-5 rounded-4 shadow-sm d-inline-block w-100" style="max-width: 600px;">
                                <h3 class="mb-4 fw-bold" style="color: #0f3780;">Apply now and grow with us!</h3>
                                <router-link to="/jobopportunities/junior-tax-compliance-associate/apply" class="contact-btn px-5 py-3" style="font-size: 16px;">
                                    Apply Now
                                </router-link>
                            </div>
                        </div>
                    </div>

                    <!-- Burmese Version -->
                    <div v-else class="burmese-translation">

                        <div class="row g-5">
                            <div class="col-lg-6">
                                <div class="job-section mb-4">
                                    <h4 class="section-title fw-bold mb-4 d-flex align-items-center" style="color: #0045b6;">
                                        <i class="fa-solid fa-list-check me-2 fs-5"></i>
                                        <span>လုပ်ဆောင်ရမည့် လုပ်ငန်းတာဝန်များ</span>
                                    </h4>
                                    <ul class="job-list custom-bullet-list">
                                        <li>လစဉ်အခွန်ပေးဆောင်မှုများ၊ သုံးလပတ်နှင့် နှစ်စဉ်အခွန်ကြေညာလွှာများနှင့် အခွန်ရှင်းလင်းကြောင်းလက်မှတ် လျှောက်ထားခြင်းများတွင် ပြင်ဆင်ကူညီပေးခြင်း။</li>
                                        <li>ပြည်တွင်းအခွန်များဦးစီးဌာန (IRD) နှင့် အခွန်တင်သွင်းခြင်းနှင့် လိုက်နာမှုလုပ်ငန်းစဉ်များတွင် ပံ့ပိုးပေးခြင်း။</li>
                                        <li>ကုမ္ပဏီတည်ထောင်ခြင်း၊ နှစ်စဉ်အစီရင်ခံစာများ၊ ရှယ်ယာလွှဲပြောင်းခြင်းနှင့် DICA ဆိုင်ရာ အခြားစာရွက်စာတမ်းတင်သွင်းမှုများတွင် ကူညီပေးခြင်း။</li>
                                        <li>မြန်မာဥပဒေအရ ကုမ္ပဏီဖျက်သိမ်းခြင်းနှင့် လုပ်ငန်းပိတ်သိမ်းခြင်းဆိုင်ရာ လုပ်ငန်းစဉ်များတွင် ပံ့ပိုးပေးခြင်း။</li>
                                        <li>ဖောက်သည်တာဝန်များအတွက် အထောက်အထားစာရွက်စာတမ်းများ၊ ဇယားများနှင့် လိုက်နာမှုမှတ်တမ်းများကို ပြင်ဆင်ပေးခြင်း။</li>
                                        <li>လိုအပ်ပါက IRD၊ DICA နှင့် အခြားအစိုးရဌာနများနှင့် ဆက်သွယ်ဆောင်ရွက်ခြင်း။</li>
                                        <li>ဖောက်သည်ဖိုင်များနှင့် လိုက်နာမှုဆိုင်ရာ စာရွက်စာတမ်းများကို စနစ်တကျ ထိန်းသိမ်းခြင်း။</li>
                                        <li>အခြေခံအခွန်နှင့် စည်းမျဉ်းဆိုင်ရာ သုတေသနများ ပြုလုပ်ခြင်း။</li>
                                        <li>စာရင်းစစ်၊ အခွန်နှင့် စည်းမျဉ်းလိုက်နာမှု တာဝန်များတွင် အကြီးတန်းအဖွဲ့ဝင်များအား ပံ့ပိုးပေးခြင်း။</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="job-section mb-4">
                                    <h4 class="section-title fw-bold mb-4 d-flex align-items-center" style="color: #0045b6;">
                                        <i class="fa-solid fa-user-check me-2 fs-5"></i>
                                        <span>ရှာဖွေနေသည့် အရည်အချင်းများ</span>
                                    </h4>
                                    <ul class="job-list custom-bullet-list">
                                        <li>စာရင်းကိုင်၊ ဘဏ္ဍာရေး၊ စီးပွားရေး၊ ဥပဒေ သို့မဟုတ် ဆက်စပ်နယ်ပယ်များတွင် ဘွဲ့ရရှိထားသူ (သို့မဟုတ် တက်ရောက်နေဆဲသူ)။</li>
                                        <li>ဘွဲ့ရခါစလူငယ်များ လျှောက်ထားရန် ကြိုဆိုပါသည်။</li>
                                        <li>မြန်မာ့အခွန်စည်းမျဉ်းများနှင့် ၂၀၁၇ မြန်မာနိုင်ငံ ကုမ္ပဏီများဥပဒေကို အခြေခံနားလည်ထားသူများအား ဦးစားပေးမည်။</li>
                                        <li>အခွန်၊ DICA နှင့် ကော်ပိုရိတ်စည်းမျဉ်းဆိုင်ရာ လုပ်ငန်းစဉ်များတွင် စိတ်ပါဝင်စားမှု အားကောင်းသူ။</li>
                                        <li>ကောင်းမွန်သော ဆက်ဆံရေးနှင့် ပေါင်းသင်းဆက်ဆံရေးစွမ်းရည်ရှိသူ။</li>
                                        <li>Microsoft Office (Excel နှင့် Word) ကို အခြေခံကျွမ်းကျင်သူ။</li>
                                        <li>အသေးစိတ်ဂရုစိုက်နိုင်ပြီး၊ စီမံခန့်ခွဲမှုကောင်းကာ လေ့လာလိုစိတ်ရှိသူ။</li>
                                        <li>ကိုယ်ပိုင်တာဝန်ယူလုပ်ကိုင်နိုင်သလို အဖွဲ့လိုက်လည်း ပူးပေါင်းဆောင်ရွက်နိုင်သူ။</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="apply-section text-center mt-5 pt-5 border-top">
                            <div class="apply-cta-box bg-light p-5 rounded-4 shadow-sm d-inline-block w-100" style="max-width: 600px;">
                                <h3 class="mb-4 fw-bold" style="color: #0f3780;">Apply now and grow with us!</h3>
                                <router-link to="/jobopportunities/junior-tax-compliance-associate/apply" class="contact-btn px-5 py-3" style="font-size: 16px;">
                                    ယခုပင် လျှောက်ထားပါ
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ========================================================
                     ROLE 3: Senior Tax & Corporate Compliance Associate
                     ======================================================== -->
                <div v-else-if="selectedRole === 'senior'" key="senior" class="job-card shadow-lg p-4 p-md-5 bg-white rounded-4 border-0">
                    <div class="text-center mb-5 header-section">
                        <span class="badge bg-primary px-3 py-2 text-uppercase mb-3 rounded-pill fw-semibold shadow-sm" style="background-color: #0045b6 !important;">
                            Experienced Professional (5+ Years)
                        </span>
                        <h1 class="job-title fw-bold mb-0" style="color: #0f3780;">
                            Senior Tax &amp; Corporate Compliance Associate
                        </h1>
                    </div>

                    <!-- English Version -->
                    <div v-if="language === 'en'">

                        <div class="row g-5">
                            <div class="col-lg-6">
                                <div class="job-section mb-4">
                                    <h4 class="section-title fw-bold mb-4 d-flex align-items-center" style="color: #0045b6;">
                                        <i class="fa-solid fa-list-check me-2 fs-5"></i>
                                        <span>Key Responsibilities</span>
                                    </h4>
                                    <ul class="job-list custom-bullet-list">
                                        <li>Lead the preparation and submission of monthly tax payments, quarterly tax returns, annual tax returns, and tax clearance applications.</li>
                                        <li>Liaise with the Internal Revenue Department (IRD) on tax compliance matters, client queries, tax assessments, and related regulatory requirements.</li>
                                        <li>Handle DICA-related corporate compliance matters, including company incorporation, Annual Returns, changes to company particulars, and other statutory filings.</li>
                                        <li>Assist with and coordinate company liquidation and winding-up procedures in accordance with applicable Myanmar laws and regulations.</li>
                                        <li>Prepare, review, and coordinate liquidation-related documents, resolutions, declarations, and statutory filings, as applicable.</li>
                                        <li>Liaise with DICA, IRD, and other relevant authorities on corporate compliance, tax clearance, and liquidation matters, as required.</li>
                                        <li>Conduct tax research and review relevant laws, regulations, notifications, and guidance relating to tax and corporate compliance matters.</li>
                                        <li>Manage tax compliance reviews and contribute to tax audit support and advisory assignments.</li>
                                        <li>Provide clients with practical guidance on tax compliance, corporate regulatory requirements, and liquidation procedures within the scope of the firm's services.</li>
                                        <li>Review client records and support documentation to ensure accuracy, completeness, and compliance with applicable requirements.</li>
                                        <li>Guide and support junior team members, review their work as assigned, and help maintain service quality and meet statutory deadlines.</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="job-section mb-4">
                                    <h4 class="section-title fw-bold mb-4 d-flex align-items-center" style="color: #0045b6;">
                                        <i class="fa-solid fa-user-check me-2 fs-5"></i>
                                        <span>Requirements</span>
                                    </h4>
                                    <ul class="job-list custom-bullet-list">
                                        <li>Bachelor’s degree in Accounting, Finance, Law, Taxation, or a related field.</li>
                                        <li>Minimum 5 years of relevant experience in tax compliance, with additional experience in DICA filings and corporate compliance considered an advantage.</li>
                                        <li>Practical knowledge of Myanmar tax regulations and a good understanding of the Myanmar Companies Law.</li>
                                        <li>Familiarity with the Myanmar Insolvency Law 2020 and insolvency/liquidation procedures is an advantage.</li>
                                        <li>Practical experience liaising with the Internal Revenue Department (IRD), with experience dealing with DICA and other relevant government authorities considered an advantage.</li>
                                        <li>Strong analytical, organizational, documentation, and problem-solving skills.</li>
                                        <li>Strong written and verbal communication and interpersonal skills.</li>
                                        <li>Ability to manage multiple client assignments, meet statutory deadlines, and supervise or guide team members.</li>
                                        <li>Proficiency in Microsoft Office and relevant accounting and tax software.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="apply-section text-center mt-5 pt-5 border-top">
                            <div class="apply-cta-box bg-light p-5 rounded-4 shadow-sm d-inline-block w-100" style="max-width: 600px;">
                                <h3 class="mb-4 fw-bold" style="color: #0f3780;">Apply now and grow with us!</h3>
                                <router-link to="/jobopportunities/senior-tax-corporate-compliance-associate/apply" class="contact-btn px-5 py-3" style="font-size: 16px;">
                                    Apply Now
                                </router-link>
                            </div>
                        </div>
                    </div>

                    <!-- Burmese Version -->
                    <div v-else class="burmese-translation">

                        <div class="row g-5">
                            <div class="col-lg-6">
                                <div class="job-section mb-4">
                                    <h4 class="section-title fw-bold mb-4 d-flex align-items-center" style="color: #0045b6;">
                                        <i class="fa-solid fa-list-check me-2 fs-5"></i>
                                        <span>အဓိကတာဝန်ယူရမည့် လုပ်ငန်းများ</span>
                                    </h4>
                                    <ul class="job-list custom-bullet-list">
                                        <li>လစဉ်အခွန်ပေးဆောင်မှုများ၊ သုံးလပတ်နှင့် နှစ်စဉ်အခွန်ကြေညာလွှာများနှင့် အခွန်ရှင်းလင်းကြောင်းလက်မှတ် လျှောက်ထားခြင်းများကို ဦးဆောင်ပြင်ဆင်တင်သွင်းခြင်း။</li>
                                        <li>အခွန်ဆိုင်ရာကိစ္စရပ်များ၊ သုံးစွဲသူမေးမြန်းချက်များ၊ အခွန်စစ်ဆေးမှုများနှင့် စည်းမျဉ်းလိုအပ်ချက်များအတွက် ပြည်တွင်းအခွန်များဦးစီးဌာန (IRD) နှင့် တိုက်ရိုက်ဆက်သွယ်ဆောင်ရွက်ခြင်း။</li>
                                        <li>ကုမ္ပဏီတည်ထောင်ခြင်း၊ နှစ်စဉ်အစီရင်ခံစာများ၊ ကုမ္ပဏီဆိုင်ရာအချက်အလက် အပြောင်းအလဲများနှင့် DICA ဥပဒေအရ တင်သွင်းမှုများကို ကြီးကြပ်ဆောင်ရွက်ခြင်း။</li>
                                        <li>သက်ဆိုင်ရာ မြန်မာ့ဥပဒေများနှင့်အညီ ကုမ္ပဏီဖျက်သိမ်းခြင်းနှင့် လုပ်ငန်းပိတ်သိမ်းခြင်း လုပ်ငန်းစဉ်များကို ညှိနှိုင်းကူညီဆောင်ရွက်ခြင်း။</li>
                                        <li>ဖျက်သိမ်းခြင်းဆိုင်ရာ စာရွက်စာတမ်းများ၊ ဆုံးဖြတ်ချက်များ၊ ကြေညာချက်များနှင့် တင်သွင်းလွှာများကို ပြင်ဆင်၊ ပြန်လည်စစ်ဆေးပြီး ညှိနှိုင်းဆောင်ရွက်ခြင်း။</li>
                                        <li>DICA၊ IRD နှင့် အခြားသက်ဆိုင်ရာ အာဏာပိုင်ဌာနများနှင့် စည်းမျဉ်းလိုက်နာမှု၊ အခွန်ရှင်းလင်းမှုနှင့် ဖျက်သိမ်းမှုဆိုင်ရာကိစ္စရပ်များကို လိုအပ်သလို ဆက်သွယ်ဆောင်ရွက်ခြင်း။</li>
                                        <li>အခွန်နှင့် စည်းမျဉ်းလိုက်နာမှုဆိုင်ရာ သက်ဆိုင်ရာ ဥပဒေများ၊ နည်းဥပဒေများ၊ ညွှန်ကြားချက်များကို သုတေသနပြုလေ့လာခြင်း။</li>
                                        <li>အခွန်လိုက်နာမှု စစ်ဆေးခြင်းများကို စီမံခန့်ခွဲပြီး အခွန်စစ်ဆေးမှုအထောက်အကူပြုနှင့် အကြံပေးလုပ်ငန်းများတွင် ပါဝင်ဆောင်ရွက်ခြင်း။</li>
                                        <li>ကုမ္ပဏီ၏ ဝန်ဆောင်မှုနယ်ပယ်အတွင်း အခွန်လိုက်နာမှု၊ ကော်ပိုရိတ်စည်းမျဉ်း လိုအပ်ချက်များနှင့် ဖျက်သိမ်းမှုလုပ်ငန်းစဉ်များဆိုင်ရာ လက်တွေ့ကျသော လမ်းညွှန်ချက်များကို ဖောက်သည်များအား ပေးအပ်ခြင်း။</li>
                                        <li>တိကျမှန်ကန်မှု၊ ပြည့်စုံမှုနှင့် လိုက်နာမှုရှိစေရန် ဖောက်သည်မှတ်တမ်းများနှင့် အထောက်အထားစာရွက်စာတမ်းများကို စစ်ဆေးခြင်း။</li>
                                        <li>အငယ်တန်းအဖွဲ့ဝင်များအား လမ်းညွှန်ပံ့ပိုးပေးခြင်း၊ ၎င်းတို့၏လုပ်ငန်းများကို စစ်ဆေးပေးခြင်းနှင့် ဝန်ဆောင်မှုအရည်အသွေးကို ထိန်းသိမ်းပြီး သတ်မှတ်ရက်များမီစေရန် ကူညီဆောင်ရွက်ခြင်း။</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="job-section mb-4">
                                    <h4 class="section-title fw-bold mb-4 d-flex align-items-center" style="color: #0045b6;">
                                        <i class="fa-solid fa-user-check me-2 fs-5"></i>
                                        <span>လိုအပ်သော အရည်အချင်းများ</span>
                                    </h4>
                                    <ul class="job-list custom-bullet-list">
                                        <li>စာရင်းကိုင်၊ ဘဏ္ဍာရေး၊ ဥပဒေ၊ အခွန် သို့မဟုတ် ဆက်စပ်နယ်ပယ်တစ်ခုခုတွင် ဘွဲ့ရရှိထားသူ။</li>
                                        <li>အခွန်လိုက်နာမှုလုပ်ငန်းတွင် အနည်းဆုံး (၅) နှစ် အတွေ့အကြုံရှိသူ (DICA တင်သွင်းမှုများနှင့် ကော်ပိုရိတ်လိုက်နာမှုဆိုင်ရာ အတွေ့အကြုံထပ်ဆောင်းရှိပါက ပိုမိုဦးစားပေးမည်)။</li>
                                        <li>မြန်မာ့အခွန်စည်းမျဉ်းများကို လက်တွေ့နားလည်ပြီး ၂၀၁၇ မြန်မာနိုင်ငံ ကုမ္ပဏီများဥပဒေကို ကောင်းစွာကျွမ်းကျင်သူ။</li>
                                        <li>၂၀၂၀ မြန်မာနိုင်ငံ လူမွဲခံယူခြင်းဆိုင်ရာဥပဒေနှင့် ဖျက်သိမ်းခြင်းလုပ်ငန်းစဉ်များကို သိရှိနားလည်ပါက အထူးအားသာချက်ဖြစ်မည်။</li>
                                        <li>ပြည်တွင်းအခွန်များဦးစီးဌာန (IRD) နှင့် တိုက်ရိုက်ဆက်သွယ်လုပ်ကိုင်ခဲ့ဖူးသော အတွေ့အကြုံရှိပြီး DICA နှင့် အခြားအစိုးရဌာနများနှင့် ထိတွေ့ဖူးသူအား ဦးစားပေးမည်။</li>
                                        <li>ခွဲခြမ်းစိတ်ဖြာနိုင်စွမ်း၊ အဖွဲ့အစည်းစနစ်တကျရှိမှု၊ စာရွက်စာတမ်းပြုစုမှုနှင့် ပြဿနာဖြေရှင်းနိုင်စွမ်း မြင့်မားသူ။</li>
                                        <li>စာဖြင့်သော်လည်းကောင်း၊ နှုတ်ဖြင့်သော်လည်းကောင်း အင်္ဂလိပ်နှင့် မြန်မာ နှစ်ဘာသာစလုံးဖြင့် ကျွမ်းကျင်စွာ ပြောဆိုဆက်ဆံနိုင်သူ။</li>
                                        <li>ဖောက်သည်တာဝန်အမျိုးမျိုးကို တစ်ပြိုင်နက် စီမံနိုင်ပြီး သတ်မှတ်ရက်မီစေရန် အဖွဲ့ဝင်များကို ကြီးကြပ်လမ်းညွှန်နိုင်သူ။</li>
                                        <li>Microsoft Office နှင့် သက်ဆိုင်ရာ စာရင်းကိုင်/အခွန်ဆော့ဖ်ဝဲလ်များကို ကျွမ်းကျင်စွာ အသုံးပြုနိုင်သူ။</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="apply-section text-center mt-5 pt-5 border-top">
                            <div class="apply-cta-box bg-light p-5 rounded-4 shadow-sm d-inline-block w-100" style="max-width: 600px;">
                                <h3 class="mb-4 fw-bold" style="color: #0f3780;">Apply now and grow with us!</h3>
                                <router-link to="/jobopportunities/senior-tax-corporate-compliance-associate/apply" class="contact-btn px-5 py-3" style="font-size: 16px;">
                                    ယခုပင် လျှောက်ထားပါ
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </section>
</template>

<script>
import { onUpdated, onMounted, ref } from 'vue'

export default {
    props: ['career'],
    setup(props) {
        const language = ref('en')

        // Default to whichever career is passed in URL, or 'apprentice'
        let initialRole = 'apprentice'
        if (props.career) {
            if (props.career.includes('senior')) {
                initialRole = 'senior'
            } else if (props.career.includes('junior')) {
                initialRole = 'junior'
            } else if (props.career.includes('apprentice')) {
                initialRole = 'apprentice'
            }
        }
        const selectedRole = ref(initialRole)

        onUpdated(() => {
            // Keep view smooth
        })
        onMounted(() => {
            window.scrollTo(0,0)
        })

        return {
            language,
            selectedRole
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
    .custom-bullet-list {
        list-style: none;
        padding-left: 0;
        margin-bottom: 0;
    }
    .custom-bullet-list li {
        position: relative;
        padding-left: 24px;
        margin-bottom: 12px;
        color: #4b5563;
        line-height: 1.65;
        font-size: 0.96rem;
    }
    .custom-bullet-list li::before {
        content: '';
        position: absolute;
        left: 2px;
        top: 9px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: linear-gradient(135deg, #0045b6 0%, #0076f5 100%);
        box-shadow: 0 0 0 3px rgba(0, 69, 182, 0.15);
    }
    .section-title i {
        color: #0045b6;
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
   .burmese-translation h3 {
     font-size: 1.6rem !important;
   }
   .burmese-translation h4 {
     font-size: 1.35rem !important;
   }
   .burmese-translation .lead {
     font-size: 1.05rem !important;
   }
   .burmese-translation .contact-btn {
     font-size: 0.9rem !important;
   }

   /* Header Section (Badge & Job Title) - Consistent sizing across English and Burmese */
   .header-section .badge {
     font-size: 0.75rem !important;
     line-height: 1 !important;
     letter-spacing: 0.5px;
   }
   .job-title,
   .burmese-translation .job-title,
   .burmese-translation h1 {
     font-size: calc(1.375rem + 1.5vw) !important;
     letter-spacing: -0.02em;
   }
   @media (min-width: 1200px) {
     .job-title,
     .burmese-translation .job-title,
     .burmese-translation h1 {
       font-size: 2.5rem !important;
     }
   }

   /* =========================================
      Job Role Switcher Navigation Bar & Tabs
      ========================================= */
   .role-switcher-container {
       background: #ffffff;
       border: 1px solid #e2e8f0;
       box-shadow: 0 4px 15px rgba(0, 40, 120, 0.06);
       gap: 4px;
   }

   .btn-role {
       position: relative;
       display: inline-flex;
       align-items: center;
       padding: 10px 20px;
       font-size: 0.95rem;
       font-weight: 600;
       color: #4b5563;
       background: transparent;
       border: none;
       border-radius: 50px;
       transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
       cursor: pointer;
       white-space: nowrap;
   }

   .btn-role:hover {
       color: #0045b6;
       background: #f1f5f9;
       transform: translateY(-1px);
   }

   .btn-role-active {
       background: linear-gradient(135deg, #0045b6 0%, #0066f5 100%) !important;
       color: #ffffff !important;
       box-shadow: 0 4px 14px rgba(0, 69, 182, 0.35);
       transform: translateY(-1px);
   }

   .btn-role-active,
   .btn-role-active span,
   .btn-role-active i {
       color: #ffffff !important;
   }

   .role-badge {
       background: #e2e8f0;
       color: #334155;
       font-size: 0.74rem;
       font-weight: 700;
       padding: 2px 8px;
       border-radius: 20px;
       text-transform: uppercase;
       letter-spacing: 0.5px;
       transition: all 0.25s ease;
   }

   .role-badge-senior {
       background: #fef08a;
       color: #854d0e;
   }

   .btn-role-active .role-badge {
       background: rgba(255, 255, 255, 0.25) !important;
       color: #ffffff !important;
   }

   /* Role switch fade & slide animation */
   .role-fade-enter-active,
   .role-fade-leave-active {
       transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
   }

   .role-fade-enter-from {
       opacity: 0;
       transform: translateY(14px);
   }

   .role-fade-leave-to {
       opacity: 0;
       transform: translateY(-14px);
   }

   @media (max-width: 768px) {
       .role-switcher-container {
           border-radius: 16px !important;
           width: 100%;
       }
       .btn-role {
           width: 100%;
           justify-content: center;
           border-radius: 12px;
           padding: 10px 14px;
           font-size: 0.88rem;
       }
   }
</style>
