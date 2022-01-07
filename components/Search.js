import Image from "next/image"

const SearchComponent = ({ result }) => {

  return (
    <div className="flex flex-center w-full justify-center">
      <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-6 mb-4 w-6/12 justify-center" action="/search">

        <input type="search" placeholder="search" className="form-input rounded text-pink focus:outline-none w-full border-none" />
      </form>
    </div>
  )
};

export default SearchComponent