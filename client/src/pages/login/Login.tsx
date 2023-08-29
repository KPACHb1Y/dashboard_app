import { memo } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
    setToken: () => void;
}

export const Login = memo(({ username, password, remember, setToken }: FieldType): JSX.Element => {

    const onFinish = (values: any) => {
        console.log(`Success ${values}`)
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log(`Failed ${errorInfo}`);
    }

    return (
        <>
            <h1>Login</h1>
            <Form
                name="login"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: false }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete='off'
            >
                <Form.Item<FieldType>
                    label='Имя пользователя'
                    name='username'
                    rules={[{ required: true, message: 'Пожалуйста введите свое имя' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label='Пароль'
                    name='password'
                    rules={[{ required: true, message: 'Пожалуйста введите пароль' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    name='remember'
                    valuePropName='checked'
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type='primary' htmlType='submit'>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
});

Login.displayName = 'Login'