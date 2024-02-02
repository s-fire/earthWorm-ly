/*
 * @Author: 龚燎原 274473435@qq.com
 * @Date: 2024-02-02 14:29:32
 * @LastEditors: 龚燎原
 * @LastEditTime: 2024-02-02 17:08:48
 */
import { defineStore } from "pinia";

interface Statement {
  id: number;
  chinese: string;
  english: string;
  soundmark: string;
}

export interface Course {
  id: number;
  title: string;
  statements: Statement[];
}
export const useCourseStore = defineStore("course", () => {
  const currentCourse = ref<Course>({
    id: 1,
    title: "第一课",
    statements: [
      { id: 22700, chinese: "我", english: "I", soundmark: "/aɪ/" },
      { id: 22706, chinese: "喜欢", english: "like", soundmark: "/laɪk/" },
      {
        id: 22708,
        chinese: "我喜欢",
        english: "I like",
        soundmark: "/aɪ/ /laɪk/",
      },
    ],
  });
  const statementIndex = ref(2);
  const currentStatement = ref<Statement>();
  watchEffect(() => {
    currentStatement.value =
      currentCourse.value.statements[statementIndex.value];
  });
  const wordCount = computed(() => {
    return currentStatement.value?.english.split(" ").length || 1;
  });
  function checkCorrect(input: string) {
    return (
      input.toLocaleLowerCase() ===
      currentStatement.value?.english.toLocaleLowerCase()
    );
  }
  return {
    currentCourse,
    currentStatement,
    wordCount,
    checkCorrect
  };
});
