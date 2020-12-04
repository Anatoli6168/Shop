import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AboutPage } from './pages/AboutPage'
import { MainPage } from './pages/MainPage'
import { OnlineStore } from './pages/OnlineStorePage'
import { ContactUs } from './pages/ContactUsPage'
import { Cart } from './pages/CartPage'
import { Admin } from './pages/AdminPage'



const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={MainPage} path="/" exact />
        <Route component={AboutPage} path="/about" />
        <Route component={OnlineStore} path="/onlinestore" />
        <Route component={ContactUs} path="/contactus" />
        <Route component={Cart} path="/cart" />
        <Route component={Admin} path="/admin" />
      </Switch>
    </BrowserRouter>
  )
}

export default App