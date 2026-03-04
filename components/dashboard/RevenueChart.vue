<script setup lang="ts">
// الداتا مش محتاجة مكتبة، دي مجرد أرقام
const chartOptions = {
  chart: {
    type: 'area',
    toolbar: { show: false },
    fontFamily: 'Inter, sans-serif',
  },
  stroke: { curve: 'smooth', width: 3, colors: ['#6366f1'] },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0,
      stops: [0, 100],
      colorStops: [
        { offset: 0, color: '#6366f1', opacity: 0.4 },
        { offset: 100, color: '#6366f1', opacity: 0 }
      ]
    },
  },
  grid: {
    borderColor: '#f1f5f9',
    strokeDashArray: 4,
    xaxis: { lines: { show: false } },
    yaxis: { lines: { show: true } },
  },
  xaxis: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisBorder: { show: false },
    labels: { style: { colors: '#94a3b8', fontWeight: 600 } }
  },
  yaxis: { show: false },
  dataLabels: { enabled: false },
  tooltip: { theme: 'light' }
}

const chartSeries = [
  { name: 'Revenue', data: [30, 45, 35, 70, 60, 90, 85] }
]
</script>

<template>
  <Card class="p-8 rounded-[2.5rem] border-none shadow-[0_10px_40px_rgba(0,0,0,0.03)] bg-white h-full">
    <div class="flex justify-between items-center mb-10">
      <h3 class="text-xl font-[900] text-[#1e293b]">Revenue Over Time</h3>
      <div class="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
        <span class="text-xs font-bold text-slate-500">Last 30 Days</span>
      </div>
    </div>

    <div class="h-72">
      <!-- بنستخدم المكون مباشرة، ونلفه بـ client-only عشان SSR -->
      <client-only>
        <apexchart
          type="area"
          height="100%"
          :options="chartOptions"
          :series="chartSeries"
        />
      </client-only>
    </div>
  </Card>
</template>