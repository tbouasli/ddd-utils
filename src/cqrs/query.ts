export interface IQuery<TRequest, TResult> {
    execute(query: TRequest): TResult;
}