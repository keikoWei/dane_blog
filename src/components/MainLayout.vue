<template>
  <q-layout view="hHh lpR fFf">
    <!-- 頂部工具欄 -->
    <q-header class="bg-white text-dark q-py-sm">
      <q-toolbar>
        <q-toolbar-title class="text-center">
          <div class="text-h4 text-weight-bold">Dane's Blog</div>
        </q-toolbar-title>
      </q-toolbar>

      <!-- 導航菜單 -->
      <q-tabs
        v-model="tab"
        class="text-dark flex justify-center"
        indicator-color="primary"
        align="center"
      >
        <q-route-tab name="home" to="/" label="Home" />
        <q-route-tab name="experience" to="/experience" label="Experience" />
        <q-route-tab name="kitty" to="/kitty" label="Kitty" />
        <q-route-tab name="about" to="/about" label="About" />
        <!-- <q-route-tab name="contact" to="/contact" label="Contact" /> -->
      </q-tabs>

      <!-- 社交媒體圖標 -->
      <div class="social-icons absolute-top-right q-pa-sm">
        <div class="row q-mb-sm">
          <q-btn flat round color="dark" 
                 icon="fab fa-facebook" 
                 class="q-mx-xs" 
                 href="https://www.facebook.com/profile.php?id=100002562842049" 
                 target="_blank" />
          <q-btn flat round color="dark" 
                 icon="fab fa-instagram" 
                 class="q-mx-xs" 
                 href="https://www.instagram.com/shengwei.w/" 
                 target="_blank" />
          <q-btn flat round color="dark" 
                 icon="fab fa-github" 
                 class="q-mx-xs" 
                 href="https://github.com/keikoWei" 
                 target="_blank" />
        </div>
        <div class="row justify-end">
          <q-btn flat round color="dark"
                 icon="far fa-envelope"
                 class="q-mr-xs"
                 href="mailto:aprowei0908@gmail.com"
                 target="_blank">
            <q-tooltip>聯絡信箱 mail : aprowei0908@gmail.com</q-tooltip>
          </q-btn>
        </div>
      </div>
    </q-header>

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>

    <!-- 底部頁腳 -->
    <q-footer class="bg-white text-dark q-py-md">
      <div class="text-center">
        <div class="text-subtitle1">©2025 Dane's Blog. | All Rights Reserved.</div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'MainLayout',
  setup () {
    const tab = ref('home')
    return {
      tab
    }
  }
}
</script>

<style scoped>
.q-toolbar {
  min-height: 80px;
}

.q-header {
  border-bottom: 1px solid #e0e0e0;
}

.q-footer {
  border-top: 1px solid #e0e0e0;
}

.social-icons {
  right: 20px;
  top: 10px;
  display: flex;
  flex-direction: column;
}

.q-tabs {
  margin-top: -20px;
}

.q-tab {
  font-size: 1.1em;
  font-weight: 500;
}
</style> 