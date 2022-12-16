import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('This is a notification content'),
      category: 'category',
      recipientId: 'recipient-id',
    });
    expect(notification).toBeTruthy();
  });
});
