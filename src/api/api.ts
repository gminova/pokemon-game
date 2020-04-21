export const fetchData = async (url: string): Promise<Object> => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    // TODO: Gracefully handle error
    return error;
  }
};
