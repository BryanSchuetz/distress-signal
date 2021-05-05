<script>
  import 'virtual:windi.css'
  import Nav from '$lib/components/Nav.svelte';
</script>
<main class="grid grid-cols-4 gap-4 pt-6 pl-6 pr-6">
  <Nav />
  <div class="page-body col-start-1 col-span-4">
    <slot />
  </div>
</main>
