import { Link } from "react-router-dom"

const AboutUsLink = () => {
  return (
    <div>
        <div className="flex overflow-x-auto lg:hidden font-semibold underline text-sm whitespace-nowrap px-3 mb-6 pb-2 gap-4 items-center justify-start">
        <Link to="/our-legacy">Our Legacy</Link>
        <Link to="/our-leadership">Leadership</Link>
        <Link to="/advisory-board">Academic Advisory Board</Link>
        <Link to="/development-board">Planning & Development Board</Link>
        <Link to="/statutory-bodies">Administration</Link>
        <Link to="/student-union">Student Union</Link>
      </div>
    </div>
  )
}
export default AboutUsLink