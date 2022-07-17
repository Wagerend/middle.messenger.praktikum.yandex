export function queryStringify(data) {
    if(!data){
      return '';
    }
    const param = Object.entries(data);
    return param.reduce(
      (query, [key, value], index)=> query.concat(`${key}=${value}${index === param.length-1? '':'&'}`),
      '?'
    );
}