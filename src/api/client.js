export async function request(path, options = {}) {
  const token = localStorage.getItem("access_token");
  
  const { headers: customHeaders, ...restOptions } = options;
  
  const response = await fetch(path, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(customHeaders || {}),
    },
    ...restOptions,
  });

  const isJson = response.headers.get("content-type")?.includes("application/json");
  const data = isJson ? await response.json() : await response.text();

  if (!response.ok) {
    let message = "Request failed";
    if (typeof data === "string") {
      message = data;
    } else if (data && typeof data === "object") {
      // 深度解析对象，避免返回 [object Object]
      message = data.detail ? (typeof data.detail === "string" ? data.detail : JSON.stringify(data.detail)) : JSON.stringify(data);
    }
    throw new Error(message);
  }
  return data;
}

