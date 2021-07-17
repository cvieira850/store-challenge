import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ProductList } from '@/presentation/pages'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ProductList} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
