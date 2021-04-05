export default {
  encode (room) {
    return room.doubleRoomCount | room.tripleRoomCount << 5 | room.quadrupleRoomCount << 10
  },
  decode (roomCountBits) {
    const doubleRoomMask = 31 // 11111
    const tripleRoomMask = 992 // 1111100000
    const quadrupleRoomMask = 31744 // 111110000000000
    const room = {}
    room.doubleRoomCount = roomCountBits & doubleRoomMask
    room.tripleRoomCount = (roomCountBits & tripleRoomMask) >> 5
    room.quadrupleRoomCount = (roomCountBits & quadrupleRoomMask) >> 10
    room.total = room.doubleRoomCount + room.tripleRoomCount + room.quadrupleRoomCount
    return room
  }
}
