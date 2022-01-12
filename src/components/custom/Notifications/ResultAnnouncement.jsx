import { Box } from '@mui/material';
import { Link } from 'react-router-dom'

const ResultAnnouncement = (props) => {
    return (
        <Box sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            maxWidth: "550px",
            margin: "auto",
        }}>
            <div className="wrapper-icon mb-36">
                <img props src={props.icon} alt='icon' />
            </div>
            <h2 className="main-title mb-16 text-center">{props.title}</h2>
            <p className="main-cotain text-center mb-16">{props.content}</p>
            <Link to="/login" className="call-to-action" underline="none">Đăng nhập</Link>
        </Box>
    )
}

export default ResultAnnouncement