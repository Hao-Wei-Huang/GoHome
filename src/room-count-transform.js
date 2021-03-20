export function roomCountToBit (doubleRoomCount, tripleRoomCount, quadrupleRoomCount) {
  return doubleRoomCount | tripleRoomCount << 5 | quadrupleRoomCount << 10
}

export function bitToRoomCount (roomBit) {
  const doubleRoomMask = 31 // 11111
  const tripleRoomMask = 992 // 1111100000
  const quadrupleRoomMask = 31744 // 111110000000000
  const roomCount = {}
  roomCount.doubleRoomCount = roomBit & doubleRoomMask
  roomCount.tripleRoomCount = (roomBit & tripleRoomMask) >> 5
  roomCount.quadrupleRoomCount = (roomBit & quadrupleRoomMask) >> 10
  roomCount.total = roomCount.doubleRoomCount + roomCount.tripleRoomCount + roomCount.quadrupleRoomCount
  return roomCount
}
