<script setup lang="ts">
import { Home, Package, ShoppingCart, Users, BarChart3, Settings, Zap } from 'lucide-vue-next';

const menuItems = [
  { name: 'Dashboard', icon: Home, active: true },
  { name: 'Products', icon: Package, active: false },
  { name: 'Orders', icon: ShoppingCart, active: false },
  { name: 'Customers', icon: Users, active: false },
  { name: 'Analytics', icon: BarChart3, active: false },
  { name: 'Settings', icon: Settings, active: false },
];
</script>

<template>
  <aside class="w-64 border-r bg-white h-screen flex flex-col p-4">
    <!-- Logo -->
    <div class="flex items-center gap-2 px-2 mb-8">
      <div class="bg-indigo-600 p-2 rounded-lg text-white">
        <Zap size="20" />
      </div>
      <span class="font-bold text-xl tracking-tight">IndigoSaaS</span>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 space-y-1">
      <button v-for="item in menuItems" :key="item.name"
        :class="[
          'w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors',
          item.active ? 'bg-indigo-50 text-indigo-600' : 'text-slate-500 hover:bg-slate-50'
        ]">
        <component :is="item.icon" size="20" />
        <span class="font-medium">{{ item.name }}</span>
      </button>
    </nav>

    <!-- Upgrade Box -->
    <div class="bg-slate-50 rounded-xl p-4 mt-auto">
      <p class="text-xs text-indigo-600 font-bold uppercase mb-1">Pro Plan</p>
      <p class="text-xs text-slate-500 mb-3">Upgrade for more metrics</p>
      <Button class="w-full bg-indigo-600 hover:bg-indigo-700 h-9">Upgrade Now</Button>
    </div>
  </aside>
</template>