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

    }
  },

  sockets: {
    getAllRooms(rooms) {
      this.$store.dispatch("getAllRooms", rooms)
      // .then(() => {
      //   this.redirectToLobby(this.findJoinedRoom().id)
      // })
    },
  },

  created() {
    this.$socket.emit("getAllRooms")
  },

  methods: {
    redirectToLobby(joinedRoomId) {
      this.$router.push({ name: 'lobby', params: { roomId: joinedRoomId } })
    },

    findJoinedRoom() {
      for (let i = 0; i < this.$store.state.rooms.length; i++) {
        let room = this.$store.state.rooms[i]
        let foundplayer = null
        for (let j = 0; j < room.players.length; j++) {
          let player = room.players[j]

          if (player.id === localStorage.getItem("id")) {
            return {
              id: room.id,
              index: i
            }
          }
        }
      }
    }
  }
}
</script>
