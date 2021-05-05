<script context="module">
	export async function load({ session }) {
		const posts = session.posts;
		return { props: { posts } };
	}
</script>
<script>
  export let posts;
</script>
<style>

</style>
<svelte:head>
  <title>The Distress Signal</title>
</svelte:head>
{#each posts as post}
  <h2><a href="/blog/{post.filename}">{post.title}</a></h2>
{/each}