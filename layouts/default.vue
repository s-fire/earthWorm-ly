<!--
 * @Author: 龚燎原 274473435@qq.com
 * @Date: 2024-02-01 15:09:21
 * @LastEditors: 龚燎原
 * @LastEditTime: 2024-02-01 15:09:44
-->
<template>
    <div class="w-full h-full bg-white dark:bg-slate-900 transition-colors dark:text-slate-300 text-slate-600">
      <div class="flex flex-col h-fit min-h-screen xl:w-[1200px] m-auto xl:px-2 px-24">
        <div class="flex-1 flex">
          <slot></slot>
        </div>
      </div>
    </div>
  </template>