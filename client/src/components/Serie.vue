<script setup lang="ts"></script>

<template>
    <div class="serie">
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="preview">
            <slot name="preview"></slot>
        </div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<!-- <template>
    <div class="serie">
        <div class="header">
            <h2 class="title"></h2>
            <div class="editBtn"></div>
        </div>
        <div class="preview">
            <slot name="preview"></slot>
        </div>
        <div class="footer">
            <p class="author"></p>
            <p class="nbOfComics"></p>
        </div>
    </div>
</template> -->

<style lang="scss">
.serie {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    padding: 5% 3%;
    display: grid;
    grid-template-columns: 5% 90 5%;
    grid-template-rows: 5% 10% 5% 60% 5% 10% 5%;
    background-color: var(--white);
    color: var(--black);
    .header {
        grid-column: 1/2;
        grid-row: 2/3;
        .title {
        }
        .editBtn {
        }
    }
    .preview {
        grid-column: 1/2;
        grid-row: 4/5;
    }
    .footer {
        grid-column: 1/2;
        grid-row: 6/7;
        display: flex;
        justify-content: space-around;
        .author {
        }
        .nbOfComics {
        }
    }
}
</style>
