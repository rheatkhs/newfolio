import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Febiadi Wisnu Akbar | Blog',
    description: 'Software Engineering blog and tech articles by Febiadi Wisnu Akbar',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
      stylesheet: '/rss/pretty-feed-v3.xsl',
    })),
  });
}
