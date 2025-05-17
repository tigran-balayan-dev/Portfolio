import { lazy } from 'react'

import { Layout } from 'core/layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NotFound from './notFound'

const Root = lazy(() => import('./root/index'))

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Root />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
