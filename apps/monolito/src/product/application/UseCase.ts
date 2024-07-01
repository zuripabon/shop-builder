export interface UseCaseQuery<Q> {
  data: Q;
}

export interface UseCase<Q> {
  execute(useCaseQuery: UseCaseQuery<Q>): Promise<void>;
}
