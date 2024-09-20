<template>
  <div
    class="h-screen w-screen dark:bg-fundoEscuro bg-laranjaClaro flex flex-col items-center font-orbitron justify-center"
  >
    <!-- button to change theme -->
    <div
      class="flex items-center w-auto space-x-16 text-azulEsverdeado dark:text-azulEscuro font-bold"
    >
      <p>Tema :</p>
      <div class="flex items-center space-x-4" @click="changeTheme()">
        <span class="material-symbols-outlined text-3xl"> dark_mode </span>
        <span
          class="material-symbols-outlined text-5xl select-none cursor-pointer hover:text-azulEsverdeadoEscuro dark:hover:text-verdeClaro"
          v-if="dark"
        >
          toggle_off
        </span>
        <span
          class="material-symbols-outlined text-5xl cursor-pointer hover:text-azulEsverdeadoEscuro select-none dark:hover:text-verdeClaro"
          v-else
        >
          toggle_on
        </span>
        <span class="material-symbols-outlined text-3xl"> light_mode </span>
      </div>
    </div>
    <!-- __________End_________ -->
    <!-- calculator screen -->
    <div
      class="container w-full h-24 max-h-24 rounded-md bg-beje dark:bg-azulMarinho text-xl font-bold text-fundoEscuro flex items-end justify-end p-1 break-words"
    >
      <p class="max-w-full" v-if="showOnScreen">{{ showOnScreen }}</p>
      <p class="max-w-full" v-else>{{ result }}</p>
    </div>
    <!-- __________End_________ -->
  </div>
</template>
