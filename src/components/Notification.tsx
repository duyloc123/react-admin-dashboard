import { notification } from 'antd';
import { useSelector } from 'react-redux';
import { IRooteState } from '../types';
import React from 'react';

function Notification() {
  const [api, contextHolder] = notification.useNotification();
  const isNotification = useSelector((state: IRooteState) => state.app.isNotification);
  const notification_type = useSelector((state: IRooteState) => state.app.notification_type);
  const notification_content = useSelector((state: IRooteState) => state.app.notification_content);
  
  console.log('isNotification: ', isNotification)
  React.useEffect(() => {
    if(!isNotification) return;
    
    switch(notification_type) {
      case 'info': {
        api.info({
          message: notification_content.message,
          description: notification_content.description
        });
        break;
      }
      case 'success': {
        api.success({
          message: notification_content.message,
          description: notification_content.description
        });
        break;
      }
      case 'error': {
        api.error({
          message: notification_content.message,
          description: notification_content.description
        });
        break;
      }
      default:
        break
    }
   
  }, [isNotification])

  return (
    <>
      {contextHolder}
    </>
  )
}

export default Notification