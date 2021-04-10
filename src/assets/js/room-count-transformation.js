export default {
  encode (room) {
    // Five bits stand for the count of a type room.
    return room.doubleRoomCount | room.tripleRoomCount << 5 | room.quadrupleRoomCount << 10
  },
  decode (roomCountBits) {
    const doubleRoomMask = 31 // 11111
    const tripleRoomMask = 992 // 11111 00000
    const quadrupleRoomMask = 31744 // 11111 00000 00000
    const room = {}
    room.doubleRoomCount = roomCountBits & doubleRoomMask
    room.tripleRoomCount = (roomCountBits & tripleRoomMask) >> 5
    room.quadrupleRoomCount = (roomCountBits & quadrupleRoomMask) >> 10
    room.total = room.doubleRoomCount + room.tripleRoomCount + room.quadrupleRoomCount
    return room
  }
}
