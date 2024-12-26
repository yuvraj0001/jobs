<script setup>
import { RouterLink } from 'vue-router';
import catimg from '@/assets/images/catimg.jpg';
import {ref} from 'vue';
// D:\ReactPractice\VUE1\jobs\src\assets\images\catimg.jpg
const imgStatus = ref(false);
</script>
<template>
    <section>
        <div class="md:flex mx-auto justify-between container items-center my-10 min-h-96">
            <div class="rounded-3xl bg-green-400  hover:bg-slate-400" @click="imgStatus = !imgStatus">   
                <RouterLink to="#" class="text-white text-3xl lg:p-40 p-20 m-4 text-center inline-block" v-if="imgStatus === false" >Find Jobs</RouterLink>
                <img v-if="imgStatus===true" src="@/assets/images/catimg1.jpg" alt="@/assets/images/catimg.jpg" class="inline-block m-auto">

            </div>
            <div class="rounded-3xl bg-green-400  hover:bg-slate-400" @click="imgStatus = !imgStatus">   
                <RouterLink to="#" class="text-white text-3xl lg:p-40 p-20 m-4 text-center inline-block" v-if="imgStatus === false">Find Jobs</RouterLink>
                <img v-if="imgStatus===true" src="@/assets/images/catimg2.jpg" alt="@/assets/images/catimg.jpg" class="inline-block m-auto">
            </div>
        </div> 
    </section>
</template>