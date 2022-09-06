// log
import store from "../store";
import Web3 from "web3";
import Web3EthContract from "web3-eth-contract";


const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload,
  };
};

export const totalSupply = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const { ethereum } = window;
      let web3 = new Web3(ethereum);
      Web3EthContract.setProvider(ethereum);

      const configResponse = await fetch("/config/testConfig.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const CONFIG = await configResponse.json();
      const abiResponse = await fetch("/config/abi.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const abi = await abiResponse.json();
      const SmartContractObj = new Web3EthContract(
        abi,
        CONFIG.CONTRACT_ADDRESS
      );
      let totalSupply =  await SmartContractObj.methods.totalSupply().call();
      dispatch(
        fetchDataSuccess({
          totalSupply,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
}

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      let totalSupply = await store
        .getState()
        .blockchain.smartContract.methods.totalSupply()
        .call();
      // let cost = await store
      //   .getState()
      //   .blockchain.smartContract.methods.cost()
      //   .call();

      dispatch(
        fetchDataSuccess({
          totalSupply,
          // cost,
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};
