<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button @click="notify">通知</button>
    <button @click="emit">主进程-渲染进程 通信</button>
    <button @click="init">初始化ws</button>
    <button @click="send">发送</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ipcRenderer } from 'electron'

export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    let ws: WebSocket

    function init() {
      ws = new WebSocket('ws://localhost:9999')
      ws.onmessage = function (event) {
        // const data = JSON.parse(event.data)
        console.log(event)
        // rss.textContent = data.rss
        // heapTotal.textContent = data.heapTotal
        // heapUsed.textContent = data.heapUsed
        // external.textContent = data.external
      }
    }

    function notify() {
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
    }
    function send() {
      ws.send(JSON.stringify({ hello: 'world' }))
    }
    function emit() {
      ipcRenderer.send('asynchronous-message', 'ping')

      ipcRenderer.on('asynchronous-reply', (event, arg) => {
        console.log(arg) // prints "pong"
      })
    }

    return {
      notify,
      send,
      emit,
      init,
    }
  },
})
</script>
