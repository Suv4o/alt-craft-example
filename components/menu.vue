<script setup>
const navigation = [
    { name: "Page 1", to: "/" },
    { name: "Page 2", to: "/page-2" },
    { name: "Page 3", to: "/page-3" },
    { name: "Page 4", to: "/page-4" },
];
</script>

<template>
    <header class="bg-white">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1"></div>
            <div class="flex gap-4 lg:gap-x-12">
                <NuxtLink
                    v-for="item in navigation"
                    :key="item.name"
                    :to="item.to"
                    class="text-xl font-semibold leading-6 text-gray-900"
                    >{{ item.name }}</NuxtLink
                >
            </div>
            <div class="flex lg:flex-1 lg:justify-end"></div>
        </nav>
    </header>
</template>
