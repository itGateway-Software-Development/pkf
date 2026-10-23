<template>
    <section class="events">
        <div class="page-banner">
          <transition name="fade-slide" mode="out-in">
            <h2 v-if="category == 'news'" key="news" class="banner-title">NEWS</h2>
            <h2 v-else-if="category == 'events'" key="events" class="banner-title">EVENTS</h2>
          </transition>
        </div>

        <div class="row mt-5 events-header">
            <div class="col-lg-3 col-md-4 news-category">
                <div class="side-link" :class="{'active-link' : category == 'news'}" @click="category = 'news'">
                    <a :class="{'text-white' : category == 'news'}">NEWS</a>
                </div>
                <div class="side-link" :class="{'active-link' : category == 'events'}" @click="category = 'events'">
                    <a :class="{'text-white' : category == 'events'}">EVENTS</a>
                </div>
            </div>

            <div class="col-lg-9 col-md-8">
                <div class="breadcrumb-row justify-content-end">
                    <a href="/contact-us" class="contact-btn">Contact Us</a>
                </div>

                <!-- TAB CONTENT WITH TRANSITION -->
                <transition name="fade-slide" mode="out-in">
                  <!-- NEWS TAB -->
                  <div v-if="category == 'news'" key="news" class="row mt-3 pt-3">
                    
                    <!-- Language Toggle -->
                    <div class="col-lg-12 mb-3 text-end">
                        <button class="lang-btn" :class="{'active-lang': newsLanguage == 'my'}" @click="newsLanguage = 'my'">မြန်မာ</button>
                        <button class="lang-btn" :class="{'active-lang': newsLanguage == 'en'}" @click="newsLanguage = 'en'">English</button>
                    </div>

                    <!-- News Card 10 — SC/16465 (28 September 2026) -->
                    <div class="col-lg-12 mb-4">
                        <div class="event-card-new">
                            <div class="row">
                                <div class="col-lg-3 col-md-4 mb-3">
                                    <img src="../assets/images/newspaper.jpg" alt="UN SC/16465 Sanctions List">
                                </div>
                                <div class="col-lg-9 col-md-8">
                                    <h5>28-SEPTEMBER-2026</h5>
                                    <h4 v-if="newsLanguage == 'my'">ကုလသမဂ္ဂလုံခြုံရေးကောင်စီ ဆုံးဖြတ်ချက်အမှတ် ၁၂၆၇၊ ၁၉၈၉ နှင့် ၂၂၅၃ တို့ဖြင့် ၂၈-၉-၂၀၂၆ ရက်နေ့တွင် SC/16465 ဖြင့် ထုတ်ပြန်ထားသည့် UNSCR Sanction list update အား မျှဝေပါသည်။</h4>
                                    <h4 v-if="newsLanguage == 'en'">Sharing the UNSCR Sanctions List update issued on 28 September 2026 under SC/16465 pursuant to United Nations Security Council Resolutions 1267, 1989, and 2253.</h4>

                                    <div class="d-flex gap-3 flex-wrap mt-3">
                                        <a href="https://press.un.org/en/2026/sc16465.doc.htm" target="_blank" rel="noopener" class="read-more">
                                            <i class="fa-solid fa-up-right-from-square me-2"></i>View UN Press Release
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- News Card 9 — SC/16446 (17 September 2026) -->
                    <div class="col-lg-12 mb-4">
                        <div class="event-card-new">
                            <div class="row">
                                <div class="col-lg-3 col-md-4 mb-3">
                                    <img src="../assets/images/newspaper.jpg" alt="UN SC/16446 Sanctions List">
                                </div>
                                <div class="col-lg-9 col-md-8">
                                    <h5>17-SEPTEMBER-2026</h5>
                                    <h4 v-if="newsLanguage == 'my'">ကုလသမဂ္ဂလုံခြုံရေးကောင်စီ ဆုံးဖြတ်ချက်အမှတ် ၁၂၆၇ နှင့် ၁၇၁၈ တို့ဖြင့် ၄-၉-၂၀၂၆ ရက်နေ့တွင် SC/16446 ဖြင့် ထုတ်ပြန်ထားသည့် UNSCR Sanction list update အား မျှဝေပါသည်။</h4>
                                    <h4 v-if="newsLanguage == 'en'">Sharing the UNSCR Sanctions List update issued on 4 September 2026 under SC/16446 pursuant to United Nations Security Council Resolutions 1267 and 1718.</h4>

                                    <div class="d-flex gap-3 flex-wrap mt-3">
                                        <a href="https://press.un.org/en/2026/sc16446.doc.htm" target="_blank" rel="noopener" class="read-more">
                                            <i class="fa-solid fa-up-right-from-square me-2"></i>View UN Press Release
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- News Card 8 — MAC Directive (26 August 2026) -->
                    <div class="col-lg-12 mb-4">
                        <div class="event-card-new">
                            <div class="row">
                                <div class="col-lg-3 col-md-4 mb-3">
                                    <img src="../assets/images/newspaper.jpg" alt="MAC Directive SC/16432 & SC/16433">
                                </div>
                                <div class="col-lg-9 col-md-8">
                                    <h5>26-AUGUST-2026</h5>
                                    <h4 v-if="newsLanguage == 'my'">မြန်မာနိုင်ငံစာရင်းကောင်စီ၏ UNSCR Sanction List (SC/16432 နှင့် SC/16433) နှင့်စပ်လျဉ်း၍ ၂၆-၈-၂၀၂၆ ရက်နေ့တွင် ထုတ်ပြန်ထားသည့် အသိပေးညွှန်ကြားချက်အား မျှဝေပါသည်။</h4>
                                    <h4 v-if="newsLanguage == 'en'">Sharing the Myanmar Accountancy Council Notice issued on 26 August 2026 on UNSCR Sanctions List updates under SC/16432 and SC/16433.</h4>

                                    <div class="d-flex gap-3 flex-wrap mt-3">
                                        <a href="/downloads/SC-16432-33.pdf" target="_blank" rel="noopener noreferrer" class="read-more">
                                            <i class="fa-solid fa-up-right-from-square me-2"></i>View UN Press Release
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- News Card 7 — SC/16435 (18 August 2026) -->
                    <div class="col-lg-12 mb-4">
                        <div class="event-card-new">
                            <div class="row">
                                <div class="col-lg-3 col-md-4 mb-3">
                                    <img src="../assets/images/newspaper.jpg" alt="UN SC/16435 Sanctions List">
                                </div>
                                <div class="col-lg-9 col-md-8">
                                    <h5>18-AUGUST-2026</h5>
                                    <h4 v-if="newsLanguage == 'my'">ကုလသမဂ္ဂလုံခြုံရေးကောင်စီ ဆုံးဖြတ်ချက်အမှတ် ၁၂၆၇၊ ၁၉၈၉ နှင့် ၂၂၅၃ တို့ဖြင့် ၁၈-၈-၂၀၂၆ ရက်နေ့တွင် SC/16435 ဖြင့် ထုတ်ပြန်ထားသည့် UNSCR Sanction list update အား မျှဝေပါသည်။</h4>
                                    <h4 v-if="newsLanguage == 'en'">Sharing the UNSCR Sanctions List update issued on 18 August 2026 under SC/16435 pursuant to United Nations Security Council Resolutions 1267, 1989, and 2253.</h4>

                                    <div class="d-flex gap-3 flex-wrap mt-3">
                                        <a href="https://press.un.org/en/2026/sc16435.doc.htm" target="_blank" rel="noopener" class="read-more">
                                            <i class="fa-solid fa-up-right-from-square me-2"></i>View UN Press Release
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- News Card 6 — SC/16407, 8 July 2026 -->
                    <div class="col-lg-12 mb-4">
                        <div class="event-card-new">
                            <div class="row">
                                <div class="col-lg-3 col-md-4 mb-3">
                                    <img src="../assets/images/newspaper.jpg" alt="UN SC/16407 Sanctions List">
                                </div>
                                <div class="col-lg-9 col-md-8">
                                    <h5>08-JULY-2026</h5>
                                    <h4 v-if="newsLanguage == 'my'">ကုလသမဂ္ဂလုံခြုံရေးကောင်စီ ဆုံးဖြတ်ချက်အမှတ် ၁၂၆၇၊ ၁၉၈၉ နှင့် ၂၂၅၃ တို့ဖြင့် ၈-၇-၂၀၂၆ ရက်နေ့တွင် SC/16407 ဖြင့် ထုတ်ပြန်ထားသည့် UNSCR Sanction list update အား မျှဝေပါသည်။</h4>
                                    <h4 v-if="newsLanguage == 'en'">Sharing the UNSCR Sanctions List update issued on 8 July 2026 under SC/16407 pursuant to United Nations Security Council Resolutions 1267, 1989, and 2253.</h4>

                                    <div class="d-flex gap-3 flex-wrap mt-3">
                                        <a href="https://press.un.org/en/2026/sc16407.doc.htm" target="_blank" rel="noopener" class="read-more">
                                            <i class="fa-solid fa-up-right-from-square me-2"></i>View UN Press Release
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- News Card 5 — SC/16365, 21 May 2026 -->
                    <div class="col-lg-12 mb-4">
                        <div class="event-card-new">
                            <div class="row">
                                <div class="col-lg-3 col-md-4 mb-3">
                                    <img src="../assets/images/newspaper.jpg" alt="UN SC/16365 Sanctions List">
                                </div>
                                <div class="col-lg-9 col-md-8">
                                    <h5>21-MAY-2026</h5>
                                    <h4 v-if="newsLanguage == 'my'">ကုလသမဂ္ဂလုံခြုံရေးကောင်စီ ဆုံးဖြတ်ချက်အမှတ် ၁၂၆၇၊ ၁၉၈၉ နှင့် ၂၂၅၃ တို့ဖြင့် ၂၁-၅-၂၀၂၆ ရက်နေ့တွင် SC/16365 ဖြင့် ထုတ်ပြန်ထားသည့် UNSCR Sanction list update အား မျှဝေပါသည်။</h4>
                                    <h4 v-if="newsLanguage == 'en'">Sharing the UNSCR Sanctions List update issued on 21 May 2026 under SC/16365 pursuant to United Nations Security Council Resolutions 1267, 1989, and 2253.</h4>

                                    <div class="d-flex gap-3 flex-wrap mt-3">
                                        <a href="https://press.un.org/en/2026/sc16365.doc.htm" target="_blank" rel="noopener" class="read-more">
                                            <i class="fa-solid fa-up-right-from-square me-2"></i>View UN Press Release
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- News Card 4 -->
                    <div class="col-lg-12 mb-4">
                        <div class="event-card-new">
                            <div class="row">
                                <div class="col-lg-3 col-md-4 mb-3">
                                    <img src="../assets/images/newspaper.jpg" alt="New News Article">
                                </div>
                                <div class="col-lg-9 col-md-8">
                                    <h5>26-MARCH-2026</h5>
                                    <h4 v-if="newsLanguage == 'my'">ကုလသမဂ္ဂလုံခြုံရေးကောင်စီ ဆုံးဖြတ်ချက်အမှတ် ၁၂၆၇၊ ၁၉၈၉ နှင့် ၂၂၅၃ တို့ဖြင့် ၂၆-၃-၂၀၂၆ ရက်နေ့တွင် SC/16323, SC/16324 နှင့် SC/16325 တို့ဖြင့် ထုတ်ပြန်ထားသည့် UNSCR Sanction list update အား မျှဝေပါသည်။</h4>
                                    <h4 v-if="newsLanguage == 'en'">Sharing the UNSCR Sanctions List updates issued on 26 March 2026 under SC/16323, SC/16324, and SC/16325 pursuant to United Nations Security Council Resolutions 1267, 1989, and 2253.</h4>

                                    <div class="d-flex gap-3 flex-wrap mt-3">
                                        <a href="/downloads/sanctionlist.pdf" download class="read-more">
                                            <i class="fa-solid fa-file-pdf me-2 text-white"></i>Download PDF 
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- News Card 3 -->
                    <div class="col-lg-12 mb-4">
                        <div class="event-card-new">
                            <div class="row">
                                <div class="col-lg-3 col-md-4 mb-3">
                                    <img src="../assets/images/newspaper.jpg" alt="New News Article">
                                </div>
                                <div class="col-lg-9 col-md-8">
                                    <h5>15-MARCH-2026</h5>
                                    <h4 v-if="newsLanguage == 'my'">၂၀၂၆ ခုနှစ်၊ ပြည်ထောင်စု၏အခွန်အကောက်ဥပဒေ (ဥပဒေအမှတ် ၁၈/၂၀၂၆) အား မျှဝေပါသည်။</h4>
                                    <h4 v-if="newsLanguage == 'en'">Sharing 2026 Union Tax Law (Law No. 18/2026).</h4>

                                    <div class="d-flex gap-3 flex-wrap mt-3">
                                        <a href="/downloads/2026-tax.pdf" download class="read-more">
                                            <i class="fa-solid fa-file-pdf me-2 text-white"></i>Download PDF
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- News Card 2 -->
                    <div class="col-lg-12 mb-4">
                        <div class="event-card-new">
                            <div class="row">
                                <div class="col-lg-3 col-md-4 mb-3">
                                    <img src="../assets/images/newspaper.jpg" alt="AML Law 2026">
                                </div>
                                <div class="col-lg-9 col-md-8">
                                    <h5>11-MARCH-2026</h5>
                                    <h4 v-if="newsLanguage == 'my'">၂၀၂၆ ခုနှစ်၊ ငွေကြေးခဝါချမှုတိုက်ဖျက်ရေးဥပဒေ (ဥပဒေအမှတ် ၁၆/၂၀၂၆) အား မျှဝေပါသည်။</h4>
                                    <h4 v-if="newsLanguage == 'en'">Sharing 2026 Anti-Money Laundering Law (Law No. 16/2026).</h4>

                                    <div class="d-flex gap-3 flex-wrap mt-3">
                                        <a href="/downloads/AML-law-2026.pdf" download class="read-more">
                                            <i class="fa-solid fa-file-pdf me-2 text-white"></i>Download PDF
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- News Card 1 -->
                    <div class="col-lg-12 mb-4">
                        <div class="event-card-new">
                            <div class="row">
                                <div class="col-lg-3 col-md-4 mb-3">
                                    <img src="../assets/images/newspaper.jpg" alt="UNSCR Sanction List">
                                </div>
                                <div class="col-lg-9 col-md-8">
                                    <h5>27-FEB-2026</h5>
                                    <h4 v-if="newsLanguage == 'my'">ကုလသမဂ္ဂလုံခြုံရေးကောင်စီ ဆုံးဖြတ်ချက်အမှတ် ၁၂၆၇၊ ၁၉၈၉ နှင့် ၂၂၅၃ တို့ဖြင့် ၂၇-၂-၂၀၂၆ ရက်နေ့တွင် SC/16306 ဖြင့် ထုတ်ပြန်ထားသည့် UNSCR Sanction list update (မြန်မာနိုင်ငံစာရင်းကောင်စီ အသိပေးကြေညာချက်) အား မျှဝေပါသည်။</h4>
                                    <h4 v-if="newsLanguage == 'en'">Sharing the UNSCR Sanctions List update issued on 27 February 2026 under SC/16306 pursuant to United Nations Security Council Resolutions 1267, 1989, and 2253 — Myanmar Accountancy Council Notice.</h4>

                                    <div class="d-flex gap-3 flex-wrap mt-3">
                                        <a href="/downloads/224.pdf" download class="read-more">
                                            <i class="fa-solid fa-file-pdf me-2 text-white"></i>Download PDF
                                        </a>
                                        <a href="/downloads/unscr-sanction.pdf" download class="read-more read-more-en">
                                            <i class="fa-solid fa-file-pdf me-2 text-white"></i>Download UN Press Release (PDF)
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- EVENTS TAB -->
                <div v-else-if="category == 'events'" key="events" class="row mt-3 pt-3">
                    <!-- Event: Celebrating Thadinkyut with smiles, cheers and blessings -->
                    <div class="col-lg-12 mb-4">
                        <div class="event-card-new p-4 shadow-sm rounded" style="background: #fff; border-top: 4px solid #0045b6;">
                            <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-2 mb-2">
                                <h4 class="fw-bold mb-0" style="color: #0045b6;">Celebrating Thadinkyut with smiles, cheers and blessings</h4>
                                <span class="badge bg-light text-primary border px-3 py-2 rounded-pill fw-semibold" style="color: #0045b6 !important; border-color: #0045b6 !important;">
                                    <i class="fa-solid fa-camera me-1"></i> 10 Photos
                                </span>
                            </div>
                            <p class="text-muted mb-2" style="font-size: 15px;">The PKF Myanmar team gathered in traditional attire to celebrate the graceful Thadingyut Lighting Festival, sharing gratitude, joyful smiles and heartfelt blessings with our valued partners and mentors.</p>
                            <h5 class="text-muted mb-3 small">
                                <i class="fa-regular fa-calendar me-2" style="color: #0045b6;"></i>22-OCT-2026 
                                <span class="ms-3 text-muted"><i class="fa-solid fa-location-dot me-2" style="color: #0045b6;"></i>PKF Myanmar Office</span>
                            </h5>

                            <!-- Photos Grid: 3-photo preview by default (Facebook style) -->
                            <div class="row g-3">
                                <!-- Photo 1 -->
                                <div class="col-md-4 col-sm-6">
                                    <div class="fb-photo-card shadow-sm" @click="openLightbox(thadingyutImages, 0)">
                                        <img src="/downloads/events/thadingyut-2026-1.jpg" alt="PKF Myanmar Team Celebrating Thadingyut">
                                    </div>
                                </div>

                                <!-- Photo 2 -->
                                <div class="col-md-4 col-sm-6">
                                    <div class="fb-photo-card shadow-sm" @click="openLightbox(thadingyutImages, 1)">
                                        <img src="/downloads/events/thadingyut-2026-2.jpg" alt="PKF Myanmar Staff Gathering">
                                    </div>
                                </div>

                                <!-- Photo 3 with +7 Facebook style overlay when collapsed -->
                                <div class="col-md-4 col-sm-6">
                                    <div class="fb-photo-card shadow-sm" @click="openLightbox(thadingyutImages, 2)">
                                        <img src="/downloads/events/thadingyut-2026-3.jpg" alt="Paying Respects to Elders and Mentors">
                                        <div v-if="!showAllThadinkyutPhotos" class="fb-more-overlay">
                                            <span class="fb-plus-number">+7</span>
                                            <span class="fb-plus-text"><i class="fa-solid fa-images me-1"></i> More Photos</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Remaining 7 Photos revealed when expanded -->
                                <template v-if="showAllThadinkyutPhotos">
                                    <div v-for="(photo, pIdx) in thadingyutImages.slice(3)" :key="pIdx" class="col-md-4 col-sm-6">
                                        <div class="fb-photo-card shadow-sm" @click="openLightbox(thadingyutImages, pIdx + 3)">
                                            <img :src="photo" :alt="'Thadingyut Photo ' + (pIdx + 4)">
                                        </div>
                                    </div>
                                </template>
                            </div>

                            <!-- Expand / Collapse Action Bar -->
                            <div class="d-flex flex-wrap justify-content-between align-items-center mt-3 pt-2 border-top gap-2">
                                <small class="text-muted">
                                    <i class="fa-regular fa-hand-pointer me-1 text-primary"></i> Click on <strong>+7</strong> or any photo to browse with the slider
                                </small>
                                <button class="btn-toggle-grid" @click="showAllThadinkyutPhotos = !showAllThadinkyutPhotos">
                                    <i class="fa-solid me-1" :class="showAllThadinkyutPhotos ? 'fa-compress' : 'fa-grid-2'"></i>
                                    {{ showAllThadinkyutPhotos ? 'Show 3 Photos Only' : 'Expand All 10 Photos' }}
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Event: Uniform Distribution -->
                    <div class="col-lg-12 mb-4">
                        <div class="event-card-new p-4 shadow-sm rounded" style="background: #fff; border-top: 4px solid #0045b6;">
                            <h4 class="fw-bold mb-1" style="color: #0045b6;">Staff Uniform Distribution</h4>
                            <p class="text-muted mb-2" style="font-size: 15px;">PKF Myanmar team gathering for the distribution of new official uniforms, showcasing the blue polo shirts and white corporate branding t-shirts.</p>
                            <h5 class="text-muted mb-4 small">
                                <i class="fa-regular fa-calendar me-2" style="color: #0045b6;"></i>20-AUG-2026 
                                <span class="ms-3 text-muted"><i class="fa-solid fa-location-dot me-2" style="color: #0045b6;"></i>PKF Myanmar Office</span>
                            </h5>
                            <div class="row gx-3">
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <img src="/downloads/events/uniform-1.jpg" alt="PKF Myanmar Team Heart Poses" style="width: 100%; height: 220px; object-fit: cover; border-radius: 8px; cursor: pointer;" class="shadow-sm zoom-hover" @click="openLightbox(['/downloads/events/uniform-1.jpg', '/downloads/events/uniform-2.jpg', '/downloads/events/uniform-3.jpg'], 0)">
                                </div>
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <img src="/downloads/events/uniform-2.jpg" alt="Staff Circle Formations in White T-Shirts" style="width: 100%; height: 220px; object-fit: cover; border-radius: 8px; cursor: pointer;" class="shadow-sm zoom-hover" @click="openLightbox(['/downloads/events/uniform-1.jpg', '/downloads/events/uniform-2.jpg', '/downloads/events/uniform-3.jpg'], 1)">
                                </div>
                                <div class="col-md-4">
                                    <img src="/downloads/events/uniform-3.jpg" alt="Staff in Blue Polo Shirts" style="width: 100%; height: 220px; object-fit: cover; border-radius: 8px; cursor: pointer;" class="shadow-sm zoom-hover" @click="openLightbox(['/downloads/events/uniform-1.jpg', '/downloads/events/uniform-2.jpg', '/downloads/events/uniform-3.jpg'], 2)">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Event 1 -->
                    <div class="col-lg-12 mb-4">
                        <div class="event-card-new p-4 shadow-sm rounded" style="background: #fff; border-top: 4px solid #0045b6;">
                            <h4 class="fw-bold mb-2" style="color: #0045b6;">PKF Gathering with PKF Thailand and PKF Brunei Partners</h4>
                            <h5 class="text-muted mb-4 small">
                                <i class="fa-regular fa-calendar me-2" style="color: #0045b6;"></i>14-JULY-2025 
                                <span class="ms-3 text-muted"><i class="fa-solid fa-location-dot me-2" style="color: #0045b6;"></i>Kuala Lumpur, Malaysia</span>
                            </h5>
                            
                            <div class="row gx-3">
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <img src="/downloads/events/Event2.jpg" alt="Event2" style="width: 100%; height: 220px; object-fit: cover; border-radius: 8px; cursor: pointer;" class="shadow-sm zoom-hover" @click="openLightbox(['/downloads/events/Event2.jpg'], 0)">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Event 2-->
                    <div class="col-lg-12 mb-4">
                        <div class="event-card-new p-4 shadow-sm rounded" style="background: #fff; border-top: 4px solid #0045b6;">
                            <h4 class="fw-bold mb-2" style="color: #0045b6;">AMLCFT Training</h4>
                            <h5 class="text-muted mb-4 small">
                                <i class="fa-regular fa-calendar me-2" style="color: #0045b6;"></i>14-JULY-2025 
                                <span class="ms-3 text-muted"><i class="fa-solid fa-location-dot me-2" style="color: #0045b6;"></i>PKF Myanmar Office</span>
                            </h5>
                            <div class="row gx-3">
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <img src="/downloads/events/amlcft-1.png" alt="AMLCFT Training Session 1" style="width: 100%; height: 220px; object-fit: cover; border-radius: 8px; cursor: pointer;" class="shadow-sm zoom-hover" @click="openLightbox(['/downloads/events/amlcft-1.png', '/downloads/events/amlcft-2.png', '/downloads/events/amlcft-3.jpg'], 0)">
                                </div>
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <img src="/downloads/events/amlcft-2.png" alt="AMLCFT Training Session 2" style="width: 100%; height: 220px; object-fit: cover; border-radius: 8px; cursor: pointer;" class="shadow-sm zoom-hover" @click="openLightbox(['/downloads/events/amlcft-1.png', '/downloads/events/amlcft-2.png', '/downloads/events/amlcft-3.jpg'], 1)">
                                </div>
                                <div class="col-md-4">
                                    <img src="/downloads/events/amlcft-3.jpg" alt="AMLCFT Training Session 3" style="width: 100%; height: 220px; object-fit: cover; border-radius: 8px; cursor: pointer;" class="shadow-sm zoom-hover" @click="openLightbox(['/downloads/events/amlcft-1.png', '/downloads/events/amlcft-2.png', '/downloads/events/amlcft-3.jpg'], 2)">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Event 5-->
                    <div class="col-lg-12 mb-4">
                        <div class="event-card-new p-4 shadow-sm rounded" style="background: #fff; border-top: 4px solid #0045b6;">
                            <h4 class="fw-bold mb-2" style="color: #0045b6;">Thadingyut traditions at the office: Respect, gratitude, and light</h4>
                            <h5 class="text-muted mb-4 small">
                                <i class="fa-regular fa-calendar me-2" style="color: #0045b6;"></i>29-OCT-2024 
                                <span class="ms-3 text-muted"><i class="fa-solid fa-location-dot me-2" style="color: #0045b6;"></i>PKF Myanmar Office</span>
                            </h5>
                            <div class="row gx-3">
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <img src="/downloads/events/event5.1.jpg" alt="Event3" style="width: 100%; height: 220px; object-fit: cover; border-radius: 8px; cursor: pointer;" class="shadow-sm zoom-hover" @click="openLightbox(['/downloads/events/event5.1.jpg', '/downloads/events/event5.2.jpg', '/downloads/events/event5.3.jpg'], 0)">
                                </div>
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <img src="/downloads/events/event5.2.jpg" alt="Event3" style="width: 100%; height: 220px; object-fit: cover; border-radius: 8px; cursor: pointer;" class="shadow-sm zoom-hover" @click="openLightbox(['/downloads/events/event5.1.jpg', '/downloads/events/event5.2.jpg', '/downloads/events/event5.3.jpg'], 1)">
                                </div>
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <img src="/downloads/events/event5.3.jpg" alt="Event3" style="width: 100%; height: 220px; object-fit: cover; border-radius: 8px; cursor: pointer;" class="shadow-sm zoom-hover" @click="openLightbox(['/downloads/events/event5.1.jpg', '/downloads/events/event5.2.jpg', '/downloads/events/event5.3.jpg'], 2)">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Event 4-->
                    <div class="col-lg-12 mb-4">
                        <div class="event-card-new p-4 shadow-sm rounded" style="background: #fff; border-top: 4px solid #0045b6;">
                            <h4 class="fw-bold mb-2" style="color: #0045b6;">Asia Pacific Gathering</h4>
                            <h5 class="text-muted mb-4 small">
                                <i class="fa-regular fa-calendar me-2" style="color: #0045b6;"></i>25-JULY-2024 
                                <span class="ms-3 text-muted"><i class="fa-solid fa-location-dot me-2" style="color: #0045b6;"></i>Bangkok, Thailand</span>
                            </h5>
                            <div class="row gx-3">
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <img src="/downloads/events/event6.1.jpg" alt="Event3" style="width: 100%; height: 220px; object-fit: cover; border-radius: 8px; cursor: pointer;" class="shadow-sm zoom-hover" @click="openLightbox(['/downloads/events/event6.1.jpg', '/downloads/events/event4.jpg', '/downloads/events/event4.1.jpg'], 0)">
                                </div>
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <img src="/downloads/events/event4.jpg" alt="Event3" style="width: 100%; height: 220px; object-fit: cover; border-radius: 8px; cursor: pointer;" class="shadow-sm zoom-hover" @click="openLightbox(['/downloads/events/event6.1.jpg', '/downloads/events/event4.jpg', '/downloads/events/event4.1.jpg'], 1)">
                                </div>
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <img src="/downloads/events/event4.1.jpg" alt="Event3" style="width: 100%; height: 220px; object-fit: cover; border-radius: 8px; cursor: pointer;" class="shadow-sm zoom-hover" @click="openLightbox(['/downloads/events/event6.1.jpg', '/downloads/events/event4.jpg', '/downloads/events/event4.1.jpg'], 2)">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Event 3-->
                    <div class="col-lg-12 mb-4">
                        <div class="event-card-new p-4 shadow-sm rounded" style="background: #fff; border-top: 4px solid #0045b6;">
                            <h4 class="fw-bold mb-1" style="color: #0045b6;">A proud moment from the Myanmar Commerce Fair 2018</h4>
                            <p class="text-muted mb-2" style="font-size: 15px;">Awarding the Certificate of Appreciation to Thida & Partners Ltd. and PKF Myanmar Ltd. for their invaluable contribution as Silver Sponsors.</p>
                            <h5 class="text-muted mb-4 small">
                                <i class="fa-regular fa-calendar me-2" style="color: #0045b6;"></i>2018 
                                <span class="ms-3 text-muted"><i class="fa-solid fa-location-dot me-2" style="color: #0045b6;"></i>Myanmar Commerce Fair</span>
                            </h5>
                            <div class="row gx-3">
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <img src="/downloads/events/event3.1.jpg" alt="Event3" style="width: 100%; height: 220px; object-fit: cover; border-radius: 8px; cursor: pointer;" class="shadow-sm zoom-hover" @click="openLightbox(['/downloads/events/event3.1.jpg', '/downloads/events/event3.2.jpg'], 0)">
                                </div>
                                <div class="col-md-4 mb-3 mb-md-0">
                                    <img src="/downloads/events/event3.2.jpg" alt="Event3" style="width: 100%; height: 220px; object-fit: cover; border-radius: 8px; cursor: pointer;" class="shadow-sm zoom-hover" @click="openLightbox(['/downloads/events/event3.1.jpg', '/downloads/events/event3.2.jpg'], 1)">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </transition>

            </div>
        </div>
        <!-- Lightbox Modal with Fixed Controls & Thumbnail Slider -->
        <div v-if="isLightboxOpen" class="lightbox-overlay" @click="closeLightbox">
            <!-- Fixed Top Header Controls -->
            <div class="lightbox-top-bar" @click.stop>
                <div class="lightbox-counter">{{ currentImageIndex + 1 }} / {{ eventImages.length }}</div>
                <div class="close-btn" @click="closeLightbox" title="Close (Esc)"><i class="fa-solid fa-xmark"></i></div>
            </div>

            <!-- Fixed Position Slider Navigation Buttons -->
            <button class="nav-btn prev-btn" @click.stop="prevImage" title="Previous photo (Left Arrow)">
                <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button class="nav-btn next-btn" @click.stop="nextImage" title="Next photo (Right Arrow)">
                <i class="fa-solid fa-chevron-right"></i>
            </button>

            <!-- Centered Image & Thumbnails Content -->
            <div class="lightbox-content" @click.stop>
                <div class="lightbox-img-wrap">
                    <img :src="eventImages[currentImageIndex]" alt="Zoomed Event Photo" class="lightbox-img">
                </div>

                <!-- Interactive Thumbnail Slider Strip inside Lightbox -->
                <div v-if="eventImages.length > 1" class="lightbox-thumbnails-wrap d-flex justify-content-center align-items-center gap-2 mt-3 px-2 overflow-auto">
                    <div 
                        v-for="(img, idx) in eventImages" 
                        :key="idx" 
                        class="lightbox-thumb-container"
                        :class="{'active-thumb': idx === currentImageIndex}"
                        @click.stop="currentImageIndex = idx"
                    >
                        <img :src="img" :alt="'Thumbnail ' + (idx + 1)" class="lightbox-thumb" />
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
import { onMounted, onUnmounted, watch, ref } from 'vue'
    export default {
        setup() {
            let category = ref('news')
            let newsLanguage = ref('en')
            
            let isLightboxOpen = ref(false)
            let currentImageIndex = ref(0)
            let eventImages = ref([])
            let showAllThadinkyutPhotos = ref(false)

            const thadingyutImages = [
                '/downloads/events/thadingyut-2026-1.jpg',
                '/downloads/events/thadingyut-2026-2.jpg',
                '/downloads/events/thadingyut-2026-3.jpg',
                '/downloads/events/thadingyut-2026-4.jpg',
                '/downloads/events/thadingyut-2026-5.jpg',
                '/downloads/events/thadingyut-2026-6.jpg',
                '/downloads/events/thadingyut-2026-7.jpg',
                '/downloads/events/thadingyut-2026-8.jpg',
                '/downloads/events/thadingyut-2026-9.jpg',
                '/downloads/events/thadingyut-2026-10.jpg',
            ]

            const openLightbox = (imagesArray, index) => {
                eventImages.value = imagesArray
                currentImageIndex.value = index
                isLightboxOpen.value = true
                document.body.style.overflow = 'hidden'
            }

            const closeLightbox = () => {
                isLightboxOpen.value = false
                document.body.style.overflow = 'auto'
            }

            const prevImage = () => {
                currentImageIndex.value = (currentImageIndex.value - 1 + eventImages.value.length) % eventImages.value.length
            }

            const nextImage = () => {
                currentImageIndex.value = (currentImageIndex.value + 1) % eventImages.value.length
            }

            const handleKeyDown = (e) => {
                if (!isLightboxOpen.value) return
                if (e.key === 'ArrowLeft') {
                    prevImage()
                } else if (e.key === 'ArrowRight') {
                    nextImage()
                } else if (e.key === 'Escape') {
                    closeLightbox()
                }
            }

            watch([category, newsLanguage], () => {
                window.scrollTo(0,0);
            })
            onMounted(() => {
                window.scrollTo(0,0)
                window.addEventListener('keydown', handleKeyDown)
            })
            onUnmounted(() => {
                window.removeEventListener('keydown', handleKeyDown)
            })

            return { 
                category, 
                newsLanguage, 
                isLightboxOpen, 
                currentImageIndex, 
                eventImages, 
                thadingyutImages,
                showAllThadinkyutPhotos,
                openLightbox, 
                closeLightbox, 
                prevImage, 
                nextImage 
            }
        }
    }
