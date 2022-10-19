import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabPanelProps } from '../../interfaces';
import { makeStyles } from '@material-ui/core/styles';
import Login from '../ui/LoginForm';
import Signup from '../ui/SignupForm';

const useStyles = makeStyles({
        "& .MuiTabs-root":{
            paddingBottom:"2rem"
        },
});

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {children}
    </div>
  );
}

const AuthPageComponent = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const classes = useStyles();

    return (
        <><div >
            <p>HELLO</p>
            <p>You can use this form to login or create a new account</p>
        </div><div>
                <Tabs centered={true} value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Login" />
                    <Tab label="Signup" />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Login />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Signup />
                </TabPanel>
            </div></>
    );
};

export default AuthPageComponent;