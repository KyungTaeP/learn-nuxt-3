<template>
  <NuxtLayout>
    <!-- 쿼리 파라미터가 갱신될 땐 NuxtPage도 랜더링 안됨 -->
    <!-- :page-key="(route) => route.fullPath" 추가하면 사용 가능하긴함 -->
    <!-- 단, 다른 방법으로 사용하는걸 추천 -->
    <!-- [courseSlug].vue 의 definePageMeta 참고 -->
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts"></script>
