<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

defineProps({
    job: Object
});
 
</script>

<template>
    <section>
        <div class="px-5 bg-gray-900 inline-block relative m-6 rounded-3xl p-6">
            <div class="inline-block mx-10 my-10">
                <h2 class="absolute top-4 left-4 text-green-600 text-3xl">{{job.title}}</h2>
            </div>
            <div lass="items-center">
                <p class="w-64 h-64 m-4 inline-block text-white">{{ job.description }}</p>
            </div>
            <div class="items-center text-right">
                <RouterLink :to="'/job/' + job.id" class="text-green-300 m-auto hover:text-green-600">View</RouterLink>
            </div>
        </div>
    </section>
</template>