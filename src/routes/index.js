import PATHS from '../config/webPath';
import Listing from '../containers/ListingManagement';
import Dashboard from '../containers/Dashboard';

const routes = [
  { path: PATHS.DASHBOARD, exact:true, element: <Dashboard/> },
  { path: PATHS.LISTING, exact:true, element: <Listing/> },
  ];

export default routes;
