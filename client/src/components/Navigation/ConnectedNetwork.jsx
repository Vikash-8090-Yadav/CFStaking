import { useContext } from "react"
import Web3Context from "../../context/Web3Context"

const ConnectedNetwork = ()=>{
   const {chainId}=useContext(Web3Context);
   if(chainId===null){
      return <p className="network">Not connected</p>;
   }
   else if (chainId === 71) {
      return <p className="network">Esapce testnet</p>;
    } else {
      return <p className="network"> Network Not Detected</p>;
    }
}
export default ConnectedNetwork