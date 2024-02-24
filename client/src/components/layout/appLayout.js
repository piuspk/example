import Header from "./header";
import Footer from './footer';
import {Outlet} from 'react-router-dom';
import classes from './appLayout.module.css';
const AppLayout=()=>{
    return <div className={classes.app}>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
}
export default AppLayout;