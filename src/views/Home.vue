<template>
  <v-container>
    <v-layout
      text-xs-center
      row
      wrap
    >
      <v-flex lg12 mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Rooms list
        </h1>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex lg3 mx-4 v-for="room in this.$store.state.rooms" :key="room.id">
        <RoomCard
          :room="room"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import RoomCard from '../components/RoomCard'

  export default {
    components: {
      HelloWorld,
      RoomCard
    },

<<<<<<< HEAD
    sockets: {
      getAllRooms(rooms) {
        this.$store.dispatch("getAllRooms", rooms)
      }
    },
=======
    
>>>>>>> b07eb461618fe1e02c15d752a623e5fdc1eca075

    created() {
      this.$socket.emit("getAllRooms")
    },
  }
</script>
