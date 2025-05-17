import { defineRecipe } from '@chakra-ui/react'

export const recipes = {
  button: defineRecipe({
    variants: {
      variant: {
        primary: {
          w: 'fit-content',
          h: '44px',
          bg: 'purple.primary',
          color: 'white.primary',
          textAlign: 'center',
          textStyle: 'button',
          borderRadius: '4px',
        },
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }),
}
