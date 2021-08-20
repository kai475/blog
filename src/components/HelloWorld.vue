<template>
  <header class="header">
    <nav class="header-nav">
      <div v-for="item in menu" :key="item.sha" class="header-nav__item">
        <a rel="noopener noreferrer" @click="handleNext(item.path)">{{
          item.name?.toUpperCase()
        }}</a>
      </div>
    </nav>
  </header>
  <aside class="aside"></aside>
  <main class="main"></main>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { getContent } from '@/apis';

export default defineComponent({
  name: 'HelloWorld',
  props: {},
  setup: () => {
    const menu = ref([]);

    const getMenu = (path: string) =>
      getContent(path).then(async (res) => {
        if (res.status === 200) {
          const data = await res.json();
          if (data instanceof Object && data.type === 'file') {
            window.location.href = `/blog/${data.path.split(/\.[^.]*$/)[0]}`;
          } else {
            menu.value = data;
          }
        }
      });
    getMenu('docs');
    const handleNext = (path: string) => {
      getMenu(path);
    };
    return {
      menu,
      handleNext,
    };
  },
});
</script>

<style lang="sass" scoped>
.header-nav
  @extend .flex-wrapper--col
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
  justify-content: center

  &__item
    margin: 20px
    text-align: center
</style>
