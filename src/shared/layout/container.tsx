import { Box, type BoxProps } from '@chakra-ui/react'

type ContainerVariant = 'desktopHeader' | 'desktopContent'

interface CustomContainerProps extends BoxProps {
  variant: ContainerVariant
}

export const CustomContainer = ({
  variant,
  children,
  ...rest
}: CustomContainerProps) => {
  const maxWidths = {
    desktopHeader: '1280px',
    desktopContent: '1020px',
  }

  const widths = {
    desktopHeader: {
      desktop: 'calc(100% - 32px)',
      laptop: 'calc(100% - 64px)',
      tablet: 'calc(100% - 64px)',
      mobile: 'calc(100% - 64px)',
      base: 'calc(100% - 40px)',
    },
    desktopContent: {
      desktop: 'calc(100% - 32px)',
      laptop: 'calc(100% - 64px)',
      tablet: 'calc(100% - 64px)',
      mobile: 'calc(100% - 64px)',
      base: 'calc(100% - 40px)',
    },
  }

  return (
    <Box w={widths[variant]} maxW={maxWidths[variant]} {...rest}>
      {children}
    </Box>
  )
}
