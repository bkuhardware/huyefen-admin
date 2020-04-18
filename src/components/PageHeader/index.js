import React from 'react';
import _ from 'lodash';
import Link from 'umi/link';
import router from 'umi/router';
import withRouter from 'umi/withRouter';
import { Row, Col, Breadcrumb, Button, Tabs, Tooltip } from 'antd';
import breadcrumbMap from '@/config/constants';
import { parsePathname } from '@/utils/utils';
import styles from './index.less';

const { TabPane } = Tabs;
const BreadcrumbItem = Breadcrumb.Item;

const PageHeader = ({ location, children, ...props }) => {
    const getHeaderData = pathname => {
        const routesList = parsePathname(pathname);
        let title = null;
        const breadcrumbs = [{ isLink: false, title: 'Home' }];
        let mapObj = breadcrumbMap;
        let url = ''
        _.forEach(routesList, (routePart, i) => {
            mapObj = mapObj[routePart];
            if (i === (_.size(routesList) - 1)) {
                title = mapObj.title;
                url += routePart
            }
            url += `${routePart}/`;
            breadcrumbs.push({
                key: url,
                link: url,
                isLink: mapObj.isLink || false,
                title: mapObj.title
            });
            
        });
        return {
            title,
            breadcrumbs
        }
    };

    const headerData = getHeaderData(location.pathname);

    return (
        <div className={styles.pageHeader}>
            <div className={styles.header}>
                <div className={styles.breadcrumb}>
                    <Breadcrumb>
                        {_.map(headerData.breadcrumbs, breadcrumb => (
                            <BreadcrumbItem key={breadcrumb.key}>
                                {breadcrumb.isLink ? (
                                    <Link to={breadcrumb.link}>{breadcrumb.title}</Link>
                                ) : (
                                    <span>
                                        {breadcrumb.title}
                                    </span>
                                )}
                            </BreadcrumbItem>
                        ))}
                    </Breadcrumb>
                </div>
                <Row className={styles.title}>
                    <Col span={16} className={styles.text}>
                        {headerData.title}
                    </Col>
                    <Col span={8} className={styles.actions}>
                        <Tooltip placement="top" title="Go back">
                            <Button shape="round" icon="rollback" onClick={() => router.goBack()} />
                        </Tooltip>
                    </Col>
                </Row>
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
};

export default withRouter(PageHeader)