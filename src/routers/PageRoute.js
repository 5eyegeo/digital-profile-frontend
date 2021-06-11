import Login from "../pages/Auth/Login";
import PageNotFound from "../pages/Error/PageNotFound";
import {Route, Switch} from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import PrivateRoute from "./PrivateRoute";
import Gallery from "../pages/Gallery";
import Documents from "../pages/Document";
import AcademicGroup from "../pages/Academic/AcademicGroup";
import Parent from "../pages/Academic/Parent";
import Student from "../pages/Academic/Student";
import StakeHolder from "../pages/Academic/StakeHolder";
import Staff from "../pages/Academic/Staff";
import Subject from "../pages/Academic/Subject";
import LayoutCategory from "../pages/HtmlMarkup/LayoutCategory";
import Layout from "../pages/HtmlMarkup/Layout";
import TemplateCategory from "../pages/HtmlMarkup/TemplateCategory";
import Template from "../pages/HtmlMarkup/Template";
import AcademicSession from "../pages/Session";
import StaffCategory from "../pages/Academic/StaffCategory";
import SubjectCategory from "../pages/Academic/SubjectCategory";
import RoutineCategory from "../pages/Academic/RoutineCategory";
import Routine from "../pages/Academic/Routine";
import Contact from "../pages/Contact/Contact";
import Attendance from "../pages/Attendance/Attendance";
import AttendanceStatus from "../pages/Attendance/AttendanceStatus";
import AttendanceCategory from "../pages/Attendance/AttendanceCategory";
import LeaveStatus from "../pages/Attendance/LeaveStatus";
import NoInterNetConnection from "../pages/Error/NoInterNetConnection";
import LeaveCategory from "../pages/Attendance/LeaveCategory";
import AddressCategory from "../pages/Contact/AddressCategory";
import PhoneCategory from "../pages/Contact/PhoneCategory";
import EmailCategory from "../pages/Contact/EmailCategory";
import IdCardLayoutEditor from "../pages/HtmlMarkup/IDCardLayoutEditor";
import FormPreview from "../pages/FormBuilder/FormPreview";
import FormLayout from "../layouts/FormLayout";
import PrivateRouteItem from "./PrivateRouteItem";

const AppRoute = ({component: Component, layout: Layout, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props}/>
        </Layout>
      )}
    />
  );
};

const PageRouter = () => {
  return (
    <>
      <Switch>
        {PrivateRouteItem.map((value, index) => (
          <PrivateRoute
            key={index}
            exact
            path={value.path}
            component={value.component}
          />
        ))}

        {/*<PrivateRoute
          exact
          path="/gallery"
          component={Gallery}
        />
        <PrivateRoute
          exact
          path="/documents"
          component={Documents}
        />
        <PrivateRoute
          exact
          path="/academic-group"
          component={AcademicGroup}
        />
        <PrivateRoute
          exact
          path="/parents"
          component={Parent}
        />
        <PrivateRoute
          exact
          path="/students"
          component={Student}
        />
        <PrivateRoute
          exact
          path="/academic-subject"
          component={Subject}
        />
        <PrivateRoute
          exact
          path="/stake-holders"
          component={StakeHolder}
        />
        <PrivateRoute
          exact
          path="/layout-category"
          component={LayoutCategory}
        />
        <PrivateRoute
          exact
          path="/layouts"
          component={Layout}
        />
        <PrivateRoute
          exact
          path="/layout-editor/:LayoutID"
          component={IdCardLayoutEditor}
        />
        <PrivateRoute
          exact
          path="/template-category"
          component={TemplateCategory}
        />
        <PrivateRoute
          exact
          path="/templates"
          component={Template}
        />
        <PrivateRoute
          exact
          path="/sessions"
          component={AcademicSession}
        />
        <PrivateRoute
          exact
          path="/staff-category"
          component={StaffCategory}
        />
        <PrivateRoute
          exact
          path="/staffs"
          component={Staff}
        />
        <PrivateRoute
          exact
          path="/subject-category"
          component={SubjectCategory}
        />
        <PrivateRoute
          exact
          path="/routine-category"
          component={RoutineCategory}
        />
        <PrivateRoute
          exact
          path="/routine"
          component={Routine}
        />
        <PrivateRoute
          exact
          path="/contacts"
          component={Contact}
        />
        <PrivateRoute
          exact
          path="/address-category"
          component={AddressCategory}
        />
        <PrivateRoute
          exact
          path="/phone-category"
          component={PhoneCategory}
        />
        <PrivateRoute
          exact
          path="/email-category"
          component={EmailCategory}
        />
        <PrivateRoute
          exact
          path="/attendance"
          component={Attendance}
        />
        <PrivateRoute
          exact
          path="/attendance-status"
          component={AttendanceStatus}
        />
        <PrivateRoute
          exact
          path="/attendance-category"
          component={AttendanceCategory}
        />
        <PrivateRoute
          exact
          path="/leave-category"
          component={LeaveCategory}
        />
        <PrivateRoute
          exact
          path="/leave-status"
          component={LeaveStatus}
        />*/}
        <AppRoute
          exact
          path="/dynamic-form/:formID"
          component={FormPreview}
          layout={FormLayout}
        />
        <AppRoute
          exact
          path="/no-internet-connection"
          component={NoInterNetConnection}
          layout={AuthLayout}
        />
        <AppRoute exact path="/login" component={Login} layout={AuthLayout}/>
        <PrivateRoute component={PageNotFound}/>
      </Switch>
    </>
  );
};

export default PageRouter;
