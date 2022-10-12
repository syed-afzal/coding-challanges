const moment = require('moment');
const swapLetters = (t) => {
  return {
    t,
    t1: t[1]+t[0]+t[2],
    t2: t[0]+t[2]+t[1],
  }
}

const countNumberOfCandidates = (T, cand) => {
  let count = 0;
  for (let t of T) {
    if (Object.values(swapLetters(t)).includes(cand))
      count++;
  }
  return count;
}

const Solution = (T) => {
  let output = 0
  for (let t of T) {
    for (let cand of Object.values(swapLetters(t))) {
      let sum = countNumberOfCandidates(T, cand);
      output = Math.max(output, sum);
    }
  }
  return output;
}

// console.log(Solution(["aab", "cab", "baa", "baa"]))

const obj = [
  {
    "node": {
      "id": "804a334b-94da-45a6-8709-5d1b328b735f",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T11:04:11.000Z",
      "stop_time": "2022-06-13T11:04:11.000Z"
    }
  },
  {
    "node": {
      "id": "00a4b6a1-4603-4666-ba23-e4c8caef7917",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T11:03:39.000Z",
      "stop_time": "2022-06-13T11:03:39.000Z"
    }
  },
  {
    "node": {
      "id": "7e3a6192-5b9e-4205-80ac-f37ecbf5f0f5",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T11:03:37.000Z",
      "stop_time": "2022-06-13T11:03:37.000Z"
    }
  },
  {
    "node": {
      "id": "d71a04c7-1be6-45b1-b2c7-10a78de1a241",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T11:02:16.000Z",
      "stop_time": "2022-06-13T11:02:16.000Z"
    }
  },
  {
    "node": {
      "id": "036e4b7f-16e9-431d-9f79-26fe6ffae6a5",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T11:02:15.000Z",
      "stop_time": "2022-06-13T11:02:15.000Z"
    }
  },
  {
    "node": {
      "id": "fd79a148-a6f0-43b4-93c0-c68b724087ee",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T11:02:14.000Z",
      "stop_time": "2022-06-13T11:02:14.000Z"
    }
  },
  {
    "node": {
      "id": "25c20ab1-5356-4b9e-88ec-576a2f802f9a",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T11:02:13.000Z",
      "stop_time": "2022-06-13T11:02:13.000Z"
    }
  },
  {
    "node": {
      "id": "757edd8a-be31-40ca-be36-3b88e0bdc91c",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T11:02:08.000Z",
      "stop_time": "2022-06-13T11:02:08.000Z"
    }
  },
  {
    "node": {
      "id": "7708ffb2-9891-4202-8d3a-8ac0f32a72cd",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T11:02:07.000Z",
      "stop_time": "2022-06-13T11:02:07.000Z"
    }
  },
  {
    "node": {
      "id": "d73c87d7-4fb2-434d-aa1f-ee9e8c110544",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T11:02:05.000Z",
      "stop_time": "2022-06-13T11:02:05.000Z"
    }
  },
  {
    "node": {
      "id": "535ae076-ea69-402d-b53f-91bbbefbbf11",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T11:01:57.000Z",
      "stop_time": "2022-06-13T11:01:57.000Z"
    }
  },
  {
    "node": {
      "id": "c5aecbe3-3b3d-4224-90a0-0caa99341a8c",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T11:01:56.000Z",
      "stop_time": "2022-06-13T11:01:56.000Z"
    }
  },
  {
    "node": {
      "id": "9d4a2f00-b07f-49a3-844c-32c6d305cbb3",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T11:01:55.000Z",
      "stop_time": "2022-06-13T11:01:55.000Z"
    }
  },
  {
    "node": {
      "id": "e94c2b0d-ae60-41b9-942c-9db9f6233d3b",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T11:01:54.000Z",
      "stop_time": "2022-06-13T11:01:54.000Z"
    }
  },
  {
    "node": {
      "id": "b112cb77-07e7-4dc2-8540-83d68654a60b",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T11:01:53.000Z",
      "stop_time": "2022-06-13T11:01:53.000Z"
    }
  },
  {
    "node": {
      "id": "2b255fa2-dd90-47f0-a550-ca38d44d3437",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T11:01:52.000Z",
      "stop_time": "2022-06-13T11:01:52.000Z"
    }
  },
  {
    "node": {
      "id": "72b8279f-fa4f-4d35-adbf-5decf20a8427",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T11:01:50.000Z",
      "stop_time": "2022-06-13T11:01:50.000Z"
    }
  },
  {
    "node": {
      "id": "16d892e0-c167-45da-bed1-8885340cbc37",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T11:01:47.000Z",
      "stop_time": "2022-06-13T11:01:47.000Z"
    }
  },
  {
    "node": {
      "id": "31c9ec9a-d953-4a8c-990d-d5cb395b2761",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T11:01:46.000Z",
      "stop_time": "2022-06-13T11:01:46.000Z"
    }
  },
  {
    "node": {
      "id": "dd4d3a72-6e76-4fac-a90e-2b260a9921b4",
      "relationship_type": "indicates",
      "start_time": "2022-06-13T10:47:56.000Z",
      "stop_time": "2022-06-13T10:47:56.000Z"
    }
  },
  {
    "node": {
      "id": "ff6a923e-db28-4393-ac09-2a759fe82b3d",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T10:47:56.000Z",
      "stop_time": "2022-06-13T10:47:56.000Z"
    }
  },
  {
    "node": {
      "id": "f456f0b1-c305-4072-989d-a7c5a468ef82",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T10:33:33.000Z",
      "stop_time": "2022-06-13T10:33:33.000Z"
    }
  },
  {
    "node": {
      "id": "c673a986-2b32-4bf8-a37e-98ee073ac436",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T10:33:32.000Z",
      "stop_time": "2022-06-13T10:33:32.000Z"
    }
  },
  {
    "node": {
      "id": "c98c16ef-9e93-4ad7-858f-f339a0efbb84",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T10:33:28.000Z",
      "stop_time": "2022-06-13T10:33:28.000Z"
    }
  },
  {
    "node": {
      "id": "4c4cca2c-98cb-4c77-8fe0-fefc58a4e49f",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T10:33:26.000Z",
      "stop_time": "2022-06-13T10:33:26.000Z"
    }
  },
  {
    "node": {
      "id": "e0034f66-3a72-4030-bf09-ae800b422022",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T10:33:25.000Z",
      "stop_time": "2022-06-13T10:33:25.000Z"
    }
  },
  {
    "node": {
      "id": "3406075f-8422-4c85-9752-4d1eca875042",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T10:33:24.000Z",
      "stop_time": "2022-06-13T10:33:24.000Z"
    }
  },
  {
    "node": {
      "id": "aa858b81-ae86-4e5b-9ae9-61f6f9710c86",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T10:33:21.000Z",
      "stop_time": "2022-06-13T10:33:21.000Z"
    }
  },
  {
    "node": {
      "id": "a0994a76-094e-4185-a77a-5d15168653b2",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T10:33:07.000Z",
      "stop_time": "2022-06-13T10:33:07.000Z"
    }
  },
  {
    "node": {
      "id": "e9cec189-1a82-4153-ae1e-4f01d5afcfe7",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T10:33:06.000Z",
      "stop_time": "2022-06-13T10:33:06.000Z"
    }
  },
  {
    "node": {
      "id": "fa95855f-94df-4a60-b88a-0b26017e0fb6",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T10:33:05.000Z",
      "stop_time": "2022-06-13T10:33:05.000Z"
    }
  },
  {
    "node": {
      "id": "79086d88-9497-400b-ab9b-ddc20317d711",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T10:32:59.000Z",
      "stop_time": "2022-06-13T10:32:59.000Z"
    }
  },
  {
    "node": {
      "id": "650e1676-753b-4c9b-97e3-0863a2e13ab0",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T10:32:55.000Z",
      "stop_time": "2022-06-13T10:32:55.000Z"
    }
  },
  {
    "node": {
      "id": "f7e37f21-396c-44df-a678-33b0de76a081",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T10:32:54.000Z",
      "stop_time": "2022-06-13T10:32:54.000Z"
    }
  },
  {
    "node": {
      "id": "f35ab64c-c788-4ef9-afe0-b36b6dac0428",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T10:32:51.000Z",
      "stop_time": "2022-06-13T10:32:51.000Z"
    }
  },
  {
    "node": {
      "id": "a05684da-0d9d-4032-b8c3-f1f0bf04dea6",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T10:32:48.000Z",
      "stop_time": "2022-06-13T10:32:48.000Z"
    }
  },
  {
    "node": {
      "id": "7d738a56-51b0-4baa-93d3-125885d59015",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T10:32:47.000Z",
      "stop_time": "2022-06-13T10:32:47.000Z"
    }
  },
  {
    "node": {
      "id": "04213222-e355-468f-96f2-e6be27a21b92",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T10:32:45.000Z",
      "stop_time": "2022-06-13T10:32:45.000Z"
    }
  },
  {
    "node": {
      "id": "41fb144a-ea8e-4037-bc46-c365d4950443",
      "relationship_type": "indicates",
      "start_time": "2022-06-13T10:32:45.000Z",
      "stop_time": "2022-06-13T10:32:45.000Z"
    }
  },
  {
    "node": {
      "id": "318bed1e-5233-4fe9-aba3-55a6099cab54",
      "relationship_type": "indicates",
      "start_time": "2022-06-13T10:32:45.000Z",
      "stop_time": "2022-06-13T10:32:45.000Z"
    }
  },
  {
    "node": {
      "id": "ecbb0717-60b2-4b17-aafb-58c82eae976e",
      "relationship_type": "uses",
      "start_time": "2022-06-13T10:32:45.000Z",
      "stop_time": "2022-06-13T10:32:45.000Z"
    }
  },
  {
    "node": {
      "id": "52da5a2e-692d-420f-9d9f-064e37a7bd42",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T10:32:45.000Z",
      "stop_time": "2022-06-13T10:32:45.000Z"
    }
  },
  {
    "node": {
      "id": "34704f3b-1d0e-4c8c-9674-3b07c2c5b4e2",
      "relationship_type": "uses",
      "start_time": "2022-06-13T10:32:45.000Z",
      "stop_time": "2022-06-13T10:32:45.000Z"
    }
  },
  {
    "node": {
      "id": "6363b8a5-f3d4-47cf-92d7-1c61b39dce2d",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T10:32:44.000Z",
      "stop_time": "2022-06-13T10:32:44.000Z"
    }
  },
  {
    "node": {
      "id": "31c759bc-5ca1-480c-ba1c-21bd1e660e37",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T10:32:43.000Z",
      "stop_time": "2022-06-13T10:32:43.000Z"
    }
  },
  {
    "node": {
      "id": "876b9627-f791-415f-bcb1-34da94137eea",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T10:32:42.000Z",
      "stop_time": "2022-06-13T10:32:42.000Z"
    }
  },
  {
    "node": {
      "id": "11656a9a-102d-4b01-a223-b9edc7029f0a",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T10:30:02.000Z",
      "stop_time": "2022-06-13T10:30:02.000Z"
    }
  },
  {
    "node": {
      "id": "482d1f35-2900-4da2-a7c3-403f2b84ef30",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:45:23.000Z",
      "stop_time": "2022-06-13T09:45:23.000Z"
    }
  },
  {
    "node": {
      "id": "5f8d896a-151a-4439-bfb5-9b46b9e21059",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:45:21.000Z",
      "stop_time": "2022-06-13T09:45:21.000Z"
    }
  },
  {
    "node": {
      "id": "6bd047ef-a95e-4fac-90da-beabe9bff40c",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:45:14.000Z",
      "stop_time": "2022-06-13T09:45:14.000Z"
    }
  },
  {
    "node": {
      "id": "a74dfd5b-8fca-4e22-805b-09874d25b648",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:45:09.000Z",
      "stop_time": "2022-06-13T09:45:09.000Z"
    }
  },
  {
    "node": {
      "id": "0986accb-0b07-4a4e-bca9-650346b65ed8",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:45:08.000Z",
      "stop_time": "2022-06-13T09:45:08.000Z"
    }
  },
  {
    "node": {
      "id": "23e74798-3aa5-4c94-aaaf-d8e5732bc30d",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:44:58.000Z",
      "stop_time": "2022-06-13T09:44:58.000Z"
    }
  },
  {
    "node": {
      "id": "1b862f5b-9b2d-4ba9-80d5-cfa11c577e66",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:44:53.000Z",
      "stop_time": "2022-06-13T09:44:53.000Z"
    }
  },
  {
    "node": {
      "id": "e4b5ffc3-44b6-4a3c-9b0a-69c4c515ce17",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:44:44.000Z",
      "stop_time": "2022-06-13T09:44:44.000Z"
    }
  },
  {
    "node": {
      "id": "365dc29e-d866-4e1d-b849-b716f4648a45",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:44:41.000Z",
      "stop_time": "2022-06-13T09:44:41.000Z"
    }
  },
  {
    "node": {
      "id": "c7da1946-efdd-4f7b-b7c2-3d0c7f4d70f0",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:44:33.000Z",
      "stop_time": "2022-06-13T09:44:33.000Z"
    }
  },
  {
    "node": {
      "id": "3aa32c7c-099d-4875-b5fb-ac80a840d3a6",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:44:28.000Z",
      "stop_time": "2022-06-13T09:44:28.000Z"
    }
  },
  {
    "node": {
      "id": "a5f7a596-c0db-4bd1-bb94-3ae4feacaaca",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:44:25.000Z",
      "stop_time": "2022-06-13T09:44:25.000Z"
    }
  },
  {
    "node": {
      "id": "d58a5704-e31b-4d18-9b54-458c521ed8ea",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:44:14.000Z",
      "stop_time": "2022-06-13T09:44:14.000Z"
    }
  },
  {
    "node": {
      "id": "89749972-9ad3-43a1-be98-0176397b8440",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:44:13.000Z",
      "stop_time": "2022-06-13T09:44:13.000Z"
    }
  },
  {
    "node": {
      "id": "4abf50bc-9791-47bf-9f8d-51350703bade",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:44:03.000Z",
      "stop_time": "2022-06-13T09:44:03.000Z"
    }
  },
  {
    "node": {
      "id": "dd946749-6e98-4d7b-8223-5acc3c31d5c4",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:43:58.000Z",
      "stop_time": "2022-06-13T09:43:58.000Z"
    }
  },
  {
    "node": {
      "id": "01514a58-5243-4fde-b400-a18b6bf17e1c",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:43:48.000Z",
      "stop_time": "2022-06-13T09:43:48.000Z"
    }
  },
  {
    "node": {
      "id": "804443da-85c6-4131-bea6-28dfe9b2b1ee",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:43:47.000Z",
      "stop_time": "2022-06-13T09:43:47.000Z"
    }
  },
  {
    "node": {
      "id": "82e4c1af-df44-4bf2-a550-c17079f2d028",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:43:38.000Z",
      "stop_time": "2022-06-13T09:43:38.000Z"
    }
  },
  {
    "node": {
      "id": "1ef650f7-ee61-48c2-8beb-520e856a3198",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:43:33.000Z",
      "stop_time": "2022-06-13T09:43:33.000Z"
    }
  },
  {
    "node": {
      "id": "75ec1053-1823-44c5-b82f-eaaea6d2ea69",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:43:24.000Z",
      "stop_time": "2022-06-13T09:43:24.000Z"
    }
  },
  {
    "node": {
      "id": "d408c540-55a7-4eda-a3a8-d8f53ee82a32",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:43:21.000Z",
      "stop_time": "2022-06-13T09:43:21.000Z"
    }
  },
  {
    "node": {
      "id": "33fcd6dc-3179-49a2-abb4-6be020216e9f",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:43:14.000Z",
      "stop_time": "2022-06-13T09:43:14.000Z"
    }
  },
  {
    "node": {
      "id": "d8740a11-a3ea-4bc5-9722-a65132707cae",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:43:08.000Z",
      "stop_time": "2022-06-13T09:43:08.000Z"
    }
  },
  {
    "node": {
      "id": "4019e973-b60f-49e7-8242-ee7dbc1f8e8c",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:43:07.000Z",
      "stop_time": "2022-06-13T09:43:07.000Z"
    }
  },
  {
    "node": {
      "id": "f2196bcb-4d9b-451f-a145-58e8c65156da",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:42:58.000Z",
      "stop_time": "2022-06-13T09:42:58.000Z"
    }
  },
  {
    "node": {
      "id": "c36cfcdf-577d-48de-a537-7aeb2ed9706f",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:42:56.000Z",
      "stop_time": "2022-06-13T09:42:56.000Z"
    }
  },
  {
    "node": {
      "id": "d3c65bdc-33c8-4ffb-a252-25c9f6b9ca80",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:42:49.000Z",
      "stop_time": "2022-06-13T09:42:49.000Z"
    }
  },
  {
    "node": {
      "id": "35115f8e-c931-4b87-bf4a-2f63417ff4e2",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:42:43.000Z",
      "stop_time": "2022-06-13T09:42:43.000Z"
    }
  },
  {
    "node": {
      "id": "cf6ec79e-cf99-4ac8-88d6-7d6d24ee0f3d",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:42:41.000Z",
      "stop_time": "2022-06-13T09:42:41.000Z"
    }
  },
  {
    "node": {
      "id": "dc919ceb-abf2-444c-a610-ed09fbe959cb",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:42:34.000Z",
      "stop_time": "2022-06-13T09:42:34.000Z"
    }
  },
  {
    "node": {
      "id": "c8e74689-df5b-46b9-a8f1-2eff3a5cde4d",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:42:30.000Z",
      "stop_time": "2022-06-13T09:42:30.000Z"
    }
  },
  {
    "node": {
      "id": "cb05db66-0825-4d74-a869-f60bfc93004a",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:42:29.000Z",
      "stop_time": "2022-06-13T09:42:29.000Z"
    }
  },
  {
    "node": {
      "id": "cdd7ca75-2431-499e-a259-1074ee98589b",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:42:19.000Z",
      "stop_time": "2022-06-13T09:42:19.000Z"
    }
  },
  {
    "node": {
      "id": "8404f16a-6501-49cf-b09a-f813905590ca",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:42:14.000Z",
      "stop_time": "2022-06-13T09:42:14.000Z"
    }
  },
  {
    "node": {
      "id": "bf97b376-4e81-48e7-9750-53654b41d222",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:42:04.000Z",
      "stop_time": "2022-06-13T09:42:04.000Z"
    }
  },
  {
    "node": {
      "id": "f48db0b9-6916-4872-b05f-ed41a345b55a",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:42:02.000Z",
      "stop_time": "2022-06-13T09:42:02.000Z"
    }
  },
  {
    "node": {
      "id": "f636cc91-428b-4623-b4e9-83c53174422a",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:41:53.000Z",
      "stop_time": "2022-06-13T09:41:53.000Z"
    }
  },
  {
    "node": {
      "id": "ae129c37-d63c-455e-92ea-5c2a9e14e3b1",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:41:48.000Z",
      "stop_time": "2022-06-13T09:41:48.000Z"
    }
  },
  {
    "node": {
      "id": "d9cbe8d7-926d-4d84-b47d-66fddea0b80e",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:41:46.000Z",
      "stop_time": "2022-06-13T09:41:46.000Z"
    }
  },
  {
    "node": {
      "id": "0760f099-1178-4837-87d7-dc88561831c3",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:41:16.000Z",
      "stop_time": "2022-06-13T09:41:16.000Z"
    }
  },
  {
    "node": {
      "id": "84483e2f-e839-484e-9ba2-a2ce8b0b5a39",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:41:08.000Z",
      "stop_time": "2022-06-13T09:41:08.000Z"
    }
  },
  {
    "node": {
      "id": "4b5bf506-88ec-47bf-bbaa-c45b322f5323",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:41:03.000Z",
      "stop_time": "2022-06-13T09:41:03.000Z"
    }
  },
  {
    "node": {
      "id": "b9446033-19f8-4909-aa6a-22cd0e71e617",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:40:59.000Z",
      "stop_time": "2022-06-13T09:40:59.000Z"
    }
  },
  {
    "node": {
      "id": "31ffb2dc-b536-4bc9-8b53-61db95385c77",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:40:54.000Z",
      "stop_time": "2022-06-13T09:40:54.000Z"
    }
  },
  {
    "node": {
      "id": "c8398a50-342f-4fb6-9f52-a2f305d45163",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:40:48.000Z",
      "stop_time": "2022-06-13T09:40:48.000Z"
    }
  },
  {
    "node": {
      "id": "78f0bbdb-2893-415b-8ca9-0dab381796e4",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:40:43.000Z",
      "stop_time": "2022-06-13T09:40:43.000Z"
    }
  },
  {
    "node": {
      "id": "84abd040-3fd3-4cab-806d-987e646edd9e",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:40:38.000Z",
      "stop_time": "2022-06-13T09:40:38.000Z"
    }
  },
  {
    "node": {
      "id": "a535da8f-ec7a-443d-bcc6-5b275b75d140",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:40:33.000Z",
      "stop_time": "2022-06-13T09:40:33.000Z"
    }
  },
  {
    "node": {
      "id": "5dbb24c7-de60-4a55-8e7b-f747ba152024",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:40:28.000Z",
      "stop_time": "2022-06-13T09:40:28.000Z"
    }
  },
  {
    "node": {
      "id": "d79c0d3c-9425-4f26-971f-5cbf8b4cca7e",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:40:23.000Z",
      "stop_time": "2022-06-13T09:40:23.000Z"
    }
  },
  {
    "node": {
      "id": "3c5b6129-206d-4895-a0b9-d47e9b79fe4d",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:40:18.000Z",
      "stop_time": "2022-06-13T09:40:18.000Z"
    }
  },
  {
    "node": {
      "id": "cf6f7bb8-8509-4fe7-a5c6-8e9da197cd0e",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:40:17.000Z",
      "stop_time": "2022-06-13T09:40:17.000Z"
    }
  },
  {
    "node": {
      "id": "b57c6b0d-197a-40b1-bfec-0602e6e46d76",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:40:16.000Z",
      "stop_time": "2022-06-13T09:40:16.000Z"
    }
  },
  {
    "node": {
      "id": "d9fc1d79-31fa-4ed7-a467-349a4717a5e9",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:34:27.000Z",
      "stop_time": "2022-06-13T09:34:27.000Z"
    }
  },
  {
    "node": {
      "id": "2ab0e35f-eb51-4bf4-9620-c8913339e6db",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:34:25.000Z",
      "stop_time": "2022-06-13T09:34:25.000Z"
    }
  },
  {
    "node": {
      "id": "3e378359-e888-4ed1-83a1-fa99ea5eaa4f",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:34:24.000Z",
      "stop_time": "2022-06-13T09:34:24.000Z"
    }
  },
  {
    "node": {
      "id": "fc24e074-1a4a-44d4-a32e-0b024f5eb513",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:34:23.000Z",
      "stop_time": "2022-06-13T09:34:23.000Z"
    }
  },
  {
    "node": {
      "id": "055e1085-eb5f-4141-9945-4cfd0ac3398e",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:34:20.000Z",
      "stop_time": "2022-06-13T09:34:20.000Z"
    }
  },
  {
    "node": {
      "id": "a21bdc0b-e258-47fa-900c-0e9e109decca",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:33:27.000Z",
      "stop_time": "2022-06-13T09:33:27.000Z"
    }
  },
  {
    "node": {
      "id": "2cde407f-f81d-45d1-946f-643edb482688",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:33:25.000Z",
      "stop_time": "2022-06-13T09:33:25.000Z"
    }
  },
  {
    "node": {
      "id": "1ae6866f-996f-4ad8-905b-69d1bb000375",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:33:24.000Z",
      "stop_time": "2022-06-13T09:33:24.000Z"
    }
  },
  {
    "node": {
      "id": "e61a13af-cbd5-4ca8-9cbd-95091c3c60a2",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:33:14.000Z",
      "stop_time": "2022-06-13T09:33:14.000Z"
    }
  },
  {
    "node": {
      "id": "432d775f-024a-4dda-aefb-9e329f8bfc02",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:33:12.000Z",
      "stop_time": "2022-06-13T09:33:12.000Z"
    }
  },
  {
    "node": {
      "id": "513ab74e-7454-4555-9b08-63a549b51cc3",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:33:11.000Z",
      "stop_time": "2022-06-13T09:33:11.000Z"
    }
  },
  {
    "node": {
      "id": "6d200747-7043-4675-a4c5-f05b6c99ab91",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:33:04.000Z",
      "stop_time": "2022-06-13T09:33:04.000Z"
    }
  },
  {
    "node": {
      "id": "5d23077c-ef95-4f28-9afb-9c8814656c02",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:33:03.000Z",
      "stop_time": "2022-06-13T09:33:03.000Z"
    }
  },
  {
    "node": {
      "id": "92f6dab4-6a64-4c4b-93e6-6b393bb363e6",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:27:32.000Z",
      "stop_time": "2022-06-13T09:27:32.000Z"
    }
  },
  {
    "node": {
      "id": "7353f529-e7f3-455c-a834-c9870c73680e",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:27:29.000Z",
      "stop_time": "2022-06-13T09:27:29.000Z"
    }
  },
  {
    "node": {
      "id": "c35de78d-94fa-435e-8b21-0b85006f560c",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:27:28.000Z",
      "stop_time": "2022-06-13T09:27:28.000Z"
    }
  },
  {
    "node": {
      "id": "68b8d8b9-8f8e-4995-bcd7-327311801c92",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:27:26.000Z",
      "stop_time": "2022-06-13T09:27:26.000Z"
    }
  },
  {
    "node": {
      "id": "ed7a6583-f883-4828-bd38-0e3ab19ac132",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:27:25.000Z",
      "stop_time": "2022-06-13T09:27:25.000Z"
    }
  },
  {
    "node": {
      "id": "4a5d4d21-24ea-4399-b374-da1988c96ad3",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:27:23.000Z",
      "stop_time": "2022-06-13T09:27:23.000Z"
    }
  },
  {
    "node": {
      "id": "fbc93d58-3e59-4bd9-ac23-813f348eb8cd",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:27:22.000Z",
      "stop_time": "2022-06-13T09:27:22.000Z"
    }
  },
  {
    "node": {
      "id": "084e3862-56e1-477a-a87f-77379f6144cc",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:27:21.000Z",
      "stop_time": "2022-06-13T09:27:21.000Z"
    }
  },
  {
    "node": {
      "id": "30059978-aeb5-4e85-b943-bca82922958a",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:27:09.000Z",
      "stop_time": "2022-06-13T09:27:09.000Z"
    }
  },
  {
    "node": {
      "id": "7e78e2a3-6a34-4cbb-a77c-1c3b2793d2d5",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:27:07.000Z",
      "stop_time": "2022-06-13T09:27:07.000Z"
    }
  },
  {
    "node": {
      "id": "3c1a7554-15ad-4569-8d41-f8ac401d15e5",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:27:04.000Z",
      "stop_time": "2022-06-13T09:27:04.000Z"
    }
  },
  {
    "node": {
      "id": "65cd0cdd-b9d4-46bd-be8f-87b8c5a2f649",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:27:03.000Z",
      "stop_time": "2022-06-13T09:27:03.000Z"
    }
  },
  {
    "node": {
      "id": "c93e664b-67f2-4411-9b5a-9c716eb4ba7b",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:27:02.000Z",
      "stop_time": "2022-06-13T09:27:02.000Z"
    }
  },
  {
    "node": {
      "id": "69af240a-1931-41cf-8e84-0cb0100f764f",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:27:01.000Z",
      "stop_time": "2022-06-13T09:27:01.000Z"
    }
  },
  {
    "node": {
      "id": "e6dd5851-a48d-400e-9b95-fb5582deaf67",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:27:00.000Z",
      "stop_time": "2022-06-13T09:27:00.000Z"
    }
  },
  {
    "node": {
      "id": "3af998a2-b5b2-4292-946f-27a5cdcb1664",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:26:59.000Z",
      "stop_time": "2022-06-13T09:26:59.000Z"
    }
  },
  {
    "node": {
      "id": "6d46a6a8-8f74-4da6-8d3a-5e23d2915630",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:26:58.000Z",
      "stop_time": "2022-06-13T09:26:58.000Z"
    }
  },
  {
    "node": {
      "id": "e70e1604-a295-45f2-8798-3f0465ce0db1",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:12:09.000Z",
      "stop_time": "2022-06-13T09:12:09.000Z"
    }
  },
  {
    "node": {
      "id": "e8bdb5cd-5695-483d-b84c-fd5387decbc7",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:12:00.000Z",
      "stop_time": "2022-06-13T09:12:00.000Z"
    }
  },
  {
    "node": {
      "id": "cc89bceb-b372-4cf0-be62-1ee775518a36",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:11:59.000Z",
      "stop_time": "2022-06-13T09:11:59.000Z"
    }
  },
  {
    "node": {
      "id": "eae99f21-f5b0-4069-9c66-8444b570e628",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:11:58.000Z",
      "stop_time": "2022-06-13T09:11:58.000Z"
    }
  },
  {
    "node": {
      "id": "4c42e685-fa28-4f9c-a106-21ecbcc0d346",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:11:56.000Z",
      "stop_time": "2022-06-13T09:11:56.000Z"
    }
  },
  {
    "node": {
      "id": "b748c0bf-61f9-48ab-aa1a-e74c4875cfd8",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:11:55.000Z",
      "stop_time": "2022-06-13T09:11:55.000Z"
    }
  },
  {
    "node": {
      "id": "274ef954-5eac-4279-be03-8c9922625e11",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:11:53.000Z",
      "stop_time": "2022-06-13T09:11:53.000Z"
    }
  },
  {
    "node": {
      "id": "cc4f682b-688a-40f5-b35c-c3a8d229cb87",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:11:52.000Z",
      "stop_time": "2022-06-13T09:11:52.000Z"
    }
  },
  {
    "node": {
      "id": "7df2cf4a-1a75-4568-bc5c-efab4944eef6",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:11:51.000Z",
      "stop_time": "2022-06-13T09:11:51.000Z"
    }
  },
  {
    "node": {
      "id": "02bfc4d4-4caf-4af8-84c3-a13d672e4f49",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:11:50.000Z",
      "stop_time": "2022-06-13T09:11:50.000Z"
    }
  },
  {
    "node": {
      "id": "9eb87825-216f-467a-ae71-0da8d494a492",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:10:02.000Z",
      "stop_time": "2022-06-13T09:10:02.000Z"
    }
  },
  {
    "node": {
      "id": "3495a5d8-42fd-4624-9c94-f7ea0cb8ce0f",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:09:50.000Z",
      "stop_time": "2022-06-13T09:09:50.000Z"
    }
  },
  {
    "node": {
      "id": "b4dfb742-773c-4a83-ab0f-9d56fbeb9953",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:09:47.000Z",
      "stop_time": "2022-06-13T09:09:47.000Z"
    }
  },
  {
    "node": {
      "id": "08185296-043a-494b-a4b2-ac834aa831a9",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:09:46.000Z",
      "stop_time": "2022-06-13T09:09:46.000Z"
    }
  },
  {
    "node": {
      "id": "869b1a9e-87c9-40c1-bd6e-b02d1659dc62",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:09:45.000Z",
      "stop_time": "2022-06-13T09:09:45.000Z"
    }
  },
  {
    "node": {
      "id": "ce930cf5-d52f-445f-965b-4984a4aae82b",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:09:44.000Z",
      "stop_time": "2022-06-13T09:09:44.000Z"
    }
  },
  {
    "node": {
      "id": "a37a0d5a-c05b-4bba-a8d6-5c3fedb3ecf8",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:09:43.000Z",
      "stop_time": "2022-06-13T09:09:43.000Z"
    }
  },
  {
    "node": {
      "id": "13161619-41e8-40cd-a162-c3360f876064",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:09:42.000Z",
      "stop_time": "2022-06-13T09:09:42.000Z"
    }
  },
  {
    "node": {
      "id": "4fab5b7b-553e-41fc-a795-5f70f50ec212",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:09:31.000Z",
      "stop_time": "2022-06-13T09:09:31.000Z"
    }
  },
  {
    "node": {
      "id": "ebd45769-14fb-4bc7-ba76-9ca2ca1229e0",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:09:28.000Z",
      "stop_time": "2022-06-13T09:09:28.000Z"
    }
  },
  {
    "node": {
      "id": "2baae90c-9ad3-4810-9173-de95bcd2c39f",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:09:27.000Z",
      "stop_time": "2022-06-13T09:09:27.000Z"
    }
  },
  {
    "node": {
      "id": "298696e1-813f-4e99-bce0-270776557b78",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:09:23.000Z",
      "stop_time": "2022-06-13T09:09:23.000Z"
    }
  },
  {
    "node": {
      "id": "b4e22c39-69ff-47bf-9617-6b67e25be7e2",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:09:07.000Z",
      "stop_time": "2022-06-13T09:09:07.000Z"
    }
  },
  {
    "node": {
      "id": "db8f8441-a025-4378-a446-db0816b9d8e4",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:08:50.000Z",
      "stop_time": "2022-06-13T09:08:50.000Z"
    }
  },
  {
    "node": {
      "id": "91056013-cf4b-4d59-b49a-c29c38d2775b",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:08:45.000Z",
      "stop_time": "2022-06-13T09:08:45.000Z"
    }
  },
  {
    "node": {
      "id": "5c5c05b6-7c15-44e0-8d74-63c11ead60e5",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:08:40.000Z",
      "stop_time": "2022-06-13T09:08:40.000Z"
    }
  },
  {
    "node": {
      "id": "6d9e796c-31f6-471e-b115-5ca89f2590e3",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:07:22.000Z",
      "stop_time": "2022-06-13T09:07:22.000Z"
    }
  },
  {
    "node": {
      "id": "8d176901-d2d1-4dbc-b066-853070b4ec32",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:07:21.000Z",
      "stop_time": "2022-06-13T09:07:21.000Z"
    }
  },
  {
    "node": {
      "id": "70977a82-8533-449f-9f02-d132c4a6c811",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:07:19.000Z",
      "stop_time": "2022-06-13T09:07:19.000Z"
    }
  },
  {
    "node": {
      "id": "9fb1aaf9-5bbd-4944-8bae-8fb4684af732",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:06:46.000Z",
      "stop_time": "2022-06-13T09:06:46.000Z"
    }
  },
  {
    "node": {
      "id": "afa9aa16-789c-4ea7-8dfa-d4dc654796da",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:06:41.000Z",
      "stop_time": "2022-06-13T09:06:41.000Z"
    }
  },
  {
    "node": {
      "id": "5414ae96-043a-4de8-a921-a132c47aa92c",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:06:40.000Z",
      "stop_time": "2022-06-13T09:06:40.000Z"
    }
  },
  {
    "node": {
      "id": "bdf734a6-1312-4df1-9aa8-05fd45abcabe",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:06:38.000Z",
      "stop_time": "2022-06-13T09:06:38.000Z"
    }
  },
  {
    "node": {
      "id": "8e2ed6ba-6322-4ff1-9a78-037199d6e5f9",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:06:37.000Z",
      "stop_time": "2022-06-13T09:06:37.000Z"
    }
  },
  {
    "node": {
      "id": "1fb5daee-9e7f-481d-95f6-0feb8eefc47e",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:06:29.000Z",
      "stop_time": "2022-06-13T09:06:29.000Z"
    }
  },
  {
    "node": {
      "id": "a9ad3fb9-5814-4900-afa5-30a867badbe0",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:06:27.000Z",
      "stop_time": "2022-06-13T09:06:27.000Z"
    }
  },
  {
    "node": {
      "id": "2ba054b2-0367-48cd-b262-cb6049b3bd3b",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:06:22.000Z",
      "stop_time": "2022-06-13T09:06:22.000Z"
    }
  },
  {
    "node": {
      "id": "26bae666-889c-4d3f-a6c6-ad782c32903f",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:06:21.000Z",
      "stop_time": "2022-06-13T09:06:21.000Z"
    }
  },
  {
    "node": {
      "id": "8e5fb040-b382-4260-8832-2613fdb94403",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:06:20.000Z",
      "stop_time": "2022-06-13T09:06:20.000Z"
    }
  },
  {
    "node": {
      "id": "9778c993-fdab-4a60-b64f-f8c0fc812f02",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:06:18.000Z",
      "stop_time": "2022-06-13T09:06:18.000Z"
    }
  },
  {
    "node": {
      "id": "f8640c79-3462-4e39-a964-b7cf46daaae8",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:06:15.000Z",
      "stop_time": "2022-06-13T09:06:15.000Z"
    }
  },
  {
    "node": {
      "id": "074a1b63-b343-4deb-bf35-610c178d86f2",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:06:09.000Z",
      "stop_time": "2022-06-13T09:06:09.000Z"
    }
  },
  {
    "node": {
      "id": "b0221482-6509-43da-af74-9cca39467e92",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:06:08.000Z",
      "stop_time": "2022-06-13T09:06:08.000Z"
    }
  },
  {
    "node": {
      "id": "0fa64b20-ca44-4e4e-9f4b-94b1a2b5a194",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:06:05.000Z",
      "stop_time": "2022-06-13T09:06:05.000Z"
    }
  },
  {
    "node": {
      "id": "d115ea4c-eeaa-4385-8cea-a27676ddc8cb",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:06:04.000Z",
      "stop_time": "2022-06-13T09:06:04.000Z"
    }
  },
  {
    "node": {
      "id": "13cdb8eb-7cdf-4675-a982-c696412934d7",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:06:03.000Z",
      "stop_time": "2022-06-13T09:06:03.000Z"
    }
  },
  {
    "node": {
      "id": "6eda389f-1a58-4b91-ab26-5f93c0758424",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:05:55.000Z",
      "stop_time": "2022-06-13T09:05:55.000Z"
    }
  },
  {
    "node": {
      "id": "18c6ee45-aa86-468f-bed9-e8e748f03e3e",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:05:53.000Z",
      "stop_time": "2022-06-13T09:05:53.000Z"
    }
  },
  {
    "node": {
      "id": "52b68cae-8ead-4abe-bd84-c824364987e0",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:05:52.000Z",
      "stop_time": "2022-06-13T09:05:52.000Z"
    }
  },
  {
    "node": {
      "id": "215a72eb-c9c9-49b1-8299-11962653edfc",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:05:51.000Z",
      "stop_time": "2022-06-13T09:05:51.000Z"
    }
  },
  {
    "node": {
      "id": "b5532414-b08a-470a-823a-1f5ac29450c9",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:04:51.000Z",
      "stop_time": "2022-06-13T09:04:51.000Z"
    }
  },
  {
    "node": {
      "id": "82fb0cc9-6243-4905-9243-2a3c8980e808",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:04:50.000Z",
      "stop_time": "2022-06-13T09:04:50.000Z"
    }
  },
  {
    "node": {
      "id": "20110a36-3a85-4a26-bc30-2b28aa02c0cb",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:04:49.000Z",
      "stop_time": "2022-06-13T09:04:49.000Z"
    }
  },
  {
    "node": {
      "id": "46244b01-7963-4626-91b2-9740cab0be2b",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:04:47.000Z",
      "stop_time": "2022-06-13T09:04:47.000Z"
    }
  },
  {
    "node": {
      "id": "efc92ec9-c40a-40eb-a4e2-1016a74d5a7d",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:04:42.000Z",
      "stop_time": "2022-06-13T09:04:42.000Z"
    }
  },
  {
    "node": {
      "id": "13c3ab8e-5a59-4720-99a4-5c2452196b6a",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:04:38.000Z",
      "stop_time": "2022-06-13T09:04:38.000Z"
    }
  },
  {
    "node": {
      "id": "2a1fc726-6611-4d63-9c88-9b8a36a5bc13",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T09:04:37.000Z",
      "stop_time": "2022-06-13T09:04:37.000Z"
    }
  },
  {
    "node": {
      "id": "4d90cf5e-c4e7-47fc-ab4c-280aac402c07",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T08:38:56.000Z",
      "stop_time": "2022-06-13T08:38:56.000Z"
    }
  },
  {
    "node": {
      "id": "d3aefeb2-de2a-4a65-ba75-217a2e8b9aa9",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T07:55:30.000Z",
      "stop_time": "2022-06-13T07:55:30.000Z"
    }
  },
  {
    "node": {
      "id": "dafdc1fd-8f02-4524-ac3f-a4b377e58f3e",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T07:55:28.000Z",
      "stop_time": "2022-06-13T07:55:28.000Z"
    }
  },
  {
    "node": {
      "id": "1db0e017-6638-4085-9e96-fe93fedbd0e1",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T07:39:59.000Z",
      "stop_time": "2022-06-13T07:39:59.000Z"
    }
  },
  {
    "node": {
      "id": "40eaa382-28c9-4050-8244-6ba0cb0eeb05",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T07:39:59.000Z",
      "stop_time": "2022-06-13T07:39:59.000Z"
    }
  },
  {
    "node": {
      "id": "3d09b6f9-e526-4e7d-ba36-b5e2e87275ce",
      "relationship_type": "indicates",
      "start_time": "2022-06-13T07:39:59.000Z",
      "stop_time": "2022-06-13T07:39:59.000Z"
    }
  },
  {
    "node": {
      "id": "c199af82-035b-49ca-b324-efaeea008a0d",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T07:39:59.000Z",
      "stop_time": "2022-06-13T07:39:59.000Z"
    }
  },
  {
    "node": {
      "id": "90ad8957-8e15-41bc-87f9-07177d555e63",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T07:36:02.000Z",
      "stop_time": "2022-06-13T07:36:02.000Z"
    }
  },
  {
    "node": {
      "id": "7cceb1c6-da69-4a8f-baf8-30cebef7d673",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T07:36:00.000Z",
      "stop_time": "2022-06-13T07:36:00.000Z"
    }
  },
  {
    "node": {
      "id": "e83086d7-c63f-4065-83c8-5a076654e65b",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T07:35:22.000Z",
      "stop_time": "2022-06-13T07:35:22.000Z"
    }
  },
  {
    "node": {
      "id": "03981894-96de-4c1a-9968-ccf75e87b0d1",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T07:35:21.000Z",
      "stop_time": "2022-06-13T07:35:21.000Z"
    }
  },
  {
    "node": {
      "id": "7e8712d5-cd51-4331-9c03-1ffc3c136a5e",
      "relationship_type": "related-to",
      "start_time": "2022-06-13T07:35:20.000Z",
      "stop_time": "2022-06-13T07:35:20.000Z"
    }
  }
]

