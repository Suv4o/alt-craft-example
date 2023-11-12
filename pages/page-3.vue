<script setup>
const images = [
    {
        id: 1,
        src: "https://source.unsplash.com/aWHKsYkbCi8",
        alt: "",
    },
    {
        id: 2,
        src: "https://source.unsplash.com/E1HK_gXoEuc",
        alt: "tincidunt ornare massa eget",
    },
    {
        id: 3,
        src: "https://source.unsplash.com/pu7AIrcm7_I",
        alt: "Aleks",
    },
];
</script>

<template>
    <div>
        <h1 class="text-4xl mt-4 text-center">Page 1</h1>
        <div class="bg-white">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
                    <div v-for="image in images" :key="image.id" class="group relative">
                        <div
                            class="h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto"
                        >
                            <img :src="image.src" :alt="image.alt" class="h-full w-full object-cover object-center" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
