import { defineStore } from 'pinia'
import * as apis from '@/apis/index'

export const useUserStore = defineStore('user', {
  state: () => ({
    userName: 'Wu',
    userImg: '/public/change_user_img/9f96fe8db60b65c763d0c1a00.jpg'
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
