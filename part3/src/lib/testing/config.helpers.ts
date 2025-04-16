import { TestBed, TestBedStatic } from '@angular/core/testing';

type CompilerOptions = Partial<{
  providers: any[]
  useJit: boolean
}>;
export type ConfigureFn = (testBed: typeof TestBed) => void;

export const configureTests = (configure: ConfigureFn, compilerOptions: CompilerOptions = {}) => {
  TestBed.configureTestingModule({
    providers: compilerOptions.providers ?? [],
  });
  configure(TestBed);
  return TestBed.compileComponents().then(() => TestBed);
};
