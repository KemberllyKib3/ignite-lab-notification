import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(overrides: Override = {}): Notification {
  return new Notification({
    content: new Content('notification-content'),
    category: 'notification-category',
    recipientId: 'recipient-id',
    ...overrides,
  });
}
