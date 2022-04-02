import { useDispatch } from 'react-redux';

import { AppDispatch } from './useAppDispatch.types';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
