import React from 'react';
import withRouter from 'umi/withRouter';
import Link from 'umi/link';
import { Layout, Menu } from 'antd';
import styles from './index.less';

const { Sider: AntSider } = Layout;
const { SubMenu } = Menu;
const MenuItem = Menu.Item;

const Sider = ({ location }) => {
    return (
        <AntSider
            className={styles.sider}
            width={270}
        >
            <Menu
                mode="inline"
                className={styles.menu}
                selectedKeys={location.pathname}
                theme="dark"
            >
                <MenuItem key="/dashboard">
                    <Link to="/dashboard">Dashboard</Link>
                </MenuItem>
                <SubMenu
                    key="users"
                    title="Users management"
                >
                    <MenuItem key="/users/students">
                        <Link to="/users/students">Students</Link>
                    </MenuItem>
                    <MenuItem key="/users/instructors">
                        <Link to="/users/admins">Instructors</Link>
                    </MenuItem>
                    <MenuItem key="/users/admins">
                        <Link to="/users/admins">Operators</Link>
                    </MenuItem>
                </SubMenu>
                <SubMenu
                    key="courses"
                    title="Courses management"
                >
                    <MenuItem key="/courses/courses">
                        <Link to="/courses/courses">Courses</Link>
                    </MenuItem>
                    <MenuItem key="/courses/exams">
                        <Link to="/courses/exams">Exams</Link>
                    </MenuItem>
                </SubMenu>
                <SubMenu
                    key="course-settings"
                    title="Metadata"
                >
                    <MenuItem key="/course-settings/areas">
                        <Link to="/course-settings/areas">Areas</Link>
                    </MenuItem>
                    <MenuItem key="/course-settings/categories">
                        <Link to="/course-settings/categories">Categories</Link>
                    </MenuItem>
                    <MenuItem key="/course-settings/topics">
                        <Link to="/course-settings/topics">Topics</Link>
                    </MenuItem>
                    <MenuItem key="/course-settings/levels">
                        <Link to="/course-settings/levels">Levels</Link>
                    </MenuItem>
                    <MenuItem key="/course-settings/languages">
                        <Link to="/course-settings/languages">Languages</Link>
                    </MenuItem>
                </SubMenu>
                <SubMenu
                    key="marketing"
                    title="Marketing"
                >
                    <MenuItem key="/marketing/theme">
                        <Link to="/marketing/theme">Theme</Link>
                    </MenuItem>
                    <MenuItem key="/marketing/discounting">
                        <Link to="/marketing/discounting">Discounting</Link>
                    </MenuItem>
                    <MenuItem key="/marketing/promotions">
                        <Link to="/marketing/promotions">Promotions</Link>
                    </MenuItem>
                    <MenuItem key="/marketing/referral">
                        <Link to="/marketing/referral">Referral</Link>
                    </MenuItem>
                </SubMenu>
                <MenuItem key="/financial">
                    <Link to="/financial">Financial</Link>
                </MenuItem>
                <MenuItem key="/statistics">
                    <Link to="/statistics">Statistics</Link>
                </MenuItem>
                <MenuItem key="/reports">
                    <Link to="/reports">Reports</Link>
                </MenuItem>
                <MenuItem key="/help">
                    <Link to="/help">Q&A</Link>
                </MenuItem>
            </Menu>
        </AntSider>
    )
};

export default withRouter(Sider);