<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import BookIcon from "./components/icons/IconBook.vue";
</script>

<template>
    <header>
        <div class="header">
            <Header />

            <nav>
                <RouterLink to="/"><BookIcon /></RouterLink>
                <RouterLink to="/profile">℗</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
</template>

<style>
header {
    line-height: 1.5;
    height: 30vh;
    width: 100vw;
    position: relative;
    position: relative;
}

nav {
    width: auto;
    position: absolute;
    right: 3%;
}

nav a.router-link-exact-active {
    color: var(--crimson);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    font-size: 1.8em;
    padding: 0 1rem;
    border-left: 1px solid var(--white);
}

nav a:first-child {
    padding-bottom: 5px;
}

nav a:first-of-type {
    border: 0;
}
</style>
