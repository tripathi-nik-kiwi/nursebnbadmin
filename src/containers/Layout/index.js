import Container from '@material-ui/core/Container';
import Sidebar from '../Sidebar';
import classes from './layout.module.css';

const Layout = ({children}) => {
  return (
    <>
    <Container maxWidth="xl">
     <Container maxWidth="xs" className={classes.navContainer}>
       <Sidebar/>
     </Container>
     <Container maxWidth="sm">
      {children}
     </Container>
    </Container>
    </>
  );
};

export default Layout;
