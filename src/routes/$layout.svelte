<script>
  import 'virtual:windi.css'
  import Nav from '$lib/components/Nav.svelte';
  let title;
</script>
<svelte:head>
  <meta name="description" content="The personal blog of Bryan Shuetz: Shit I write about Javascript, HTML, CSS and other frameworks like Jekyll, Svelte, and Vue.">
  <meta name="keywords" content="HTML, CSS, JavaScript, Vue, Svelte, Jekyll">
  <meta name="author" content="Bryan Schuetz">
</svelte:head>
<main class="grid grid-cols-4 gap-4 pt-6 pl-6 pr-6">
  <Nav />
  <div class="page-body col-start-1 col-span-4">
    <section class="grid grid-cols-7 gap-2">
      <div class="feature-box col-span-3 col-start-2"> 
        <slot />
      </div>
    </section>
  </div>
</main>
<style>
  @import 'global.css';
  :global(a){
    background: url(/ui/underline.png) bottom repeat-x;
  }
</style>