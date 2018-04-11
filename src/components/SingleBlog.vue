<template>
  <div class="single-blog">
  	<h2> Single Blog Post </h2>
  	<div class="blog-content">
		<h3>{{blog.title}}</h3>
		<p>{{blog.body}}</p>	
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
  	this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.$route.params.id).then((data)=>{
  		this.blog = data.data;
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
