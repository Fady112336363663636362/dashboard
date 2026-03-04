<script setup lang="ts">
import { TrendingUp } from 'lucide-vue-next'

defineProps<{
  title: string
  value: string
  trend: string
  icon: any
  iconBgClass: string
  iconColorClass: string
}>()
</script>

<template>
  <Card class="p-6 rounded-[2.5rem] border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white">
    <!-- Top Row: Icon and Percentage -->
    <div class="flex justify-between items-start mb-8">
      <div :class="['p-4 rounded-[1.2rem]', iconBgClass]">
        <component :is="icon" :class="['w-6 h-6', iconColorClass]" />
      </div>
      <div class="flex items-center gap-1 text-[#4ade80] font-bold text-sm">
        {{ trend }}
        <TrendingUp size="16" stroke-width="3" />
      </div>
    </div>

    <!-- Middle Content: Label and Value -->
    <div class="space-y-1">
      <p class="text-[#94a3b8] text-[11px] font-bold uppercase tracking-[0.15em]">
        {{ title }}
      </p>
      <h3 class="text-[1.8rem] font-[900] text-[#1e293b] leading-none">
        {{ value }}
      </h3>
    </div>

    <!-- Bottom Content: Sparkline (The Wave) -->
    <div class="mt-6 h-12 w-full">
      <svg viewBox="0 0 100 30" preserveAspectRatio="none" class="w-full h-full">
        <path
          d="M0 25C10 25 15 15 25 15C35 15 40 25 50 25C60 25 65 5 75 5C85 5 90 20 100 20"
          fill="none"
          stroke="#a7f3d0"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </Card>
</template>