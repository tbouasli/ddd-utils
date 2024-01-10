export interface IController<I extends Request, O extends Response> {
    execute(request: I): Promise<O> | O
}