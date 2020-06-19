<template>
  <div v-highlight id="color-container">
    <span :style="`color: rgba(${red}, ${green}, ${blue}, ${alpha})`">
      <Splatter class="splatter" />
    </span>
    <span>{{ name | capitalize | paintbrush }}</span>
    <span>{{ red | tohex | hex }}{{ green | tohex }}{{ blue | tohex }}{{ alpha | tohex }}</span>
  </div>
</template>

<script>
import Splatter from "../assets/splatter.svg";
export default {
  name: "Color",
  components: { Splatter },
  props: {
    name: String,
    red: Number,
    green: Number,
    blue: Number,
    alpha: Number
  }
};
</script>

<style scoped>
#color-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.splatter {
  width: 10em;
}
</style>