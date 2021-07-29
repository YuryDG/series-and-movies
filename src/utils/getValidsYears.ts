export const getValidYears = (years: number[]): number[] => {
  // removing duplicated elements
  const validYears: number[] = [...new Set(years)];
  return validYears;
}