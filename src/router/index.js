import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddBlog from '@/components/AddBlog'
import ViewBlogs from '@/components/ViewBlogs'

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
    }
  ]
})