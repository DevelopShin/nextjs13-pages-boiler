import { ThemeProvider as NextThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import GlobalStyles from '@/styles/GlobalStyles';
import '@/styles/default.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<NextThemeProvider attribute='class' defaultTheme='dark'>
			<GlobalStyles />
			<Component {...pageProps} />
		</NextThemeProvider>
	);
}
