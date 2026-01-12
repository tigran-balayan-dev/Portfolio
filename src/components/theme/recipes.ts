import { defineRecipe } from '@chakra-ui/react'

export const recipes = {
  button: defineRecipe({
    variants: {
      variant: {
        primary: {
          w: 'fit-content',
          h: '44px',
          bg: 'background.purple',
          border: '2px solid var(--chakra-colors-background-purple)',
          color: 'text.white',
          textAlign: 'center',
          textStyle: 'button',
          borderRadius: 'md',
          _hover: {
            bg: 'transparent',
          },
        },
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }),
  input: defineRecipe({
    variants: {
      variant: {
        primary: {
          w: '100%',
          h: '44px',
          bg: 'background.gray.light',
          border: '2px solid var(--chakra-colors-background-gray-light)',
          color: 'text.white',
          textStyle: 'button',
          borderRadius: 'md',
          _hover: {
            bg: 'background.gray.dark',
          },
          _focus: {
            bg: 'background.gray.dark',
          },
        },
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }),
  textarea: defineRecipe({
    variants: {
      variant: {
        primary: {
          w: '100%',
          h: '150px',
          bg: 'background.gray.light',
          border: '2px solid var(--chakra-colors-background-gray-light)',
          color: 'text.white',
          textStyle: 'button',
          borderRadius: 'md',
          resize: 'none',
          _hover: {
            bg: 'background.gray.dark',
          },
          _focus: {
            bg: 'background.gray.dark',
          },
        },
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }),
}
