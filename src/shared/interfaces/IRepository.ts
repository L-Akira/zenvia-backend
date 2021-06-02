export default interface IRepository {
    collect(object: any): void;
    distribute(): Array<any>;
}