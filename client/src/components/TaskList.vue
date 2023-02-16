<script setup lang="ts">
interface Todo {
  id: number
  title: string
  description: string
}

// defineProps()
// const props = defineProps({
//   todos: Array<Todo>,
// })
</script>

<template>
  <h2 class="fs-5 fw-bold">Task list</h2>
  <ol class="list-group list-group-numbered">
    <ol class="list-group list-group-numbered">
      <!-- <li v-for="(task, i) in todos" :key="i">
        <div class="ms-2 me-auto">
          <div class="fw-bold">{{ task.title }}</div>
          {{ task.description }}
        </div>
        <button type="button" class="btn btn-warning">更新</button>
        <button type="button" class="btn btn-secondary">削除</button>
      </li> -->
    </ol>
  </ol>
</template>

<style scoped></style>
