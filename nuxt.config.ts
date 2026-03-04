import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // إضافة الموديولات الأساسية
  modules: [
    '@nuxtjs/tailwindcss',
    [
      'shadcn-nuxt',
      {
        /**
         * البريفكس اختياري، لو خليته فاضي هتنادي المكونات كده: <Button />
         * لو خليته 'Ui' هتناديهم كده: <UiButton />
         */
        prefix: '',
        /**
         * المكان اللي shadcn هينزل فيه المكونات
         */
        componentDir: './components/ui'
      }
    ],
    '@pinia/nuxt', // هنحتاجه عشان إدارة البيانات (State Management)
  ],

  // لضمان استقرار TypeScript
  typescript: {
    shim: false
  }
})