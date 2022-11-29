<script setup lang="ts">
import BookIcon from "./icons/IconBook.vue";
import { RouterLink } from "vue-router";
</script>

<template>
    <div class="header">
        <h1 class="green">ComicsCollect</h1>
        <div class="search">
            <input type="text" placeholder="search ⚲" />
            <div class="filters">
                <select>
                    <option disabled value="">Filters</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
                <div class="iconCheck">☷</div>
                <div class="iconCheck">☰</div>
            </div>
            <div class="filterSelected"></div>
        </div>
        <div class="nav">
            <nav>
                <RouterLink to="/"><BookIcon /></RouterLink>
                <RouterLink to="/profile">℗</RouterLink>
            </nav>
        </div>
    </div>
</template>

<style lang="scss">
.header {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 25% 5% 40% 5% 25%;
    grid-row: 100%;
    h1 {
        grid-column: 1/2;
        padding: 5%;
        letter-spacing: -0.05em;
        font-weight: 900;
    }
    .search {
        grid-column: 3/4;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: nowrap;
        border-bottom: 2px solid var(--white);
        input {
            width: 70%;
            height: 20%;
            border-radius: 20px;
            border: none;
            margin-bottom: 15px;
            padding: 20px;
        }
        .filters {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: nowrap;
            margin-bottom: 15px;
            select {
                height: 30px;
                border-radius: 20px;
                padding: 0 10px;
            }
            .iconCheck {
                margin-left: 15px;
                border: 1px solid var(--white);
                height: 30px;
                width: 30px;
                border-radius: 10%;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }
        }
        .filterSelected {
            width: 80%;
            margin-bottom: 15px;
        }
    }
    .nav {
        grid-column: 5/6;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        nav {
            width: fit-content;
            a {
                font-size: 1.8em;
                padding: 0 1rem;
                border-left: 1px solid var(--white);
                &:first-child {
                    padding-bottom: 5px;
                }
                &:first-of-type {
                    border: 0;
                }
                &.router-link-exact-active {
                    color: var(--crimson);
                }
                &.router-link-exact-active:hover {
                    background-color: transparent;
                }
            }
        }
    }
}
</style>
