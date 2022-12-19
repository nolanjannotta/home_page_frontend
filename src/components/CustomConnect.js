import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import styled from 'styled-components'
import {
    useConnectModal,
    useAccountModal,
  } from '@rainbow-me/rainbowkit';
  import {ButtonConnect, Button} from "../styles"

  
function CustomConnect() {
    const { openConnectModal } = useConnectModal();
    const { openAccountModal } = useAccountModal();
  

  return (
    <>
      {openConnectModal && (
        <ButtonConnect onClick={openConnectModal} type="button">
          𝒸𝑜𝓃𝓃𝑒𝒸𝓉 𝓌𝒶𝓁𝓁𝑒𝓉
        </ButtonConnect>
      )}

      {openAccountModal && (
        <ButtonConnect onClick={openAccountModal} type="button">
          𝓂𝒶𝓃𝒶𝑔𝑒 𝒶𝒸𝒸𝑜𝓊𝓃𝓉
        </ButtonConnect>
      )}

      {/* {openChainModal && (
        <Button onClick={openChainModal} type="button">
          Open Chain Modal
        </Button>
      )} */}
    </>
  )
}

export default CustomConnect





