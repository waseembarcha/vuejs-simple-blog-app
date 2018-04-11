<template>
  <div class="single-blog">
  	<h2> Single Blog Post </h2>
  	<div class="blog-content">
		<h3>{{blog.title}}</h3>
		<p>{{blog.description}}</p>	
  	</div>
  </div>
</template>

<script>


export default {
  name: 'SingleBlog',
  data (){
    return {
    	id: this.$route.params.id,
    	blog:{}
    }
  },
  created() {
  	this.$http.get('https://vuejs-blog-app-9ebdf.firebaseio.com/posts/' + this.id +'.json').then((response)=>{
  		this.blog = response.data;
  	});
  },
}
</script>

<style scoped>
  .single-blog{
  	max-width: 800px;
    margin:20px auto;
    padding: 20px;
  }
  .blog-content{
    background: #f5f6f7;
    margin:20px auto;
    padding: 20px;
  }
</style>
