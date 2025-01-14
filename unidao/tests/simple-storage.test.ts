import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { NumberStored } from "../generated/schema"
import { NumberStored as NumberStoredEvent } from "../generated/Simple_Storage/Simple_Storage"
import { handleNumberStored } from "../src/simple-storage"
import { createNumberStoredEvent } from "./simple-storage-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let favoriteNumber = BigInt.fromI32(234)
    let newNumberStoredEvent = createNumberStoredEvent(favoriteNumber)
    handleNumberStored(newNumberStoredEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("NumberStored created and stored", () => {
    assert.entityCount("NumberStored", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "NumberStored",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "favoriteNumber",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
