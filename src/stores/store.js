import { defineStore } from 'pinia'
import getData from '@/utils/google'

export const useStore = defineStore('store', {
  state: () => ({
    webData: [],
    calendarData: [],
    weddingData: []
  }),
  actions: {
    async getWebData(name) {
      try {
        const tab = 'web_data'
        const result = await getData(tab)
        this.webData = result.filter((item)=> item.web_path === name)[0]
      } catch (error) {
        console.error(error)
      }
    },
    async getCalendarData(name) {
      try {
        const tab = 'calendar'
        const result = await getData(tab)
        this.calendarData = result.filter((item)=> item.name === name)[0]
      } catch (error) {
        console.error(error)
      }
    },
    async getWeddingData(name) {
      try {
        const tab = 'wedding_detail'
        const result = await getData(tab)
        this.weddingData = result.filter((item)=> item.name === name)[0]
      } catch (error) {
        console.error(error)
      }
    },
  }
})
