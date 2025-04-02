const randomDataCharts = (len: number) => {
  return Array.from({ length: len }, () => Math.floor(Math.random() * 91) + len);
};

export { randomDataCharts };
