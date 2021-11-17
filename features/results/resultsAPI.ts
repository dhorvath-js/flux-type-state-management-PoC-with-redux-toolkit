// A mock function to mimic making an async request for data
export function fetchTariffs() {
  return new Promise<{ data: number[] }>((resolve) =>
    setTimeout(() => resolve({ data: [1, 3, 2] }), 1000)
  );
}
