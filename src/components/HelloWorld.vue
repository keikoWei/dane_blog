<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <q-card class="my-card q-ma-md" style="max-width: 500px; margin: 0 auto;">
      <q-card-section>
        <div class="text-h6">Quasar框架已成功安裝</div>
        <div class="text-subtitle2">這是一個Quasar卡片組件範例</div>
      </q-card-section>

      <q-card-section>
        這個專案現在已經配置了Quasar框架，您可以使用所有Quasar組件來構建您的應用。
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn flat color="primary" label="取消" />
        <q-btn flat color="primary" label="確認" />
      </q-card-actions>
    </q-card>

    <div class="q-pa-md q-gutter-sm">
      <q-btn color="primary" label="主要按鈕" />
      <q-btn color="secondary" label="次要按鈕" />
      <q-btn color="accent" label="強調按鈕" />
      <q-btn color="positive" label="正面按鈕" />
      <q-btn color="negative" label="負面按鈕" />
      <q-btn color="info" label="信息按鈕" />
      <q-btn color="warning" label="警告按鈕" />
    </div>
    
    <h3>更多Quasar資源</h3>
    <ul>
      <li><a href="https://quasar.dev" target="_blank" rel="noopener">Quasar文檔</a></li>
      <li><a href="https://quasar.dev/vue-components" target="_blank" rel="noopener">組件列表</a></li>
      <li><a href="https://forum.quasar.dev" target="_blank" rel="noopener">Quasar論壇</a></li>
      <li><a href="https://chat.quasar.dev" target="_blank" rel="noopener">Quasar社區聊天</a></li>
      <li><a href="https://github.com/quasarframework/quasar" target="_blank" rel="noopener">GitHub倉庫</a></li>
    </ul>

    <h3>Vue.js資源</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">核心文檔</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">論壇</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">社區聊天</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">新聞</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.my-card {
  width: 100%;
  max-width: 500px;
  margin-top: 20px;
  margin-bottom: 30px;
}
</style>
