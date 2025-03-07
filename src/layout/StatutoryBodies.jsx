import AboutUsLink from "./AboutUsLink"
import BoardMemberTable from "./BoardMemberTable"
import NonTeachingStaff from "./NonTeachingStaff"
import TeachingStaff from "./TeachingStaff"

const StatutoryBodies = () => {
  return (
    <div className="pt-6 lg:pt-0">
        <AboutUsLink />
        <NonTeachingStaff />
        <TeachingStaff />
        <BoardMemberTable />
    </div>
  )
}
export default StatutoryBodies