import Vue from 'vue'
import Vuex from 'vuex'
import db from './api/firestore'

Vue.use(Vuex)

export default new Vuex.Store({
<<<<<<< HEAD
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
=======
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
            console.log(objRoom)
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
>>>>>>> b07eb461618fe1e02c15d752a623e5fdc1eca075

        //       context.commit('setRooms', rooms)
        //     })
        // },

<<<<<<< HEAD
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
=======
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
>>>>>>> b07eb461618fe1e02c15d752a623e5fdc1eca075
