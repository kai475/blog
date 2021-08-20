export default [
  {
    path: '/',
    redirect: '/blog',
  },
  {
    path: '/blog',
    component: () => import('@/components/HelloWorld.vue'),
  },
];
