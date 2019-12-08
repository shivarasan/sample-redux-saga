export const fetchData = async fuck => {
  try {
    console.log(fuck, "fuck");
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
