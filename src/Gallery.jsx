import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useGlobalContext } from "./context"

const url = 'https://api.pexels.com/v1/search?'
console.log();

const Gallery = () => {
  const {searchTerm}= useGlobalContext()
  const response = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}query=${searchTerm}&per_page=10`, {
        headers: {
          Authorization: import.meta.env.VITE_API_KEY, // replace with your actual API key
        },
      });
      return result.data;
    },
  });

  if (response.isLoading) {
    return (
      <section>
        <h4>Loading...</h4>
      </section>
    );
  }

  if (response.isError) {
    return (
      <section>
        <h4>Error fetching images</h4>
      </section>
    );
  }

  const results = response.data.photos;

  if (results.length < 1) {
    return (
      <section>
        <h4>No results for your image</h4>
      </section>
    );
  }

  return (
    <section>
      {results.map((item) => {
        return (
          <img 
            src={item.src.small} // You can choose other sizes like `small`, `large`, etc.
            key={item.id}
            alt={item.alt_description || 'Image from Pexels'}
          />
        );
      })}
    </section>
  );
}

export default Gallery;
