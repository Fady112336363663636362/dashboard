<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Nuxt بتركب اسم الفولدر مع اسم الملف أوتوماتيك -->
    <DashboardSidebar />
    
    <div class="flex-1 overflow-y-auto bg-slate-50">
      <slot />
    </div>
  </div>
</template>