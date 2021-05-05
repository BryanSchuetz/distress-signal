<script>
  import { session } from '$app/stores';
  let posts = $session.posts;
</script>
<style>

</style>

{#each posts as post}
  <h2><a href="/blog/{post.filename}">{post.title}</a></h2>
{/each}