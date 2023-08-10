<!-- TODO: 111 -->
<template>
  <div class="greetings">
    <el-button type="primary">Primary</el-button>
    <el-input-number
      v-model="num"
      :min="0"
      :max="10"
      :precision="0"
      @blur="handleBlur"
      @keydown="handleChange"
    ></el-input-number>

    <el-upload
      class="upload-demo"
      drag
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    >
      <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
      <template #tip>
        <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
      </template>
    </el-upload>
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const num = ref(0)

function handleBlur(event: FocusEvent): void {
  console.log((event.target as HTMLInputElement).value)
}
function handleChange(event: KeyboardEvent): void {
  if (event.code === 'Period') {
    event.preventDefault()
  }
}
defineProps<{
  msg: string
}>()
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