</script>

<style scoped>
    /* Lightbox Styles */
    .lightbox-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.88);
        z-index: 99999;
        display: flex;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(8px);
    }
    .lightbox-top-bar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 22px 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100005;
        pointer-events: none;
    }
    .lightbox-top-bar > * {
        pointer-events: auto;
    }
    .lightbox-counter {
        color: #fff;
        font-size: 15px;
        font-weight: 700;
        background: rgba(0, 0, 0, 0.6);
        padding: 6px 16px;
        border-radius: 20px;
        letter-spacing: 1px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(4px);
    }
    .close-btn {
        color: white;
        font-size: 22px;
        cursor: pointer;
        background: rgba(255, 255, 255, 0.18);
        width: 44px;
        height: 44px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.25s ease;
        border: 1px solid rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(4px);
    }
    .close-btn:hover {
        background: #0045b6;
        border-color: #0045b6;
        transform: scale(1.1);
    }

    /* Fixed Navigation Buttons - Consistent Across All Photos */
    .nav-btn {
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        color: white;
        font-size: 22px;
        cursor: pointer;
        background: rgba(255, 255, 255, 0.2);
        width: 54px;
        height: 54px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.25s ease;
        z-index: 100004;
        user-select: none;
        border: 1px solid rgba(255, 255, 255, 0.25);
        backdrop-filter: blur(4px);
    }
    .nav-btn:hover {
        background: #0045b6;
        color: #ffffff;
        transform: translateY(-50%) scale(1.12);
        box-shadow: 0 4px 18px rgba(0, 69, 182, 0.6);
        border-color: #0045b6;
    }
    .prev-btn {
        left: 32px;
    }
    .next-btn {
        right: 32px;
    }

    .lightbox-content {
        position: relative;
        max-width: 80vw;
        max-height: 84vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 100002;
    }
    .lightbox-img-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        max-height: 72vh;
    }
    .lightbox-img {
        max-width: 76vw;
        max-height: 72vh;
        border-radius: 10px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.7);
        object-fit: contain;
    }
    @media (max-width: 768px) {
        .nav-btn {
            width: 42px;
            height: 42px;
            font-size: 18px;
        }
        .prev-btn { left: 10px; }
        .next-btn { right: 10px; }
        .lightbox-top-bar { padding: 14px 16px; }
        .lightbox-content {
            max-width: 95vw;
        }
        .lightbox-img {
            max-width: 92vw;
            max-height: 64vh;
        }
    }
    .zoom-hover {
        transition: 0.3s ease;
    }
    .zoom-hover:hover {
        transform: scale(1.02);
        filter: brightness(1.1);
    }

    /* Facebook-Style Photo Grid & Overlay */
    .fb-photo-card {
        position: relative;
        border-radius: 8px;
        overflow: hidden;
        height: 220px;
        cursor: pointer;
        background: transparent;
    }
    .event-card-new .fb-photo-card img,
    .fb-photo-card img {
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
        display: block !important;
        transition: transform 0.35s ease, filter 0.35s ease;
    }
    .fb-photo-card:hover img {
        transform: scale(1.05);
    }
    .fb-more-overlay {
        position: absolute;
        inset: 0;
        background: rgba(10, 38, 86, 0.65);
        backdrop-filter: blur(2px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    .fb-photo-card:hover .fb-more-overlay {
        background: rgba(0, 69, 182, 0.82);
    }
    .fb-plus-number {
        font-size: 2.8rem;
        font-weight: 800;
        line-height: 1;
        color: #ffffff;
        letter-spacing: 1px;
        text-shadow: 0 3px 12px rgba(0, 0, 0, 0.6);
    }
    .fb-plus-text {
        font-size: 0.82rem;
        font-weight: 700;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        margin-top: 8px;
        background: rgba(0, 0, 0, 0.4);
        padding: 4px 14px;
        border-radius: 20px;
        color: #ffffff;
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    }

    /* Toggle Grid Button */
    .btn-toggle-grid {
        background: transparent;
        border: 1.5px solid #0045b6;
        color: #0045b6;
        font-size: 13px;
        font-weight: 600;
        padding: 5px 16px;
        border-radius: 20px;
        transition: all 0.25s ease;
        cursor: pointer;
    }
    .btn-toggle-grid:hover {
        background: #0045b6;
        color: #ffffff;
        box-shadow: 0 4px 12px rgba(0, 69, 182, 0.25);
        transform: translateY(-1px);
    }

    /* Slider Thumbnails */
    .lightbox-thumbnails-wrap {
        max-width: 90vw;
        overflow-x: auto;
        padding: 6px 0;
        scrollbar-width: thin;
    }
    .lightbox-thumb-container {
        border-radius: 6px;
        overflow: hidden;
        border: 2px solid transparent;
        cursor: pointer;
        opacity: 0.6;
        transition: all 0.2s ease;
        flex-shrink: 0;
    }
    .lightbox-thumb-container:hover {
        opacity: 0.95;
        transform: translateY(-2px);
    }
    .lightbox-thumb-container.active-thumb {
        opacity: 1;
        border-color: #0045b6;
        box-shadow: 0 0 10px rgba(0, 69, 182, 0.8);
        transform: scale(1.08);
    }
    .lightbox-thumb {
        width: 65px;
        height: 48px;
        object-fit: cover;
        display: block;
    }

    .events {
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
    .events-header {
        padding: 0px 9%;
    }
    .lang-btn {
        background: #e7e8ea;
        color: #003594;
        border: none;
        padding: 5px 15px;
        margin-left: 10px;
        border-radius: 5px;
        font-weight: bold;
        transition: 0.3s;
    }
    .active-lang {
        background: #0045b6;
        color: #fff;
    }
    .news-category {
        background: #e7e8ea;
        padding: 10px 15px;
        font-size: 13px;
        height: fit-content;
        align-self: flex-start;
    }
    .side-link {
        border-bottom: 1px solid rgb(157, 151, 151);
        margin-bottom: 15px;
        padding-bottom: 5px;
        transition: 0.5s ease;
        cursor: pointer;
    }
    .side-link:hover {
        background: #0045b6;
    }
    .side-link a {
        padding: 2px 5px;
        transition: 0.5s ease;
        color: #003594;
        font-size: 15px;
        font-weight: bold;
        display: block;
        line-height: 1.3;
    }
    .side-link:hover a {
        padding: 0 10px;
        color: #e7e8ea;
    }
    .active-link {
        background: #003594;
        padding: 5px 10px;
    }
    .event-card-new {
        background: #f7f7f7;
        border-radius: 10px;
        padding: 20px;
        border-left: 5px solid #0045b6;
    }
    .event-card-new img {
        width: 100%;
        height: 180px;
        object-fit: cover;
        border-radius: 8px;
    }
    .event-card-new h5 {
        font-size: 14px;
        color: #000000;
        margin-bottom: 8px;
    }
    .event-card-new h4 {
        color: #0f3780;
        font-size: 16px;
        font-weight: 600;
        line-height: 1.6;
        margin-bottom: 10px;
    }
    .event-card-new p {
        font-size: 15px;
        color: #444;
    }
    .myanmar-text {
        font-size: 14px;
        color: #555;
        background: #e8f0fe;
        padding: 8px 12px;
        border-radius: 5px;
        margin-bottom: 10px;
    }
    .event-card {
        padding: 5px 10px;
    }
    .event-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        object-position: center;
    }
    .event-card h5 {
        font-size: 16px;
        color: #6fbf08;
        margin: 10px 0;
    }
    .event-card h4 {
        color: #a2d7ea;
        font-size: 23px;
    }
    .event-card p {
        font-size: 16px;
    }
    .read-more {
        background: linear-gradient(135deg, #0045b6 0%, #002d7a 100%);
        border: none;
        font-family: 'Aptos', sans-serif;
        font-weight: 600;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        font-size: 13px;
        padding: 8px 20px;
        color: #fff;
        border-radius: 6px;
        text-decoration: none;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 69, 182, 0.3);
        display: inline-block;
        cursor: pointer;
    }
    .read-more:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 69, 182, 0.4);
        background: linear-gradient(135deg, #0056e0 0%, #003694 100%);
        color: #fff;
    }
    .read-more i,
    .read-more * {
        color: #ffffff !important;
    }
    .breadcrumb-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: nowrap;
        gap: 12px;
        margin-top: 20px;
        margin-bottom: 8px;
    }
    .contact-btn {
        white-space: nowrap;
        flex-shrink: 0;
    }
    .show-link a {
        color: #0045b6;
        text-decoration: none;
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
