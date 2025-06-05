import { Flex, Grid, Image, Text } from '@chakra-ui/react'
import RightIcon from 'assets/icons/right'
import AbstractSecurityImage from 'assets/images/abstractSecurity.png'
import ClarityNetworksImage from 'assets/images/clarityNetworks.png'
import CrazytelImage from 'assets/images/crazytel.png'
import UrbanSDKImage from 'assets/images/urbansdk.png'
import { useScrollpoints } from 'core/context/scrollPoints'
import { Link } from 'react-router-dom'
import { ScrollAnimation } from 'shared/hooks/framerMotion'

import css from './work.module.scss'

export default function Work() {
  const scrollpoints = useScrollpoints()

  const jobs = [
    {
      title: 'Clarity Networks',
      description:
        'Clarity Networks is a wholesale telecommunications provider offering global voice services, SMS, phone numbers (DIDs), and virtual mobile numbers. Our network supports ISPs, RSPs, UCaaS, and CPaaS providers with scalable, secure, and high-performance solutions.',
      img: ClarityNetworksImage,
      link: 'https://claritynetworks.io/',
    },
    {
      title: 'Crazytel',
      description:
        'Crazytel is an VoIP provider delivering communication solutions for businesses. Crazytel offers SIP trunking, hosted PBX, and virtual numbers, with data centers across Australia, New Zealand, and the U.S., Crazytel ensures high uptime and great call quality.',
      img: CrazytelImage,
      link: 'https://crazytel.com.au/',
    },
    {
      title: 'Abstract Security',
      description:
        'Abstract Security is a next-generation cybersecurity platform designed to streamline and enhance security data operations. It offers real-time data streaming, AI-driven threat detection, and seamless integration with major cloud providers and SIEM systems.',
      img: AbstractSecurityImage,
      link: 'https://www.abstract.security/',
    },
    {
      title: 'UrbanSDK',
      description:
        'Urban SDK is a geospatial AI platform providing real-time traffic analytics, collision risk assessments, and customizable dashboards. Urban SDK enables smarter, data-driven decisions for public safety, transportation, and emergency response.',
      img: UrbanSDKImage,
      link: 'https://www.urbansdk.com/',
    },
  ]

  return (
    <Flex
      ref={scrollpoints.work}
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
        Work
      </ScrollAnimation>

      <Grid
        gridTemplateColumns={{
          base: 'repeat(1, 1fr)',
          laptop: 'repeat(2, 1fr)',
        }}
        gap='lg'
      >
        {jobs?.map((job) => {
          return (
            <ScrollAnimation
              key={job?.description + job?.title + 35875}
              maxW='500px'
              h='100%'
              mx='auto'
              flexDir='column'
              justifyContent='space-between'
              p='lg'
              bg='background.gray.light'
              borderRadius='md'
              gap='lg'
            >
              <Flex flexDir='column' gap='sm'>
                <Text color='text.white' textStyle='textBigPoetsen'>
                  {job?.title}
                </Text>
                <Text color='text.gray' textStyle='description'>
                  {job?.description}
                </Text>
              </Flex>
              <Flex flexDir='column' gap='md'>
                <Image src={job?.img} borderRadius='sm' />
                <Link to={job?.link} target='_blank'>
                  <Flex
                    w='fit-content'
                    alignItems='center'
                    className={css.demo}
                  >
                    <Text
                      textStyle='text'
                      color='text.gray'
                      className={css.demoText}
                    >
                      Demo
                    </Text>
                    <RightIcon
                      className={css.demoIcon}
                      color='var(--chakra-colors-text-gray)'
                    />
                  </Flex>
                </Link>
              </Flex>
            </ScrollAnimation>
          )
        })}
      </Grid>
    </Flex>
  )
}
