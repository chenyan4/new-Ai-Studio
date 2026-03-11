export async function request(path, options = {}) {
  const token = localStorage.getItem("access_token");
  const defaultToken = import.meta.env.VITE_DEFAULT_JWT;

  const { headers: customHeaders, ...restOptions } = options;

  const doFetch = (authToken) =>
    fetch(path, {
      headers: {
        "Content-Type": "application/json",
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
        ...(customHeaders || {}),
      },
      ...restOptions,
    });

  // 优先使用当前登录用户的 token；没有时退回到 .env 中配置的默认 JWT
  let response = await doFetch(token || defaultToken);

  // 如果当前 token 无效导致 401，并且存在默认 JWT，则再用默认 JWT 重试一次
  if (response.status === 401 && defaultToken && token !== defaultToken) {
    response = await doFetch(defaultToken);
  }

  const isJson = response.headers.get("content-type")?.includes("application/json");
  const data = isJson ? await response.json() : await response.text();

  if (!response.ok) {
    let message = "Request failed";
    if (typeof data === "string") {
      message = data;
    } else if (data && typeof data === "object") {
      // 深度解析对象，避免返回 [object Object]
      message =
        data.detail && typeof data.detail === "string"
          ? data.detail
          : JSON.stringify(data.detail ?? data);
    }
    throw new Error(message);
  }
  return data;
}

