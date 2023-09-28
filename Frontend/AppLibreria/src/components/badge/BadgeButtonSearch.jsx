import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

export const BadgeButtonSearch = () => {
  return (
    <IconButton aria-label="search">
      <StyledBadge  color="secondary">
        <SearchIcon color="action" />
      </StyledBadge>
    </IconButton>
  )
}
