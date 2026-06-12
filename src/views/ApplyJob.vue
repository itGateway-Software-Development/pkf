<template>
    <section class="apply-page-section">
        <div class="apply-header">
            <img src="../assets/images/carrer.jpg" alt="Apply Now Banner">
            <h2 class="banner-apply">APPLY NOW</h2>
        </div>

        <div class="container my-5 apply-container">
            <!-- Breadcrumbs -->
            <p class="show-link mb-4">
                <router-link to="/">Home</router-link>&nbsp;/&nbsp;
                <router-link to="/careers/careers">Job Opportunities</router-link>&nbsp;/&nbsp;
                Apply
            </p>

            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <!-- Success State Card -->
                    <div v-if="isSuccess" class="apply-card success-card text-center p-5 rounded-4 shadow-lg border-0 bg-white">
                        <div class="success-icon-wrapper mb-4">
                            <i class="fa-solid fa-circle-check text-success display-1"></i>
                        </div>
                        <h2 class="fw-bold mb-3" style="color: #0f3780;">Application Submitted!</h2>
                        <p class="lead text-secondary mb-4">
                            Thank you for applying. We have successfully received your application for the 
                            <strong style="color: #0045b6;">{{ jobTitle }}</strong> position. 
                            Our recruitment team will review your credentials and contact you shortly.
                        </p>
                        <router-link to="/careers/careers" class="back-btn px-5 py-3 d-inline-block">
                            Back to Job Opportunities <i class="fa-solid fa-arrow-left ms-2"></i>
                        </router-link>
                    </div>

                    <!-- Form Card -->
                    <div v-else class="apply-card p-4 p-md-5 rounded-4 shadow-lg border-0 bg-white">
                        <div class="form-header mb-4 pb-4 border-bottom text-center">
                            <span class="badge px-3 py-2 text-uppercase mb-3 rounded-pill fw-semibold shadow-sm" style="background-color: #0045b6; color: white;">
                                Job Application Form
                            </span>
                            <h3 class="fw-bold mb-1" style="color: #0f3780;">{{ jobTitle }}</h3>
                            <p class="text-muted mb-0">Please fill out all the fields below to submit your application.</p>
                        </div>

                        <form @submit.prevent="submitForm">
                            <!-- Name Field -->
                            <div class="form-group mb-4">
                                <label class="form-label fw-semibold">Full Name <span class="text-danger">*</span></label>
                                <div class="input-group">
                                    <span class="input-group-text bg-light border-end-0"><i class="fa-solid fa-user text-muted"></i></span>
                                    <input type="text" v-model="form.fullName" class="form-control border-start-0" placeholder="Enter your full name" required />
                                </div>
                            </div>

                            <!-- Date of Birth Field -->
                            <div class="form-group mb-4">
                                <label class="form-label fw-semibold">Date of Birth <span class="text-danger">*</span></label>
                                <div class="input-group">
                                    <span class="input-group-text bg-light border-end-0"><i class="fa-solid fa-calendar-days text-muted"></i></span>
                                    <input type="date" v-model="form.dob" class="form-control border-start-0" required />
                                </div>
                            </div>

                            <!-- Phone Number Field -->
                            <div class="form-group mb-4">
                                <label class="form-label fw-semibold">Phone Number <span class="text-danger">*</span></label>
                                <div class="input-group">
                                    <span class="input-group-text bg-light border-end-0"><i class="fa-solid fa-phone text-muted"></i></span>
                                    <input type="tel" v-model="form.phone" class="form-control border-start-0" placeholder="e.g. +95 912345678" required />
                                </div>
                            </div>

                            <!-- Email Field -->
                            <div class="form-group mb-4">
                                <label class="form-label fw-semibold">Email Address <span class="text-danger">*</span></label>
                                <div class="input-group">
                                    <span class="input-group-text bg-light border-end-0"><i class="fa-solid fa-envelope text-muted"></i></span>
                                    <input type="email" v-model="form.email" class="form-control border-start-0" placeholder="e.g. email@example.com" required />
                                </div>
                            </div>

                            <!-- File Upload Disclaimer -->
                            <div class="alert alert-info p-3 mb-4 d-flex align-items-start border-0 shadow-sm" style="background-color: #f0f7ff; border-left: 4px solid #0045b6 !important; border-radius: 8px;">
                                <i class="fa-solid fa-video text-primary me-3 mt-1 fs-5"></i>
                                <div class="text-dark" style="font-size: 13px; line-height: 1.5;">
                                    <strong>File Submission Guide:</strong> Since our form does not accept direct image or file uploads, please upload your CV and certificates to Google Drive (or other cloud storage) and share the links below.
                                    <div class="mt-2">
                                        <a href="https://www.youtube.com/watch?v=GUYpinDoqFw" target="_blank" rel="noopener" class="fw-bold text-decoration-underline" style="color: #0045b6;">
                                            Watch Video Tutorial <i class="fa-solid fa-up-right-from-square ms-1" style="font-size: 10px;"></i>
                                        </a>
                                        on how to upload and get a shareable Google Drive link.
                                    </div>
                                </div>
                            </div>

                            <!-- CV Link Field -->
                            <div class="form-group mb-4">
                                <label class="form-label fw-semibold">CV Form Link <span class="text-danger">*</span></label>
                                <div class="input-group">
                                    <span class="input-group-text bg-light border-end-0"><i class="fa-solid fa-link text-muted"></i></span>
                                    <input type="url" v-model="form.cvLink" class="form-control border-start-0" placeholder="e.g. Google Drive, OneDrive, or Dropbox link" required />
                                </div>
                                <small class="form-text text-muted mt-1 d-block">
                                    <i class="fa-solid fa-circle-info me-1"></i> Please make sure the link sharing setting is set to <strong>"Anyone with the link can view"</strong>.
                                </small>
                            </div>

                            <!-- Education Certificate Link Field -->
                            <div class="form-group mb-4">
                                <label class="form-label fw-semibold">Education Certificate Link <span class="text-danger">*</span></label>
                                <div class="input-group">
                                    <span class="input-group-text bg-light border-end-0"><i class="fa-solid fa-graduation-cap text-muted"></i></span>
                                    <input type="url" v-model="form.certLink" class="form-control border-start-0" placeholder="e.g. Google Drive, OneDrive, or Dropbox link" required />
                                </div>
                                <small class="form-text text-muted mt-1 d-block">
                                    <i class="fa-solid fa-circle-info me-1"></i> Paste a shareable cloud link to your graduation/degrees or certificates.
                                </small>
                            </div>

                            <!-- Consent Checkbox -->
                            <div class="form-check mb-4">
                                <input type="checkbox" id="consent" v-model="form.consent" class="form-check-input" required />
                                <label for="consent" class="form-check-label text-muted fs-6">
                                    I give permission to process and store my personal data for recruitment purposes. <span class="text-danger">*</span>
                                </label>
                            </div>

                            <!-- Error Message -->
                            <div v-if="errorMessage" class="alert alert-danger mb-4 d-flex align-items-center" role="alert">
                                <i class="fa-solid fa-circle-exclamation me-2 fs-5"></i>
                                <div>{{ errorMessage }}</div>
                            </div>

                            <!-- Submit Button -->
                            <div class="text-center mt-5">
                                <button type="submit" class="contact-btn w-100 py-3 fw-bold text-white" :disabled="isSubmitting">
                                    <span v-if="isSubmitting">
                                        <i class="fa-solid fa-spinner fa-spin me-2"></i> Submitting...
                                    </span>
                                    <span v-else>
                                        Submit Application <i class="fa-solid fa-paper-plane ms-2"></i>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref, computed, onMounted } from 'vue'

