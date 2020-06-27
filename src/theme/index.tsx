import styled, { CreateStyled } from "@emotion/styled"

export const AppTheme = {
  colors: {
    //   add colors
    primary: "#00007D",
  },
}

type Theme = {
  colors: {
    primary: string
  }
  // ...
}

export default styled as CreateStyled<Theme>
