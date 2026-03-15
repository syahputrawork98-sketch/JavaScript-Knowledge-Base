# Spec Mapping B04 (70 Section)

Dokumen ini memetakan blueprint B04 ke seluruh section ECMAScript Clause 15 (`15.1-15.10`) tanpa sisa.

## Baseline Sumber

- Referensi: ECMAScript 2025 multipage (`tc39.es/ecma262/2025/multipage/ecmascript-language-functions-and-classes.html`).
- Tanggal snapshot mapping: 2026-03-11.
- Total cakupan: `70` section (`15.*`).

## Master List Clause 15 (70)

### 15.1 Parameter Lists (6)

1. `15.1` Parameter Lists
2. `15.1.1` Static Semantics: Early Errors
3. `15.1.2` Static Semantics: ContainsExpression
4. `15.1.3` Static Semantics: IsSimpleParameterList
5. `15.1.4` Static Semantics: HasInitializer
6. `15.1.5` Static Semantics: ExpectedArgumentCount

### 15.2 Function Definitions (7)

1. `15.2` Function Definitions
2. `15.2.1` Static Semantics: Early Errors
3. `15.2.2` Static Semantics: FunctionBodyContainsUseStrict
4. `15.2.3` Runtime Semantics: EvaluateFunctionBody
5. `15.2.4` Runtime Semantics: InstantiateOrdinaryFunctionObject
6. `15.2.5` Runtime Semantics: InstantiateOrdinaryFunctionExpression
7. `15.2.6` Runtime Semantics: Evaluation

### 15.3 Arrow Function Definitions (6)

1. `15.3` Arrow Function Definitions
2. `15.3.1` Static Semantics: Early Errors
3. `15.3.2` Static Semantics: ConciseBodyContainsUseStrict
4. `15.3.3` Runtime Semantics: EvaluateConciseBody
5. `15.3.4` Runtime Semantics: InstantiateArrowFunctionExpression
6. `15.3.5` Runtime Semantics: Evaluation

### 15.4 Method Definitions (6)

1. `15.4` Method Definitions
2. `15.4.1` Static Semantics: Early Errors
3. `15.4.2` Static Semantics: HasDirectSuper
4. `15.4.3` Static Semantics: SpecialMethod
5. `15.4.4` Runtime Semantics: DefineMethod
6. `15.4.5` Runtime Semantics: MethodDefinitionEvaluation

### 15.5 Generator Function Definitions (6)

1. `15.5` Generator Function Definitions
2. `15.5.1` Static Semantics: Early Errors
3. `15.5.2` Runtime Semantics: EvaluateGeneratorBody
4. `15.5.3` Runtime Semantics: InstantiateGeneratorFunctionObject
5. `15.5.4` Runtime Semantics: InstantiateGeneratorFunctionExpression
6. `15.5.5` Runtime Semantics: Evaluation

### 15.6 Async Generator Function Definitions (6)

1. `15.6` Async Generator Function Definitions
2. `15.6.1` Static Semantics: Early Errors
3. `15.6.2` Runtime Semantics: EvaluateAsyncGeneratorBody
4. `15.6.3` Runtime Semantics: InstantiateAsyncGeneratorFunctionObject
5. `15.6.4` Runtime Semantics: InstantiateAsyncGeneratorFunctionExpression
6. `15.6.5` Runtime Semantics: Evaluation

### 15.7 Class Definitions (17)

1. `15.7` Class Definitions
2. `15.7.1` Static Semantics: Early Errors
3. `15.7.2` Static Semantics: ClassElementKind
4. `15.7.3` Static Semantics: ConstructorMethod
5. `15.7.4` Static Semantics: IsStatic
6. `15.7.5` Static Semantics: NonConstructorElements
7. `15.7.6` Static Semantics: PrototypePropertyNameList
8. `15.7.7` Static Semantics: AllPrivateIdentifiersValid
9. `15.7.8` Static Semantics: PrivateBoundIdentifiers
10. `15.7.9` Static Semantics: ContainsArguments
11. `15.7.10` Runtime Semantics: ClassFieldDefinitionEvaluation
12. `15.7.11` Runtime Semantics: ClassStaticBlockDefinitionEvaluation
13. `15.7.12` Runtime Semantics: EvaluateClassStaticBlockBody
14. `15.7.13` Runtime Semantics: ClassElementEvaluation
15. `15.7.14` Runtime Semantics: ClassDefinitionEvaluation
16. `15.7.15` Runtime Semantics: BindingClassDeclarationEvaluation
17. `15.7.16` Runtime Semantics: Evaluation

