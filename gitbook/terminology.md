# 💡 Terminology

### Blockchain

The blockchain used for settlement is [Near Protocol](https://near.org). It has been chosen due to its sharded architecture, low transaction fees and fast settlement/block finalization.\
A blockchain is a public ledger and all transactions can be investigated in an [explorer](https://explorer.near.org/), however it is also possible to encrypt the data, that is processed during a transaction to prevent external investigation.

### Block

Blocks are produced by the blockchain in a nearly constant time at around one second. This is ensured by the blockchains design, because the computations done in a single block cannot exceed 1,000 [TeraGas](terminology.md#gas). A block contains information about which transactions have been processed.

### Node

The blockchain is a decentralized ledger that consists of computers distributed around the world that run the node software, which is capable of connecting to the blockchain. In short these computers can be called nodes.\
There are different types of nodes, which serve different purposes. In the case of Near Protocol there are so called validators, which ensure that the blocks produced by the software meet a joint agreement across all nodes and that no bad actor can alter the state of the blockchain. Then there are also Remote Procedure Call (RPC) nodes, which can read and broadcast data to the blockchain and serve as an entrypoint for users and applications.

### Addresses

Users and programs of the blockchain are represented via addresses. Such addresses on Near Protocol are human readable (unlike Ethereum Virtual Machine compatible blockchains, where an address is a base64 encoded 20 bytes hash). This makes it easier to identify users and programs. Addresses are often also referred to as wallets.\
An example of an address would be `walc.near`. An address on Near Protocol can also have sub-addresses, that are composed similar to a domain - subdomain relation, so we could e.g. create a sub-address `rtp.walc.near`. Sub-addresses are only convenient due to its naming convention, but they don't have any other relationship with their parent address and are entirely controlled by their own access keys.

### Access Keys

An access key is used to sign transactions for a specific address. Every address can have an unlimited amount of access keys, that are connected to it. When creating a new address a single full access key is added to that address, which allows signing transactions. It is possible to add additional access keys to that address.\
There is a distinction between function-call access keys and full access keys. A full access key is basically a private key, that gives full access to an address. A function-call access key is limited to be only able to call specific functions on a Smart Contract. It also only has limited amount of Gas that can be used until it is fully depleted.

### Smart Contract

Programs that are executed on the blockchain are called Smart Contracts (SCs). A SC on Near Protocol can be deployed on any address, so there is no distinction between user addresses and program addresses. Every address and therefore every SC has a state, that can be altered by calling a function of that SC. SC function calls that can alter state are also called transactions.\
\
The current RTP PoC is deployed on the address "[rtp\_staging\_v2.testnet](https://testnet.nearblocks.io/address/rtp\_staging\_v2.testnet)".

#### Events

A transaction can also write log messages to the blockchain. If those log messages use a standardized format they are called events and can be easier deserialized by programs that read blockchain data.

### Gas

Gas is the unit in which computational power required to execute a Smart Contract is measured. Gas is paid via the NEAR token which is the cryptocurrency, that secures the Near Protocol blockchain. NEAR has a monetary value, which makes executing SCs not free, but there is also the concept of "view functions", which are read-only functions, that cannot alter the SCs state and are free to execute.
