<template>
  <div>
    <button @click="send">Send</button>
  </div>
</template>

<script>
export default {
  sockets: {
    connect() {
        console.log('socket connected')
    },
    serverName(data) {
        console.log('** serverName event received in component **', data)
    },
  },
  methods: {
    send() {
      this.$socket.emit('userName', {name: 'Tom'})
    },
  },
}
</script>
