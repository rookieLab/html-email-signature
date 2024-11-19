import { defineStore } from 'pinia'
import jsonData from './data.json'

export const useTemplatesStore = defineStore('templates', {
    state: () => ({
        data: jsonData
    }),

    getters: {
        // 添加一些常用的数据获取方法
        getTemplate: (state) => (templateName) => {
            return state.data[templateName]
        },

        getAllTemplates: (state) => {
            return Object.keys(state.data)
        }
    }
})