import { useNavigate } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useProduct } from "../../hooks/useProduct";

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

export const BadgeButton = () => {
  const navigate = useNavigate();
  const { cart } = useProduct();

  let cartCantidad = cart.reduce(
    (acumulador, actual) => acumulador + actual.cantidad,
    0
  );
  console.log(cartCantidad)

  return (
    <IconButton aria-label="cart" onClick={() => navigate('/cart/')}>
      <StyledBadge badgeContent={cartCantidad} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  )
}
