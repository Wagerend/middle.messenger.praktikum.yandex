export default function get(obj, path) {
    const keys = path.split('.');
    return keys.reduce((result, key) => result[key], obj);
}
