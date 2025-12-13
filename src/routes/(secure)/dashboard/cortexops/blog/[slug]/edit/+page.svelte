<script>
	import BlogForm from '$lib/components/BlogForm.svelte';
	export let data;
</script>

<h1 class="mb-6 text-3xl text-blue-300">Edit Blog Post</h1>

<BlogForm blog={data.blog} />
