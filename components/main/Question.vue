<!--
 * @Author: 龚燎原 274473435@qq.com
 * @Date: 2024-02-02 15:07:39
 * @LastEditors: 龚燎原
 * @LastEditTime: 2024-02-02 17:58:57
-->
<template>
  <div class="text-center pt-2">
    <div class="flex relative flex-wrap justify-center ml-2 transition-all">
      <template v-for="i in courseStore.wordCount" :key="i">
        <div
          class="flex items-end justify-center h-[4.2rem] min-w-20 px-4 mr-2 border-solid rounded-[2px] border-b-2 text-[3.2em] transition-all"
          :class="[
            i - 1 === activeInputIndex
              ? 'text-fuchsia-500 border-b-fuchsia-500'
              : 'text-[#20202099] border-b-gray-300 dark:text-gray-300 dark:border-b-gray-400',
          ]"
        >
          {{ userInputWords[i - 1] }}
        </div>
      </template>
      <input
        ref="inputEl"
        class="absolute h-full w-full opacity-0"
        type="text"
        v-model="inputValue"
        @keyup="handleKeyUp"
        autoFocus
      />
    </div>
    <div class="mt-12 text-xl dark:text-gray-50">
      {{
        courseStore.currentStatement?.chinese || "生存还是毁灭，这是一个问题"
      }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCourseStore } from "~/store/course";
const courseStore = useCourseStore();
const inputValue = ref<string>("");
const userInputWords = computed(() => inputValue.value.trimStart().split(" "));
const activeInputIndex = computed(() =>
  Math.min(userInputWords.value.length - 1, courseStore.wordCount - 1)
);
function handleKeyUp(e: KeyboardEvent) {
  if (e.code === "Enter") {
    e.stopPropagation();
    if (courseStore.checkCorrect(inputValue.value.trim())) {
      alert(123);
    }else{
        inputValue.value = ''
    }
  }
}
</script>

<style scoped></style>
