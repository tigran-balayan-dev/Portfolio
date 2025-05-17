import type { ReactNode } from 'react'

import { Flex } from '@chakra-ui/react'
import LayoutDecorations from 'shared/layout/layoutDecorations'

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex w='100%' h='fit-content' minH='100%' flexDir='column' mx='auto'>
      <Flex height='100%' flex={1}>
        {children}
      </Flex>
      <LayoutDecorations />
    </Flex>
  )
}
