<template>
  <v-card class="text-xs-center">
    <v-card-title >
      <div>
        <h3 class="headline mb-0">{{ room.name }}</h3>
        <div> Players joined: {{ room.players.length }} / 5 </div>
      </div>
    </v-card-title>

    <v-card-actions>
<!--       <v-btn v-if="$store.state.joined && $store.state.joinedRoom.id == room.id" dark color="green" @click="exitFromARoom">
        Joined
      </v-btn> -->
      <JoinRoomDialog
        :room="room"
        @joined="joined"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
import JoinRoomDialog from './JoinRoomDialog'

export default {
  props: ['room'],
  data() {
    return {
      alreadyInTheRoom: false
    }
  },
  components: {
    JoinRoomDialog
  },
  methods: {
    exitFromARoom() {
      let which = {
        roomId: this.room.id,
        playerId: localStorage.getItem("id")
      }
      this.$socket.emit("exitFromARoom", which)
      localStorage.clear()
      this.alreadyInTheRoom = !this.alreadyInTheRoom
    },
    joined() {
      this.$store.state.joined = !this.$store.state.joined
      this.alreadyInTheRoom = !this.alreadyInTheRoom
    }
  }
}
</script>