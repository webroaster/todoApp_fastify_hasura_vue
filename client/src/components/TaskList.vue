<script setup lang="ts">
// defineProps<{ msg: string }>()
</script>

<template>
  <h2 class="fs-5 fw-bold">Task list</h2>
  <ol class="list-group list-group-numbered">
    <li
      class="list-group-item d-flex justify-content-between align-items-start gap-2"
    >
      <div class="ms-2 me-auto">
        <div class="fw-bold">タスク１</div>
        descriptiondescriptiondescriptiondescription<br />
        descriptionbdescriptionb
      </div>
      <button type="button" class="btn btn-warning">更新</button>
      <button type="button" class="btn btn-secondary">削除</button>
    </li>
    <li
      class="list-group-item d-flex justify-content-between align-items-start gap-2"
    >
      <div class="ms-2 me-auto">
        <div class="fw-bold">タスク１</div>
        descriptiondescriptiondescriptiondescription<br />
        descriptionbdescriptionb
      </div>
      <button type="button" class="btn btn-warning">更新</button>
      <button type="button" class="btn btn-secondary">削除</button>
    </li>
    <li
      class="list-group-item d-flex justify-content-between align-items-start gap-2"
    >
      <div class="ms-2 me-auto">
        <div class="fw-bold">タスク１</div>
        descriptiondescriptiondescriptiondescription<br />
        descriptionbdescriptionb
      </div>
      <button type="button" class="btn btn-warning">更新</button>
      <button type="button" class="btn btn-secondary">削除</button>
    </li>
  </ol>
</template>

<style scoped></style>
