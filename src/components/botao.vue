<template>
    <button class="bg-azulEsverdeado hover:light-btn-background dark:bg-azulEscuro dark:hover:dark-btn-background flex rounded-md shadow  shadow-laranjaClaro text-beje dark:text-fundoEscuro  font-bold dark:shadow-azulMarinho  ease-in-out 50ms items-center justify-center">
        {{ text }}
    </button>
</template>
<script>
export default {
    name:'botaoComponent',
    props:['text'],
}
</script>
<style>


</style>