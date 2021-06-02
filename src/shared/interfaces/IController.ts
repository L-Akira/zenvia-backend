import IRoutes from "./IRoutes";

export default interface IController {
    commomPath: string;
    routes: IRoutes[];
}