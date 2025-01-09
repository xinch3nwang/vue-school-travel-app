<script setup>
import { RouterLink, useLink } from 'vue-router';
import { computed } from 'vue';

// 定义 props
const props = defineProps({
  ...RouterLink.props, // 继承 RouterLink 的所有 props
});

// 判断是否是外部链接
const isExternal = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http');
});
</script>

<template>
  <a 
    v-if="isExternal" 
    target="_blank"
    rel="noopener"
    class="external-link"
    :href="to"><slot/></a>
  <router-link v-else v-bind="$props" class="internal-link"><slot/></router-link>
</template>