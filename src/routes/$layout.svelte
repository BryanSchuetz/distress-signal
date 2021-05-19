<script context="module">
	export async function load({ session }) {
		const posts = session.posts;
		return { props: { posts } };
	}
</script>
<script>
  import 'virtual:windi.css'
  import Nav from '$lib/components/Nav.svelte';
  let title;
  export let posts;
</script>
<svelte:head>
  <meta name="description" content="The personal blog of Bryan Shuetz: Shit I write about Javascript, HTML, CSS and other frameworks like Jekyll, Svelte, and Vue.">
  <meta name="keywords" content="HTML, CSS, JavaScript, Vue, Svelte, Jekyll">
  <meta name="author" content="Bryan Schuetz">
</svelte:head>
<main class="grid grid-cols-4 gap-4 pt-9 pl-9 pr-9">
  <Nav />
  <div class="page-body col-start-1 col-span-4">
    <section class="grid grid-cols-6 gap-6 grid-flow-col">
      <div class="archive col-span-2 col-start-5 text-right">
          {#each posts as post}
          <h2 class="mb-2 pt-1 pb-1"><a class=""href="/blog/{post.filename}">{post.title}</a></h2>
          {/each}
        </div>
      <div class="feature-box col-span-3 col-start-2"> 
        <slot />
      </div>
    </section>
  </div>
</main>
<style>
  @import 'global.css';
  h2 a{
    border-bottom: 0px; 
  }
  hr{
    color: #B48EAD;
    opacity: 0.2;
  }
</style>