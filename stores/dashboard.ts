// stores/dashboard.ts
import { defineStore } from 'pinia'
import axios from 'axios'

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    totalProducts: 0,
    totalUsers: 0,
    totalPosts: 0,
    recentProducts: [] as any[],
    loading: false
  }),
  actions: {
    async fetchStats() {
      this.loading = true
      try {
        const [prodRes, userRes, postRes] = await Promise.all([
          axios.get('https://dummyjson.com/products?limit=5'),
          axios.get('https://dummyjson.com/users?limit=1'),
          axios.get('https://dummyjson.com/posts?limit=1')
        ])

        this.totalProducts = prodRes.data.total
        this.totalUsers = userRes.data.total
        this.totalPosts = postRes.data.total
        this.recentProducts = prodRes.data.products 
      } catch (error) {
        console.error("Error fetching stats:", error)
      } finally {
        this.loading = false
      }
    }
  }
})