export const Get = async (action) => {
  try {
    const response = await fetch(action, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: false,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },

      redirect: "follow",
      referrerPolicy: "no-referrer",
    });

    return response;
  } catch (error) {
    return error;
  }
};

export const Post = async (action, json = null) => {
  try {
    const response = await fetch(action, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: false,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },

      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(json),
    });

    return response;
  } catch (error) {
    return error;
  }
};