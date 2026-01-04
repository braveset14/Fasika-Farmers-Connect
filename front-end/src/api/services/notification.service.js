let notifications = [
  { id: 1, message: "Heavy rain expected tomorrow", type: "warning", read: false },
  { id: 2, message: "Maize price increased by 5%", type: "info", read: false }
];

export const notificationsApi = {
  getAll() {
    return Promise.resolve(notifications);
  },

  markRead(id) {
    notifications = notifications.map(n =>
      n.id === id ? { ...n, read: true } : n
    );
    return Promise.resolve();
  }
};
