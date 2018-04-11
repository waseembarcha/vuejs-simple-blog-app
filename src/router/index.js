import Vue from 'vue'
import Router from 'vue-router'
import AddBlog from '@/components/AddBlog'
import ViewBlogs from '@/components/ViewBlogs'
import SingleBlog from '@/components/SingleBlog'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'AddBlog',
      component: AddBlog
    },
    {
      path: '/view-blogs',
      name: 'ViewBlogs',
      component: ViewBlogs
    },
    {
      path: '/blog/:id',
      name: 'SingleBlog',
      component: SingleBlog
    }
  ]
})
