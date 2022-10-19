import React from 'react';
import Layout from '../components/Layout'
import CardComponent from '../components/widgets/CardComponent'
import useAuth from '../hooks/useAuth'
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { withSnackbar } from '../components/SnackbarHandler';

const Panel = (props) => {
  const [email, setEmail] = React.useState<string>("")
  const {getUserData,logout,loading,isLoggedIn} = useAuth();
  
  React.useEffect(() => {
    setEmail(getUserData())
    if(isLoggedIn()){
    props.snackbarShowMessage("Successfully logged in congratulations!!")
    }
  }, [getUserData])
  
  const handleClick = ()=>{
    logout()
  }

  return (
  <Layout authenticatedRoute={true}>
      <CardComponent>
        <div>
          <p>Email: {email}</p>
        <div>
                <LoadingButton
                    size="large"
                    onClick={handleClick}
                    loading={loading}
                    loadingPosition="start"
                    startIcon={<SendIcon />}
                    variant="contained"
                    >
                   Logout
                </LoadingButton>
            </div>
        </div>
        
      </CardComponent>
  </Layout>
)}

export default withSnackbar(Panel)
