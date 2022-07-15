const array = [
  {
    id:1,
    edges:[
      {
        id:2,
        edges:[
          {
            id:3,
            edges:[
              {
                id:4,
                edges:[]
              }
            ]
          }
        ]
      }
    ],
  }
]

const encode = (array) => {
  let result = [];
 while(array[0].edges.length > 0) {
   result.push(array[0].id);
   array = array[0].edges;
 }
 result.push(array[0].id);
 return result;
}

const encoded = encode(array);

const decode = (encode) => {
  let result = [];
  while(encode.length > 0) {
    result.push({
      id: encode.pop(),
      edges: []
    });
  }
  return result;
}

console.log(decode(encoded));