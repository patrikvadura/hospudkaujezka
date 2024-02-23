import { fetchAPI } from "@/app/lib/fetch-api";

export async function getPageBySlug(slug?: string, populate?: string[]):Promise<any> {
    const token:string|undefined = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

    const path:any = `/pages`;
    const urlParamsObject:{filters?: {slug: string}, populate?: string[]} = slug ? {filters: {slug}, populate} : {populate};
    const options:{headers: {Authorization: string}} = {headers: {Authorization: `Bearer ${token}`}};

    return await fetchAPI(path, urlParamsObject, options);
}

export async function getPage(slug?: string, populate?: string[]):Promise<any> {
    const token:string|undefined = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

    const path:any = `/pages`;
    const urlParamsObject:{filters?: {slug: string}, populate?: string[]} = slug ? {filters: {slug}, populate} : {populate};
    const options:{headers: {Authorization: string}} = {headers: {Authorization: `Bearer ${token}`}};

    return await fetchAPI(path, urlParamsObject, options);
}

export async function getPost(slug?: string, populate?: string[]):Promise<any> {
    const token:string|undefined = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

    const path:any = `/posts`;
    const urlParamsObject:{filters?: {slug: string}, populate?: string[]} = slug ? {filters: {slug}, populate} : {populate};
    const options:{headers: {Authorization: string}} = {headers: {Authorization: `Bearer ${token}`}};

    return await fetchAPI(path, urlParamsObject, options);
}
