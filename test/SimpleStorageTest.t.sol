//SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {SimpleStorage} from "../src/SimpleStorage.sol";
import {Test, console} from "forge-std/Test.sol";

contract SimpleStorageTest is Test {

    SimpleStorage public _storage;

    function setUp() external {
        _storage = new SimpleStorage();
    }

    function test_store() public {
        _storage.store(10);
        uint256 favoriteNumber = _storage.retrieve();
        assertEq(favoriteNumber, 10);
    }

    function test_addPerson() public {
        _storage.addPerson("Alice", 10);
        uint256 favoriteNumber = _storage.nameToFavoriteNumber("Alice");
        assertEq(favoriteNumber, 10);
    }
}