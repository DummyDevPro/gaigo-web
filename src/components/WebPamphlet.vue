<template>
    <div class="home-grid">
        <div class="l-aside d-lg-block vh-rm-nav">
            <left-aside />
        </div>

        <div class="overflow-hidden">
            <top-header />
            <course-imp-info />
            <course-merit id="_strongPoint" />
            <aim-certifications id="_certification" />
            <curriculum id="_curriculum" />
            <coach id="_coach" />
            <student-message id="_studentMsg" />
        </div>

        <!-- <contact-us /> -->

        <div class="r-aside d-none d-lg-block vh-rm-nav">
            <right-aside />
        </div>
    </div>
</template>

<script>
import LeftAside from '@/components/LeftAside.vue';
import RightAside from '@/components/RightAside.vue';
import TopHeader from '@/components/TopHeader.vue';
import ContactUs from '@/components/ContactUs.vue';
import CourseImpInfo from '@/components/CourseImpInfo.vue';
import CourseMerit from '@/components/CourseMerit.vue';
import AimCertifications from '@/components/AimCertifications.vue';
import Curriculum from '@/components/Curriculum.vue';
import Coach from '@/components/Coach.vue';
import StudentMessage from '@/components/StudentMessage.vue';

export default {
    components: {
        'top-header': TopHeader,
        'left-aside': LeftAside,
        'right-aside': RightAside,
        'contact-us': ContactUs,
        'course-imp-info': CourseImpInfo,
        'course-merit': CourseMerit,
        'aim-certifications': AimCertifications,
        'curriculum': Curriculum,
        'coach': Coach,
        'student-message': StudentMessage,
    },
    computed: {
        getUserID() {
            return this.$store.getters.acquireUserID
        }
    }
}
</script>

<style scoped>
.home-grid {
    display: grid;
    grid-template-columns: 25% 50% 25%;
}

@media (max-width: 991.98px) {
    .home-grid {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .home-grid>*:first-child {
        height: fit-content;
    }
}

:is(.l-aside, .r-aside) {
    position: sticky;
    top: 72px;
    /* bottom: 0; */
    z-index: 2;
    /* box-shadow: 0 0 0 0 gray; */
    background-color: var(--color-white);
}

.l-aside {
    left: 0;
    box-shadow: 1px -1px 1px gainsboro;
}

.r-aside {
    right: 0;
    box-shadow: -1px -1px 1px gainsboro;
}
</style>