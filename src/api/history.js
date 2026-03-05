import { request } from "./client";

export function getHistory(type) {
  const query = type ? `?type=${encodeURIComponent(type)}` : "";
  return request(`/api/history${query}`);
}

export function deleteHistory(timestamp) {
  return request("/api/history/delete", {
    method: "POST",
    body: JSON.stringify({ timestamp }),
  });
}

