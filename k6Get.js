import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 200 },
    { duration: '2m', target: 500 },
    { duration: '3m', target: 1000 },
    { duration: '1m', target: 200 },
    { duration: '30s', target: 50 },
  ],
};
export default function () {
  const id = Math.ceil(Math.random() * 10000000);
  const url = `http://localhost:2050/api/reservation/restaurant/${id}`;

  http.get(url);
  sleep(0.3);
}
