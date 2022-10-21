## Aragon Core

###  contract `IMerkleDistributor`

####  event `Claimed`

Emitted when tokens are claimed from the distributor.

```solidity
event Claimed(uint256 index, address to, uint256 amount) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| index | uint256 | The index in the balance tree that was claimed. |
| to | address | The address to which the tokens are send. |
| amount | uint256 | The claimed amount. |

#### external function `token`

The [ERC-20](https://eips.ethereum.org/EIPS/eip-20) token to be distributed.

```solidity
function token() external returns (contract IERC20Upgradeable) 
```

#### external function `merkleRoot`

The merkle root of the balance tree storing the claims.

```solidity
function merkleRoot() external returns (bytes32) 
```

#### external function `initialize`

Initializes the plugin.

```solidity
function initialize(contract IDAO _dao, contract IERC20Upgradeable _token, bytes32 _merkleRoot) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _dao | contract IDAO | The IDAO interface of the associated DAO. |
| _token | contract IERC20Upgradeable | A mintable [ERC-20](https://eips.ethereum.org/EIPS/eip-20) token. |
| _merkleRoot | bytes32 | The merkle root of the balance tree. |

*This method is required to support [ERC-1822](https://eips.ethereum.org/EIPS/eip-1822).*

#### external function `claim`

Claims tokens from the balance tree and sends it to an address.

```solidity
function claim(uint256 _index, address _to, uint256 _amount, bytes32[] _proof) external 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _index | uint256 | The index in the balance tree to be claimed. |
| _to | address | The receiving address. |
| _amount | uint256 | The amount of tokens. |
| _proof | bytes32[] | The merkle proof to be verified. |

#### external function `unclaimedBalance`

Returns the amount of unclaimed tokens.

```solidity
function unclaimedBalance(uint256 _index, address _to, uint256 _amount, bytes32[] _proof) external returns (uint256) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _index | uint256 | The index in the balance tree to be claimed. |
| _to | address | The receiving address. |
| _amount | uint256 | The amount of tokens. |
| _proof | bytes32[] | The merkle proof to be verified. |
| **Output** | |
| [0] | uint256 | The unclaimed amount. |

#### external function `isClaimed`

Checks if an index on the merkle tree is claimed.

```solidity
function isClaimed(uint256 _index) external view returns (bool) 
```

| Input | Type | Description |
|:----- | ---- | ----------- |
| _index | uint256 | The index in the balance tree to be claimed. |
| **Output** | |
| [0] | bool | True if the index is claimed. |
