export function roomCountToBit (doubleRoomCount, tripleRoomCount, quadrupleRoomCount) {
  return doubleRoomCount | tripleRoomCount << 5 | quadrupleRoomCount << 10;
}

export function bitToRoomCount (roomBit) {
  let doubleRoomMask = 31; // 11111
  let tripleRoomMask = 992; // 1111100000
  let quadrupleRoomMask = 31744; // 111110000000000
  let roomCount = [];
  roomCount.push(roomBit & doubleRoomMask);
  roomCount.push((roomBit & tripleRoomMask) >> 5);
  roomCount.push((roomBit & quadrupleRoomMask) >> 10);
  return roomCount;
}
