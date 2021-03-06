import axios from 'axios';

const BASE_URL = 'https://aerolab-challenge.now.sh';
const SUPER_SECRET_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2RmODY4YzU4YzIzNzAwNmQxMDk0NGYiLCJpYXQiOjE1NTgxNTI4NDR9.y1IC7N7UP4-tBejqtIb-uhxvqvdJF9Y1pid-6MwFQ0Y';
const DEFAULT_OPTIONS = {
  crossDomain: true,
  responseType: 'json',
  headers: {
    Authorization: `Bearer ${SUPER_SECRET_TOKEN}`,
    'Content-Type': 'application/json',
  },
};

const api = {
  async request({ url, method, data = {} }) {
    try {
      const response = await axios(BASE_URL + url, {
        ...DEFAULT_OPTIONS,
        method,
        data,
      });
      if (response.status !== 200) throw response;
      return response.data;
    } catch (error) {
      return error;
    }
  },
  user: {
    me() {
      /**
       * {
       *   _id: string,
       *   name: string,
       *   points: number,
       *   __v: number,
       *   redeemHistory: any[],
       *   createDate: string,
       * }
       */
      return api.request({ url: '/user/me', method: 'GET' });
    },
    points(amount) {
      /**
       * {
       *   message: string,
       *   "New Points": number,
       * }
       */
      return api.request({
        url: '/user/points',
        method: 'POST',
        data: { amount },
      });
    },
    history() {
      /**
       * {
       *   productId: string,
       *   name: string,
       *   cost: number,
       *   category: string,
       *   _id: string,
       *   createDate: string,
       *   img: {
       *     url: string,
       *     hdUrl: string,
       *   },
       * }
       */
      return api.request({
        url: '/user/history',
        method: 'GET',
      });
    },
  },
  redeem(productId) {
    /**
     * {
     *   productId: string,
     * }
     */
    return api.request({
      url: '/redeem',
      method: 'POST',
      data: { productId },
    });
  },
  products() {
    /**
     * {
     *   _id: string,
     *   name: string,
     *   cost: number,
     *   category: string,
     *   img: {
     *     url: string,
     *     hdUrl: string,
     *   },
     * }
     */
    return api.request({
      url: '/products',
      method: 'GET',
    });
  },
};

export default api;
