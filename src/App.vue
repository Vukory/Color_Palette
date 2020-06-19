<template>
  <div id="app">
    <Title message="Color Palette" />
    <div id="container">
      <Color
        class="item"
        v-for="color in colors"
        v-bind:key="color.name"
        :name="color.name"
        :red="color.red"
        :green="color.green"
        :blue="color.blue"
        :alpha="color.alpha"
      />
    </div>
  </div>
</template>

<script>
import Color from "./components/Color";
import Title from "./components/Title";

export default {
  name: "Color Palette",
  components: { Title, Color },
  data() {
    return {
      colors: null
    };
  },
  beforeMount() {
    // Teacher has invalid JSON so we're hosting the correct versions outselves.
    const requestUrl =
      "https://gist.githubusercontent.com/Vukory/b1f25d6362f99b2cbb834386255dff30/raw/66bfdd1407376becff71ea7b831db6f0beb42c08/colors.json";

    fetch(requestUrl)
      .then(response => response.json())
      .then(response => {
        const colors = [];

        for (let prop in response) {
          if (!Object.prototype.hasOwnProperty.call(response, prop)) continue;

          const jsonItem = response[prop];

          const color = {
            name: prop,
            red: jsonItem[0],
            green: jsonItem[1],
            blue: jsonItem[2],
            alpha: jsonItem[3]
          };

          colors.push(color);
        }

        return colors;
      })
      .then(colors => (this.colors = colors));
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>