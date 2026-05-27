import React from 'react';
import {
  AppleFilled,
  DeleteOutlined,
  EditOutlined,
  FileAddOutlined,
  GoogleOutlined,
  MailOutlined,
  MessageOutlined,
  SaveOutlined,
} from '@ant-design/icons';
import {
  App,
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  ConfigProvider,
  Divider,
  Flex,
  Input,
  List,
  Modal,
  notification,
  Progress,
  Radio,
  Segmented,
  Select,
  Slider,
  Space,
  Switch,
  Typography,
} from 'antd';
import type { ConfigProviderProps } from 'antd';
import { createStyles } from 'antd-style';
import clsx from 'clsx';

const { Title, Text } = Typography;
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalPanel } = notification;
const { _InternalPanelDoNotUseOrYouWillBeFired: ModalInternalPanel } = Modal;

const useStyle = createStyles(({ css, token, cssVar }) => {
  return {
    wrapper: css({
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      padding: `${token.paddingXL}px ${token.padding}px`,
      overflowX: 'auto',
      borderRadius: 16,
      border: '1px solid #eee',
      backgroundColor: 'lab(96.5432% -.0000596046 0)', // matching the light gray background
    }),
    container: css({
      backgroundColor: 'transparent',
      backdropFilter: 'blur(12px)',
      padding: 0,
      border: 'none',
      boxShadow: 'none',
      width: '100%',
      '.ant-card-body': {
        padding: 0,
        width: '100%',
      },
    }),
    layoutRow: css({
      display: 'flex',
      gap: 48,
      alignItems: 'flex-start',
      justifyContent: 'center',
      margin: '0 auto',
      width: 'max-content',
    }),
    colLeft: css({
      width: 320,
      display: 'flex',
      flexDirection: 'column',
      gap: token.paddingLG,
    }),
    colCenter: css({
      width: 420,
      display: 'flex',
      flexDirection: 'column',
      gap: token.paddingLG,
    }),
    colRight: css({
      width: 320,
      display: 'flex',
      flexDirection: 'column',
      gap: token.paddingLG,
    }),
    blockCard: css({
      background: cssVar.colorBgContainer,
      borderRadius: token.borderRadiusLG,
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      border: `1px solid ${token.colorBorderSecondary}`,
      padding: token.paddingLG,
    }),
    formLabel: css({
      display: 'block',
      fontWeight: 600,
      marginBottom: token.marginXXS,
    }),
    listIcon: css({
      fontSize: 16,
      color: token.colorTextSecondary,
    }),
  };
});

interface ComponentsBlockProps {
  config?: ConfigProviderProps;
  style?: React.CSSProperties;
  className?: string;
  containerClassName?: string;
  inherit?: boolean;
}

