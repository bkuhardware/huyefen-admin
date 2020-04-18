import { delay } from '@/utils/utils';
import NOTIFICATIONS from '@/assets/fakers/notifications';
import OLD_NOTIFICATIONS from '@/assets/fakers/oldNotifications';
import _ from 'lodash';

export default {
    namespace: 'notifications',
    state: {
        hasMore: true,
        list: null
    },
    effects: {
        *fetch(action, { call, put, fork, take, cancel, cancelled }) {
            const task = yield fork(function*() {
                try {
                    yield delay(2000);
                    yield put({
                        type: 'save',
                        payload: {
                            data: NOTIFICATIONS,
                            hasMore: true
                        }
                    });
                    yield put({ type: 'notificationsFetchOk' });
                }
                finally {
                    if (yield cancelled())
                        yield put({ type: 'clear' });
                }
            });
            const _action = yield take(['notificationsFetchOk', 'notificationsFetchError', 'notificationsResetted']);
            if (_action.type === 'notificationsResetted')
                yield cancel(task);
        },
        *more(action, { call, put, select, fork, take, cancel, cancelled }) {
            const task = yield fork(function* () {
                try {
                    const { list } = yield select(state => state.notifications);
                    //
                    yield delay(1300);
                    yield put({
                        type: 'push',
                        payload: {
                            data: OLD_NOTIFICATIONS,
                            hasMore: false
                        }
                    });
                    yield put({ type: 'notificationsMoreOk' });
                }
                finally {
                    if (yield cancelled())
                        yield put({ type: 'clear' });
                }
            });
            const _action = yield take(['notificationsMoreOk', 'notificationsMoreError', 'notificationsResetted']);
            if (_action.type === 'notificationsResetted')
                yield cancel(task);
        },
        *read({ payload: notifyId }, { call, put }) {
            yield put({
                type: 'seen',
                payload: {
                    notifyId,
                    seen: true
                }
            });
            //yield put({ 'user/setNoOF...' });
            yield delay(1000);
            //response with status Ok --> not do anything
            //reseponse with status Err --> unseen, setNoOfUnseenNoti...
        },
        *reset(action, { put }) {
            yield put({ type: 'notificationsResetted' });
            yield put({ type: 'clear' });
        }
    },
    reducers: {
        save(state, { payload }) {
            const { data, hasMore } = payload;
            return {
                ...state,
                hasMore,
                list: data
            };
        },
        push(state, { payload }) {
            const { data, hasMore } = payload;
            if (!state.list) return { ...state };
            return {
                ...state,
                hasMore,
                list: [
                    ...state.list,
                    ...data
                ]
            };
        },
        seen(state, { payload }) {
            const { notifyId, seen } = payload;
            const notifications = [...state.list];
            const index = _.findIndex(notifications, ['_id', notifyId]);
            notifications[index] = {
                ...notifications[index],
                seen
            };
            return {
                ...state,
                list: [...notifications]
            };
        },
        clear() {
            return {
                hasMore: true,
                list: null
            };
        }
    }
}