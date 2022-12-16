import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notification-repository';
import { CountRecipientNotifications } from './count-recipient-notification';

describe('Count recipient notification by Id', () => {
  it('should be able to count notifications by recipient Id', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationRepository,
    );
    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-id' }),
    );
    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-id' }),
    );
    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-different-id' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-id',
    });
    expect(count).toEqual(2);
  });
});
