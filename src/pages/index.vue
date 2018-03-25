<template>
    <div id="index">
        <navbar-top></navbar-top>
        <v-header></v-header>
        <v-main></v-main>
        <v-floors></v-floors>
    </div>
</template>

<script>
import NavbarTop from '../parts/NavbarTop.vue';
import VHeader from '../parts/VHeader.vue';
import VMain from '../parts/VMain.vue';
import VFloors from '../parts/VFloors.vue';

export default {
    components: { NavbarTop, VHeader, VMain, VFloors }
}
</script>

<style>
    .container {
        width: 990px;
    }
</style>
