import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '../../configs/constants';

const Error403 = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<Button type="primary" onClick={() => navigate(ROUTE_PATH.DASHBOARD)}>Back Home</Button>}
    />
  );
}

export default Error403;