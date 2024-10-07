export default function createInt8TypedArray(length, position, value) {
  if (position > length) {
    throw Error('Position outside range');
  }
  const buffer = new DataView(
    new ArrayBuffer(length),
    0,
    length,
  );

  buffer.setUint8(position, value);
  return buffer;
}
