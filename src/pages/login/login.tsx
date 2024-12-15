import type { FormProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Select } from 'antd';

// configs
import { ROUTE_PATH } from '../../configs/constants';

// services
import { axiosInstance } from '../../services/initRequest';

const { Option } = Select;

type FieldType = {
  email: string;
  password: string;
};

// error 400 -> message 400,
// error 500 -> 500
// status 403 -> not authenticate -> 
// call api A => 401 -> token expire -> call api refresh token -> auto call api A
// axios interceptor

function Login() {
  const navigate = useNavigate();
  // const [error, setErro]
  // const [isLoading, setIsLoading]

  const onFinish: FormProps<FieldType>['onFinish'] =  async (values) => {
    const bodyData = {
      data: {
        "email": values.email,
        "password": values.password
      }
    }
    try {
      const response = await axiosInstance('/api/user/signin', {
        method: 'POST',
        data: bodyData,
        showSpinner: true
      })
      if(response.data.isSucess) {
        const access_token = response.data.data.access_token;
        window.localStorage.setItem('access_token', access_token);
        navigate(ROUTE_PATH.DASHBOARD);
      }
    } catch(error: any) {
      console.log('onFinish failure: ', error)
    }
   
  };

  return (
    <div
    style={{
      maxWidth: 600,
      margin: '20px auto',
    }}
  >
    <h1 style={{ textAlign: 'center', marginBottom: 30 }}>Airbnb CMS</h1>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="company" label="Company">
        <Select
          placeholder="Select a option and change input text above"
          allowClear
          defaultValue="JSLancer"
        >
          <Option value="jslancer">JSLancer</Option>
          <Option value="tma">TMA Solution</Option>
        </Select>
      </Form.Item>
  
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
  
      <Form.Item label={null} style={{
        display: 'flex',
        justifyContent: 'end'
      }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>
  )
}

export default Login