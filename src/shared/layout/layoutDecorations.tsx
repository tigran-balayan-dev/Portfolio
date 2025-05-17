import { Flex } from '@chakra-ui/react'
import DotsCircleIcon from 'assets/icons/dotsCircle'

export default function LayoutDecorations() {
  return (
    <Flex
      w='100%'
      h='100%'
      pos='absolute'
      top='0'
      left='0'
      pointerEvents='none'
    >
      <Flex top='0' right='0'>
        <Flex
          w='64px'
          h='64px'
          bg='purple.primary'
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
      <Flex w='fit-content' h='fit-content' pos='absolute' bottom='0' left='0'>
        <Flex
          w='64px'
          h='64px'
          bg='purple.primary'
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
  )
}
