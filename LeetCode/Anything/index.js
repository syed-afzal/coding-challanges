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
  if (encode.length === 0) return;
  let result = {
    id: encode.shift(),
    edges: {},
  }
  let ref = result;
  while(encode.length > 0) {
    ref.edges = {
      id: encode.shift(),
      edges: []
    };
    ref = ref.edges;
  }
  return result;
}

// console.log(decode(encoded));

const traversing = (arr) => {

  if (arr[0].edges.length > 0){
    console.log(arr[0].id);
    return traversing(arr[0].edges)
  } else {
    console.log(arr[0].id);
  }
}

// traversing(array);

// if (validate === 'required_without') {
//   if (
//     !record[field].value &&
//     !fields.some((fld: string) => record[fld] && record[fld].value)
//   ) {
//     [...fields, field].forEach((key) => {
//       record[key].errorMessage = error;
//     });
//     break;
//   } else {
//     [...fields, field].forEach((key) => {
//       record[key].errorMessage = '';
//     });
//   }
// }

const obj2 = {
  worker:1,
  crew:2,
  // zone:'ad',
  // floor:'type',
  // locationGroup:'type',
};

const obj3 = {
  'll':'a'
}

const obj = {
  id:1,
  email:''
}

const fields = ['worker', 'crew'];
const fields2 = ['zone', 'floor', 'locationGroup'];
// console.log(
//   obj['id'] && fields.every(fld => obj[fld]) || !obj['id'] && fields.every(fld => !obj[fld])
// );

let len = fields.filter(fld => obj2[fld]).length;
console.log(len);
console.log(5 !== 1);