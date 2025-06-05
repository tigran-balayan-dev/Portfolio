import {
  type ReactNode,
  type RefObject,
  createContext,
  useContext,
  useRef,
} from 'react'

import { useBreakpointValue } from '@chakra-ui/react'
import { tokens } from 'components/theme/tokens'

export type ScrollPointRefsProps = {
  firstScreen: RefObject<HTMLDivElement>
  about: RefObject<HTMLDivElement>
  work: RefObject<HTMLDivElement>
  contact: RefObject<HTMLDivElement>
}
export type ScrollpointsContextType = ScrollPointRefsProps & {
  scrollTo: (name: 'firstScreen' | 'about' | 'work' | 'contact') => void
}

const ScrollpointsContext = createContext<ScrollpointsContextType | null>(null)

export default function ScrollpointsProvider({
  children,
}: {
  children: ReactNode
}) {
  const componentsGap: '2xl' | '3xl' | '4xl' =
    useBreakpointValue({
      base: '2xl',
      mobile: '3xl',
      tablet: '4xl',
    }) ?? '4xl'

  const scrollPointRefs = {
    firstScreen: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    work: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  }

  const scrollTo = (name: 'firstScreen' | 'about' | 'work' | 'contact') => {
    let element
    let topOffset =
      Number(tokens.spacing[componentsGap]?.value?.replace('px', '')) / 2

    switch (name) {
      case 'firstScreen': {
        topOffset = 0
        element = scrollPointRefs.firstScreen
        break
      }
      case 'about': {
        element = scrollPointRefs.about
        break
      }
      case 'work': {
        element = scrollPointRefs.work
        break
      }
      case 'contact': {
        element = scrollPointRefs.contact
        break
      }
      default: {
        topOffset = 0
        element = scrollPointRefs.firstScreen
      }
    }

    if (element.current) {
      const elementPosition =
        element.current?.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - topOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  const value = { ...scrollPointRefs, scrollTo }

  return (
    <ScrollpointsContext.Provider value={value}>
      {children}
    </ScrollpointsContext.Provider>
  )
}

export const useScrollpoints = () => {
  const context = useContext(ScrollpointsContext)

  if (context === null) {
    throw new Error("useScrollpoints can't be null")
  }

  return context
}
