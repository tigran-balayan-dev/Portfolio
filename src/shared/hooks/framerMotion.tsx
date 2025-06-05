import { ReactNode, useRef } from 'react'

import { Flex, type FlexProps } from '@chakra-ui/react'
import { motion, useInView } from 'framer-motion'

interface ScrollAnimationProps extends FlexProps {
  children: ReactNode
}

export const ScrollAnimation = ({
  children,
  ...rest
}: ScrollAnimationProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20px' })

  const defaultAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, ease: 'easeOut' },
  }

  return (
    <motion.div
      ref={ref}
      initial={defaultAnimation.initial}
      animate={defaultAnimation.animate}
      transition={defaultAnimation.transition}
    >
      <Flex {...rest}>{children}</Flex>
    </motion.div>
  )
}
