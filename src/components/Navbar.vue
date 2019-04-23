<template>
  <v-toolbar app dark>
    <v-toolbar-title class="headline text-uppercase">
      <span>MINI</span>
      <span class="font-weight-light">FRUIT NINJA</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <AddRoomDialog
        v-if="$route.path !== '/lobby' && $route.path !== '/game'"
      />
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import AddRoomDialog from './AddRoomDialog'

export default {
  components: {
    AddRoomDialog
  }
}
</script>