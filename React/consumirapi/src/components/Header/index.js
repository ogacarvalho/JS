import React from 'react';
import { FaHome, FaUserAlt, FaPowerOff, FaCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import history from '../../services/history';

import { Nav } from './styled';

import * as actions from '../../store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/login');
  };

  return (
    <Nav>
      <Link to="/">
        <FaHome size={22} />
      </Link>
      <Link to="/register">
        <FaUserAlt size={20} />
      </Link>
      {isLoggedIn ? (
        <Link onClick={handleLogout} to="/logout">
          <FaPowerOff size={20} />
        </Link>
      ) : (
        <Link to="/login">
          <FaPowerOff size={20} />
        </Link>
      )}

      <FaCircle size={15} color={isLoggedIn ? '#66ff33' : 'grey'} />
    </Nav>
  );
}
