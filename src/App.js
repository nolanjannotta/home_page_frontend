import './App.css';
import Main from './components/Main';
import Page from './components/Page';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import '@rainbow-me/rainbowkit/styles.css';
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
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';


const _homePage =  "0x2538a10b7fFb1B78c890c870FC152b10be121f04"
const _contentStore = "0x707531c9999AaeF9232C8FEfBA31FBa4cB78d84a"



const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum, chain.foundry],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Home page',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})


function App() {
  
  return (
    <div className="App">
      <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Main />} />
          <Route path="/:id" element={<Page homePage={_homePage}></Page>} />
        </Routes>
        </BrowserRouter>
      </RainbowKitProvider>
    </WagmiConfig>
      
      
    </div>
  );
}

export default App;
