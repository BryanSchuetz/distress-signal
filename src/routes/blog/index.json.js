export const get = async () => {
  const modules = import.meta.glob('/$lib/routes/blog/*.md');
  const posts = [];
  await Promise.all(Object.entries(modules).map(async ([file, module]) => {
    const { metadata } = await module();
    const filename = file.split("/").pop();
    const slug = filename.slice(0, -3);
    posts.push({
      slug: slug,
      title: metadata.title,
      date: metadata.date
    });

  }));
  return {
    body: {
      posts: posts,
    },
  }
};