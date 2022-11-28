import { defineStore } from 'pinia'
import * as apis from '@/apis/index'

export const useUserStore = defineStore('user', {
  state: () => ({
    userName: '',
    userImg: ''
  }),
  getters: {
    getUserName: (state) => {
      return state.userName
    },
    getUserImg: (state) => {
      return state.userImg
    }
  },
  actions: {
    setUserInfo() {
      apis
        .getUserInfo()
        .then((res) => {
          if (res.data.status === 'OK') {
            const temp = res.data.data.userData

            this.userName = temp.userName
            this.userImg = temp.userImg
          }
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {})
    }
  }
})
