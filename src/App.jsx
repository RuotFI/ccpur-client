import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import HomeScreen from "./components/HomeScreen";
import MarkSheet from "./components/MarkSheet";
// import LoginPage from "./components/LoginPage";
import ExamForm from "./components/ExamForm";
import AdmissionForm from "./components/AdmissionForm";
import AdminLogin from "./Admin Dashboard/AdminLogin";
import AdminPanel from "./Admin Dashboard/AdminPanel";
import StudentsData from "./Admin Dashboard/StudentsData";
import Footer2 from "./layout/Footer2";
import Faculty from "./Admin Dashboard/Faculty";
import AdminDashBoard from "./Admin Dashboard/AdminDashBoard";
import TeacherDashboard from "./Teacher Dashboard/TeacherDashboard";
import StudentDashboard from "./Admin Dashboard/StudentDashboard";
import ParentDashboard from "./Admin Dashboard/ParentDashboard";
import AdmissionProcess from "./layout/AdmissionProcess";
import FeeStructure from "./layout/FeeStructure";
import Undergraduate from "./layout/Undergraduate";
import ExaminationSchedules from "./layout/ExaminationSchedules";
import ExaminationResults from "./layout/ExaminationResults";
import ExaminationNews from "./layout/ExaminationNews";
// import SignupPage from "./components/SignupPage";
import UserTypePage from "./components/UserTypePage";
// import ForgotPasswordPage from "./components/ForgotPasswordPage";
// import ResetPasswordPage from "./components/ResetPasswordPage";
import LoaderForReset from "./components/LoaderForReset";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ExistingStudentsForm from "./components/ExistingStudentsForm";
import ExistingPassTable from "./components/ExistingPassTable";
import AboutUsPage from "./layout/AboutUsPage";
import MainLayout from "./layout/MainLayout";
import LegacyTimeline from "./layout/LegacyTimeline";
import OurLeadership from "./layout/OurLeadership";
import NavbarTop from "./layout/NavbarTop";
import MainNavBar from "./components/MainNavBar";
import AcademicAdvisory from "./layout/AcademicAdvisory";
import PlanningDevelopement from "./layout/PlanningDevelopement";
import StatutoryBodies from "./layout/StatutoryBodies";
import StudentUnion from "./layout/StudentUnion";
import ResearchPublication from "./layout/ResearchPublication";
import CollegeNews from "./layout/CollegeNews";

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <ConditionalNavbarAndNotification />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeScreen />} />
          <Route path="/marksheet" element={<MarkSheet />} />
          {/* <Route path="/login-page" element={<LoginPage />} /> */}
          <Route path="/admission-form" element={<AdmissionForm />} />
          <Route path="/exam-form" element={<ExamForm />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/footer" element={<Footer2 />} />
          <Route path="/admission-process" element={<AdmissionProcess />} />
          <Route path="/fee-structure" element={<FeeStructure />} />
          <Route path="/undergraduate" element={<Undergraduate />} />
          <Route
            path="/examination-schedules"
            element={<ExaminationSchedules />}
          />
          <Route path="/examination-result" element={<ExaminationResults />} />
          <Route path="/examination-news" element={<ExaminationNews />} />
          {/* <Route path="/signup-page" element={<SignupPage />} /> */}
          <Route path="/user-type" element={<UserTypePage />} />
          {/* <Route path="/forgot-password" element={<ForgotPasswordPage />} /> */}
          {/* <Route
            path="/reset-password/:token"
            element={<ResetPasswordPage />}
          /> */}
          <Route path="/loader" element={<LoaderForReset />} />
          <Route path="/existing-students" element={<ExistingStudentsForm />} />
          <Route path="/existing-students" element={<ExistingPassTable />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/our-legacy" element={<LegacyTimeline />} />
          <Route path="/administrative-bodies" element={<OurLeadership />} />
          <Route path="/advisory-board" element={<AcademicAdvisory />} />
          <Route path="/development-board" element={<PlanningDevelopement />} />
          <Route path="/committee" element={<StatutoryBodies />} />
          <Route path="/student-union" element={<StudentUnion />} />
          <Route path="/research-publication" element={<ResearchPublication />} />
          <Route path="/college-news" element={<CollegeNews/>} />

        </Route>

        {/* Admin Panel Routes (Nested) */}
        <Route path="/admin-panel" element={<AdminPanel />}>
          <Route path="admin-dashboard" element={<AdminDashBoard />} />
          <Route path="students-data" element={<StudentsData />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="teacher" element={<TeacherDashboard />} />
          <Route path="student" element={<StudentDashboard />} />
          <Route path="parent" element={<ParentDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

const ConditionalNavbarAndNotification = () => {
  const location = useLocation();
  // Define routes where Navbar and Notification should appear
  const routesWithNavbarAndNotification = [
    "/",
    "/marksheet",
    "/admission-page",
    "/exam-form",
    "/admission-form",
    "/login-page",
    "/old-admission",
    "/second-admission",
    "/admission-process",
    "/fee-structure",
    "/undergraduate",
    "/examination-schedules",
    "/examination-result",
    "/examination-news",
    "/signup-page",
    "/user-type",
    "/existing-signup",
    "/about-us",
    "/our-legacy",
    "/existing-students",
    "/our-leadership",
    "/advisory-board",
    "/development-board",
    "/administrative-bodies",
    "/committee",
    "/student-union",
    "/research-publication",
    "/college-news",
    "/home",
    "/forgot-password"
    // "/homescreen"
  ];

  return routesWithNavbarAndNotification.includes(location.pathname) ? (
    <div className="fixed top-0 w-full z-50">
      <NavbarTop />
      <MainNavBar />
    </div>
  ) : null;
};

export default App;
