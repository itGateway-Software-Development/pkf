<template>
  <section>
    <div class="page-banner">
      <h2 class="banner-title">CONTACT US</h2>
    </div>
    <div class="contact-content">
      <p class="show-link">
        <router-link to="/">Home</router-link>&nbsp;/&nbsp; Contact PKF Myanmar
      </p>
      <div class="row mt-5 contact-info">
        <h3>Thank you for your interest in PKF Myanmar</h3>
        <p>
          We'll help direct your enquiry to the right place. You can start with
          the form below:
        </p>
      </div>
    </div>
    
    <div class="row mt-5 form">
      <div class="col-lg-6 ps-0">
        <form action="https://formspree.io/f/meepbzrv" method="POST">
          <div class="form-group mb-2">
            <label for="">Full Name <span>*</span></label>
            <input type="text" class="form-control" name="FullName" required />
          </div>
          <div class="form-group mb-2">
            <label for="">Email <span>*</span></label>
            <input type="email" class="form-control" name="Email" required />
          </div>
          <div class="form-group mb-2">
            <label for="">Phone Number <span>*</span></label>
            <input type="text" class="form-control" name="PhoneNumber" required />
          </div>
          <div class="form-group mb-2">
            <label for="">Message <span>*</span></label>
            <textarea
              class="form-control"
              name="Message"
              id=""
              cols="30"
              rows="4"
              required
            ></textarea>
          </div>
          <div class="form-group mb-1">
            <label class="text-muted">
              We will only use your personal information to handle your enquiry,
              see our policies, click to confirm <span>*</span>
            </label>
          </div>
          <div class="form-group mb-3">
            <input type="checkbox" class="me-2" name="PermissionToStoreData" required />
            <label for=""
              >Yes, I give permission to store and process my data</label>
          </div>
          <div class="text-start">
            <button color>Submit</button>
          </div>
        </form>
      </div>
      <div class="col-lg-6 text-center map ps-0">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4720.046706379885!2d96.16061047591678!3d16.786326019840534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1edd4f2d32165%3A0xb905b32085af0b71!2sGonyi%20Residence!5e1!3m2!1sen!2sth!4v1773938992779!5m2!1sen!2sth"  height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
  },
};
</script>

<style scoped>
.contact-header {
  position: relative;
}

.map iframe {
  width: 100% !important;
  height: auto !important; /* Overrides any hardcoded height */
  aspect-ratio: 4 / 3;     /* Keeps the map a perfect rectangle at any size */
  border-radius: 8px;      /* Optional: rounds the corners */
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

.contact-content {
  position: relative;
  padding: 20px 17%;
}

.contact-info h3 {
  color: cornflowerblue;
  font-size: 25px;
}

.contact-info p {
  font-size: 13px;
}

form {
  width: 350px;
}

form label {
  font-size: 13px;
}

form span {
  color: red;
}

form input,
form textarea {
  border-radius: 7px;
  resize: none;
  font-size: 12px;
}

form button {
  font-size: 13px;
  border: none;
  background: #003594;
  color: white;
  padding: 5px 20px;
  border-radius: 7px;
}

.form {
  padding: 30px 17%;
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

@media (max-width: 990px) {
  .form {
    margin: 0 auto !important;
  }

  .form form {
    margin: 0 auto 30px !important;
  }
}

@media (max-width: 450px) {
  .contact-content {
    padding: 20px 10%;
  }
  
  .form {
    margin: 0 auto !important;
    padding: 10px 8%;
    width: auto !important;
  }

  .form form {
    margin: 0 auto 30px !important;
    width: 300px;
  }
  
  .contact-info h3 {
    font-size: 20px;
  }
  
  .contact-info p {
    font-size: 12px;
  }
  
  .map iframe {
    width: 100% !important;
  }
}
</style>
