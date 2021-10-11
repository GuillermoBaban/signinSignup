export const getPosts = async () => {
  const response = await window.fetch("https://gorest.co.in/public/v1/posts");

  if (!response.ok) {
    throw new Error("Problemas en el sv");
  } else {
    return response.json();
  }
};