### 15.8 Async Function Definitions (6)

1. `15.8` Async Function Definitions
2. `15.8.1` Static Semantics: Early Errors
3. `15.8.2` Runtime Semantics: InstantiateAsyncFunctionObject
4. `15.8.3` Runtime Semantics: InstantiateAsyncFunctionExpression
5. `15.8.4` Runtime Semantics: EvaluateAsyncFunctionBody
6. `15.8.5` Runtime Semantics: Evaluation

### 15.9 Async Arrow Function Definitions (6)

1. `15.9` Async Arrow Function Definitions
2. `15.9.1` Static Semantics: Early Errors
3. `15.9.2` Static Semantics: AsyncConciseBodyContainsUseStrict
4. `15.9.3` Runtime Semantics: EvaluateAsyncConciseBody
5. `15.9.4` Runtime Semantics: InstantiateAsyncArrowFunctionExpression
6. `15.9.5` Runtime Semantics: Evaluation

### 15.10 Tail Position Calls (4)

1. `15.10` Tail Position Calls
2. `15.10.1` Static Semantics: IsInTailPosition ( call )
3. `15.10.2` Static Semantics: HasCallInTailPosition
4. `15.10.3` PrepareForTailCall ( )

## Mapping Ke Blueprint Bab B04 (C01-C20)

1. `C01-parameter-lists-dasar-dan-early-errors.md`  
   Cakupan: `15.1`, `15.1.1`, `15.1.2`
2. `C02-parameter-lists-initializer-dan-expected-argument-count.md`  
   Cakupan: `15.1.3`, `15.1.4`, `15.1.5`
3. `C03-function-definitions-bentuk-dan-aturan-strict.md`  
   Cakupan: `15.2`, `15.2.1`, `15.2.2`
4. `C04-function-definitions-runtime-pipeline.md`  
   Cakupan: `15.2.3`, `15.2.4`, `15.2.5`, `15.2.6`
5. `C05-arrow-function-bentuk-dan-early-errors.md`  
   Cakupan: `15.3`, `15.3.1`, `15.3.2`
6. `C06-arrow-function-runtime-dan-evaluation.md`  
   Cakupan: `15.3.3`, `15.3.4`, `15.3.5`
7. `C07-method-definitions-dasar-dan-direct-super.md`  
   Cakupan: `15.4`, `15.4.1`, `15.4.2`
8. `C08-method-definitions-runtime-dan-evaluasi.md`  
   Cakupan: `15.4.3`, `15.4.4`, `15.4.5`
9. `C09-generator-functions-dasar.md`  
   Cakupan: `15.5`, `15.5.1`, `15.5.2`
10. `C10-generator-functions-instantiation-dan-evaluation.md`  
    Cakupan: `15.5.3`, `15.5.4`, `15.5.5`
11. `C11-async-generator-functions-dasar.md`  
    Cakupan: `15.6`, `15.6.1`, `15.6.2`
12. `C12-async-generator-functions-instantiation-dan-evaluation.md`  
    Cakupan: `15.6.3`, `15.6.4`, `15.6.5`
13. `C13-class-definitions-static-semantics-bagian-1.md`  
    Cakupan: `15.7`, `15.7.1`, `15.7.2`, `15.7.3`
14. `C14-class-definitions-static-semantics-bagian-2.md`  
    Cakupan: `15.7.4`, `15.7.5`, `15.7.6`, `15.7.7`
15. `C15-class-definitions-static-runtime-bridge.md`  
    Cakupan: `15.7.8`, `15.7.9`, `15.7.10`, `15.7.11`
16. `C16-class-definitions-runtime-pipeline.md`  
    Cakupan: `15.7.12`, `15.7.13`, `15.7.14`, `15.7.15`, `15.7.16`
17. `C17-async-function-definitions-syntax-dan-instantiation.md`  
    Cakupan: `15.8`, `15.8.1`, `15.8.2`
18. `C18-async-function-definitions-body-dan-evaluation.md`  
    Cakupan: `15.8.3`, `15.8.4`, `15.8.5`
19. `C19-async-arrow-function-definitions-end-to-end.md`  
    Cakupan: `15.9`, `15.9.1`, `15.9.2`, `15.9.3`, `15.9.4`, `15.9.5`
20. `C20-tail-position-calls-dasar-praktis.md`  
    Cakupan: `15.10`, `15.10.1`, `15.10.2`, `15.10.3`

## Ringkasan Coverage

- Jumlah bab blueprint: `20`
- Jumlah section tercakup: `70`
- Coverage status: `100%` Clause 15 (`15.1-15.10`)
