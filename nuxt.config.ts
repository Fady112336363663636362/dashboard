import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false ,
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
    app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        dir: 'ltr' // Left-to-Right
      }
    }
  },
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