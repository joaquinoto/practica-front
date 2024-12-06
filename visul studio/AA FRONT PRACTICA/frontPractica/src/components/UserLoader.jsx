// src/components/UserLoader.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/userSlice';

const UserLoader = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return null;
};

export default UserLoader;