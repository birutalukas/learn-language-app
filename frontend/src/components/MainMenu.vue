<template>
    <button
        @click="router.push({ path: '/', hash: '#mokymai-ir-paslaugos' })"
        class="text-white text-nowrap"
    >
        {{ $t("headingServices") }}
    </button>
    <button
        @click="router.push({ path: '/', hash: '#apie-mus' })"
        class="text-white text-nowrap"
    >
        {{ $t("headingAbout") }}
    </button>

    <button @click="router.push('/kontaktai')" class="text-white text-nowrap">
        {{ $t("headingContact") }}
    </button>
    <a href="https://facebook.com" target="_blank">
        <img :src="facebook" alt="Facebook" width="30" height="30" />
    </a>
</template>

<script setup>
import { useRouter } from "vue-router";
import facebook from "@/assets/facebook.svg";

const router = useRouter();
</script>
