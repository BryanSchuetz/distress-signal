<script>
  export let title
  export let date
  export let socialImage
  export let tags
</script>
<svelte:head>
  <title>{title}</title>
</svelte:head>

<h1>{title}</h1>
<p>{new Date(date).getFullYear()}</p>
<p>{tags}</p>
<slot />