import { delay } from '@/utils/utils';
import storage from '@/utils/storage';
import router from 'umi/router';

const USER = {
    _id: 'admin_1',
    name: 'Huyền Đặng',
    avatar: null,
    email: 'luannguyentrong98@gmail.com',
    phone: '0358684926'
};

export default {
    namespace: 'user',
    state: null,
    effects: {
        *fetch({ payload }, { call, put }) {
            const { callback } = payload;
            yield delay(1200);
            yield put({
                type: 'save',
                payload: USER
            });
            if (callback) callback();
        },
        *login({ from, payload }, { call, put }) {
            const { phone, password } = payload;
            yield delay(1600);
            const token = USER.token;
            storage.setToken(token);
            yield put({
                type: 'save',
                payload: USER
            });
            //set FCM token
            router.replace(from);
        },
        *logout(action, { put }) {
            storage.setToken(null);
            router.push('/user/login');
            yield put({ type: 'reset' });
        }
    },
    reducers: {
        save(state, { payload }) {
            return { ...payload };
        },
        reset() {
            return null;
        }
    }
};