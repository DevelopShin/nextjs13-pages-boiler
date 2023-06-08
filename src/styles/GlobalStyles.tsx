// src/styles/GlobalStyles.tsx
import React from 'react';
import { createGlobalStyle, css } from 'styled-components';
import tw, { GlobalStyles as BaseStyles, theme } from 'twin.macro';

// src/styles/default.css in css default properties
const CustomStyles = createGlobalStyle`
	body {
		-webkit-tap-highlight-color: ${theme`colors.purple.100`};
		${{ ...tw`antialiased` }};
  }

`;

function GlobalStyles() {
	return (
		<>
			<BaseStyles />
			<CustomStyles />
		</>
	);
}

export default GlobalStyles;
