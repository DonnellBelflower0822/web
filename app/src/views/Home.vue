<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="notify">通知</button>
    <button @click="emit">主进程-渲染进程 通信</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ipcRenderer } from 'electron'

export default defineComponent({
  name: 'Home',
  components: {},
  methods: {
    notify() {
      const NOTIFICATION_TITLE = 'Title'
      const NOTIFICATION_BODY =
        'Notification from the Renderer process. Click to log to console.'
      const CLICK_MESSAGE = 'Notification clicked'

      // h5自带的通知
      const notifyication = new Notification(NOTIFICATION_TITLE, {
        body: NOTIFICATION_BODY,
      })

      notifyication.onclick = () => {
        console.log(CLICK_MESSAGE)
      }
    },
    emit() {
      console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

      ipcRenderer.on('asynchronous-reply', (event, arg) => {
        console.log(arg) // prints "pong"
      })
    },
  },
})
</script>
