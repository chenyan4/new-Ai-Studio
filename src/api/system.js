import { request } from "./client";

export function getQueueStatus(clientId) {
  return request(`/api/queue_status?client_id=${encodeURIComponent(clientId)}`);
}

export function getUserToken() {
  return request("/api/auth/me");
}

export function saveUserToken(token) {
  return request("/api/auth/token", {
    method: "PUT",
    body: JSON.stringify({ api_token: token }),
  });
}

