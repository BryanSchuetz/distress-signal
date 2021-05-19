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

<h1 class=" text-4xl pb-4">{title}</h1>
<p class=" font-bold mb-0">{new Date(date).getFullYear()}</p>
<p>{#each tags as tag, i}<span class=""><a href="">{tag}</a> </span>{#if i < tags.length-1}\ {/if}{/each}</p>
<slot />