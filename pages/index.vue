<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { 
  Package, Users, FileText, DollarSign, 
  TrendingUp, TrendingDown 
} from 'lucide-vue-next'
import { useDashboardStore } from '@/stores/dashboard'

const store = useDashboardStore()

// جلب البيانات عند التحميل
onMounted(() => {
  store.fetchStats()
})

// الداتا الخاصة بالكروت مع إضافة الـ Trend والرسومات
const statsCards = computed(() => [
  { 
    title: 'Total Products', 
    value: store.totalProducts, 
    icon: Package, 
    trend: '+12.5%',
    isUp: true,
    color: 'text-indigo-600', 
    bg: 'bg-indigo-50',
    waveColor: '#6366f1'
  },
  { 
    title: 'Total Users', 
    value: store.totalUsers, 
    icon: Users, 
    trend: '+8.2%',
    isUp: true,
    color: 'text-emerald-600', 
    bg: 'bg-emerald-50',
    waveColor: '#10b981'
  },
  { 
    title: 'Total Posts', 
    value: store.totalPosts, 
    icon: FileText, 
    trend: '-2.1%',
    isUp: false,
    color: 'text-orange-600', 
    bg: 'bg-orange-50',
    waveColor: '#f59e0b'
  },
  { 
    title: 'Total Sales', 
    value: '$45,231', 
    icon: DollarSign, 
    trend: '+15.3%',
    isUp: true,
    color: 'text-purple-600', 
    bg: 'bg-purple-50',
    waveColor: '#a855f7'
  },
])
</script>

<template>
  <div class="space-y-10 p-8 bg-[#f8fafc] min-h-screen font-sans">
    
    <!-- Header Section -->
    <div class="flex justify-between items-end">
      <div>
        <h1 class="text-3xl font-[900] tracking-tight text-[#1e293b]">Dashboard Overview</h1>
        <p class="text-slate-400 mt-1 font-medium">Welcome back, here's what's happening today.</p>
      </div>
     
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card v-for="stat in statsCards" :key="stat.title" 
        class="p-6 rounded-[2.5rem] border-none shadow-[0_10px_40px_rgba(0,0,0,0.03)] bg-white overflow-hidden relative group hover:shadow-[0_15px_50px_rgba(0,0,0,0.06)] transition-all duration-300">
        
        <div class="flex justify-between items-start mb-8">
          <div :class="['p-4 rounded-2xl transition-transform group-hover:scale-110 duration-300', stat.bg]">
            <component :is="stat.icon" :class="['w-6 h-6', stat.color]" />
          </div>
          <div :class="['flex items-center gap-1 font-bold text-xs px-2 py-1 rounded-full', stat.isUp ? 'text-emerald-500 bg-emerald-50' : 'text-rose-500 bg-rose-50']">
            {{ stat.trend }}
            <TrendingUp v-if="stat.isUp" size="14" stroke-width="3" />
            <TrendingDown v-else size="14" stroke-width="3" />
          </div>
        </div>

        <div class="space-y-1 relative z-10">
          <p class="text-slate-400 text-[11px] font-[800] uppercase tracking-[0.15em]">
            {{ stat.title }}
          </p>
          <h3 class="text-[1.8rem] font-[900] text-[#1e293b] leading-tight">
            <span v-if="store.loading" class="animate-pulse">...</span>
            <span v-else>{{ stat.value }}</span>
          </h3>
        </div>

        <div class="mt-6 h-12 w-full opacity-60 group-hover:opacity-100 transition-opacity">
          <svg viewBox="0 0 100 30" preserveAspectRatio="none" class="w-full h-full">
            <path
              d="M0 25C10 25 15 15 25 15C35 15 40 25 50 25C60 25 65 5 75 5C85 5 90 20 100 20"
              fill="none"
              :stroke="stat.waveColor"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </Card>
    </div>

   <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- الشارت بياخد عمودين -->


      <div class="lg:col-span-2 ">
        <DashboardRevenueChart />
      </div>
      
      <!-- الفئات بتاخد عمود واحد -->
      <div class="lg:col-span-1 ">
        <DashboardSalesByCategory />
      </div>
    </div>

    <!-- 3. Recent Products Table -->
    <div class="grid grid-cols-1">
       <!-- الجدول هنا -->
    </div>

  </div>
</template>