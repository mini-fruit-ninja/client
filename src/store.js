import Vue from 'vue'
import Vuex from 'vuex'
import db from './api/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: [],
    joinedRoom: null,
    joinedRoomId: localStorage.getItem("joinedRoomId"),
    joined: false
  },
  mutations: {
    addRoom(state, objRoom) {
      state.rooms.unshift(objRoom)
    },
    setRooms(state, roomList) {
      state.rooms = roomList
    },
    setJoinedRoom(state, objRoom) {
      state.joinedRoom = objRoom
    }
  },
  actions: {
    getAllRooms(context, roomList) {
      context.commit("setRooms", roomList)
    },
    createARoom(context, objRoom) {
      context.commit("addRoom", objRoom)
    },
    joinARoom(context, objRoom) {
      context.commit("setJoinedRoom", objRoom)
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
    // }
  }
})
