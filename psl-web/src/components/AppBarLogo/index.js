import DataObjectIcon from '@mui/icons-material/DataObject';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';

import './style.css';

const LOGO_TEXT = 'PSL'

const AppBarLogo = ({xs, md}) => {
    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <DataObjectIcon sx={{ display: { xs: xs, md: md }, mr: 1}} />
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                    mr: 2,
                    display: { xs: xs, md: md },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                <Link style={{textDecoration: "none", color: "inherit"}} to="/">
                    {LOGO_TEXT}
                </Link>
            </Typography>
        </div>
    );
};

export default AppBarLogo;
