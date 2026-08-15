const ID_FLOOR = 1_000_000;

export default function createLocalId() {
  return ID_FLOOR + performance.now();
}
