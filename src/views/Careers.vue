<template>
    <section>
        <div class="career-header">
            <img src="../assets/images/carrer.jpg" alt="">
            <h2 class="banner-careers">CAREERS</h2>
          

            <div class="row mt-5 career-content">
                <CareerCategory :career = 'career'></CareerCategory>

                <div class="col-lg-9 col-md-8">
                    <a href="/contact-us" class="float-end contact-btn me-4">Contact Us</a>
                    <div v-if="career == 'careers'">
                        <CareerPage></CareerPage>
                    </div>
                    <div v-if="career == 'junior-auditor'">
                        <JuniorAuditor></JuniorAuditor>
                    </div>
                </div>
          
            </div>
        </div>
    </section>
</template>

<script>
    import JuniorAuditor from '../components/JuniorAuditor'
import CareerPage from '../components/CareerPage'
import CareerCategory from '../components/CareerCategory'
import { onUpdated, onMounted } from 'vue'
export default {
        components: {JuniorAuditor,CareerPage, CareerCategory },
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
