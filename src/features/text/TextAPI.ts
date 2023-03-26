export default async function fetchUtil(url: RequestInfo | URL) {
    return fetch(url).then((res) => res.json());
}
