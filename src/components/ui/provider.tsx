'use client'

import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react'

import { breakpoints } from '../theme/breakpoints'
import { recipes } from '../theme/recipes'
import { textStyles } from '../theme/textStyles'
import { tokens } from '../theme/tokens'
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode'

export const system = createSystem(defaultConfig, {
  theme: {
    tokens,
    textStyles,
    recipes,
    breakpoints,
  },
})

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
