import { useGlobalContext } from "./context";

const SearchForm = () => {
  const{setSearchTerm} = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
setSearchTerm(searchValue)        
  }
  return (
<section>
  <h1>
    images
  </h1>
  <form onSubmit={handleSubmit}> 
    <input type="text" name="search" placeholder="cat" />
    <button type="submit" > search</button>
  </form>
</section>
  )
}
export default SearchForm