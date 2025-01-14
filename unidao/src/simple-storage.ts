import {
  NumberStored as NumberStoredEvent,
  PersonAdded as PersonAddedEvent
} from "../generated/Simple_Storage/Simple_Storage"
import { NumberStored, PersonAdded } from "../generated/schema"

export function handleNumberStored(event: NumberStoredEvent): void {
  let entity = new NumberStored(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.favoriteNumber = event.params.favoriteNumber

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePersonAdded(event: PersonAddedEvent): void {
  let entity = new PersonAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.name = event.params.name
  entity.favoriteNumber = event.params.favoriteNumber

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
