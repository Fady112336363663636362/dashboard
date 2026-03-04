<script setup lang="ts">
import { MoreVertical, Info } from 'lucide-vue-next'

const categories = [
  { name: 'Electronics', percentage: 52, color: 'bg-indigo-600' },
  { name: 'Fashion', percentage: 28, color: 'bg-indigo-300' },
  { name: 'Home & Decor', percentage: 15, color: 'bg-indigo-200' },
  { name: 'Others', percentage: 5, color: 'bg-slate-200' },
]
</script>

<template>
  <Card class="p-8 rounded-[2.5rem] border-none shadow-[0_10px_40px_rgba(0,0,0,0.03)] bg-white h-full flex flex-col">
    <!-- Header -->
    <div class="flex  items-center mb-10">
      <h3 class="text-xl font-[900] text-[#1e293b]">Sales by Category</h3>
     
    </div>

    <div class="space-y-8 flex-1">
      <div v-for="item in categories" :key="item.name" class="space-y-3">
        <div class="flex justify-between items-center">
          <span class="text-sm font-bold text-slate-700">{{ item.name }}</span>
          <span class="text-sm font-[900] text-slate-900">{{ item.percentage }}%</span>
        </div>
        <div class="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
          <div 
            :class="['h-full rounded-full transition-all duration-1000', item.color]"
            :style="{ width: item.percentage + '%' }"
          ></div>
        </div>
      </div>
    </div>

    <div class="mt-10 p-4 bg-slate-50 rounded-[1.5rem] flex items-start gap-3 border border-slate-100/50">
      <div class="bg-indigo-100 p-2 rounded-xl text-indigo-600">
        <Info class="w-4 h-4" />
      </div>
      <p class="text-[11px] leading-relaxed text-slate-500 font-medium">
        Electronics sales are up by <span class="text-indigo-600 font-bold">14%</span> compared to last week.
      </p>
    </div>
  </Card>
</template>