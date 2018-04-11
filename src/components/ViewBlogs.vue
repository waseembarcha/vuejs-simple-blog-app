<template>
  <div v-theme="themeSize" class="blog-list">
  	<h2> Blog Posts </h2>
  	<div class="btns">
  		<button v-on:click="wide">Wide</button>
  		<button v-on:click="narrow">Narrow</button>
  	</div>
  	<div class="search-box">
  		<input v-model="search" type="text" placeholder="search blog" >
  	</div>
    <div v-for="blog in filteredBlogs" class="single-blog">
    	<router-link v-bind:to="'/blog/' + blog.id"> 
        <h3 v-ranbow>{{blog.title}}</h3> 
      </router-link>
    	<p>{{blog.body |snippet}}</p>
    </div>
  </div>
</template>

<script>


export default {
  name: 'ViewBlogs',
  data (){
    return {
    	blogs:[],
    	search:'',
    	themeSize: 'narrow'
    }
  },
  methods:{
    wide() {
    	this.themeSize = 'wide';
    },
    narrow(){
    	this.themeSize = 'narrow';
    }
  },
  computed:{
  	filteredBlogs() {
  		return this.blogs.filter((blog)=>{
  			return blog.title.match(this.search);
  		});
  	}
  },
  created() {
  	this.$http.get('http://jsonplaceholder.typicode.com/posts').then((data)=>{
  		this.blogs = data.data.slice(0,10);
  	});
  },
  filters:{
  	snippet(value) {
  		return value.slice(0,200) + ' ...';
  	}
  },
  directives:{
  	'ranbow': {
  		bind(el,binding,vnode){
			el.style.color = "#" + Math.random().toString().slice(2,8);
		}
  	},
  	theme(el,binding) {
  		if(binding.value == 'wide'){
			el.style.maxWidth = "1200px";
		}
		else if(binding.value == 'narrow'){
			el.style.maxWidth = "600px";
		}
  	}
  }
}
</script>



<style scoped>
  .blog-list{
  	position: relative;
    box-sizing: border-box;
    max-width: 800px;
    margin:20px auto;
    padding: 20px 0;
  }
  .single-blog{
    background: #f5f6f7;
    margin: 30px auto 10px;
    padding: 15px;
  }
  .btns{
  	position: absolute;
  	right: 0;
  	top: 45px;
  }
  .search-box{
  	text-align: center;
  	margin: 10px auto;
  }
  .search-box input{
  	padding: 8px;
  }
</style>
