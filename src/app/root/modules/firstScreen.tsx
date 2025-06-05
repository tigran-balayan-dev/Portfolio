import { Button, Flex, Text } from '@chakra-ui/react'
import GithubIcon from 'assets/icons/github'
import LinkedinIcon from 'assets/icons/linkedin'
import { useScrollpoints } from 'core/context/scrollPoints'
import { Link } from 'react-router-dom'
import { ScrollAnimation } from 'shared/hooks/framerMotion'
import { CustomContainer } from 'shared/layout/container'

export default function FirstScreen() {
  const scrollpoints = useScrollpoints()

  return (
    <Flex
      ref={scrollpoints.firstScreen}
      w='100%'
      h='fit-content'
      flexDir='column'
      alignItems='center'
      pos='relative'
      pt='180px'
      pb='113px'
      backgroundImage='linear-gradient(0deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)'
      backgroundSize='8px 8px'
      backgroundRepeat='repeat'
      willChange='transform'
      imageRendering='pixelated'
    >
      <CustomContainer
        variant='desktopHeader'
        display='flex'
        flexDir='column'
        gap='md'
      >
        <ScrollAnimation alignItems='center' gap='lg'>
          <Link
            to='https://www.linkedin.com/in/tigran-balayan-dev/'
            target='_blank'
          >
            <LinkedinIcon width='22px' height='22px ' color='white' />
          </Link>
          <Link to='https://github.com/tigran-balayan-dev' target='_blank'>
            <GithubIcon width='22px' height='22px ' color='white' />
          </Link>
        </ScrollAnimation>
        <ScrollAnimation
          as={Text}
          textStyle='headerBigPoetsen'
          color='text.white'
          fontWeight='400'
        >
          👋 I'm Tigran
        </ScrollAnimation>
        <ScrollAnimation
          as={Text}
          display='block'
          textStyle='title'
          color='text.white'
          fontWeight='400'
        >
          I'm a&nbsp;
          <Text as='span' textStyle='titlePoetsen' color='text.purple'>
            Software Developer
          </Text>
        </ScrollAnimation>
        <ScrollAnimation
          as={Text}
          textStyle='textBig'
          color='text.gray'
          fontWeight='400'
        >
          Over the last 4 years, I've actively built and scaled professional,
          complex frontend websites, collaborating closely with both frontend
          and backend teams.
        </ScrollAnimation>
        <ScrollAnimation
          as={Button}
          onClick={() =>
            scrollpoints.work.current?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          See work
        </ScrollAnimation>
      </CustomContainer>
    </Flex>
  )
}
