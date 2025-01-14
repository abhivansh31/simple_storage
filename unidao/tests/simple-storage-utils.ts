import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import {
  NumberStored,
  PersonAdded
} from "../generated/Simple_Storage/Simple_Storage"

export function createNumberStoredEvent(favoriteNumber: BigInt): NumberStored {
  let numberStoredEvent = changetype<NumberStored>(newMockEvent())

  numberStoredEvent.parameters = new Array()

  numberStoredEvent.parameters.push(
    new ethereum.EventParam(
      "favoriteNumber",
      ethereum.Value.fromUnsignedBigInt(favoriteNumber)
    )
  )

  return numberStoredEvent
}

export function createPersonAddedEvent(
  name: string,
  favoriteNumber: BigInt
): PersonAdded {
  let personAddedEvent = changetype<PersonAdded>(newMockEvent())

  personAddedEvent.parameters = new Array()

  personAddedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  personAddedEvent.parameters.push(
    new ethereum.EventParam(
      "favoriteNumber",
      ethereum.Value.fromUnsignedBigInt(favoriteNumber)
    )
  )

  return personAddedEvent
}
