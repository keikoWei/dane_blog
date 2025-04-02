<template>
  <q-page class="q-pa-md">
    <div class="text-center q-py-lg">
      <h1 class="text-h4 q-mb-lg">小白的日常</h1>
      
      <div class="description q-mx-auto q-mb-xl" style="max-width: 800px;">
        <p class="text-body1">
          這是我們家小白，女友領養的貓貓，是個愛撒嬌，冬天可以充當暖暖包的小可愛。
        </p>
      </div>
      
      <div class="row q-col-gutter-md justify-center">
        <div class="col-12 col-md-5">
          <q-card class="cat-card">
            <q-img
              src="/image/white01.jpg"
              :ratio="4/3"
              class="rounded-borders"
            />
          </q-card>
        </div>
        <div class="col-12 col-md-5">
          <q-card class="cat-card">
            <q-img
              src="/image/white02.jpg"
              :ratio="4/3"
              class="rounded-borders"
            />
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'KittyPage'
}
</script>

<style scoped>
.cat-card {
  transition: all 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
}

.cat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
}

.description {
  line-height: 1.6;
  font-size: 1.2rem;
}
</style> 