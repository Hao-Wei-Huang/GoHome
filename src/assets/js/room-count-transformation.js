export default {
  encode (doubleRoomCount, tripleRoomCount, quadrupleRoomCount) {
    return doubleRoomCount | tripleRoomCount << 5 | quadrupleRoomCount << 10
  },
  decode (roomCountBits) {
    const doubleRoomMask = 31 // 11111
    const tripleRoomMask = 992 // 1111100000
    const quadrupleRoomMask = 31744 // 111110000000000
    const roomCount = {}
    roomCount.doubleRoomCount = roomCountBits & doubleRoomMask
    roomCount.tripleRoomCount = (roomCountBits & tripleRoomMask) >> 5
    roomCount.quadrupleRoomCount = (roomCountBits & quadrupleRoomMask) >> 10
    roomCount.total = roomCount.doubleRoomCount + roomCount.tripleRoomCount + roomCount.quadrupleRoomCount
    return roomCount
  }
}
