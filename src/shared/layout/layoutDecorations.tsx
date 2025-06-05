import { Flex } from '@chakra-ui/react'
import DotsCircleIcon from 'assets/icons/dotsCircle'

export default function LayoutDecorations() {
  return (
    <>
      <Flex
        w='32rem'
        h='357px'
        position='absolute'
        top='20vh'
        left='3vw'
        background='linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)'
        filter='blur(118px)'
        zIndex='10'
      ></Flex>
      <Flex
        w='100%'
        h='100%'
        pos='fixed'
        top='0'
        left='0'
        pointerEvents='none'
        zIndex='1000'
        display={{ base: 'none', tablet: 'flex' }}
      >
        <Flex pos='absolute' top='0' right='0'>
          <Flex
            w='64px'
            h='64px'
            bg='background.purple'
            pos='absolute'
            top='0'
            right='0'
          ></Flex>
          <Flex w='64px' h='64px' pos='absolute' top='32px' right='32px'>
            <DotsCircleIcon
              width='64px'
              height='64px'
              color='var(--chakra-colors-text-white)'
            />
          </Flex>
        </Flex>
        <Flex pos='absolute' bottom='0' left='0'>
          <Flex
            w='64px'
            h='64px'
            bg='background.purple'
            pos='relative'
            bottom='0'
            left='0'
          ></Flex>
          <Flex w='64px' h='64px' pos='relative' bottom='32px' left='-32px'>
            <DotsCircleIcon
              width='64px'
              height='64px'
              color='var(--chakra-colors-text-white)'
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