const ComponentsBlock: React.FC<ComponentsBlockProps> = (props) => {
  const { styles, theme: currentToken } = useStyle();
  const { config, style, className, containerClassName, inherit = false } = props;

  const { theme, ...restConfig } = config || {};

  const mergedTheme = React.useMemo(
    () => ({
      ...theme,
      inherit,
    }),
    [theme, inherit],
  );

  return (
    <ConfigProvider {...restConfig} theme={mergedTheme}>
      <Card className={clsx(containerClassName, styles.container)}>
        <App>
          <div style={style} className={clsx(styles.wrapper, className)}>
            <div className={styles.layoutRow}>
              {/* ================= LEFT COLUMN ================= */}
              <div className={styles.colLeft}>
                <div>
                  <Flex vertical gap="middle">
                    <div>
                      <span className={styles.formLabel}>
                        Your email <Text type="danger">*</Text>
                      </span>
                      <Input placeholder="antd@email.com" />
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        We won't share your email
                      </Text>
                    </div>

                    <div>
                      <span className={styles.formLabel}>
                        State <Text type="danger">*</Text>
                      </span>
                      <Select style={{ width: '100%' }} placeholder="Select one" />
                    </div>

                    <Flex align="center" justify="space-between" style={{ marginTop: 8 }}>
                      <Checkbox checked />
                      <Switch defaultChecked />
                      <Badge status="default" />
                      <Radio checked />
                      <Progress type="circle" percent={25} size={20} showInfo={false} />
                    </Flex>

                    <div style={{ marginTop: 8 }}>
                      <Flex justify="space-between">
                        <span className={styles.formLabel}>Price</span>
                        <Text strong>US$250.00</Text>
                      </Flex>
                      <Slider defaultValue={30} />
                    </div>
                  </Flex>
                </div>

                <div className={styles.blockCard} style={{ padding: '8px' }}>
                  <Segmented block options={['1D', '7D', '1M', '1Y', 'All']} />
                </div>

                <div className={styles.blockCard} style={{ padding: '8px' }}>
                  <Segmented
                    block
                    options={[
                      { label: 'Chats', value: 'Chats', icon: <MessageOutlined /> },
                      { label: 'Emails', value: 'Emails', icon: <MailOutlined /> },
                    ]}
                  />
                </div>

                <div className={styles.blockCard} style={{ padding: 0 }}>
                  <List
                    itemLayout="horizontal"
                    dataSource={[
                      {
                        title: 'New file',
                        desc: 'Create a new file',
                        icon: <FileAddOutlined />,
                        shortcut: '⌘ N',
                      },
                      {
                        title: 'Edit file',
                        desc: 'Make changes',
                        icon: <EditOutlined />,
                        shortcut: '⌘ E',
                      },
                    ]}
                    renderItem={(item) => (
                      <List.Item
                        style={{ padding: '12px 16px', borderBottom: 'none' }}
                        extra={
                          <Text type="secondary" style={{ fontSize: 12 }}>
                            {item.shortcut}
                          </Text>
                        }
                      >
                        <List.Item.Meta
                          avatar={
                            <Avatar
                              icon={item.icon}
                              shape="square"
                              size="small"
                              style={{
                                background: 'transparent',
                                color: currentToken.colorTextSecondary,
                              }}
                            />
                          }
                          title={
                            <Text strong style={{ fontSize: 14 }}>
                              {item.title}
                            </Text>
                          }
                          description={
                            <Text type="secondary" style={{ fontSize: 12 }}>
                              {item.desc}
                            </Text>
                          }
                        />
                      </List.Item>
                    )}
                  />
                  <Divider style={{ margin: 0 }} />
                  <List
                    itemLayout="horizontal"
                    dataSource={[
                      {
                        title: 'Delete file',
                        desc: 'Move to trash',
                        icon: <DeleteOutlined />,
                        shortcut: '⌘ ⇧ D',
                        danger: true,
                      },
                    ]}
                    renderItem={(item) => (
                      <List.Item
                        style={{ padding: '12px 16px', borderBottom: 'none' }}
                        extra={
                          <Text type="secondary" style={{ fontSize: 12 }}>
                            {item.shortcut}
                          </Text>
                        }
                      >
                        <List.Item.Meta
                          avatar={
                            <Avatar
                              icon={item.icon}
                              shape="square"
                              size="small"
                              style={{ background: 'transparent', color: currentToken.colorError }}
                            />
                          }
                          title={
                            <Text type="danger" strong style={{ fontSize: 14 }}>
                              {item.title}
                            </Text>
                          }
                          description={
                            <Text type="secondary" style={{ fontSize: 12 }}>
                              {item.desc}
                            </Text>
                          }
                        />
                      </List.Item>
                    )}
                  />
                </div>
              </div>

              {/* ================= CENTER COLUMN ================= */}
              <div className={styles.colCenter}>
                <div style={{ textAlign: 'center', position: 'relative' }}>
                  <Avatar.Group size="large" style={{ marginBottom: 16 }}>
                    <Avatar size={46} src="https://avatars.githubusercontent.com/u/507615?v=4" />
                    <Avatar size={46} src="https://avatars.githubusercontent.com/u/5378891?v=4" />
                    <Avatar size={46} src="https://avatars.githubusercontent.com/u/117748716?v=4" />
                    <Avatar size={46} src="https://avatars.githubusercontent.com/u/59312002?v=4" />
                    <Avatar size={46} src="https://avatars.githubusercontent.com/u/82765353?v=4" />
                    <Avatar size={46} style={{ backgroundColor: '#fff', color: '#666' }}>
                      +5
                    </Avatar>
                  </Avatar.Group>
                  <Title level={5}>Verify account</Title>
                  <Text type="secondary">We've sent a code to a****@gmail.com</Text>

                  <div style={{ margin: '24px 0 16px' }}>
                    <Input.OTP size="large" length={6} defaultValue="4320" />
                  </div>
                  <Text type="secondary">
                    Didn't receive a code? <a>Resend</a>
                  </Text>
                </div>

                <Flex gap="middle">
                  <div style={{ flex: 1, margin: '16px 0' }}>
                    <Flex wrap="wrap" gap="middle" justify="center">
                      <Button type="primary" shape="round">
                        Click me
                      </Button>
                      <Button color="primary" variant="filled" shape="round">
                        Click me
                      </Button>
                      <Button
                        danger
                        style={{ background: '#fff2f0', border: 'none' }}
                        shape="round"
                      >
                        Click me
                      </Button>
                      <Button type="default" shape="round">
                        Click me
                      </Button>
                      <Button type="dashed" variant="outlined" shape="round">
                        Click me
                      </Button>
                      <Button color="primary" variant="dashed" shape="round">
                        Click me
                      </Button>
                      <Button danger shape="round">
                        Click me
                      </Button>
                      <Button
                        type="default"
                        shape="round"
                        style={{ background: '#f5f5f5', border: 'none' }}
                      >
                        Click me
                      </Button>
                    </Flex>
                  </div>
                </Flex>

                <div className={styles.blockCard}>
                  <Flex align="flex-start" gap="middle">
                    <Avatar
                      shape="square"
                      size={60}
                      src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                    />
                    <div style={{ flex: 1 }}>
                      <Title level={5} style={{ margin: 0 }}>
                        Ant Design
                      </Title>
                      <Text type="secondary" style={{ fontSize: 13 }}>
                        @ant-design
                      </Text>
                      <p style={{ margin: '8px 0', fontSize: 14 }}>
                        Building the future of UI for web & mobile. 🚀 (YC S24)
                      </p>
                      <Space size="large" style={{ fontSize: 13 }}>
                        <span>
                          <Text strong>4</Text> <Text type="secondary">Following</Text>
                        </span>
                        <span>
                          <Text strong>98.1K</Text> <Text type="secondary">Followers</Text>
                        </span>
                      </Space>
                    </div>
                  </Flex>
                </div>

                <InternalPanel
                  styles={{ root: { width: '100%' } }}
                  title="Hello Ant!"
                  description="Hello World?"
                  type="success"
                />
              </div>

              {/* ================= RIGHT COLUMN ================= */}
              <div className={styles.colRight}>
                <div
                  className={styles.blockCard}
                  style={{ textAlign: 'center', padding: '32px 24px' }}
                >
                  <Avatar
                    size={50}
                    src="https://avatars.githubusercontent.com/u/27722486?v=4"
                    style={{ marginBottom: 16 }}
                  />
                  <Title level={4}>Create an account</Title>
                  <Text
                    type="secondary"
                    style={{ display: 'block', marginBottom: 24, fontSize: 14 }}
                  >
                    Start your free 7-day trial. No credit card required.
                  </Text>
                  <Button type="primary" block size="large" style={{ marginBottom: 16 }}>
                    Get Started
                  </Button>
                  <Divider style={{ color: currentToken.colorTextSecondary, fontSize: 12 }}>
                    OR
                  </Divider>
                  <Flex vertical gap="small">
                    <Button block size="large" icon={<GoogleOutlined />}>
                      Continue with Google
                    </Button>
                    <Button block size="large" icon={<AppleFilled />}>
                      Continue with Apple
                    </Button>
                  </Flex>
                </div>

                <ModalInternalPanel
                  title="Unsaved changes"
                  footer={
                    <>
                      <Button
                      >
                        Discard
                      </Button>
                      <Button
                        type="primary"
                      >
                        Save changes
                      </Button>
                    </>
                  }
                  styles={{
                    container: {
                      margin: 0,
                      borderRadius: 16
                    },
                  }}
                >
                  <div style={{ height: 100, lineHeight: '80px' }}>
                    Do you want to save or discard changes?
                  </div>
                </ModalInternalPanel>
              </div>
            </div>
          </div>
        </App>
      </Card>
    </ConfigProvider>
  );
};

export default ComponentsBlock;
