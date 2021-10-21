<script>
export default {
  data () {
    return {
      name: 'Jesus task',
      tasks: [],
      newTask: {
        title: '',
        time: undefined
      }
    }
  },
  computed: {
    showTask () {
      return this.tasks
    },
    totalTime () {
      if (this.tasks.length === 0) {
        return 0
      }
      let total = 0
      this.tasks.map((t) => total += t.time) // eslint-disable-line
      return total
    }
  },
  created () {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || []
  },
  methods: {
    addTask () {
      if (!this.newTask.title || !this.newTask.time) {
        return
      }
      this.tasks.push({ title: this.newTask.title, time: this.newTask.time })
      this.newTask.title = ''
      this.newTask.time = 0
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    removeTask (i) {
      this.tasks.splice(i, 1)
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    cancel () {
      this.newTask.title = ''
      this.newTask.time = 0
    }
  }
}

</script>

<template lang="pug">
.section
  .container
    h1 {{ name }} - Total tiempo {{ totalTime }}
  .container
    ul(v-if="tasks.length > 0")
      li(v-for="(t,i) in showTask")
        h3 {{ i }}. {{t.title}} | {{t.time}} horas
        button(@click="removeTask(i)") &times;
    h3(v-else) You havent task
  .container
    h2 Create new task
    input(type="text" placeholder="add title a new task" v-model="newTask.title")
    input(type="number" v-model="newTask.time" placeholder="How long will it take in hours")
    button(@click="addTask") Add
    button(@click="cancel") Cancel
</template>

<style lang="scss">
@import './scss/main.scss';

.results {
  margin-top: 50px;
}
</style>
