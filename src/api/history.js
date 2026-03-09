import { request } from "./client";

/**
 * @param {string} [type] - 筛选类型，如 zimage / video
 * @param {{ limit?: number, offset?: number }} [opts] - 分页，默认 limit=100，用于首屏加速与「加载更多」
 */
export function getHistory(type, opts = {}) {
  const params = new URLSearchParams();
  if (type) params.set("type", type);
  if (opts.limit != null) params.set("limit", String(opts.limit));
  if (opts.offset != null) params.set("offset", String(opts.offset));
  const query = params.toString() ? `?${params.toString()}` : "";
  return request(`/api/history${query}`);
}

export function deleteHistory(timestamp) {
  return request("/api/history/delete", {
    method: "POST",
    body: JSON.stringify({ timestamp }),
  });
}

