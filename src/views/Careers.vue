<template>
    <section>
        <div class="career-header">
            <img src="../assets/images/carrer.jpg" alt="">
            <h2 class="banner-careers">JOB OPPORTUNITIES</h2>
        </div>

        <div class="container job-container my-5">
            <div class="job-card shadow-lg p-4 p-md-5 bg-white rounded-4 border-0">
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
        </div>
    </section>
</template>

<script>
import { onUpdated, onMounted } from 'vue'
export default {
        props: ['career'],
        setup() {
            onUpdated(() => {
                window.scrollTo(0,0);
            })
            onMounted(() => {
                window.scrollTo(0,0)
            })
        }
    }
</script>

<style scoped>
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
    .career-header img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        object-position: center;
        filter: brightness(.6);
    }
/* shared base style for all banners */
.banner-careers {
    position: absolute;
    color: #fff;
    font-weight: bolder;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #104982;
    padding: 10px 50px;
    z-index: 10;
    white-space: nowrap;
}

/* individual positioning for each */
.banner-careers { top: 50%; }

   .career-content {
        padding: 20px 9%;
   }

   @media (max-width:990px) {
        .career-header img {
            width: 100%;
            height: 350px;
            object-fit: cover;
            object-position: center;
            filter: brightness(.6);
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
        .career-header img {
            width: 100%;
            height: 270px;
            object-fit: cover;
            object-position: center;
            filter: brightness(.6);
        }
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

</style>
