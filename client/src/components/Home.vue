<script lang="ts">
import SerieLayout from "./Serie.vue";

export default {
    components: {
        SerieLayout,
    },
};
</script>

<template>
    <div class="content">
        <div class="cardSerie">
            <SerieLayout>
                <template #header>
                    <h2 class="title"></h2>
                    <div class="editBtn"></div>
                </template>
                <template #preview></template>
                <template #footer>
                    <p class="author"></p>
                    <p class="nbOfComics"></p>
                </template>
            </SerieLayout>
        </div>
    </div>
</template>

<style lang="scss">
.content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    .cardSerie {
        width: 22%;
        height: 45%;
        margin: 20px 1%;
    }
}
</style>
