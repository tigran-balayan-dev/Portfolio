import type { ReactNode } from 'react'

import { Flex } from '@chakra-ui/react'
import Header from 'shared/layout/header'
import LayoutDecorations from 'shared/layout/layoutDecorations'

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex w='100%' h='fit-content' minH='100%' flexDir='column' mx='auto'>
      <Flex w='100%' h='100%' flexDir='column'>
        <Header />
        <Flex>{children}</Flex>
      </Flex>
      <LayoutDecorations />
    </Flex>
  )
}
