export const getSession = async () => {
  const posts = await Promise.all(
    Object.entries(import.meta.glob("/src/routes/blog/*.md")).map(
      async ([path, page]) => {
        const { metadata } = await page();
        const filename = path.split("/").pop().replace(".md","");
        const filepath = path;
        return { ...metadata, filename, filepath };
      }
    )
  );
  console.log(posts);
  posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

  return {
    posts,
  };
};