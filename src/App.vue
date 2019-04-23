<template>
  <v-app>
    <Navbar/>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {
      //
    }
  },
  sockets: {
      getAllRooms(rooms) {
        this.$store.dispatch("getAllRooms", rooms)
      },
      joinARoom(joinedRoom) {
        this.$store.dispatch("joinARoom", joinedRoom)
      }
    },
  created() {
    this.$socket.emit("getAllRooms")
    if(this.$store.state.rooms.length === 0) {
      localStorage.clear()
    }
    else if (this.$store.state.joinedRoomId !== null ) {
      this.redirectToLobby(this.$store.state.joinedRoomId)
    }
  },
  methods: {
    redirectToLobby(joinedRoomId) {
      this.$router.push({name: 'lobby', params: { roomId: joinedRoomId }})
    }
  },
}
</script>
