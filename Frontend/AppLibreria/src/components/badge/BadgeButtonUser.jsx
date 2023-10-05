import { useNavigate } from "react-router-dom";
import Badge from '@mui/material/Badge';
import LoginIcon from '@mui/icons-material/Login';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

export const BadgeButtonUser = () => {

  const { isAuthenticated, setIsAuthenticated ,setToken} = useAuth();

    const navigate = useNavigate();

    const VerifyLogin =() =>{
      console.log(`VerifyLogin.isAuthenticated: ${isAuthenticated}`)
      if (isAuthenticated) {
            //navigate("/");
            setToken('');
            setIsAuthenticated(false);
          } else{
            navigate(`/login/`);
          }
    }
    // useEffect(() => {
    //   if (isAuthenticated) {
    //     navigate("/");
    //   } else{

    //   }
    // }, [isAuthenticated]);
  return (
    <IconButton aria-label="login">
      <StyledBadge  color="secondary">
        {/* <LoginIcon color="action" onClick={()=> {navigate(`/login/`)}}/> */}
        <LoginIcon color="action" onClick={()=> {VerifyLogin()}}/>
      </StyledBadge>
    </IconButton>
  )
}
