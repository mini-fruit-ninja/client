<template>
    <v-dialog v-model="dialog" persistent max-width="300px">
      <template v-slot:activator="{ on }">
        <v-btn 
          flat color="green" v-on="on">
          Join
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Join a room</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-form
                  ref="playerNameForm"
                  v-model="valid"
                  lazy-validation
                >
                  <v-text-field
                    v-model="playerNameInput"
                    :rules="playerNameInputRules"
                    label="Player name"
                    required>
                  </v-text-field>
                </v-form>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = !dialog">cancel</v-btn>
          <v-btn :disabled="!valid" color="blue darken-1" flat @click="validate; joinARoom()">Join</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
  import randomstring from 'randomstring'
import { join } from 'path';

  export default {
    props: ['room'],
    data: () => ({
      valid: true,
      dialog: false,
      playerNameInput: "",
      playerNameInputRules: [
        v => !!v || 'Cannot be empty'
      ],
    }),

    methods: {
      joinARoom() {
        let which = {
          roomId: this.room.id,
          player: {
            id: randomstring.generate(10),
            name: this.playerNameInput,
            score: 0
          }
        }
        this.$socket.emit("joinARoom", which)
        
        localStorage.setItem("id", which.player.id)
        localStorage.setItem("name", which.player.name)
        localStorage.setItem("joinedRoomId", which.roomId)

        this.$emit("joined")

        this.clearForms()
        this.dialog = !this.dialog
        this.$router.push({name: 'lobby', params: { roomId: this.room.id }})
      },
      clearForms() {
        this.playerNameInput = ""
      },
      validate () {
        if (this.$refs.playerNameForm.validate()) {
          this.snackbar = true
        }
      }
    }
  }
</script>