// if (obj[199]) {
//   console.log('done')
// }

let dateTimeArray = obj.map((o,i) => {
  if (obj[i+1]) {
    return {
      x: o['node'].start_time,
      y: moment.utc(moment(o['node'].start_time)
        .diff(moment(obj[i+1]['node'].start_time)))
        .format("HH:mm:ss")
    }
  }
})
// console.log(dateTimeArray);


const DATE_FORMATTER = 'DD/MM/YYYY';
const DATE_TIME_FORMATTER = 'DD/MM/YYYY HH:mm:ss';
function dateFormater(str) {
  if (!str) {
    return null;
  }
  /* eslint-disable */
  const [dd, mm, yyyy] = str.split(/(\-|\/)/g).filter((a) => {
    // @ts-ignore
    return !isNaN(a);
  });
  return `${+dd < 10 ? `0${+dd}` : dd}/${+mm < 10 ? `0${+mm}` : mm}/${yyyy}`;
  /* eslint-enable */
}

function dateTimeFormatter(str) {
  if (!str) {
    return null;
  }
  const [dd, mm, yyyy, HH, MM, SS] = str.split(/(\-|\/|\s|\:)/g).filter((a) => {
    a = a.trim();
    return a && !isNaN(a);
  });
  return `${+dd < 10 ? `0${+dd}` : dd}/${+mm < 10 ? `0${+mm}` : mm}/${yyyy} ${+HH < 10 ? `0${+HH}` : HH}:${+MM < 10 ? `0${+MM}` : MM}:${+SS < 10 ? `0${+SS}` : SS}`;
  /* eslint-enable */
}
// console.log(dateTimeFormatter('01/01/2020 00-00-00'));

