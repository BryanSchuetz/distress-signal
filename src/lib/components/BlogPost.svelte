<script>
  export let title
  export let date
  export let socialImage
  export let tags
</script>
<svelte:head>
  <title>{title}</title>
  <meta name="description" content="The personal blog of Bryan Shuetz: Shit I write about Javascript, HTML, CSS and other frameworks like Jekyll, Svelte, and Vue. | {title}"> 
</svelte:head>

<h1 class="text-aurora-4 text-4xl pb-4">{title}</h1>
<p class="text-aurora-3 font-bold mb-0">{new Date(date).getFullYear()}</p>
<p>{#each tags as tag, i}<span class="text-aurora-2">{tag}</span>{#if i < tags.length-1}, {/if} {/each}</p>
<slot />