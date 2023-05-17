import { defineStore } from 'pinia'
import {ref} from 'vue'

export const useIndexStore = defineStore('index', () => {
  const dataApi = ref<any>([])



  return {
    dataApi
  }
})
