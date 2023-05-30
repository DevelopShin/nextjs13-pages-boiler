// src/styles/GlobalStyles.tsx
import React from "react";
import { createGlobalStyle, css } from "styled-components";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";
import { useTheme } from "next-themes";

const CustomStyles = createGlobalStyle<{ dark?: "dark" | "right" }>`
  body {
		-webkit-tap-highlight-color: ${theme`colors.purple.100`};
    ${{ ...tw`antialiased` }}
		${(props) => {
      if (props.dark === "dark") {
        return css`
					body {background-color: '#000';
					color:'#ffffff'}
					`;
      } else {
        return css`
					body {background-color: '#ffffff';
					color:'#000000'}
					`;
      }
    }}}
`;

// const CustomStyles = createGlobalStyle({
//   body: {
//     WebkitTapHighlightColor: theme`colors.purple.100`,
//     ...tw`antialiased`,
//   },
// });

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
