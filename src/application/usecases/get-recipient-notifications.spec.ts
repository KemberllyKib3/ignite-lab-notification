import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notification-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('List notifications by Recipient Id', () => {
  it('should be able to list notifications by recipient Id', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
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

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'recipient-id',
    });
    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-id' }),
        expect.objectContaining({ recipientId: 'recipient-id' }),
      ]),
    );
  });
});
