<template>
    <b-container class="wrapper">
        <b-row>
            <b-col>
    <b-row  align-h="center" align-v="center">
        <div class="loader">
            <div class="min_loader"></div>
        </div>
    </b-row >
    <b-row  align-h="center">Loading...</b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import BContainer from "bootstrap-vue/src/components/layout/container";
    export default {
        name: "Loader",
        components: {BContainer}
    }
</script>

<style scoped>
    .wrapper{
        display: flex;
        align-items: center !important;
        justify-content: center !important;
    }
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid black; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
    display: flex;
    justify-content: center;
    align-items: center;
}

.min_loader {
  border: 6px solid #f3f3f3; /* Light grey */
  border-top: 6px solid green; /* Blue */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spinreverse 1s ease-in-out infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
    @keyframes spinreverse {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-360deg); }
}

</style>