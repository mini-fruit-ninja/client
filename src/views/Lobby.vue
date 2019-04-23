<template>
  <v-container>
    <v-layout
      text-xs-center
      column
      wrap
    >
      <v-flex lg12 mb-4 class="text-xs-center">
        <h1 class="display-2 font-weight-bold mb-3">
          Lobby "{{ $store.state.rooms[findPlayerInARoom()].name }}"
        </h1>
      </v-flex>
      <v-flex lg12>
        <h2>{{ $store.state.rooms[findPlayerInARoom()].players.length }}/5 players joined:</h2>
      </v-flex>
      <v-flex lg5>
        <v-layout
          text-xs-center
          column
        >
          <v-flex v-for="player in $store.state.rooms[findPlayerInARoom()].players" :key="player.id">
            <p>{{ player.name }}</p>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
<!--   <div class="about">
    <h1>This is a Lobby page</h1>
    <h2>Players joined: {{ $store.state.rooms[findPlayerInARoom()].players }}</h2>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
      joinedRoomId: null,
      joinedRoomIndex: null,
      numberOfPlayers: 0
    }
  },
  created() {
    this.findPlayerInARoom()
  },

  methods: {
    findPlayerInARoom() {
      for (let i = 0; i < this.$store.state.rooms.length; i++) {
        let room = this.$store.state.rooms[i]
        let foundplayer = null
        for (let j = 0; j < room.players.length; j++) {
          this.numberOfPlayers = room.players.length

          let player = room.players[j]
          console.log(player);

          if (player.id === localStorage.getItem("id")) {
            this.joinedRoomIndex = i
            this.joinedRoomId = this.$store.state.rooms[i].id
            return i
          }
        }
      }
    }
  },

  watch: {
    numberOfPlayers(val) {
      if (val === 3) {
        this.$router.push({name: 'game', params: {roomId: this.joinedRoomId}})
      }
    }
  }
}
</script>