export default {
    props: ['career'],
    setup(props) {
        onMounted(() => {
            window.scrollTo(0, 0);
        });

        const isSubmitting = ref(false);
        const isSuccess = ref(false);
        const errorMessage = ref('');

        const form = ref({
            fullName: '',
            dob: '',
            phone: '',
            email: '',
            cvLink: '',
            certLink: '',
            consent: false
        });

        const jobTitle = computed(() => {
            if (props.career === 'careers') {
                return 'Junior Accountant (Tax & Corporate Compliance)';
            }
            // Fallback dynamically from slug
            if (props.career) {
                return props.career
                    .split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');
            }
            return 'Junior Accountant';
        });

        const submitForm = async () => {
            isSubmitting.value = true;
            errorMessage.value = '';

            try {
                // Post form payload to Formspree endpoint (sends to company email)
                const response = await fetch('https://formspree.io/f/xvznqbgj', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        'Position Applied': jobTitle.value,
                        'Full Name': form.value.fullName,
                        'Date of Birth': form.value.dob,
                        'Phone Number': form.value.phone,
                        'Email Address': form.value.email,
                        'CV Form Link': form.value.cvLink,
                        'Education Certificate Link': form.value.certLink,
                        'Permission to store data': form.value.consent ? 'Yes' : 'No'
                    })
                });

                if (response.ok) {
                    isSuccess.value = true;
                    // Reset form fields
                    form.value = {
                        fullName: '',
                        dob: '',
                        phone: '',
                        email: '',
                        cvLink: '',
                        certLink: '',
                        consent: false
                    };
                } else {
                    const data = await response.json();
                    errorMessage.value = data.errors 
                        ? data.errors.map(err => err.message).join(', ') 
                        : 'Something went wrong. Please try again.';
                }
            } catch (error) {
                errorMessage.value = 'Failed to submit application. Please check your internet connection and try again.';
            } finally {
                isSubmitting.value = false;
            }
        };

        return {
            form,
            jobTitle,
            isSubmitting,
            isSuccess,
            errorMessage,
            submitForm
        };
    }
}
</script>

