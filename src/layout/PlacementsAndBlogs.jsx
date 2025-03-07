import Blog from "./Blog"
import Placement from "./Placements"

const PlacementsAndBlogs = () => {
  return (
    <div className="w-full border-b-2 flex flex-col lg:flex lg:flex-row lg:justify-evenly bg-white">
        <Blog/>
        <Placement />
    </div>
  )
}
export default PlacementsAndBlogs