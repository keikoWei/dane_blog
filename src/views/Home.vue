<template>
  <q-page class="q-pa-xl">
    <!-- 個人簡介區塊 -->
    <div class="row q-col-gutter-xl items-center">
      <!-- 大頭貼 -->
      <div class="col-12 col-md-4">
        <div class="profile-image q-mb-lg">
          <q-img
            src="/image/dane01.jpg"
            :ratio="1"
            class="rounded-borders"
          />
        </div>
      </div>

      <!-- 個人簡介 -->
      <div class="col-12 col-md-8">
        <div class="text-h3 text-weight-bold q-mb-lg">Hello, I'm Dane</div>
        <div class="text-body1 text-grey-8" style="font-size: 1.2rem; line-height: 1.8;">
          我叫王盛威 (Dane)，畢業於逢甲大學工業工程系，目前是自由工作者。
        </div>
      </div>
    </div>

    <!-- 技能樹區塊 -->
    <div class="skill-tree q-mt-xl">
      <div class="text-h4 text-center q-mb-xl">Skill Tree</div>
      
      <div class="row q-col-gutter-xl">
        <!-- 前端技能 -->
        <div class="col-12 col-md-6 col-lg-3">
          <q-card class="skill-card">
            <q-card-section>
              <div class="text-h6 text-primary q-mb-md">
                <q-icon name="code" class="q-mr-sm" />
                Frontend
              </div>
              <div class="skill-list">
                <q-chip color="primary" text-color="white" icon="fab fa-vuejs">Vue.js</q-chip>
                <q-chip color="primary" text-color="white" icon="fab fa-html5">HTML</q-chip>
                <q-chip color="primary" text-color="white" icon="fab fa-css3-alt">CSS</q-chip>
                <q-chip color="primary" text-color="white" icon="fab fa-js">JavaScript</q-chip>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- 後端技能 -->
        <div class="col-12 col-md-6 col-lg-3">
          <q-card class="skill-card">
            <q-card-section>
              <div class="text-h6 text-secondary q-mb-md">
                <q-icon name="storage" class="q-mr-sm" />
                Backend
              </div>
              <div class="skill-list">
                <q-chip color="secondary" text-color="white" icon="fab fa-java">Java</q-chip>
                <q-chip color="secondary" text-color="white" icon="fas fa-leaf">Spring Boot</q-chip>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- 資料庫 -->
        <div class="col-12 col-md-6 col-lg-3">
          <q-card class="skill-card">
            <q-card-section>
              <div class="text-h6 text-accent q-mb-md">
                <q-icon name="fas fa-database" class="q-mr-sm" />
                SQL
              </div>
              <div class="skill-list">
                <q-chip color="accent" text-color="white" icon="fas fa-database">MySQL</q-chip>
                <q-chip color="accent" text-color="white" icon="fas fa-database">MongoDB</q-chip>
              </div>
            </q-card-section>
          </q-card>
        </div>

        <!-- 開發工具與部署 -->
        <div class="col-12 col-md-6 col-lg-3">
          <q-card class="skill-card">
            <q-card-section>
              <div class="text-h6 text-positive q-mb-md">
                <q-icon name="build" class="q-mr-sm" />
                Dev tools & deployment
              </div>
              <div class="skill-list">
                <q-chip color="positive" text-color="white" icon="fab fa-git-alt">Git</q-chip>
                <q-chip color="positive" text-color="white" icon="fas fa-paper-plane">Postman</q-chip>
                <q-chip color="positive" text-color="white" icon="fas fa-server">Nginx</q-chip>
                <q-chip color="positive" text-color="white" icon="fas fa-server">Apache</q-chip>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <!-- 最新文章區塊 -->
    <div class="latest-posts q-mt-xl">
      <div class="text-h4 text-center q-mb-lg">Latest Posts</div>
      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-4" v-for="i in 3" :key="i">
          <q-card flat bordered class="blog-card">
            <q-img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1472&q=80"
              :ratio="16/9"
            />
            <q-card-section>
              <div class="text-overline">LIFESTYLE</div>
              <div class="text-h6">A Day in My Life as a Developer</div>
              <div class="text-subtitle2 q-mt-sm">March 31, 2024</div>
              <div class="text-body2 q-mt-md">
                Exploring the daily routines, challenges, and joys of being a modern developer...
              </div>
            </q-card-section>
            <q-card-actions>
              <q-btn flat color="primary" label="Read More" />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.profile-image {
  transition: all 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
}

.profile-image:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
}

.skill-card {
  height: 100%;
  transition: all 0.3s ease;
  border-radius: 12px;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.blog-card {
  transition: all 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
}

.q-card {
  background: white;
}

.text-h3 {
  font-family: 'Playfair Display', serif;
  line-height: 1.2;
}

.q-chip {
  font-weight: 500;
}
</style> 