import { Flex } from '@chakra-ui/react'

import Header from './modules/header'

export default function Root() {
  return (
    <Flex w='100%' flexDir='column'>
      <Header />
    </Flex>
  )
}
