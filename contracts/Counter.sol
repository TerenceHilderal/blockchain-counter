//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
    uint256 public counter;

    function incrementCounterByOne() external {
        counter += 1;
    }

    function decrementCounterByOne() external {
        counter -= 1;
    }

    function getCounter() public view returns (uint256) {
        return counter;
    }
}
