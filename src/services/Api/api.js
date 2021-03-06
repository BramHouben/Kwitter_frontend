import { Redirect } from "react-router";

export const Get = async (action) => {
  const origin = "http://20.76.230.89";
  // const origin = "http://localhost:3000";
  try {
    const response = await fetch(action, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: false,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": origin,
      },

      redirect: "follow",
      referrerPolicy: "no-referrer",
    });

    return response;
  } catch (error) {
    if (error.response.status === 401) {
      return <Redirect to='login' />;
    }
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
        "Access-Control-Allow-Origin": origin,
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

export const Put = async (action, json = null) => {
  try {
    const response = await fetch(action, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: false,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": origin,
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

export const Delete = async (action, json = null) => {
  try {
    const response = await fetch(action, {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: false,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": origin,
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
