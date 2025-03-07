
import AdmissionCommittee from "./AdmissionCommittee"
import CommitteeTable from "./CommitteeTable"
import ExaminationsCommittee from "./ExaminationsCommittee"
import NationalCadetCorps from "./NationalCadetCorps"
import NodalOfficer from "./NodalOfficer"
import PlanningDevelopement from "./PlanningDevelopement"
import WelfareCommittee from "./WelfareCommittee"
import International from "./International"
import NSS from "./NSS"
import NonTeachingStaff from "./NonTeachingStaff"
import TeachingStaff from "./TeachingStaff"

const BoardMemberTable = () => {



  return (
    <div className="w-full h-full">
        
        {/* <PlanningDevelopement /> */}
        <AdmissionCommittee />
        <ExaminationsCommittee />
        <WelfareCommittee />
        <NodalOfficer />
        <NationalCadetCorps />
        <International />
        <NSS />
        <CommitteeTable />
    </div>
  )
}
export default BoardMemberTable