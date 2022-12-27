import { ethers } from 'ethers';

export const createAnkrProvider = () => {
  return new ethers.providers.JsonRpcProvider('https://rpc.ankr.com/eth');
};

export const createAlchemyProvider = () => {
  return new ethers.providers.JsonRpcProvider(
    `https://eth-mainnet.alchemyapi.io/v2/${import.meta.env.VITE_ALCHEMY_ID}`
  );
};

export const createInfuraProvider = () => {
  return new ethers.providers.JsonRpcProvider(
    `https://mainnet.infura.io/v3/${import.meta.env.VITE_INFURA_ID}`
  );
};

export const createChainstackProvider = () => {
  return new ethers.providers.JsonRpcProvider(
    `https://${import.meta.env.VITE_CHAINSTACK}`
  );
};

export interface EndpointWithTimeResponse {
  [key: string]: number;
  responseTime: number;
}

export const hitEndpointWithResponseTime = async (
  provider: ethers.providers.Provider,
  endpoint: string
): Promise<EndpointWithTimeResponse> => {

  // Change the rounds constant to run the test more or less times
  const rounds = 20;
  let time = 0;
  let responses = []


  for (let round = 0; round < rounds; round++) {
    const start = window.performance.now();
    // @ts-expect-error
    await provider[endpoint]!();
    const end = window.performance.now();

    const result = end - start;
    console.log(`Request number ${round}: ${result}`)

    // Add each response time to the array
    responses.push(result)

    // Sum the total time so far
    time += result;
    //console.log(time)
  }

  // Isolate the first call of the sequence
  const firstCall = responses[0]

  // Calculate the average removing the first call
  const average = Math.round((time - firstCall) / (rounds -1));
    return {
      responseTime: average,
    };

};

export const getBlockNumberWithResponseTime = async (
  provider: ethers.providers.Provider
) => {
  const start = window.performance.now();
  const blockNumber = await provider.getBlockNumber();
  const end = window.performance.now();
  return {
    blockNumber,
    responseTime: Math.round(end - start),
  };
};

/*
export const hitEndpointWithResponseTime = async (
  provider: ethers.providers.Provider,
  endpoint: string
): Promise<EndpointWithTimeResponse> => {
  const start = window.performance.now();
  // @ts-expect-error
  const blockNumber = await provider[endpoint]!();
  const end = window.performance.now();
  return {
    blockNumber,
    responseTime: Math.round(end - start),
  };
};

export const getBlockNumberWithResponseTime = async (
  provider: ethers.providers.Provider
) => {
  const start = window.performance.now();
  const blockNumber = await provider.getBlockNumber();
  const end = window.performance.now();
  return {
    blockNumber,
    responseTime: Math.round(end - start),
  };
};


 */