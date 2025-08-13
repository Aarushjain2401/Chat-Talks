import React, { useEffect, useState } from 'react'
import { Navigate, Route,Routes } from 'react-router'
import SignUpPage from './pages/SignUpPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NotificationPage from './pages/NotificationPage'
import CallPage from './pages/CallPage'
import ChatPage from './pages/ChatPage'
import OnboardingPage from './pages/OnboardingPage'
import toast,{ Toaster } from 'react-hot-toast'
import PageLoader from './components/PageLoader.jsx'
import useAuthUser from './hooks/useAuthUser.js'
import Layout from './components/Layout.jsx'
import { useThemeStore } from './store/useThemeStore.js'
const App = () => {
  //axios
  //react query tanstack query
  
  const {theme} = useThemeStore()
  const {isLoading,authUser} = useAuthUser()
  const isAuthenticated = Boolean(authUser)
  const isOnboarded = authUser?.isOnboarded

if(isLoading) return <PageLoader/>

  return (
    <div className='h-screen' data-theme={theme}>
      <Routes>
        <Route path="/" element={isAuthenticated && isOnboarded? (<Layout showSideBar={true}><HomePage/></Layout> ) : (<Navigate to={!isAuthenticated ? "/login" : "/onboarding"}/>)}/>
        <Route path="/signup" element={!isAuthenticated ? <SignUpPage/> : <Navigate to={isOnboarded ? "/" : "/onboarding"}/> }/>
        <Route path="/login" element={!isAuthenticated  ?<LoginPage/> : <Navigate to={isOnboarded ? "/" : "/onboarding"}/>}/>
        <Route path="/notifications" element={isAuthenticated && isOnboarded ? (<Layout showSideBar={true}>
        <NotificationPage/>
        </Layout>
      ):(
        <Navigate to={!isAuthenticated ? "/login" : "/onboarding"}/>
      )  }/>
        <Route path="/call/:id" element={isAuthenticated && isOnboarded ? (
        <CallPage/>
      ):(
        <Navigate to={!isAuthenticated ? "/login" : "/onboarding"}/>
      )  }/>
        <Route path="/chat/:id" element=
        {isAuthenticated && isOnboarded ? (<Layout showSideBar={false}>
        <ChatPage/>
        </Layout>
      ):(
        <Navigate to={!isAuthenticated ? "/login" : "/onboarding"}/>
      )  }
        />
        <Route path="/onboarding" element={isAuthenticated ? ( !isOnboarded ?
          (
            <OnboardingPage/>
          ):(
          <Navigate to='/'/>
        )
          ) :
           (<Navigate to="/login"/>)}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
