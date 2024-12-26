<script setup>
import CardTemp from '@/components/CardTemp.vue';
import jobs from '@/assets/jobs.json';
const jlist = jobs.jobs;
</script>

<template>
    <section>
        <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 bg-slate-200 shadow">
              <CardTemp v-for="job in jlist" :key="job.id" :job="job"/>
            {{ console.log(jlist) }}
        </div>
    </section>
</template>