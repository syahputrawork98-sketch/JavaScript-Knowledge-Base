# CH-02: Execution Calls

> **"Call expressions dan `new` membuka jalur eksekusi dari expression menuju invocation atau construction."**

**Source Hub**:
- [ECMA-262: CallExpression](https://tc39.es/ecma262/#prod-CallExpression)
- [ECMA-262: The `new` Operator](https://tc39.es/ecma262/#sec-new-operator)

```mermaid
graph TD
    Ref[Resolve callable or constructor reference] --> Mode{Call or construct?}
    Mode --> Call[Invoke [[Call]]]
    Mode --> New[Invoke [[Construct]]]
    Call --> Result[Return execution result]
    New --> Result
```

## Lab Praktis
Buka file `examples/01_execution_calls_lab.js` untuk melihat perbedaan hasil call biasa dan invocation via `new`.

*Status: [x] Complete | [status.md](../../../docs/status.md)*
