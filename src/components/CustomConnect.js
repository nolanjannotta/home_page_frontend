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
          πΈπππππΈπ ππΆππππ
        </ButtonConnect>
      )}

      {openAccountModal && (
        <ButtonConnect onClick={openAccountModal} type="button">
          ππΆππΆππ πΆπΈπΈππππ
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





