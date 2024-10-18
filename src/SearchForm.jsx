const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.elements);
    
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