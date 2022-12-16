/* eslint-disable prettier/prettier */
import { Notification } from "@application/entities/notification";
import { NotificationRepository } from "@application/repositories/notification-repository";

export class InMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find((notification) => notification.id === notificationId);

    return Promise.resolve(notification || null);
  }

  async save(notification: Notification): Promise<void> {
    const index = this.notifications.findIndex((n) => n.id === notification.id);

    if (index >= 0) {
      this.notifications[index] = notification;
    }

    return Promise.resolve();
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    return this.notifications.filter((notification) => notification.recipientId === recipientId).length;
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    return this.notifications.filter((notification) => notification.recipientId === recipientId);
  }
}
