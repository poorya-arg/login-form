import React from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { validateEmail } from '../../utils/validateEmail';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import useAuth from '../../hooks/useAuth';

const useStyles = makeStyles({
      loginDiv:{
        display:"flex",
        flexDirection:"column",
        marginBottom:"1rem",
        "& .MuiTextField-root":{
        marginBottom:"1.5rem"

        }
      }
});


const LoginForm = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

    const {login, loading} = useAuth()

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setEmail(value);
        setError(validateEmail(value) ? "" : "Please enter a valid email")
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setPassword(value);
    };

    const handleClick = ()=>{
        login(email)
    }


    const classes = useStyles();
    return (
        <div > 
        <div className={classes.loginDiv}>
            <TextField
                id="outlined-name"
                label="Email"
                onChange={handleEmailChange}
                required
                value={email}
                type={"email"}
                error={error.length > 0}
                helperText={error}
            />
            <TextField
                id="outlined-name"
                label="Password"
                onChange={handlePasswordChange}
                required
                type={"password"}
                value={password}
            />
        </div>
            <div>
                <LoadingButton
                    size="large"
                    onClick={handleClick}
                    loading={loading}
                    loadingPosition="start"
                    startIcon={<SendIcon />}
                    variant="contained"
                    >
                   Login
                </LoadingButton>
            </div>
        </div>
    );
};

export default LoginForm;