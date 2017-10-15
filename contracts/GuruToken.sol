pragma solidity ^0.4.11;

import '../node_modules/zeppelin-solidity/contracts/token/MintableToken.sol';

contract GuruToken is MintableToken {
    // metadata
    string public name = "Guru Token";
    string public symbol = "GURU";
    uint256 public decimals = 18;
}