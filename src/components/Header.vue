<template>
	<div>
		<header>
			<ul class="navbar">
				<li>
					<router-link to="/view-blogs" exact>View Blogs</router-link>
				</li>
				<li>
					<router-link to="/" exact>Add Blog</router-link>
				</li>
				<li>
					<router-link to="/home" exact>Home</router-link>
				</li>
				<li>
					<router-link to="/add-blog" exact>About</router-link>
				</li>
			</ul>
		</header>
	</div>
  
</template>

<script>


export default {
  name: 'Header',
  data (){
    return {
      links: ['Home', 'Add Blog', 'View List']
    }
  }
}
</script>



<style scoped>
 header{
 	background-color: #f2f2f2;
 	width: 100%;
 	text-align: center;
 }
 header ul.navbar{
 	position:  relative;
 	margin: 0;
 	padding: 0;
 }
 header ul li{
 	width: 10%;
 	display: inline-block;
 	text-decoration: none;
 	padding: 14px;
 }
 header ul li a{
 	width: 100%;
 	text-decoration: none;
 	color: #343434;
 }
 header ul li a:hover{
 	color: blue;
 }
 .router-link-active{
 	color :#0000cc;
 }
</style>
