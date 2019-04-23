import Vue from 'vue'
import Vuex from 'vuex'
import db from './api/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: [],
    joined: false
  },
  mutations: {
    addRoom(state, payload) {
      state.rooms.unshift(payload)
    },
    setRooms(state, payload) {
      state.rooms = payload
    },
    setJoinedRoom(state, payload) {
      state.joinedRoom = payload
    },
    setJoinedStatus(state) {
      state.joined != state.joined
    }
  },
  actions: {
    getAllRooms(context, rooms) {
      context.commit("setRooms", rooms)
    },
    createARoom(context, objRoom) {
      context.commit("addRoom", objRoom)
    },
    joinARoom(context, objRoom) {
      context.commit("setJoinedRoom", objRoom)
    },
    setJoinedStatus(context, objRoom) {
      context.commit("setJoinedStatus")
    }

    // getAllRooms (context) {
    //   db.collection('rooms')
    //     .orderBy('createdAt', 'asc')
    //     .onSnapshot(function (querySnapshot) {
    //       let rooms = []
    //       querySnapshot.forEach(function (doc) {
    //         rooms.push({...doc.data(), id: doc.id})
    //       })

        //       context.commit('setRooms', rooms)
        //     })
        // },

    // createARoom (context, roomName) {
    //   db.collection("rooms").add({
    //       name: roomName,
    //       players: [],
    //       createdAt: new Date
    //   })
    //   .then(function(docRef) {
    //     context.dispatch("getAllRooms")
    //   })
    //   .catch(function(error) {
    //       console.error("Error adding document: ", error);
    //   });
    // },

    // joinARoom(context, which) {
    //   db.collection("rooms").doc(`${which.roomId}`)
    //   .set(updatedTask)
    //   .then(function () {
    //     Swal.fire({
    //       position: 'top-end',
    //       type: 'success',
    //       showConfirmButton: false,
    //       timer: 1000
    //     })
    //     context.dispatch('getAllTasks')
    //   })
    //   .catch(function (error) {
    //     console.error('Error updating document: ', error)
    //   })
    // }
  }
})
