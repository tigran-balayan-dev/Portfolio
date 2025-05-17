import { Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Flex w='100%' alignItems='center' justifyContent='center' gap='md' p='md'>
      <Link to='/'>
        <Text textStyle='text' color='black'>
          Home
        </Text>
      </Link>
      <Link to='/work'>
        <Text textStyle='text' color='black'>
          Work
        </Text>
      </Link>
      <Link to='/about'>
        <Text textStyle='text' color='black'>
          About
        </Text>
      </Link>
      <Link to='/contact'>
        <Text textStyle='text' color='black'>
          Contact
        </Text>
      </Link>
    </Flex>
  )
}
