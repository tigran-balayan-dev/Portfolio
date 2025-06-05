import { Flex, Text } from '@chakra-ui/react'
import { useScrollpoints } from 'core/context/scrollPoints'

import { CustomContainer } from './container'

export default function Header() {
  const scrollpoints = useScrollpoints()

  const links = [
    {
      text: 'Home',
      onClick: () => {
        scrollpoints.scrollTo('firstScreen')
      },
    },
    {
      text: 'About',
      onClick: () => {
        scrollpoints.scrollTo('about')
      },
    },
    {
      text: 'Work',
      onClick: () => {
        scrollpoints.scrollTo('work')
      },
    },
    {
      text: 'Contact',
      onClick: () => {
        scrollpoints.scrollTo('contact')
      },
    },
  ]

  return (
    <CustomContainer
      variant='desktopHeader'
      p='lg'
      pos='absolute'
      top='0'
      left='0'
      right='0'
      zIndex='1000'
      mx='auto'
    >
      <Flex alignItems='center' gap='lg' justifyContent='center'>
        {links?.map((link) => {
          return (
            <Text
              key={link?.text + 43875}
              textStyle='text'
              color='text.white'
              cursor='pointer'
              transition='.2s'
              _hover={{ color: 'text.purple' }}
              onClick={link.onClick}
            >
              {link?.text}
            </Text>
          )
        })}
      </Flex>
    </CustomContainer>
  )
}
