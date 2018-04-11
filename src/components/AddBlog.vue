<template>
  <div class="add-blog">
  	<h2> Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label>Title:</label>
      <input type="text" v-model.lazy="blog.title" required>
      <label>Description:</label>
      <textarea v-model.lazy="blog.description"></textarea>
      <div class="check-boxes">
        <label>Science</label>
        <input type="checkbox" value="science" v-model="blog.categories">
        <label>Arts</label>
        <input type="checkbox" value="arts" v-model="blog.categories">
        <label>Sports</label>
        <input type="checkbox" value="sports" v-model="blog.categories">
      </div>
      <div class="select-author">
        <label>Author:</label>
        <select v-model="blog.author">
          <option v-for="author in authors"> {{author}}</option>
        </select>
      </div>
      <button type="submit" v-on:click.prevent="post"> Add </button>
    </form>
    <div class="msg" v-if="submitted">
      <h3>Thanks for adding the blog</h3>
      
    </div>
    <div class="blog-preview">
      <h3>Blog Preview</h3>
      <p>Title: {{blog.title}}</p>
      <p>Description :</p>
      <p>{{blog.description}}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="category in blog.categories"> {{category}}</li>
      </ul>
      <p>Author: {{blog.author}}</p>
    </div>
  </div>
</template>

<script>


export default {
  name: 'AddBlog',
  data (){
    return {
      blog:{
        title: "",
        description: "",
        categories: [],
        author: ""
      },
      authors: ['Waseem', 'Ali', 'John', 'Smith'],
      submitted: false
    }
  },
  methods:{
    post: function (){
      this.$http.post('https://vuejs-blog-app-9ebdf.firebaseio.com/posts.json',this.blog).then((data)=>{
        console.log(data);
        this.submitted = true;
      });
    }
  }
}
</script>



<style scoped>
  .add-blog{
    box-sizing: border-box;
    max-width: 600px;
    margin:20px auto;
    padding: 20px 0;
  }
  .add-blog label{
    display: block;
    margin:20px 0 10px;
  }
  .add-blog input[type="text"], .add-blog textarea{
    display: inline-block;
    width: 90%;
    padding: 8px;

  }
  .add-blog button{
    display: inline-block;
    padding: 10px 15px;
    margin-top: 20px;
  }
  .blog-preview{
    background: #f5f6f7;
    margin: 30px auto 10px;
    padding: 15px;
  }
  .blog-preview h3,.blog-preview p{
    text-align: left;
    color: #444;
  }
  .check-boxes input{
    display: inline-block;
    margin-right: 10px;
  }
  .check-boxes label{
    display: inline-block;
  }
  .select-author label{
    display: inline-block;
  }
</style>
