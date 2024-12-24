<script setup>
    const Lists = [
        {name:'jobs', nav:'/jobs'},
        {name:'notification', nav:'/notifications'},
        {name:'messages', nav:'/messages'}
    ]
</script>

<template>
    <div class="bg-gray-900 text-gray-100 py-6 px-6 shadow flex justify-between items-center">
        <div class="items-center text-green-500 text-3xl hover:text-green-200">
            <RouterLink to="/">Logo</RouterLink>
        </div>

        <div class="md:flex text-white">
            <ul v-for="list in Lists" class="px-6">
                <li><a :href="list.nav" class="px-3 py-3 hover:text-green-200 shadow rounded inline-block">{{list.name}}</a></li>
            </ul>
        </div>

    </div>
</template>

<style>
</style>