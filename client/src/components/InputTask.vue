<script setup lang="ts">
// defineProps<{ msg: string }>()
</script>

<template>
  <div class="input-group mb-5 mt-3">
    <form method="post" action="" class="w-100">
      <label for="task" class="fw-bold fs-4">Todo</label>
      <div class="row">
        <div class="col-10">
          <input
            type="text"
            name="task"
            class="form-control w-100"
            placeholder="Your task"
            aria-describedby="basic-addon1"
          />
        </div>
        <!-- /.col-10 -->
        <div class="col-2">
          <button type="button" class="btn btn-primary w-100">追加</button>
        </div>
        <!-- /.col-2 -->
      </div>
      <!-- /.row -->
    </form>
  </div>
</template>

<style scoped></style>
