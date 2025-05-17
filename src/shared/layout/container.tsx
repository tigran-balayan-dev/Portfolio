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
    desktopHeader: '1440px',
    desktopContent: 'unset',
  }

  const widths = {
    desktopHeader: {
      mobile: 'calc(100% - 32px)',
      desktop: 'calc(100% - 64px)',
    },
    desktopContent: {
      mobile: 'calc(100% - 32px)',
      desktop: 'calc(100% - 64px)',
    },
  }

  return (
    <Box w={widths[variant]} maxW={maxWidths[variant]} {...rest}>
      {children}
    </Box>
  )
}
