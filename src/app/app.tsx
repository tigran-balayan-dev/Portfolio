import { lazy } from 'react'

import { Toaster } from 'components/ui/toaster'
import ScrollpointsProvider from 'core/context/scrollPoints'
import { Layout } from 'core/layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NotFound from './notFound'

const Root = lazy(() => import('./root/index'))

export default function App() {
  return (
    <BrowserRouter>
      <ScrollpointsProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Root />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </ScrollpointsProvider>
      <Toaster />
    </BrowserRouter>
  )
}
