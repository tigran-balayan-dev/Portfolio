import { Flex } from '@chakra-ui/react'
import { CustomContainer } from 'shared/layout/container'

import About from './modules/about'
import Contact from './modules/contact'
import FirstScreen from './modules/firstScreen'
import Work from './modules/work'

export default function Root() {
  return (
    <Flex w='100%' flexDir='column' pos='relative' zIndex='100'>
      <FirstScreen />
      <CustomContainer
        variant='desktopContent'
        py={{ base: '2xl', mobile: '3xl', tablet: '4xl' }}
        mx='auto'
        display='flex'
        flexDir='column'
        gap={{ base: '2xl', tablet: '3xl', laptop: '4xl' }}
      >
        <About />
        <Work />
        <Contact />
      </CustomContainer>
    </Flex>
  )
}
