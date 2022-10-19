import React from 'react';
import TextField from '@mui/material/TextField';
import { User } from '../../interfaces';
import { validateEmail } from '../../utils/validateEmail';
import { makeStyles } from '@material-ui/core/styles';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import useAuth from '../../hooks/useAuth';

const initialState:User = {
    first_name: "",
    last_name: "",
    email: "",
    password:"",
}

const useStyles = makeStyles({
      signupDiv:{
        display:"flex",
        flexDirection:"column",
        marginBottom:"1rem",
        "& .MuiTextField-root":{
        marginBottom:"1.5rem"

        }
      }
});
const SignupForm = () => {
    const [user, setUser] = React.useState<User>(initialState);
    const [error, setError] = React.useState("");
    const {signup, loading} = useAuth()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setUser({
            ...user,
            [name]:value
        })
        if(name === "email"){
            setError(validateEmail(value) ? "" : "Please enter a valid email")
        }
    };

    const handleClick = ()=>{
        signup(user)
    }

    const classes = useStyles();
    return (
        <div >
            <div className={classes.signupDiv}>
                <TextField
                id="outlined-name"
                label="First Name"
                onChange={handleChange}
                required
                value={user.first_name}
                name="first_name"
            />
            <TextField
                id="outlined-name"
                label="Last Name"
                onChange={handleChange}
                required
                value={user.last_name}
                name="last_name"
            />
            <TextField
                id="outlined-name"
                label="Email"
                onChange={handleChange}
                required
                value={user.email}
                type={"email"}
                error={error.length > 0}
                helperText={error}
                name="email"
            />
            <TextField
                id="outlined-name"
                label="Password"
                onChange={handleChange}
                required
                type={"password"}
                value={user.password}
                name="password"
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
                   Signup
                </LoadingButton>
            </div>
        </div>
    );
};

export default SignupForm;