
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/detail/:day',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/Detail.vue')}
    ]
  },
  {
    path: '/profile/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/Profile.vue')}
    ]
  },{
    path: '/settings/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('src/pages/Settings.vue')}
    ]
  }

  // Always leave this as last one,
  // but you can also remove it
]

export default routes
