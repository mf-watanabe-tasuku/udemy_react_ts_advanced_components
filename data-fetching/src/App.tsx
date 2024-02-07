import { type ReactNode, useState, useEffect } from 'react';
import BlogPosts, { type BlogPost } from './components/BlogPosts';
import { get } from './util/http';
import fetchingImg from './assets/data-fetching.png';

type RawDataBlogPost = {
  id: number;
  useId: number;
  title: string;
  body: string;
};

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();

  useEffect(() => {
    async function fetchPosts() {
      const data = (await get(
        'https://jsonplaceholder.typicode.com/posts'
      )) as RawDataBlogPost[];

      const blogPosts: BlogPost[] = data.map(rawPost => {
        return {
          id: rawPost.id,
          title: rawPost.title,
          text: rawPost.body
        }
      });

      setFetchedPosts(blogPosts);
    }

    fetchPosts();
  }, []);

  let content: ReactNode;

  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />;
  }

  return (
    <main>
      <img src={fetchingImg} alt="An abstract image depicting a data fetching process." />
      {content}
    </main>
  );
}

export default App;
