<script lang="ts">
	import BlogForm from '$lib/components/BlogForm.svelte';

	export let data;
	const { blog } = data;
</script>

<svelte:head>
	<title>{blog.seo?.title ?? blog.title}</title>
	<meta name="description" content={blog.seo?.description ?? blog.summary} />

	<meta property="og:title" content={blog.seo?.title ?? blog.title} />
	<meta property="og:description" content={blog.seo?.description ?? blog.summary} />
	<meta property="og:image" content={blog.seo?.ogImage ?? blog.heroImage} />
</svelte:head>

<h1 class="mb-6 text-3xl text-blue-300">Edit Blog Post</h1>

<BlogForm {blog} />
