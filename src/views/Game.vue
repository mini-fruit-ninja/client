<template>
    <v-container>
      <v-layout
      row
      wrap
      >
        <v-flex lg10>
          <Canvas />
        </v-flex>
        <v-flex lg2>
          <h3>Scoreboard</h3>
          <v-layout
          column
          >
            <v-flex lg12>

            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import Canvas from '../components/Canvas.vue'
export default {
    components: { Canvas },
    data() {
      return {
        playerScores:[]
      }
    },
    created() {
      this.$socket.emit('updateScore', this.$store.state.rooms)
      console.log(this.$route.params.roomId, "<== roomId");
      this.addPoint()
    },

    socket: {
      updateScore(rooms) {
        this.$store.dispatch("getAllRooms", rooms)
      }
    },

    methods: {
      addPoint() {
        let roomSessionIndex = this.$store.state.rooms.findIndex(room => room.id === this.$route.params.roomId)
        let playerIndex = this.$store.state.rooms[roomSessionIndex].players.findIndex(player => player.id === localStorage.getItem("id"))

        this.$store.state.rooms[roomSessionIndex].players[playerIndex].score++

        this.playerScores = this.$store.state.rooms[roomSessionIndex].players[playerIndex].score
        this.$socket.emit('updateScore', this.$store.state.rooms)
      }
    }
}
</script>

<style>

</style>
