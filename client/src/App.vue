<script setup lang="ts">
import TaskList from "./components/TaskList.vue"
import InputTask from "./components/InputTask.vue"
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
    <div class="container-fluid">
      <a class="navbar-brand text-light fw-bold" href="#">Todo App</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  <div class="container">
    <!-- タスク入力 -->
    <InputTask />
    <!-- タスクリスト -->
    <TaskList />
  </div>
</template>

<style scoped></style>
