<template>
  <div>
    <h1>Hello {{ location }}</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class App extends Vue {
  @Prop({ default: "Location" }) location!: string;
}
</script>
