<script setup lang="ts">
import axios from "axios"
import { ref } from "vue"

// import TaskList from "./components/TaskList.vue"
// import InputTask from "./components/InputTask.vue"

axios.defaults.baseURL = "http://localhost:3000"
axios.defaults.headers.post["Content-Type"] = "application/json"

const todos = ref<Todo[]>([])
const title = ref("")
const description = ref("")
const isUpdate = ref(false)
const updateId = ref(0)

interface Todo {
  id: number
  title: string
  description: string
}
// 全タスク取得
const getTasks = async () => {
  const data = await axios.get("/getAll")
  return (todos.value = data.data.todos)
}
getTasks()

// Todo追加
const addTodo = async () => {
  try {
    await axios.post("/create", {
      title: title.value,
      description: description.value,
    })
    getTasks()
    title.value = ""
    description.value = ""
  } catch (err) {
    console.error(err)
  }
}

// Todo削除
const removeTodo = async (id: number) => {
  try {
    await axios.post("/delete", {
      id: id,
    })
    getTasks()
  } catch (err) {
    console.error(err)
  }
}

// Todo更新
const prevUpdate = async (
  id: number,
  newTitle: string,
  newDescription: string
) => {
  isUpdate.value = true
  title.value = newTitle
  description.value = newDescription
  updateId.value = id
}

const saveUpdate = async () => {
  try {
    await axios.post("/update", {
      id: updateId.value,
      title: title.value,
      description: description.value,
    })
    getTasks()
    title.value = ""
    description.value = ""
    updateId.value = 0
    isUpdate.value = false
  } catch (err) {
    console.error(err)
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
    <div class="container-fluid">
      <a class="navbar-brand text-light fw-bold" href="#">Todo App</a>
    </div>
  </nav>
  <div class="container">
    <!-- タスク入力 -->
    <div class="input-group mb-5 mt-3">
      <form method="post" action="" class="w-100">
        <label for="task" class="fw-bold fs-3">Todo</label>
        <div class="row mb-3">
          <div class="col-12">
            <label for="title" class="">タイトル</label>
            <input
              v-model="title"
              id="title"
              type="text"
              name="task"
              class="form-control w-100"
              placeholder="Your task"
              aria-describedby="basic-addon1"
            />
          </div>
          <!-- /.col-10 -->
        </div>
        <div class="row mb-3">
          <div class="col-12">
            <label for="description" class="">備考欄</label>
            <textarea
              v-model="description"
              type="text"
              name="task"
              class="form-control w-100"
              placeholder="Your task description"
              aria-describedby="basic-addon1"
              rows="6"
            ></textarea>
          </div>
          <!-- /.col-10 -->
        </div>
        <!-- /.row -->
        <div class="row">
          <div v-if="!isUpdate" class="col-sm-2 col-4">
            <button @click.prevent="addTodo" class="btn btn-primary w-100">
              追加
            </button>
          </div>

          <div v-if="isUpdate" class="col-sm-5 d-flex gap-2">
            <button @click.prevent="saveUpdate" class="btn btn-success w-100">
              更新
            </button>
            <button
              @click.prevent="
                () => {
                  title = ''
                  description = ''
                  isUpdate = false
                }
              "
              class="btn btn-primary w-100"
            >
              キャンセル
            </button>
          </div>
        </div>
        <!-- /.row -->
      </form>
    </div>
    <!-- タスクリスト -->
    <h2 class="fs-5 fw-bold">Task list</h2>
    <ol class="list-group list-group-numbered">
      <li
        v-for="(task, i) in todos"
        :key="i"
        class="list-group-item d-flex justify-content-between align-items-start"
      >
        <div class="ms-2 me-auto">
          <div class="fw-bold">{{ task.title }}</div>
          {{ task.description }}
        </div>
        <button
          @click.prevent="prevUpdate(task.id, task.title, task.description)"
          class="btn btn-success mx-2"
        >
          更新
        </button>
        <button @click.prevent="removeTodo(task.id)" class="btn btn-secondary">
          削除
        </button>
      </li>
    </ol>
  </div>
</template>

<style scoped></style>
