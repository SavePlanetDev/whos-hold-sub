import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import { useState, useEffect } from 'react';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
          [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
          [publicProvider()]

        );
        
        const { connectors } = getDefaultWallets({
          appName: 'My RainbowKit App',
          chains
        });
        
        const wagmiClient = createClient({
          autoConnect: true,
          connectors,
          provider
        })



function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
          setShowChild(true);
        }, []);
      
        if (!showChild) {
          return null;
        }
      
        if (typeof window === 'undefined') {
          return <></>;
        } else {


  return (
          <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
            <Component {...pageProps} />
            </RainbowKitProvider>
          </WagmiConfig>
        );
  
  
          }
}

export default MyApp
