import { create } from 'zustand';

const useStore = create(set => ({
    isLogin: false,
    setIsLogin: set => set(state => ({
        isLogin: !state.isLogin
    }))
}))

export default useStore;