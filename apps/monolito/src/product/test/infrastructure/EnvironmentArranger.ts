export interface EnvironmentArranger {
  before(): Promise<void>;
  after(): Promise<void>;
}
