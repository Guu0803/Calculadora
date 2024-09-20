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
    <!-- calculator screen -->
    <div
      class="container w-full h-24 max-h-24 rounded-md bg-beje dark:bg-azulMarinho text-xl font-bold text-fundoEscuro flex items-end justify-end p-1 break-words"
    >
      <p class="max-w-full" v-if="showOnScreen">{{ showOnScreen }}</p>
      <p class="max-w-full" v-else>{{ result }}</p>
    </div>
    <!-- buttons grid -->
    <div class="grid grid-cols-4 grid-rows-4 gap-3 mt-6 p-2 h-3/5">
      <key text="7" @click="keyPressed('7')" id="7" />
      <key text="8" @click="keyPressed('8')" id="8" />
      <key text="9" @click="keyPressed('9')" id="9" />
      <key text="DEL" @click="keyPressed('Backspace')" id="Backspace" />
      <key text="4" @click="keyPressed('4')" id="4" />
      <key text="5" @click="keyPressed('5')" id="5" />
      <key text="6" @click="keyPressed('6')" id="6" />
      <key text="+" @click="keyPressed('Add')" id="+" />
      <key text="1" @click="keyPressed('1')" id="1" />
      <key text="2" @click="keyPressed('2')" id="2" />
      <key text="3" @click="keyPressed('3')" id="3" />
      <key text="-" @click="keyPressed('Subtract')" id="-" />
      <key text="." @click="keyPressed('Comma')" id="." />
      <key text="0" @click="keyPressed('0')" id="0" />
      <key text="/" @click="keyPressed('Divide')" id="/" />
      <key text="x" @click="keyPressed('Multiply')" id="*" />
    </div>
    <div class="grid grid-cols-2 gap-3 h-[15%] w-full p-2">
      <key text="RESET" @click="clear()" />
      <key text="=" @click="keyPressed('Enter')" id="Enter" />
    </div>
  </div>
</template>
<script>
import key from "./components/button.vue";
export default {
  components: {
    key,
  },
  data() {
    return {
      dark: false,
      mathKeys: [
        "-",
        "+",
        ".",
        "/",
        "*",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
      ],
      equal: "Enter",
      erase: "Backspace",
      showOnScreen: "",
      result: "",
    };
  },
  methods: {
    changeTheme() {
      const theme = document.getElementsByTagName("html");
      if (!this.dark) {
        this.dark = true;
        theme[0].className = "dark";
      } else {
        this.dark = false;
        theme[0].className = "light";
      }
    },
    keyPressed(id) {
      if (!this.mathKeys.includes(id) && id != this.equal && id != this.erase)
        return;
      const btn = document.getElementById(id);
      this.showOnDisplay(id);
      if (this.dark) {
        btn.style.backgroundColor = "#0c7073";
        setTimeout(() => {
          btn.style.backgroundColor = "#294d61";
        }, 100);
      } else {
        btn.style.backgroundColor = "#03384d";
        setTimeout(() => {
          btn.style.backgroundColor = "#104c64";
        }, 100);
      }
    },
    showOnDisplay(key) {
      if (this.showOnScreen.length == 66) return;
      if (this.mathKeys.includes(key)) {
        this.showOnScreen += key;
      } else if (key == this.equal) {
        let result = this.showOnScreen;
        this.calulator(result);
      } else if (key == this.erase && this.showOnScreen.length != 0) {
        this.showOnScreen = this.showOnScreen.slice(0, -1);
      }
    },
    calulator(value) {
      this.showOnScreen = "";
      this.result = eval(value);
    },
    clear() {
      this.showOnScreen = "";
      this.result = "";
    },
  },
  created() {
    window.document.addEventListener("keydown", (e) => {
      let key = e.key;
      if (key == " ") {
        this.clear();
      } else {
        this.keyPressed(key);
      }
    });
  },
};
</script>
