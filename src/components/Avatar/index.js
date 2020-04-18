import React from 'react';
import { Avatar } from 'antd';
import { capitalText } from '@/utils/utils';

const UserAvatar = ({
    src,
    borderWidth,
    size,
    text,
    extraStyle = {},
    ...props
}) => {
    return src ? (
        <Avatar
            src={src}
            size={size}
            style={{
                border: `${borderWidth}px solid white`,
                ...extraStyle
            }}
            {...props}
        />
    ) : (
        <Avatar
            size={size - borderWidth}
            style={{
                background: '#1DA57A',
                color: 'white',
                fontSize: `${(size - borderWidth) / 40}em`,
                ...extraStyle
            }}
            {...props}
        >
            {capitalText(text)}
        </Avatar>
    )
};

export default UserAvatar;