<style scoped>
.apply-page-section {
    overflow-x: hidden;
}

.apply-header {
    position: relative;
}

.apply-header img {
    width: 100%;
    height: 320px;
    object-fit: cover;
    object-position: center;
    filter: brightness(0.4);
}

.banner-apply {
    position: absolute;
    color: #fff;
    font-weight: bolder;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #104982;
    padding: 10px 50px;
    z-index: 10;
    white-space: nowrap;
}

.apply-container {
    padding: 0 9%;
}

.apply-card {
    border-top: 5px solid #0045b6 !important;
    transition: all 0.3s ease;
}

.input-group-text {
    color: #0045b6;
    background-color: #f8fbff !important;
    border: 1px solid #ced4da;
}

.form-control:focus {
    border-color: #0045b6;
    box-shadow: 0 0 0 0.25rem rgba(0, 69, 182, 0.15);
}

.form-control:focus + .input-group-text {
    border-color: #0045b6;
}

.form-label {
    color: #0f3780;
}

.back-btn {
    border: none;
    background: #0f3780;
    color: white !important;
    border-radius: 30px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(15, 55, 128, 0.2);
}

.back-btn:hover {
    background: #0045b6;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 69, 182, 0.35);
}

.contact-btn, .contact-btn * {
    color: #ffffff !important;
}

.contact-btn:hover, .contact-btn:hover * {
    color: #ffffff !important;
}

.success-icon-wrapper i {
    animation: scaleIn 0.5s ease-out;
}

@keyframes scaleIn {
    0% {
        transform: scale(0);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

@media (max-width: 990px) {
    .banner-apply {
        font-size: 22px;
        padding: 15px 25px;
    }
    .apply-container {
        padding: 0 5%;
    }
}

@media (max-width: 450px) {
    .apply-header img {
        height: 250px;
    }
    .banner-apply {
        font-size: 15px;
        padding: 12px 15px;
    }
    .apply-container {
        padding: 0 3%;
    }
    .apply-card {
        padding: 25px 15px !important;
    }
}
</style>
