import { Methods } from "./Methods";

export default interface IRoutes {
    path: string,
    methods: Methods,
    handler: any,
}