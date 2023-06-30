// AuthContext.js

import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [articleList, setArticleList] = useState([])
  const [isRecommendActive, setRecommendActive] = useState(true);
  const [isLatestActive, setLatestActive] = useState(false);
  const [isHotActive, setHotActive] = useState(false);
  const [page, setPage] = useState(1);


  useEffect(() => {
    // 在组件加载时从localStorage中恢复登录状态
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    // if (storedLoginStatus) {
    //   setIsLoggedIn(JSON.parse(storedLoginStatus));
    // }
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    // 在登录时将登录状态存储到localStorage中
    localStorage.setItem('isLoggedIn', true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    // 在注销时从localStorage中移除登录状态
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <Context.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        articleList,
        setArticleList,
        isRecommendActive,
        setRecommendActive,
        isLatestActive,
        setLatestActive,
        isHotActive,
        setHotActive,
        page,
        setPage
      }}>
      {children}
    </Context.Provider>
  );
};
