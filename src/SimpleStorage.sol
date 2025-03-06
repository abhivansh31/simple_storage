// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SimpleStorage {
    uint256 myFavoriteNumber;

    struct Person {
        uint256 favoriteNumber;
        string name;
    }
    Person[] public listOfPeople;

    mapping(string => uint256) public nameToFavoriteNumber;

    event NumberStored(uint256 favoriteNumber);
    event PersonAdded(string name, uint256 favoriteNumber);

    function store(uint256 _favoriteNumber) public {
        myFavoriteNumber = _favoriteNumber;

        emit NumberStored(_favoriteNumber);
    }

    function retrieve() public view returns (uint256) {
        return myFavoriteNumber;
    }

    function addPerson(string memory _name, uint256 _favoriteNumber) public {
        listOfPeople.push(Person(_favoriteNumber, _name));
        nameToFavoriteNumber[_name] = _favoriteNumber;

        emit PersonAdded(_name, _favoriteNumber);
    }
}
