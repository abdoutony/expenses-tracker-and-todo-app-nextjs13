let count = 0;

export async function getCountAsync() {
  return count;
}

export async function incrementAsync() {
  return ++count;
}

export async function decrementAsync() {
  return --count;
}
