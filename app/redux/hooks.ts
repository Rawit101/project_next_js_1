'use client'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from './store' // Replace with actual path to your store

export const useAppDispatch = () => useDispatch<AppDispatch>() // Replace with actual implementation
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector // Replace with actual implementation