// console.log(moment(dateTimeFormatter('12/07/2021 21/36/45'), DATE_TIME_FORMATTER, true).isValid());
// console.log(moment('12/07/2021 21/36/45', DATE_TIME_FORMATTER, true).isValid());
// console.log(moment('02/31/2021', DATE_FORMATTER, true).isValid());

// console.log('Validate', moment('15/01/0000', DATE_FORMATTER, true).isValid());
// console.log(moment('22/10/0000', DATE_FORMATTER).isAfter(moment('01/01/1970', DATE_FORMATTER), 'year'));
// console.log(moment('2010-10-20').isAfter('2010-10-19', 'year')); // true
const MINIMUM_DATE = '01/01/2000';
console.log(
  moment(dateFormater('01/01/1999'), DATE_FORMATTER, true).isBefore(
    MINIMUM_DATE,
    'year',
  ),
);

// console.log('IsAfter', moment('15/01/1978').isAfter('01/011970', 'year'));
// console.log(moment().format('DD/MM/YYYY HH:mm:ss'));
// console.log(moment('23/08/2022 13:26:15', 'DD/MM/YYYY HH:mm:ss', true).isValid());
// console.log(moment('15/01/2021 13:21:46', 'YYYY-MM-DD HH:mm:ss', true).format('YYYY-MM-DD HH:mm:ss'));
// const startFrom = moment('15/07/202', DATE_FORMATTER, true) > moment('15/07/2022', DATE_FORMATTER, true);

// const isValid = moment(dateTimeFormatter('12/08/2022 16:25:41'), DATE_TIME_FORMATTER, true) >
//   moment(dateTimeFormatter('12/08/2022 13:25:41'), DATE_TIME_FORMATTER, true);
// console.log(isValid);

const convertSiteToUtcToday = (date) => {
  if (date) {
    return moment(date)
      // .startOf('day')
      .utc()
      .format('YYYY-MM-DDTHH:mm:ss');
  }
  // return moment()
  //   .startOf('day')
  //   .utc()
  //   .format('YYYY-MM-DDTHH:mm:ss');
};

const convertUtcTodayToSite = (date) => {
  return moment(date);
};

const createDateWithDateFormatter = (date) => {
  return moment(date)
    .startOf('day')
    .utc()
    .format('YYYY-MM-DDTHH:mm:ss');
};

// console.log(convertUtcTodayToSite('12/08/2022 18:25:41'));

// console.log(convertSiteToUtcToday('12/08/2022 12:25:41'));
// console.log(convertSiteToUtcToday('12/08/2022 13:56:24'));
//
// console.log(moment('2022-12-08T07:25:41'))
//
// console.log(moment.utc().format())
// console.log(moment().format())
// console.log(moment().local().format())