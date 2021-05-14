<script context="module">
	export async function load({ session }) {
		const posts = session.posts;
		return { props: { posts } };
	}
</script>

<script>
  export let posts;
  import Feature from './blog/github-actions-redux.md';
</script>
<style>

</style>
<svelte:head>
  <title>The Distress Signal</title>
</svelte:head>

<Feature />

<!-- <div class="archive">
  {#each posts as post}
    <h2><a href="/blog/{post.filename}">{post.title}</a></h2>
  {/each}
</div> -->