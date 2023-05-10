import { Url } from "./Url";

export interface PagedResponse {
    totalPages: number;
    urls: Url[];
}