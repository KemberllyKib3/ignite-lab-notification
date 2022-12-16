import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notification-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationRepository);
    const { notification } = await sendNotification.execute({
      recipientId: 'recipient-id',
      content: 'This is a notification content',
      category: 'category',
    });
    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});
