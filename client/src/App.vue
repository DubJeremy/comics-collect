<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
</script>

<template>
    <header>
        <Header />
    </header>

    <RouterView />
</template>

<style>
header {
    line-height: 1.5;
    height: 20vh;
    width: 100vw;
}
</style>
