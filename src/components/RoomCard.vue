<template>
  <v-card class="text-xs-center">
    <v-card-title >
      <div>
        <h3 class="headline mb-0">{{ room.name }}</h3>
        <div> Players joined: {{ room.players.length }} </div>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn flat color="green">Join</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['room']
}
</script>