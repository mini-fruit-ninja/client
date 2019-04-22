<template>
    <v-dialog v-model="dialog" persistent max-width="300px">
      <template v-slot:activator="{ on }">
        <v-btn flat v-on="on">
          <v-icon>meeting_room</v-icon>
          <span>Add room</span>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Create new room</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field v-model="roomNameInput" label="Room name" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = !dialog">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="createAroom()">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      roomNameInput: ""
    }),

    methods: {
      createAroom() {
        this.$store.dispatch("createARoom", this.roomNameInput)
        this.dialog = !this.dialog
      }
    }
  }
</script>