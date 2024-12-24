<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <section>
        <div class="md:flex mx-auto justify-between container items-center">
            <div class="rounded-3xl bg-green-400  hover:bg-slate-400">   
                <RouterLink to="/" class="text-white text-3xl lg:p-40 p-20 m-4 text-center inline-block">Find Jobs</RouterLink>
            </div>
            <div class="rounded-3xl bg-green-400  hover:bg-slate-400">   
                <RouterLink to="/" class="text-white text-3xl lg:p-40 p-20 m-4 text-center inline-block">Find Jobs</RouterLink>
            </div>
        </div>
    </section>
</template>