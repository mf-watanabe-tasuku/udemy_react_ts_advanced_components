import { useEffect } from 'react';
import { z } from 'zod';
import { get } from './util/http';

function App() {
  useEffect(() => {
    const rawDataBlogPostSchema = z.object({
      id: z.number(),
      userId: z.number(),
      title: z.string(),
      body: z.string()
    });

    const fetchData = async () => {
      const data = await get(
        'https://jsonplaceholder.typicode.com/posts',
        z.array(rawDataBlogPostSchema)
      );
      return data;
    }
    fetchData();
  })

  return <h1>Data Fetching!</h1>;
}

export default App;
