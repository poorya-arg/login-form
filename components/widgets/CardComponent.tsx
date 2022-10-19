import React, { ReactNode }  from 'react';
import Card from '@mui/material/Card';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  children?: ReactNode
}


const useStyles = makeStyles({
       card:{
        padding:"1rem 2rem",
        textAlign:"center",
        minHeight:"50%",
        minWidth:"40%",
        "& .MuiTabs-root":{
            paddingBottom:"2rem"
        }
      },
});

const CardComponent = ({ children }: Props) => {
    const classes = useStyles();
    
    return (
             <Card sx={{ maxWidth: 345 }} className={classes.card}>
                {children}
            </Card>
    );
};

export default CardComponent;