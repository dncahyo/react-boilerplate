import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;

  &.${(props) => props.activeClassName}{
    background-color: #4CAF50;
    color: white;
  }

  &:hover {
    background-color: #ddd;
    color: black;
  }
`;

StyledLink.defaultProps = {
  activeClassName: 'active',
};

export default StyledLink;
