export interface IQuery<TResult> {
    execute(): TResult;
}