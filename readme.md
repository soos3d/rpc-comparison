# RPC comparison

A simple app that compares the RPC performance in terms of latency for Ankr, Alchemy and Infura. The current version of the app pings the `eth_getBlockNumber` endpoint for the Ethereum mainnet RPCs.

You can verify these results in your browser's network tab. The
response times showing up on this page currently are a bit slower than
they actually are, but they are slower for all three providers so this
still gives you an accurate picture about the order of the providers
in terms of speed. Working on a fix!

## Quickstart

1. Clone this repository
1. Run `npm install` in the root directory
1. Rename `.env.example` to `.env`
1. Add your API keys
    * For Chainstack add the full node identifier + API key: `nd-123-456-789.p2pify.com/API_KEY`
1. Run `npm run dev` from your console, the page is now running on `http://localhost:3000/`