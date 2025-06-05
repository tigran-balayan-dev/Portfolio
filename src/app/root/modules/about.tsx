import { Button, Flex, Tag, Text } from '@chakra-ui/react'
import { useScrollpoints } from 'core/context/scrollPoints'
import { Link } from 'react-router-dom'
import { ScrollAnimation } from 'shared/hooks/framerMotion'

export default function About() {
  const scrollpoints = useScrollpoints()

  return (
    <Flex
      ref={scrollpoints.about}
      flexDir='column'
      gap={{ base: 'lg', tablet: 'xl' }}
    >
      <ScrollAnimation
        as={Text}
        justifyContent='center'
        textStyle='headerBigPoetsen'
        color='text.white'
        textAlign='center'
      >
        About
      </ScrollAnimation>
      <ScrollAnimation gap='xl' flexDir={{ base: 'column', laptop: 'row' }}>
        <Flex flex='1' flexDir='column' gap='md'>
          <Text textStyle='description' color='text.gray'>
            I'm a software developer based in Armenia, specializing in frontend
            development with React, Next.js, and TypeScript. I'm also adaptable
            and experienced with a wide range of tools, and I can comfortably
            contribute to backend development using Node.js.
          </Text>
          <Text textStyle='description' color='text.gray'>
            I'm currently seeking new opportunities and I'd love to connect and
            explore how I can contribute and make a valuable impact on your
            team.
          </Text>
          <Link
            to='https://www.linkedin.com/in/tigran-balayan-dev/'
            target='_blank'
          >
            <Button mt='md'>Connect</Button>
          </Link>
        </Flex>
        <Flex flex='1' flexDir='column' gap='md'>
          <Flex flexDir='column' gap='sm'>
            <Text textStyle='textBigPoetsen' color='text.white'>
              Frontend Skills
            </Text>
            <Flex gap='sm'>
              <Tag.Root gap='md' display='flex'>
                <Tag.Label>React</Tag.Label>
              </Tag.Root>
              <Tag.Root gap='md' display='flex'>
                <Tag.Label>NextJS</Tag.Label>
              </Tag.Root>
              <Tag.Root gap='md' display='flex'>
                <Tag.Label>Typescript</Tag.Label>
              </Tag.Root>
              <Tag.Root gap='md' display='flex'>
                <Tag.Label>SCSS</Tag.Label>
              </Tag.Root>
              <Tag.Root gap='md' display='flex'>
                <Tag.Label>Vite</Tag.Label>
              </Tag.Root>
            </Flex>
          </Flex>
          <Flex flexDir='column' gap='sm'>
            <Text textStyle='textBigPoetsen' color='text.white'>
              Frontend Frameworks
            </Text>
            <Flex gap='sm'>
              <Tag.Root gap='md' display='flex'>
                <Tag.Label>Tailwind</Tag.Label>
              </Tag.Root>
              <Tag.Root gap='md' display='flex'>
                <Tag.Label>MUI</Tag.Label>
              </Tag.Root>
              <Tag.Root gap='md' display='flex'>
                <Tag.Label>Chakra UI</Tag.Label>
              </Tag.Root>
              <Tag.Root gap='md' display='flex'>
                <Tag.Label>Daisy UI</Tag.Label>
              </Tag.Root>
            </Flex>
          </Flex>
          <Flex flexDir='column' gap='sm'>
            <Text textStyle='textBigPoetsen' color='text.white'>
              Backend Skills
            </Text>
            <Flex gap='sm'>
              <Tag.Root gap='md' display='flex'>
                <Tag.Label>Node JS</Tag.Label>
              </Tag.Root>
              <Tag.Root gap='md' display='flex'>
                <Tag.Label>Express</Tag.Label>
              </Tag.Root>
              <Tag.Root gap='md' display='flex'>
                <Tag.Label>PHP</Tag.Label>
              </Tag.Root>
            </Flex>
          </Flex>
          <Flex flexDir='column' gap='sm'>
            <Text textStyle='textBigPoetsen' color='text.white'>
              Databases
            </Text>
            <Flex gap='sm'>
              <Tag.Root gap='md' display='flex'>
                <Tag.Label>MySQL</Tag.Label>
              </Tag.Root>
              <Tag.Root gap='md' display='flex'>
                <Tag.Label>PostgreSQL</Tag.Label>
              </Tag.Root>
            </Flex>
          </Flex>
        </Flex>
      </ScrollAnimation>
    </Flex>
  )
}
