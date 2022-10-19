import React, { ReactNode } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/router'

type Props = {
  authenticatedRoute?:boolean;
  children?: ReactNode
}
const useStyles = makeStyles({
      layout:{
        width: "100%",
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }
});

const Layout = ({ children, authenticatedRoute }: Props) => {
  const {isLoggedIn} = useAuth();
  const router = useRouter();
  const [loading, setLoading] = React.useState<boolean>(true)
  React.useEffect(() => {
    if(authenticatedRoute){
      if(!isLoggedIn()){
        router.push("/auth/login")
      }else{
        setLoading(false);
      }
    }else{
      setLoading(false);
    }
  }, [authenticatedRoute])
  
  const classes = useStyles();
  return (
  <div className={classes.layout}>
    {!loading && children}
  </div>
)}

export default Layout
