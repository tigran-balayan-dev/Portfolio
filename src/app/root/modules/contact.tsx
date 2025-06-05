import { Button, Field, Flex, Input, Text, Textarea } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import EmailIcon from 'assets/icons/email'
import LinkedInIcon from 'assets/icons/linkedin'
import { toaster } from 'components/ui/toaster'
import { PostContactFormSchema, postContactForm } from 'core/api/form'
import { useScrollpoints } from 'core/context/scrollPoints'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { ScrollAnimation } from 'shared/hooks/framerMotion'
import { z } from 'zod'

export default function Contact() {
  const scrollpoints = useScrollpoints()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof PostContactFormSchema>>({
    resolver: zodResolver(PostContactFormSchema),
  })

  const handleSubmitForm = handleSubmit(async (data) => {
    const res = await postContactForm(data)

    if (res.success) {
      scrollpoints.firstScreen.current?.scrollIntoView({ behavior: 'smooth' })
      toaster.create({
        title: `Email successfully sent!`,
        type: 'success',
      })
      reset()
    } else {
      toaster.create({
        title: `Something went wrong. Please try again later.`,
        type: 'error',
      })
    }
  })

  return (
    <Flex
      ref={scrollpoints.contact}
      flexDir='column'
      gap={{ base: 'lg', tablet: 'xl' }}
    >
      <ScrollAnimation justifyContent='center'>
        <Text
          textStyle='headerBigPoetsen'
          color='text.white'
          textAlign='center'
        >
          Contact
        </Text>
      </ScrollAnimation>
      <Flex
        flexDir={{ base: 'column', laptop: 'row' }}
        justifyContent='space-between'
        gap='lg'
      >
        <Flex flex='1' flexDir='column' gap='lg'>
          <ScrollAnimation as={Text} textStyle='description' color='text.gray'>
            I'd be happy to connect! Feel free to reach out for project
            inquiries, collaboration opportunities, or any other questions you
            may have.
          </ScrollAnimation>
          <Flex flexDir='column' gap='lg'>
            <ScrollAnimation gap='md'>
              <Link to='mailto:tigran.balayan.u@gmail.com'>
                <Flex
                  w='40px'
                  h='40px'
                  bg='background.purple'
                  borderRadius='md'
                  alignItems='center'
                  justifyContent='center'
                >
                  <EmailIcon
                    width='24px'
                    height='24px'
                    color='var(--chakra-colors-text-white)'
                  />
                </Flex>
              </Link>
              <Flex flexDir='column'>
                <Link
                  to='mailto:tigran.balayan.u@gmail.com'
                  style={{ width: 'fit-content' }}
                >
                  <Text textStyle='text' color='text.white'>
                    Email
                  </Text>
                </Link>
                <Text textStyle='description' color='text.gray'>
                  tigran.balayan.u@gmail.com
                </Text>
              </Flex>
            </ScrollAnimation>

            <ScrollAnimation gap='md'>
              <Link
                to='https://www.linkedin.com/in/tigran-balayan-dev/'
                target='_blank'
              >
                <Flex
                  w='40px'
                  h='40px'
                  bg='background.purple'
                  borderRadius='md'
                  alignItems='center'
                  justifyContent='center'
                >
                  <LinkedInIcon
                    width='24px'
                    height='24px'
                    color='var(--chakra-colors-text-white)'
                  />
                </Flex>
              </Link>
              <Flex flexDir='column'>
                <Link
                  to='https://www.linkedin.com/in/tigran-balayan-dev/'
                  target='_blank'
                  style={{ width: 'fit-content' }}
                >
                  <Text textStyle='text' color='text.white'>
                    LinkedIn
                  </Text>
                </Link>
                <Text textStyle='description' color='text.gray'>
                  @tigran-balayan-dev
                </Text>
              </Flex>
            </ScrollAnimation>
          </Flex>
        </Flex>
        <Flex flex='1' flexDir='column'>
          <Flex flexDir='column' gap='lg'>
            <ScrollAnimation>
              <Field.Root required>
                <Field.Label>
                  <Text
                    textStyle='description'
                    fontWeight='semibold'
                    color='text.gray'
                  >
                    Email
                  </Text>
                </Field.Label>
                <Input
                  {...register('email', { required: true })}
                  variant='primary'
                  placeholder='Enter your email'
                />
                {errors.email && (
                  <Text textStyle='description' color='text.error'>
                    {errors.email?.message}
                  </Text>
                )}
              </Field.Root>
            </ScrollAnimation>
            <ScrollAnimation>
              <Field.Root required>
                <Field.Label>
                  <Text
                    textStyle='description'
                    fontWeight='semibold'
                    color='text.gray'
                  >
                    Subject
                  </Text>
                </Field.Label>
                <Input
                  {...register('subject', { required: true })}
                  variant='primary'
                  placeholder='Subject'
                />
                {errors.subject && (
                  <Text textStyle='description' color='text.error'>
                    {errors.subject?.message}
                  </Text>
                )}
              </Field.Root>
            </ScrollAnimation>
            <ScrollAnimation>
              <Field.Root required>
                <Field.Label>
                  <Text
                    textStyle='description'
                    fontWeight='semibold'
                    color='text.gray'
                  >
                    Message
                  </Text>
                </Field.Label>
                <Textarea
                  {...register('message', { required: true })}
                  variant='primary'
                  placeholder='Message'
                />
                {errors.message && (
                  <Text textStyle='description' color='text.error'>
                    {errors.message?.message}
                  </Text>
                )}
              </Field.Root>
            </ScrollAnimation>
            <ScrollAnimation>
              <Button
                px='xl'
                onClick={() => {
                  handleSubmitForm()
                }}
              >
                Send
              </Button>
            </ScrollAnimation>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
