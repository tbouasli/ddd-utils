export interface ICommand<T> {
    execute(data: T): void;
}